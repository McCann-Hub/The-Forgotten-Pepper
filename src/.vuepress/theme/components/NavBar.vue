<template>
    <div class="flex justify-around">
        <div v-for="item in $themeConfig.nav" :key="item.text">
            {{ item.text }}
        </div>
    </div>
</template>

<script>
export default {
    name: "NavBar"
}
</script>