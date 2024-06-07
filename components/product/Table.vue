<script lang="ts" setup>
import type { DataTablePageEvent, DataTableSortEvent } from 'primevue/datatable'
import type { Product, ProductSearch } from '~/types/Product'

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
}

defineExpose({ search: func.searchPublic })
</script>

<template>
    <div class="row mt-3">
        <div class="col-12">
            <div class="card">
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

                    <Column field="id" header="ID" sortable />
                    <Column field="brand" header="BRAND" sortable />
                    <Column field="sku" header="SKU" sortable />
                    <Column field="price" header="PRICE" sortable />
                </DataTable>
            </div>
        </div>
    </div>
</template>
