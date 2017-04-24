<template>
    <div class="comment-register">
        <button class="comment-register__button__close
                        button__modal__close" 
                @click="closeModal">
        </button>
        <strong class="comment-register__name">
            {{ current_pin.pin_name }}
        </strong>
        
        <dl class="comment-register__form register__form">
            <dt class="comment-register__form__title">
                <label for="comment-register_name">
                    나의 코멘트
                </label>
            </dt>
            <dd>
                <input v-model="comment_name"
                        id="comment-register_mapname"
                        class="comment-register__nick"
                        type="text"
                        placeholder="해당 핀에 대해 남기고싶은 코멘트를 남겨주세요">
            </dd>
        </dl>
        <div class="pin-register__button__submit
                    button__submit">
            <button type="button"
                    class="comment-register__button__confirm"
                    @click="commentRegister({axios : $http, comment_name})">
                등록
            </button>        

            <button type="button"
                    class="comment-register__button__cancel"
                    @click="closeModal">
                취소
            </button>
        </div>
    </div>
</template>

<script>
import {mapGetters} from 'vuex';
import {mapActions} from 'vuex';
import {mapMutations} from 'vuex';
export default {
    name: 'comment-register',
    data() {
        return {
            comment_name: ''
        }
    },
    computed: {
        ...mapGetters([
            'current_pin'
        ])
    },
    methods: {
        ...mapActions([
            'commentRegister'
        ]),
        closeModal(){
            this.$emit('closeModal');
        }
    }
}
</script>
