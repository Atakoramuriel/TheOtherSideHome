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
                                <img :src="Images.bookI"  id="bookCover">
                                <h6 class="white-text">The Other Side is a mystery and fantasy novel 
                                    that delves into a parallel world that almost completely 
                                    reflects our own. If people reflect us, then what could we 
                                    say about our emotions? Is our sadness a result of their happiness? 
                                </h6>                  

                            </div>
                        <!--Describe each of the books in this area-->
                            <div class="col s12 m4 l4"><br><br><br><br><br><br><br><br><br>
                              <h3 class="white-text" id="header2">Choose your Journey</h3>
                            </div>
                        <!--Describe the second book-->
                            <div class="col s12 m4 l4">
                                <h3 class="white-text" id="bookTitle">TheOtherSide2</h3>
                                 <img :src="Images.bookII" style="width:55%;" id="bookCover2">
                                <h6 class="white-text">The Other Side is a mystery and fantasy novel 
                                    that delves into a parallel world that almost completely 
                                    reflects our own. If people reflect us, then what could we 
                                    say about our emotions? Is our sadness a result of their happiness? 
                                </h6>
                            </div>
                    </div>
                </div>
                <div class="parallax-container">
                    <div class="parallax">
                        <img src="images/parallax2.jpg">
                    </div>
                </div>
        </div>
        <!--End of the Parallax--->

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
}

/*Section Second*/
#section2{ /*Position of the second section*/
    position:absolute;
    top:56%;
    width: 100%;
}

/*This is the header for Section 1*/
#header{
    font-family:'Times New Roman', Times, serif;
    font-size: 375%;
}

/*This is the header for Section 2*/
#header2{
    /*font-family:Cambria, Cochin, Georgia, Times, 'Times New Roman', serif*/
    font-family: cursive
    
}

/*Edit the book title*/
#bookTitle{
    font-family:Cambria, Cochin, Georgia, Times, 'Times New Roman', serif
}

/*Edit style for the book cover on the left*/
#bookCover{
    width: 60%;
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
            }
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
