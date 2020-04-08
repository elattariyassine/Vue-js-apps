<template>
  <div id="app">
      <h1>Tic Tac Toe Game</h1>
      <Grid></Grid>
  </div>
</template>

<script>

import Grid from './components/Grid.vue';

export default {
  name: 'App',
  components: {
    Grid
  }
}
</script>

<style>

#app {
  font-family: 'Dosis', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin: 0 auto;
  max-width: 400px;
}
#app h1{
  text-transform: uppercase;
  font-weight: bold;
  font-size: 3em;
}

</style>
