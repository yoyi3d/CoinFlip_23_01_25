$(document).ready(function (){

    var $coin = $("#coin");

        $coin.on("click", function (){
            
            var randomNum = Math.random();
            $coin.removeClass();
            
            setTimeout(function (){
                
                if (randomNum <= 0.5) {
                    console.log("Es Cara!");
                    $coin.addClass("iscara");
                } 
                           
                else{
                    console.log("Es Cruz!");
                    $coin.addClass("iscruz");
                }
                
            }, 100);



        });


});