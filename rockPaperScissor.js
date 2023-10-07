    let object=JSON.parse(localStorage.getItem('score')) || {
        wins : 0,
        Loses : 0,
        Ties : 0
    };

    //if we use removeItem in a localstorage then it cannot be exit in a localstorage so we we want to constant value.
    
    /*if(!object){
        object={
            wins : 0,
            Loses : 0,
            Ties : 0
        }
    }*/

            function display(yourMove){
                let computerMove=getComputerValue();
                let result='';
                if(yourMove === 'paper'){
            if(computerMove ==='rock'){
                result = 'You Win';
            }
            else if(computerMove ==='paper'){
               result='Tie';
            }
            else{
                result='You Lose';
            }
            
                }
                else if(yourMove === 'scissor'){
            if(computerMove ==='rock'){
                result = 'You Lose';
            }
            else if(computerMove ==='paper'){
               result='You Win';
            }
            else{
                result='Tie';
            }
            
                }
                else{
            if(computerMove ==='rock'){
                result = 'Tie';
            }
            else if(computerMove ==='paper'){
               result='You Lose';
            }
            else{
                result='You Win';
            }
                }
                
                //for displaying the total wins
                if(result==='You Win'){
                    object.wins += +1;
                }
                else if(result  === 'You Lose'){
                    object.Loses += +1;
                }
                else{
                    object.Ties += +1;
                }

                //we cannot pass a integer value on the localstorage so we convert the object into a string
console.log(JSON.stringify(object));
                localStorage.setItem('score',JSON.stringify(object));

            alert(`Computer Move is ${ computerMove},Your Move ${yourMove},${result}
Wins:${object.wins},Loses${object.Loses},Ties${object.Ties}`);
            
            }

            //function to call reset menu;

            function reset(){
                object.Loses=0;
                object.wins=0;
                object.Ties=0;
              localStorage.removeItem('score');
              alert(`Score reseted !!
 happy gaming`);
            };

            function getComputerValue(){
                const randomNumber=Math.random();
            let computerMove='';
            if(randomNumber >= 0 && randomNumber < 1 / 3){
                computerMove= 'rock';
            }
            else if(randomNumber >=1/3 && randomNumber < 2/3){
                computerMove='paper';
            }
            else{
                computerMove='scissor';
            }
            return computerMove;
            }  