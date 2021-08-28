import {colors} from './utils';

const PlayNumber=(props)=>{

    const {number,status,onClick}=props;

    return(
        <button 
           className="number" 
           style={{background:colors[status]}}
           onClick={()=>onClick(number,status)}
        >
            {number}
        </button>
    );
}


export default PlayNumber;