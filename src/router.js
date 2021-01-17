import Vue from 'vue';
import Router from 'vue-router';
import AboutMe from './views/AboutMe.vue';
import Skills from './views/Skills.vue';
import Profile from './views/Profile.vue';
import Contact from './views/Contact.vue';

Vue.use(Router);

export default new Router({
    routes: [
        {
            path: "/",
            name: "about",
            component: AboutMe
        },
        {
            path: "/skills",
            name: "skills",
            component: Skills
        },
        {
            path: "/profile",
            name: "profile",
            component: Profile
        },
        {
            path: "/contact",
            name: "contact",
            component: Contact
        }
    ]
});