function newPost () {
  var input = document.createElement('input');
  input.type = "text";
  message = input.value

  container = document.getElementById("newpostdiv")
  container.appendChild(input);
}

// function getUserId () {
//   $.ajax({
//     type: "GET",
//     url: "/users/:id",
//     success: function(data) {
//       user_id = data.user_id;
//     }
//   })
// }

// function submitPost() {
//   $.ajax({
//     type: "POST",
//     url: "/posts",
//     data: {id: 4},
//     dataType: "script",
//     success: function(data) {
//       console.log(data);
//      }
//   })
// }
