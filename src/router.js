import { createRouter, createWebHistory } from 'vue-router';
import store from './store/store';
import { IS_USER_AUTHENTICATE_GETTER } from './store/storeconstants';

const Login = () => import('./pages/Login.vue');
const Signup = () => import('./pages/Signup.vue');
const Home = () => import('./pages/Home.vue');
const ClientDashboard = () => import('./pages/Client/Dashboard.vue');


//minister of health route imports
const AdminDashboard = () => import('./pages/Admin/Dashboard.vue');
const ListHospital = () => import ('./pages/Admin/Hospital/Index.vue');
const ListPharmacy = () => import ('./pages/Admin/Pharmacy/Index.vue');
const ListDoctor = () => import ('./pages/Admin/Doctor/Index.vue');

const routes = [
    { path: '/', component: Home },
    { path: '/login', component: Login, meta: { auth: false } },
    { path: '/signup', component: Signup, meta: { auth: false } },
    { path: '/ClientDashboard', component: ClientDashboard, meta: { auth: true } },
    //minister of health routes
    { path: '/AdminDashboard', component: AdminDashboard, meta: { auth: true } },
    //minister of health routes hospital
    { path: '/ListPharmacy', component: ListPharmacy, meta: { auth: true } },
    //minister of health routes pharmacy
    { path: '/ListHospital', component: ListHospital, meta: { auth: true } },
    //minister of health routes Doctor
    { path: '/ListDoctor', component: ListDoctor, meta: { auth: true } },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

router.beforeEach((to, from, next) => {
    if (
        'auth' in to.meta &&
        to.meta.auth &&
        !store.getters[`auth/${IS_USER_AUTHENTICATE_GETTER}`]
    ) {
        next('/login');
    } else if (
        'auth' in to.meta &&
        !to.meta.auth &&
        store.getters[`auth/${IS_USER_AUTHENTICATE_GETTER}`]
    ) {
        next('/ClientDashboard');
    } else {
        next();
    }
});

export default router;
