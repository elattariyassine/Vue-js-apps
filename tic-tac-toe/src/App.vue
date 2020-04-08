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
  },
  data(){
        return {
            activePlayer: 'O',
            gameStatus: 'turn',
            gameStatusMessage: "O's turn",
            gameStatusColor: 'StatusTurn',
            gameStatusColor: 'StatusTurn',
            moves: 0,
            winConditions: [
              [1, 2, 3], [4, 5, 6], [7, 8, 9], //rows
              [1, 4, 7], [2, 5, 8], [3, 6, 9], //columns
              [1, 5, 9], [3, 5, 7] //diagonals
            ],
            cells: {
              1: '', 2: '', 3: '',
              4: '', 5: '', 6: '',
              7: '', 8: '', 9: '' 
            }
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

</style>
