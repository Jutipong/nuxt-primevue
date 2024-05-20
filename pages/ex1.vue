<script lang="ts" setup>
const toggleable = ref(false)
const statusOptions = ref([
    { name: 'Active', code: true },
    { name: 'InActive', code: false },
])

const state = ref({
    name: null,
    status: null,
})

const selectedCities = ref()
const cities = ref([
    { name: 'New York', code: 'NY' },
    { name: 'Rome', code: 'RM' },
    { name: 'London', code: 'LDN' },
    { name: 'Istanbul', code: 'IST' },
    { name: 'Paris', code: 'PRS' },
])

function toggle() {
    toggleable.value = !toggleable.value
}
</script>

<template>
    <div class="row">
        <div class="col-12">
            <Panel toggleable :collapsed="toggleable" @toggle="toggle">
                <!-- <template #header>
                    <div class="flex align-items-center gap-1">
                        <Button
                            class="p-button-sm"
                            icon="i-mdi:magnify"
                            severity="primary"
                            label="Search"
                            :outlined="!toggleable"
                            @click="toggle"
                        />
                    </div>
                </template> -->

                <template #default>
                    <div class="row">
                        <div class="col-12 md:col-6 lg:col-6">
                            <div class="grid p-fluid field">
                                <label for="name" class="col-12 md:col-2">Name</label>
                                <div class="col-12 md:col-10">
                                    <InputText id="name" v-model="state.name" type="search" />
                                </div>
                            </div>
                        </div>

                        <div class="col-12 md:col-6 lg:col-6">
                            <div class="grid p-fluid field">
                                <label for="statue" class="col-12 md:col-2">Statue</label>
                                <div class="col-12 md:col-10">
                                    <Dropdown
                                        v-model="state.status"
                                        option-value="code"
                                        :options="statusOptions"
                                        show-clear
                                        option-label="name"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="row">
                        <div class="col-12 md:col-6 lg:col-6">
                            <div class="grid p-fluid field">
                                <label for="name" class="col-12 md:col-2">Name</label>
                                <div class="col-12 md:col-10">
                                    <InputText
                                        id="name"
                                        v-model="state.name"
                                        autocapitalize="off"
                                        type="search"
                                    />
                                </div>
                            </div>
                        </div>

                        <div class="col-12 md:col-6 lg:col-6">
                            <div class="grid p-fluid field">
                                <label for="city" class="col-12 md:col-2">City</label>
                                <div class="col-12 md:col-10">
                                    <MultiSelect
                                        v-model="selectedCities"
                                        w-full
                                        option-value="code"
                                        :options="cities"
                                        :filter="true"
                                        option-label="name"
                                        placeholder="Select Cities"
                                        display="chip"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </template>

                <template #footer>
                    <div class="grid gap-1 justify-content-end mr-2">
                        <Button label="Clear" severity="warning" outlined icon="i-mdi:refresh" />
                        <Button label="Search" severity="success" icon="i-mdi:magnify" />
                    </div>
                </template>
            </Panel>
        </div>
    </div>
</template>
