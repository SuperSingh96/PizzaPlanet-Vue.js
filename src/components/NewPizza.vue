<template>
  <form>
    <h3>Add New Pizza</h3>
    <div class="form-group">
      <label for="name">Name</label>
      <input type="text" id="name" v-model="newPizza.name" />
    </div>
    <div class="form-group">
      <label for="description">Description</label>
      <textarea type="text" id="description" v-model="newPizza.description" rows="5"></textarea>
    </div>
    <p>Option 1:</p>
    <div class="form-group">
      <label for="size1">Size (")</label>
      <input type="text" id="size1" v-model="newPizza.options[0].size" />
    </div>
    <div class="form-group">
      <label for="price1">Price</label>
      <input type="text" id="price1" v-model="newPizza.options[0].price" />
    </div>
    <p>Option 2:</p>
    <div class="form-group">
      <label for="size2">Size (")</label>
      <input type="text" id="size2" v-model="newPizza.options[1].size" />
    </div>
    <div class="form-group">
      <label for="price2">Price</label>
      <input type="text" id="price2" v-model="newPizza.options[1].price" />
    </div>
    <button type="button" class="btn_green" @click="add">Add</button>
  </form>
</template>

<script>
//import { dbMenuRef } from "../firebase";

export default {
  name: "addNewPizza",
  data() {
    return {
      newPizza: {
        name: "Eg. Margherita",
        description:
          "Eg. A delicious tomato based pizza topped with mozzarella",
        options: [
          {
            size: 9,
            price: 6.95
          },
          {
            size: 12,
            price: 10.95
          }
        ]
      }
    };
  },
  methods: {
    add() {
      //dbMenuRef.add(this.newPizza);
      this.$store.dispatch('addMenuItem', this.newPizza)
      console.log("success");
      
    }
  }
};
</script>

<style>
.form_group {
  margin: 10px 0;
}

label {
  display: block;
}
input,
textarea {
  width: 50%;
  padding: 5px;
  box-sizing: border-box;
  margin: 0 0 10px;
  background: rgb(254, 254, 252);
  border: 1px solid black;
}

.btn_green {
  background: green;
  color: white;
  padding: 5px 15px;
  border-radius: 5px;
}
</style>