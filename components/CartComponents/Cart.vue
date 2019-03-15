<template>
    <div>
        <div>
            <h1 class="center-block">Корзина</h1>
            <h3 class="center-block">Вся сумма - {{ getFullPriсe }}</h3>
        </div>
        <div>
            <v-timeline>
                <v-timeline-item
                v-for="(item, key) in $store.state.cartArray"
                :key="key"
                color="red lighten-2"
                large
                >
                <template v-slot:opposite>
                    <span>{{ item.date }}</span>
                </template>
                <v-card class="elevation-2">
                    <v-card-title class="headline">{{ item.name }}</v-card-title>
                    <v-card-text>
                        <span>Price - </span>
                        <span>{{ item.price }}</span>
                    </v-card-text>
                </v-card>
                </v-timeline-item>
            </v-timeline>
        </div>
        <div class="center-block">
            <v-btn color="error" @click="$store.commit('removeCart')">Очистить корзину</v-btn>
        </div>
    </div>
</template>

<script>
    export default {
        computed: {
            getFullPriсe () {
                let fullPriсe = 0;
                this.$store.state.cartArray.forEach(element => {
                    fullPriсe += element.price;
                });
                return fullPriсe;
            }
        }
    }
</script>

<style>
    .center-block{
        text-align: center;
    }
</style>
