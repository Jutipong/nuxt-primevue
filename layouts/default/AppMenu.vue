<script setup>
import { ref } from 'vue'
import AppMenuItem from './AppMenuItem.vue'

const model = ref([
  {
    label: 'Home',
    items: [{ label: 'Dashboard', icon: 'pi pi-fw pi-home', to: '/' }],
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
    ],
  },
])
</script>

<template>
  <ul class="layout-menu">
    <template v-for="(item, i) in model" :key="item">
      <AppMenuItem v-if="!item.separator" :item="item" :index="i" />
      <li v-if="item.separator" class="menu-separator" />
    </template>
  </ul>
</template>
