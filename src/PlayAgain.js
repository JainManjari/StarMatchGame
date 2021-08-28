const PlayAgain=(props)=>{

    const {onClick,gameStatus}=props;
    return(
        <div className="game-done">
            {gameStatus==="won" ? "You win!" : "Try Again!"}
            <br />
            <button onClick={onClick}>Play Again</button>
        </div>
    )

}

export default PlayAgain;