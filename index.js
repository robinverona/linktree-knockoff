function toggleDrawer() {
  const drawer = document.querySelector(".modal"); 
  const overlay = document.querySelector(".overlay"); 

  overlay.classList.toggle("open");
  drawer.classList.toggle("open");
}

function copyText() {
    const linkToCopy = "robinverona";
    const copyState = document.getElementById("copy-state");
     // Copy the text inside the text field
    navigator.clipboard.writeText(linkToCopy);
  
    // Alert the copied text
    copyState.style.color = "green";
    copyState.innerHTML = "Copié !";
  } 