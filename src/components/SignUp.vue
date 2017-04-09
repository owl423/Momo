<template>
    <div class="container">
        <section class="signup">
            <h1>Sign Up</h1>
            <div class="signup--form">
                <form action="">
                    <legend>Sign Up</legend><!-- css 숨김(position) -->
                    <fieldset>
                        <p><label for="">아이디</label> <input type="text"></p>
                        <p><label for="">이메일</label> <input type="email"></p>
                        <p><label for="">비밀번호</label> <input type="password"></p>
                    </fieldset>
                    <router-link to="/" tag="button"> 동의하고 회원가입</router-link>
                    <router-link to="/" tag="button"> 취소</router-link>
                </form>
            </div>
        </section>
    </div>
</template>