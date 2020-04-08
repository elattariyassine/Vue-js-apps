<template>
    <div class="cell">
        
    </div>
</template>

<script>
export default {
    name: "cell",
    data(){
        return {
            mark: '',
            canPlaceMark: false
        }
    }
}
</script>

<style lang="css" scoped>
.cell {
    height: 120px;
    line-height: 120px;
    font-size: 3.5em;
    background-color: #2c3e50;
    font-family: 'Permanent Marker', cursive;
}

.cell:hover {
    background-color: #405971;
    cursor: pointer;
}
</style>