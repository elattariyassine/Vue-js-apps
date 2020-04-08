<template>
    <div>
        <div class="grid">
            <cell v-for="n in 9" :key="n"></cell>
        </div>
    </div>
</template>

<script>

import Cell from './Cell.vue';

export default {
    components: {
        Cell
    },
    data(){
        return {
            matches: 0,
            wins: {
                O: 0,
                X: 0
            },
            
        }
    }
}
</script>

<style lang="css" scoped>
.grid {
    display: grid;
    grid-template-columns: 120px 120px 120px;
    grid-gap: 10px;
    background-color: #34495e;
    width: 100%;
    position: relative;
    padding: 10px;
    color: white;
    box-sizing: border-box;
}
</style>