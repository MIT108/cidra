import {
    SET_AUTO_LOGOUT_MUTATION,
    SET_USER_TOKEN_DATA_MUTATION,
} from '../../storeconstants';

export default {
    [SET_USER_TOKEN_DATA_MUTATION](state, payload) {
        state.first_name = payload.first_name;
        state.last_name = payload.last_name;
        state.email = payload.email;
        state.token = payload.token;
        state.refreshToken = payload.refreshToken;
        state.role = payload.role;
        state.page = payload.page;
        state.token_type = payload.token_type;
        state.expires_id = payload.expires_in;
        state.userId = payload.userId;
        state.autoLogout = false;
    },

    [SET_AUTO_LOGOUT_MUTATION](state) {
        state.autoLogout = true;
    },
};
