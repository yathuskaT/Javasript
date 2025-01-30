//selecting popup box,overlay,button
var popupoverlay= document.querySelector(".popup-overlay")
var popupbox = document.querySelector(".popup-box")
var addpopup = document.getElementById("popup")

addpopup.addEventListener("click",function(){
    popupoverlay.style.display="block"
    popupbox.style.display="block"
})

//select cancel button
var cancelpopup= document.getElementById("cancel")
 cancelpopup.addEventListener("click",function(event){
    event.preventDefault()
    popupoverlay.style.display="none"
    popupbox.style.display="none"
 })

 //select container,add,booktitle,bookauthor,bookdescription
 var container =document.querySelector(".container")
 var addbook = document.getElementById("add")
 var booktitle = document.getElementById("booktitle")
 var bookauthor=document.getElementById("bookauthor")
 var bookdescription=document.getElementById("bookdescription")

 addbook.addEventListener("click", function(event){
    event.preventDefault()
    var div= document.createElement("div")
    div.setAttribute("class","bookcontainer")
    div.innerHTML=`<h2>${booktitle.value}</h2>
    <h5>${bookauthor.value}</h5>
    <p>${bookdescription.value}</p>`

     // Create delete button
     var deleteBtn = document.createElement("button")
     deleteBtn.textContent = "Delete"; //  Correct text
     deleteBtn.addEventListener("click", function () {
         div.remove(); // Deletes the book container
     })
     // Append the delete button to the div
    div.appendChild(deleteBtn);
    container.append(div)
    popupoverlay.style.display="none"
    popupbox.style.display="none"

    // Clear input fields after adding book
    booktitle.value = "";
    bookauthor.value = "";
    bookdescription.value = "";
 })

 function deletebook(event){
    event.target.parentElement.remove()
 }
