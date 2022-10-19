let count = 0
let countEl = document.getElementById("count-el")
let previousEntries = document.getElementById("previousEnt")

function increment() {
    count += 1
    countEl.textContent = count
}
function save() {
    let finalCount = count + " - "
    previousEntries.textContent += finalCount
    countEl.textContent = 0
    count = 0
}