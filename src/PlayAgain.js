const PlayAgain=(props)=>{

    const {onClick}=props;
    return(
        <div className="game-done">
            <button onClick={onClick}>Play Again</button>
        </div>
    )

}

export default PlayAgain;