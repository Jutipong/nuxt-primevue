<script lang="ts" setup>
import type { DataTablePageEvent, DataTableSortEvent } from 'primevue/datatable'
import type { Product, ProductSearch } from '~/types/Product'

const confirm = useConfirm()
const toast = useToast()

const state = reactive({
    search: {} as ProductSearch,
    products: [] as Product[],
    page: 0,
    totalRecords: 0 as number,
})

const func = {
    searchPublic: (product: ProductSearch) => {
        state.search = product
        func.search()
    },
    search: async () => {
        const res: any = await $fetch(`https://dummyjson.com/products?limit=10&skip=${state.page}`)
        state.products = res.products
        state.totalRecords = res.total
    },
    onPage: (event: DataTablePageEvent) => {
        state.page = event.first ?? 0
        func.search()
    },
    onSort: (event: DataTableSortEvent) => {
        state.page = event.first ?? 0
        func.search()
    },
    onEdit: (slotProps: Product) => {
        console.log(slotProps)
    },
    onDelete: (event: Event, product: Product) => {
        confirm.require({
            target: event.currentTarget as HTMLElement,
            message: `Do you want to delete brand ${product.brand}?`,
            icon: 'pi pi-info-circle',
            rejectClass: 'p-button-secondary p-button-outlined p-button-sm',
            acceptClass: 'p-button-danger p-button-sm',
            rejectLabel: 'Cancel',
            acceptLabel: 'Delete',
            accept: () => {
                toast.add({ life: 5000, closable: true, severity: 'success', summary: 'Success', detail: `Brand ${product.brand} deleted.` })
            },
        })
    },
}

defineExpose({ search: func.searchPublic })
</script>

<template>
    <Toast />
    <ConfirmPopup />

    <div row mt-3>
        <div col-12>
            <Card>
                <template #content>
                    <DataTable
                        lazy paginator
                        data-key="id"
                        v-bind="tableSetting"
                        :value="state.products"
                        :total-records="state.totalRecords"
                        @page="func.onPage($event)"
                        @sort="func.onSort($event)"
                    >
                        <template #header>
                            <div class="flex justify-start">
                                <Button type="button" icon="pi pi-plus" severity="success" label="Add" />
                            </div>
                        </template>

                        <template #empty>
                            Data Not Found
                        </template>

                        <Column field="id" header="ID" sortable style="width: 60px;" />
                        <Column field="brand" header="BRAND" sortable />
                        <Column field="sku" header="SKU" sortable />
                        <Column field="price" header="PRICE" sortable />

                        <!-- Delete -->
                        <Column field="price" header="" style="width: 100px">
                            <template #body="slotProps">
                                <div class="flex align-items-center gap-2 text-info">
                                    <Button
                                        text rounded type="button"
                                        severity="danger"
                                        icon="i-mdi:delete-outline"
                                        @click="func.onDelete($event, slotProps.data as Product)"
                                    />

                                    <Button
                                        text rounded type="button"
                                        severity="info"
                                        icon="i-mdi:file-edit-outline"
                                        @click="func.onEdit(slotProps.data as Product)"
                                    />
                                </div>
                            </template>
                        </Column>
                    </DataTable>
                </template>
            </Card>
        </div>
    </div>
</template>
