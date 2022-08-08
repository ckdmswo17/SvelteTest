import './global.css';

import App from './App.svelte';
import Hey from './Hey.svelte';

const app = new App({
	target: document.body,
	props: {
		name: 'world'
	}
});

const hey = new Hey({
	target: document.querySelector("#hey"),
});

export default app; hey;
