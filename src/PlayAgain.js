const PlayAgain=(props)=>{

    const {onClick,gameStatus}=props;
    return(
        <div className="game-done">
            <div className="message" style={{color:gameStatus==="lost" ? "red" : "green"}}>
                {gameStatus==="won" ? "You win!" : "Try Again!"}
            </div>
            <button onClick={onClick}>Play Again</button>
        </div>
    )

}

export default PlayAgain;