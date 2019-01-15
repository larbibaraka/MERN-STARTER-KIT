import { SAY_HELLO } from '../constants/index';



const initialState = {
  textValue : 'welecome to my website this just some dummy content enjoy'
}

export default (state = initialState , action={}) => {
  switch (action.type) {
    case SAY_HELLO:
        return initialState
    default:
      return state;
  }
}