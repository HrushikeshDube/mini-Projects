let a;
let date;
let time;
const opt ={weekday:'long',year:'numeric',month:'long', day :'numeric'}
setInterval(() => {
    a=new Date();
    date = a.toLocaleDateString(undefined,opt);
    time = a.getHours() + ":" + a.getMinutes() + ":" + a.getSeconds();
    document.getElementById("time").innerHTML = time + " <br>on " + date;

},1000);