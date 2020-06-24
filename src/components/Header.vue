<template>
  <header>
    <div class="header_logo">
      <img src="../assets/images/planet.png" alt="pizza planet logo" />
      <h1 href="/">PIZZA PLANET</h1>
    </div>
    <nav>
      <ul>
        <router-link :to="{name: 'homeLink'}" tag="li">
          <a>home</a>
        </router-link>
        <span>~</span>

        <router-link :to="{name: 'menuLink'}" tag="li">
          <a>menu</a>
        </router-link>

        <span>~</span>

        <router-link :to="{name: 'contactLink'}" tag="li">
          <a>contact us</a>
        </router-link>

        <span>~</span>

        <router-link :to="{name: 'aboutLink'}" tag="li">
          <a>about</a>
        </router-link>
      </ul>
    </nav>
  </header>
</template>   
<script>
export default {
  name: "appHeader",
};
</script>

<style scoped>
h1 {
  font-size: 1.3em;
  word-spacing: 8px;
}

.router-link-exact-active a {
  color: purple;
}

a {
  color: green;
  text-decoration: none;
}

.header_logo {
  background-image: linear-gradient(rgb(250, 142, 0), rgb(250, 246, 246));
  display: flex;
  border: 3px solid black;
  flex-direction: column;
  align-items: center;
  padding: 10px;
}

.header_logo img {
  max-width: 13vw;
}

ul {
  padding: 10px 0;
}

li {
  display: inline-block;
}
</style>

