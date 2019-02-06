$(document).ready(function(){
    let start = false;
    let playerTurn = false;
    let round =0;
    let randomArray = [];
    let playerArray = [];
    let numberOfGames = 10;

    // const blue = document.querySelector('#blue').id;
    
    function reset(){
        randomArray = [];
        playerArray = [];
        round = 1;
        $('.startBtn').toggleClass('active'); // need to hold #startBtn:active
    }

    $('.startBtn').click(function(){
        reset();
        $('#round').text(round);

        // randomArray = [];
        // playerArray = [];
        // round = 1;
        // $('.startBtn').toggleClass('active'); // need to hold #startBtn:active
        // $('#round').text(round);
        start = true;
        GameOn();  
    });


    var colors = [
        'blue','green','yellow','red'
    ]

    function randArray(){
        randomArray=[];
        for(let i=0; i < round; i ++){         
            let randomNumber = Math.floor(Math.random() * 4 ); 
            randomArray.push(randomNumber);  
        }
        return randomArray;
    }
    
    function GameOn(){
        $('#round').text(round); 
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
        console.log("gameOn " + randomArray);
    }

    function validation(color){
        console.log(colors[randomArray[0]], color)
        let computerColor = colors[randomArray[0]]
        randomArray.shift()
        if(color === computerColor){
            console.log('youre right')
            if(randomArray.length === 0){
                console.log('you win')
                round++;
                setTimeout(function(){GameOn()},1000)
            }
        }else{
            console.log('wrong, game over')
            reset()
        }
    }

    
    
    // function validation(ele){
    //     if(round == numberOfGames && randomArray.length == 0){
    //         window.alert("YOU WON !!!");
    //         reset();
    //     }else if(randomArray.length == playerArray.length){
    //         if(randomArray.join() == playerArray.join()){
    //             console.log("validation "+ randomArray);
    //             console.log("----------------")
    //             randomArray.shift();
    //             round ++;
    //             GameOn();
    //         }
    //         // // console.log(playerArray);
    //         // // console.log(randomArray);
    //         // randomArray.shift(); 
    //         // // playerArray.shift(); 
    //         // // console.log(playerArray);
    //         // // console.log(randomArray);
    //         // // window.alert("Good Job!!");
    //         // round ++;
    //         // GameOn();
    //     }else{
    //         window.alert("Wrong guess!!");
    //         reset();
    //     // }
    // }

    // // Player turn
    // document.querySelector('#blue').addEventListener('click', function(e) {
    //     playerArray.push(0);
    //     console.log("clickEvent "+ playerArray);
    //     $('#track1')[0].play();
    //     validation('blue');
    // });
    // document.querySelector('#green').addEventListener('click', function(e) {
    //     playerArray.push(1);
    //     console.log("clickEvent "+ playerArray);
    //     $('#track2')[0].play();
    //     validation('green');
    // });
        
    // document.querySelector('#yellow').addEventListener('click', function(e) {
    //     playerArray.push(2);
    //     console.log("clickEvent "+ playerArray);
    //     $('#track3')[0].play();
    //     validation('yellow');
    // });
    // document.querySelector('#red').addEventListener('click', function(e) {
    //     playerArray.push(3);
    //     console.log("clickEvent "+ playerArray);
    //     $('#track4')[0].play();
    //     validation('red');
    // });

    
    $('.panel').click(function(e){
        console.log(e,this)
        $('.audio.'+this.id)[0].play()
        validation(this.id)
    })
  
});


    // function validation(e){
    //     console.log(e, randomArray[0], randomArray.length)
    //     // randomArray.shift();

    //     if(randomArray.length == 0){
    //         //randomArray.shift();
    //         window.alert("Good Job!!");
    //         round++;
    //         GameOn();

    //     }
    //    else if(randomArray[0] == e){
    //    }else{
    //         window.alert("Wrong guess!!");
    //         randomArray = [];
    //         playerArray = [];
    //         $('.startBtn').toggleClass('active');
    //     }
    // } 
