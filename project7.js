var screen = document.getElementById("screen")
var namespace = "http://www.w3.org/2000/svg"
var click = false
var rainbow = ["red", "orange", "yellow", "green", "blue", "purple"]
var rainbowIndex = 0

// utility function
function transformPoint(event) {
  var pt = screen.createSVGPoint()
  pt.x = event.x
  pt.y = event.y
  var mousept =  pt.matrixTransform(screen.getScreenCTM().inverse())
  return mousept
}


// Step 2: drawSquare and drawCircle functions
function drawSquare(x, y, size, color, opacity) {
  // square drawing code here
  var newsquare = document.createElementNS(namespace,"rect")
  var canvas = document.getElementById("screen")
   newsquare.setAttribute("fill", color)
   newsquare.setAttribute("width",size)
   newsquare.setAttribute("height",size)
   newsquare.setAttribute("x",x)
   newsquare.setAttribute("y",y)
   newsquare.setAttribute("opacity",opacity)
   canvas.appendChild(newsquare)
}

function drawCircle(x, y, size, color, opacity) {
  var newcircle = document.createElementNS(namespace,"circle")
  var canvas = document.getElementById("screen")
  newcircle.setAttribute("fill", color)
  newcircle.setAttribute("r",size)
  newcircle.setAttribute("cx",x)
  newcircle.setAttribute("cy",y)
  newcircle.setAttribute("opacity",opacity)
  canvas.appendChild(newcircle)
}

function drawEllipse(x, y, size, color, opacity) {
  var newellipse = document.createElementNS(namespace,"ellipse")
  var canvas = document.getElementById("screen")
  newellipse.setAttribute("fill", color)
  newellipse.setAttribute("rx",size)
  newellipse.setAttribute("ry",size*3)
  newellipse.setAttribute("cx",x)
  newellipse.setAttribute("cy",y)
  newellipse.setAttribute("opacity",opacity)
  canvas.appendChild(newellipse)
}

function drawStartLine(x, y, size, color, opacity) {
  var newstartline = document.createElementNS(namespace,"line")
  var canvas = document.getElementById("screen")
  newstartline.setAttribute("stroke", color)
  newstartline.setAttribute("stroke-width",size)
  newstartline.setAttribute("x1",x)
  newstartline.setAttribute("y1",y)
  newstartline.setAttribute("x2",x*3)
  newstartline.setAttribute("y2",y*3)
  newstartline.setAttribute("opacity",opacity)
  canvas.appendChild(newstartline)
}

function drawLine(x, y, size, color, opacity) {
  var newline = document.createElementNS(namespace,"line")
  var canvas = document.getElementById("screen")
  newline.setAttribute("stroke", color)
  newline.setAttribute("stroke-width",size)
  newline.setAttribute("x1",x)
  newline.setAttribute("y1",y)
  newline.setAttribute("x2",x*3)
  newline.setAttribute("y2",y*3)
  newline.setAttribute("opacity",opacity)
  canvas.appendChild(newline)
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
var sizeSelect = document.getElementById("sizeSelect").value
var opacitySelect = document.getElementById("opacitySelect").value
var pt = transformPoint(e, screen)
click = true

if(selectShape == "circle"){
  drawCircle(pt.x, pt.y, sizeSelect, colorSelect, opacitySelect)
  console.log("work?")
}
else if(selectShape == "square"){
  drawSquare(pt.x, pt.y, sizeSelect, colorSelect, opacitySelect)
}
else if(selectShape == "ellipse"){
  drawEllipse(pt.x, pt.y, sizeSelect, colorSelect, opacitySelect)
}
else if(selectShape == "line"){
  drawStartLine(pt.x, pt.y, sizeSelect, colorSelect, opacitySelect)
}
else if(selectShape == "triangle"){
  drawTriangle(pt.x, pt.y, sizeSelect, colorSelect, opacitySelect)
}
if(colorSelect=="rainbow"){
  if(selectShape == "circle"){
    drawCircle(pt.x, pt.y, sizeSelect, rainbow[rainbowIndex], opacitySelect)
  }
  else if(selectShape == "square"){
    drawSquare(pt.x, pt.y, sizeSelect, rainbow[rainbowIndex], opacitySelect)
  }
  else if(selectShape == "ellipse"){
    drawEllipse(pt.x, pt.y, sizeSelect, rainbow[rainbowIndex], opacitySelect)
  }
  else if(selectShape == "line"){
    drawStartLine(pt.x, pt.y, sizeSelect, rainbow[rainbowIndex], opacitySelect)
  }
  else if(selectShape == "triangle"){
    drawTriangle(pt.x, pt.y, sizeSelect, rainbow[rainbowIndex], opacitySelect)
  }
  if(rainbowIndex==rainbow.length){
    rainbowIndex=0;
  }
  else{
    rainbowIndex++;
  }
}
})

