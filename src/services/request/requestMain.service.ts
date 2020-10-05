import Axios, { AxiosError } from 'axios';
import { getEnv } from '../../AppConfig';

import { translate } from '../../languages';
import { IAlertPayload } from '../../modules/alert';
import { ObjectUtils } from '../../modules/utils';
import { CookieService, ECookieVariable } from '../cookie';

export class RequestMainError extends Error {
    status: number; message: string; errors: any; error: any; alert: IAlertPayload;

    constructor(error: AxiosError) {
        super(error as any);
        this.message = ObjectUtils.getIn(error, 'response.data.message', (message: string) => translate(message)) || translate('unknown-error-from-the-system');
        this.errors = ObjectUtils.getIn(error, 'response.data.errors');
        this.status = ObjectUtils.getIn(error, 'response.status', 3001);

        // Handle axios error
        if (error.code === 'ECONNABORTED' || error.message === "Network Error") this.message = translate('network-error');
        else if (error.response && typeof error.response.data === 'string') this.message = error.response.data;

        this.error = {
            message: this.message,
            errors: this.errors,
            status: this.status
        }

        this.alert = {
            message: this.message,
            type: 'danger',
        }
    }
}

export class RequestMainService {
    static getURL(subURL: string) { return `${getEnv('URL_API_MAIN_CLIENT_SIDE')}${subURL}` }

    static getConfigs(params = {}) {
        const investorAddress = CookieService.get(ECookieVariable.INVESTOR_ADDRESS);
        return {
            params: Object.assign(ObjectUtils.cleanObj(params), {}),
            timeout: 20000,
            headers: ObjectUtils.cleanObj({
                "Authorization": `Bearer ${investorAddress}`
            })
        }
    }

    static async get(subURL: string, params = {}) {
        return Axios.get(this.getURL(subURL), this.getConfigs(params))
            .then(res => res.data)
            .catch(err => {
                throw new RequestMainError(err)
            });
    }

    static async post(subURL: string, payload = {}) {
        return Axios.post(this.getURL(subURL), payload, this.getConfigs())
            .then(res => res.data)
            .catch(err => {
                throw new RequestMainError(err)
            });
    }

    static async put(subURL: string, payload = {}) {
        return Axios.put(this.getURL(subURL), payload, this.getConfigs())
            .then(res => res.data)
            .catch(err => {
                throw new RequestMainError(err)
            });
    }

    static async delete(subURL: string) {
        return Axios.delete(this.getURL(subURL), this.getConfigs())
            .then(res => res.data)
            .catch(err => {
                throw new RequestMainError(err)
            });
    }
}