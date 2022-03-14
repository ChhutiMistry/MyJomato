function changemode(){
    var mybody = document.body;
    var mycat = document.getElementById(`list`);
    var mycatt = document.getElementById(`listt`);
    var mmycat = document.getElementById(`llist`);
    var myycat = document.getElementById(`liist`);
    var myccat = document.getElementById(`lisst`);
    var mycaat = document.getElementById(`llistt`);
    var mmycatt = document.getElementById(`lliisstt`);
    var myweather = document.getElementById(`mycweather`);
    var myheader = document.getElementById(`nncolour`);
    var myfooter = document.getElementById(`myfoot`);
    mybody.classList.toggle(`mydark`);
    mycat.classList.toggle(`mycatt`);
    mycatt.classList.toggle(`mycatt`);
    mmycat.classList.toggle(`mycatt`);
    myycat.classList.toggle(`mycatt`);
    myccat.classList.toggle(`mycatt`);
    mycaat.classList.toggle(`mycatt`);
    mmycatt.classList.toggle(`mycatt`);
    myweather.classList.toggle(`mywea`);
    myheader.classList.toggle(`nncolour`);
    myfooter.classList.toggle(`nncolour`);
}

function loadcoupon(){
    document.getElementById('coupon').style.display = 'block';
}

function closecoupon(){
    document.getElementById('coupon').style.display = 'none';
}

geolocation();
function geolocation(){
    if(navigator.geolocation){
        navigator.geolocation.getCurrentPosition(showPosition)
    }else{
        x.innerText = "Your Location is not Supported"
    }
}
function showPosition(data){
    console.log(data)
    let latitude = data.coords.latitude;
    let longitude = data.coords.longitude
    const url = `https://api.openweathermap.org/data/2.5/forecast/daily?lat=${latitude}&lon=${longitude}&mode=json&units=metric&cnt=1&appid=fbf712a5a83d7305c3cda4ca8fe7ef29`
    fetch(url,{method: 'GET'})
    .then((res) => res.json())
    .then((data) => {
        let cityname = data.city.name
        let temperature = `${data.list[0].temp.day} degree Celsius`
        var x = document.getElementById("myweather");
        console.log(data)
        x.innerText = `Average temperature of ${cityname} is ${temperature}`
    })
}