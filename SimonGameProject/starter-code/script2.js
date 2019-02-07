$(document).ready(function(){
    let start = false;
    let playerTurn = false;
    let round = 0;
    let randomArray = [];
    let playerArray = [];
    let numberOfGames = 10;
    
    function reset(){
        randomArray = [];
        playerArray = [];
        round = 1;
        $('.startBtn').toggleClass('active'); // need to hold #startBtn:active
    }

    $('.startBtn').click(function(){
        $('#round').text(round);
        $('.techno')[0].play();
        $('.crazy').toggleClass('active');
        reset();
        gameOn();  
    });


    var colors = [ 'blue','green','yellow','red' ];

    function randArray(){
        randomArray=[];
        for(let i=0; i < round; i ++){         
            let randomNumber = Math.floor(Math.random() * 4 ); 
            randomArray.push(randomNumber);  
        }
        return randomArray;
    }

    function spin(){
        if(round == 1 && round <= 4){ 
            $('#spin').css({"animation-duration": "20s"});
        }else if(round == 5){
            $('#spin').css({"animation-duration": "17s"});
        }else if(round == 6){
            $('#spin').css({"animation-duration": "16s"});
        }else if(round == 7){
            $('#spin').css({"animation-duration": "15s"});
        }else if(round == 8){
            $('#spin').css({"animation-duration": "14s"});
        }else if(round == 9){
            $('#spin').css({"animation-duration": "13s"});
        }else{
            $('#spin').css({"animation-duration": "12s"});
        } 
    };
        
        // }else if(round ==7 && round <= 8 ){
        //     $('#spin').css({"animation-duration": "15s"});
        // }else if(round > 8 && round < 10){
        //     $('#spin').css({"animation-duration": "10s"});
        // }else{
        //     $('#spin').css({"animation-duration": "8s"});
        // }    
    // };

    function gameOn(){
        $('#round').text(round);
        spin(); 
        randArray();
        $('.panel').css({"pointer-events":"none"})
     
        for(let j=0; j < round; j++){
        
            setTimeout(function(){
                $('.audio').eq(randomArray[j])[0].play();
                $('.panel').eq(randomArray[j]).toggleClass('active');
                setTimeout(function(){
                    $('.panel').eq(randomArray[j]).toggleClass('active'); // deactivating the class
                }, 500);
            }, j*1000);
            };
        $('.panel').css({"pointer-events":"auto"})
    }

    // validate user input 
    function validation(color){  
        console.log(colors[randomArray[0]], color)
        let computerColor = colors[randomArray[0]]
        randomArray.shift();
        if(randomArray.length === 0 && round == numberOfGames){
            window.alert('YOU WIN');
            reset();
        }else if(color === computerColor){
            if(randomArray.length === 0){
                round++;
                setTimeout(function(){gameOn()},1000);
            }       
        }else{
            window.alert('wrong, game over');
            reset()
        }
    }

    $('.panel').click(function(e){
        // console.log(e,this);
        $('.audio.'+this.id)[0].play()
        validation(this.id);
    })
  
});

