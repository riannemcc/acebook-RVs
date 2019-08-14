function newPost () {
  var input = document.createElement('input'); 
  input.type = "text"; 
   
  container = document.getElementById("newpostdiv")
  container.appendChild(input); 
}