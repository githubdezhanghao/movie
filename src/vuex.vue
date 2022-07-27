<template>
    <div>
        vuex使用
        <button @click="$store.commit('add',10)">{{$store.state.num}}</button>
    </div>
</template>

<script>
    export default {
        mounted () {
            ;
        },
    }
</script>

<style lang="scss" scoped>

</style>