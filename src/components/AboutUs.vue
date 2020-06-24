<template>
  <div>
    <h3>~ Click for more info ~</h3>
    <nav>
      <ul>
        <router-link :to="{name: 'historyLink'}" tag="li">
          <a class="nav-link">Our History</a>
        </router-link>
        <span>~</span>
         <router-link :to="{name: 'orderingGuideLink'}" tag="li">
          <a class="nav-link">Ordering Guide</a>
        </router-link>
        <span>~</span>
         <router-link :to="{name: 'deliveryLink'}" tag="li">
          <a class="nav-link">Delivery</a>
        </router-link>
      </ul>
    </nav>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
    name: 'about'
};
</script>

<style scoped>
a{
    color: green;
    text-decoration: none;
}

.router-link-exact-active a{
    color: purple;
}

h3{
    text-align: center;
}
</style>