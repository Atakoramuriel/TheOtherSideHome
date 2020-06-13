<template>
    <div id="shop">
        <h3>Shop The Other Side</h3>

        <div class="row" id="section1">
            <div class="col s12 m6 l6"><br>
            <img :src="Images.bookI" id="bookCover">
            </div>
          
            <div class="col s12 m4 l4">
                <h3 class="white-text">Start the Story</h3>
                <h5 style="color:#F54038;"><i>"If people reflect us, then what could we say about our emotions? Is our sadness a result of their happiness?"</i></h5>
                <h5 class="white-text">Purchase the hard cover or digital copy of TheOtherSide or see what some of the 
                    other previous readers have to say about the story.
                </h5> <br>
                <button class="btn-large black-text" style="background-color:coral;">View</button>
            </div>

        <!--Test applying background Text for this row--->
        <h1 id="backText"><i>Begin your journey to The Other Side</i></h1>

        </div>
    </div>
</template>

<style scoped>
/*Bring the page down so it appears below header*/
    #shop{
        padding-top:10%;
    }

/*Start of Section 1*/
    #section1{
      
        padding-bottom:2%;
    }
/*Edit style for the book cover on the left*/
    #bookCover{
        width: 50%;
    }
/*BackText for Row 1*/
    #backText{
        position:absolute;
        width:100%;
        top:20%;
        font-size: 550%;
        z-index: -1;
        background-color:#100807;
        padding-top:15%;
        padding-bottom:17%;
        font-family: cursive;
    }

</style>

<script>
export default {
    data(){
        return{
            Images: {
                bookI: require("/Users/atakoramuriel/Desktop/tosh/Img/BookCover.jpg")
            }
        }
    },
    created(){

    },
    methods: {

    }
}
</script>
