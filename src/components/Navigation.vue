<template>
    <nav>
        <img src="../assets/img/logo.svg" alt="logo" class="w-20">
        <router-link to="/">Home</router-link>
        <router-link to="/movies">Films</router-link>
        <router-link to="/series">Series</router-link>
        <router-link to="/profile">Profile</router-link>
    </nav>
</template>

<script>
export default {
  name: 'Navigation',
};
</script>

<style lang="scss" scoped>

</style>
