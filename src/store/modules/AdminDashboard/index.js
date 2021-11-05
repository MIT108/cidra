import mutations from './mutations';
import actions from './actions';
import getters from './getters';

export default {
    namespaced: true,
    state() {
        return {
            first_name: '',
            last_name: '',
            token: '',
            email: '',
            userId: '',
            role: '',
            page: '',
            refreshToken: '',
            token_type: '',
            expires_in: '',
            autoLogout: false,
        };
    },
    mutations,
    getters,
    actions,
};
 