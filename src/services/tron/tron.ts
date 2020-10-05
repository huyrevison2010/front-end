interface IConfig {
  tether: string
  ida: string
  imd: string
  defi: string
}

interface IContracts {
  tether: IToken
  ida: IToken
  imd: IToken
  defi: IDefi
}

interface IToken {
  balanceOf(who: string): { call(): Promise<any> }
  approve(spender: string, amount: string): { send(): Promise<string> }
  allowance(owner: string, spender: string): { call(): Promise<any> }
}

interface IDefi {
  getInvestor(address: string): { call(): Promise<IInvestorTronResponse> }

  register(presenterAddress: string, investAmount: string, usingTether: boolean): { send(): Promise<string> }

  investorWithdrawTether(amount: string): { send(): Promise<string> }
  investorWithdrawIda(amount: string): { send(): Promise<string> }

  invest(amount: string, usingTether: boolean): { send(): Promise<string> }

  isInvestorExists(investorAddress: string): { call(): Promise<any> }
  getTotalDailyIncome(investorAddress: string): { call(): Promise<any> }
  getRevenue(investorAddress: string): { call(): Promise<any> }
  getMaturedDailyIncome(investorAddress: string): { call(): Promise<any> }
  startAt(): { call(): Promise<any> }
}

export class Tron {
  private tronWeb?: ITronWeb
  private config?: IConfig
  private contracts?: IContracts

  private wait() {
    return new Promise(resolve => {
      setTimeout(resolve, 1000)
    })
  }

  setConfig(config: IConfig) {
    this.config = config
  }

  async getContracts() {
    if (this.contracts) return this.contracts
    const tether = await this.tronWeb!.contract().at(this.config!.tether)
    const ida = await this.tronWeb!.contract().at(this.config!.ida)
    const imd = await this.tronWeb!.contract().at(this.config!.imd)
    const defi = await this.tronWeb!.contract().at(this.config!.defi)
    this.contracts = { tether, ida, imd, defi }
  }

  get installed() { return !!this.getTronWeb() }

  get tether() { return this.contracts!.tether }
  get ida() { return this.contracts!.ida }
  get imd() { return this.contracts!.imd }
  get defi() { return this.contracts!.defi }

  getTronWeb(): ITronWeb {
    return (window as any).tronWeb
  }

  async connect(): Promise<'INSTALL_REQUIRED' | 'SIGN_IN_REQUIRED' | 'READY'> {
    await this.wait()
    if (!this.installed) return 'INSTALL_REQUIRED'
    if (!this.getTronWeb().ready) return 'SIGN_IN_REQUIRED'
    this.tronWeb = this.getTronWeb()
    return 'READY'
  }

  getAddress() {
    return this.tronWeb?.defaultAddress.base58 || ''
  }

  async isInvestorExist(investorAddress: string): Promise<boolean> {
    return this.defi.isInvestorExists(investorAddress).call();
  }

  async getMaturedDailyIncome(): Promise<number> {
    const value = await this.defi.getMaturedDailyIncome(this.getAddress()).call();
    return +(value.toString());
  }

  async getTotalDailyIncome(): Promise<number> {
    const currentAddress = this.getAddress();
    const value = await this.defi.getTotalDailyIncome(currentAddress).call();
    return +(value.toString());
  }

  async getRevenue(): Promise<number> {
    const currentAddress = this.getAddress();
    const value = await this.defi.getRevenue(currentAddress).call();
    return +(value.toString());
  }

  async getStartAt(): Promise<string> {
    const value = await this.defi.startAt().call();
    return value.toString();
  }

  async register(presenterAddress: string, amount: string, usingTether: boolean): Promise<string> {
    return this.defi.register(presenterAddress, amount, usingTether).send()
  }

  async investorWithdrawTether(amount: string): Promise<string> {
    return this.defi.investorWithdrawTether(amount).send()
  }

  async investorWithdrawIda(amount: string): Promise<string> {
    return this.defi.investorWithdrawIda(amount).send()
  }

  async invest(amount: string, usingTether: boolean): Promise<string> {
    return this.contracts!.defi.invest(amount, usingTether).send()
  }

  async getInvestor(): Promise<{}> {
    const currentAddress = this.getAddress()
    const investor = await this.defi.getInvestor(currentAddress!).call()
    const {
      balance,
      invested,
      revenue,
      idaWithdrew,
      agentF1,
      agentF2,
      rank,
    } = investor

    return {
      balance: balance.toString(),
      invested: invested.toString(),
      revenue: revenue.toString(),
      idaWithdrew: idaWithdrew.toString(),
      agentF1: agentF1.toString(),
      agentF2: agentF2.toString(),
      rank: rank.toString(),
    }
  }

  private convertHexToBase58(hexAddress: string) {
    const byteArray = (this.tronWeb as any).utils.code.hexStr2byteArray(hexAddress.replace('0x', '41'))
    return (this.tronWeb as any).utils.crypto.getBase58CheckAddress(byteArray)
  }

  async getTransactionStatus(txHash: string) {
    const data = await this.tronWeb?.trx.getTransactionInfo(txHash)
    return data
  }

  async approveTether(amount: string): Promise<string> {
    return this.contracts!.tether.approve(this.config?.defi!, amount).send()
  }

  async approveIMD(amount: string): Promise<string> {
    return this.contracts!.imd.approve(this.config?.defi!, amount).send()
  }

  async allowanceTether(): Promise<string> {
    const address = await this.getAddress()
    const response = await this.tether!.allowance(address!, this.config?.defi!).call()
    return response.remaining.toString()
  }

  async allowanceIMD(): Promise<string> {
    const address = await this.getAddress()
    const response = await this.imd!.allowance(address!, this.config?.defi!).call()
    return response.remaining.toString()
  }

  async balanceOfTether(): Promise<string> {
    const address = await this.getAddress()
    const response = await this.tether!.balanceOf(address!).call()
    return response.toString()
  }

  async balanceOfImd(): Promise<string> {
    const address = await this.getAddress()
    const response = await this.imd!.balanceOf(address!).call()
    return response.toString()
  }
}

const tron = new Tron()

export default tron

export interface ITronWeb {
  ready: boolean
  defaultAddress: {
    base58: string
  }
  trx: {
    sign(hex: string): Promise<string>
    getTransactionInfo(hash: string): Promise<{}>
  }
  contract(): { at(address: string): Promise<any> }
}

interface IInvestorTronResponse {
  balance: { toString(): string }
  rank: { toString(): string }
  level: { toString(): string }
  revenue: { toString(): string }
  idaWithdrew: { toString(): string }
  invested: { toString(): string }
  agentF1: { toString(): string }
  agentF2: { toString(): string }
}

try {
  window.addEventListener('message', function (e) {
    if (e.data.message && e.data.message.action === "setAccount") {
      const newAddress = e.data.message.data.address
      const isAddressChanged = newAddress !== tron.getAddress()
      if (isAddressChanged) window.location.reload()
    }

    if (e.data.message && e.data.message.action === "setNode") {
      window.location.reload()
    }
  })
} catch (error) { }