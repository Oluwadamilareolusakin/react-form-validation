const COMPLETE = "COMPLETE";
const INCOMPLETE = "INCOMPLETE";


const formReducer = (state = {statusMessage: "Form is incomplete!", action}) => {
  switch (action.type) {
    case COMPLETE: {
      return Object.assign({}, state, {statusMessage: "Form is complete!"});
    }

    case INCOMPLETE: {
      return Object.assign({}, state, {statusMessage: "Form is incomplete!"});
    }

    default:
      return state;
  };
};

export default formReducer;