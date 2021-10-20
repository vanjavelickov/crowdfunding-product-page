import {
    Presenter
} from "./presenter.js";

window.onload = initialize();
var presenter;
let form = document.createElement('form');

function initialize() {
    presenter = new Presenter();
    createForm();
}

let inputGroup = document.getElementsByClassName('inputGroup');
for (let i = 0; i < inputGroup.length; i++) {
    inputGroup[i].onclick = (event) => checkRadioInput(event);
}

function checkRadioInput(event) {
    event.preventDefault();
    let nearestArticle = event.target.closest("article");
    let idNearestArticle = document.getElementById(nearestArticle.id);
    appendForm(idNearestArticle);
    
    // let createdDiv = document.createElement('div');
    // idNearestArticle.appendChild(createdDiv);
}

function createForm() {
    // form = document.createElement('form');
    form.setAttribute("action", "submit.php");
    var pledgeInput = document.createElement("input");
    pledgeInput.setAttribute("type", "text");
    pledgeInput.setAttribute("name", "money");
    // document.getElementById(event.target.id).appendChild(form);
}

function appendForm(divId) {
    divId.appendChild(this.form);
}

function closeSuccessModal() {
    let success = document.getElementById('successModal');
    success.style.visibility = 'hidden';
}

// $(document).ready(function () {
// function closeModal() {
//     window.location.hash = '';
//     let success = document.getElementById('successModal');
//     success.style.visibility = 'visible';
//     success.style.opacity = 1;
// }

// let submitButton = document.getElementById('submit');
// let closeBtn = document.getElementById('closeSuccessModal');

// $('#submit').on('click', (e) => {
//     e.preventDefault();
// //     var text = $('#form').find('input[name="money"]').val();
// //     console.log(text)
// //     backedMoney = backedMoney + parseInt(text);
// // backedMoneyNumber.innerHTML = `$${backedMoney}`;
//     console.log(backedMoney)
//     // oduzmi to na cenu i prikazi cenu i povecaj backers za 1
//     closeModal();
// })
// });
