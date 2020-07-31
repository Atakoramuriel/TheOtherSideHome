<template>
    <div id="shop">
        <br><br><br><br><br>
        <div class="row" id="section1">
            <div class="col s12 m6 l6"><br>
            <img :src="Images.bookI" id="bookCover">
            </div>
          
            <div class="col s12 m4 l4">
                <h3 class="white-text">Start the Story</h3>
                <h6 style="color:#F54038;"><i>"If people reflect us, then what could we say about our emotions? Is our sadness a result of their happiness?"</i></h6>
                <h5 class="white-text">Purchase the hard cover or digital copy of TheOtherSide or see what some of the 
                    other previous readers have to say about the story.
                </h5> <br>
                <button class="btn-large black-text" style="background-color:coral;"><a href="https://www.amazon.com/gp/product/1717773842/ref=ox_sc_act_title_1?smid=A1Y53T3O3Q25L8&psc=1" class="black-text"><b>View</b></a></button>
            </div>

        <!--Test applying background Text for this row--->
        <h1 id="backText"><i>Begin your journey to The Other Side</i></h1>

        </div>


        <!--This is the transition before Section 2--->
            <div class="row">
                <div id="transition1">
                    <h3 class="blue-grey-text" id="fancyFont">Check out the Merchandise</h3>
                </div>
            </div>

    <br>
        <!--Start of the second Section-->
            <div class="row" id="section2">
                   <div class="center">
                        <div class="col s12 m4 l3">
                            <br><br><br>
                            <!--This is the Area for the imagery--->
                                  <img :src="Images.ShirtSample2" style="width:85%;">
                        </div>
                         <div class="col s12 m4 l6">
                            <!--This is the Area for the imagery--->
                                  <img :src="Images.ShirtModel" style="width:100%; position:relative; z-index:2;">
                        </div>
                         <div class="col s12 m4 l3">
                             <br><br><br>
                            <!--This is the Area for the imagery--->
                                  <img :src="Images.ShirtSample" style="width:85%;">
                        </div>
                   </div>

            </div>

        <!--Subsection to the imagery--->
            <div class="row">
                <div class="col s12 m12 l12">
                    <h2 class="white-text" id="newFont"> Browse TheOtherSide's Collection</h2>
                </div>

                <div class="col s12 m12 l12"> 
                   <a href="https://teespring.com/stores/merchfromtos?page=1">
                        <button class="btn-large blue">
                        <b>Shop</b>
                    </button>
                   </a>
                </div>
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

/*Transition from 1 to 2 */
    #transition1{
        background-image:linear-gradient(to right,#4B1411,black);
        padding:3%;
    }


/*Start of Section 2 (Merch)*/
    #section2{
        width:100%;
    }

/*Edit style for the book cover on the left*/
    #bookCover{
        width: 50%;
    }
/*For the fancy Font*/
    #fancyFont{
        font-family: 'Courier New', Courier, monospace
    }

    #newFont{
        font-family:Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
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
        color:rgba(0, 0, 0, 0.507)
    }

</style>

<script>
export default {
    data(){
        return{
            Images: {
                bookI: require("/Users/atakoramuriel/Desktop/tosh/Img/BookCover.jpg"),
                ShirtModel: require("/Users/atakoramuriel/Desktop/tosh/Img/Model.jpg"),
                ShirtSample: require("/Users/atakoramuriel/Desktop/tosh/Img/Shirt.jpg"),
                ShirtSample2: require("/Users/atakoramuriel/Desktop/tosh/Img/Shirt2.jpg")
            }
        }
    },
    created(){

    },
    methods: {

    }
}
</script>
