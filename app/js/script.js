const horas = document.getElementById('horas');
const minutos = document.getElementById('minutos');
const segundos = document.getElementById('segundos');

const relogio = setInterval( function time() {
    let dateToday = new Date();
    let hr = dateToday.getHours();
    let min = dateToday.getMinutes();
    let sec = dateToday.getSeconds();
    
    hr = addzero(hr);
    min = addzero(min);
    sec = addzero(sec);

    horas.textContent = hr;
    minutos.textContent = min;
    segundos.textContent = sec;
})

function addzero(tp) {
    if (tp < 10)  
        return tp = '0' + tp;
    else
        return tp;
}