$(document).ready(function() {

    function bookmarked() {
        let buttonSecondary = document.getElementsByClassName('btnSecondary');
        buttonSecondary[0].style.color = 'hsl(176, 72%, 28%)';
        let bookmarkedText = document.getElementById('bookmarked');
        // let bookmarkedIcon = document.getElementById('bookmarkIcon');
        // bookmarkedIcon.style.opacity = '0.6';
        // bookmarkedIcon.style.borderRadius = '50%';
        // bookmarkedIcon.style.mixBlendMode = 'color';
        // bookmarkedIcon.style.color = 'red';
        bookmarkedText.innerHTML = 'Bookmarked';
        // this.submitButton = this.containerDiv.getElementsById('submit');
        // this.submitButton.onsubmit = (event) => this.closeModal(event);
    }
    
    function closeModal() {
        window.location.hash = '';
        let success = document.getElementById('successModal');
        success.style.visibility = 'visible';
        success.style.opacity = 1;
    }
    
    
    let backedMoney = 89914;
    let totalBackers = 5007;
    let daysLeft = 56;
    let bamboStand = 101;
    let blackStand = 64;
    let specialEdition = 0;

    let backedMoneyNumber = document.getElementById('number');
    let totalBackersNumber = document.getElementById('total');
    let daysLeftNumber = document.getElementById('days');
    let bamboStandNumber = document.getElementById('bamboStand');
    let blackStandNumber = document.getElementById('blackStand');
    let mahoganyNumber = document.getElementById('mahogany');

    backedMoneyNumber.innerHTML = `$${backedMoney}`;
    totalBackersNumber.innerHTML = `${totalBackers}`;
    daysLeftNumber.innerHTML = `${daysLeft}`;
    bamboStandNumber.innerHTML = `${bamboStand}`;
    blackStandNumber.innerHTML = `${blackStand}`;
    mahoganyNumber.innerHTML = `${specialEdition}`;
    
    let bookmarkedBtn = document.getElementById('bookmarkedBtn');
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

    $('#submit').on('click', (e) => {
        e.preventDefault();
    //     var text = $('#form').find('input[name="money"]').val();
    //     console.log(text)
    //     backedMoney = backedMoney + parseInt(text);
    // backedMoneyNumber.innerHTML = `$${backedMoney}`;
    if(document.getElementById('radio2').checked) {
        //Male radio button is checked
        console.log('dvojka');
      }else if(document.getElementById('radio3').checked) {
        //Female radio button is checked
        console.log('trojka')
      }
        console.log(backedMoney)
        // oduzmi to na cenu i prikazi cenu i povecaj backers za 1
        closeModal();
    })

});

function closeSuccessModal() {
    console.log('zatvori')
    let success = document.getElementById('successModal');
    success.style.visibility = 'hidden';
}



