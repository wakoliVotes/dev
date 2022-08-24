const scriptURL = 'https://script.google.com/macros/s/AKfycbwaRPALEzXZIy9A_DtAyKdHoTG-0NoGJ0PQOwaZwvRzb2w9lWH2AlgcIUgm42bnus_R3w/exec'
const form = document.forms['submit-to-google-sheet']
const msg = document.getElementById('msg');

form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form)})
    .then(response => {
        msg.innerHTML = "Your message has been sent successfully. Thank you!"
        setTimeout(function () {
            msg.innerHTML = ""
        }, 5000)
        form.reset()
    })
    .catch(error => console.error('Error!', error.message))
})