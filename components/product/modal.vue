<script lang="ts" setup>
const visible = ref(false)

const state = reactive({
    product: {} as Product,
})

const header = computed(() => isEmpty(state.product) ? 'Add' : 'Edit')

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

function onAction() {
    console.log('onAction')
}

defineExpose({ open, close })
</script>

<template>
    <Dialog v-model:visible="visible" modal :header="header" :style="{ width: '60vw' }">
        <div row>
            <div class="col-12 md:col-6 lg:col-6">
                <div class="grid p-fluid field">
                    <label class="col-12 md:col-2">Brand</label>
                    <div class="col-12 md:col-10">
                        <InputText v-model="state.product.brand" />
                    </div>
                </div>
            </div>

            <div class="col-12 md:col-6 lg:col-6">
                <div class="grid p-fluid field">
                    <label class="col-12 md:col-2">Sku</label>
                    <div class="col-12 md:col-10">
                        <InputText v-model="state.product.sku" />
                    </div>
                </div>
            </div>
        </div>

        <div row>
            <div class="col-12 md:col-6 lg:col-6">
                <div class="grid p-fluid field">
                    <label class="col-12 md:col-2">Price</label>
                    <div class="col-12 md:col-10">
                        <InputGroup>
                            <InputNumber
                                v-model="state.product.price"
                                :min-fraction-digits="2"
                                :max-fraction-digits="2"
                                suffix=" THB"
                            />
                            <InputGroupAddon>
                                <i i-mdi:cash />
                            </InputGroupAddon>
                        </InputGroup>
                    </div>
                </div>
            </div>

            <div class="col-12 md:col-6 lg:col-6">
                <div class="grid p-fluid field">
                    <label class="col-12 md:col-2 align-items-start">Detail</label>
                    <div class="col-12 md:col-10">
                        <Textarea v-model="state.product.description" auto-resize />
                    </div>
                </div>
            </div>
        </div>

        <template #footer>
            <div btn-footer>
                <Button type="button" label="Cancel" severity="secondary" icon="i-mdi:close" @click="close" />
                <Button type="submit" label="Search" severity="success" icon="i-mdi:content-save-outline" @click="onAction" />
            </div>
        </template>
    </Dialog>
</template>

<style>

</style>
