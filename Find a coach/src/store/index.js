import { createStore } from 'vuex';

import coachesModule from './modules/coaches/index.js';
import requestsModule from './modules/requests/index.js';
import authModule from './modules/auth/index';

const store = createStore({
  modules: {
    coaches: coachesModule,
    requests: requestsModule,
    authModule
  }
});

export default store;
