export const getSumOfArrayElements = array => {
    return array.reduce((acc, val) => {
        return acc + val;
    }, 0);
};