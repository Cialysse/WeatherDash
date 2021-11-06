function GetInfo(){
    const newName = document.getElementById("cityInput");
    const cityName = document.getElementById("cityName");
    cityName.innerHTML = "--"+newName.value+"--"
}

fetch("http://ro.openweathermap.org/data/2.5/forecast/hourly?q='+newName.value+'&appid=c140f4f297c13567a46fc7205f83df23")
.then(response => response.json())
.then(data =>{
    for(i=0; i<5; i++){
        document.getElementById("day" + (i+1) "Min").innerHTML = "Min:" + Number(data.list[i].main.temp_min -288.53).toFixed(1) + "°";
    }
    for(i=0; i<5; i++){
        document.getElementById("day" + (i+1) "Max").innerHTML = "Man:" + Number(data.list[i].main.temp_max -288.53).toFixed(1) + "°";
    }
})

.catch(err => alert("Uh Oh!"))


function DefaultScreen(){
    document.getElementById("cityinput").defaultValue ="Berlin";
    GetInfo();
}
const d = new Date();
const weekday = ["Sunday", "Monday", "Tuesday", "Wendsday", "Thursday", "Friday", "Saturday"];

function checkDay(day){
    if(day + d.getDay() > 6){
        return day +d.getDay()-7;
    }
    else{
        return day + d.getDay();
    }
}

for(i=0; i<5; i++){
    document.getElementById("day" + (i+)).innerHTML = weekday[checkDay(i)];
}