function myColor(){
    alert("Green!")
}
function myPlace(){
    alert("Sleeping in my bed.")
}
function myRitual(){
    alert("Pranks on April Fool's Day.")
}
document.getElementById("color").addEventListener("click", myColor); 
document.getElementById("place").addEventListener("click", myPlace); 
document.getElementById("ritual").addEventListener("click", myRitual); 