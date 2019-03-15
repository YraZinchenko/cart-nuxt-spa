<template>
    <v-container>
        <v-layout justify-center column>
            <v-flex v-for="(item, i) in clinics" :key="i" class="clinics-item">
                <v-card>
                    <div>
                        <img :src="item.logo" alt="" class="logo-img">
                    </div>
                    <v-card-title primary-title>
                    <div class="name-adress-clinic">
                        <div>
                            <h3 class="headline mb-0">{{ item.name }}</h3>
                            <div class="headline mb-0"> {{ item.address }} </div>
                            <div class="headline mb-0"><span>Минимальная услуга -</span>
                            <span>{{ getMin(i) }}</span></div>
                        </div>
                        <div class="action-section">
                            <v-card-actions>
                                <v-expansion-panel>
                                    <v-expansion-panel-content>
                                    <template v-slot:header>
                                        <div>Услуги</div>
                                    </template>
                                    <v-card>
                                        <v-card-text>
                                            <div class="services-wrapper">
                                                <div class="services" v-for="(services, key) in item.services" :key="key">
                                                    <div>
                                                        <h1>{{ services.name }}</h1>
                                                    </div>
                                                    <div class="price-section">
                                                        <span>Цена - </span> <span>{{ services.price }}</span>
                                                    </div>
                                                    <div>
                                                        <v-btn color="success" @click="$store.commit('addItemToCart', services)">Приобрести</v-btn>
                                                    </div>
                                                </div>
                                            </div>
                                        </v-card-text>
                                    </v-card>
                                    </v-expansion-panel-content>
                                </v-expansion-panel>
                            </v-card-actions>
                        </div>
                    </div>
                    </v-card-title>
                </v-card>
            </v-flex>
        </v-layout>
    </v-container>
</template>

<script>
    export default {
        data() {
            return{
                clinics: []
            }
        },
        methods:{
            async getClinics() {
                const res = await this.$axios.$get('http://212.42.46.189:11009/v1/bell');
                this.clinics = res;
                console.log(this.clinics);
            },
            getMin(key) {
                let minimum = this.clinics[key].services[0].price;
                this.clinics[key].services.forEach(element => {
                    if(minimum > element.price) {
                        minimum = element.price;
                    }
                });
                return minimum;
            }
        },
        created() {
            this.getClinics();
        }
    }
</script>

<style>
    .clinics-item {
        margin-bottom: 20px;
    }
    .clinics-item .v-card{
        padding-left: 10px;
        display: flex;
        align-items: center;
    }
    .clinics-item .v-card .v-card__title{
        width: 100%;
    }
    .name-adress-clinic{
        width: 100%;
    }
    .action-section .v-card__actions{
        padding: 0px;
        margin-top: 3px;
    }
    .services-wrapper{
        display: flex;
        flex-wrap: wrap;
    }
    .services{
        padding-right: 20px;
    }
    .price-section{
        text-align: center;
        margin: 5px 0px;
    }
</style>
