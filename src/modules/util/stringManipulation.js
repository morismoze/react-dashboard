export const extractFirstLetter = word => {
    return word !== undefined && word !== null ? word.charAt(0) : '';
}

export const capitalizeFirstLetter = word => {
    return word[0].toUpperCase() + word.slice(1);
}