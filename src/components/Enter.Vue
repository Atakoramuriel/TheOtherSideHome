<template>
    <div id="Enter">
     
        <!--Start of the Parallax-->
        <div id="parallax">
              <div class="parallax-container">
                    <div class="parallax">
                        <img :src="Images.fullBanner" style="opacity:1;">
                    </div>
                </div>

                <!--Room for some wording over the Parallax top image-->
                    


                <div class="section">
                    <div class="row" id="section1">
                        <br>
                        <h5 class="white-text text-darken-3 lighten-3 nova" id="testFont">
                          <i>  "If one thought created the universe, <br>
                            then who was the first to think?"</i>
                        </h5>
                        <h4 class="header white-text" id="testFont">- ? ? ? ? -</h4>
                        <br>
                    </div>
                </div>
                <div class="section z-depth-5">
                    <div class="row" id="section2">
                        <!--This is the Header to this section-->
                            
                        <br>
                        <!--Area for Mobile display only-->
                                <h4 class="white-text hide-on-med-and-up"><i>Select Your Story</i></h4>
                                 <h3 class="white-text" id="header2">Choose your Journey</h3>
                          
                        <!--Describe the first book-->
                            <div class="col s12 m4 l4">
                                <h3 class="white-text" id="bookTitle">The Other Side</h3>
                                <img :src="Images.bookI"  id="bookCover" v-on:click="bookIDesc=!bookIDesc">
                                <!--Transitions will appear below for the text on clear--->
                                <h5 class="white-text" id="testFont" v-if="bookIDesc">The Other Side is a mystery and fantasy novel 
                                    that delves into a parallel world that almost completely 
                                    reflects our own. If people reflect us, then what could we 
                                    say about our emotions? Is our sadness a result of their happiness? 
                                </h5>  <br>   
                                <div class="btn large black-text" style="background-color:coral;" v-if="bookIDesc"><a class="black-text" href="https://www.amazon.com/dp/1717773842?utm_medium=&utm_source=&utm_campaign=%e2%98%be+the+other+side+%e2%98%bd+%5b22+ratings%5d">Buy</a></div>             

                            </div>
                        <!--Describe each of the books in this area-->
                            <div class="col s12 m4 l4 " v-if="bookIDesc">
                                                  <h4 class="white-text" id="bookTitle">The Other Side <br> Limited Edition</h4>
                            <!--The text below needs to be animated in--->
                                    <img :src="Images.bookISpecial"  id="bookCoverLimited" v-on:click="bookIDesc=!bookIDesc">
                                <!--Transitions will appear below for the text on clear--->
                                <h5 class="white-text" id="testFont" v-if="bookIDesc">Get the Limited edition to the story
                                </h5>  <br>   
                                <div class="btn large black-text" style="background-color:white;" v-if="bookIDesc"><a class="black-text" href="https://www.amazon.com/dp/1717795617?utm_medium=&utm_source=&utm_campaign=☾+the+other+side%3a+limited+edition+☽++[9+ratings">Buy</a></div>  
                             
                            </div>

                        <!---Hide this column at the start-->
                        <div class="col s12 m4 l4 hide-on-small-only" v-if="!bookIDesc">

                        </div>
                        <!---End of the hidden colmunn-->


                        <!--Describe the second book-->
                            <div class="col s12 m4 l4">
                                <h3 class="white-text" id="bookTitle">The Other Side II</h3>
                              
                                 <img :src="Images.bookII" id="bookCover2" v-on:click="bookIIDesc=!bookIIDesc">
                                 <!--Transitions will appear below for the text--->
                                <h5 class="white-text" id="testFont" v-if="bookIIDesc">The Other side II <br> ( now in development )
                                </h5> <br>
                                <div class="btn large blue black-text" v-if="bookIIDesc"><a href="https://theothersidebooks718.wixsite.com/theotherside/whats-next" class="black-text">Buy</a></div>
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

                <!--Give some spacing Geez-->
                <div class="row">
                    <div id="space">
                        <h5>)_)</h5>
                    </div>
                </div>
                <!--End of the spacing-->

                <!--This is the start of the next section-->
                            <div class="section hide-on-small-only">
                                <div class="row" id="section3">
                                    <h6 class="white-text">Additional Links</h6><br>
                                    <div class="col s12 m4 l4"><a href="https://www.facebook.com/TheOtherSideSeries/"><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAaVBMVEU6VZ////81Up0yT5xgc61+jbsvTZyXo8hFXaOirM0nSJmlrs7O1OUkRpkfQ5c1UZ1oerKHlcDp6/M9WKHHzeHV2ulxgravt9Td4Ozl6PGDkb7ByN5YbatQZ6j29/q3v9h2hrhMY6aQnMSsAnKHAAAC70lEQVR4nO3caXLiMBRFYdoihhhsQ5jDlPT+F9mdqv7bRrYQ7z7XOQug9BUWHiQzmRARERERERERERERERERqVe0IZQPCtaDHFwo62Yz/VrP3jtbrH0Sy7rYH46/YtpV1oPtX6jCbBel+2npThjq/Taa51AYmrdTH583YdHsP/r5nAnLTa/j05+w+ezv8yRsq/MQoB9hmPeegb6E5eU2DOhFWK4G+rwIw3CgD2G4Dge6ELaboXPQi7CJu4nwK6zvKUAHwvCVBHQgrFMmoQdh4jGqL2wviUB5YRP/uMKnsJ2mAtWF9XLkwjblcs2FsDqMXZh6LpQXhn06UFtYpZ7t5YX1wEczboTF/AlAaWFYP0OovPZU9pmGt9194W79sIq/Jt2uqqrytwbcxJ4NT9e6tR7soEIk8N749E2K7zjgubEe6dAi75yOboGxwrnTQ/RvRZTwIHy6e1SccF5Yj3N4UcJjbT3MhKKEh9J6mAlFCZWvyR4WJXxDqBxChPohRKgfQoT6IUSoH0KE+iFEqB9ChPqNQ1h0vKJcxWwt/aofvelsDFzNOlpECO9dH/DT+8ZUWMYgErNdfXuB8Ga7RPwCofHy2wuE59EfpQvbH9MXCNejF65st2q8QPhtu5Mhv/BmfE2TX/hhvGMqv3BpvBslv/BuvGUqv3A2+nloff+YX3gx3rmYX2j9CCC78Ga9NzO78GS9dTG7cDv679B8c2Z24e/R/9LsRy+8Wm/kzy60nobZhdb3TvmF9u8e5hYaP0p8gfB99PPQ/l2F3MKp+StDuYXWvuxC60eJ+YXm907ZhQJ/NlA+4d9ZOrrbH6WTzbyjmL+D/Oz6BNsl/H8V/y9E7TYpOz7BGveoceyn6QohQv0QItQPIUL9ECLUDyFC/RAi1A8hQv0QItQPIUL9ECLUDyFC/RAi1A8hQv0QItQPIUL9ECLUDyFC/RAi1A8hQv0QItQPIUL9ECLUDyFC/RAi1A8hQv0QItQPIUL9ECLs0R8aFUYEFLSeAgAAAABJRU5ErkJggg==" width="20%;"></a> <h5 class="blue-text">Facebook</h5></div>
                                    <div class="col s12 m4 l4"><a href="https://www.patreon.com/TheOtherSideBooks"><img src="https://profilmmakerapps.com/images/patreon.jpg" width="20%;"></a> <br> <h5 class="orange-text">Patreon</h5></div>
                                    <div class="col s12 m4 l4"><a href="https://www.instagram.com/theothersidebooks/"><img src="https://www.parkviewbaptist.com/wp-content/uploads/2019/09/Instagram-Icon.png" width="20%;"></a><h5 class="purple-text">Instagram</h5></div>
                                    <h5>___</h5>
                                    <h5 class="white-text" >&copy The Other Side 2020 </h5>
                                </div>
        
                               <br>
                            </div>

                            <div class="parallax-container">
                                <div class="parallax">
                                    <img src="images/parallax2.jpg">
                                </div>
                            </div>

                            
        </div>
        <!--End of the Parallax--->   

        <!--This is the brown row that appears behind section 1-->
            <div class="backRow hide-on-small-only"> 
                <p style="color:#161312;">.</p>
            </div>


        <!--Background quotes to the page that are fixed-->
        <div class="backQuotes">
            <div class="row">
                <div class="col s12 m12 l12"><h3 class="blue-grey-text"><i>When do you think a story deserves an expansion?</i></h3></div>
                <div class="col s12 m12 l12"><h3 class="blue-grey-text"><i>When should a series meet its end?</i></h3></div>
                <div class="col s12 m12 l12"><h3 class="blue-grey-text"><i>There's alway more to be done.</i></h3></div>
                <div class="col s12 m12 l12"><h3 class="blue-grey-text">- Justin Jay / \ Nitsuj Yaj -</h3></div>
                
            </div>
        </div>


    </div>
