<template>
    <div class="section-info-pos">
        <div class="cd-section">
            <div id="cards" class="section section-gray pb-0">
                <div class="container">
                    <div class="wrapper">
                        <div id="cards">
                            <div class="title">
                                <h2>Últimas Noticias</h2>
                            </div>
                            <div class="md-layout">
                                <div class="md-layout-item md-large-size-33 md-small-size-100">
                                    <CardInfo 
                                        :title="'To Grow Your Business Start Focusing on Your Employees'" 
                                        :imageUrl="'https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1267&q=80'"
                                        :date="'12/02/2020'"
                                    ></CardInfo>
                                    <CardInfo 
                                        :title="'To Grow Your Business Start Focusing on Your Employees'" 
                                        :text="'Don\'t be scared of the truth because we need to restart the human foundation in truth And I love you like Kanye loves Kanye I love Rick Owens’ bed design but the back is... '"
                                        :date="'12/02/2020'"
                                    ></CardInfo>
                                </div>
                                <div class="md-layout-item md-large-size-33 md-medium-50 md-small-size-100">
                                    <CardInfo 
                                        :title="'To Grow Your Business Start Focusing on Your Employees'" 
                                        :text="'Don\'t be scared of the truth because we need to restart the human foundation in truth And I love you like Kanye loves Kanye I love Rick Owens’ bed design but the back is... '"
                                        :date="'12/02/2020'"
                                    ></CardInfo>
                                    <CardInfo 
                                        :title="'To Grow Your Business Start Focusing on Your Employees'" 
                                        :imageUrl="'https://images.unsplash.com/photo-1523240795612-9a054b0db644?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80'"
                                        :date="'12/02/2020'"
                                    ></CardInfo>
                                </div>
                                <div class="md-layout-item md-large-size-33 md-small-size-100">
                                    <CardInfo 
                                        :title="'To Grow Your Business Start Focusing on Your Employees'" 
                                        :imageUrl="'https://images.unsplash.com/photo-1523240795612-9a054b0db644?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80'" 
                                        :text="'Don\'t be scared of the truth because we need to restart the human foundation in truth And I love you like Kanye loves Kanye I love Rick Owens’ bed design but the back is... '"
                                        :date="'01/02/2020'"
                                    ></CardInfo>
                                    <CardInfo 
                                        :title="'To Grow Your Business Start Focusing on Your Employees'" 
                                        :date="'02/01/2020'"
                                    ></CardInfo>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import CardInfo from '../components/CardInfo';
export default {
    components: {
        CardInfo
    }
}
</script>

<style scoped>
.section-info-pos{
    margin-top: 11vh;
}

</style>