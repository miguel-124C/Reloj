const tiempoActual = new Date();

let hourAct = tiempoActual.getHours();
let minuteAct = tiempoActual.getMinutes();
let secondAct = tiempoActual.getSeconds();

const dayString = document.querySelector('.day-string');
const dateInfo = document.querySelector('.date-info');
const hour = document.querySelector('.hour');
const minute = document.querySelector('.minute');
const second = document.querySelector('.second');

const months = {
    0:'Enero',
    1:'Febrero',
    2:'Marzo',
    3:'Abril',
    4:'Mayo',
    5:'Junio',
    6:'Julio',
    7:'Agosto',
    8:'Septiembre',
    9:'Octubre',
    10:'Noviembre',
    11:'Diciembre'
}

const days = {
    0:'Domingo',
    1:'Lunes',
    2:'Martes',
    3:'Míercoles',
    4:'Jueves',
    5:'Viernes',
    6:'Sábado',
}

const setDate = ()=>{
    dayString.textContent = days[tiempoActual.getDay()];
    dateInfo.textContent = tiempoActual.getDate()+' de '+months[tiempoActual.getMonth()] +' del '
    +tiempoActual.getFullYear();
}

const timeWithZero =(t)=>{
    if(t < 10) t = '0' + `${t}`;
    return t
}

const setTime=(v,cb)=>{
    v++;
    if(v == 60){
        v = 0; 
        cb();
    }
    v = timeWithZero(v);
    return v;
}

const setHours = ()=>{
    hourAct++;
    if(hourAct == 24) hourAct = 0 ;
    timeWithZero(hourAct);
    hour.textContent = hourAct;
}

const setMinutes=()=>{
    minuteAct = setTime(minuteAct,setHours); 
    minute.textContent = minuteAct;
}

const setSeconds =()=>{
    secondAct = setTime(secondAct,setMinutes);
    console.log(secondAct);
    second.textContent = secondAct;
}

addEventListener('load',()=>{
    setDate();
    hour.textContent = timeWithZero(hourAct);
    minute.textContent = timeWithZero(minuteAct);  
    second.textContent = timeWithZero(secondAct);
    setInterval(() => {setSeconds()}, 1000);
});