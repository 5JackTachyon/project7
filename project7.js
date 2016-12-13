var screen = document.getElementById("screen")
var namespace = "http://www.w3.org/2000/svg"
var click = false

// utility function
function transformPoint(event) {
  var pt = screen.createSVGPoint()
  pt.x = event.x
  pt.y = event.y
  var mousept =  pt.matrixTransform(screen.getScreenCTM().inverse())
  return mousept
}


// Step 2: drawSquare and drawCircle functions
function drawSquare(x, y, size, color) {
  // square drawing code here
  var newsquare = document.createElementNS(namespace,"rect")
  var canvas = document.getElementById("screen")
   newrect.setAttribute("fill", color)
   newrect.setAttribute("width",size)
   newrect.setAttribute("height",size)
   newrect.setAttribute("x",x)
   newrect.setAttribute("y",y)
   canvas.appendChild(newsquare)
}

function drawCircle(x, y, size, color) {
  var newcircle = document.createElementNS(namespace,"circle")
  var canvas = document.getElementById("screen")
  newcircle.setAttribute("fill", color)
  newcircle.setAttribute("r",size)
  newcircle.setAttribute("cx",x)
  newcircle.setAttribute("cy",y)
  canvas.appendChild(newcircle)
}

// Step 3: Event listeners
//document.addEventListener("mousedown", function(e) {})

document.addEventListener("mousedown", function(e) {
var selectShape = document.getElementById("shapeSelect").value
var pt = transformPoint(e, screen)
click = true

if(selectShape == "circle"){
  drawCircle(pt.x, pt.y, 5, "blue")
  console.log("work?")
}
else if(selectShape == "square"){
  drawSquare(pt.x, pt.y, 5, "blue")
}
})

document.addEventListener("mousemove", function(e) {
  if(click == true){
    var selectShape = document.getElementById("shapeSelect").value
    var pt = transformPoint(e, screen)
    if(selectShape == "circle"){
      drawCircle(pt.x, pt.y, 5, "blue")
    }
    else if(selectShape == "square"){
      drawSquare(pt.x, pt.y, 5, "blue")
    }
  }
})

document.addEventListener("mouseup", function(e) {
var pt = transformPoint(e, screen)
var selectShape = document.getElementById("shapeSelect").value
if(selectShape == "circle"){
  drawCircle(pt.x, pt.y, 5, "blue")
}
else if(selectShape == "square"){
  drawSquare(pt.x, pt.y, 5, "blue")
}
click = false
})
  // what do you want to do when the user presses down
  // on the mouse button?
