const tiempoActual = new Date();

let hourAct = tiempoActual.getHours();
let minuteAct = tiempoActual.getMinutes();
let secondAct = tiempoActual.getSeconds();

const dayString = document.querySelector('.day-string');
const dateInfo = document.querySelector('.date-info');
const time = document.querySelector('.time');

const months = ['Enero','Febrero','Marzo','Abril','Mayo','Junio','Julio','Agosto','Septiembre',
'Octubre','Noviembre','Diciembre'];

const days = ['Domingo','Lunes','Martes','Míercoles','Jueves','Viernes','Sábado'];

const setDate = ()=>{
    dayString.textContent = days[tiempoActual.getDay()];
    dateInfo.textContent = tiempoActual.getDate()+' de '+months[tiempoActual.getMonth()] +' del '
    +tiempoActual.getFullYear();
}

addEventListener('load',()=>{
    setDate();
    setInterval(() => {
        const hour = new Date();
        time.textContent = hour.toLocaleTimeString();
    }, 1000);
});