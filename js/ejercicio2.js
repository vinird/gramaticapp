$(document).ready(function(){

	var chk = false;
	var chk2 = false;
	var chk3 = false;
	var chk4 = false;
	var chk5 = false;
	$('.checkGroup1 :checkbox').click(function(){		
		if(!chk){

			$(this).closest('div').find(':checkbox').not(this).attr('disabled', true);
			$(this).attr('check', 'true');
			chk = $(this).attr('check');
			
		} else {
			
			$(this).closest('div').find(':checkbox').not(this).removeAttr('disabled');
			chk = false;
			$(this).removeAttr('check');

		}
	});

	$('.checkGroup2 :checkbox').click(function(){		
		if(!chk2){

			$(this).closest('div').find(':checkbox').not(this).attr('disabled', true);
			$(this).attr('check', 'true');
			chk2 = $(this).attr('check');
			
		} else {
			
			$(this).closest('div').find(':checkbox').not(this).removeAttr('disabled');
			chk2 = false;
			$(this).removeAttr('check');

		}
	});

	$('.checkGroup3 :checkbox').click(function(){		
		if(!chk3){

			$(this).closest('div').find(':checkbox').not(this).attr('disabled', true);
			$(this).attr('check', 'true');
			chk3 = $(this).attr('check');
			
		} else {
			
			$(this).closest('div').find(':checkbox').not(this).removeAttr('disabled');
			chk3 = false;
			$(this).removeAttr('check');

		}
	});

	$('.checkGroup4 :checkbox').click(function(){		
		if(!chk4){

			$(this).closest('div').find(':checkbox').not(this).attr('disabled', true);
			$(this).attr('check', 'true');
			chk4 = $(this).attr('check');
			
		} else {
			
			$(this).closest('div').find(':checkbox').not(this).removeAttr('disabled');
			chk4 = false;
			$(this).removeAttr('check');

		}
	});

	$('.checkGroup5 :checkbox').click(function(){		
		if(!chk5){

			$(this).closest('div').find(':checkbox').not(this).attr('disabled', true);
			$(this).attr('check', 'true');
			chk5 = $(this).attr('check');
			
		} else {
			
			$(this).closest('div').find(':checkbox').not(this).removeAttr('disabled');
			chk5 = false;
			$(this).removeAttr('check');

		}
	});

	//////////////////////////////////////////////////////////////////////////////////////////////
	///////RESPUESTAS////////////

	$('#evaluar').click(function() {

		var resp1 = $('#test2').attr('check');
		var resp2 = $('#test4').attr('check');
		var resp3 = $('#test9').attr('check');
		var resp4 = $('#test10').attr('check');
		var resp5 = $('#test15').attr('check');

		if(resp1 == 'true'){
			$('#msjCorrecto1').removeClass('hide');
		} else {
			$('#msjIncorrecto1').removeClass('hide');
		}
		if(resp2 == 'true'){
			$('#msjCorrecto2').removeClass('hide');
		} else {
			$('#msjIncorrecto2').removeClass('hide');
		}
		if(resp3 == 'true'){
			$('#msjCorrecto3').removeClass('hide');
		} else {
			$('#msjIncorrecto3').removeClass('hide');
		}
		if(resp4 == 'true'){
			$('#msjCorrecto4').removeClass('hide');
		} else {
			$('#msjIncorrecto4').removeClass('hide');
		}
		if(resp5 == 'true'){
			$('#msjCorrecto5').removeClass('hide');
		} else {
			$('#msjIncorrecto5').removeClass('hide');
		}


		// animación del doc
		$("body").animate({scrollTop:0}, '500');

		// ocultan y muestras botones
		$('#jugar').addClass('hide');
		$('#vuelveJugar').removeClass('hide');
		
	});

	// reiniciar la trivia
	$('#reiniciar').click(function(){
		location.reload();
	});

});