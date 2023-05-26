function getRandomColorBetween(startColor, endColor) {
    const startRGB = hexToRgb(startColor);
    const endRGB = hexToRgb(endColor);
  
    const randomColor = {
      r: Math.floor(Math.random() * (endRGB.r - startRGB.r + 1)) + startRGB.r,
      g: Math.floor(Math.random() * (endRGB.g - startRGB.g + 1)) + startRGB.g,
      b: Math.floor(Math.random() * (endRGB.b - startRGB.b + 1)) + startRGB.b
    };
  
    return rgbToHex(randomColor.r, randomColor.g, randomColor.b);
  }
  
  function hexToRgb(hex) {
    const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return result ? {
      r: parseInt(result[1], 16),
      g: parseInt(result[2], 16),
      b: parseInt(result[3], 16)
    } : null;
  }
  
  function rgbToHex(r, g, b) {
    return `#${componentToHex(r)}${componentToHex(g)}${componentToHex(b)}`;
  }
  
  function componentToHex(c) {
    const hex = c.toString(16);
    return hex.length === 1 ? "0" + hex : hex;
  }