$(document).ready(function(){
    $('.validate').on('click', function(){
        var texte = $('textarea').val();
        var arrayIp = [];
        arrayIp.push(texte.match(/\d+\.\d+\.\d+\.\d+\/\d{2}/g));

        for(var i = 0; i < arrayIp[0].length;i++){   
            var ipString = arrayIp[0][i];
            var ipOrigin = ipString.split("/");
                ipOrigin = ipOrigin[0];
            var ipRangeValue = ipString.split(".");
                ipRangeValue = ipRangeValue[3].split('/');
                ipRangeValue = ipRangeValue[1];

            //Calcul host numbers
            var b = 32 - ipRangeValue;
            var host = Math.pow(2, b); 
            var ipToAnalyse = ipOrigin.split(".");

            //if the ip address is between /25 to /32
            if(host < 256){
                ipToAnalyse[3]=-1;
                var ipToAnalyseArray = [];
                for( var j = 0 ; j < host; j++){
                    g = ipToAnalyse[3]++;
                    $('.result').append('<p>' +  ipToAnalyse.join('.')   + '</p>');
                    $('#jsContentToCopy').val($('#jsContentToCopy').val() + '\n' + ipToAnalyse.join('.'));
                }
            }
            if(host == 256){
                ipToAnalyse[3]='*';
                $('.result').append('<p>' +  ipToAnalyse.join('.')   + '</p>');
                $('#jsContentToCopy').val($('#jsContentToCopy').val() + '\n' + ipToAnalyse.join('.'));
            }
            if(host> 256 && host <= 65536 ){
                ipToAnalyse[2]=-1;
                var g= b-8;
                var h=Math.pow(2,g);
                for( var k = 0 ; k < h; k++){
                    g = ipToAnalyse[2]++;
                    ipToAnalyse[3]='*';
                    $('.result').append('<p>' +  ipToAnalyse.join('.')   + '</p>');
                    $('#jsContentToCopy').val($('#jsContentToCopy').val() + '\n' + ipToAnalyse.join('.'));
                }
            }
            if(host > 65536 && host < 16777216){
                ipToAnalyse[1]=-1;
                var g=b-16;
                var h=Math.pow(2,g);
                for( var l = 0 ; l < h; l++){
                    ipToAnalyse[2]=-1;
                    g = ipToAnalyse[1]++;
                    ipToAnalyse[3]='*';
                    var number =0;
                    while(number<256){
                        number++;
                        g = ipToAnalyse[2]++;
                        $('.result').append('<p>' +  ipToAnalyse.join('.')   + '</p>');
                        $('#jsContentToCopy').val($('#jsContentToCopy').val() + '\n' + ipToAnalyse.join('.'));
                    }
                }
            }
        }
    });
    
    $('.delete').on('click', function(){
        $('.result').html('');
        $('.ip-textarea, #jsContentToCopy').val('');
    });

    var copyTextareaBtn = document.querySelector('.js-textareacopybtn');
    copyTextareaBtn.addEventListener('click', function(event) {
        var copyTextarea = $('#jsContentToCopy');
        $(copyTextarea).select();
        $('.js-textareacopybtn').text('Copied !');
        setTimeout(function(){
            $('.js-textareacopybtn').text('Copy to clipboard');
        }, 5000);
        try {
          var successful = document.execCommand('copy');
          var msg = successful ? 'successful' : 'unsuccessful';
          console.log('Copying text command was ' + msg);
        } catch (err) {
          console.log('Oops, unable to copy');
        }
    });
})