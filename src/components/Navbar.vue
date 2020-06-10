<template>
    <div id="nav">
      <nav class="black" role="navigation">
              <div class="nav-wrapper">
                <a href="#" class="right brand-logo" style="padding-right:1%;">TheOtherSide</a>
                <!---This is the top section of the topNav---->
                <ul id="nav-mobile" class="left hide-on-med-and-down">
                    <li><h5 class="white-text">Home</h5></li>
                    <li><h5 class="white-text">Story</h5></li>
                    <li><h5 class="white-text">Social</h5></li>
                    <li><h5 class="white-text">Shop</h5></li>
                </ul>
                </div>

                <!---Bottom section of the Top Nav--->
                  <div class="row black">
                    <div class="nav-content hide-on-med-and-down">
                      <ul>
                        <li class="tab"><h5>Timeline</h5></li>
                        <li class="tab"><h5>Characters</h5></li>
                        <li class="tab"> <h5>Database</h5></li>
                        <li class="tab"><h5>Synopsis/Reviews</h5></li>
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
    }
</style>
