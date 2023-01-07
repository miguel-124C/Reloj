const spinner = document.querySelector('.lds-spinner');
const main = document.querySelector('.main');
const dayString = document.querySelector('.day-string');
const dateInfo = document.querySelector('.date-info');
const time = document.querySelector('.time');

const months = ['Enero','Febrero','Marzo','Abril','Mayo','Junio','Julio','Agosto','Septiembre',
'Octubre','Noviembre','Diciembre'];

const days = ['Domingo','Lunes','Martes','Míercoles','Jueves','Viernes','Sábado'];

const cleanUp = ()=>{
    spinner.style.display = 'none';
    main.style.display = 'flex';
};

const getDate = ()=>{
    const days = new Date();
    dayString.textContent = days[days.getDay()];
    dateInfo.textContent = days.getDate()+' de '+months[days.getMonth()] +' del '
    +days.getFullYear();
}

getDate();
const clock = setInterval(() => {
    const hour = new Date();
    let i = 0;
    for (hijos of time.children) {
        hijos.textContent = hour.toLocaleTimeString().split(':')[i];
        i++;
    }
}, 1000);
