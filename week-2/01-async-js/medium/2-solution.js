// Can you make it so that it updates every second, and shows time in the following formats - 
//  - HH:MM::SS (Eg. 13:45:23)
//  - HH:MM::SS AM/PM (Eg 01:45:23 PM)

function clock(){
    const now=new Date();

    //get hour,minute,second of now
    let hours=now.getHours();
    let minutes=now.getMinutes();
    let seconds=now.getSeconds();

    //format numbers to always have two digits using padStart(2, '0')
    hours=String(hours).padStart(2,"0");
    minutes=String(minutes).padStart(2,"0");
    seconds=String(seconds).padStart(2,"0");
    
    //24 hour format
    let format24=`${hours}:${minutes}:${seconds}`

    //get 12 hour format->currentHour%12
    let hour12=now.getHours()%12 || 12;
    hour12=String(hour12).padStart(2,"0");
    let period=now.getHour>=12?"PM" : "AM";
    
    //12 hour format
    let format12=`${hour12}:${minutes}:${seconds} ${period}`
    
    console.log(format24," | ",format12);
}

setInterval(clock,1000);

//setInterval to repeatidly move after 1 sec
