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
    padding-top:5%;
}

/*Area for parallax to start*/
#parallax{
    position: absolute;
    width: 100%;
    top:0%;
}

/*Change background for Section1*/
#section1{
    background-image: linear-gradient(to right,#4B1411,black);
    position: absolute;
    width: 100%;
    top:48%;
}
</style>


<script>
export default {
    data(){
        return{
            Images:{
                banner: require("/Users/atakoramuriel/Desktop/tosh/Img/GrandBanner.jpg"), //Main banner edited
                fullBanner: require("/Users/atakoramuriel/Desktop/tosh/Img/fullBanner.jpg"), //Display the complete banner for parallax
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
