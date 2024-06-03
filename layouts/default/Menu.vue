<script setup>
import MenuItem from './MenuItem.vue'

const model = ref([
    {
        label: 'Home',
        items: [{ label: 'Dashboard', icon: 'pi pi-fw pi-home', to: '/' }],
    },
    {
        label: 'Examples',
        items: [
            { label: 'Product', icon: 'i-mdi:run-fast', to: '/product' },
        ],
    },
    {
        label: 'UI Components',
        items: [
            {
                label: 'Form Layout',
                icon: 'pi pi-fw pi-id-card',
                to: '/uikit/formlayout',
            },
            {
                label: 'Button',
                icon: 'pi pi-fw pi-mobile',
                to: '/uikit/button',
                class: 'rotated-icon',
            },
            { label: 'Panel', icon: 'pi pi-fw pi-tablet', to: '/uikit/panels' },
            { label: 'Message', icon: 'pi pi-fw pi-comment', to: '/uikit/messages' },
            { label: 'File', icon: 'pi pi-fw pi-file', to: '/uikit/file' },
            { label: 'Dialog', icon: 'pi pi-fw pi-file', to: '/dialog' },
            { label: 'ConfirmDialog', icon: 'pi pi-fw pi-file', to: '/ConfirmDialog' },
            { label: 'ConfirmPopup', icon: 'pi pi-fw pi-file', to: '/ConfirmPopup' },
        ],
    },
])
</script>

<template>
    <ul class="layout-menu">
        <template v-for="(item, i) in model" :key="item">
            <MenuItem v-if="!item.separator" :item="item" :index="i" />
            <li v-if="item.separator" class="menu-separator" />
        </template>
    </ul>
</template>
