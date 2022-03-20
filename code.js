
var tCtx = document.getElementById('textCanvas').getContext('2d'), //Hidden canvas
    imageElem = document.getElementById('image'); //Image element
  
// Text input element
document.getElementById('text').addEventListener('keyup', function() {
  tCtx.font = "30px Arial";
  tCtx.canvas.width = tCtx.measureText(this.value).width;
  tCtx.canvas.height = 30;
  tCtx.font = "30px Arial";
  tCtx.fillText(this.value, 0, 30);
  imageElem.src = tCtx.canvas.toDataURL();
  console.log(imageElem.src);
}, false);

