export default {
  async contactCoach(context, payload) {
    const newRequest = {
      userEmail: payload.email,
      message: payload.message
    };
    const response = await fetch(
      `https://find-coach-vue.firebaseio.com/requests/${payload.coachId}.json`,
      {
        method: 'POST',
        body: JSON.stringify(newRequest)
      }
    );
    const responseData = await response.json();
    if (!response.ok) {
      const error = new Error(responseData.message || 'Failed to send request');
      throw error;
    }
    newRequest.id = responseData.name;
    newRequest.coachId = payload.coachId;
    context.commit('addRequest', newRequest);
  },
  async fetchRequests(context) {
    const coachId = context.rootGetters.userId;
    const token = context.rootGetters.token;
    const response = await fetch(
      `https://find-coach-vue.firebaseio.com/requests/${coachId}.json?auth=${token}`
    );
    const responseData = await response.json();
    if (!response.ok) {
      const error = new Error(
        responseData.message || 'Failed to tech requests'
      );
      throw error;
    }
    const requests = [];
    for (let key in responseData) {
      requests.push({
        id: key,
        coachId,
        ...responseData[key]
      });
    }
    context.commit('setRequests', requests);
  }
};
