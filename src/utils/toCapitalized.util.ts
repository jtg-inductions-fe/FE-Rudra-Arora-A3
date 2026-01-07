export const toCapitalized = (word: string): string => {
    const updatedWord = word.charAt(0).toUpperCase() + word.slice(1);
    return updatedWord;
};
