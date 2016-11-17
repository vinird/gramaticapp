$( document ).ready(function() {

  var r1 = ["La coma se usa para delimitar incisos", "Se utiliza para separar elementos dentro de una enumeración no compleja", "La coma se usa para aislar los sustantivos que funcionan como vocativos", "Se escriben entre comas las interjecciones o locuciones interjectivas", "No se escribe coma delante de conectores de sentido adversativo, concesivo o consecutivo", "La pausa de la coma no es mayor que la del punto y coma"];

  var r2 = ["La coma no se usa para delimitar incisos", "Para separar los elementos de una enumeración cuando se trata de expresiones complejas que incluyen comas", "La coma no se usa para aislar los sustantivos que funcionan como vocativos", "No se escriben entre comas las interjecciones o locuciones interjectivas", "Se escribe coma delante de conectores de sentido adversativo, concesivo o consecutivo", "La pausa de la coma es mayor que la del punto y coma"];

  var number;
  var opciones;
  var numRandom = 6;
  var puntaje = 0;
  imprimirOpciones();

  function re_iniciar(){

    r1 = ["La coma se usa para delimitar incisos", "Se utiliza para separar elementos dentro de una enumeración no compleja", "La coma se usa para aislar los sustantivos que funcionan como vocativos", "Se escriben entre comas las interjecciones o locuciones interjectivas", "No se escribe coma delante de conectores de sentido adversativo, concesivo o consecutivo", "La pausa de la coma no es mayor que la del punto y coma"];
    r2 = ["La coma no se usa para delimitar incisos", "Para separar los elementos de una enumeración cuando se trata de expresiones complejas que incluyen comas", "La coma no se usa para aislar los sustantivos que funcionan como vocativos", "No se escriben entre comas las interjecciones o locuciones interjectivas", "Se escribe coma delante de conectores de sentido adversativo, concesivo o consecutivo", "La pausa de la coma es mayor que la del punto y coma"];
    
    numRandom = 6;
    puntaje = 0;
    imprimirOpciones();
    $('#practicaFinalizada').addClass('hide');
    $('#practicaFinalizada').removeClass('animated zoomIn');
    $('.preguntas').removeClass('hide');
    $('.preguntas').addClass('animated fadeIn');
    $('#check01').attr('correcto', 'false');
    $('#check02').attr('correcto', 'false');
  }

  function imprimirOpciones(){

    $("#opcion0"+(random2()+1)).text(seleccionar());
    $("#check0"+(opciones+1)).attr('correcto', 'true');
    
    if(opciones == 0)
    {
      $("#opcion02").text(r2[number]);

    }
    else{
      $("#opcion01").text(r2[number]);
    }
  };  

  function eliminarEspacioArray(){
    if(r1.length >= 0){
      r1.splice(number,1);
      r2.splice(number,1);            
    }
  }  

  $('.btnRespuesta').click(function(){
    var valorAttrBtnRes = $(this).attr('correcto');
    
    if(valorAttrBtnRes == 'false'){      
      Materialize.toast('Respuesta incorrecta', 1000);
      $('#check01').attr('correcto', 'false');
      $('#check02').attr('correcto', 'false');
      eliminarEspacioArray();
      imprimirOpciones();
    } else {      
      Materialize.toast('Respuesta correcta', 1000);
      $('#check01').attr('correcto', 'false');
      $('#check02').attr('correcto', 'false');
      puntaje++;
      eliminarEspacioArray();     
      imprimirOpciones();
    }

  });

  function random(){
    if(numRandom > 0){          
      number = Math.floor(Math.random() * numRandom);
      numRandom = numRandom - 1; 
    } else {
      mostrarResultado();
    }
    return number;
  }

  function random2(){
    opciones = Math.floor(Math.random() * 2);
    return opciones;
  }

  function seleccionar(){
    return r1[random()];
  }

  function mostrarResultado(){
    $('.preguntas').addClass('hide');
    $('.preguntas').removeClass('animated fadeIn');
    $('#practicaFinalizada').removeClass('hide');
    $('#practicaFinalizada').addClass('animated zoomIn');
    if (puntaje == 1) {
      $('#puntaje').text('Has acertado ' + puntaje + ' pregunta de 6');  
    } else {      
      $('#puntaje').text('Has acertado ' + puntaje + ' preguntas de 6');
    }
  }

  $('#reiniciar').click(function(){    
    re_iniciar();
  });

});