</template>

<style scoped>
@import url(//db.onlinewebfonts.com/c/e3062d8da98d4c90af3ad8613ca226e7?family=Copperplate+Gothic+Bold);
@import url(//db.onlinewebfonts.com/c/e3062d8da98d4c90af3ad8613ca226e7?family=Copperplate+Gothic+Bold);

.nova{
    font-size: 300%;
}

#testFont{
   font-family: "Fantasy", Copperplate Gothic Bold

}

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
    top:36%;
    z-index: 1;
}

/*Section Second*/
#section2{ /*Position of the second section*/
    position:absolute;
    top:60%;
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
   font-family: cursive;
   
}

/*For spacing at the bottom of the book row*/
#space{
    padding-bottom:15%;
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

/*Edit style for the Limited Edition book cover on the left*/
#bookCoverLimited{
    width: 60%;
}
#bookCoverLimited:hover{
    cursor: pointer;
    width:65%;
    border: solid white 2px;
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
    top:130%;
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
    opacity: 0.75;
    padding-top:10%;
    padding-bottom:5%;
    position: absolute;
    width: 100%;
    top:130%;
    z-index: -1;
}

/*Background quotes*/
.backQuotes{
    position:fixed;
    top:35%;
    width:100%;
    z-index: -2;
    opacity: 0.3;
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
                bookISpecial: require("/Users/atakoramuriel/Desktop/tosh/Img/The_Other_Side_White_Book_Cover_300_DPI_copy.jpg"),
                bookII: require("/Users/atakoramuriel/Desktop/tosh/Img/BookII.jpg"),
            },

            //Display book Descriptions
            bookIDesc: false,
            bookIIDesc: false,
            
        }
    },
    created(){
     
         
    },
    beforeUpdate(){
       
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
