
function string_to_int_(d,r){
	d=parseInt(d,10);
	if(!isNaN(d)){
		r=d;
	}
	return r;
}

function error_(This,b){
	if(b){
		This.parent('*').find('.error-form').addClass('hidden');
		return true;
	}
	This.parent('*').find('.error-form').removeClass('hidden');
	return false;
}

function nbcara_(This){
	var nbcara=This.val().length,
	min=string_to_int_(This.attr('data-min'),1),
	max=string_to_int_(This.attr('data-max'),16);
	if(min>=max){max++;}
	if(nbcara >= min && nbcara <= max){
		return error_(This,true);
	}
	return error_(This,false);
}

function email_(This){
	var email=This.val(),
	pos=email.indexOf('@');
	if(pos>=2){
		email=email.substring(pos+1,email.length);
		pos=email.indexOf('@');
		if(pos==-1){
			pos=email.indexOf('.');
			if(pos>=2){
				email=email.substring(pos+1,email.length);
				if(email.length>=2){
					return error_(This,true);
				}
			}
		}
	}
	return error_(This,false);
}

function checkbox_radio_(This){
	var b=false;
	This.each(function(){
		if($(this).prop("checked")){
			b=true;
		}
	});
	return error_(This,b);
}

function button_rgpd_(This){
	if(checkbox_radio_(This)){
		$('.js-button').removeAttr('disabled');
		return true;
	}
	$('.js-button').attr('disabled','disabled');
	return false;
}

function select_(This){
	if(This.val()!=''){
		return error_(This,true);
	}
	return error_(This,false);
}

$('.js-nbcara').change(function(){nbcara_($(this));}).keyup(function(){nbcara_($(this));});
$('.js-email').change(function(){email_($(this));}).keyup(function(){email_($(this));});
$('.js-type').change(function(){checkbox_radio_($('.js-type'));});
$('.js-type1').change(function(){checkbox_radio_($('.js-type1'));});
$('.js-rgpd').change(function(){button_rgpd_($('.js-rgpd'))});

$('.js-form-contact').submit(function(){
	var retour=[],i=0;
	$('.js-nbcara').each(function(){retour[i]=nbcara_($(this));i++;});
	$('.js-email').each(function(){retour[i]=email_($(this));i++;});
	retour[i]=checkbox_radio_($('.js-type'));i++;
	retour[i]=checkbox_radio_($('.js-type1'));i++;
	retour[i]=button_rgpd_($('.js-rgpd'));i++;
	for(var i=0;i<retour.length;i++){
		if(!retour[i]){
			return false;
		}
	}
});
