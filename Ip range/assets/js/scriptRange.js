var texte = $('textarea').val();
var arrayIp = [];
for (var i = 0; i <= texte.length; i++) { 
    arrayIp = texte.match(/\d+\.\d+\.\d+\.\d+\/\d{2}/g);	
}

for(var i = 0;i < arrayIp.length;i++){
	$('.result').append('<div>rangeResult</div>');
}
