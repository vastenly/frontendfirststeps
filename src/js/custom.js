var homeContent = document.getElementById("homeContent");
var searchContent = document.getElementById("searchContent");
var aboutContent = document.getElementById("aboutContent");

document.getElementById("home").addEventListener("click", function(){
  homeContent.classList.add("hide");
  document.getElementById("home").classList.remove("active");
  searchContent.classList.add("hide");
  document.getElementById("search").classList.remove("active");
  aboutContent.classList.add("hide");
  document.getElementById("about").classList.remove("active");
  homeContent.classList.remove("hide");
  document.getElementById("home").classList.add("active");
})

document.getElementById("search").addEventListener("click", function(){
  homeContent.classList.add("hide");
  document.getElementById("home").classList.remove("active");
  searchContent.classList.add("hide");
  document.getElementById("search").classList.remove("active");
  aboutContent.classList.add("hide");
  document.getElementById("about").classList.remove("active");
  searchContent.classList.remove("hide");
  document.getElementById("search").classList.add("active");
})

document.getElementById("about").addEventListener("click", function(){
  homeContent.classList.add("hide");
  document.getElementById("home").classList.remove("active");
  searchContent.classList.add("hide");
  document.getElementById("search").classList.remove("active");
  aboutContent.classList.add("hide");
  document.getElementById("about").classList.remove("active");
  aboutContent.classList.remove("hide");
  document.getElementById("about").classList.add("active");
})