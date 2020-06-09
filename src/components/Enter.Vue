<template>
    <div id="Enter">
     
        <!--Start of the Parallax-->

    <div class="parallax-container">
      <div class="parallax"><img src="images/parallax1.jpg"></div>
    </div>
    <div class="section white">
      <div class="row container">
        <h2 class="header">Parallax</h2>
        <p class="grey-text text-darken-3 lighten-3">Parallax is an effect where the background content or image in this case, is moved at a different speed than the foreground content while scrolling.</p>
      </div>
    </div>
    <div class="parallax-container">
      <div class="parallax"><img src="images/parallax2.jpg"></div>
    </div>
        <!--End of the Parallax--->

    </div>
</template>

<style scoped>
#Enter{
    padding-top:5%;
}
</style>


<script>
export default {
    data(){
        return{
            Images:{
                banner: require("/Users/atakoramuriel/Desktop/tosh/Img/GrandBanner.jpg"), //Main banner edited
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
