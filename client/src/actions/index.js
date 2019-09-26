import streams from '../apis/streams'

export let signIn = (userId) => {
  return {
    type: 'SIGN_IN',
    payload: userId
  };
};

export let signOut = () => {
  return {
    type: 'SIGN_OUT'
  };
};

export let createStream = (values) => {
  return async (dispatch) => {
    streams.post('/streams', values);
  }
}