// Import HTML file
import '../index.html';

// Import CSS
import '../css/index.scss';

import Vue from 'vue';
import VueRouter from 'vue-router';

// Vue.config.devtools = true;

Vue.use(VueRouter);

const Login = Vue.extend({
	template: '<div>Yay <i class="fa fa-child" aria-hidden="true"></i></div>'
});

const App = Vue.extend({});
const router = new VueRouter({
	history: true,
	mode: 'html5'
});
router.map({
	'/login': {
		component: Login
	}
});
router.start(App, '#app');