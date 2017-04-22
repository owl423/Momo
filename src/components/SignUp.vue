<template>
    <div class="container">
        <bgVideo></bgVideo>
        <section class="signup member_wrap">
            <div class="logo">
                <h1>MoMo</h1>
                <p class="logo_desc">Map Of My Oasis - </p>
            </div>
            
            <div class="signup__form member_form">
                <h1>Sign Up</h1>
                <form action="">
                    <legend>Sign Up</legend>
                    <fieldset>
                        <p><label for="signup_id">I  D</label> 
                            <input v-model="username" 
                                   id="signup_id"
                                   type="text" required>
                        </p>
                        <p>{{error_msg_id}}</p>
                        <p><label for="signup_email">Email</label>
                            <input v-model="email" 
                                   id="signup_email"
                                   type="email" required>
                        </p>
                        <p>{{error_msg_email}}</p>
                        <p><label for="signup_password">Password</label>
                            <input v-model="password"
                                   id="signup_password"
                                   type="password" required>
                        </p>
                    </fieldset>
                    <button type="button" 
                            @click="signUpSubmit">
                        동의하고 회원가입
                    </button>
                    <router-link to="/" tag="button">
                        취소
                    </router-link>
                </form>
            </div>
        </section>
    </div>
</template>

<script>

import bgVideo from './bgVideo.vue';

export default {
    name: 'SignUp',
    components: {
        bgVideo
    },
    data(){
        return {
            username : '',
            email : '',
            password: '',
            error_msg_id: '',
            error_msg_email: ''
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
                let data = err.response.data;
                console.log('error');
                console.log(data);
                if(data.username){
                    _this.error_msg_id = data.username[0];
                }else{
                    _this.error_msg_id = '';    
                }
                if(data.email){
                    _this.error_msg_email = data.email[0];
                }else{
                    _this.error_msg_email = '';    
                }
            })
        }
    }
}
</script>