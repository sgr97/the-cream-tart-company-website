<template>
    <div>
        <h1>Home</h1>
        <p>Here is some information. This is the homepage</p>
        <div class="img_container">
            <img id="logo_img" src="../assets/company-logo_960x960.jpg">
        </div>
    </div>
</template>


<script>
export default {
    name: 'HomePage' //name of the component
}
</script>


<style>
    * {
        margin: 0;
        padding: 0;
    }

    .img_container {
        display: grid;
        height: 100%;
    }

    #logo_img {
        max-width: 40%;
        max-height: 40%;
        margin: auto;
    }


</style>