// Gets all the ID selectors from the HTML in JavaScript
let form = document.getElementById("form");
let input = document.getElementById("input");
let msg = document.getElementById("msg");
let posts = document.getElementById("posts");

form.addEventListener("submit", (e) => {
    e.preventDefault();
    console.log("button clicked");
  
    formValidation();
  });

  let formValidation = () => {
    if (input.value === "") {
        msg.innerHTML = "Post cannot be blank";
        console.log("failure");
      } else {
        console.log("successs");
        msg.innerHTML = "";
        acceptData();
      }
  };

let data = {};
// Function to accept data from input fields
let acceptData = () => {
  data["text"] = input.value;
  console.log(data);
  createPost();
};
/* Function to create posts using JavaScript template literals. The backticks are template literals. It will work as a template for us.
Here, we need 3 things: a parent div, the input itself, and the options div which carries the edit and delete icons. */
let createPost = () => {
    posts.innerHTML += `
    <div>
        <p>${data.text}</p>
        <span class="options">
            <i onClick="editPost(this)" class="fas fa-edit"></i>
            <i onClick="deletePost(this)" class="fas fa-trash-alt"></i>
        </span>
    </div>
    `;
    input.value = "";
};
 /* Funtion to delete a post. In the above html template, the parent of the delete button is the span with class name options.
  The parent of the span is the div. So, we write parentElement twice so that we can jump from the delete icon to the div and target it directly to remove it. */
let deletePost = (e) => {
    e.parentElement.parentElement.remove();
};

let editPost = (e) => {
  input.value = e.parentElement.previousElementSibling.innerHTML;
  e.parentElement.parentElement.remove();
};