$(document).ready(function(){
    $('.validate').on('click', function(){
        var texte = $('textarea').val();
        // var texte = "10.10.10.10/2511.11.11.11/1912.12.12.12/25";
        var arrayIp = [];
        var arrayIpOrigin = [];
        arrayIp.push(texte.match(/\d+\.\d+\.\d+\.\d+\/\d{2}/g));

        for(var i = 0; i < arrayIp[0].length;i++){   
            var ipString = arrayIp[0][i];
            var ipOrigin = ipString.split("/");
                ipOrigin = ipOrigin[0];
                arrayIpOrigin.push(ipOrigin);
            var ipRangeValue = ipString.split(".");
                ipRangeValue = ipRangeValue[3].split('/');
                ipRangeValue = ipRangeValue[1];
            //Calcul host numbers
            var b = 32 - ipRangeValue;
            var host = Math.pow(2, b); 
            //if the ip address is between /25 to /32
            // setTimeout(function(){
                var ipToAnalyse = ipOrigin.split(".");
                if(host < 256){
                    ipToAnalyse[3]=-1;
                    for( var j = 0 ; j < host; j++){
                        g = ipToAnalyse[3]++;
                        // var ip = ipString.splice(3)
                        //  var ipFinal = ipString.concat(der);
                        $('.result').append('<p>' +  ipToAnalyse.join('.')   + '</p>');
                    }
                }
                if(host == 256){
                    ipToAnalyse[3]='*';
                    $('.result').append('<p>' +  ipToAnalyse.join('.')   + '</p>');
                }
                if(host> 256 && host <= 65536 ){
                    ipToAnalyse[2]=-1;
                    var g= b-8;
                    var h=Math.pow(2,g);
                    for( var k = 0 ; k < h; k++){
                        g = ipToAnalyse[2]++;
                        ipToAnalyse[3]='*';
                        // var ip = ipString.splice(3)
                        //  var ipFinal = ipString.concat(der);
                        $('.result').append('<p>' +  ipToAnalyse.join('.')   + '</p>');
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
                        }
                    }
                }
            // }, 0);
        }

        // var ipString = $("input[type=text]").val();
        // // ipString = "10.10.10.*/26"
        // var ipOrigin = ipString.split("/");
        // ipOrigin = ipOrigin[0];
        // var ipRangeValue = ipString.split(".");
        //     ipRangeValue = ipRangeValue[3].split('/')
        //     ipRangeValue = ipRangeValue[1];

        // //Calcul host numbers
        // var b = 32 - ipRangeValue;
        // var host = Math.pow(2, b); 

        // //if the ip address is between /25 to /32
        // setTimeout(function(){
        //     var ipToAnalyse= ipOrigin.split(".");
        //     if(host < 256){
        //         ipToAnalyse[3]=-1;
        //         for( var i = 0 ; i < host; i++){
        //             g = ipToAnalyse[3]++;
        //             // var ip = ipString.splice(3)
        //             //  var ipFinal = ipString.concat(der);
        //             $('.result').append('<p>' +  ipToAnalyse.join('.')   + '</p>');
        //         }
        //     }
        //     if(host == 256){
        //         ipToAnalyse[3]='*';
        //         $('.result').append('<p>' +  ipToAnalyse.join('.')   + '</p>');
        //     }
        //     if(host> 256 && host <= 65536 ){
        //         ipToAnalyse[2]=-1;
        //         var g= b-8;
        //         var h=Math.pow(2,g);
        //         for( var i = 0 ; i < h; i++){
        //             g = ipToAnalyse[2]++;
        //             ipToAnalyse[3]='*';
        //             // var ip = ipString.splice(3)
        //             //  var ipFinal = ipString.concat(der);
        //             $('.result').append('<p>' +  ipToAnalyse.join('.')   + '</p>');
        //         }
        //     }
        //     if(host > 65536 && host < 16777216){
        //         ipToAnalyse[1]=-1;
        //         var g=b-16;
        //         var h=Math.pow(2,g);
        //         for( var i = 0 ; i < h; i++){
        //             ipToAnalyse[2]=-1;
        //             g = ipToAnalyse[1]++;
        //             ipToAnalyse[3]='*';
        //             var number =0;
        //             while(number<256){
        //                 number++;
        //                 g = ipToAnalyse[2]++;
        //                 $('.result').append('<p>' +  ipToAnalyse.join('.')   + '</p>');
        //             }
        //         }
        //     }
        // }, 0);
    });
    
    $('.delete').on('click', function(){
        $('.result').html('');
        $('.ip-field').val('');
    });
})