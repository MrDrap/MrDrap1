const defaultState = {
  role: 'Администратор',
  mail: 'example@mail.com',
  name: 'Никаев Филимон Евлампиевич',
  address: '0x71Dc5c85D8f7128459b1e146A9CfFdD7999A9e3F'
};

const userReducer = (state = defaultState, action) => {
  switch(action.type) {
    default: {
      return state;
    }
  }
};

export default userReducer;