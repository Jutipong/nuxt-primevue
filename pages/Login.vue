<script setup>
const router = useRouter()

definePageMeta({ layout: 'empty' })

const email = ref('')
const password = ref('')
const logoUrl = '/images/logo-dark.svg'

function login() {
    router.push('/')
}
</script>

<template>
    <form class="surface-ground flex align-items-center justify-content-center min-h-screen min-w-screen overflow-hidden" @submit.prevent="login">
        <div class="flex flex-column align-items-center justify-content-center">
            <div style="border-radius: 56px; padding: 0.3rem;">
                <div class="w-full surface-card py-8 px-5 sm:px-8" style="border-radius: 12px">
                    <div class="text-center mb-5">
                        <img :src="logoUrl" alt="Sakai logo" class="mb-5 w-6rem flex-shrink-0">

                        <div class=" text-3xl font-medium mb-3">
                            Welcome, Isabel!
                        </div>
                        <span class="font-medium0">
                            Sign in to continue
                        </span>
                    </div>

                    <div>
                        <InputGroup class="mb-3 w-full md:w-20rem">
                            <InputGroupAddon>
                                <i class="pi pi-user" />
                            </InputGroupAddon>
                            <InputText v-model="email" placeholder="Username" />
                        </InputGroup>

                        <InputGroup class="mb-3 w-full md:w-20rem">
                            <InputGroupAddon>
                                <i class="pi pi-eye" />
                            </InputGroupAddon>
                            <InputText v-model="password" placeholder="Username" />
                        </InputGroup>

                        <Button type="submit" label="Login" w-full @click="login" />
                    </div>
                </div>
            </div>
        </div>
    </form>
</template>

<style scoped>
</style>
