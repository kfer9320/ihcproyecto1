
var iMaxNum = 24;
var i, j, k;
var GraphTable = new Array(iMaxNum );
var Nodes = new Array(iMaxNum);
var Nodes_equipos = new Array(iMaxNum);
var Marker_value = 0; 
var marker;
 function nuevo_juego(){
 	init_caminos();
 	procesar_bombas();
 	procesar_equipos();
 }
 function buscar_texture(id){
 	
 	add_markers(id);
 	return marker; 	
 }
 function terminar(){

 }
 
 function add_markers(id,equipo){
 	var vecinos = buscar_vecinos(id,equipo);
 	
 	switch (vecinos) {
	    case 0:
	        marker = "0.gif";
	        break;
	    case 1:
	        marker = "1.gif";
	        break;
	    case 2:
	        marker = "2.gif";
	        break;
	    case 3:
	        marker = "3.gif";
	        break;
	    case 4:
	        marker = "4.gif";
	        break;
	    case 5:
	        marker = "5.gif";
	        break;
	    case 6:
	        marker = "6.gif";

	    case 7:
	        marker = "7.gif";
	}
 } 
 function buscar_vecinos_string(id){
 	var abc = "Cuadrado Estrella Triangulo 4 6 A AR B C E -> <-> H I K L Lazo M N P ? Q Alfa Omega"; 
 	var str ="";
 	for (k = 0; k < iMaxNum; k++)
	{
		if(GraphTable[id][k] == 1 && id != k){

			str += abc[k*2];
			str +=" ";	
		}
		
	}
	return str;
 }
 function buscar_vecinos(id,equipo){
    if(id >= 0 && id < 24 ){
	 	var sum = 0; 
	 	for (k = 0; k < iMaxNum; k++)
		{
			if(GraphTable[id][k] == 1 && Nodes[k] == 1 &&  Nodes_equipos[k]!=equipo){

				sum++;
			}
			
		}
		return sum;
	}
	else{
		return 1;
	}
 }
 function procesar_bombas(){ 
 //se ponen aleatoriamente las bombas 0 vacio 1 bomba
	for (k = 0; k < iMaxNum; k++)
	{
		Nodes[k] = 0;//Math.round( Math.random());
	}
	/*Nodes[3] = 1;
	Nodes[9] = 1;
	Nodes[19] = 1;
	Nodes[5] = 1;
	Nodes[11] = 1;
	Nodes[15] = 1;*/
 }
function procesar_equipos(){ 
 //se ponen aleatoriamente las bombas 0 vacio 1 bomba
	for (k = 0; k < iMaxNum; k++)
	{
		Nodes_equipos[k] = 0;//Math.round( Math.random());
	}
 }
 function buscar_t(id,equipo){ //saber si puedo poner mas bombas o no 

 	var sum_bombas = 0;
 	var sum_enlaces = 0; 
	 	for (k = 0; k < iMaxNum; k++)
		{
			if(GraphTable[id][k] == 1 && Nodes[k] == 1 && Nodes_equipos[k]==equipo){

				sum_bombas++;
			}
			if(GraphTable[id][k] == 1){

				sum_enlaces++;
			}
		}
	console.log(sum_bombas);
	console.log(sum_enlaces);
	if(sum_bombas+2 < sum_enlaces)
		return true;
	else
		return false;
	
 }
 function poner_equipo(id,equipo){
 	Nodes_equipos[id] = equipo;
 }
 function poner_bomba_primaria(id,equipo){
 	Nodes[id] = 2;
 	Nodes_equipos[id] = equipo;
 }
 function poner_bomba_secundaria(id,equipo){
 	Nodes[id] = 1;
 	Nodes_equipos[id] = equipo;
 }
 function sacar_bomba_secundaria(id){
 	Nodes[id] = 0;
 	Nodes_equipos[id] = 0;
 }
 function ganar(id){
 	if (Nodes[id] == 2)
 		return true;
 	else return false;
 }
