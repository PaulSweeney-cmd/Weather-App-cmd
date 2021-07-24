window.addEventListener('load', ()=> {
    /* defining the co-ordinates */
    let latitude;
    let longitude;

    if (navigator.geolocation){
        navigator.geolocation.getCurrentPosition
        (location =>{
            longitude = position.coords.longitude;
            latitude = position.coords.latitude;

            const api = `api.openweathermap.org/data/2.5/weather?lat=${latitude},&lon=${longitude}&appid={1b1739c497edc04ee44df7be05100696}`;
        });
    }
});