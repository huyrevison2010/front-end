export class NumberUtils {
    static isNumber(plain: any) {
        return !isNaN(plain);
    }

    static isCoordinates(plain: any) {
        return /^-?([1-8]?[1-9]|[1-9]0)\.{1}\d{1,15}/g.test(plain) || /^-?(([-+]?)([\d]{1,3})((\.)(\d+))?)/g.test(plain);
    }

    static toCurrency(num: number, suffix: string = 'đ') {
        if (typeof num !== 'number' || Number.isNaN(num)) return '--';
        let output = new Intl.NumberFormat('en-GB').format(num);
        if (suffix) output = `${output}${suffix}`;
        return output;
    }
}