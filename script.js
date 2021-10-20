import {
    Presenter
} from "./presenter.js";

window.onload = initialize();
var presenter;

function initialize() {
    presenter = new Presenter();
}

// $(document).ready(function () {



    function closeModal() {
        window.location.hash = '';
        let success = document.getElementById('successModal');
        success.style.visibility = 'visible';
        success.style.opacity = 1;
    }

    let submitButton = document.getElementById('submit');
    let closeBtn = document.getElementById('closeSuccessModal');


    $('input[type="radio"]').click(function () {
        var inputValue = $(this).attr("value");
        var targetBox = $("." + inputValue);
        $(".box").not(targetBox).hide();
        $(targetBox).show();
    });

    $('#radio3').on('select', function (e) {
        e.preventDefault();
        console.log('tu sam')
        $(this).toggleClass('myClickState');
    });

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


// let inputGroup = document.getElementsByClassName('inputGroup');

// for (i = 0; i < inputGroup.length; i++) {
//     inputGroup[i].onclick = (event) => checkRadioInput(event);
// }

function checkRadioInput(event) {
    event.preventDefault();
    console.log(event.target)
    let radios = event.target.getElementsByTagName("input")[0];
    console.log(radios)
}

function createForm() {
    // let form = document.createElement('form');
    // form.setAttribute("action", "submit.php");
    // var pledgeInput = document.createElement("input");
    // pledgeInput.setAttribute("type", "text");
    // pledgeInput.setAttribute("name", "money");
    // document.getElementById(event.target.id).appendChild(form);
}


function closeSuccessModal() {
    console.log('zatvori')
    let success = document.getElementById('successModal');
    success.style.visibility = 'hidden';
}