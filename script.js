function setTime() {
    // Crear un nuevo objeto de fecha para obtener la hora actual
    const now = new Date();
    // Obtener segundos actuales (0-59)
    const seconds = now.getSeconds();
    // Obtener minutos actuales (0-59)
    const minutes = now.getMinutes();
    // Convertir hora de 24h a 12h
    let hours = now.getHours();
    hours = hours % 12;
    hours = hours ? hours : 12; // Si es 0 (medianoche) mostrar como 12

    // Convertir segundos a grados (60 segundos = 360 grados)
    const secondDegrees = (seconds / 60) * 360;
    // Convertir minutos a grados, incluyendo la fracción de segundos
    const minuteDegrees = ((minutes + seconds/60) / 60) * 360;
    // Convertir horas a grados, incluyendo la fracción de minutos (12 horas = 360 grados)
    const hourDegrees = ((hours + minutes/60) / 12) * 360;

    // Seleccionar los elementos del DOM para las manecillas
    const secondHand = document.querySelector('.second');
    const minuteHand = document.querySelector('.minute');
    const hourHand = document.querySelector('.hour');
    // Limpiar el contenido previo de las manecillas
    secondHand.innerHTML = '';
    minuteHand.innerHTML = '';
    hourHand.innerHTML = '';
    
    // Bucle para crear los números en las manecillas
    for(let i = 0; i < 12; i++) {  // Reducido de 15 a 12
        // Crear elemento span para los segundos
        const spanSecond = document.createElement('span');
        // Asignar el valor actual de segundos al span
        spanSecond.textContent = seconds.toString();
        // Agregar el span a la manecilla de segundos
        secondHand.appendChild(spanSecond);

        // Aumentado de 8 a 10 números para el minutero
        if(i < 10) {  // Cambiado de 8 a 10
            // Crear elemento span para los minutos
            const spanMinute = document.createElement('span');
            // Asignar el valor actual de minutos al span
            spanMinute.textContent = minutes.toString();
            // Agregar el span a la manecilla de minutos
            minuteHand.appendChild(spanMinute);
        }

        if(i < 6) {  // Solo 6 números para la manecilla de horas
            const spanHour = document.createElement('span');
            spanHour.textContent = hours.toString(); // Ahora usará el formato 12h
            hourHand.appendChild(spanHour);
        }
    }

    // Aplicar la rotación a la manecilla de segundos
    document.querySelector('.second').style.transform = `translateX(-50%) rotate(${secondDegrees}deg)`;
    // Aplicar la rotación a la manecilla de minutos
    document.querySelector('.minute').style.transform = `translateX(-50%) rotate(${minuteDegrees}deg)`;
    // Aplicar la rotación a la manecilla de horas
    document.querySelector('.hour').style.transform = `translateX(-50%) rotate(${hourDegrees}deg)`;
}

// Actualizar el reloj cada segundo (1000ms)
setInterval(setTime, 1000);
// Ejecutar la función inmediatamente para mostrar la hora actual
setTime();