$(document).ready(function () {
  $('.parallax').parallax()
  $('.sidenav').sidenav()

  let animNavButtonOpen = () => {
    console.log('open')
  }

  let animNavButtonClose = () => {
    console.log('close')
  }

  $('.button-collapse').sideNav({
    menuWidth: 300,
    edge: 'left',
    closeOnClick: true,
    draggable: true,
    preventScrolling: false,
    onOpen: animNavButtonOpen(),
    onClose: animNavButtonClose()
  })

})