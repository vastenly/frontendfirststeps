var homeContent = document.getElementById("homeContent");
var searchContent = document.getElementById("searchContent");
var aboutContent = document.getElementById("aboutContent");

document.getElementById("home").addEventListener("click", function(){
  homeContent.classList.add("hide");
  homeContent.classList.remove("active");
  searchContent.classList.add("hide");
  searchContent.classList.remove("active");
  aboutContent.classList.add("hide");
  aboutContent.classList.remove("active");
  homeContent.classList.remove("hide");
  homeContent.classList.add("active");
})

document.getElementById("search").addEventListener("click", function(){
  homeContent.classList.add("hide");
  homeContent.classList.remove("active");
  searchContent.classList.add("hide");
  searchContent.classList.remove("active");
  aboutContent.classList.add("hide");
  aboutContent.classList.remove("active");
  searchContent.classList.remove("hide");
  searchContent.classList.add("active");
})

document.getElementById("about").addEventListener("click", function(){
  homeContent.classList.add("hide");
  homeContent.classList.remove("active");
  searchContent.classList.add("hide");
  searchContent.classList.remove("active");
  aboutContent.classList.add("hide");
  aboutContent.classList.remove("active");
  aboutContent.classList.remove("hide");
  aboutContent.classList.add("active");
})