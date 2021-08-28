import {useState} from 'react';

import { mathFunctions} from "./utils";
import PlayNumber from './PlayNumber';
import StarsDisplay from './StarsDisplay';



const App = () => {
  const [stars,setStars]=useState(mathFunctions.random(1,9));
  return (
    <div className="game">
      <div className="help">
        Pick 1 or more numbers that sum to the number of stars
      </div>
      <div className="body">
        <div className="left">
          <StarsDisplay count={stars}/>
        </div>
        <div className="right">
          {mathFunctions.range(1,9).map((number)=><PlayNumber key={number} number={number}/>)}
        </div>
      </div>
      <div className="timer">Time Remaining: 10</div>
    </div>
  );
};



export default App;











