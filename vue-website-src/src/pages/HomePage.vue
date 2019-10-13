<template>
    <div>
        <div class="img_container">
            <img id="logo_img" src="../assets/company-logo_960x960.png">
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
        position: relative;
        display: block;
        height: 100%;
    }

    #logo_img {
        max-width: 35%;
        max-height: 35%;
        margin: auto;
        opacity: 0.9;
    }


</style>