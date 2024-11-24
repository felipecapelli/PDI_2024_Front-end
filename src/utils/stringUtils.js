// src/utils/stringUtils.js

/**
 * Add spaces among uppercase letters from a string
 * @param {string} headerName - A string to be set
 * @returns {string} - A string setted with spaces among uppercase letters
 */
export function addSpacesAmongLetters(headerName) {
    const headerNameWithoutTheFirstLetter = headerName.slice(1);

    const headerNameWithSpacesAdded = 
        [...headerNameWithoutTheFirstLetter].map((letter, index) => {
            if (letter === letter.toUpperCase() && /[A-Z]/.test(letter) && !(letter === 'D' && headerNameWithoutTheFirstLetter[index - 1] === 'I')) {
                return ` ${letter}`;
            }
            return letter;
        });

    const headerNameWithTheFirstLetterReadded = [headerName[0].toUpperCase(), ...headerNameWithSpacesAdded];
    return headerNameWithTheFirstLetterReadded.join('');
}
