<template>
  <div id="app">

    <Lazyprc/>
  </div>
</template>

<script>
import Lazyprc from './components/lazyprc'

export default {
  name: 'App',
  components: {
    Lazyprc
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
