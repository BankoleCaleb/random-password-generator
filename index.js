let button = document.querySelector("button");

const generateRandomPassword = async () => {
    let input = document.querySelector("#phrase-count");
    let strength = document.
    querySelector('input[name = "strength"]:checked').value
    let addFake = document.
    querySelector('input[name = "fake"]:checked').value
    let whenNum = document.
    querySelector('input[name = "number"]:checked').value
    let whenCap = document.
    querySelector('input[name = "caps"]:checked').value
    let passWhenNum = document.
    querySelector('input[name = "pass-number"]:checked').value
    let passWhenCap = document.
    querySelector('input[name = "pass-caps"]:checked').value
    let wordCount = document.getElementById("wordCount")
    let syllableCount = document.getElementById("syllable-count");
    let digitCount = document.getElementById("digit-count");
    let alphaLength = document.getElementById("length");
    let alphaSymbol = document.
    querySelector('input[name = "symbol"]:checked').value;

    let url = 'https://makemeapassword.ligos.net/api/v1/';

    const pronounceable = async (count = 5) => {
        
        const response = await fetch(`${url}pronounceable/json?c=1000&sc=${count}`)
        const data = await response.json()
        const passwordText = document.getElementsByTagName("p")
        const passwords = data.pws

        for(tag of passwordText) {
            tag.innerHTML = `<span style="color: white;">${passwords[Math.floor(Math.random() * passwords.length)]}<span>`
        }
    }

    const readablepassphrase = async (strength, fake, num, caps) => {

        const response = await fetch(`${url}readablepassphrase/json?pc=100&s=${strength}&whenNum=${num}&whenUp=${caps}&noFake=${fake}`)
        const data = await response.json()
        const passwordText = document.getElementsByTagName("p")
        const passwords = data.pws

        for(tag of passwordText) {
            tag.innerHTML = `<span style="color: white;">${passwords[Math.floor(Math.random() * passwords.length)]}<span>`
        }
    }

    const passphrase = async (up, num, wordCount = 6) => {

        const response = await fetch(`${url}passphrase/json?pc=10&wc=${wordCount}&whenNum=${num}&whenUp=${up}`)
        const data = await response.json()
        const passwordText = document.getElementsByTagName("p")
        const passwords = data.pws

        for(tag of passwordText) {
            tag.innerHTML = `<span style="color: white;">${passwords[Math.floor(Math.random() * passwords.length)]}<span>`
        }
    }

    const pin = async (digit = 5) => {

        const response = await fetch(`${url}pin/json?c=100&l=${digit}`)
        const data = await response.json()
        const passwordText = document.getElementsByTagName("p")
        const passwords = data.pws

        for(tag of passwordText) {
            tag.innerHTML = `<span style="color: white;">${passwords[Math.floor(Math.random() * passwords.length)]}<span>`
        }
    }

    const alphanumeric = async (length = 9, symbol = T) => {

        const response = await fetch(`${url}alphanumeric/json?c=100&l=${length}&sym=${symbol}`)
        const data = await response.json()
        const passwordText = document.getElementsByTagName("p")
        const passwords = data.pws

        for(tag of passwordText) {
            tag.innerHTML = `<span style="color: white;">${passwords[Math.floor(Math.random() * passwords.length)]}<span>`
        }
    }

    switch(options.value) {
        case "pronounceable":
            pronounceable(syllableCount.value);
            break;
        case "readablepassphrase":
            readablepassphrase(strength, addFake, whenNum, whenCap);
            break;
        case "passphrase":
            passphrase(passWhenCap, passWhenNum, wordCount.value);
            break;
        case "pin":
            pin(digitCount.value);
            break;
        case "alphanumeric":
            alphanumeric(alphaLength.value, alphaSymbol);
            break;
    }
}
button.addEventListener(
    "click", generateRandomPassword)

function copyToClipboard(element) {
    var $temp = $("<input>");
    $("body").append($temp);
    $temp.val($(element).text()).select();
    document.execCommand("copy");
    $temp.remove();
    let animation = document.querySelector(".copy-parent")
    animation.classList.add('copy-visible');
    setTimeout(() => {
        animation.classList.remove("copy-visible")
    }, 1000)
}

let options = document.querySelector("select")
options.addEventListener("change", () => {
    let input = document.querySelector("input")
    input.value = options.value
    moreOptions.id = options.value
    // console.log(moreOptions)
})
  
let moreOptions = 
document.getElementById("readablepassphrase");
// console.log(button);
// console.log(p2);
// console.log(p3);
// console.log(p4);