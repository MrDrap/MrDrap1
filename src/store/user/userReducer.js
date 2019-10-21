import { ACTION_SET_USER_ROLE } from "./actions";

const defaultState = {
  role: 'Администратор',
  mail: 'example@mail.com',
  name: 'Никаев Филимон Евлампиевич',
  address: '0x71Dc5c85D8f7128459b1e146A9CfFdD7999A9e3F'
};

const userReducer = (state = defaultState, action) => {
  switch(action.type) {
    case ACTION_SET_USER_ROLE: {
      return { ...state, role: action.payload };
    }
    default: {
      return state;
    }
  }
};

export default userReducer;