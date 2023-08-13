document.getElementById("input-field").addEventListener("keyup", (event) => {
  const inputText = event.target.value;
  const deleteBtn = document.getElementById("deleteBtn");
  if (inputText.trim().toLowerCase() === "delete") {
    deleteBtn.removeAttribute("disabled");
    deleteBtn.addEventListener("click", () => {
      const tag = document.getElementById("Info");
      tag.classList.add("info_hide");
    });
  } else {
    deleteBtn.setAttribute("disabled", true);
  }
});
