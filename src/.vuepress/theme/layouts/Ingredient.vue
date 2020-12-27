<template>
    <div class="flex justify-center">
        <page-card />
    </div>
</template>

<script>
export default {
    name: 'Ingredient',
    mounted() {
        console.log(this.$pagination.pages);
    }
}
</script>