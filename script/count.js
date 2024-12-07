let minus = document.querySelectorAll(".minus")
let plus = document.querySelectorAll(".plus")
let count = document.querySelectorAll(".count")

plus.forEach((button, index) => {
    button.addEventListener('click', () => {
        let b = parseInt(count[index].value) || 0
        count[index].value = b + 1
    })
})

minus.forEach((button, index) => {
    button.addEventListener('click', () => {
        let b = parseInt(count[index].value) || 0
        count[index].value = Math.max(0, b - 1)
    })
})