let bookmarkedBtn = document.getElementById('bookmarkedBtn');
function bookmarked(){
    let buttonSecondary = document.getElementsByClassName('btnSecondary');
    buttonSecondary[0].style.color = 'hsl(176, 72%, 28%)';
    let bookmarkedText = document.getElementById('bookmarked');
    // let bookmarkedIcon = document.getElementById('bookmarkIcon');
    // bookmarkedIcon.style.opacity = '0.6';
    // bookmarkedIcon.style.borderRadius = '50%';
    // bookmarkedIcon.style.mixBlendMode = 'color';
    // bookmarkedIcon.style.color = 'red';
    bookmarkedText.innerHTML = 'Bookmarked';
}

$(document).ready(function(){
    $('input[type="radio"]').click(function(){
        var inputValue = $(this).attr("value");
        var targetBox = $("." + inputValue);
        $(".box").not(targetBox).hide();
        $(targetBox).show();
    });
});