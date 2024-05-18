<script setup>
import { useConfirm } from 'primevue/useconfirm'
import { useToast } from 'primevue/usetoast'

const confirm = useConfirm()
const toast = useToast()

function requireConfirmation() {
    confirm.require({
        group: 'headless',
        header: 'Are you sure?',
        message: 'Please confirm to proceed.',
        accept: () => {
            toast.add({ severity: 'info', summary: 'Confirmed', detail: 'You have accepted', life: 3000 })
        },
        reject: () => {
            toast.add({ severity: 'error', summary: 'Rejected', detail: 'You have rejected', life: 3000 })
        },
    })
}
</script>

<template>
    <ConfirmDialog group="headless">
        <template #container="{ message, acceptCallback, rejectCallback }">
            <div class="flex flex-column align-items-center p-5 surface-overlay border-round">
                <div class="border-circle bg-primary inline-flex justify-content-center align-items-center h-6rem w-6rem -mt-8">
                    <i class="pi pi-question text-5xl" />
                </div>
                <span class="font-bold text-2xl block mb-2 mt-4">{{ message.header }}</span>
                <p class="mb-0">
                    {{ message.message }}
                </p>
                <div class="flex align-items-center gap-2 mt-4">
                    <Button label="Save" @click="acceptCallback" />
                    <Button label="Cancel" outlined @click="rejectCallback" />
                </div>
            </div>
        </template>
    </ConfirmDialog>
    <div class="card flex justify-content-center">
        <Button label="Save" @click="requireConfirmation()" />
    </div>
    <Toast />
</template>
