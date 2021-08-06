const menuItems = Array.from(document.querySelectorAll('.menu-item'));

let index = 0;

menuItems.forEach(item => {
  item.addEventListener('click', function(){

    menuItems[index].classList.remove('active-anim')
    index = menuItems.indexOf(this)
    menuItems[index].classList.add('active-anim')

  })
})