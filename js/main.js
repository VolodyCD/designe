document.addEventListener("DOMContentLoaded", function(){
   document.getElementById("burger").addEventListener("click", function(){
    document.querySelector("header-container").classList.toggle("open")
   })
 })