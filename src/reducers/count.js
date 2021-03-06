import { INCREASE, DECREASE } from '../actions/count';

const initialState = {
  number: 1,
};


export default function update(state = initialState, action) {
  switch (action.type) {
    case INCREASE:
      return {
        number: state.number + action.amount,
      };

    case DECREASE:
      return {
        number: state.number - action.amount,
      };

    default:
      return state;
  }
}

