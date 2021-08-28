import {colors} from './utils';

const PlayNumber=(props)=>{

    const {number,status}=props;

    return(
        <button 
           className="number" 
           style={{background:colors[status]}}
        >
            {number}
        </button>
    );
}


export default PlayNumber;