// https://medium.com/@jameslockwood/getting-react-16-jest-and-enzyme-to-play-nicely-cc6d216ce3c4
global.requestAnimationFrame = callback => setTimeout(callback, 0);
