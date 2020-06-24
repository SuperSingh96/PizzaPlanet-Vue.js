<template>
    <div class="contact_wrapper">
        <h4>Contact</h4>
        <address>
            <strong>Pizza Planet</strong>
            <br>Address 1
            <br>Address 2
            <br>Phone (+91) 1234567890
        </address>
        <address>
            <strong>Email</strong>
            <br>
            <p>contact@pizzaplanet.com</p>
        </address>
    </div>
</template>

<script>
export default {
    name: 'contact'
}
</script>

<style scoped>
.contact_wrapper{
    background: #f1e6da;
    border: 2px solid black;
    text-align: center;
    margin: 10px;
    padding: 10px;
}
</style>