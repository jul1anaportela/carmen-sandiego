function handleClick(element) {
    const navLinks = document.querySelector('.btn-tabs')

    navLinks.forEach(link =>{
        link.classList.remove('active')
    })

    element.classList.add('active')
}