type e = {
  clientX: string | number
  clientY: string | number
}
const LikeFn = (e: e) => {
  const heart = document.createElement('div')
  const home = document.querySelector('.home')
  home?.appendChild(heart)
  heart.classList.add('heart')
  heart.style.left = e.clientX + 'px'
  heart.style.top = e.clientY + 'px'
  heart.style.animation = 'move 1s normal forwards'
  setTimeout(function () {
    home?.removeChild(heart)
  }, 500)
  heart.style.backgroundColor =
    'rgb(' +
    Math.random() * 255 +
    ',' +
    Math.random() * 255 +
    ',' +
    Math.random() * 255 +
    ')'
}
export default LikeFn
