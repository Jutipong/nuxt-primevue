<script setup lang="ts">
import { computed, onBeforeUnmount, onMounted, ref } from 'vue'
import { useRouter } from 'vue-router'
import { useLayout } from '../composables/layout'

const { layoutConfig, onMenuToggle } = useLayout()
const outsideClickListener = ref<any>(null)
const topbarMenuActive = ref(false)
const router = useRouter()
const confirm = useConfirm()

onMounted(() => {
  bindOutsideClickListener()
})
onBeforeUnmount(() => {
  unbindOutsideClickListener()
})
const logoUrl = computed(() => {
  return `/images/${layoutConfig.darkTheme.value ? 'logo-white' : 'logo-dark'}.svg`
})

// const onTopBarMenuButton = () => {
//     topbarMenuActive.value = !topbarMenuActive.value;
// };

const topbarMenuClasses = computed(() => {
  return {
    'layout-topbar-menu-mobile-active': topbarMenuActive.value,
  }
})

function bindOutsideClickListener() {
  if (!outsideClickListener.value) {
    outsideClickListener.value = (event: any) => {
      if (isOutsideClicked(event))
        topbarMenuActive.value = false
    }

    document.addEventListener('click', outsideClickListener.value)
  }
}

function unbindOutsideClickListener() {
  if (outsideClickListener.value) {
    document.removeEventListener('click', outsideClickListener.value)
    outsideClickListener.value = null
  }
}

function isOutsideClicked(event: any) {
  if (!topbarMenuActive.value)
    return
  const sidebarEl = document.querySelector('.layout-topbar-menu')
  const topbarEl = document.querySelector('.layout-topbar-menu-button')

  return !(sidebarEl?.isSameNode(event.target) || sidebarEl?.contains(event.target) || topbarEl?.isSameNode(event.target) || topbarEl?.contains(event.target))
}

function logout(event: any) {
  confirm.require({
    target: event.currentTarget,
    group: 'confirm-logout',
    icon: 'pi pi-exclamation-circle',
    acceptIcon: 'pi pi-check ',
    rejectIcon: 'pi pi-times',
    acceptLabel: 'Confirm',
    rejectLabel: 'Cancel',
    rejectClass: 'p-button-secondary p-button-outlined p-button-sm w-8rem',
    acceptClass: 'p-button-danger p-button-sm w-8rem',
    message: 'Are you sure you want to logout?',
    accept: () => router.push('/login'),
  })
}
</script>

<template>
  <div class="layout-topbar">
    <ConfirmPopup group="confirm-logout">
      <template #message="slotProps">
        <div class="flex flex-column align-items-center w-full gap-3 border-bottom-1 surface-border p-3 mb-3 pb-0">
          <i :class="slotProps.message.icon" class="text-5xl text-red-500" />
          <p class="pb-2">
            {{ slotProps.message.message }}
          </p>
        </div>
      </template>
    </ConfirmPopup>

    <router-link to="/" class="layout-topbar-logo">
      <img :src="logoUrl" alt="logo">
      <span>SAKAI</span>
    </router-link>

    <button class="p-link layout-menu-button layout-topbar-button" @click="onMenuToggle()">
      <i class="pi pi-bars" />
    </button>

    <button class="p-link layout-topbar-menu-button layout-topbar-button">
      <i class="pi pi-ellipsis-v" />
    </button>

    <div class="layout-topbar-menu" :class="topbarMenuClasses">
      <!-- <button @click="onTopBarMenuButton()" class="p-link layout-topbar-button">
                <i class="pi pi-calendar"></i>
                <span>Calendar</span>
            </button>
            <button @click="onTopBarMenuButton()" class="p-link layout-topbar-button">
                <i class="pi pi-user"></i>
                <span>Profile</span>
            </button> -->
      <button class="p-link layout-topbar-button" @click="logout($event)">
        <i class="pi pi-sign-out" />
        <span>Logout</span>
      </button>
    </div>
  </div>
</template>
