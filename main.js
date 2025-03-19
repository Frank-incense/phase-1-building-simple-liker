// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!
const hearts = document.querySelectorAll(".like-glyph")
console.log(hearts)
for (let heart of hearts){
  heart.addEventListener('click',                                                                                                                                    (e)=>{
    mimicServerCall()
    .then((res)=> {
      setTimeout(alert(res), 1000)
      if (e.target.textContent === EMPTY_HEART){
        e.target.textContent = FULL_HEART
        e.target.className = "activated-heart"
      }
      else{
        e.target.textContent = EMPTY_HEART
        e.target.classList.remove("activated-heart")
      }
    })
    .catch((err)=>{
      document.querySelector("#modal").classList.remove("hidden")
      const p = document.querySelector("#modal-message")
      p.textContent = err.message
      setTimeout(()=>document.querySelector("#modal").className = "hidden", 3000)
    }) 
    
  })
}


//------------------------------------------------------------------------------                                                                  
// Don't change the code below: this function mocks the server response
//------------------------------------------------------------------------------                                                                                                                                                                                                                                                                                                                                                                                            

function mimicServerCall(url="http://mimicServer.example.com", config={}) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      let isRandomFailure = Math.random() < .2
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}
