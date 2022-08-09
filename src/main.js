import './global.css';

import Hey from './Hey.svelte';


const hey = new Hey({
	target: document.querySelector("#hey"),
});

export default hey;
