let borderRange = document.getElementById("border-range")

let paddingRange = document.getElementById("padding-range")

let contentRange = document.getElementById("content-range")


let borderColor = document.getElementById("border-color")

let paddingColor = document.getElementById("padding-color")

let contentColor = document.getElementById("content-color")


let borderBox = document.querySelector(".border")

let paddingBox = document.querySelector(".padding")

let contentBox = document.querySelector(".content")

borderRange.addEventListener("change", function(){
    borderBox.style.padding = borderRange.value + "px"
    console.log(borderRange.value)
   
})

paddingRange.addEventListener("change", function(){
    paddingBox.style.padding = paddingRange.value + "px"
    console.log(paddingRange.value)
   
})

contentRange.addEventListener("change", function(){
    contentBox.style.padding = contentRange.value + "px"
    console.log(contentRange.value)
})

borderColor.addEventListener("change", function(){
    borderBox.style.backgroundColor = borderColor.value
})


paddingColor.addEventListener("change", function(){
    paddingBox.style.backgroundColor = paddingColor.value
})

contentColor.addEventListener("change", function(){
    contentBox.style.backgroundColor = contentColor.value
})