document.addEventListener("mousemove", function(e) {
  if(click == true){
    var selectShape = document.getElementById("shapeSelect").value
    var colorSelect = document.getElementById("colorSelect").value
    var colorSelect = document.getElementById("colorSelect").value
    var sizeSelect = document.getElementById("sizeSelect").value
    var opacitySelect = document.getElementById("opacitySelect").value
    var pt = transformPoint(e, screen)
    if(selectShape == "circle"){
      drawCircle(pt.x, pt.y, sizeSelect, colorSelect, opacitySelect)
    }
    else if(selectShape == "square"){
      drawSquare(pt.x, pt.y, sizeSelect, colorSelect, opacitySelect)
    }
    else if(selectShape == "ellipse"){
      drawEllipse(pt.x, pt.y, sizeSelect, colorSelect, opacitySelect)
    }
    else if(selectShape == "line"){
      drawLine(pt.x, pt.y, sizeSelect, colorSelect, opacitySelect)
    }
    else if(selectShape == "triangle"){
      drawTriangle(pt.x, pt.y, sizeSelect, colorSelect, opacitySelect)
    }
    if(colorSelect=="rainbow"){
      if(selectShape == "circle"){
        drawCircle(pt.x, pt.y, sizeSelect, rainbow[rainbowIndex], opacitySelect)
      }
      else if(selectShape == "square"){
        drawSquare(pt.x, pt.y, sizeSelect, rainbow[rainbowIndex], opacitySelect)
      }
      else if(selectShape == "ellipse"){
        drawEllipse(pt.x, pt.y, sizeSelect, rainbow[rainbowIndex], opacitySelect)
      }
      else if(selectShape == "line"){
        drawLine(pt.x, pt.y, sizeSelect, rainbow[rainbowIndex], opacitySelect)
      }
      else if(selectShape == "triangle"){
        drawTriangle(pt.x, pt.y, sizeSelect, rainbow[rainbowIndex], opacitySelect)
      }
      if(rainbowIndex==rainbow.length){
        rainbowIndex=0;
      }
      else{
        rainbowIndex++;
      }
    }
  }
})

document.addEventListener("mouseup", function(e) {
var pt = transformPoint(e, screen)
var selectShape = document.getElementById("shapeSelect").value
var colorSelect = document.getElementById("colorSelect").value
var colorSelect = document.getElementById("colorSelect").value
var sizeSelect = document.getElementById("sizeSelect").value
var opacitySelect = document.getElementById("opacitySelect").value
if(selectShape == "circle"){
  drawCircle(pt.x, pt.y, sizeSelect, colorSelect, opacitySelect)
}
else if(selectShape == "square"){
  drawSquare(pt.x, pt.y, sizeSelect, colorSelect, opacitySelect)
}
else if(selectShape == "ellipse"){
  drawEllipse(pt.x, pt.y, sizeSelect, colorSelect, opacitySelect)
}
else if(selectShape == "line"){
  drawLine(pt.x, pt.y, sizeSelect, colorSelect, opacitySelect)
}
else if(selectShape == "triangle"){
  drawTriangle(pt.x, pt.y, sizeSelect, colorSelect, opacitySelect)
}
console.log("work?")
if(colorSelect=="rainbow"){
  if(selectShape == "circle"){
    drawCircle(pt.x, pt.y, sizeSelect, rainbow[rainbowIndex], opacitySelect)
  }
  else if(selectShape == "square"){
    drawSquare(pt.x, pt.y, sizeSelect, rainbow[rainbowIndex], opacitySelect)
  }
  else if(selectShape == "ellipse"){
    drawEllipse(pt.x, pt.y, sizeSelect, rainbow[rainbowIndex], opacitySelect)
  }
  else if(selectShape == "line"){
    drawLine(pt.x, pt.y, sizeSelect, rainbow[rainbowIndex], opacitySelect)
  }
  else if(selectShape == "triangle"){
    drawTriangle(pt.x, pt.y, sizeSelect, rainbow[rainbowIndex], opacitySelect)
  }
  if(rainbowIndex==rainbow.length){
    rainbowIndex=0;
  }
  else{
    rainbowIndex++;
  }
}
click = false
})
  // what do you want to do when the user presses down
  // on the mouse button?
