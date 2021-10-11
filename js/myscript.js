

function digitalclocks(){
    let date = new Date();
    let hour = date.getHours();
    let min = date.getMinutes();
    let sec = date.getSeconds();
    let timeFormat = hour < 12 ? 'AM' : 'PM';


    if(hour === 12){
        hour = 0
    }else if(hour === 24){
        hour = 12
    }else{
        hour = hour - 12
    }


    if(hour < 10){
        hour = '0' + hour
    }
    if(min < 10){
        min = '0' + min
    }
    if(sec < 10){
        sec = '0' + sec
    };

    let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    let manths = months[date.getMonth()];
    let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    let dayname = days[date.getDay()];
    let daynum = date.getDate();
    let years = date.getFullYear();

    document.getElementById('dates').innerHTML = (dayname + ', ' + manths + ' ' + daynum + ', ' + years);

    document.getElementById('time').innerHTML = (hour + ':' + min + ':' + sec );
    
    document.getElementById('format').innerHTML = timeFormat;

    setInterval(digitalclocks, 1000)

};

digitalclocks()

