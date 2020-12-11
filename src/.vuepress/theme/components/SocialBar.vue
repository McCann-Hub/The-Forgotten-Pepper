<template>
    <div :class="['pr-1', 'flex-shrink', 'flex', { 'justify-start': left, 'justify-end': right }]">
        <div
             v-for="item in $themeConfig.social"
             :key="item.text"
             class="px-1">
            <button>{{ item.text }}</button>
        </div>
    </div>
</template>

<script>
export default {
    name: 'SocialBar',
    props: {
        left: {
            type: Boolean,
            default: false
        },
        right: {
            type: Boolean,
            default: true
        }
    }
}
</script>