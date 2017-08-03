// Do this first
// import reducers
// import actions. 
import reducer from './reducer';
import {newGame, makeGuess, toggleInfoModal} from './actions'

// const initialState = {
//     guesses: [],
    // feedback: 'Make your guess!',
    // correctAnswer: Math.round(Math.random() * 100),
    // showInfoModal: false
// };

describe('reducer', () => {
  const guess = 50;

  it('Should set initial state when nothing is passed in', () => {
    const state = reducer(undefined, {type: '__UNKNOWN'});
    expect(state).toEqual(state);
  });

  it('Should return current state on an unknown action', () => {
    let currentState = {};
    const state = reducer(currentState, {type: '__UNKNOWN'});
    expect(state).toBe(currentState);
  });
});

describe('toggleInfoModal', () => {
  it('Should toggle info modal', () => {
    let state = {showInfoModal: false}
    state = reducer(state, toggleInfoModal());
    expect(state).toEqual({showInfoModal: true})
  })
})

describe('newGame', () => {
  it('Should start a new game', () => {
    let state = {
      guesses: [4, 6, 7],
      feedback: 'Terribly Wrong : (',
      correctAnswer: Math.round(Math.random() * 100),
      showInfoModal: false
    };
    state = reducer(state, newGame());
    expect(state).toEqual({
      guesses: [], 
      feedback:'Make your guess!',
      correctAnswer: state.correctAnswer,
      showInfoModal: false
    });
  })
})




// export const NEW_GAME = 'NEW_GAME';
// export const newGame = () => ({
//     type: NEW_GAME,
//     correctAnswer: Math.round(Math.random() * 100),
// });

// export const MAKE_GUESS = 'MAKE_GUESS';
// export const makeGuess = (guess) => ({
//     type: MAKE_GUESS,
//     guess
// });

// export const TOGGLE_INFO_MODAL = 'TOGGLE_INFO_MODAL';
// export const toggleInfoModal = () => ({
//     type: TOGGLE_INFO_MODAL
// });
