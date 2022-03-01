function changemode(){
    var mybody = document.body;
    mybody.classList.toggle(`mydark`)
}

function loadcoupon(){
    document.getElementById('coupon').style.display = 'block';
}

function closecoupon(){
    document.getElementById('coupon').style.display = 'none'
}