<template>
    <div class="image-register">
        <button class="image-register__button__close
                       button__modal__close" 
                @click="$emit('closeModal')">
                닫기버튼
        </button>

        <div class="image-register__heading">
            <strong class="image-register__heading__title">
                사진을 추가해 주세요
            </strong>
            <p class="image-register__heading__message">
                파일을 드래그 하거나 선택할 수 있습니다.
            </p>
        </div>

        <div @dragover.stop.prevent="" 
             @drop.stop.prevent="dropFile" 
             class="image-register__dropzone">
            <strong v-if="!file_url" 
                  class="image-register__dropzone__message">
                  Drag and Drop Here
            </strong>
            <div class="image-register__dropzone__image"
                 v-else-if="file_url">
                <img :src="file_url" alt="">
            </div>
        </div>


        <p class="image-register__desc">
            <input @change="selectedFile" 
                    type="file" name="filename" 
                    accept="image/*">
        </p>


        <button type="button"
                class="button__register"
                @click="callImageRegister">
            등록
        </button> 
        <!--       
        <button type="button"
                class="image-register__button__cancel"
                @click="$emit('closeModal')">
            취소
        </button>
        -->

    </div>
</template>

<script>
import {mapActions} from 'vuex';
export default {
    name: 'image-register',
    data(){
        return{
            file_url: '',
            file_name:'',
            flie: null
        }
    },
    methods: {
        ...mapActions([
            'imageRegister'
        ]),
        checkImage(file){
            if(/.*\.(gif)|(jpeg)|(jpg)|(png)$/.test(file.name.toLowerCase())){
                return true;
            }
        },
        dropFile(e){
            let _this = this;
            let reader = new FileReader();
            if(this.checkImage(e.dataTransfer.files[0])){
                this.file = e.dataTransfer.files[0];
                reader.readAsDataURL(e.dataTransfer.files[0]);
                this.file_name= e.dataTransfer.files[0].name;
                reader.onload=function(){
                    _this.file_url = reader.result;
                }
            }
        },
        selectedFile(e){
            let _this = this;
            let reader = new FileReader();
            if(this.checkImage(e.target.files[0])){
                this.file = e.target.files[0];
                reader.readAsDataURL(e.target.files[0]);
                this.file_name = e.target.files[0].name;
                reader.onload=function(){
                    _this.file_url = reader.result;
                }
            }
        },
        callImageRegister(){
            let _this = this;
            let reader = new FileReader();
            reader.readAsDataURL(this.file);
            reader.onload = function (){
                _this.imageRegister({axios: _this.$http, file: this.result});
            }
        },
        closeModal(){
            this.$emit('closeModal');
        }
    }

}
</script>