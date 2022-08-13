<script>
    let inputId = "cha6217"
    let inputPw = "1234"
 
	// login 버튼 클릭 이벤트
    let onClickLogin = () => {
        fetch("http://localhost:3000/users",{
            method : "POST",
            mode : "no-cors",
            body : JSON.stringify({
                id : inputId,
                password : inputPw,
            })
        })
        .then(res => {
        console.log(res)
        // localStorage.setItem('access-token',res.access_token)
        });
    }
</script>

<div>
    <h2>Login</h2>
    <div>
        <label for='input_id'>ID : </label>
        <input type='text' name='input_id' bind:value={inputId} />
    </div>
    <div>
        <label for='input_pw'>PW : </label>
        <input type='password' name='input_pw' bind:value={inputPw} />
    </div>
    <div>
        <button type='button' on:click={onClickLogin}>Login</button>
    </div>
</div>

<style>

</style>