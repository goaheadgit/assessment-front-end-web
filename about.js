console.log("hello world");



function handleSubmit(evt) {
	evt.preventDefault();
	
	alert("Form submitted successfully.");
}


let form = document.querySelector('form#contact');

form.addEventListener('submit', handleSubmit);

function userCompliment(){
    alert("Wow, you're so beautiful today.")
}
document.getElementById("image-logo").addEventListener("mouseenter", myPlace); 
