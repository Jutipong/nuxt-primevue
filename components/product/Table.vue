<script lang="ts" setup>
import type { DataTablePageEvent, DataTableSortEvent } from 'primevue/datatable'
import type { ProductModal } from '#build/components'

const confirm = useConfirm()
const toast = useToast()

const modalRef = ref<InstanceType<typeof ProductModal>>()

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
        const { products, total } = await $fetch<{ products: Product[], total: number }>(`https://dummyjson.com/products?limit=10&skip=${state.page}`)
        state.products = products
        state.totalRecords = total
    },
    onPage: (event: DataTablePageEvent) => {
        state.page = event.first ?? 0
        func.search()
    },
    onSort: (event: DataTableSortEvent) => {
        state.page = event.first ?? 0
        func.search()
    },
    onEdit: (val: Product) => {
        modalRef.value!.open(val)
    },
    onAdd: () => {
        modalRef.value!.open({} as Product)
    },
    onDelete: (event: Event, product: Product) => {
        confirm.require({
            ...confirmDeleteSetting,
            target: event.currentTarget as HTMLElement,
            message: `Do you want to delete brand ${product.brand}?`,
            accept: () => {
                toast.add({ ...toastOption, severity: 'success', summary: 'Success', detail: `Brand ${product.brand} deleted.` })
            },
        })
    },
}

defineExpose({ search: func.searchPublic })
</script>

<template>
    <Card mt-3>
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
                        <Button type="button" icon="pi pi-plus" severity="success" label="Add" @click="func.onAdd" />
                    </div>
                </template>

                <template #empty>
                    Data Not Found
                </template>

                <Column field="id" header="ID" sortable style="width: 60px;" />
                <Column field="brand" header="BRAND" sortable />
                <Column field="sku" header="SKU" sortable />
                <Column field="price" header="PRICE" sortable />
                <!-- Edit, Delete -->
                <Column id="action-col" header="Action" style="width: 100px" header-class="flex justify-center">
                    <template #body="slotProps">
                        <div class="flex align-items-center gap-1 text-info">
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

    <ProductModal ref="modalRef" />
</template>

<style scoped>
/* table th :nth-child(5) > .p-column-header-content {
    display: flex;
    justify-content: center;
}
#xx > * > .child {
    display: flex;
    justify-content: center;
} */
</style>
