const load_Data = "LOAD-DATA";
const clear_State = "CLEAR-DATA";

const initialState = {
  isLoad: true,
  data: {},
};

const cinemaReducer = (state = initialState, action) => {
  switch (action.type) {
    case load_Data:
      return {
        ...state,
        isLoad: false,
        data: action.data,
      };
    case clear_State:
      return {
        isLoad: true,
        state,
      };

    default:
      return state;
  }
};

export const loadData = (data) => ({ type: load_Data, data });
export const clearState = () => ({ type: clear_State });

export default cinemaReducer;
