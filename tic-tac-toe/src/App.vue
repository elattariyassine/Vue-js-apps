<template>
  <div id="app">
      <h1>Tic Tac Toe Game</h1>
      <Grid></Grid>
      <button class="restart" @click="restart">Restart</button>
  </div>
</template>

<script>

import Grid from './components/Grid.vue';
import EventBus from './eventBus';

export default {
  name: 'App',
  components: {
    Grid
  },
  data(){
        return {
           matches: 0,
            wins: {
                O: 0,
                X: 0
            }
        }
    },
    methods: {
      restart(){
        EventBus.$emit('clearCells');
        this.matches++;
      }
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
.restart{
  width: 100%;
  margin: 0;
  background-color: #ff5722;
  border: none;
  color: white;
  padding: 20px 0;
  border-bottom-left-radius: 50px; 
  border-bottom-right-radius: 50px;
  font-weight: bold;
  cursor: pointer;
  outline: none;
  font-size: 2em; 
}
</style>
