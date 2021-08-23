const toggleswitch = document.querySelector('input[type = "checkbox"]');
const nav = document.getElementById('nav');
const toggleicon = document.getElementById("toggle-icon");
const image1 = document.getElementById("image1");
const image2 = document.getElementById("image2");
const image3 = document.getElementById("image3");
const textbox = document.getElementById("text-box");

function darkmode()
{
  nav.style.backgroundColor = 'rgb( 0 0 0 / 50%)';
  textbox.style.backgroundColor = 'rgb(255 255 255 / 50%)';
  toggleicon.children[0].textContent = 'Dark mode';
  toggleicon.children[1].classList.remove("fa-sun");
  toggleicon.children[1].classList.add('fa-moon');
  image1.src = './img/undraw_proud_coder_dark.svg';
  image2.src = './img/undraw_feeling_proud_dark.svg';
  image3.src = './img/undraw_conceptual_idea_dark.svg';
}


function lightmode() {
    nav.style.backgroundColor = "rgb( 255 255 255 / 50%)";
    textbox.style.backgroundColor = "rgb(0 0 0 / 50%)";
    toggleicon.children[0].textContent = "Light mode";
    toggleicon.children[1].classList.remove("fa-moon");
    toggleicon.children[1].classList.add("fa-sun");
    image1.src = "./img/undraw_proud_coder_light.svg";
    image2.src = "./img/undraw_feeling_proud_light.svg";
    image3.src = "./img/undraw_conceptual_idea_light.svg";
}


function switchtheme(event){
  //console.log(event.target.checked)
  if (event.target.checked) {
    document.documentElement.setAttribute('data-theme' , 'dark');
    localStorage.setItem('theme' , 'dark');
    darkmode();
  }
  else{
    document.documentElement.setAttribute("data-theme", "light"); 
    localStorage.setItem('theme' , 'light')
    lightmode();
  }
}

toggleswitch.addEventListener('change' , switchtheme)

const currenttheme = localStorage.getItem('theme')
if(currenttheme)
{
  toggleswitch
  if(currenttheme === 'dark')
  {
    toggleswitch.checked = true;
    document.documentElement.setAttribute("data-theme", "dark");
    darkmode();
  }
}

