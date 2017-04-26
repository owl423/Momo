<template>
    <div id="video-container">
      <video autoplay loop>
        <source :src="videoSrcMP4" type="video/mp4">
      </video>
    </div>
</template>

<script>
    export default {
        name: 'bgVideo',
        computed:{
            videoSrcMP4(){
                return require('../assets/momo2.mp4');
            }
        }
    }
</script>