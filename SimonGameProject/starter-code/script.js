$(document).ready(function(){
    let start = false;
    let playerTurn = false;
    let round = 1;
    let randomArray = [];
    let playerArray = [];
    let numberOfGames = 3;

    // const blue = document.querySelector('#blue').id;
    
    $('.startBtn').click(function(){
        randomArray = [];
        playerArray = [];
        round = 1;
        $('.startBtn').toggleClass('active'); // need to hold #startBtn:active
        $('#round').text(round);
        start = true;
        GameOn();  
    });

    function GameOn(){  
        $('.panel').css({"pointer-events":"none"})
        let promises = []
       
        for(let i=0; i < numberOfGames; i ++){
            let promise = new Promise(function(resolve, reject){
                setTimeout(function(){
                    let randomNumber = Math.floor(Math.random() * 4 ); 
                    randomArray.push(($('.panel').eq(randomNumber))[0].id);  // choosing the id value from the node.
                    $('.audio').eq(randomNumber)[0].play();
                    console.log(randomArray);
                    // console.log( $('.panel').eq(randomNumber));
                    $('.panel').eq(randomNumber).toggleClass('active');
                    resolve()   // activating the class
                    setTimeout(function(){
                        $('.panel').eq(randomNumber).toggleClass('active'); // deactivating the class
                    }, 500);
                }, i*1000);
            })
            promises.push(promise)
        }

        Promise.all(promises).then(function(values) { //all the promises are finished. Now we can enable the click;    
            $('.panel').css({"pointer-events":"auto"})
        });
    } 
    
    function validation(id){
        console.log(id, randomArray[0])
        if(randomArray.length == 1){
            randomArray.shift();
            window.alert("Good Job!!");

        }
       else if(randomArray[0] == id){
            randomArray.shift();
       }else{
            window.alert("Wrong guess!!");
            randomArray = [];
            playerArray = [];
            $('.startBtn').toggleClass('active');
        }
    } 
        

    // // Player turn
    document.querySelector('#blue').addEventListener('click', function(e) {
        playerArray.push(this.id);
        $('#track1')[0].play();
        validation(this.id);
    });
    document.querySelector('#green').addEventListener('click', function(e) {
        playerArray.push(this.id);
        $('#track2')[0].play();
        validation(this.id);
    });
        
    document.querySelector('#yellow').addEventListener('click', function(e) {
        playerArray.push(this.id);
        $('#track3')[0].play();
        validation(this.id);
    });
    document.querySelector('#red').addEventListener('click', function(e) {
        playerArray.push(this.id);
        $('#track4')[0].play();
        validation(this.id);
    });
        

    // document.querySelector('#blue').addEventListener('click', function(e) {
    //         playerArray.push(this.id);
    //         $('#track1')[0].play();
    //         console.log(playerArray);
    //         if(randomArray.length > 0 && this.id == randomArray[0]){
        //             randomArray.shift();
    //         }else{
    //             window.alert("Wrong guess!!");
    //         }
    //         // console.log(randomArray);
    // });
    // document.querySelector('#green').addEventListener('click', function(e) {
    //         playerArray.push(this.id);
    //         $('#track2')[0].play();
    //         console.log(playerArray);
    //         if(randomArray.length > 0 && this.id == randomArray[0]){
        //             randomArray.shift();
    //         }else{
    //             window.alert("Wrong !!");
    //         }
    //         // console.log(randomArray);

    // });
    // document.querySelector('#yellow').addEventListener('click', function(e) {
    //         playerArray.push(this.id);
    //         $('#track3')[0].play();
    //         console.log(playerArray);
    //         if(randomArray.length > 0 && this.id == randomArray[0]){
        //             randomArray.shift();
    //         }else{
    //             window.alert("Wrong !!");
    //         }
    //         // console.log(randomArray);

    // });
    // document.querySelector('#red').addEventListener('click', function(e) {
    //         playerArray.push(this.id);
    //         $('#track4')[0].play();
    //         console.log(playerArray);
    //         if(randomArray.length > 0 && this.id == randomArray[0]){
        //             randomArray.shift();
    //         }else{
    //             window.alert("Wrong !!");
    //         }
    //         // console.log(randomArray);

    // });

});






//         while (j < randomArray.length){
//                 $('.panel').click(function(e){
    //                 playerArray.push(this.id);
    //                     console.log(playerArray);
    //                 });
    
//             j++;
//         } 
//     };
    