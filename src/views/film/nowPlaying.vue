<template>
    <div>
        正在热映
    </div>
</template>

<script>
import url from '../../config/url'
    export default {
        created(){
            this.$http.get(url.nowPlaying).then(res=>{
                console.log('res');
            })
        }
    }
</script>

<style lang="scss" scoped>

</style>