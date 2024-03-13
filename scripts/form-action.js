let inputNombre = document.getElementById('nombre')
let inputEmail = document.getElementById('email')
// let textAreaMensaje = document.getElementById('mensaje')
// let buttom = document.querySelector('button')
let formulario = document.getElementsByClassName('formulario')[0]
// let inputL = document.querySelector('input').length
// inputNombre.inputMode = function () {
//  console.log(inputNombre.value);
// }




formulario.addEventListener('submit', (e)=>{
 e.preventDefault()
 if (inputNombre.value.length <= 4 && inputEmail.value.length <= 9) {
  inputNombre.value = ''
  inputNombre.placeholder = 'ingresa tu nombre'
  inputEmail.placeholder = 'ingresa un correo valido'
 } else if (inputNombre.value.length <= 4 && inputEmail.value.length >= 9) {
  inputNombre.value = ''
  inputNombre.placeholder = 'ingresa tu nombre'
 } else if (inputEmail.value.length <= 9 && inputNombre.value.length >= 4){
  inputEmail.placeholder = 'ingresa un correo valido'
 } else {
  alert('enviado')
  e.currentTarget.submit()
 }
})

