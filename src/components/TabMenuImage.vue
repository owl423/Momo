<template>
    <div class="tabmenu__view tabmenu__view--image">
        <!--<button class="tabmenu__view__button__edit">Edit</button>-->
        <ul>
            <li><img src="../assets/sample_cafe.jpg" alt=""></li>
            <li><img src="../assets/sample_cafe.jpg" alt=""></li>
            <li><img src="../assets/sample_cafe.jpg" alt=""></li>
            <li><img src="../assets/sample_cafe.jpg" alt=""></li>
            <li><img src="../assets/sample_cafe.jpg" alt=""></li>
            <li><img src="../assets/sample_cafe.jpg" alt=""></li>
            <li><img src="../assets/sample_cafe.jpg" alt=""></li>
            <li><img src="../assets/sample_cafe.jpg" alt=""></li>
            <li><img src="../assets/sample_cafe.jpg" alt=""></li>
            <li><img src="../assets/sample_cafe.jpg" alt=""></li>
            <li><img src="../assets/sample_cafe.jpg" alt=""></li>
            <li><img src="../assets/sample_cafe.jpg" alt=""></li>
        </ul>
    </div>
</template>

<script>
export default {
    name: 'tab-menu-image',
    components: {
    },
    data (){
        return {
            ttt: null
        }
    },
    updated(){
        console.log('updated')
    },
    mounted(){
        console.log('mounted')        
    }
}    
</script>