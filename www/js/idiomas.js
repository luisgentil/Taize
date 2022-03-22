// version: 3
// adaptado de idiomas.txt, según las instrucciones del final de este archivo, más:
// añadir línea 7 (var textos=[) y otra final (]). Sustituir ("[," por [) y (",]," por ],) a cada línea.  
// sustituyo 'español' por 'es', y 'english' por 'en'
// no se pueden usar exactamente todos los mismos campos que en App Inventor, hay que comentar los que no sirven
// y hay que añadir campos nuevos, como las tabs

var textos = [
["campo","es","en","fr","pl"],
["screen1_Titulo_pral","Oración para hoy de Taizé","Taize prayer", "Prières pour chaque jour", "Modlitwa Taizé na każdy dzień"],
["screen1_titulo_2","Bienvenida" ,"Welcome","Bienvenue", "Witamy"],
//["screen1_But_Menu",,],
["screen1_Textos_1","Hola, esta web redifunde la <a href='http://taize.fr/es_article1206.html'>'Oración para hoy'</a> de Taizé, añadiendo música de Youtube. <br>Ofrece los mismos contenidos, insertando tres cantos desde Youtube. Puedes elegir entre cantos diarios o semanales.","Welcome. <br> This web shares the <a href='http://taize.fr/en_article5806.html'>'Prayer for each day'</a> from Taize web, adding Youtube music.<br>It offers the same contents, inserting three songs from Youtube. You can choose between daily or weekly songs.", "Bonjour, ce site redéfinit la <a href='http://taize.fr/fr_article212.html'> 'Prières pour chaque jour' </a> de Taizé, en ajoutant de la musique Youtube. <br> Il offre le même contenu en insérant trois chansons de Youtube. Vous pouvez choisir entre des chansons quotidiennes ou hebdomadaires.", "Witamy. <br> Ta strona udostępnia <a href='http://taize.fr/pl_article26.html'> „Modlitwa na każdy dzień” </a> z sieci Taize, dodając muzykę z Youtube. <br> Oferuje to samo zawartość, wstawiając trzy utwory z YouTube. Możesz wybierać między codziennymi lub cotygodniowymi utworami."],
["screen1_textos_2","Disponible en español, inglés, francés y polaco (por ahora). Puedes colaborar con las traducciones a otros idiomas, si lo deseas.","Available in spanish, english, french and polish (now). You can help in translations into other languages, if desired.", "Disponible en français, espagnol, anglais et polir (pour l'instant). Vous pouvez collaborer avec les traductions dans d'autres langues, si vous le souhaitez.", "Dostępne w języku polskim, hiszpańskim, angielskim i francuskim."],
/*["screen1_LoadingDialogMessage","Cargando oración de hoy...","Loading today prayer..."],
["screen1_textos_3_quizas_Borrar",,],
["screen1_But_Comenzar","avanzar","continue"],
["screen1_But_Guia","Guía de Uso","User guide"],
["screen1_Button_Config","Opciones","Options"],
["screen1_Button_more","Más","More"],
["screen1_Button_cerrar","Cerrar App","Exit"],
["main_music_tag", "Música: ", "Music: ", "Musique: "],*/
["main_But_continuar","continuar","continue", "continuer", "kontynuować"],
['main_weekly','semanal', 'Weekly', "hebdomadaire","co tydzień"],
['main_daily', 'diaria',  'Daily',  "quotidienne", "codziennie"],
/*["main_Nombre","Main window","Main window"],
["main_etiqueta","Ahora:","Now:"],
["main_Estado","Estado","State"],
["main_But_Menu",,],
["main_separacion_1",,],
["main_Titulo","titulo","Title"],
["main_Texto",,],
["main_separacion_2",,],
["main_But_comenzar_again","Comenzar de nuevo","Start again"],
["main_But_terminar","Cerrar App","Exit"],
["main_But_guia","Guía de Uso","User guide"],
["main_But_options","Opciones","Options"],
["main_But_more","Más","More"],
["main_But_cerrar","Cerrar App","Exit"],*/
["ascreen1","","","",""],
["asong1","Taize cantos 1","Taize song from Youtube 1", "Taize chants 1","Taize kanony 1" ],
["apsalm","Salmo","Psalm","Psaume", "Psalm"],
["areading","Lectura","Reading","Lecture", "Czytanie"],
["asong2","Taizé cantos 2","Song 2", "Taize chants 2", "Taize kanony 2"],
["asilence","Silencio","Silence","Silence", "Cisza"],
["aintercessions","Peticiones","Intercessions","Prière de louange", "Petycje"],
["aour_father","Padre Nuestro","Our Father", "Notre Père", "Ojcze nasz"],
["aprayer","Oración","Prayer","Prière", "Modlitwa"],
["asong3","Taizé cantos 3","Song 3", "Taize chants 3", "Taize kanony 3"],
/*["main_terminar","Terminado","End"],
["config_Titulo_Pral","Opciones","Options"],
["config_Titulo_2",,],
["config_Button_menu",,],
["config_Texto_pral","Elige las opciones que te interesen. <p> No todas están disponibles por ahora.","Choose the options. <p> Not all are available for now"],
["config_Label_Idioma","Idioma","Language"],
["config_Label_Musica","Música","Music"],
["config_Label_duracion","Duración silencio","Silence duration"],
["config_Check_spanish","Español","Spanish"],
["config_Check_english","Inglés","English"],
["config_Check_guitar","Guitarra","Guitar"],
["config_Check_melody","Melodía","Melody"],
["config_Check_1_min","1 minuto","1 min"],
["config_Check_3_min","3 min","3 min"],
["config_Check_Sí_part","Sí","Yes"],
["config_Check_No_part","No","No"],
["config_Label_partituras","Ver partituras","See sheet music"],
["config_But_main_window","Volver","Back"],
["config_user_guide","Guía de Uso","User Guide"],
["config_Button_more","Más","More"],
["config_cerrar","Cerrar App","Exit"],
["contact_Titulo_Pral","Otros recursos","Resources"],
["contact_titulo_2",,],
["contact_But_menu",,],
["contact_texto_otros","Una oración semanal vía Podcast en taize.fr <br>Oración del sábado por la tarde emitida desde Taizé vía <a>Domradio</a> (radio católica alemana)"," A weekly prayer via Podcast on taize.fr <br> Saturday evening prayer broadcast from Taizé via <a> Domradio </ a > (German Catholic radio)"],
["contact_Label_credits","Créditos","Credits"],
["contact_texto_credits","Música y textos de © Ateliers et Presses de Taizé. Fotos de: Paul Hermann - Carolyn V - Nicola Fioravanti - Marco Salas en Unsplash <br>","Music and texts from © Ateliers et Presses de Taizé. <br> Photos by:  Paul Hermann - Carolyn V - Nicola Fioravanti - Marco Salas on Unsplash<br>"],
["contact_Label_contact","Contacto","Contact"],
["contact_texto_contact","Envía un mail al autor","Send an email to the author of the app"],
["contact_But_main_W","Volver","Back"],
["contact_But_guia","Guía de Uso","User Guide"],
["contact_Button_Opciones","Opciones","Options"],
["contact_Button_cerrar","Cerrar App","Exit"],
["user_guide_Titulo_Pral","Guía de Uso","User Guide"],
["user_guide_titulo_2",,],
["user_guide_But_menu",,],
["user_guide_texto_guia","Sólo abre la app y espera a que se carguen los datos. Pulsa comenzar.<br>En el menú puedes acceder a las opciones y otros recursos.<br>"," Just open the app and wait for the data to load. Press start. <br> In the menu you can access the options and other resources. <br>"],
["user_guide_But_Volver","Volver","Back"],
["user_guide_But_Configurar","Opciones","Options"],
["user_guide_But_mas","Más","More"],
["user_guide_But_salir","Cerrar App","Exit"],*/
]



// Instrucciones de adaptación desde el archivo 'idiomas.txt'",,,,
// abrir desde Calc, revisar bien los acentos (versión de caracteres usada). Añadir columnainicial, con corchete '[', y otra final, con corchete-coma '],”",,,,
// guardar como… csv, marcando la opción 'Editar configuración de filtros'.",,,,
// en ese menú, revisar que la configuración de caracteres es UTF-8, y marcar casilla de entrecomillar textos.",,,,

/* instrucciones completas para añadir un nuevo idioma
En index.html:
- select id="language": añadir <option value="**">****</option>

En idioma.js:
- añadir la traducción de todos los campos, 1 por línea

En index.js:
- 

En cantos.js:
- actualizar el fichero, para añadir las filas del nuevo idioma, a partir de la hoja de cálculo "Pruebas Taizé" en Calc, y siguiendo las instrucciones situadas al final de fichero 'cantos.js'

En fechas.js:
- actualizar el fichero, para incluir la columna correspondiente al nuevo idioma,  a partir de la hoja de cálculo "" en **, y siguiendo las instrucciones situadas al final de fichero 'fechas.js' 


Además: 
- crear home_**.html



*/
