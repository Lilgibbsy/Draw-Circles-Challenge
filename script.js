var cnv = document.getElementById("myCanvas");
var ctx = cnv.getContext("2d");

cnv.height = 500;
cnv.width = 700;

setInterval(animate, 1);
function animate() {
  let x = +document.getElementById("centerX").value;
  let y = +document.getElementById("centerY").value;
  let r = +document.getElementById("radius").value;
  let numRings = +document.getElementById("numRings").value;

  ctx.beginPath();
  ctx.fillStyle = "black";
  ctx.fillRect(0, 0, 700, 500);
  ctx.restore();

  ctx.beginPath();
  ctx.strokeStyle = "red";
  ctx.arc(x, y, r, 0, 2 * Math.PI);
  ctx.stroke();
  ctx.restore();

  let spaceBetweenRings = r / numRings;
  let addSpace = spaceBetweenRings;

  for (let n = 0; n < numRings; n++) {
    ctx.beginPath();
    ctx.strokeStyle = "red";
    ctx.arc(x, y, spaceBetweenRings, 0, 2 * Math.PI);
    ctx.stroke();
    ctx.restore();
    spaceBetweenRings = spaceBetweenRings + addSpace;
  }
}
