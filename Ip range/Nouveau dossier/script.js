$(document).ready(function(){
 $('.validate').on('click', function(){
        var ipString = $("input[type=text]").val();
         // ipString = "10.10.10.*/26"
        var ipOrigin = ipString.split("/");
                ipOrigin = ipOrigin[0];
        var ipRangeValue = ipString.split(".");
                ipRangeValue = ipRangeValue[3].split('/')
                ipRangeValue = ipRangeValue[1];
                //Calculons le nombre d'Host
                var b = 32 - ipRangeValue;
                var host = Math.pow(2, b); 
                console.log(host); 
                //si l'adresse est de classe C de type /25 à /32
                setTimeout(function(){
                    var ipToAnalyse= ipOrigin.split(".");
                    if(host < 256){
                        ipToAnalyse[3]=-1;
                        for( var i = 0 ; i < host; i++){
                            console.log(ipOrigin)
                            g = ipToAnalyse[3]++;
                           // var ip = ipString.splice(3)
                          //  var ipFinal = ipString.concat(der);
                          if(ipRangeValue == "32"){
                            $('.result').append('<p>' +  ipOrigin   + '</p>');
                          }else{
                            $('.result').append('<p>' +  ipToAnalyse.join('.')   + '</p>');
                          }
                        }
                    }
                    if(host == 256){
                        ipToAnalyse[3]='*';
                        $('.result').append('<p>' +  ipToAnalyse.join('.')   + '</p>');
                    }
                    if(host> 256 && host <65536 || host ==65536){

                         ipToAnalyse[2]=-1;
                        var g= b-8;
                        var h=Math.pow(2,g);
                        for( var i = 0 ; i < h; i++){

                            g = ipToAnalyse[2]++;
                            ipToAnalyse[3]='*';
                           // var ip = ipString.splice(3)
                          //  var ipFinal = ipString.concat(der);
                                $('.result').append('<p>' +  ipToAnalyse.join('.')   + '</p>');
                        }

                    }
                    if(host> 65536 && host <= 16777216){
                        ipToAnalyse[1]=-1;
                       
                        var g=b-16;
                        var h=Math.pow(2,g);
                         for( var i = 0 ; i < h; i++){
                            ipToAnalyse[2]=-1;
                            g = ipToAnalyse[1]++;
                            ipToAnalyse[3]='*';
                            var number =0;
                          while(number<256){
                            number++;
                             g = ipToAnalyse[2]++;
                             console.log(ipToAnalyse);
                                $('.result').append('<p>' +  ipToAnalyse.join('.')   + '</p>');
                            }

                    }
                }
                }, 0);
    });
 $('.delete').on('click', function(){
        $('.result').html('');
    });
})