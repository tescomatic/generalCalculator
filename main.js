const canvas = document.querySelectorAll(".dragDrop");
canvas.width = window.innerWidth
canvas.height = window.innerHeight
const ctx = canvas.getContext("2d")

// Variables for events
let down,x, y, Xx, Yy;

window.addEventListener
(
  "mouseup",
  function () 
  {
    if (down) 
    {      
        down.style.zIndex = 0;
    }
    down = null;
  },
  false
);

//Mouse movement for images
window.addEventListener("mousemove", dragDrop, false);

canvas.forEach((element) => 
{
  element.addEventListener("mousedown", function (event) 
  {
    event.preventDefault();
    down = this;
    x = this.offsetLeft;
    y = this.offsetTop;
    Xx = event.pageX;
    Yy = event.pageY;
  });
});

//Function for dropping images
function dragDrop(event) 
{
    event.preventDefault();
  if (!down) return;
  down.style.zIndex = 9;
  down.style.left = x + event.pageX - Xx + "px";
  down.style.top = y + event.pageY - Yy + "px";
}