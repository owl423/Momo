<template>
    <div class="container">
        <section class="signin">
            <h1>signin</h1>
            <div class="signin--form">
                <form action="">
                    <legend>Sign in</legend>
                    <fieldset>
                        <p><label for="signin_id">아이디</label><input id="signin_id" type="email" placeholder v-model="input_id" required></p>
                        <p><label for="signin_password">비밀번호</label><input id="signin_password" type="password" v-model="input_pw" required></p>
                    </fieldset>
                    <button class="signin__btn--signin" type="button" @click="signInCheck"> 로그인 </button>
                    <router-link to="/signup" tag="button"> 회원가입 </router-link>
                </form>
            </div>
            <button type="button" @click="facebookLogin">페이스북 로그인 버튼</button>
        </section>
    </div>
</template>

<script>
export default {
    name: 'SignIn',
    data(){
            return{
                input_id: null,
                input_pw: null,
            };
    },
    created(){
        window.fbAsyncInit = function() {
            FB.init({
                appId      : '1343238479083683',
                cookie     : true,  // enable cookies to allow the server to access 
                                    // the session
                xfbml      : true,  // parse social plugins on this page
                version    : 'v2.8' // use graph api version 2.8
            });
        };
    },
    mounted(){
        console.log(this.$store.state.user);
    },
    methods: {
        setUserSession(name, profile, token){
            window.sessionStorage.setItem('user_name', name);
            window.sessionStorage.setItem('user_profile', profile);
            window.sessionStorage.setItem('user_token', token);
            return {
                user_name: name,
                user_profile: profile,
                user_token: token
            };
        },
        facebookLogin(){
            let _this = this;
            FB.getLoginStatus(function(res) {
                console.log(res);
                let access_token = res.authResponse.accessToken;
                if( res.status ==='connected'){
                    FB.api('/me?fields=id,name,picture.width(100).height(100).as(picture_small)', function(response) {
                        let url = _this.$store.state.url + '/api/member/fb/';
                        _this.$http.post(url, {
                            access_token
                        }).then(function(res){
                            console.log(res);
                        }).catch(function(err){
                            console.log(err.response.data);
                        });
                        let user_session = _this.setUserSession(response.name, response.picture_small.data.url, access_token);
                        _this.$store.commit('setUserInfo', user_session);
                        _this.$router.push({path: '/map'});
                    });
                }else{
                    FB.login(function(res){
                        FB.api('/me?fields=id,name,picture.width(100).height(100).as(picture_small)', function(response) {
                            let user_session = _this.setUserSession(response.name, response.picture_small.data.url, access_token);
                            _this.$store.commit('setUserInfo', user_session);
                            _this.$router.push({path: '/map'});
                        });
                    });
                }
            });

        },
        signInCheck (){
            let url = this.$store.state.url + '/api/member/login/'
            let _this = this; // this는 signin이라는 컴포넌트를 말함. arrow function을 쓸 경우에는 필요없음
            this.$http.post(url, {
                username: _this.input_id, 
                password: _this.input_pw
            })
            .then(function(res){ // 그냥 this를 쓰면 axios객체를 가리키게 되므로.
                const user_no_img_url = '/src/assets/no_img.png';
                let user_session = _this.setUserSession(_this.input_id, user_no_img_url, res.data.token);
                _this.$store.commit('setUserInfo', user_session);
                _this.$router.push({path: '/map'});
            })
            .catch(function(err){
                console.log(err.response);
            })
        }
    }
}
</script>
