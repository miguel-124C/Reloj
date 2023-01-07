const tiempoActual = new Date();

const dayString = document.querySelector('.day-string');
const dateInfo = document.querySelector('.date-info');
const time = document.querySelector('.time');

const months = ['Enero','Febrero','Marzo','Abril','Mayo','Junio','Julio','Agosto','Septiembre',
'Octubre','Noviembre','Diciembre'];

const days = ['Domingo','Lunes','Martes','Míercoles','Jueves','Viernes','Sábado'];

const getDate = ()=>{
    dayString.textContent = days[tiempoActual.getDay()];
    dateInfo.textContent = tiempoActual.getDate()+' de '+months[tiempoActual.getMonth()] +' del '
    +tiempoActual.getFullYear();
}

addEventListener('load',()=>{
    getDate();
    setInterval(() => {
        const hour = new Date();
        let i = 0;
        for (hijos of time.children) {
            hijos.textContent = hour.toLocaleTimeString().split(':')[i];
            i++;
        }
    }, 1000);
});