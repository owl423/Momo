<template>
    <div class="pin-check">
        <strong class="pin-check__message"> 
            이 장소를 저장하시겠습니까?
        </strong>
        <button class="pin-check-menu__button" 
                @click="$emit('pinOK')">
            OK
        </button>
    </div>
</template>

<script>
export default {
    name: 'pin-check',
    data(){
        return {
        };
    },
}
</script>