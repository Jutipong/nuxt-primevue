<script lang="ts" setup>
const state = reactive({
    data: {
        name: null,
        last: null,
        status: null,
        city: null,
        start: null,
        end: null,
    },
    control: {
        toggleable: false,
    },
    option: {
        state: [
            { name: 'Active', code: true },
            { name: 'InActive', code: false },
        ],
        city: [
            { name: 'New York', code: 'NY' },
            { name: 'Rome', code: 'RM' },
            { name: 'London', code: 'LDN' },
            { name: 'Istanbul', code: 'IST' },
            { name: 'Paris', code: 'PRS' },
        ],
    },
})

const func = {
    toggle: () => {
        state.control.toggleable = !state.control.toggleable
    },
}
</script>

<template>
    <div class="row">
        <div class="col-12">
            <Panel toggleable :collapsed="state.control.toggleable" @toggle="func.toggle">
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
                                    <InputText id="name" v-model="state.data.name" type="search" />
                                </div>
                            </div>
                        </div>

                        <div class="col-12 md:col-6 lg:col-6">
                            <div class="grid p-fluid field">
                                <label for="statue" class="col-12 md:col-2">Statue</label>
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

                    <div class="row">
                        <div class="col-12 md:col-6 lg:col-6">
                            <div class="grid p-fluid field">
                                <label for="last" class="col-12 md:col-2">Last</label>
                                <div class="col-12 md:col-10">
                                    <InputText
                                        id="last"
                                        v-model="state.data.last"
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
                                        v-model="state.data.city"
                                        w-full
                                        option-value="code"
                                        :options="state.option.city"
                                        :filter="true"
                                        option-label="name"
                                        display="chip"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="row">
                        <div class="col-12 md:col-6 lg:col-6">
                            <div class="grid p-fluid field">
                                <label class="col-12 md:col-2">Start</label>
                                <div class="col-12 md:col-10">
                                    <Calendar
                                        v-model="state.data.start"
                                        date-format="dd/mm/yy"
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
                                        date-format="dd/mm/yy"
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
                    <div class="grid gap-1 justify-end  mr-2">
                        <Button label="Clear" severity="warning" outlined icon="i-mdi:refresh" />
                        <Button label="Search" severity="success" icon="i-mdi:magnify" />
                    </div>
                </template>
            </Panel>
        </div>
    </div>
</template>
