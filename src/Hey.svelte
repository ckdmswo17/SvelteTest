<script lang='ts'>
	export let age: number;
    let alt : string = "source not found";
</script>

<main>
	<h2>you are {age} age!</h2>
    <input type="number" bind:value='{age}'>
    <img src="dd" {alt}>
</main>

<style lang="scss">
    h2 {
        width:300px;
        height:100px;
        display: block;
        background-color: aqua;
    }
</style>