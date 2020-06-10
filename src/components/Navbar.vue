<template>
    <div id="nav">
      <nav class="black" style="padding-bottom:12%;" role="navigation">
              <div class="nav-wrapper">
                <a href="#" class="right brand-logo" style="padding-right:1%;">TheOtherSide</a>
                <!---This is the top section of the topNav---->
                <ul id="nav-mobile" class="left hide-on-med-and-down">
                    <li><h5 class="white-text"><i class="material-icons">home</i><b>Home</b></h5></li>
                    <li><h5 class="white-text"><i class="material-icons">import_contacts</i><b>Story</b></h5></li>
                    <li><h5 class="white-text"><i class="material-icons">people_outline</i><b>Social</b></h5></li>
                    <li><h5 class="white-text"><i class="material-icons">redeem</i><b>Shop</b></h5></li>
                </ul>
                </div>
<br><br>
                <!---Bottom section of the Top Nav--->
                  <div class="row black">
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
    nav{
        position: fixed;
        top:0%;
        width: 100%;
        z-index: 5;
    }

    #nav-mobile{
        width: 75%;
    }
    li{
        padding-right:5%;
        padding-left:2%;
    }

    h5:hover{
        cursor: pointer;
        color: #EA8D55;
    }

    /*Handle hover over each Nav button*/

</style>
