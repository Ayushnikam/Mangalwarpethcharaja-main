const scriptURL = 'https://script.google.com/macros/s/AKfycbwgdG2v_PFlRYbzR_dadJIWmLxDz5sPnjZc1jAcID1SAEqSq4yt6TiQNxTByXlznuTw/exec'

const form = document.forms['contact-form']

form.addEventListener('submit', e => {
    alert("Ok ");
  e.preventDefault()
  fetch(scriptURL, { method: 'POST', body: new FormData(form)})
  .then(response => alert("Thank you! your form is submitted successfully." ))
  .then(() => { window.location.reload(); })
  .catch(error => console.error('Error!', error.message))
})
//d/1jDuII4wOIrTnuUso11c-cNdUoH7HHSIBsE5X6Z7wlXY