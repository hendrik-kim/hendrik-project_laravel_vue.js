<template>
    <div>
        <nav class="navbar bg-white border-bottom navbar-light">
            <router-link :to="{ name: 'home' }">LarabelBnb</router-link>
            <router-link :to="{ name: 'example' }">2nd</router-link>
        </nav>
        <router-view></router-view>
    </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped></style>
