<template>
    <div class="image-register">
        <h2 class="image-register--heading">사진을 추가해 주세요</h2>
        <p class="image-register--param"> 파일을 드래그 하거나 선택할 수 있습니다.</p>
        <div @dragover.stop.prevent="dragFile" @drop.stop.prevent="dropFile" class="image-register--drop--zone">
            <span 
            v-if="!file_url" 
            class="image-register--drop--zone--inner">+</span>
            <div class="image-register--image" v-else-if="file_url">
                <img
                class="image-register--image--inner" 
                :src="file_url" alt="">
            </div>
            <p class="image-register--image--desc">{{file_name}}</p>
            <input @change="selectedFile" type="file" name="filename" accept="image/*">
        </div>
        <ul class="image-register--drop--list">
            <li></li>
        </ul>
        <button class="image-register--button--close" @click="$emit('closeModal')">X</button>
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
        }
    }

}
</script>