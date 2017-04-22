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

        <div @dragover.stop.prevent="dragFile" 
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
                @click="imageRegister">
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
export default {
    name: 'image-register',
    data(){
        return{
            file_url: '',
            file_name:'',
        }
    },
    methods: {
        dragFile(e){
        },
        dropFile(e){
            let _this = this;
            let reader = new FileReader();
            reader.readAsDataURL(e.dataTransfer.files[0]);
            this.file_name= e.dataTransfer.files[0].name;
            reader.onload=function(){
                _this.file_url = reader.result;
            }
        },
        selectedFile(e){
            console.log(e.target.files[0]);
            let _this = this;
            let reader = new FileReader();
            reader.readAsDataURL(e.target.files[0]);
            this.file_name = e.target.files[0].name;
            reader.onload=function(){
                _this.file_url = reader.result;
            }
        }, 
        closeModal(){
            this.$emit('closeModal');
        }
    }

}
</script>