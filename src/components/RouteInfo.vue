<template>
    <div class="card route-box">
        <div class="d-f route-box-header">
            <img src="@/assets/img/bus.png" alt="bus-image" class="avatar-bus">
            <div class="">
                <span class="info-route-num" :style="{ 'background-color' : route.line_color}">{{ $route.params.id }}</span>
                <h5 class="info-route-name"> {{ route.line_name }} </h5>
            </div>
        </div>
        <div class="route-box-tabs">
            <div class="route-box-tab" :class="info === true ? 'route-box-tab-selected' : ''" v-on:click="changeInfo(true)">
                <a class="route-box-tab-content" role="tab" data-toggle="tab">
                    <i class="material-icons">schedule</i> Horarios
                </a>
            </div>
            <div class="route-box-tab" :class="info === false ? 'route-box-tab-selected' : ''" v-on:click="changeInfo(false)">
                <a class="route-box-tab-content" role="tab" data-toggle="tab">
                    <i class="material-icons">flag</i> Paradas
                </a>
            </div>
        </div>
        <div class="d-f badges">
            <span v-for="day in route.days_available" class="badge" :class="dayType == day ? 'badge-primary' : 'badge-secondary'" v-on:click="setDayType(day)" :key="day.id">{{day}}</span>
        </div>
        <div class="schedule" v-if="info === true">
            <div class="schedule-left">
                <span class="title m-0">{{ schedule[0].stops[0].name }}</span>
                <span v-for="hour in schedule[0].hour" :key="hour.id" class="hour">{{hour}}</span>
            </div>
            <div class="schedule-right">
                <span class="title m-0">{{ schedule[1].stops[0].name }}</span>
                <span v-for="hour in schedule[1].hour" :key="hour.id" class="hour">{{hour}}</span>
            </div>
        </div>
        <div class="schedule" v-if="info === false">
            <div class="schedule-left">
                <span class="title m-0">Paradas</span>
                <span v-for="stop in schedule[0].stops" :key="stop.id" class="hour">{{stop.name}}</span>
            </div>
        </div>
    </div>
</template>

<script>

export default {
    components: {
            
    },
    data() {
        return {
            route: {},
            schedule: {},
            info: true,
            dayType: 'regular'
        }
    },
    created() {
        this.$http.get('http://localhost:3000/route/' + this.$route.params.id)
            .then((res) => {
                console.log(res);
                
                this.route = res.data[0];
                this.setRoute();
            })
    },
    methods: {
        changeInfo(typeInfo) {
            this.info = typeInfo;
            
        },
        setDayType: function(dayType) {
            this.dayType = dayType;
            //const f = this.route.route.filter(x => x.day[0] === this.dayType)            
            this.setRoute();
        },
        setRoute() {
            this.schedule = this.route.route.filter(route => route.day[0] === this.dayType)
        }
    }
}
</script>

<style scoped>
.route-box{
    top: 20px;
    left: 3%;
    width: 25vw;
    min-width: 350px !important;
    -webkit-box-shadow: 0 4px 20px 0 rgba(0,0,0,.14), 0 7px 12px -5px;
    box-shadow: 0 4px 20px 0 rgba(0,0,0,.14), 0 7px 12px -5px;
    position: absolute;
    z-index: 2;
    border-radius: 5px;
    max-height: 80vh;
    background-color: white;
}
.route-box-header{
    box-sizing: content-box;
    padding: 20px;
    border-bottom: 1px solid;
    border-bottom-color: rgba(128, 128, 128, 0.198);
}
.avatar-bus{
    width: 30px;
}
.d-f{
    display: flex;
    align-items: center; 
}
.route-box-tabs{
    display: flex;
    justify-content: space-around;
}
.route-box-tab{
    height: 70px;
    background-color: white;
    width: 100%;
    margin: 10px;
    border-radius: 5px;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
}
.route-box-tab * {
    color: #555555 !important;
}
.route-box-tab-selected {
    background-color: #9C27B0;   
}
.route-box-tab-selected * {
    color: white !important;
}
.route-box-tab-content{
    display: flex;
    flex-direction: column;
    align-items: center;
    
}
.badges{
    background-color: white;
    box-sizing: content-box;
    padding: 5px;
    justify-content: space-around;
}
.schedule{
    display: flex;
    align-items: flex-start;
    justify-content: space-around;
    width: 100%;
    text-align: center;    
    padding: 20px 0px;
    overflow-y: scroll;
    height: 47vh;
}
@media (min-width: 700px) {
    .schedule{
        height: 55vh;
    }
}
.schedule-left{
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
}
.schedule-right{
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
}
.hour{
    padding: 7px 0px;
}
.m-0{
    margin: 0px;
}
.badges{
    background-color: white;
    box-sizing: content-box;
    padding: 5px;
    justify-content: space-around;
    cursor: pointer;
}
.badge-primary {
    color: #fff;
    background-color: #2196f3;
}
.badge-secondary {
    color: #fff;
    background-color: #6c757d;
}
</style>