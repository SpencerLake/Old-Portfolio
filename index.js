

const scrollButton = document.querySelector('#scroll-indicator')

function scrollToPort() {
    let pageHeight = window.innerHeight
    window.scrollBy(0, pageHeight)
}

scrollButton.addEventListener('click', scrollToPort)
