const input = document.querySelector('input')
const output = document.querySelector('output')
const span = document.querySelector('span')

const words = [
    "programming",
    "javascript",
    "database",
    "markup",
    "framework",
    "variable",
    "stylesheet",
    "library",
    "asynchronous",
    "hypertext"
]

let randomizeWord = ''
let maskedWord = ''

const newGame = () => {
    const random = Math.floor(Math.random() * 10) + 1
    randomizeWord = words[random]
    maskedWord = "*".repeat(randomizeWord.length)
    console.log(randomizeWord)
    output.innerHTML = maskedWord
}

const win = () => {
    alert(`You have guessed right, the word is ${randomizeWord}.`)
    newGame()
}

const replaceFoundChars = (guess) => {
    for (let i = 0;i<randomizeWord.length;i++) {
        const char = randomizeWord.substring(i,i+1)
        if (char === guess) {
            let newString = maskedWord.split('')
            newString = newString.join('')
            maskedWord =newString
        }
    }
    output.innerHTML = maskedWord
}

newGame() // kutsutaan funktiota

input.addEventListener('keypress', (e) => { 
    if (e.key === 'Enter') {
        e.preventDefault() // estää lomakkeen lähetyksen

        const guess = input.value
        if (guess.toLowerCase() === randomizeWord.toLowerCase()) {
            win()

        } else if (guess.length === 1) {
            replaceFoundChars(guess)
            if (maskedWord.toLocaleLowerCase() === randomizeWord.toLocaleLowerCase()) {
                win()
            }
        } else {
            alert("You guessed wrong!")

        }
        input.value=''
    }
})