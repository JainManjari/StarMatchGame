import {useState,useEffect} from 'react';

import { mathFunctions} from "./utils";
import PlayNumber from './PlayNumber';
import StarsDisplay from './StarsDisplay';
import PlayAgain from './PlayAgain';



const App = () => {
  const [stars,setStars]=useState(mathFunctions.random(1,9));
  const [availableNums,setAvailableNums]=useState(mathFunctions.range(1,9));
  const [candidateNums,setCandidateNums]=useState([]);
  const [secondsLeft,setSecondsLeft]=useState(10);

  const candidatesAreWrong=mathFunctions.sum(candidateNums)>stars;
  const gameStatus=availableNums.length===0 ? "won" : secondsLeft===0 ? "lost" : "active";


  const resetGame=()=>{
    setStars(mathFunctions.random(1,9));
    setAvailableNums(mathFunctions.range(1,9));
    setCandidateNums([]);
  }

  const numberStatus=(number)=>{
      if(!availableNums.includes(number))
      {
         return "used";
      }

      if(candidateNums.includes(number))
      {
         return candidatesAreWrong ? 'wrong' :'candidate';
      }

      return "available";
  }

  const numberClick=(number,status)=>{

    if(status==="used")
    {
       return;
    }

    const newCandidateNums= 
            status==="available" 
            ? 
            candidateNums.concat(number) 
            : 
            candidateNums.filter(cn=>cn!==number);

    if(mathFunctions.sum(newCandidateNums)!==stars)
    {
        setCandidateNums(newCandidateNums);
        return;
    }

    const newAvaibleNums=availableNums.filter(n=>!newCandidateNums.includes(n));

    setAvailableNums(newAvaibleNums);
    setCandidateNums([]);
    setStars(mathFunctions.randomSumIn(newAvaibleNums,9));
  }


  useEffect(()=>{

    if(secondsLeft<=0)
    {
       return;
    }

    const timeID=setTimeout(()=>{

      setSecondsLeft(secondsLeft-1);

    },1000);

    return ()=>clearTimeout(timeID)

  });

  return (
    <div className="game">
      <div className="help">
        Pick 1 or more numbers that sum to the number of stars
      </div>
      <div className="body">
        <div className="left">
          {gameStatus!=="active" ? 
              <PlayAgain onClick={resetGame} gameStatus={gameStatus}/> 
              : 
              <StarsDisplay count={stars}/>
          }
        </div>
        <div className="right">
          {mathFunctions.range(1,9).map(
            (number)=>
              <PlayNumber 
                key={number} 
                number={number}
                status={numberStatus(number)}
                onClick={numberClick}
              />
          )}
        </div>
      </div>
      <div className="timer">Time Remaining: {secondsLeft}</div>
    </div>
  );
};



export default App;











