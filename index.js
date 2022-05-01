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
    var myheade = document.getElementById(`heade`);
    var myheadee = document.getElementById(`headee`);
    var myhheade = document.getElementById(`hheade`);
    var myhheadee = document.getElementById(`hheadee`);
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
    myheade.classList.toggle(`ncolor`);
    myheadee.classList.toggle(`ncolor`);
    myhheade.classList.toggle(`ncolor`);
    myhheadee.classList.toggle(`ncolor`);
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

const cityUrl = "https://jomato-dataset-live.herokuapp.com/location";
const restaurantUrl = "https://jomato-dataset-live.herokuapp.com/restaurants?state_id="
function getCity(){
    fetch(cityUrl)
    .then((res) => res.json())
    .then((data) => {
        data.map((item) => {
            let element = document.createElement('option')
            let text = document.createTextNode(item.state)
            element.appendChild(text)
            element.value = item.state_id;
            document.getElementById('city').appendChild(element)
        })
    })
}
const getRestaurant = () => {
    const cityId = document.getElementById('city').value;
    const rest = document.getElementById('restaurant')

    while(rest.length > 0){
        rest.remove(0)
    }

    fetch(`${restaurantUrl}${cityId}`)
    .then((res) => res.json())
    .then((data) => {
        data.map((item) => {
            let element = document.createElement('option')
            let text = document.createTextNode(`${item.restaurant_name} | ${item.address}`)
            element.appendChild(text)
            document.getElementById('restaurant').appendChild(element)
        })
    })
}