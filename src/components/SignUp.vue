<template>
    <div class="container">
        <section class="signup">
            <h1>Sign Up</h1>
            <div class="signup--form">
                <form action="">
                    <legend>Sign Up</legend><!-- css 숨김(position) -->
                    <fieldset>
                        <p><label for="">아이디</label> <input v-model="username" type="text" required></p>
                        <p><label for="">이메일</label> <input v-model="email" type="email" required></p>
                        <p><label for="">비밀번호</label> <input v-model="password" type="password" required></p>
                    </fieldset>
                    <button type="button" @click="signUpSubmit"> 동의하고 회원가입 </button>
                    <router-link to="/" tag="button"> 취소</router-link>
                </form>
            </div>
        </section>
    </div>
</template>

<script>
export default {
    name: 'SignUp',
    data(){
        return {
            username : '',
            email : '',
            password: ''
        }
    },
    methods : {
        signUpSubmit(){
            let _this = this;
            let url = this.$store.state.url + '/api/member/signup/';
            console.log(url);
            this.$http.post(url, {
                username: _this.username,
                email: _this.email,
                password: _this.password
            })
            .then(function(res){
                console.log('success');
                console.log(res);
                window.alert('회원가입이 성공적으로 완료되었습니다');
                _this.$router.push({path: '/'});
            })
            .catch(function(err){
                console.log('error');
                console.log(err.response.data);
                
            })
        }
    }
}
</script>