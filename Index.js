let countEl = document.getElementById("count-el")
let saveEl = document.getElementById("save-el")
let count = 0
function increment()
{
    count  = count + 1
    //countEl.innerText = count
    countEl.textContent = count
 }

 function save()
 {
    //saveEl.innerText += count + " - "
    saveEl.textContent += count + " - "
    console.log(count)
    count = 0
    countEl.textContent = count
 }

 //innerText is not able to deal with element which are not human readable lile space