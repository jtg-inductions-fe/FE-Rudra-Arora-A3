export const numberToAlphabet = (num: number): string => {
    let result = '';

    if (num < 0) {
        return result;
    }

    while (num > 0) {
        num--;
        result = String.fromCharCode(65 + (num % 26)) + result;
        num = Math.floor(num / 26);
    }

    return result;
};
