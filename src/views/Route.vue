<template>
    <div class="section">
        <div class="container-fluid t">
            <routeInfo></routeInfo>
            
        </div>
    </div>
</template>

<script>
import RouteInfo from '../components/RouteInfo';


export default {
    components: {
        RouteInfo
    },
    computed: {
        headerStyle() {
            return {
                backgroundImage: `url(${this.header})`,
            };
        }
    },
    props: {
        mapConfig: Object,
        apiKey: String,
    },

    data() {
        return {
        google: null,
        map: null
        }
    },

    
}
</script>

<style lang="scss" scoped>
.section {
    padding-bottom: 0px;
}
.t{
    background-color: white;
    
    position: relative;
    padding: 0px;
}
</style>