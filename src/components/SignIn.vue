<template>
    <div class="container">
        <section class="signin">
            <h1>signin</h1>
            <div class="signin--form">
                <form action="">
                    <legend>Sign in</legend>
                    <fieldset>
                        <p><label for="signin_id">아이디</label><input id="signin_id" type="email" placeholder v-model="input_id"></p>
                        <p><label for="signin_password">비밀번호</label><input id="signin_password" type="password" v-model="input_pw"></p>
                    </fieldset>
                    <!--<button class="signin__btn--signin" type="button" @click="signinCheck"> 로그인 </button>-->
                    <router-link to="/map" tag="button"> 로그인 </router-link>
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
                user_id: null,
                access_token: null
            };
        },
        created(){
            console.log('create');
            window.fbAsyncInit = function() {
                FB.init({
                    appId      : '487816804942698',
                    cookie     : true,  // enable cookies to allow the server to access 
                                        // the session
                    xfbml      : true,  // parse social plugins on this page
                    version    : 'v2.8' // use graph api version 2.8
                });
            };
            
        },
        methods: {
            facebookLogin(){
                let _this = this;
                FB.getLoginStatus(function(res) {
                    if( res.status ==='connected'){
                        _this.user_id = res.authResponse.userID;
                        _this.access_token = res.authResponse.accessToken;
                        console.log('res:', res);
                        _this.$router.push({path: '/map'});
                    }else{
                        FB.login(function(res){
                            console.log('login.res:', res);
                            _this.$router.push({path: '/map'});
                        });
                    }
                });

            },
            signInCheck (){
                this.$router.push({path: '/map'});
            }
        }
}
</script>
