<script lang="ts" setup>

</script>

<template>
    <div class="grid">
        <div class="col-12">
            <Panel toggleable>
                <template #header>
                    <div class="flex align-items-center gap-1">
                        <Button class="p-button-sm" icon="i-mdi:magnify" severity="success" label="Search" outlined />
                    </div>
                </template>

                <template #default>
                    <div class="row mt-1">
                        <div class="col-12 md:col-6 lg:col-6">
                            <div class="grid p-fluid field">
                                <label for="name3" class="col-12 mb-2 md:col-2 md:mb-0">Name</label>
                                <div class="col-12 md:col-10">
                                    <InputText id="name3" type="text" />
                                </div>
                            </div>
                        </div>

                        <div class="col-12 md:col-6 lg:col-6">
                            <div class="grid p-fluid field">
                                <label for="email3" class="col-12 mb-2 md:col-2 md:mb-0">Email</label>
                                <div class="col-12 md:col-10">
                                    <InputText id="email3" type="text" />
                                </div>
                            </div>
                        </div>
                    </div>
                </template>
            </Panel>
        </div>
    </div>
</template>
