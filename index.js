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

let Geolocation=()=>{
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showPosition);
    } else {
        console.log("GeoLocation not supported.")
    }
}

let showPosition=(data)=>{
    let x = document.getElementById('weather');
    let lon=data.coords.longitude;
    let lat=data.coords.latitude;
    console.log(data);
    let url=`https://api.openweathermap.org/data/2.5/forecast/daily?lat=${lat}&lon=${lon}&mode=json&units=metric&cnt=1&appid=fbf712a5a83d7305c3cda4ca8fe7ef29`
   
    fetch(url)
    .then((res)=>res.json())
    .then((data)=>{
        let cityName = data.city.name
        console.log(data);
        data.list.map((item)=>{
            console.log(item.temp.day)
            x.innerText=`Current temperature of ${cityName} is ${item.temp.day} degree Celsius`;
        })
    })
}
Geolocation();