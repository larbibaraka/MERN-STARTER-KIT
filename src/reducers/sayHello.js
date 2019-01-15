import { SAY_HELLO } from '../constants/index';



const initialState = {
  textValue : 'baraka'
}

export default (state = initialState , action={}) => {
  switch (action.type) {
    case SAY_HELLO:
        return initialState
    default:
      return state;
  }
}