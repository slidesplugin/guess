export default {
  init: (val=5, step=1) => (()=>({
      id: "guess",
      init: () => {
        initGuess(val, step)
      }
  }))
}

function initGuess(val, step) {
  const guessElem = document.querySelectorAll('[data-guess]')
  guessElem.forEach(guess => {
    let blur = parseInt(getComputedStyle(guess).getPropertyValue('--val') || val)
    const blurStep = parseInt(getComputedStyle(guess).getPropertyValue('--step') || step)

    guess.style.filter = `blur(${blur}px)` // init

    guess.addEventListener('click', () => {
      if (blur > 0) {
        blur = Math.max(0, blur - blurStep);
        guess.style.filter = `blur(${blur}px)`
      }
    })
  })
}
