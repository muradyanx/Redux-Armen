import { type } from "@testing-library/user-event/dist/type";

const LEFT = "LEFT";
const RIGHT = "RIGHT";
const RANGE = "RANGE";
const COLOR_TITLE = 'COLOR-TITLE';
const COLOR_DESCRIPTION = 'COLOR_DESCRIPTION';
const BACKGROUND = 'BACKGROUND'
let initialState = {
  left: "",
  right: "",
  range:0,
  colorTitle:'',
  colorDescription:'',
  background:''
};
const changeReducer = (state = initialState, action) => {
  switch (action.type) {
    case LEFT:
      return {
        ...state,
        left: action.value,
      };
    case RIGHT:
      return {
        ...state,
        right: action.value,
      };
    case RANGE:
      return {
        ...state,
        range: action.value,
      };
      case COLOR_TITLE:
        return {
            ...state,
            colorTitle:action.value
        }
        case COLOR_DESCRIPTION:
          return{
            ...state,
            colorDescription:action.value

          }

          case BACKGROUND:
            return {
              ...state,
              background:action.value
            }
    default:
      return state;

  }
};
export const leftActionCreator = (value) => {
  return {
    type: LEFT,
    value
  };
};
export const rightActionCreator = (value) => {
  return {
    type: RIGHT,
    value
  };
};
export const rangeActionCreator = (value) => {
  return {
    type: RANGE,
    value
  };
};

export const colorTitleActionCreator = (value) =>{
    return {
        type:COLOR_TITLE,
        value
    }
}

export const colordiscreptionActionCreator = (value) =>{
  return {
    type:COLOR_DESCRIPTION,
    value
  }
}

export const backgroundActionCreator = (value) =>{
  return{
  type:BACKGROUND,
  value
  }
}

export default changeReducer;
