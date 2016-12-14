var screen = document.getElementById("screen")
var namespace = "http://www.w3.org/2000/svg"
var click = false
var rainbow = ["red", "orange", "yellow", "green", "blue", "purple"]

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
   newsquare.setAttribute("fill", color)
   newsquare.setAttribute("width",size)
   newsquare.setAttribute("height",size)
   newsquare.setAttribute("x",x)
   newsquare.setAttribute("y",y)
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

function drawTriangle(xpos, ypos, size, color) {
  var canvas = document.getElementById("screen")
  var pts = "" + xpos + "," + ypos + " " + (xpos + size) + "," + ypos + " " + (xpos + 0.5*size) + "," + (ypos - size)
  console.log(pts)
  var triangle = document.createElementNS(namespace, "polygon")
  triangle.setAttribute("points", pts)
  triangle.setAttribute("fill", color)
  canvas.appendChild(triangle)
}

// Step 3: Event listeners
//document.addEventListener("mousedown", function(e) {})

document.addEventListener("mousedown", function(e) {
var selectShape = document.getElementById("shapeSelect").value
var colorSelect = document.getElementById("colorSelect").value
if(colorSelect == "rainbow"){
  for(var i = 0; i < rainbow.length; i++){
    colorSelect += rainbow[i]
    if(i == 5){
      i = 0
    }
  }
}
var sizeSelect = document.getElementById("sizeSelect").value
var pt = transformPoint(e, screen)
click = true

if(selectShape == "circle"){
  drawCircle(pt.x, pt.y, sizeSelect, colorSelect)
  console.log("work?")
}
else if(selectShape == "square"){
  drawSquare(pt.x, pt.y, sizeSelect, colorSelect)
}
else if(selectShape == "triangle"){
  drawTriangle(pt.x, pt.y, sizeSelect, colorSelect)
}
})

document.addEventListener("mousemove", function(e) {
  if(click == true){
    var selectShape = document.getElementById("shapeSelect").value
    var colorSelect = document.getElementById("colorSelect").value
    var colorSelect = document.getElementById("colorSelect").value
    if(colorSelect == "rainbow"){
      for(var i = 0; i < rainbow.length; i++){
        colorSelect += rainbow[i]
        if(i == 5){
          i = 0
        }
      }
    }
    var sizeSelect = document.getElementById("sizeSelect").value
    var pt = transformPoint(e, screen)
    if(selectShape == "circle"){
      drawCircle(pt.x, pt.y, sizeSelect, colorSelect)
    }
    else if(selectShape == "square"){
      drawSquare(pt.x, pt.y, sizeSelect, colorSelect)
    }
    else if(selectShape == "triangle"){
      drawTriangle(pt.x, pt.y, sizeSelect, colorSelect)
    }
  }
})

document.addEventListener("mouseup", function(e) {
var pt = transformPoint(e, screen)
var selectShape = document.getElementById("shapeSelect").value
var colorSelect = document.getElementById("colorSelect").value
var colorSelect = document.getElementById("colorSelect").value
if(colorSelect == "rainbow"){
  for(var i = 0; i < rainbow.length; i++){
    colorSelect += rainbow[i]
    if(i == 5){
      i = 0
    }
  }
}
var sizeSelect = document.getElementById("sizeSelect").value
if(selectShape == "circle"){
  drawCircle(pt.x, pt.y, sizeSelect, colorSelect)
}
else if(selectShape == "square"){
  drawSquare(pt.x, pt.y, sizeSelect, colorSelect)
}
else if(selectShape == "triangle"){
  drawTriangle(pt.x, pt.y, sizeSelect, colorSelect)
}
console.log("work?")
click = false
})
  // what do you want to do when the user presses down
  // on the mouse button?
