<template>
    <div class="button" role="group">
        <button class="prev" @click="prevItem"> < </button>
        <button class="next" @click="nextItem"> > </button>
    </div>
</template>

<script>
export default {
    name: 'button',
    data(){
        return {

        }
    },
    methods: {
        prevItem (){
            this.$emit('prev');
        },
        nextItem (){
            this.$emit('next');
        }
    }

}
</script>

<style lang="sass">
.button
    position: absolute
    width: 100%
    top: 50%
    transform: translate(0%, -50%)
.prev
    position: absolute
    left: 0
.next
    position: absolute
    right: 0
</style>