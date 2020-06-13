<template>
    <div id="Enter">
     
        <!--Start of the Parallax-->
        <div id="parallax">
              <div class="parallax-container">
                    <div class="parallax">
                        <img :src="Images.fullBanner" style="opacity:1;">
                    </div>
                </div>
                <div class="section">
                    <div class="row" id="section1">
                        <br>
                        <h5 class="white-text text-darken-3 lighten-3">
                            "If one thought created the universe, 
                            then who was the first to think?"
                        </h5>
                        <h5 class="header">- Justin Gladstone</h5>
                        <br>
                    </div>
                </div>
                <div class="section z-depth-5">
                    <div class="row" id="section2">
                        <!--This is the Header to this section-->
                        
                                <h3 class="white-text" id="header">Novels</h3>
                          
                        <!--Describe the first book-->
                            <div class="col s12 m4 l4">
                                <h3 class="white-text" id="bookTitle">TheOtherSide</h3>
                                <img :src="Images.bookI"  id="bookCover" v-on:click="bookIDesc=!bookIDesc">
                                <!--Transitions will appear below for the text on clear--->
                                <h6 class="white-text" v-if="bookIDesc">The Other Side is a mystery and fantasy novel 
                                    that delves into a parallel world that almost completely 
                                    reflects our own. If people reflect us, then what could we 
                                    say about our emotions? Is our sadness a result of their happiness? 
                                </h6>  <br>   
                                <div class="btn large black-text" style="background-color:coral;" v-if="bookIDesc">Start</div>             

                            </div>
                        <!--Describe each of the books in this area-->
                            <div class="col s12 m4 l4"><br><br><br><br><br><br><br><br><br>
                            <!--The text below needs to be animated in--->
                              <h3 class="white-text" id="header2">Choose your Journey</h3>
                            </div>
                        <!--Describe the second book-->
                            <div class="col s12 m4 l4">
                                <h3 class="white-text" id="bookTitle">TheOtherSide2</h3>
                              
                                 <img :src="Images.bookII" id="bookCover2" v-on:click="bookIIDesc=!bookIIDesc">
                                 <!--Transitions will appear below for the text--->
                                <h6 class="white-text" v-if="bookIIDesc">The Other Side is a mystery and fantasy novel 
                                    that delves into a parallel world that almost completely 
                                    reflects our own. If people reflect us, then what could we 
                                    say about our emotions? Is our sadness a result of their happiness? 
                                </h6> <br>
                                <div class="btn large blue black-text" v-if="bookIIDesc">Start</div>
                            </div>
                        <!---This is the start of the background to add life--->
                                <div class="background">
                                
                                    <!--Section for loaders to add some movement and life to the background-->
                                            <div class="progress" style="background-color:#1B1A1B;">
                                                <div class="indeterminate" style="background-color:#4B1411;"></div>
                                            </div>
                                </div>
                    </div>
                </div>
                <!--This is the start of the next section-->
                            <div class="section">
                                <div class="row" id="section3">
                                    <br>
                                    <h5 class="white-text text-darken-3 lighten-3">
                                        "If one thought created the universe, 
                                        then who was the first to think?"
                                    </h5>
                                    <h5 class="header">- Justin Gladstone</h5>
                                    <br>
                                </div>
                            </div>

                            <div class="parallax-container">
                                <div class="parallax">
                                    <img src="images/parallax2.jpg">
                                </div>
                            </div>
        </div>
        <!--End of the Parallax--->

        <!--This is the brown row that appears behind section 1-->
            <div class="backRow"> 
                <p>.</p>
            </div>


        <!--Background quotes to the page that are fixed-->
        <div class="backQuotes">
            <div class="row">
                <div class="col s12 m12 l12"><h3 class="blue-grey-text"><i>Even with this sad life, I still had a reason to run</i></h3></div>
                <div class="col s12 m12 l12"><h3 class="blue-grey-text"><i>I cried because i was scared, Even I experianced all those things.</i></h3></div>
                <div class="col s12 m12 l12"><h3 class="blue-grey-text"><i>But... will you understand?</i></h3></div>
                <div class="col s12 m12 l12"><h3 class="blue-grey-text"><i> - Haru</i></h3></div>
                
            </div>
        </div>


    </div>
</template>

<style scoped>
#Enter{
    padding-top:10%;
}

/*Area for parallax to start*/
#parallax{
    position: absolute;
    width: 100%;
    top:10%;
}

/*Change background for Section1*/
#section1{
    background-image: linear-gradient(to right,#4B1411,black);
    position: absolute;
    width: 100%;
    top:42.5%;
    z-index: 1;
}

/*Section Second*/
#section2{ /*Position of the second section*/
    position:absolute;
    top:56%;
    width: 100%;
    z-index: 1;
}

/*This is the header for Section 1*/
#header{
    font-family:'Times New Roman', Times, serif;
    font-size: 375%;
}

/*This is the header for Section 2*/
#header2{
    /*font-family:Cambria, Cochin, Georgia, Times, 'Times New Roman', serif*/
    font-family: cursive; 
}

/*Edit the book title*/
#bookTitle{
    font-family:Cambria, Cochin, Georgia, Times, 'Times New Roman', serif
}

/*Edit style for the book cover on the left*/
#bookCover{
    width: 60%;
}
#bookCover:hover{
    cursor: pointer;
    width:65%;
    border: solid coral 2px;
}

/*Styling for the second book on the right*/
#bookCover2{
    width: 55%;
}
#bookCover2:hover{
    cursor: pointer;
    width:60%;
    border: solid rgb(80, 150, 255) 2px;
}

/*CSS for editing the third section*/
#section3{
    background-image: linear-gradient(to right,#4B1411,black);
    position: absolute;
    width: 100%;
    top:125%;
}

/*This handles the background*/
.background{
    position: absolute;
    width:100%;
    top:85%;
    z-index: -1;
}

/*Back row*/
.backRow{ /*This is the brown background row that appears behind the books*/
    background-color:#100807;
    padding-top:10%;
    padding-bottom:5%;
    position: absolute;
    width: 100%;
    top:123%;
    z-index: -1;
}

/*Background quotes*/
.backQuotes{
    position:fixed;
    top:35%;
    width:100%;
    z-index: -2;
    opacity: 0.06;
    font-family: cursive;
    color:#0C0E13;
    
}
</style>


<script>
export default {
    data(){
        return{
            Images:{
                banner: require("/Users/atakoramuriel/Desktop/tosh/Img/GrandBanner.jpg"), //Main banner edited
                fullBanner: require("/Users/atakoramuriel/Desktop/tosh/Img/fullBanner.jpg"), //Display the complete banner for parallax

                //Area for the book Coveres
                bookI: require("/Users/atakoramuriel/Desktop/tosh/Img/BookCover.jpg"),
                bookII: require("/Users/atakoramuriel/Desktop/tosh/Img/BookII.jpg"),
            },

            //Display book Descriptions
            bookIDesc: false,
            bookIIDesc: false
        }
    },
    created(){
        this.parallax();
         
    },
    methods: {
        Parallax(){
            //This function is for loadig the parallax on load
            document.addEventListener('DOMContentLoaded', function() {
                var elems = document.querySelectorAll('.parallax');
                var instances = M.Parallax.init(elems, options);
            });

              $(document).ready(function(){
                    $('.parallax').parallax();
                });
        }
    }
}
</script>
