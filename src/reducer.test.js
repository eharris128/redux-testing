import reducer from './reducer';
import {newGame, makeGuess, toggleInfoModal} from './actions'

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

  describe('makeGuess', () => {
    it('should add guesses to guessList', () => {
      let state = {
        guesses: [],
        feedback: "magic"
      };
      state = reducer(state, makeGuess(50));
      expect(state).toEqual({
        guesses: [50],
        feedback: state.feedback
      });
    })
    it('should have different feedback responses based off of the guess', () => {
      let state = {
        guesses: [],
        feedback: "this is magical",
        correctAnswer: 5
      };
       const values =[{
          input: 55,
          expected: `You're Ice Cold...`},
          {
          input: 35,
          expected: `You're Cold...`},
          {
          input: 15,
          expected: `You're Warm`},
          {
          input: 6,
          expected: `You're Hot!`},
          {
          input: 5,
          expected: `You Got It!`}
        ]

      values.forEach(value => { 
      state = reducer(state, makeGuess(value.input));
      expect(state). toEqual({
        guesses:state.guesses,
        feedback: state.feedback, 
        correctAnswer: 5
      })
      })
    })
  })
})