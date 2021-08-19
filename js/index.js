$(function() {
  

  function getColor() {
    let red = Math.floor((Math.random() * 255) + 0);
    let green = Math.floor((Math.random() * 255) + 0);
    let blue = Math.floor((Math.random() * 255) + 0);
    return `rgb(${red},${green},${blue})`;
  }
})