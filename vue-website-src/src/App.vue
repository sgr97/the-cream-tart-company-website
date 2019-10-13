<template>
  <div id="app">
    <Nav></Nav>
  </div>
  
</template>

<script>
import Nav from './components/Nav';

export default {
  name: 'app',
  components: {
    'Nav': Nav
  }
}
</script>

<style>

* {
  margin: 0;
  padding: 0;
}

html, body {
   height: 100%;
   width: 100%;
}

#app::before {
  background-image: url(./assets/background.jpg);
  background-size: cover;
  content: "";
  display: block;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: -2;
  opacity: 0.5;
}

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;

  width: 100%;
  height: 100%;
  min-width: 100%;
  min-height: 100%;
  position: relative;
}

#app::after {
  background-color: #EE82EE;
  content: "";
  display: block;
  position: absolute;
  top: 0px;
  left: 0px;
  width: 100%;
  height: 100%;
  z-index: -1;
  opacity: 0.5;
}
</style>
