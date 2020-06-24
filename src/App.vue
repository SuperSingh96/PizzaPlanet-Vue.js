<template>
  <div id="app">
    <appHeader />
    <router-view></router-view>
    <div class="info_block_wrapper">
      <router-view name="ordering-guide"></router-view>
      <router-view name="delivery"></router-view>
      <router-view name="history"></router-view>
    </div>
  </div>
</template>

<script>
import Header from "./components/Header";
//import {dbMenuRef} from "./firebase"

export default {
  name: "App",
  components: {
    appHeader: Header,
  },
  created(){
    this.$store.dispatch('setMenuRef')
    this.$store.dispatch('setOrdersRef')
  }
};
</script>

<style>
body {
  font-family: "Crimson Text", "Sefif";
  font-size: 1.3em;
}
ul {
  display: flex;
  justify-content: center;
  padding: 10px 0;
  background: #f1e6da;
  border: 1.5px solid black;
}
li {
  list-style: none;
}
span {
  margin: 0 10px;
}

.info_block_wrapper {
  display: flex;
  flex-direction: row;
}

.info_block {
  background: #f1e6da;
  margin: 10px 0;
  padding: 10px;
  border: 1.5px solid black;
}
.info_block h3 {
  text-align: center;
}
.info_block_content {
  display: flex;
  align-items: center;

}
.info_block img {
  width: 30%;
}
.info_block:nth-child(2){
  margin: 10px;
}
.info_block:nth-child(2) img{
  order: -1;
}
.info_block_content{
  flex-direction: column;
  align-items: center;
}
</style>
