const key = 'AIzaSyCtzseY2Bqv1PQHk37I4kXfajcEIqTDZxM';
const registerApi = `https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${key}`;
const loginApi = `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${key}`;

export default {
  async login(context, payload) {
    const response = await fetch(loginApi, {
      method: 'POST',
      body: JSON.stringify({
        email: payload.email,
        password: payload.password,
        returnSecureToken: true
      })
    });

    const responseData = await response.json();

    if (!response.ok) {
      console.log(responseData);
      const error = new Error(
        responseData.message || 'Failed to authenticate. Check your login data.'
      );
      throw error;
    }

    console.log(responseData);
    context.commit('setUser', {
      token: responseData.idToken,
      userId: responseData.localId,
      tokenExpiration: responseData.expiresIn
    });
  },
  async signup(context, payload) {
    const response = await fetch(registerApi, {
      method: 'POST',
      body: JSON.stringify({
        email: payload.email,
        password: payload.password,
        returnSecureToken: true
      })
    });
    const responseData = await response.json();

    if (!response.ok) {
      const error = new Error(responseData.message || 'Failed to signup');
      throw error;
    }
    context.commit('setUser', {
      token: responseData.idToken,
      userId: responseData.localId,
      tokenExpiration: responseData.expiresIn
    });
  },
  logout(context) {
    context.commit('setUser', {
      token: null,
      userId: null,
      tokenExpiration: null
    });
  }
};
