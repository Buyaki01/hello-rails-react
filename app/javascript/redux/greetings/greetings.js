import Axios from 'axios';

const GET_GREETING = 'GET_GREETING';

const initialState = [];

export const getGreeting = (data) => ({
  type: GET_GREETING,
  payload: data,
});

const returnGreeting = async () => {
  const greeting = await Axios.get('/v1/greetings');
  return greeting;
}

export const fetchGreeting = async (dispatch) => {
  const data = await returnGreeting()
  const greeting = data.data.data.greeting.message
  console.log(greeting)
  dispatch(getGreeting(greeting));
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_GREETING:
      return action.payload;
    default:
      return state;
  }
};

export default reducer;