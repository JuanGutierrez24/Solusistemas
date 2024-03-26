function mostrar(idseccion){
    //ocultar todas las secciones
   var secciones =document.getElementsByTagName('section');
   for(var i=0; i<secciones.length;i++)
   {
      secciones[i].style.display='none';
   }
   //mostrar
   var otra=document.getElementById(idseccion);
   otra.style.display='block';
   }
   