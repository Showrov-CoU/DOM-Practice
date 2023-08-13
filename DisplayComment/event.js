document.getElementById("btn-click").addEventListener("click", () => {
  const commentbox = document.getElementById("comment-area");

  const comment = commentbox.value;

  const createCommentTag = document.createElement("p");

  createCommentTag.innerText = comment;

  document.getElementById("comment-section").appendChild(createCommentTag);

  commentbox.value = "";
});
