export const getRandomColor = colorNamesArray => {
  const colorKeys = Object.keys(colorNamesArray).filter(colorName =>
      colorName !== 'white' && colorName !== 'extraLightGray' && colorName !== 'extraLightBlue' && colorName !== 'lightGray');
  return colorKeys[Math.floor(Math.random() * colorKeys.length)];
};