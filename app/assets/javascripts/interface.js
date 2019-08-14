function newPost () {
  var input = document.createElement('input');
  input.type = "text";

  container = document.getElementById("newpostdiv")
  container.appendChild(input);
}

function submitPost() {
 Rails.ajax({
   type: "POST",
   url: "/posts/new",
   data: String(message),
   dataType: "html",
   success: function(data) {
     console.log(data);
   }
 })
}
