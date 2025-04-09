// 🌙 Cambia entre modo claro y oscuro
function toggleTheme() {
    // Alterna la clase 'dark-mode' en el cuerpo del documento
    document.body.classList.toggle("dark-mode");
  
    // Obtiene el botón de cambio de tema
    let button = document.querySelector(".theme-toggle");
  
    // Cambia el texto del botón según el modo actual
    button.textContent = document.body.classList.contains("dark-mode")
      ? "☀️ Modo Claro"
      : "🌙 Modo Oscuro";
  }
  
  // ☰ Muestra y oculta el menú con animación
  function toggleMenu() {
    // Alterna la clase 'active' en el menú para mostrarlo u ocultarlo
    document.getElementById("menu").classList.toggle("active");
  }
  
  // ⏰ Actualiza el reloj en tiempo real
  function updateClock() {
    // Obtiene la hora actual
    const now = new Date();
  
    // Formatea la hora, minutos y segundos con dos dígitos
    document.getElementById("clock").textContent =
      (now.getHours() < 10 ? "0" : "") +
      now.getHours() +
      ":" +
      (now.getMinutes() < 10 ? "0" : "") +
      now.getMinutes() +
      ":" +
      (now.getSeconds() < 10 ? "0" : "") +
      now.getSeconds();
  }
  
  // Llama a la función updateClock cada segundo para actualizar la hora
  setInterval(updateClock, 1000);
  updateClock(); // Llamada inicial para mostrar la hora sin esperar el primer intervalo
  
  // ✅ Validar formulario de contacto
  function validarFormulario() {
    // Obtiene los valores de los campos de entrada del formulario
    let nombre = document.getElementById("nombre").value.trim();
    let email = document.getElementById("email").value.trim();
    let mensaje = document.getElementById("mensaje").value.trim();
  
    // Muestra mensajes de error si los campos están vacíos o no son válidos
    document.getElementById("error-nombre").textContent = nombre
      ? ""
      : "⚠️ Nombre requerido";
  
    document.getElementById("error-email").textContent = email.includes("@")
      ? ""
      : "⚠️ Email inválido";
  
    document.getElementById("error-mensaje").textContent = mensaje
      ? ""
      : "⚠️ Escribe un mensaje";
  
    // Si todos los campos son válidos, muestra un mensaje de éxito
    if (nombre && email.includes("@") && mensaje) {
      alert("📨 Mensaje enviado correctamente!");
    }
  }
  
  // 🔗 Resalta el enlace activo en el menú
  function setActiveLink(event) {
    // Remueve la clase 'active' de todos los enlaces del menú
    document
      .querySelectorAll(".menu a")
      .forEach((link) => link.classList.remove("active"));
  
    // Agrega la clase 'active' solo al enlace que fue clickeado
    event.target.classList.add("active");
  }
  