// import Axios from 'axios';
// import SignupValidations from '../../../services/SignupValidations';
import {
    // AUTH_ACTION,
    // LOGIN_ACTION,
    // AUTO_LOGIN_ACTION,
    // LOGOUT_ACTION,
    // SET_USER_TOKEN_DATA_MUTATION,
    ADD_HOSPITAL,
    // AUTO_LOGOUT_ACTION,
    // SET_AUTO_LOGOUT_MUTATION,
} from '../../admindashboardconstant';

export default {
    // [LOGOUT_ACTION](context) {
    //     context.commit(SET_USER_TOKEN_DATA_MUTATION, {
    //         first_name: null,
    //         last_name: null,
    //         token: null,
    //         email: null,
    //         userId: null,
    //         role: null,
    //         page: null,
    //         refreshToken: null,
    //         token_type: null,
    //         expires_in: null,
    //     });
    //     localStorage.removeItem('cidraUserData');
    //     if (timer) {
    //         clearTimeout(timer);
    //     }
    // },

    // [AUTO_LOGOUT_ACTION](context) {
    //     context.dispatch(LOGOUT_ACTION);
    //     context.commit(SET_AUTO_LOGOUT_MUTATION);
    // },

    // async [LOGIN_ACTION](context, payload) {
    //     return context.dispatch(AUTH_ACTION, {
    //         ...payload,
    //         url: `https://cidra-web-backend.herokuapp.com/api/v1/user/login`,
    //     });
    // },

    async [ADD_HOSPITAL](context, payload) {
        return context.dispatch({
            ...payload,
            url: `https://cidra-web-backend.herokuapp.com/api/v1/hospital/`,
        });
    },

    // [AUTO_LOGIN_ACTION](context) {
    //     let userDataString = localStorage.getItem('cidraUserData');

    //     if (userDataString) {
    //         let cidraUserData = JSON.parse(userDataString);
    //         console.log("userDataString");
    //         // let expirationTime = userData.expiresIn - new Date().getTime();

    //         // let tokenData = {
    //         //     name: userDataString.name,
    //         //     email: userDataString.email,
    //         //     userId: userDataString.userId,
    //         //     token: userDataString.token,
    //         //     refreshToken: userDataString.refreshToken,
    //         //     expires_in: userDataString.expires_in,
    //         //     role: "admin",
    //         //     token_type: userDataString.token_type,
    //         // };
    //         // localStorage.setItem('userData', JSON.stringify(tokenData));
    //         // context.commit(SET_USER_TOKEN_DATA_MUTATION, tokenData);


    //         context.commit(SET_USER_TOKEN_DATA_MUTATION, cidraUserData);
    //     } else {
    //         context.dispatch(AUTO_LOGOUT_ACTION);

    //     }
    // },

    // async [AUTH_ACTION](context, payload) {
    //     let postData = {
    //         email: payload.email,
    //         password: payload.password,
    //         returnSecureToken: true,
    //     };
    //     let response = '';
    //     let data = [];
    //     try {
    //         response = await Axios.post(payload.url, postData);
    //     } catch (err) {
    //         // context.commit(LOADING_SPINNER_SHOW_MUTATION, false, {
    //         //     root: true,
    //         // });

    //         if (err.response.status === 422) {
    //             data['error'] = err.response.data.message
    //             return data;
    //         } else {
    //             data['error'] = "Unidentified error check internet connection"
    //             return data;
    //         }

    //     }


    //     if (response.status === 200) {
    //         let expirationTime = +response.data.expires_in * 100000;

    //         timer = setTimeout(() => {
    //             context.dispatch(AUTO_LOGOUT_ACTION);
    //         }, expirationTime);

    //         let page = ""
    //         switch (response.data.role[0].name) {
    //             case 'admin':
    //                 data['success'] = "AdminDashboard";
    //                 break;
    //             case 'user':
    //                 data['success'] = "ClientDashboard";
    //                 break
    //             case 'patient':
    //                 data['success'] = "ClientDashboard";
    //         }
    //         console.log(response.data.user.first_name);
    //         console.log(response.data.user.last_name);
    //         console.log(response.data.user.email);
    //         let tokenData = {
    //             first_name: response.data.user.first_name,
    //             last_name: response.data.user.last_name,
    //             email: response.data.user.email,
    //             userId: response.data.user._id,
    //             token: response.data.access_token,
    //             refreshToken: response.data.access_token,
    //             expires_in: expirationTime,
    //             role: response.data.role[0].name,
    //             page: page,
    //             token_type: response.data.token_type,
    //         };
    //         localStorage.setItem('cidraUserData', JSON.stringify(tokenData));
    //         context.commit(SET_USER_TOKEN_DATA_MUTATION, tokenData);
    //         return data;
    //         // console.log(SET_USER_TOKEN_DATA_MUTATION);
    //     }
    // },
};