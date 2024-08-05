<script setup>
</script>

<template>
        <nav class="navbar fixed-top navbar-expand-lg bg-body-tertiary">
            <div class="container-fluid">
                <router-link to="/" class="navbar-brand">
                    <img src="../assets/吳家養蜂場.png" alt="Logo" width="50" height="44" class="d-inline-block ">
                    <span class="title">吳家養蜂場</span>
          </router-link>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
        <div class="collapse navbar-collapse" id="navbarTogglerDemo02">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item">
                <router-link to="/" class="nav-link active">首頁</router-link>
            </li>
            <li class="nav-item">
                <router-link to="/about" class="nav-link active">關於我們</router-link>
            </li>
            <li class="nav-item">
                <router-link to="/honey_myth" class="nav-link active">蜂蜜迷思</router-link>
            </li>
            <li class="nav-item">
                <router-link to="/product" class="nav-link active">產品介紹</router-link>
            </li>
          </ul>
        </div>
      </div>
    </nav>

  
</template>

<style>
.container-fluid {
    margin: 2rem;
    font-size: 2rem;
    text-align: center;
}
.navbar-brand{
    align-items: center;
    margin: 0 10%;
}
.navbar-brand img{
    margin: 0 5%;
}
.title{
    font-size: 2rem;
}
.nav-item{
    font-size: 2.5rem;
}
@media screen and (min-width: 768px) {
    .navbar-brand{
    align-items: center;
    margin: 0 25%;
    width: 100px;
}
.navbar-brand img{
    width: 100px;
    height: 88px;
    margin: 0 10%;
}
.title{
    font-size: 3rem;
}
.nav-item{
    font-size: 3.5rem;
}
}

@media screen and (min-width: 1024px) {
    .navbar-brand{
        margin-left:35px;
        text-align: center;
        height: 64px;
}

.title{
    font-size: 2rem;
}
.navbar-nav{
    width: 100%;
    margin: 2% 25%;
}
.nav-item{
        margin: 0 2%;
        font-size: 30px;
    }
}

@media screen and (min-width: 1280px) {
    .navbar-brand{
        margin-left:50px;
        text-align: center;
        height: 64px;
}
.title{
    font-size: 3rem;
}
.navbar-nav{
    width: 100%;
    margin: 2% 25%;
}
.nav-item{
        margin: 0 2%;
        font-size: 2.5rem;
    }
}

</style>
