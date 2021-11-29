class TurnView {
    #activeClass = "current-turn";
    #playedClass = "played-turn";

    // update turn view style
    updateTurn(currentTurn, isActive = true) {
        const boxElement = document.querySelector(`[data-turn="${currentTurn}"]`);
        boxElement.classList.add(`${isActive ? this.#activeClass : this.#playedClass}`);
    }
}

export default new TurnView;