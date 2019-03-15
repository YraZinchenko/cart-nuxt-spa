<template>
    <div>
        <ClinicsList/>
        <template v-if="$store.state.cartArray.length">
            <Cart/>
        </template>
    </div>
</template>

<script>
    import ClinicsList from '~/components/Clinics/ClinicsList.vue'
    import Cart from '~/components/CartComponents/Cart.vue'
    export default {
        components: {
            ClinicsList,
            Cart
        }
    }
</script>