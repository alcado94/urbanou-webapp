<template>
    <div class="section mt-5">
        <div class="container list-route-back">
            <ul class="list-clear">
                <clip-loader class="loader-size" :loading="loading" :color="'#000000'" :size="'30px'"></clip-loader>
                <div v-if="!loading">
                    <li v-for="route in listRoutes" :key="route.id" class="list-item-route">
                        <router-link :to="'/route/' + route.line_number" class="item-route-pad">
                            <div>
                                <img src="@/assets/img/bus.png" alt="bus-image" class="avatar-bus">
                                <span class="info-route-num" :style="{ 'background-color' : route.line_color}">{{ route.line_number }}</span>
                            </div>
                            <div class="info-route">
                                <h5 class="info-route-name">{{ route.line_name }}</h5>
                            </div>
                        </router-link>
                    </li>
                </div>
                
            </ul>
        </div>
    </div>
</template>

<script>
import ClipLoader from 'vue-spinner/src/ClipLoader.vue'

export default {
    components: {
        ClipLoader
    },
    props: {
        searchRoute: {
            default: '',
            type: String
        }
    },
    data() {
        return {
            listRoutes: this.searchRoute,
            loading: false
        }
    },
    watch: {
        searchRoute() {
            
            this.loading = true;
            if (this.searchRoute === ''){
                this.loading = false;
                this.listRoutes = []
            } else {

                this.searchRoutes(this.searchRoute);
            }
        }
    },
    methods: {
        searchRoutes(search) {            
            this.$http.get('http://localhost:3000/route/search', 
                { params: { searchRoute: search }})
                .then((res) => {
                    
                    this.loading= false;
                    this.listRoutes = res.data;  
                });
        }
    }
};
</script>

<style lang="css">
.mt-5{
    margin-top: 20px;
    position: absolute;
    width: 100%;
}
.list-route-back{
    background-color: #ffffff;
    border-radius: 6px;
}
.avatar-bus{
    width: 15px;
    margin: 0px 10px;
}
.info-route{
    display: flex;
    align-items: center;
    
}
.list-item-route{
    display: flex;
    /*background-color: #2B2F41;*/
    flex-direction: column;

    margin: 5px 0px;
    border-bottom: 1px solid ;
    border-bottom-color: rgba(0,0,0,.06);
}

.item-route-pad:focus {
    background-color: rgba(43, 47, 65, 0.109); 
}
.item-route-pad{
    box-sizing: content-box;
    padding: 10px;
}
.info-route-num{
    background-color: #2B2F41;
    color: white;
    padding: 0px 10px;
    border-radius: 5px;
}
.info-route-name {
    margin-top: 0px;
    margin-bottom: 5px;
    font-weight: 700;
    font-family: "Roboto Slab", "Times New Roman", serif;
    color: #2B2F41;
    padding-left: 5px;
}
.list-clear{
    margin: 0px;
    padding: 0px;
}
.loader-size{
    padding: 30px 0px;
}
</style>
