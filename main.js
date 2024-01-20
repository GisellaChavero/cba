document.addEventListener("DOMContentLoaded", function() {
  // Obtén los elementos por su ID
  const nosotrosBtn = document.getElementById("nosotros");
  const trabajosBtn = document.getElementById("trabajos");
  const contactoBtn = document.getElementById("contacto");
  const exteriorBtn = document.getElementById("exterior");
  const ledBtn = document.getElementById("led");
  const personalizadosBtn = document.getElementById("personalizados");
  const precentacionBtn = document .getElementById("precentacion")

  const nosotrosSection = document.getElementById("nosotros-section");
  const trabajosSection = document.getElementById("trabajos-section");
  const contactoSection = document.getElementById("contacto-section");
  const ExteriorSection = document.getElementById("exterior-section");
  const ledSection = document.getElementById("led-section");
  const personalizadosSection = document.getElementById("personalizados-section");
  const precentacionSection= document.getElementById("precentacion-section")
  // Agregar eventos de clic a los botones
  nosotrosBtn.addEventListener("click", function() {
      mostrarSeccion(nosotrosSection);
      ocultarSecciones([trabajosSection,precentacionSection, contactoSection,ExteriorSection,ledSection,personalizadosSection]);
      
  });

  trabajosBtn.addEventListener("click", function() {
      mostrarSeccion(trabajosSection);
      ocultarSecciones([precentacionSection,nosotrosSection, contactoSection,ExteriorSection,ledSection,personalizadosSection]);
     });

  contactoBtn.addEventListener("click", function() {
      mostrarSeccion(contactoSection);
      ocultarSecciones([precentacionSection,nosotrosSection, trabajosSection,ExteriorSection,ledSection,personalizadosSection]);
  });

 exteriorBtn.addEventListener("click", function() {
    mostrarSeccion(ExteriorSection);
    ocultarSecciones([precentacionSection,nosotrosSection, trabajosSection, contactoSection,ledSection,personalizadosSection]);
});

  ledBtn.addEventListener("click", function() {
    mostrarSeccion(ledSection);
    ocultarSecciones([precentacionSection,trabajosSection, contactoSection,ExteriorSection,nosotrosSection,personalizadosSection]);
    
});
personalizadosBtn.addEventListener("click", function() {
    mostrarSeccion(personalizadosSection);
    ocultarSecciones([precentacionSection,trabajosSection, contactoSection,ExteriorSection,nosotrosSection,ledSection]);
    
});

precentacionBtn.addEventListener("click", function() {
    mostrarSeccion(precentacionSection);
    ocultarSecciones([trabajosSection, contactoSection,ExteriorSection,nosotrosSection,ledSection,personalizadosSection]);
    
});
  // Función para mostrar una sección
  function mostrarSeccion(seccion) {
      seccion.style.display = "block";
      
  }

  // Función para ocultar varias secciones
  function ocultarSecciones(secciones) {
      secciones.forEach(function(seccion) {
          seccion.style.display = "none";
      });
  }
  
});


