
<template>
    <div class="slide">
        <img :src="item.url" alt="" class="big-img">
    </div>
</template>

<script>
export default {
    name: 'slide',
    props: ['item']
}
</script>

<style lang="sass">
.slide
    display: flex
    height: 80vh
    width: 100%
    flex: 0 0 100%
    justify-content: center
    align-items: center
</style>