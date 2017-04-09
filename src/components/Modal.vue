<template>
    <div class="modal">
        <slot></slot>
    </div>
</template> 

<script>
export default {
    name: 'modal',
    methods:{
        closeModal(){
            this.$emit('closeModal');
        }
    }
}
</script>

<style>
</style>