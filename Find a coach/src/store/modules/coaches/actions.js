export default {
  async registerCoach(context, data) {
    const userId = context.rootGetters.userId;
    const coachData = {
      id: userId,
      firstName: data.first,
      lastName: data.last,
      description: data.desc,
      hourlyRate: data.rate,
      areas: data.areas
    };
    const response = await fetch(
      `https://find-coach-vue.firebaseio.com/coaches/${userId}.json`,
      {
        method: 'PUT',
        body: JSON.stringify(coachData)
      }
    );
    // const responseData = await response.json();

    if (!response.ok) {
      //error
    }
    context.commit('registerCoach', { ...coachData, id: userId });
  },
  async loadCoaches(context, payload) {
    if (!payload.forceRefresh && !context.getters.shouldUpdate) {
      return;
    }
    const response = await fetch(
      `https://find-coach-vue.firebaseio.com/coaches.json`
    );
    const responseData = await response.json();

    if (!response.ok) {
      const error = new Error(responseData.message || 'Failed to fetch!');
      throw error;
    }
    const coaches = [];
    for (let coach in responseData) {
      coaches.push({
        id: coach,
        ...responseData[coach]
      });
    }
    context.commit('setCoaches', coaches);
    context.commit('setFetchTimestamp');
  }
};
