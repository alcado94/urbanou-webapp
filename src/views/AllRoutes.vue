<template>
    <div class="section">
        <div class="title">
            <h2>Líneas</h2>
        </div>
        <div class="list-all-routes">
            <div v-for="route of listRoutes" :key="route.id" class="list-item-route" >
                <router-link :to="'/route/' + route.line_number" class="item-route-pad">
                    <div>
                        <img src="@/assets/img/bus.png" alt="bus-image" class="avatar-bus">
                        <span class="info-route-num" :style="{ 'background-color' : route.line_color}">{{ route.line_number }}</span>
                    </div>
                    <div class="info-route">
                        <h5 class="info-route-name">{{ route.line_name }}</h5>
                    </div>
                </router-link>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            loading: false,
            listRoutes: []
        }
    },
    created() {
        
        return this.$http.get('http://localhost:3000/route')
            .then((res) => {
                
                this.loading= false;
                this.listRoutes = res.data;  
            });
    
    }
}
</script>

<style scoped>
.title{
    margin-left: 5vw;
    margin-bottom: 0px;
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
.list-all-routes{
    width: 30vw;
    background-color: white;
    margin: 5vh 3vw;
    margin-top: 0px;
}
</style>