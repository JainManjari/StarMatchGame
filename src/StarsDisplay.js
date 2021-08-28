import { mathFunctions } from "./utils";

const StarsDisplay=(props)=>{
    const {count}=props;
    return(
        <>
            {mathFunctions.range(1,count).map(
                (starId)=>
                <div className="star" key={starId}>
                </div>
            )}

        </>
    )
}


export default StarsDisplay;