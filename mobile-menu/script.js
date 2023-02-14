function showMenu() {
    const menu = document.querySelector('#menu');
    if (menu.className === 'menuHidden') {
        menu.classList.replace('menuHidden', 'menuVisible')
    } else {
        menu.classList.replace('menuVisible', 'menuHidden')
    }
}