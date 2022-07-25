const menuIcon = document.getElementById('menu');
const menuList = document.getElementById('menu-list');
const closeIcon = document.getElementById('close');
const modal = document.getElementById('modal');
menuIcon.addEventListener('click', () => {
    menuIcon.classList.add('visibility')
    closeIcon.classList.remove('visibility')
    menuList.classList.remove('visibility')
    modal.classList.remove('visibility')
})
closeIcon.addEventListener('click', () => {
    menuIcon.classList.remove('visibility')
    closeIcon.classList.add('visibility')
    menuList.classList.add('visibility')
    modal.classList.add('visibility')
})