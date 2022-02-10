let saveEl = document.getElementById("save-el")
let countEl = document.getElementById("count-el")
let count = 0

function increment() {
    count += 1
    countEl.textContent = count
}

function save() {
    let countStr = count + " - "
    saveEl.textContent += countStr
    countEl.textContent = 0 // to set the no. to 0 again when hit save
    count= 0 // and to redo the count from 0 again when hit save
}

// textContent gets all the element including script and style while innerText only show human-readable elements, innertext is aware of styling but won't return the hidden elements