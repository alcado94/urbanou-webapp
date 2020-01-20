<template>
  <div>
    <div class="wrapper">
      <parallax
        class="section page-header header-filter"
        :style="headerStyle"
      ></parallax>
      <div class="main-section main-w">
        <div class="section">
          <div class="search-box">
            <div class="profile">
              <div class="name">
                <h3 class="title title-color">Encuentra tu ruta</h3>
              </div>
              <md-field class="search-box__size">
                <label>Busca tu autobus</label>
                <md-input class="search-w" v-model="search"></md-input>
              </md-field>
            </div>
          </div>
        </div>
        <listRoutes :searchRoute="search"> 
        </listRoutes>  
      </div>
    </div>
    
    
    <InfoPanel></InfoPanel>
  </div>
</template>

<script>
import listRoutes from '../components/ListRoutes';
import InfoPanel from '../layout/InfoPanel';

export default {
  components: {
    listRoutes,
    InfoPanel
  },
  bodyClass: "profile-page",
  data() {
    return {
      search: ''
    };
  },
  props: {
    header: {
      type: String,
      default: require("@/assets/img/main.jpg")
    }
  },
  computed: {
    headerStyle() {
      return {
        backgroundImage: `url(${this.header})`,
        height: `500px`
      };
    }
  }
};
</script>

<style lang="scss" scoped>
body {
    height: 100%;
}
.section {
  padding: 0;
}
.profile{
  width: 100%;
  box-sizing: border-box;
  padding: 5px 20px;

}
.search-box__size{
  width: 100%;
}


.search-box{
  background: #FFFFFF;
  border-radius: 6px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;
  min-height: 60px;
  margin: 0px;
  margin-top: -18vh;
  margin: auto;
}


.main-section{
    
    position: relative;
    z-index: 3;
    width: 30vw;
    min-width: 330px;
    margin: auto;
    margin-top: -25vh;
    
}

.title-color{
  color: white;
}

.search-w{
  max-width: 350px;
  width: 20%;
}
</style>
