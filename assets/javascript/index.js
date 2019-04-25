// On document load,
$(document).ready(function () {
  // Initialize materialize elements
  $('.parallax').parallax()
  $('.tabs').tabs()
  $('.scrollspy').scrollSpy({ throttle: 1 })
  $('.materialboxed').materialbox()

  // Store html elements
  const navButtonContainer = document.querySelector('#nav-button-container')
  const navButton = document.querySelector('#nav-button')
  const navClose = $('.nav-close')

  // change classes of nav button on nav open to animate it
  const animNavButtonOpen = () => {
    navButtonContainer.classList.remove('nav-closed')
    navButtonContainer.classList.add('nav-open')
    navButton.classList.add('is-active', 'sidenav-close')
  }

  // change classes of nav button on nav close to animate it
  const animNavButtonClose = () => {
    navButtonContainer.classList.remove('nav-open')
    navButtonContainer.classList.add('nav-closed')
    navButton.classList.remove('is-active', 'sidenav-close')
  }

  // Set sidenav options
  const options = {
    edge: 'left',
    draggable: true,
    inDuration: 1000,
    outDuration: 1000,
    onOpenStart: animNavButtonOpen,
    onCloseStart: animNavButtonClose,
    preventScrolling: true
  }

  // Grab the sidenav and initialize it
  const elems = document.querySelectorAll('.sidenav')
  const instances = M.Sidenav.init(elems, options)
  const elem = document.querySelector('.sidenav')
  const instance = M.Sidenav.getInstance(elem)

  // Close and open the side nav from the floating icon
  navButton.addEventListener('click', function () {
    if (instance.isOpen) {
      instance.close()
    } else {
      instance.open()
    }
  })

  // Close the side nav on button click
  $(navClose).on('click', () => {
    instance.close()
  })
})
