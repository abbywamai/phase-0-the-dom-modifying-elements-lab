// Write your code here!
document.querySelector("main#main").remove()
const newHeader = document.createElement('h1')
newHeader.id = 'victory'
const yourName = "Wamai"
newHeader.textContent = ('$yourName is the champion!')
document.body.appendChild(newHeader)