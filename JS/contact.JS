// export function(submit){

// const scriptURL = 'https://script.google.com/macros/s/AKfycbws1lQmlTeYPi5gIiDkZz7I5ljvT-Yrz3_9L61jlfL65d7cn2Eu1LEEPx8u3pOLnSjUGQ/exec'
//     const form = document.forms['submit-to-google-sheet']
//     const msg = document.getElementById("msg")
  
//     form.addEventListener('submit', e => {
//       e.preventDefault()
//       fetch(scriptURL, { method: 'POST', body: new FormData(form)})
//         .then(response => {
//             msg.innerHTML = "Message sent successfully."
//             setTimeout(function(){
//                 msg.innerHTML = ""
//             }, 5000)
//             form.reset()
//         })
//         .catch(error => console.error('Error!', error.message))
//     })

// }