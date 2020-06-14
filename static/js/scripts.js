const navbar = document.getElementsByClassName('navbar')[0];
const hasOpen = new RegExp('\\bopen\\b');

function toggleNavMenu() {
  if (navbar.className.match(hasOpen))
    navbar.className = navbar.className.replace(hasOpen, '');
  else
    navbar.className = navbar.className + " open";
}
