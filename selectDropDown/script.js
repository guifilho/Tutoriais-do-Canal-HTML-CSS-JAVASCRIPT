let input = document.querySelector("input"),
    logo = document.querySelector(".logo");

function addOption(nameOption) {
    input.value = nameOption

    switch (nameOption) {
      case 'Html':
        logo.innerHTML = '<ion-icon name="logo-html5" class="logo-html"></ion-icon>'
        break;
      
      case 'Css':
        logo.innerHTML = '<ion-icon name="logo-css3" class="logo-css"></ion-icon>'
        break

      case 'Javascript':
        logo.innerHTML = '<ion-icon name="logo-javascript" class="logo-js"></ion-icon>'
        break
      
      case 'Python':
        logo.innerHTML = '<ion-icon name="logo-python" class="logo-python"></ion-icon>'
        break

      case 'Git':
        logo.innerHTML = '<ion-icon name="git-branch-outline" class="logo-git"></ion-icon>'
        break
      
      case 'GitHub':
        logo.innerHTML = '<ion-icon name="logo-github" class="logo-github"></ion-icon>'
        break
    
      case 'React.JS':
        logo.innerHTML = '<ion-icon name="logo-react" class="logo-react"></ion-icon>'
        break
      
      case 'Wordpress':
        logo.innerHTML = '<ion-icon name="logo-wordpress" class="logo-wordpress"></ion-icon>'
        break

      case 'Linux':
        logo.innerHTML = '<ion-icon name="logo-tux" class="logo-linux"></ion-icon>'
        break
      
      case 'Sass':
        logo.innerHTML = '<ion-icon name="logo-sass" class="logo-sass"></ion-icon>'
      break
    }
}

let iconRevelar = document.getElementById('icon-seta'),
    opcoes = document.querySelector('.options');

input.addEventListener('click', function revelarOpcoes() {
    iconRevelar.classList.toggle('icon-para-baixo')
    opcoes.classList.toggle('revelar-opcoes')
})
