function changemode(){
    var mybody = document.body;
    var mycat = document.getElementById(`list`);
    mybody.classList.toggle(`mydark`);
    mycat.classList.toggle(`mycatt`);
}

function loadcoupon(){
    document.getElementById('coupon').style.display = 'block';
}

function closecoupon(){
    document.getElementById('coupon').style.display = 'none';
}