let input = document.querySelector("input"),
    logo = document.querySelector(".logo");

function addOption(nameOption) {
  input.value = nameOption

  switch (nameOption) {
    case 'Html':
        logo.innerHTML = '<ion-icon name="logo-html5" class="html5-icon"></ion-icon>'
      break;
  
      case 'Css':
        logo.innerHTML = '<ion-icon name="logo-css3" class="css3-icon"></ion-icon>'
      break;

      case 'Javascript':
        logo.innerHTML = '<ion-icon name="logo-javascript" class="javascript-icon"></ion-icon>'
      break;

      case 'Python':
        logo.innerHTML = '<ion-icon name="logo-python" class="python-icon"></ion-icon>'
      break;

      case 'Git':
        logo.innerHTML = ' <ion-icon name="git-branch-outline" class="git-icon"></ion-icon>'
      break;

      case 'GitHub':
        logo.innerHTML = '<ion-icon name="logo-github" class="github-icon"></ion-icon>'
      break;

      case 'React.JS':
        logo.innerHTML = '<ion-icon name="logo-react" class="react-icon"></ion-icon>'
      break;

      case 'Wordpress':
        logo.innerHTML = '<ion-icon name="logo-wordpress" class="wordpress-icon"></ion-icon>'
      break;

      case 'Linux':
        logo.innerHTML = '<ion-icon name="logo-tux" class="linux-icon"></ion-icon>'
      break;

      case 'Sass':
        logo.innerHTML = '<ion-icon name="logo-sass" class="sass-icon"></ion-icon>'
      break;
  }
}

let btnRevelar = document.getElementById('btn-revelar'),
    iconRevelar = document.getElementById('icon-seta'),
    opcoes = document.querySelector('.options');

input.addEventListener("click", function revelarOpcoes() {
    iconRevelar.classList.toggle('icon-para-cima')
    opcoes.classList.toggle('options-revelar')
})