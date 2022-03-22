//version: 3
window.onload = function() {

  var fecha = new Date();
  var tabs = ["screen1","song1","psalm","reading","song2","silence","intercessions","our_father","prayer","song3"];
  var contador = 0;
  var total_tabs = tabs.length;
  var num_activa = contador % total_tabs;
  var tab_activa = tabs[num_activa];
  
  // función para el botón "avanzar" (avanzar de panel) INACTIVO
  avanzar = function() {
    var tab_activa = document.getElementsByClassName("active")[1].id;
    var a_activa = 'a'+tab_activa;
    console.log(num_activa, a_activa, tab_activa);
    
    document.getElementById(tab_activa).classList.remove("active","show");
    document.getElementById(a_activa).classList.remove("active","show");
    contador = tabs.indexOf(tab_activa) + 1; 
    num_activa = contador % total_tabs;
    tab_activa = tabs[num_activa];
    a_activa = 'a'+tab_activa;
    console.log(num_activa,a_activa,tab_activa); 
    document.getElementById(tab_activa).classList.add("active", "show");
    document.getElementById(a_activa).classList.add("active","show");
  };

  // función para averiguar qué contenidos (qué oración) se emplean esta semana 
  averiguarOracionSemana = function(idioma="es"){
    var hoy   = new Date(); 
    //console.log(hoy);
    for (fila in fechas) {
     var fecha = new Date(fechas[fila][0]);
      if (hoy >= fecha) {
        var fechaCorrespondiente = fechas[fila];
       // console.log(fechas[fila]);
        };
     };
    // ahora averigua el idioma, y devuelve el resultado
    var idiomas_disponibles = textos[0];
    var idioma_elegido = 1;
    // comprobación del idioma entre los disponibles
    if (idiomas_disponibles.includes(idioma)){
    //  document.getElementById("borrar").innerHTML = idiomas_disponibles.indexOf(idioma);
      idioma_elegido = idiomas_disponibles.indexOf(idioma);}
    // si no está disponible, al spanish
    else {
    //  document.getElementById("borrar").innerHTML = 1;
      idioma_elegido = 1;}
      // extrae el string correspondiente al idioma elegido
    tituloFechaCorrespondiente = fechaCorrespondiente[idioma_elegido];
    console.log("titulo fecha: "+tituloFechaCorrespondiente);
    return tituloFechaCorrespondiente;
  };

    // función para averiguar si es día par o impar, para reading/prayer 1 ó 2
  averiguarParImpar = function() {
    var hoy      = new Date(); 
    var day      = fecha.getDate();
    var reminder = day % 2; // divide entre 2, el resto es 0 (días pares) o 1 (impares)
    console.log(hoy, day, reminder);
    return reminder;
  };

  // función para cargar / traducir las etiquetas según el idioma empleado
  establecerContenidosTags = function(idioma="es"){
    var idiomas_disponibles = textos[0];
    var idioma_elegido = 1;
    // comprobación del idioma entre los disponibles
    if (idiomas_disponibles.includes(idioma)){
    //  document.getElementById("borrar").innerHTML = idiomas_disponibles.indexOf(idioma);
      idioma_elegido = idiomas_disponibles.indexOf(idioma);}
    // si no está disponible, al spanish
    else {
    //  document.getElementById("borrar").innerHTML = 1;
      idioma_elegido = 1;}
    // recorremos toda la lista de textos, seleccionando el html correspondiente para actualizar su txt
    var filas_textos =textos.slice(1,textos.length); // la primera línea es el encabezado, no se debe leer
    for (fila in filas_textos){
      //console.log(filas_textos);
      //console.log(filas_textos[fila]);
      var campo = filas_textos[fila][0];
      var texto = filas_textos[fila][idioma_elegido];
      //console.log(campo, texto);
      document.getElementById(campo).innerHTML = texto;}
  };

  // función para incluir los contenidos del día en cada elemento del DOM
  cargarContenidos = function(tituloOracion) {
    // cargar el contenido correspondiente al resultado de averiguarOracionSemana (Ejemplo: Tiempo de la Iglesia 7)
    var cantos_textos =cantos.slice(1, cantos.length); // la primera línea es el encabezado, no se debe leer
    for (fila in cantos_textos){
      //console.log(cantos_textos);
  //    console.log(cantos_textos[fila]);
      var titulo = cantos_textos[fila][2];
      if (titulo == tituloOracion) {
        var contenidos = cantos_textos[fila];
     //   console.log(contenidos);
    //    document.getElementById('borrar').innerHTML = titulo;
        break;}
 //     else {
 //       console.log("no se encuentra");
 //     };
    }
    // cargar cada elemento en su contenedor
    var campos = ["number","marca_temporal","prayer_name","song_1_name","song_1_txt","song_1_image","song_1_youtube","song_1_midi","psalm_1", "reading_1","reading_2","song_2_name","song_2_txt","song_2_image","song_2_youtube","song_2_midi","silence_txt","intercessions_txt","our_father_txt","prayer_1","prayer_2","song_3_name","song_3_txt","song_3_image","song_3_youtube","song_3_midi"]; 
    var arr_campos = {
      number:0,
      marca_temporal:0,prayer_name:0,
      song_1_name:0,song_1_txt:0,song_1_image:0,song_1_youtube:0,song_1_midi:0,
      psalm_1:0,
      reading_1:0,reading_2:0,
      song_2_name:0,song_2_txt:0,song_2_image:0,song_2_youtube:0,song_2_midi:0,
      silence_txt:0,
      intercessions_txt:0,
      our_father_txt:0,
      prayer_1:0,prayer_2:0,
      song_3_name:0,song_3_txt:0,song_3_image:0,song_3_youtube:0,song_3_midi:0
      }; 
    var grupos_campos = {
      textuales:["number","marca_temporal","prayer_name","song_1_name","song_1_txt","psalm_1","song_2_name","song_2_txt","silence_txt","intercessions_txt","our_father_txt","song_3_name","song_3_txt"],
      imagenes: ["song_1_image","song_2_image","song_3_image"],
      videos:   ["song_1_youtube","song_2_youtube","song_3_youtube"],
      midis:    ["song_1_midi","song_2_midi","song_3_midi"],
      impares:  ["reading_1","prayer_1"],
      pares:    ["reading_2","prayer_2"]
    }; 
    for (i in contenidos){
     // document.getElementById(campos[i]).innerHTML= contenidos[i];
      arr_campos[campos[i]]=contenidos[i];
    };
    console.log(contenidos.length, campos.length);
  //  console.log(arr_campos);
    for (j in grupos_campos['textuales']){
      document.getElementById(grupos_campos['textuales'][j]).innerText = arr_campos[grupos_campos['textuales'][j]];
    };
    for (k in grupos_campos['imagenes']){
      document.getElementById(grupos_campos['imagenes'][k]).src = arr_campos[grupos_campos['imagenes'][k]];
      //console.log(grupos_campos['imagenes'][k]);
    };
    for (L in grupos_campos['videos']){
      document.getElementById(grupos_campos['videos'][L]).src = arr_campos[grupos_campos['videos'][L]];
    //  console.log(grupos_campos['videos'][L]);
    };
    if (averiguarParImpar()==0){
   //   console.log("ParImpar: " + averiguarParImpar());
      for (m in grupos_campos['pares']){
        document.getElementById(grupos_campos['pares'][m]).innerText = arr_campos[grupos_campos['pares'][m]];
        console.log(grupos_campos['pares'][m]);}
      } else {
 //           console.log("ParImpar: " + averiguarParImpar());
      for (N in grupos_campos['impares']){
        document.getElementById(grupos_campos['impares'][N]).innerText = arr_campos[grupos_campos['impares'][N]];
        console.log(grupos_campos['impares'][N]);
    };}
  };


  // función para averiguar el idioma del usuario
  averiguarIdioma = function(idioma="es"){
    localStorage.elIdioma =  document.getElementById("language").value; // var seleccionado = document.getElementById("language").value;
    location.reload();
  };
    // a partir de un selector de idioma.
    // ¿hay evento del selector? seguro
    // función para averiguar el idioma del usuario
  dailyVerseFunc = function(idioma="es"){
    var seleccionado = localStorage.elIdioma; //document.getElementById("language").value;
    console.log("sel " + seleccionado); // 
//    var selected_verse = "daily_verse_" + seleccionado;
    var selected_verse = 'resources/home_' + seleccionado + '.html';//'<script class="lead" type="text/javascript" src="http://www.taize.fr/tz_readings.php?lang='+seleccionado+'"></script>';
//    document.getElementById(selected_verse).classList.toggle("invisible");// 
    console.log('selected_verse '+selected_verse);// 
    document.getElementById('daily_verse').src = selected_verse;
  };

  FrecuenciaMusica = function(){ // ¿hace falta valor por defecto, frecuencia ="weekly"?
    var frecuency = document.getElementById("frecuecia_musica").value;
    var day   = fecha.getDate(); // buscar formula matematica
    var fila  = cantos[day]; // el array contiene toda la información de ese día
    var campos = ["song_1_name","song_1_txt","song_1_image","song_1_youtube","song_1_midi","song_2_name","song_2_txt","song_2_image","song_2_youtube","song_2_midi","song_3_name","song_3_txt","song_3_image","song_3_youtube","song_3_midi"];
     var arr_campos = {
      song_1_name:  fila[3], song_1_txt:  fila[4], song_1_image:  fila[5], song_1_youtube:  fila[6], song_1_midi:  fila[7],
      song_2_name: fila[11], song_2_txt: fila[12], song_2_image: fila[13], song_2_youtube: fila[14], song_2_midi: fila[15],
      song_3_name: fila[21], song_3_txt: fila[22], song_3_image: fila[23], song_3_youtube: fila[24], song_3_midi: fila[25]
      }; 

    console.log("sel " + frecuency); // 
      //averigua el día del mes, para seleccionar la fila
    console.log(day);
//    console.log(arr_campos);
    if (frecuency == 'daily'){
      document.getElementById("song_1_name").innerText = arr_campos['song_1_name'];
      document.getElementById("song_1_txt").innerText = arr_campos["song_1_txt"];
      document.getElementById("song_1_image").src = arr_campos["song_1_image"];
      document.getElementById("song_1_youtube").src = arr_campos["song_1_youtube"];
      document.getElementById("song_2_name").innerText = arr_campos["song_2_name"];
      document.getElementById("song_2_txt").innerText = arr_campos["song_2_txt"]; 
      document.getElementById("song_2_image").src = arr_campos["song_2_image"];
      document.getElementById("song_2_youtube").src = arr_campos["song_2_youtube"];
      document.getElementById("song_3_name").innerText = arr_campos["song_3_name"];
      document.getElementById("song_3_txt").innerText = arr_campos["song_3_txt"];
      document.getElementById("song_3_image").src = arr_campos["song_3_image"];
      document.getElementById("song_3_youtube").src = arr_campos["song_3_youtube"];
      }
  }; 

  averiguarFrecuenciaMusica = function (){
      var frecuency = document.getElementById("frecuecia_musica").value;
      if (frecuency == 'daily'){
        FrecuenciaMusica();}
      if (frecuency == 'weekly'){
            location.reload();}
};

//              fin de funciones            //

  if (!localStorage.elIdioma) {
    localStorage.elIdioma = 'es';
    }

var elIdioma     = localStorage.elIdioma; //document.getElementById("language").value;
var laFrecuencia = document.getElementById("frecuecia_musica").value;
establecerContenidosTags(elIdioma);
titulo = averiguarOracionSemana(elIdioma);
cargarContenidos(titulo);
dailyVerseFunc();
FrecuenciaMusica();

};
// PENDIENTES
// 
// 
// promoción
