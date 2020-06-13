<template>
    <div id="nav">
      <nav class="topNav" style="padding-bottom:12%;" role="navigation">
              <div class="nav-wrapper">
                <a href="#" class="right brand-logo hide-on-med-and-down"  style="padding-right:1%;"><img id="title" :src="Images.title"></a>
                 <a href="#" class="center brand-logo hide-on-large-only"  style=""><img id="titleMobile" :src="Images.title"></a>
                <!---This is the top section of the topNav---->
                <ul id="nav-mobile" class="left hide-on-med-and-down">
                    <li><h5><i class="material-icons">home</i><b><router-link to="/" style="font-size:95%;">Home</router-link></b></h5></li>
                    <li><h5><i class="material-icons">import_contacts</i><b><router-link to="/story" style="font-size:95%;">Story</router-link></b></h5></li>
                    <li><h5><i class="material-icons">people_outline</i><b><router-link to="/social" style="font-size:95%;">Social</router-link></b></h5></li>
                    <li><h5><i class="material-icons">redeem</i><b><router-link to="/shop" style="font-size:95%;">Shop</router-link></b></h5></li>
                </ul>
                </div>
<br><br>
                <!---Bottom section of the Top Nav--->
                  <div class="row topNav "  style="">
                    <div class="nav-content hide-on-med-and-down">
                      <ul>
                        <li class="tab"><h6>Timeline</h6></li>
                        <li class="tab"><h6>Characters</h6></li>
                        <li class="tab"> <h6>Database</h6></li>
                        <li class="tab"><h6>Synopsis/Reviews</h6></li>
                      </ul>
                    </div>
                 </div>
        </nav>
    </div>
</template>

<style scoped>
    /*Area for the top nav*/
    nav{
        position: fixed;
        top:0%;
        width: 100%;
        z-index: 5;
        
    }

    /*Change the background to the topNav*/
    .topNav{
        background-image: linear-gradient(to right,#4B1411,black);
    
    }
    /*Handle the area for the mobile Nav*/
    #nav-mobile{
        width: 75%;
    }

 
    /*Each of the list items in the nav bar*/
    li{
        padding-right:5%;
        padding-left:2%;
    }

    /*When user hovers over each of the H5 elements*/
    h5:hover{
        cursor: pointer;
        color:coral;
        
    }
    /*Change the font to the main menu items (Main ones)*/
    h5{
       color:white; 
       font-family:Cambria, Cochin, Georgia, Times, 'Times New Roman', serif
    }

    /*Change the font to the main menu items (Submenu)*/
    h6{
        font-family:Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
        font-size: 140%;
    }

    /*Add styling to the title of the page*/
    #title{ /*This handles the banner for the desktop*/
        width: 20%;
        position: fixed;
        right:2%;
        top: 2%;
    }

    /*Add hover CSS for each tab in the Submenu*/
    h6:hover{
        cursor: pointer;
        color: coral;
        font-size: 150%;
    }
  
    /*For the mobile banner, tablets and phones*/
    #titleMobile{
        width: 50%;
    }
   

</style>

<script>
export default {
    data(){
        return{
            Images:{
                title: require("/Users/atakoramuriel/Desktop/tosh/Img/Title.png"), //This is for the image of TheOtherSide
            }
        }
    }
}
</script>
