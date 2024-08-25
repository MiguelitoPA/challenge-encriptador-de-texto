const regex = /^[A-Za-z\s]+$/;
const secretKeys = [
    ["e", "enter"],
    ["i", "imes"],
    ["a", "ai"],
    ["o", "ober"],
    ["u", "ufat"],
];

let encryptedSelector = document.querySelector(".text-area");
let encryptedResult = document.querySelector('.text-area.result');

function encrypt() {
    let encryptedText = encryptedSelector.value;

    if (!isValidText(encryptedText)) {
        return;
    } else {

        for (let i = 0; i < secretKeys.length; i++) {
            if (encryptedText.includes(secretKeys[i][0])) {
                encryptedText = encryptedText.replaceAll(
                    secretKeys[i][0],
                    secretKeys[i][1]
                );
            }
        }

        encryptedResult.value = encryptedText;

        manageElements();
    }

}

function decrypt() {
    let decryptedText = encryptedSelector.value;

    if (!isValidText(decryptedText)) {
        return;
    } else {

        for (let i = 0; i < secretKeys.length; i++) {
            if (decryptedText.includes(secretKeys[i][1])) {
                decryptedText = decryptedText.replaceAll(
                    secretKeys[i][1],
                    secretKeys[i][0]
                );
            }
        }

        encryptedResult.value = decryptedText;

        manageElements();
    }

}

function isValidText(currentText) {

    if (currentText.length < 1) {
        alert("El texto no puede estar vacío...");
        return false;

    } else if (!regex.test(currentText)) {
        alert("El texto no debe incluir caracteres especiales!!!");
        return false;
    }

    return true;
}

function copy() {
    let copyText = document.querySelector('.text-area.result');

    navigator.clipboard.writeText(copyText.value);

    alert('El texto fue copiado correctamente!');
}

function hideElement(selector) {
    let element = document.querySelector(selector);
    element.style.display = 'none';
    return;
}

function showElement(selector) {
    let element = document.querySelector(selector);
    element.style.display = 'inline';
    return;
}

function clearElement(selector) {
    let element = document.querySelector(selector);
    element.value = '';
    return;
}

function manageElements() {
    hideElement('.result-img');
    hideElement('.result-msg');
    showElement('.text-area.result')
    showElement('.copy');
    clearElement('.text-area');
}