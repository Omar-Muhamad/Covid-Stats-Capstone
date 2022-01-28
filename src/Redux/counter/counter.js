const INCREAMENT_1 = 'INCREAMENT_1';
const DECREAMENT_1 = 'DECREAMENT_1';

const initialState = 0;

export const increament = () => ({
  type: INCREAMENT_1,
});

export const decreament = () => ({
  type: DECREAMENT_1,
});

const counterReducer = (state = initialState, action) => {
  switch (action.type) {
    case INCREAMENT_1:
      return state + 1;
    case DECREAMENT_1:
      return state - 1;
    default: return state;
  }
};

export default counterReducer;
