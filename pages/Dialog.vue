<script setup lang="ts">
import { ref } from 'vue'

const visible1 = ref(false)

const position = ref('center')
const visible = ref(false)

function openPosition(pos: any) {
    position.value = pos
    visible.value = true
}
</script>

<template>
    <div class="grid">
        <div class="col-12">
            <div class="card flex justify-content-center">
                <Button label="Show" @click="visible1 = true" />
                <Dialog :visible="visible1" modal header="Edit Profile 1" :style="{ width: '25rem' }">
                    <span class="p-text-secondary block mb-5">Update your information.</span>
                    <div class="flex align-items-center gap-3 mb-3">
                        <label for="username" class="font-semibold w-6rem">Username</label>
                        <InputText id="username" class="flex-auto" autocomplete="off" />
                    </div>
                    <div class="flex align-items-center gap-3 mb-5">
                        <label for="email" class="font-semibold w-6rem">Email</label>
                        <InputText id="email" class="flex-auto" autocomplete="off" />
                    </div>
                    <div class="flex justify-content-end gap-2">
                        <Button type="button" label="Cancel" severity="secondary" @click="visible1 = false" />
                        <Button type="button" label="Save" @click="visible1 = false" />
                    </div>
                </Dialog>
                <br>
                <div class="card">
                    <div class="flex flex-wrap justify-content-center gap-2 mb-2">
                        <Button label="Left" icon="pi pi-arrow-right" severity="secondary" style="min-width: 10rem" @click="openPosition('left')" />
                        <Button label="Right" icon="pi pi-arrow-left" severity="secondary" style="min-width: 10rem" @click="openPosition('right')" />
                    </div>
                    <div class="flex flex-wrap justify-content-center gap-2 mb-2">
                        <Button label="TopLeft" icon="pi pi-arrow-down-right" severity="secondary" style="min-width: 10rem" @click="openPosition('topleft')" />
                        <Button label="Top" icon="pi pi-arrow-down" severity="secondary" style="min-width: 10rem" @click="openPosition('top')" />
                        <Button label="TopRight" icon="pi pi-arrow-down-left" severity="secondary" style="min-width: 10rem" @click="openPosition('topright')" />
                    </div>
                    <div class="flex flex-wrap justify-content-center gap-2">
                        <Button label="BottomLeft" icon="pi pi-arrow-up-right" severity="secondary" style="min-width: 10rem" @click="openPosition('bottomleft')" />
                        <Button label="Bottom" icon="pi pi-arrow-up" severity="secondary" style="min-width: 10rem" @click="openPosition('bottom')" />
                        <Button label="BottomRight" icon="pi pi-arrow-up-left" severity="secondary" style="min-width: 10rem" @click="openPosition('bottomright')" />
                    </div>

                    <Dialog v-model:visible="visible" header="Edit Profile 2" :style="{ width: '25rem' }" :position="position" :modal="true" :draggable="false">
                        <span class="p-text-secondary block mb-5">Update your information.</span>
                        <div class="flex align-items-center gap-3 mb-3">
                            <label for="username" class="font-semibold w-6rem">Username</label>
                            <InputText id="username" class="flex-auto" autocomplete="off" />
                        </div>
                        <div class="flex align-items-center gap-3 mb-5">
                            <label for="email" class="font-semibold w-6rem">Email</label>
                            <InputText id="email" class="flex-auto" autocomplete="off" />
                        </div>
                        <div class="flex justify-content-end gap-2">
                            <Button type="button" label="Cancel" severity="secondary" @click="visible = false" />
                            <Button type="button" label="Save" @click="visible = false" />
                        </div>
                    </Dialog>
                </div>
            </div>
        </div>
    </div>
</template>
