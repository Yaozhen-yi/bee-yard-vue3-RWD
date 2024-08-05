<script setup>

</script>

<template>
  <div class="banner">
        <div id="carouselExampleIndicators" class="carousel slide" data-bs-ride="carousel">
            <div class="carousel-indicators">
              <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
              <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
              <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
            </div>
            <div class="carousel-inner">
              <div class="carousel-item active">
                <img src="../uploads/banner1.jpg" class="d-block w-100" alt="輪播圖1">
              </div>
              <div class="carousel-item">
                <img src="../uploads/banner2.jpg" class="d-block w-100" alt="輪播圖1">
              </div>
              <div class="carousel-item">
                <img src="../uploads/banner3.jpg" class="d-block w-100" alt="輪播圖1">
              </div>
            </div>
            <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
              <span class="carousel-control-prev-icon" aria-hidden="true"></span>
              <span class="visually-hidden">Previous</span>
            </button>
            <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
              <span class="carousel-control-next-icon" aria-hidden="true"></span>
              <span class="visually-hidden">Next</span>
            </button>
          </div>
    </div>

    <!--商品-->
    <div class="section">
        <div class="product-introduce">
            產品介紹
            <span>PRODUCT</span>
             <router-link to="/product" class="a">查看全部</router-link>
        </div>
            <div class="row">
                <div class="col">
                    <img src="../uploads/product.jpg" class="card-img" alt="產品介紹圖">
                    <h5 class="title">商品圖</h5>
                    <router-link to="/product" class="btn btn-primary">更多</router-link>
                </div>
                <div class="col-sm-4">
                    <img src="../uploads//3、5kg.jpg" class="card-img" alt="3、5公斤裝純蜜系列">
                    <h5 class="title">3、5公斤裝純蜜系列</h5>
                    <router-link to="/product" class="btn btn-primary">更多</router-link>
                </div>
                <div class="col-sm-4">
                    <img src="../uploads/suger.jpg" class="card-img" alt="果糖瓶裝純蜜系列">
                    <h5 class="title">果糖瓶裝純蜜系列</h5>
                    <router-link to="/product" class="btn btn-primary">更多</router-link>
                </div> 
        </div>
    </div>
    <!--關於-->
    <div class="about">
        <div class="about-introduce">
            關於我們
            <span>ABOUT</span>
            <router-link to="/product" class="a">查看全部</router-link>
        </div>
        <div class="row">
            <div class="col-sm-4">
                <img src="../uploads/honey_know.jpg" class="card-img" alt="">
            </div>
            <div class="col-sm-4">
                <img src="../uploads/Commendation.jpg" class="card-img" alt="">
            </div>
            <div class="col-sm-4">
                <img src="../uploads/introduce.jpg" class="card-img" alt="">
            </div> 
        </div>
    </div>  
</template>
<style>

.section{
    max-width: 100%;
    margin: 2rem 1rem;
}
.section .product-introduce{
    width: 100%;
    font-size: 1.5rem;
    margin-bottom: 1rem;
    font-weight: 700;
}
.section .product-introduce span{
    margin-left: 2%;
    color: #dc3545;
}
.section .product-introduce .a{
    color: #dc3545;
    float: right;
}
.section .product-introduce a:hover{
    color: #e2727e;
}
.section .btn{
    width: 100%;
    margin-bottom: 1em;
    font-size: 2em;
    background-color: #d6d9dc;
    border-color:#d6d9dc ;
    color: #000;
    font-weight: 700;
}
.section .card-img{
    width: 100%;
    /* margin-bottom: 1rem; */
}
.section .row .title{
    margin: 1rem 0;
}

/*關於我們*/
.about{
    max-width: 100%;
    margin: 2rem 1rem;
}
.about .about-introduce{
    width: 100%;
    font-size: 1.5rem;
    margin-bottom: 2rem;
    font-weight: 700;
}
.about .about-introduce span{
    margin-left: 2rem;
    color: red;
}
.about .about-introduce a{
    color: red;
    float: right;
}
.about .about-introduce a:hover{
    color: #e2727e;
}
.about .card-img{
    width: 100%;
    margin-bottom: 1rem;
}

@media screen and (min-width: 1024px) {
  .banner{
  margin: 10px 0;
}
}
@media screen and (min-width: 1240px){
    .banner{
  margin: 20px 0;
}
.section{
    max-width: 100%;
    margin: 2rem 0;
}
.section .product-introduce{
    font-size: 2rem;
}


/*關於我們*/
.about{
    max-width: 100%;
    margin: 2rem 0;
}
.about .about-introduce{
    font-size: 2rem;
}
}

</style>
