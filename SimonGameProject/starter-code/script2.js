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
        reset();
        start = true;
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
        setInterval(function(){
            $('.transform').toggleClass('active')
        }, 10000);
    }


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

