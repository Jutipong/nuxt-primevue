<script lang="ts" setup>
const visible = ref(false)

const state = reactive({
    product: {} as Product,
})

const header = computed(() => state.product ? 'Edit Product' : 'Add Product')

function open(val: Product) {
    state.product = val
    visible.value = true
    console.log('open', state.product)
}

function close() {
    visible.value = false
    state.product = {} as Product
    console.log('close', state.product)
}

defineExpose({ open, close })
</script>

<template>
    <Dialog v-model:visible="visible" modal :header="header" :style="{ width: '60vw' }">
        <div class="flex align-items-center gap-3 mb-3">
            <label for="username" class="font-semibold w-6rem">Username</label>
            <InputText id="username" class="flex-auto" autocomplete="off" />
        </div>
        <div class="flex align-items-center gap-3 mb-3">
            <label for="email" class="font-semibold w-6rem">Email</label>
            <InputText id="email" class="flex-auto" autocomplete="off" />
        </div>
        <div class="flex justify-end gap-2">
            <Button type="button" label="Cancel" severity="secondary" @click="visible = false" />
            <Button type="button" label="Save" @click="visible = false" />
        </div>
    </Dialog>
</template>

<style>

</style>
