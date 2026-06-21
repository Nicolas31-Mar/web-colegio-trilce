
const tarjetas = document.querySelectorAll('.sede-unica');
const btnTodos = document.getElementById('btn-todos');
const btnNorte = document.getElementById('btn-norte');
const btnCentro = document.getElementById('btn-centro');
const btnEste = document.getElementById('btn-este');
const btnSur = document.getElementById('btn-sur');


function limpiarBotones() {
    btnTodos.classList.remove('activo');
    btnNorte.classList.remove('activo');
    btnCentro.classList.remove('activo');
    btnEste.classList.remove('activo');
    btnSur.classList.remove('activo');
}


btnNorte.addEventListener('click', function() {
    limpiarBotones();                  
    btnNorte.classList.add('activo');  
    
    
    for (let i = 0; i < tarjetas.length; i++) {
        const tarjeta = tarjetas[i];                  
        const zona = tarjeta.getAttribute('data-zona'); 
        
        
        if (zona === 'norte') {
            tarjeta.style.display = 'block'; 
        } else {
            tarjeta.style.display = 'none';  
        }
    }
});


btnCentro.addEventListener('click', function() {
    limpiarBotones();
    btnCentro.classList.add('activo'); 
    
    for (let i = 0; i < tarjetas.length; i++) {
        const tarjeta = tarjetas[i];
        const zona = tarjeta.getAttribute('data-zona');
        
        if (zona === 'centro') {
            tarjeta.style.display = 'block';
        } else {
            tarjeta.style.display = 'none';
        }
    }
});


btnEste.addEventListener('click', function() {
    limpiarBotones();
    btnEste.classList.add('activo'); 
    
    for (let i = 0; i < tarjetas.length; i++) {
        const tarjeta = tarjetas[i];
        const zona = tarjeta.getAttribute('data-zona');
        
        if (zona === 'este') {
            tarjeta.style.display = 'block';
        } else {
            tarjeta.style.display = 'none';
        }
    }
});


btnSur.addEventListener('click', function() {
    limpiarBotones();
    btnSur.classList.add('activo'); 
    
    for (let i = 0; i < tarjetas.length; i++) {
        const tarjeta = tarjetas[i];
        const zona = tarjeta.getAttribute('data-zona');
        
        if (zona === 'sur') {
            tarjeta.style.display = 'block';
        } else {
            tarjeta.style.display = 'none';
        }
    }
});

btnTodos.addEventListener('click', function() {
    limpiarBotones();
    btnTodos.classList.add('activo');
    
    
    for (let i = 0; i < tarjetas.length; i++) {
        const tarjeta = tarjetas[i];
        tarjeta.style.display = 'block';
    }
});