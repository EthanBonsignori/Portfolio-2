$(document).ready(function () {
  $('.parallax').parallax()

  const navButtonContainer = document.querySelector('#nav-button-container')
  const navButton = document.querySelector('#nav-button')

  let animNavButtonOpen = () => {
    navButtonContainer.classList.remove('nav-closed')
    navButtonContainer.classList.add('nav-open')
    navButton.classList.add('is-active', 'sidenav-close')
  }

  let animNavButtonClose = () => {
    navButtonContainer.classList.remove('nav-open')
    navButtonContainer.classList.add('nav-closed')
    navButton.classList.remove('is-active', 'sidenav-close')
  }

  let options = {
    edge: 'left',
    draggable: true,
    inDuration: 1000,
    outDuration: 1000,
    onOpenStart: animNavButtonOpen,
    onCloseStart: animNavButtonClose,
    preventScrolling: false
  }

  let elems = document.querySelectorAll('.sidenav')
  let instances = M.Sidenav.init(elems, options)

  navButton.addEventListener('click', function () {
    let elem = document.querySelector('.sidenav')
    let instance = M.Sidenav.getInstance(elem)

    if (instance.isOpen) {
      instance.close()
      console.log('closing')
    } else {
      instance.open()
      console.log('opening')
    }
  })
})
