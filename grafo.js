
var iMaxNum = 9;
var i, j, k;
var GraphTable = new Array(iMaxNum );
var Nodes = new Array(iMaxNum);
var Marker_value = 0; 
var marker;
 function nuevo_juego(){
 	init_caminos();
 	procesar_bombas();
 }
 function buscar_texture(id){
 	
 	add_markers(id);
 	return marker; 	
 }
 function terminar(){

 }
 function imprimir(){
 	for (var i = 0; i < 9; i++) {
 		console.log(i+" "+buscar_vecinos(i));
 		//console.log(Nodes[i]);
 	}
 	
 }
 function add_markers(id){
 	var vecinos = buscar_vecinos(id);
 	
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
 	var abc = "A B C E F G K M Q"; 
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
 function buscar_vecinos(id){

 	var sum = 0; 
 	for (k = 0; k < iMaxNum; k++)
	{
		if(GraphTable[id][k] == 1 && Nodes[k] == 1){

			sum++;
		}
		
	}
	return sum;
 }
 function procesar_bombas(){ 
 //se ponen aleatoriamente las bombas 0 vacio 1 bomba
	for (k = 0; k < iMaxNum; k++)
	{
		Nodes[k] = Math.round( Math.random());
	}
	//Nodes[3] = 1;
 }
function buscar_bomba(id){

	if(Nodes[id] == 1){
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
	/* //cuadrado
	GraphTable[0][1]= 1;
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
}
