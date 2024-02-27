
const mostrarReloj = () =>{
    let fecha = new Date ();
    let hr = formatoHora(fecha.getHours());
    let min = formatoHora(fecha.getMinutes());
    let seg = formatoHora(fecha.getSeconds());
    let year = formatoFecha(fecha.getFullYear());
    let month = formatoFecha(fecha.getMonth());
    let day = formatoFecha(fecha.getDay());
    document.getElementById('hora').innerHTML = `${hr}:${min}:${seg}`;
    document.getElementById('fecha').innerHTML = `${day}:${month}:${year}`;
    document.getElementById('contenedor').classList.toggle('animar');
} 

function setRandomBackground() {
    const colors = [
      "#ffd7d5",
      "#ffe9d6",
      "#ffffd1",
      "#d6ffda",
      "#d7eeff",
      "#dad6ff",
      "#ffd6e8",
      "#f5f5dc",
      "#f4e4e4",
      "#e4e6f4",
      "#d7eeff",
    ];
  
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    document.body.style.backgroundColor = randomColor;
    
  }




const formatoHora = (hora)=>{
    if(hora < 10)
        hora = '0' + hora;
        return hora;
    
}

const formatoFecha = (fecha)=>{
    if(fecha < 10)
        fecha = '0' + fecha;
        return fecha;
    
}
setInterval(setRandomBackground, 1000);
setInterval(mostrarReloj, 1000);