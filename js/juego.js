	function getRandomArbitrary(min, max) {
	  return Math.random() * (max - min) + min;
	}
	ruleta = Math.round(getRandomArbitrary(1,21));
	console.log(ruleta);
	var vidas = 3;
	var pos_mouse_x = 0;
	var pos_mouse_y = 0;
	var contador = 0;
	var operacion_id = 0; //0:vacio, 1:bombasec, 2:bombapri, 3:buscar
	var estado = 0; //0=buscar , 1 = bombaSec,  2 = bombaPri
	var vac = vacios();
	var id_equipo = 0;
	var tiempo = 240;// seg
	document.getElementById('contenedor').innerHTML='<audio src="audio/boton.mp3" autoplay=""></audio>';
	//document.getElementById('vacios').innerHTML = vacios()+" vacios";
  		

	setTimeout(function(){
		document.getElementById('botones').style.display= 'none';	
	}, 3000);

	//$('#botones').fadeTo( "slow", 0.0 );

	document.getElementById('musica').src = 'audio/juego.mp3';
		//console.log(posicion_x);
	cronometro();
	var testEl;
	var cont =0 ;
	var cont2 = 0;
	var aux = 1;
	var flag = 0;
	var f1 = 1;
	window.onload = function () {
	        
	    testEl = $('testElement');
	    testEl.onmousedown = testEl.ontouchstart = testEl.onmspointerdown = startDrag;
	    testEl.style.msTouchAction = 'none';
	    
	}
		function startDrag(e) { 
	    	console.log("hola");
	        if (e.type !== 'mousedown') {
	            testEl.onmousedown = null;
	            testEl.ontouchmove = testEl.onmspointermove = moveDrag;
	            testEl.ontouchend = testEl.onmspointerup = function () {
	                testEl.ontouchmove = null;
	                testEl.ontouchend = null;
	    //          testEl.ontouchstart = startDrag; // necessary for Dolfin; this is a bug
	            }
	        }


	        var pos = [testEl.offsetLeft,testEl.offsetTop];
	        var origin = getCoors(e);

	        function moveDrag (e) {
	            flag = 1;
	            var currentPos = getCoors(e);
	            var deltaX = currentPos[0] - origin[0];
	            var deltaY = currentPos[1] - origin[1];
	            testEl.style.left = (pos[0] + deltaX) + 'px';
	            testEl.style.top  = (pos[1] + deltaY) + 'px';
	            console.log(currentPos);
	            if(currentPos[0]>300 && currentPos[1]>510)
	            {
	            	if(f1== 1){
	            		vidas++;
	            		document.getElementById('vida1').innerHTML= vidas;
	            		f1 = 0;
	            	}
	            	
	                testEl.style.display = 'none';
	                
	            }
	            
	            return false;
	        }


	        function getCoors(e) {

	            var coors = [];
	            if (e.touches && e.touches.length) {    // iPhone
	                coors[0] = e.touches[0].clientX;
	                coors[1] = e.touches[0].clientY;
	            } else {                                // all others
	                coors[0] = e.clientX;
	                coors[1] = e.clientY;
	            }
	            return coors;
	        }
	    }

	    function $(id) {

	    	//console.log("hola");
	        return document.getElementById(id);
	    }
	function vida(){
	    document.getElementById("testElement").style.display = "block";
	   
	    window.setInterval(
	        function(){
	                if(flag == 0){
	                    document.getElementById("testElement").style.left = cont + "px";
	                    document.getElementById("testElement").style.top  = cont2 + "px";  
	                    if(cont >= 200){
	                        aux= (-1);
	                    }
	                    if (cont <= 0) {
	                        aux = 1;
	                    }
	                    cont2 = cont2 +4;
	                    cont = cont +4*(aux);
	                    if(cont2 > 1300){
	                        document.getElementById("testElement").style.display = "none";
	                        flag = 1;
	                    }
	                }
	      }
	    ,80);//1000 1 seg
	}
		function gameover(){

		vidas = vidas - 1;
		document.getElementById('vida1').innerHTML= vidas;
		if (vidas == 2){
			document.getElementById('vida1').innerHTML= vidas;
		}
		if(vidas == 1){
			document.getElementById('vida1').innerHTML= vidas;
		}
		if(vidas <= 0){
			document.getElementById('contenedor').innerHTML='<div class="gameover"></div>';
			setTimeout(function(){ location.href ="index.html"; }, 2000);
		}
	}
	function cronometro(){
		var countDownDate = new Date();	
		var min = countDownDate.getMinutes();
		countDownDate.setMinutes(min+1);

		// Update the count down every 1 second
		var x = setInterval(function() {
			if(id_equipo >0)
				tiempo--;
		    
		 
		    if(tiempo < 0){ 	
		    	vidas = 0;
		    	gameover();
		    	clearInterval(x);
		    }
		   
		    
		}, 1000);
	}
	function buscar(id_unico){
		if(buscar_bomba(id_unico)== 1){

			navigator.vibrate(3000);
			alert("POOOOOOOOOOOM!");
			gameover();
		}
		else{
			contador++;
			document.getElementById('vacios').innerHTML = vac-contador;
			if(vac-contador <= 0){
				alert("ganaste");
			}
		}
		var idn = id_unico + 1;
		var idi = 'id'+id_unico;
		document.getElementById(idi).innerHTML='<a-box  depth="2" height="2" width="2" src="'+buscar_texture(id_unico)+'" ></a-box>';
	}

	function ConfirmDemo() {
		//Ingresamos un mensaje a mostrar
		var mensaje = confirm("Ganaste, Desea Continuar??");
		//Detectamos si el usuario acepto el mensaje
		if (mensaje) {
			alert("¡Gracias por aceptar!");
			window.location.href("juego.html");
		}
		//Detectamos si el usuario denegó el mensaje
		else {
			alert("Gracias por Jugar!");
			window.location.href("../index.html");
		}
	}
	function printMousePos(event) {

		pos_mouse_y = event.clientY-200;
		pos_mouse_x = event.clientX;
		var id = id_marker;
		
		if(posicion_x < pos_mouse_x +70 &&posicion_x > pos_mouse_x - 70 && posicion_y < pos_mouse_y +70 &&posicion_y > pos_mouse_y - 70 )
		{
			id = id_marker+1;
			paquete = "";
			
			//console.log(id);
			switch (estado){
				case 0:
					if(tiempo < 210){
					paquete = paquete.concat(id);
					paquete = paquete.concat('/');
					paquete = paquete.concat(operacion_id);
					paquete = paquete.concat('/');
					paquete = paquete.concat(id_equipo);
					var aux = buscar_vecinos_string(id_marker);
					document.getElementById('vecinos').innerHTML = aux;
					
					var idi = 'id'+id;
					if(ruleta== id_marker){
						vida();
					}
					document.getElementById(idi).innerHTML='<a-box  depth="2" height="2" width="2" src="'+buscar_texture(id-1,id_equipo)+'" ></a-box>';
					document.getElementById('input').value= paquete;

					//document.getElementById('input').value= id-1;
					publish();
					paquete ="";
					if(buscar_bomba(id-1,id_equipo) == 1){

						navigator.vibrate(3000);
						alert("POOOOOOOOOOOM!");
						gameover();
					}
					else if(buscar_bomba_principal(id-1,id_equipo) == 1){

						navigator.vibrate(3000);
						paquete = "";
						operacion_id = 5;
						paquete = paquete.concat(id);
						paquete = paquete.concat('/');
						paquete = paquete.concat(operacion_id);
						paquete = paquete.concat('/');
						paquete = paquete.concat(id_equipo);
						//poner_equipo(id-1,id_equipo);
						alert("Ganasteeeee");
						document.getElementById('input').value= paquete;
						//document.getElementById('input').value= id-1;
						publish();
						tiempo = 0;
					}
					else{
						contador++;
						if(vac-contador <= 0){
							//alert("ganaste");
							//sleep(1000);
							window.location.href("../index.html");
						}
					}
					}
					break;
				case 1:
				
					if(buscar_t(id-1,id_equipo) && buscar_bomba_principal(id-1,id_equipo) == 0){
						operacion_id = 1;
						paquete = paquete.concat(id);
						paquete = paquete.concat('/');
						paquete = paquete.concat(operacion_id);
						paquete = paquete.concat('/');
						paquete = paquete.concat(id_equipo);
						//poner_equipo(id-1,id_equipo);
						poner_bomba_secundaria(id-1,id_equipo);
						var idi = 'id'+id;
						if(buscar_bomba(id-1,id_equipo) == 1){

							navigator.vibrate(3000);
							alert("POOOOOOOOOOOM!");
							gameover();
						}
						document.getElementById(idi).innerHTML='<a-box  depth="2" height="2" width="2" src="bomban.png" ></a-box>';
						document.getElementById('input').value= paquete;
						//document.getElementById('input').value= id-1;
						publish();
						paquete ="";
						if(tiempo < 210){
							setTimeout(function() {
							    operacion_id = 0;
							    paquete = paquete.concat(id);
								paquete = paquete.concat('/');
								paquete = paquete.concat(operacion_id);
								paquete = paquete.concat('/');
								paquete = paquete.concat(id_equipo);
							  poner_equipo(id-1,0);
							  document.getElementById(idi).innerHTML='<a-box  depth="2" height="2" width="2" src="box.png" ></a-box>';
						      sacar_bomba_secundaria(id-1);
						      document.getElementById('input').value= paquete;

								//document.getElementById('input').value= id-1;
							   publish();
							   paquete = "";
						    }, 5000);
						}
						console.log("bomba",id-1);
					}
					else{
						alert("Pon en otro sitio");
					}
					break;
				case 2:
					operacion_id = 2;
					    paquete = paquete.concat(id);
						paquete = paquete.concat('/');
						paquete = paquete.concat(operacion_id);
						paquete = paquete.concat('/');
						paquete = paquete.concat(id_equipo);
				      document.getElementById('input').value= paquete;

						//document.getElementById('input').value= id-1;
					   publish();
					   paquete = "";
					var idi = 'id'+id;
					document.getElementById(idi).innerHTML='<a-box  depth="2" height="2" width="2" src="dinamita.png" ></a-box>';
					poner_bomba_primaria(id-1,id_equipo);
					//poner_equipo(id-1,id_equipo);
					document.getElementById('input').value= paquete;
					//document.getElementById('input').value= id-1;
					publish();
					break;
			}
		}
	
	//console.log( event.clientX + " "+event.clientY);
	//console.log( posicion_x + " "+ posicion_y);
	//document.getElementById("bomba").src = "bomban.png";

	}
	function equipo1()
	{
		document.getElementById("jugadores").style.display = "none"; 
		id_equipo = 1;
		procesar_bombas();
	}
	function equipo2()
	{
		document.getElementById("jugadores").style.display = "none"; 
		id_equipo = 2;
		procesar_bombas();
	}
	
	function abrir_menu(){
		console.log("hola");
		document.getElementById("menus").style.display = "block";
	}
	function m_buscar(){
		document.getElementById("menus").style.display = "none";
		estado = 0;
		document.getElementById("btn_menu").style.backgroundImage ="url('https://image.flaticon.com/icons/png/512/414/414171.png')";
	}
	function m_primaria(){
		document.getElementById("menus").style.display = "none";
		estado = 2;
		document.getElementById("btn_menu").style.backgroundImage ="url('dinamita2.jpg')";
	}
	function m_secundaria(){
		document.getElementById("menus").style.display = "none";
		estado = 1;
		document.getElementById("btn_menu").style.backgroundImage ="url('bombaroja.png')";
	}
	document.addEventListener("click", printMousePos);
