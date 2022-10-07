let idx = 0
const textArray = [
    "Belajar",
    "First Time"
]

setInterval(() => {
    document.title = textArray[idx++ % textArray.length]
}, 1500);