function buscar_bomba(id,equipo){

	if(equipo == Nodes_equipos[id]){
		return 0;
	}
	else{
		if(Nodes[id] == 1){
			return 1;
		}
		else return 0;
	}
	
}
function buscar_bomba_principal(id,equipo){

	if(Nodes[id] == 2 && Nodes_equipos[id]!= equipo){
		return 1;
	}
	else return 0;
}
function vacios(){
	var sum = 0 ;
	for (k = 0; k < iMaxNum; k++){
		if(Nodes[k] == 0){
			sum++;
		}
	}
	return sum;
}
function init_caminos(){

	for (i = 0; i < iMaxNum; i++)
	{
	    // Create the columns in the table
	    GraphTable[i] = new Array(iMaxNum );

	    // Fill the row with the results of the multiplication
	    for (j = 0; j < iMaxNum; j++)
	    {
	        GraphTable[i][j] = 0;
	    }
	}
	//6*4
	//0  1  2  3
	//4  5  6  7
	//8  9  10 11
	//12 13 14 15
	//16 17 18 19
	//20 21 22 23
	GraphTable[20][16]= 1;
	GraphTable[20][17]= 1;
	GraphTable[20][21]= 1;
	GraphTable[21][20]= 1;
	GraphTable[21][16]= 1;
	GraphTable[21][17]= 1;
	GraphTable[21][18]= 1;
	GraphTable[21][22]= 1;
	GraphTable[22][21]= 1;
	GraphTable[22][17]= 1;
	GraphTable[22][18]= 1;
	GraphTable[22][19]= 1;
	GraphTable[22][23]= 1;
	GraphTable[23][22]= 1;
	GraphTable[23][18]= 1;
	GraphTable[23][19]= 1;

	GraphTable[0][1]= 1;
	GraphTable[0][4]= 1;
	GraphTable[0][5]= 1;
	GraphTable[1][0]= 1;
	GraphTable[1][2]= 1;
	GraphTable[1][4]= 1;
	GraphTable[1][5]= 1;
	GraphTable[1][6]= 1;
	GraphTable[2][1]= 1;
	GraphTable[2][3]= 1;
	GraphTable[2][7]= 1;
	GraphTable[2][5]= 1;
	GraphTable[2][6]= 1;
	GraphTable[3][2]= 1;
	GraphTable[3][6]= 1;
	GraphTable[3][7]= 1;	
	for (var i = 1; i < 5; i++) {
		GraphTable[(i*4)][0+((i-1)*4)]= 1;
		GraphTable[(i*4)][1+((i-1)*4)]= 1;
		GraphTable[(i*4)][5+((i-1)*4)]= 1;
		GraphTable[(i*4)][8+((i-1)*4)]= 1;
		GraphTable[(i*4)][9+((i-1)*4)]= 1;

	}
	for (var i = 1; i < 5; i++) {
		GraphTable[(i*4)+1][0+((i-1)*4)]= 1;
		GraphTable[(i*4)+1][1+((i-1)*4)]= 1;
		GraphTable[(i*4)+1][2+((i-1)*4)]= 1;
		GraphTable[(i*4)+1][4+((i-1)*4)]= 1;
		GraphTable[(i*4)+1][6+((i-1)*4)]= 1;
		GraphTable[(i*4)+1][8+((i-1)*4)]= 1;
		GraphTable[(i*4)+1][9+((i-1)*4)]= 1;
		GraphTable[(i*4)+1][10+((i-1)*4)]= 1;

	}
	for (var i = 1; i < 5; i++) {
		GraphTable[(i*4)+2][1+((i-1)*4)]= 1;
		GraphTable[(i*4)+2][2+((i-1)*4)]= 1;
		GraphTable[(i*4)+2][3+((i-1)*4)]= 1;
		GraphTable[(i*4)+2][5+((i-1)*4)]= 1;
		GraphTable[(i*4)+2][7+((i-1)*4)]= 1;
		GraphTable[(i*4)+2][9+((i-1)*4)]= 1;
		GraphTable[(i*4)+2][10+((i-1)*4)]= 1;
		GraphTable[(i*4)+2][11+((i-1)*4)]= 1;

	}
	for (var i = 1; i < 5; i++) {
		GraphTable[(i*4)+3][2+((i-1)*4)]= 1;
		GraphTable[(i*4)+3][3+((i-1)*4)]= 1;
		GraphTable[(i*4)+3][6+((i-1)*4)]= 1;
		GraphTable[(i*4)+3][10+((i-1)*4)]= 1;
		GraphTable[(i*4)+3][11+((i-1)*4)]= 1;

	}
	 //cuadrado
	/*GraphTable[0][1]= 1;
	GraphTable[0][3]= 1;
	GraphTable[0][4]= 1;
	GraphTable[1][0]= 1;
	GraphTable[1][2]= 1;
	GraphTable[1][3]= 1;
	GraphTable[1][4]= 1;
	GraphTable[1][5]= 1;
	GraphTable[2][4]= 1;
	GraphTable[2][5]= 1;
	GraphTable[2][1]= 1;
	GraphTable[3][0]= 1;
	GraphTable[3][1]= 1;
	GraphTable[3][4]= 1;
	GraphTable[3][6]= 1;
	GraphTable[3][7]= 1;

	GraphTable[4][0]= 1;
	GraphTable[4][1]= 1;
	GraphTable[4][2]= 1;
	GraphTable[4][3]= 1;
	GraphTable[4][5]= 1;
	GraphTable[4][6]= 1;
	GraphTable[4][7]= 1;
	GraphTable[4][8]= 1;
	GraphTable[5][1]= 1;
	GraphTable[5][2]= 1;
	GraphTable[5][4]= 1;
	GraphTable[5][7]= 1;
	GraphTable[5][8]= 1;
	GraphTable[6][3]= 1;
	GraphTable[6][4]= 1;
	GraphTable[6][7]= 1;

	GraphTable[7][3]= 1;
	GraphTable[7][4]= 1;
	GraphTable[7][5]= 1;
	GraphTable[7][6]= 1;
	GraphTable[7][8]= 1;
	GraphTable[8][4]= 1;
	GraphTable[8][5]= 1;
	GraphTable[8][7]= 1;
	*/
 
 /*
 	GraphTable[0][1]= 1;
	GraphTable[1][2]= 1;
	GraphTable[1][0]= 1;
	GraphTable[2][1]= 1;
	GraphTable[2][4]= 1;
	GraphTable[2][5]= 1;
	GraphTable[3][4]= 1;
	GraphTable[4][2]= 1;
	GraphTable[4][3]= 1;
	GraphTable[4][5]= 1;
	GraphTable[5][2]= 1;
	GraphTable[5][4]= 1;
	GraphTable[5][6]= 1;
	GraphTable[6][5]= 1;
	GraphTable[6][7]= 1;
	GraphTable[7][6]= 1;
	GraphTable[7][8]= 1;
	GraphTable[8][7]= 1;
	*/
}
