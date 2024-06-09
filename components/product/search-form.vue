<script lang="ts" setup>
import type { ProductTable } from '#build/components'

const tableRef = ref<InstanceType<typeof ProductTable>>()

const state = reactive({
    data: {} as ProductSearch,
    control: {
        toggleable: false,
    },
    option: {
        state: [
            { name: 'Active', code: true },
            { name: 'InActive', code: false },
        ],
        tags: [
            { name: 'Beauty', code: 'beauty' },
            { name: 'Mascara', code: 'mascara' },
            { name: 'Eyeshadow', code: 'eyeshadow' },
            { name: 'Face Powder', code: 'face powder' },
            { name: 'Lipstick', code: 'lipstick' },
            { name: 'Nail Polish', code: 'nail polish' },
            { name: 'Fragrances', code: 'fragrances' },
            { name: 'Perfumes', code: 'perfumes' },
        ],
    },
})

const func = {
    toggle: () => state.control.toggleable = !state.control.toggleable,
    onSearch: () => tableRef.value!.search(state.data),
    onClear: () => {
        state.data = {}
        tableRef.value!.search(state.data)
    },
}

onMounted(() => func.onSearch())
</script>

<template>
    <form @submit.prevent="func.onSearch">
        <Panel toggleable :collapsed="state.control.toggleable" @toggle="func.toggle">
            <template #default>
                <div row>
                    <div class="col-12 md:col-6 lg:col-6">
                        <div class="grid p-fluid field">
                            <label class="col-12 md:col-2">Brand</label>
                            <div class="col-12 md:col-10">
                                <InputText id="name" v-model="state.data.brand" />
                            </div>
                        </div>
                    </div>

                    <div class="col-12 md:col-6 lg:col-6">
                        <div class="grid p-fluid field">
                            <label class="col-12 md:col-2">Status</label>
                            <div class="col-12 md:col-10">
                                <Dropdown
                                    v-model="state.data.status"
                                    option-value="code"
                                    :options="state.option.state"
                                    show-clear
                                    option-label="name"
                                />
                            </div>
                        </div>
                    </div>
                </div>

                <div row>
                    <div class="col-12 md:col-6 lg:col-6">
                        <div class="grid p-fluid field">
                            <label class="col-12 md:col-2">Sku</label>
                            <div class="col-12 md:col-10">
                                <InputText
                                    v-model="state.data.sku"
                                    type="text"
                                    autocapitalize="off"
                                />
                            </div>
                        </div>
                    </div>

                    <div class="col-12 md:col-6 lg:col-6">
                        <div class="grid p-fluid field">
                            <label class="col-12 md:col-2">Tags</label>
                            <div class="col-12 md:col-10">
                                <MultiSelect
                                    v-model="state.data.tags"
                                    w-full
                                    option-value="code"
                                    :options="state.option.tags"
                                    :filter="true"
                                    option-label="name"
                                    display="chip"
                                />
                            </div>
                        </div>
                    </div>
                </div>

                <div row>
                    <div class="col-12 md:col-6 lg:col-6">
                        <div class="grid p-fluid field">
                            <label class="col-12 md:col-2">Start</label>
                            <div class="col-12 md:col-10">
                                <Calendar
                                    v-model="state.data.start"
                                    :max-date="state.data.end!"
                                    show-icon icon-display="input"
                                    show-button-bar
                                />
                            </div>
                        </div>
                    </div>

                    <div class="col-12 md:col-6 lg:col-6">
                        <div class="grid p-fluid field">
                            <label class="col-12 md:col-2">End</label>
                            <div class="col-12 md:col-10">
                                <Calendar
                                    v-model="state.data.end"
                                    :min-date="state.data.start!"
                                    show-icon icon-display="input"
                                    show-button-bar
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </template>

            <template #footer>
                <div btn-footer>
                    <Button type="button" label="Clear" severity="warning" icon="i-mdi:refresh" @click="func.onClear" />
                    <Button type="submit" label="Search" severity="primary" icon="i-mdi:magnify" />
                </div>
            </template>
        </Panel>
    </form>

    <ProductTable ref="tableRef" />
</template>
