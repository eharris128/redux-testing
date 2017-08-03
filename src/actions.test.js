// Do this about the same time as reducers
// import relative action types, and function names
import {
  NEW_GAME,
  MAKE_GUESS,
  TOGGLE_INFO_MODAL,
  newGame,
  makeGuess,
  toggleInfoModal
} from './actions'

describe('newGame', () => {
  it('should start a new game', () => {
    const ourAnswer = 42;
    let action = newGame();
    action.correctAnswer = 42;
    expect(action.type).toEqual(NEW_GAME);
    expect(action.correctAnswer).toEqual(ourAnswer);
  })
});

describe('toggleInfoModal', () => {
  it('should toggle the info modal', () => {
    let action = toggleInfoModal();
    expect(action.type).toEqual(TOGGLE_INFO_MODAL);
  })
});

describe('makeGuess', () => {
  it('should add a guess', () => {
    let guess = 42;
    const action = makeGuess(guess);
    expect(action.type).toEqual(MAKE_GUESS);
    expect(action.guess).toEqual(guess);
  })
});