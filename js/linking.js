let selectedAlgo = localStorage.getItem("selectedAlgo");
console.log(selectedAlgo);

// default selected algo when page is loaded for the first time
// ------------------------------------------------------------------
selectedNavItem.classList.remove("selected");
selectedNavItem = document.querySelector(`#${selectedAlgo}`);
selectedNavItem.classList.add("selected");

// ------------------------------Home-Navigation----------------------------
// --------------------------------------------------------------------------
document.querySelector("#home").addEventListener("click", function () {
  window.location.assign(`./index.html`);
});





