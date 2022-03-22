// version: 3
// adaptado de fechas.csv, según las instrucciones del final de este archivo, más:
// añadir línea 7 (var fechas=[) y otra final (]). Sustituir ("[," por [) y (",]," por ],) a cada línea.  
// sustituyo 'español' por 'es', y 'english' por 'en'
// no se pueden usar exactamente todos los mismos campos que en App Inventor, hay que comentar los que no sirven
// y hay que añadir campos nuevos, como las tabs
var fechas = [
["01/01/2018 00:00","Navidad","Christmas","Noël",],
["01/08/2018 00:00","Tiempo de la Iglesia","Time of the Church",,],
["02/14/2018 00:00","Cuaresma","Lent","Carême",],
["03/25/2018 00:00","Semana Santa","Holy Week",,],
["04/01/2018 00:00","Pascua","Easter",,],
["05/20/2018 00:00","Pentecostés 1","Pentecost",,],
["05/27/2018 00:00","Tiempo de la Iglesia 1","Time of the Church 1",,],
["06/03/2018 00:00","Tiempo de la Iglesia 2","Time of the Church 2",,],
["06/10/2018 00:00","Tiempo de la Iglesia 3","Time of the Church 3",,],
["06/17/2018 00:00","Tiempo de la Iglesia 4","Time of the Church 4",,],
["06/24/2018 00:00","Tiempo de la Iglesia 5","Time of the Church 5",,],
["07/01/2018 00:00","Tiempo de la Iglesia 6","Time of the Church 6",,],
["07/08/2018 00:00","Tiempo de la Iglesia 7","Time of the Church 7",,],
["07/15/2018 00:00","Tiempo de la Iglesia 8","Time of the Church 8",,],
["07/22/2018 00:00","Tiempo de la Iglesia 9","Time of the Church 9",,],
["07/29/2018 00:00","Tiempo de la Iglesia 10","Time of the Church 10",,],
["08/05/2018 00:00","Tiempo de la Iglesia 11","Time of the Church 11",,],
["08/12/2018 00:00","Tiempo de la Iglesia 12","Time of the Church 12",,],
["08/19/2018 00:00","Tiempo de la Iglesia 13","Time of the Church 13",,],
["08/26/2018 00:00","Tiempo de la Iglesia 14","Time of the Church 14",,],
["09/02/2018 00:00","Tiempo de la Iglesia 1","Time of the Church 1",,],
["09/09/2018 00:00","Tiempo de la Iglesia 2","Time of the Church 2",,],
["09/16/2018 00:00","Tiempo de la Iglesia 3","Time of the Church 3",,],
["09/23/2018 00:00","Tiempo de la Iglesia 4","Time of the Church 4",,],
["09/30/2018 00:00","Tiempo de la Iglesia 5","Time of the Church 5",,],
["10/07/2018 00:00","Tiempo de la Iglesia 6","Time of the Church 6",,],
["10/14/2018 00:00","Tiempo de la Iglesia 7","Time of the Church 7",,],
["10/21/2018 00:00","Tiempo de la Iglesia 8","Time of the Church 8",,],
["10/28/2018 00:00","Tiempo de la Iglesia 9","Time of the Church 9",,],
["11/04/2018 00:00","Tiempo de la Iglesia 10","Time of the Church 10",,],
["11/11/2018 00:00","Tiempo de la Iglesia 11","Time of the Church 11",,],
["11/18/2018 00:00","Tiempo de la Iglesia 12","Time of the Church 12",,],
["11/25/2018 00:00","Tiempo de la Iglesia 13","Time of the Church 13",,],
["12/02/2018 00:00","Adviento 1","Advent 1",,],
["12/09/2018 00:00","Adviento 2","Advent 2",,],
["12/16/2018 00:00","Adviento 3","Advent 3",,],
["12/23/2018 00:00","Adviento 4","Advent 4",,],
["12/25/2018 00:00","Navidad 1","Christmas 1",,],
["12/30/2018 00:00","Navidad 2","Christmas 2",,],
["01/06/2019 00:00","Tiempo de la Iglesia 14","Time of the Church 14",,],
["01/13/2019 00:00","Tiempo de la Iglesia 1","Time of the Church 1","Temps de l’Église 1",],
["01/20/2019 00:00","Tiempo de la Iglesia 2","Time of the Church 2","Temps de l’Église 2",],
["01/27/2019 00:00","Tiempo de la Iglesia 3","Time of the Church 3","Temps de l’Église 3",],
["02/03/2019 00:00","Tiempo de la Iglesia 4","Time of the Church 4","Temps de l’Église 4",],
["02/10/2019 00:00","Tiempo de la Iglesia 5","Time of the Church 5","Temps de l’Église 5",],
["02/17/2019 00:00","Tiempo de la Iglesia 6","Time of the Church 6","Temps de l’Église 6",],
["02/24/2019 00:00","Tiempo de la Iglesia 7","Time of the Church 7","Temps de l’Église 7",],
["03/03/2019 00:00","Tiempo de la Iglesia 8","Time of the Church 8","Temps de l’Église 8",],
["03/06/2019 00:01","Cuaresma 1","Lent 1","Carême 1",],
["03/10/2019 00:00","Cuaresma 2","Lent 2","Carême 2",],
["03/17/2019 00:00","Cuaresma 3","Lent 3","Carême 3",],
["03/24/2019 00:00","Cuaresma 4","Lent 4","Carême 4",],
["03/31/2019 00:00","Cuaresma 5","Lent 5","Carême 5",],
["04/07/2019 00:00","Cuaresma 6","Lent 6","Carême 6",],
["04/14/2019 00:00","Semana Santa 1","Holy Week 1","Semaine Sainte 1",],
["04/21/2019 00:00","Pascua 1","Easter 1","Pâques 1",],
["04/28/2019 00:00","Pascua 2","Easter 2","Pâques 2",],
["05/05/2019 00:00","Pascua 3","Easter 3","Pâques 3",],
["05/12/2019 00:00","Pascua 4","Easter 4","Pâques 4",],
["05/19/2019 00:00","Pascua 5","Easter 5","Pâques 5",],
["05/26/2019 00:00","Pascua 6","Easter 6","Pâques 6",],
["06/02/2019 00:00","Pascua 7","Easter 7","Pâques 7",],
["06/09/2019 00:00","Pentecostés 1","Pentecost 1","Pentecôte 1",],
["06/16/2019 00:00","Tiempo de la Iglesia 9","Time of the Church 9","Temps de l’Église 9",],
["06/23/2019 00:00","Tiempo de la Iglesia 10","Time of the Church 10","Temps de l’Église 10",],
["06/30/2019 00:00","Tiempo de la Iglesia 11","Time of the Church 11","Temps de l’Église 11",],
["07/07/2019 00:00","Tiempo de la Iglesia 12","Time of the Church 12","Temps de l’Église 12",],
["07/14/2019 00:00","Tiempo de la Iglesia 13","Time of the Church 13","Temps de l’Église 13",],
["07/21/2019 00:00","Tiempo de la Iglesia 14","Time of the Church 14","Temps de l’Église 14",],
["07/28/2019 00:00","Tiempo de la Iglesia 1","Time of the Church 1","Temps de l’Église 1",],
["08/04/2019 00:00","Tiempo de la Iglesia 2","Time of the Church 2","Temps de l’Église 2",],
["08/11/2019 00:00","Tiempo de la Iglesia 3","Time of the Church 3","Temps de l’Église 3",],
["08/18/2019 00:00","Tiempo de la Iglesia 4","Time of the Church 4","Temps de l’Église 4",],
["08/25/2019 00:00","Tiempo de la Iglesia 5","Time of the Church 5","Temps de l’Église 5",],
["09/01/2019 00:00","Tiempo de la Iglesia 6","Time of the Church 6","Temps de l’Église 6",],
["09/08/2019 00:00","Tiempo de la Iglesia 7","Time of the Church 7","Temps de l’Église 7",],
["09/15/2019 00:00","Tiempo de la Iglesia 8","Time of the Church 8","Temps de l’Église 8",],
["09/22/2019 00:00","Tiempo de la Iglesia 9","Time of the Church 9","Temps de l’Église 9",],
["09/29/2019 00:00","Tiempo de la Iglesia 10","Time of the Church 10","Temps de l’Église 10",],
["10/06/2019 00:00","Tiempo de la Iglesia 11","Time of the Church 11","Temps de l’Église 11",],
["10/13/2019 00:00","Tiempo de la Iglesia 12","Time of the Church 12","Temps de l’Église 12",],
["10/20/2019 00:00","Tiempo de la Iglesia 13","Time of the Church 13","Temps de l’Église 13",],
["10/27/2019 00:00","Tiempo de la Iglesia 14","Time of the Church 14","Temps de l’Église 14",],
["11/03/2019 00:00","Tiempo de la Iglesia 1","Time of the Church 1","Temps de l’Église 1",],
["11/10/2019 00:00","Tiempo de la Iglesia 2","Time of the Church 2","Temps de l’Église 2","Czas zwykły 2"],
["11/17/2019 00:00","Tiempo de la Iglesia 3","Time of the Church 3","Temps de l’Église 3","Czas zwykły 3"],
["11/24/2019 00:00","Tiempo de la Iglesia 4","Time of the Church 4","Temps de l’Église 4","Czas zwykły 4"],
["12/01/2019 00:00","Adviento 1","Advent 1","Avent 1","Adwent 1 "],
["12/08/2019 00:00","Adviento 2","Advent 2","Avent 2","Adwent 2 "],
["12/15/2019 00:00","Adviento 3","Advent 3","Avent 3","Adwent 3"],
["12/22/2019 00:00","Adviento 4","Advent 4","Avent 4","Adwent 4 "],
["12/25/2019 00:00","Navidad 1","Christmas 1","Noël 1","Boże Narodzenie 1 "],
["12/25/2019 00:00","Navidad 2","Christmas 2","Noël 2","Boże Narodzenie 2"],
["01/12/2020 00:00","Tiempo de la Iglesia 6","Time of the Church 6","Temps de l’Église 6","Czas zwykły 6"],
["01/19/2020 00:00","Tiempo de la Iglesia 7","Time of the Church 7","Temps de l’Église 7","Czas zwykły 7"],
["01/26/2020 00:00","Tiempo de la Iglesia 8","Time of the Church 8","Temps de l’Église 8","Czas zwykły 8"],
["02/02/2020 00:00","Tiempo de la Iglesia 9","Time of the Church 9","Temps de l’Église 9","Czas zwykły 9"],
["02/09/2020 00:00","Tiempo de la Iglesia 10","Time of the Church 10","Temps de l’Église 10","Czas zwykły 10"],
["02/16/2020 00:00","Tiempo de la Iglesia 11","Time of the Church 11","Temps de l’Église 11","Czas zwykły 11"],
["02/23/2020 00:00","Tiempo de la Iglesia 12","Time of the Church 12","Temps de l’Église 12","Czas zwykły 12"],
["02/26/2020 00:00","Cuaresma 1","Lent 1","Carême 1","Wielki post 1 "],
["03/01/2020 00:00","Cuaresma 2","Lent 2","Carême 2","Wielki post 2"],
["03/08/2020 00:00","Cuaresma 3","Lent 3","Carême 3","Wielki post 3"],
["03/15/2020 00:00","Cuaresma 4","Lent 4","Carême 4","Wielki post 4"],
["03/22/2020 00:00","Cuaresma 5","Lent 5","Carême 5","Wielki post 5"],
["03/29/2020 00:00","Cuaresma 6","Lent 6","Carême 6","Wielki post 6"],
["04/05/2020 00:00","Semana Santa 1","Holy Week 1","Semaine Sainte 1","Wielki Tydzień 1 "],
["04/12/2020 00:00","Pascua 1","Easter 1","Pâques 1","Wielkanoc 1 "],
["04/19/2020 00:00","Pascua 2","Easter 2","Pâques 2","Wielkanoc 2"],
["04/26/2020 00:00","Pascua 3","Easter 3","Pâques 3","Wielkanoc 3"],
["05/03/2020 00:00","Pascua 4","Easter 4","Pâques 4","Wielkanoc 4"],
["05/10/2020 00:00","Pascua 5","Easter 5","Pâques 5","Wielkanoc 5"],
["05/17/2020 00:00","Pascua 6","Easter 6","Pâques 6","Wielkanoc 6"],
["05/24/2020 00:00","Pascua 7","Easter 7","Pâques 7","Wielkanoc 7"],
["05/31/2020 00:00","Pentecostés 1","Pentecost 1","Pentecôte 1","Zesłanie Ducha Świętego 1 "],
["06/07/2020 00:00","Tiempo de la Iglesia 12","Time of the Church 12","Temps de l’Église 12","Czas zwykły 12"],
["06/14/2020 00:00","Tiempo de la Iglesia 13","Time of the Church 13","Temps de l’Église 13","Czas zwykły 13"],
["06/21/2020 00:00","Tiempo de la Iglesia 14","Time of the Church 14","Temps de l’Église 14","Czas zwykły 14"],
["06/28/2020 00:00","Tiempo de la Iglesia 1","Time of the Church 1","Temps de l’Église 1","Czas zwykły 1"],
["07/05/2020 00:00","Tiempo de la Iglesia 2","Time of the Church 2","Temps de l’Église 2","Czas zwykły 2"],
["07/12/2020 00:00","Tiempo de la Iglesia 3","Time of the Church 3","Temps de l’Église 3","Czas zwykły 3"],
["07/19/2020 00:00","Tiempo de la Iglesia 4","Time of the Church 4","Temps de l’Église 4","Czas zwykły 4"],
["07/26/2020 00:00","Tiempo de la Iglesia 5","Time of the Church 5","Temps de l’Église 5","Czas zwykły 5"],
["08/02/2020 00:00","Tiempo de la Iglesia 6","Time of the Church 6","Temps de l’Église 6","Czas zwykły 6"],
["08/09/2020 00:00","Tiempo de la Iglesia 7","Time of the Church 7","Temps de l’Église 7","Czas zwykły 7"],
["08/16/2020 00:00","Tiempo de la Iglesia 8","Time of the Church 8","Temps de l’Église 8","Czas zwykły 8"],
["08/23/2020 00:00","Tiempo de la Iglesia 9","Time of the Church 9","Temps de l’Église 9","Czas zwykły 9"],
["08/30/2020 00:00","Tiempo de la Iglesia 10","Time of the Church 10","Temps de l’Église 10","Czas zwykły 10"],
["09/06/2020 00:00","Tiempo de la Iglesia 11","Time of the Church 11","Temps de l’Église 11","Czas zwykły 11"],
["09/13/2020 00:00","Tiempo de la Iglesia 12","Time of the Church 12","Temps de l’Église 12","Czas zwykły 12"],
["09/20/2020 00:00","Tiempo de la Iglesia 13","Time of the Church 13","Temps de l’Église 13","Czas zwykły 13"],
["09/27/2020 00:00","Tiempo de la Iglesia 14","Time of the Church 14","Temps de l’Église 14","Czas zwykły 14"],
["10/04/2020 00:00","Tiempo de la Iglesia 1","Time of the Church 1","Temps de l’Église 1","Czas zwykły 1"],
["10/11/2020 00:00","Tiempo de la Iglesia 2","Time of the Church 2","Temps de l’Église 2","Czas zwykły 2"],
["10/18/2020 00:00","Tiempo de la Iglesia 3","Time of the Church 3","Temps de l’Église 3","Czas zwykły 3"],
["10/25/2020 00:00","Tiempo de la Iglesia 4","Time of the Church 4","Temps de l’Église 4","Czas zwykły 4"],
["11/01/2020 00:00","Tiempo de la Iglesia 5","Time of the Church 5","Temps de l’Église 5","Czas zwykły 5"],
["11/08/2020 00:00","Tiempo de la Iglesia 6","Time of the Church 6","Temps de l’Église 6","Czas zwykły 6"],
["11/15/2020 00:00","Tiempo de la Iglesia 7","Time of the Church 7","Temps de l’Église 7","Czas zwykły 7"],
["11/22/2020 00:00","Tiempo de la Iglesia 8","Time of the Church 8","Temps de l’Église 8","Czas zwykły 8"],
["11/29/2020 00:00","Adviento 1","Advent 1","Avent 1","Adwent 1 "],
["12/06/2020 00:00","Adviento 2","Advent 2","Avent 2","Adwent 2 "],
["12/13/2020 00:00","Adviento 3","Advent 3","Avent 3","Adwent 3"],
["12/20/2020 00:00","Adviento 4","Advent 4","Avent 4","Adwent 4 "],
["12/25/2020 00:00","Navidad 1","Christmas 1","Noël 1","Boże Narodzenie 1 "],
["12/27/2020 00:00","Navidad 2","Christmas 2","Noël 2","Boże Narodzenie 2"]
]



// Instrucciones de adaptación desde el archivo 'fechas.csv'",,,,
// abrir desde Calc, revisar bien los acentos (versión de caracteres usada). Añadir columna inicial, con corchete '[', y otra final, con corchete-coma '],”",,,,
// guardar como… csv, marcando la opción 'Editar configuración de filtros'.",,,,
// en ese menú, revisar que la configuración de caracteres es UTF-8, y marcar casilla de entrecomillar textos.",,,,