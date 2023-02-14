function dropDownShow () {
    const items = document.getElementById('items')
    if (items.className === 'hidden') {
        items.classList.replace('hidden', 'visible')
    } else {
        items.classList.replace('visible', 'hidden')
    }
}

