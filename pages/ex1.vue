<script lang="ts" setup>

</script>

<template>
    <div class="grid">
        <div class="col-12">
            <Panel toggleable>
                <template #header>
                    <div class="flex align-items-center gap-1">
                        <!-- <div class="i-ic:search" />
                        <span class="font-bold">Amy Elsner</span> -->
                        <Button class="p-button-sm" icon="i-ic:search" severity="success" label="Search" outlined />
                    </div>
                </template>

                <template #default>
                    <div class="p-fluid">
                        <div class="formgrid grid">
                            <div class="field col">
                                <label for="name2">Name</label>
                                <InputText id="name2" type="text" />
                            </div>
                            <div class="field col">
                                <label for="email2">Email</label>
                                <InputText id="email2" type="text" />
                            </div>
                        </div>
                    </div>
                </template>
            </Panel>
        </div>
    </div>
</template>
