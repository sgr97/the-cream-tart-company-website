<template>
    <div>
        <h1>Contact</h1>
        <p>Here is some information. This is the contact page</p>
        <p>
            <ul>
                <li>Email: {{email}}</li>
                <li>Phone: {{phone}}</li>
            </ul>
        </p>
    </div>
</template>


<script>
export default {
    name: 'Contact', //name of the component
    data(){
        return {
            email: "abc123@gmail.com",
            phone: "01 234 5678"
        }
    }
}
</script>


<style>


</style>