<template>
  <div class="admin_wrapper">
    <section v-if="currentUser!==null">
      <div class="current_user_wrapper">
        <span>Logged in as:</span>
        {{currentUser}}
        <button type="button" class="btn_green" @click="signOut">Sign Out</button>
      </div>
      <NewPizza />
      <div class="menu_wrapper">
        <h3>Menu:</h3>
        <table>
          <thead>
            <th>Items</th>
            <th>Remove Items</th>
          </thead>
          <tbody v-for="item in getMenuItems" :key="item.id">
            <tr>
              <td>{{item.name}}</td>
              <td>
                <button type="button" class="btn_red" @click="removeMenuItem(item.id)">&times;</button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <div class="order_wrapper">
        <h3>Current Orders ({{numberOfOrders}}):</h3>
        <table>
          <thead>
            <tr>
              <th>Item</th>
              <th>Size</th>
              <th>Quantity</th>
              <th>Price</th>
            </tr>
          </thead>
          <tbody v-for="(order,index) in getOrders" :key="order.id">
            <tr class="order_number">
              <th colspan="4">
                <strong>Order Number: {{index+1}}</strong>
                <button type="button" class="btn_red" @click="removeOrder(order.id)">&times;</button>
              </th>
            </tr>
            <tr v-for="orderItem in order.pizzas" :key="orderItem.id">
              <td>{{orderItem.name}}</td>
              <td>{{orderItem.size}}</td>
              <td>{{orderItem.quantity}}</td>
              <td>{{orderItem.price | currency}}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>
    <Login v-if="currentUser===null" />
  </div>
</template>


<script>
import NewPizza from "./NewPizza";
import Login from "../components/Login";
import {mapGetters} from 'vuex'
import {store} from '../Store/store'

export default {
  name: "admin",
  methods: {
    signOut() {
      this.$store.dispatch('signOut')
    },
    removeMenuItem(id){
      this.$store.dispatch('removeMenuItem', id)
    },
    removeOrder(id){
      this.$store.dispatch("removeOrder", id)
    }
  },
  beforeRouteLeave: (to, from, next)=>{
    if(confirm('You will be logged out')==true){
      store.dispatch('signOut')
      next()
    }else{
      next(false)
    }
  },
  computed:{
    ...mapGetters(['getMenuItems', 'numberOfOrders', 'currentUser','getOrders'])
  },
  components: {
    NewPizza,
    Login
  },
};
</script>

<style scoped>
.admin_wrapper {
  margin: 10px;
}

.current_user_wrapper,
.menu_wrapper,
.order_wrapper {
  margin: 10px 0;
  padding: 10px;
  border: 2px solid black;
}

table {
  text-align: left;
  width: 70vw;
}

.order_number th {
  background: #ddd;
}
.order_number button {
  margin: 0 10px;
}

.btn_red {
  background-color: red;
  color: white;
}
</style>