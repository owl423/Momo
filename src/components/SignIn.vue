<template>
    <div class="container">
        <bgVideo></bgVideo>
        <section class="signin member_wrap">
            <div class="logo">
                <h1>MoMo</h1>
                <p class="logo_desc">Map Of My Oasis - </p>
            </div>

            <div class="signin__form member_form">
                <h1>Sign In</h1>
                <form action="">
                    <legend>Sign in</legend>
                    <fieldset>
                        <p><label for="signin_id">I  D</label>
                            <input id="signin_id" 
                                    type="text" 
                                    placeholder="Id을 입력해주세요"
                                    v-model="input_id" required>
                        </p>
                        <p><label for="signin_password">Password</label>
                            <input id="signin_password" 
                                    type="password" 
                                    placeholder="Password를 입력해주세요"
                                    v-model="input_pw" 
                                    required>
                        </p>
                        <!--
                        <p><label for="signin_email">Email</label>
                            <input id="signin_email" 
                                    type="email" 
                                    placeholder="Email을 입력해주세요"
                                    v-model="input_email" required>
                        </p>
                        -->
                    </fieldset>
                    <button class="member__button"
                            type="button" 
                            @click="signInCheck"> 
                        Sign In
                    </button>
                    <router-link class="member__button"
                            to="/signup" tag="button">
                        Sign Up 
                    </router-link>
                    <button class="signin__facebook"
                            @click="facebookLogin">
                        Facebook Sign In
                    </button>
                </form>
            </div>
        </section>
    </div>
</template>

<script>

import bgVideo from './bgVideo.vue';
import {mapMutations} from 'vuex';

export default {
    name: 'SignIn',
    components: {
        bgVideo
    },
    data(){
            return{
                input_id: null,
                input_pw: null,
            };
    },
    created(){
        
    },
    mounted(){
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
    methods: {
        ...mapMutations([
            'setUserInfo'
        ]),
        // session유지를 위해 백엔드api에서 불러온 코드
        setUserSession(name, profile, token, pk){
            window.sessionStorage.setItem('user_name', name);
            window.sessionStorage.setItem('user_profile', profile);
            window.sessionStorage.setItem('user_token', token);
            window.sessionStorage.setItem('user_pk', pk);
            return {
                user_name: name,
                user_profile: profile,
                user_token: token,
                user_pk: pk
            };
        },
        facebookLogin(){
            let _this = this;
            FB.getLoginStatus(function(res) {
                console.log(res);
                if( res.status ==='connected'){
                    let access_token = res.authResponse.accessToken;
                    FB.api('/me?fields=id,name,picture.width(100).height(100).as(picture_small)', function(response) {
                        let url = _this.$store.state.url + '/api/member/fb/';
                        _this.$http.post(url, {
                            access_token
                        }).then(function(res){
                            console.log(res);
                            let user_session = _this.setUserSession(response.name, response.picture_small.data.url, res.data.token, res.data.pk);
                            //_this.$store.commit('setUserInfo', user_session);
                            _this.setUserInfo(user_session);
                            _this.$router.push({path: '/map'});
                        }).catch(function(err){
                            console.log(err.response.data);
                        });
                    });
                }else{
                    FB.login(function(res){
                        let access_token = res.authResponse.accessToken;
                        FB.api('/me?fields=id,name,picture.width(100).height(100).as(picture_small)', function(response) {
                            let url = _this.$store.state.url + '/api/member/fb/';
                            _this.$http.post(url, {
                                access_token
                            }).then(function(res){
                                console.log(res);
                                let user_session = _this.setUserSession(response.name, response.picture_small.data.url, res.data.token, res.data.pk);
                                // _this.$store.commit('setUserInfo', user_session);
                                _this.setUserInfo(user_session);
                                _this.$router.push({path: '/map'});
                            }).catch(function(err){
                                console.log(err.response.data);
                            });
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
                console.log(res);
                const user_no_img_url = '/src/assets/no_img.png';
                let user_session = _this.setUserSession(_this.input_id, user_no_img_url, res.data.token, res.data.user_pk);
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
