function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}


/*var check = document.querySelector('.check'); funciona no tacar de momento
check.addEventListener('click', idioma);

function idioma(){
  let id = check.checked;
  if (id == true){
      location.href = "./assets/en/index_en.html";
  } else {
      location.href = "index.html";
  }
}*/

