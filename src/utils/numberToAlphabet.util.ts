export const numberToAlphabet = (num: number): string => {
    let result = '';

    while (num > 0) {
        num--;
        result += String.fromCharCode(65 + (num % 26));
        num = Math.floor(num / 26);
    }

    return result;
};
