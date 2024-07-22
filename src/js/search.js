const searchBox = document.querySelector(".header__input-box");
const searchBtn = document.querySelector(".search-icon");
const cancelBtn = document.querySelector(".close-icon");
const searchInput = document.querySelector("input");

searchInput.onclick =()=>{
  searchBox.classList.add("active");
  searchBtn.classList.add("active");
  searchInput.classList.add("active");
  cancelBtn.classList.add("active");
}
cancelBtn.onclick =()=>{
  searchBox.classList.remove("active");
  searchBtn.classList.remove("active");
  searchInput.classList.remove("active");
  cancelBtn.classList.remove("active");
}