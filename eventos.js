const miDiv = document.getElementById("miDiv")

miDiv.addEventListener("click", function(event) {
    if (event.target===miDiv){ 
        alert("Hola! Soy el div") 
    }})