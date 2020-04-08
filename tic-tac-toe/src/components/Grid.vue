<template>
    <div>
        <div class="grid">
            <div class="cell"></div>
            <div class="cell"></div>
            <div class="cell"></div>
            <div class="cell"></div>
            <div class="cell"></div>
            <div class="cell"></div>
            <div class="cell"></div>
            <div class="cell"></div>
            <div class="cell"></div>
        </div>
    </div>
</template>

<script>
export default {
    
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
    box-sizing: border-box;
}

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