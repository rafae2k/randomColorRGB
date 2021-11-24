// Create an random rgb value and return an array of strings with the size of the number parameter assigned
function randomColor(numberOfColors) {
  let red;
  let green;
  let blue;
  let color = [];
  const arrColors = [];

  for (let index = 0; index < numberOfColors; index += 1) {
    red = Math.floor(Math.random() * 255);
    green = Math.floor(Math.random() * 255);
    blue = Math.floor(Math.random() * 255);
    color = [`rgb(${red}`, green, `${blue})`];
    const rgb = color.join(', ');
    arrColors.push(rgb);
  }

  return arrColors;
}
