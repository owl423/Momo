import SignIn from './components/SignIn.vue';
import SignUp from './components/SignUp.vue';
import Map from './components/Map.vue';
import SlideMenu from './components/SideMenu.vue';

// route setting

export const routes = [
    {
        path: '/',
        name: 'SignIn',
        components: {
            default: SignIn,
        }
    },
    {
        path: '/map',
        components: {
            default: Map,
        },
    },
    {
        path: '/SignUp',
        components: {
            default: SignUp
        }
    },
];