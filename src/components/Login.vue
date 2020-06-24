<template>
  <div class="login_wrapper">
    <p>Please login to continue!</p>
    <form>
      <div>
        <label for="email">Email Address</label>
        <input type="email" v-model="email" id="email" placeholder="Enter email" />
      </div>
      <div>
        <label for="password">Password</label>
        <input type="password" v-model="password" id="password" placeholder="Enter password" />
      </div>
      <button type="button" class="btn_green" @click.prevent="signIn">Sign In</button>
    </form>
  </div>
</template>

<script>

export default {
    name: 'login',
    data(){
        return{
           email: "",
           password: "",
        }
    },
    methods:{
       signIn(){
           const user={
               email: this.email,
               password: this.password
           }
           this.$store.dispatch('signIn', user)
       }
    }
}
</script>