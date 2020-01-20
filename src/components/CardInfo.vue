<template>
    <div class="md-card md-card-blog md-theme-default">
        <div class="md-card-header md-card-header-image" v-if="imageUrl !== ''">
            <a>
                <img :src="imageUrl" class="img">
            </a>
            <div class="colored-shadow" v-bind:style="{ backgroundImage: 'url(' + imageUrl + ')' }" >
        </div>
        </div>
        <div class="md-card-content">
            
            <h4 class="card-title">
                <a>{{title}}</a>
            </h4>
            <p v-if="text !== ''" class="card-description"> {{ text }}</p>
        </div>
        <div  class="md-card-actions md-alignment-right">
            <span>Compartir </span>
            <div class="md-button-content share-icon">
                <i class="fab fa-facebook-square"></i>
            </div>
            <div class="md-button-content share-icon">
                <i data-v-6b71d96a="" class="fab fa-twitter"></i>
            </div>
            <div class="stats ml-auto">
                <i class="md-icon md-icon-font md-theme-default">schedule</i> {{date}} 
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        imageUrl: {
            type: String,
            default: ''
        },
        title: {
            type: String,
            default: ''
        },
        text: {
            type: String,
            default:''
        },
        linkUrl: {
            type: String,
            default: ''
        },
        date: {
            type: String,
            default: ''
        }
    }
}
</script>

<style scoped>
.md-card-header-image{
    overflow: hidden;
    height: 170px;
}
.img{
    transform: scale(1.2);
    margin-top: -55px;
}
.share-icon{
    margin: 0px 5px;
    
}
.fa-facebook-square{
    color: #3b5998
}
.fa-twitter{
    color: #55acee
}
</style>