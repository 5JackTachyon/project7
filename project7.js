var screen = document.getElementById("screen")
var namespace = "http://www.w3.org/2000/svg"

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


var screen = document.getElementById("screen")
screen.addEventListener("mousedown", function(e) {
  var newcircle = document.createElementNS(namespace,"circle")
  var pt = transformPoint(e, screen)
  newcircle.setAttribute("fill", "black")
  newcircle.setAttribute("r",5)
  newcircle.setAttribute("cx",pt.x)
  newcircle.setAttribute("cy",pt.y)
  newcircle.setAttribute("opacity",1)
  screen.appendChild(newcircle)
  click = true
})
var screen = document.getElementById("screen")
screen.addEventListener("mousemove", function(e) {
  if(click == true){
  var newcircle = document.createElementNS(namespace,"circle")
  var pt = transformPoint(e, screen)
  newcircle.setAttribute("fill", "black")
  newcircle.setAttribute("r",5)
  newcircle.setAttribute("cx",pt.x)
  newcircle.setAttribute("cy",pt.y)
  newcircle.setAttribute("opacity",1)
  screen.appendChild(newcircle)
  }
})

var screen = document.getElementById("screen")
screen.addEventListener("mouseup", function(e) {
  var newcircle = document.createElementNS(namespace,"circle")
  var pt = transformPoint(e, screen)
  newcircle.setAttribute("fill", "black")
  newcircle.setAttribute("r",5)
  newcircle.setAttribute("cx",pt.x)
  newcircle.setAttribute("cy",pt.y)
  newcircle.setAttribute("opacity",1)
  screen.appendChild(newcircle)
  click = false
})
  // what do you want to do when the user presses down
  // on the mouse button?
