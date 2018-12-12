    //output = PUBNUB.$('output'), 
 var     input = PUBNUB.$('input'), 
      //  button = PUBNUB.$('button'),
        avatar = PUBNUB.$('avatar');
        //presence = PUBNUB.$('presence');
 var output = "";
 var channel = 'mchat';
 var p = PUBNUB.init({
        subscribe_key: 'sub-c-f762fb78-2724-11e4-a4df-02ee2ddab7fe',
        publish_key:   'pub-c-156a6d5f-22bd-4a13-848d-b5b4d4b36695'
    });
  avatar.className = 'face-' + ((Math.random() * 13 + 1) >>> 0) + ' color-' + ((Math.random() * 10 + 1) >>> 0);   
 function correr() {

        //output = PUBNUB.$('output'); 
        input = PUBNUB.$('input');
        //button = PUBNUB.$('button');
        avatar = PUBNUB.$('avatar');
        //presence = PUBNUB.$('presence');

    // Assign a random avatar in random color
    avatar.className = 'face-' + ((Math.random() * 13 + 1) >>> 0) + ' color-' + ((Math.random() * 10 + 1) >>> 0);

    

    p.subscribe({
        channel  : channel,
        callback : function(m) { 
            //agregar
            var hola = '<p><i class="' + m.avatar + '"></i><span>' +  m.text.replace( /[<>]/ig, '' ) + '</span></p>' + hola; 
            console.log(hola);
            var operacion = m.text.replace( /[<>]/ig, '' );
            var array = operacion.split("/");
            var id = array[0];
            var op = array[1]; 
            var equipo = array[2];
            var output = parseInt(m.text.replace( /[<>]/ig, '' )) + 1;
            idi= "id"+output;
            console.log(array);
            id = parseInt(id);
            if(op == 0){
                //alert("entro");   
                //document.getElementById(idi).innerHTML='<a-box  depth="2" height="2" width="2" src="../box.png" ></a-box>';
                sacar_bomba_secundaria(id-1);
            }
            else if(op == 1){
                poner_bomba_secundaria(id-1,equipo);
            }
            else if(op == 2){
                poner_bomba_primaria(id-1,equipo);
            }
            else if (op == 5) {
                if(id_equipo != equipo){
                    navigator.vibrate(3000);
                    alert("perdissste");
                    tiempo = 0;
                }
            }
            
            //console.log(output);
            //document.getElementById(idi).innerHTML='<a-box  depth="2" height="2" width="2" src="'+buscar_texture(output-1)+'" ></a-box>';
            
        },
        presence: function(m){
            if(m.occupancy > 1) {
                //presence.textContent = m.occupancy + ' Conectados';
            } else {
                //presence.textContent = ' 1 Jugadores';
            }
        }
    });

    p.bind('keyup', input, function(e) {
        (e.keyCode || e.charCode) === 13 && publish()
    });

    //p.bind('click', button, publish);

    publish();


};
function publish() {
        //alert(avatar.className);
        p.publish({
            channel : channel, 
            message : {avatar: avatar.className, text: input.value}, 
            x : (input.value='')
        });
    }
correr();