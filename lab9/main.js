$(function(){
    getLocation();
});
function getLocation(){
    if(navigator.geolocation == undefined){
        alert("Fail to get location");
        return;
    }
    let settings ={
        enableHighAccuracy: true
    };
    navigator.geolocation.getCurrentPosition(result, error, settings);
}

function result(position){
    let thisCoords=position.coords;
    console.log(`Location:${24.8198874},${121.0174248}`);
    window.location.href=`https://maps.google.com.tw?q=${24.8198874},${121.0174248}`;
}

function error(err){
    alert(err);
}