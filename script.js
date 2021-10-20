import {
    Presenter
} from "./presenter.js";

window.onload = initialize();
var presenter;


function initialize() {
    presenter = new Presenter();
    // createForm();
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
