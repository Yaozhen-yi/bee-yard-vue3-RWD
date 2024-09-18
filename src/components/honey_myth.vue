<script setup>
</script>

<template>
 <div class="section">
            <h3>蜂蜜迷思</h3>
        <div class="row">
            <div class="col-sm-6">
                <h5 class="img-title">未結晶密</h5>
                <img src="../uploads/未結精蜜.jpg" class="img" alt="未結晶蜜">
                <div class="description">
                  <span class="title">​未結晶蜜:</span><br>
                    <span>
                    近年來假蜜造假的方式越來越多元，也越來越逼真。其實可以利用<span style="color: red;">透光檢查以及加水搖晃</span>來分辨買的是真蜜還是假蜜。<span style="color: red; font-weight: 700;">天然蜂蜜</span>因為含有花粉，透光下會看起來<span style="color: red;">有點混濁</span>，而多數<span style="color: red; font-weight: 700">人工糖漿製成</span>的蜂蜜沒有花粉，看起來會<span style="color: red;">透明清澈</span>。蜂蜜含有澱粉酶及其他蛋白質，加水<span style="color: red;">用力搖晃</span>會產生<span style="color: red;">細緻且持續很久的泡沫</span>，而以高果糖糖漿及香料等調製而成的假蜜，加水搖晃後<span style="color: red;">泡沫會很快消失</span>。
                    </span>
                </div>
            </div>
            <div class="col-sm-6">
                <h5 class="img-title">結晶蜜</h5>
                <img src="../uploads/結晶蜜.jpg" class="img" alt="結晶蜜">
                
                <div class="description">
                  <span class="title">​結晶蜜:</span><br>
                    <span>
                    <span style="color: red;">假蜜不等於結晶蜜。</span><br>
                    ​蜂蜜中的葡萄糖和果糖等單醣總含量約占60％至70％，其中<span style="color: red;">果糖比例較高</span>的蜂蜜如龍眼蜜，<span style="color: red;">不容易結晶</span>，而<span style="color: red;">葡萄糖比例較高</span>的荔枝蜜、柳橙蜜等，<span style="color: red;">在水分含量低、氣溫低於攝氏13度</span>時，<span style="color: red;">葡萄糖則容易形成晶體，產生結晶現象</span>。反觀<span style="color: red; font-weight: 700;">合成蜜</span>，因為大多是<span style="color: red;">由糖漿製成</span>，因此<span style="color: red;">不容易結晶</span>。所以，<span style="color: red;">會結晶的蜂蜜才是「真」蜂蜜。</span>
                    </span>
                </div>
            </div>
        </div>
    </div>
</template>

<style>

.section h3{
    font-size: 20px;
    text-align: center;
}
.section .row{
    width: 100%;
    background-color: #f8f8f8;
    margin-left: 1%;
}
.section .row .img-title{
    font-size: 25px;
    text-align: center;
    margin: 10px;
    font-weight: 700;
}
.section .img{
    width: 100%;
}
.section .row .description{
    border: 5px solid #4645452b;
    margin: 10px 15px;
}
.section .row .description .title{
    font-weight: 700;
}
.section .row .description span{
    font-size: 25px;
    margin-left: 10px;
}


@media (min-width: 768px) {
    
.section h3{
    font-size: 30px;
    text-align: center;
}
  .section .tltle{
    font-size: 35px;
    margin-left: 37%;
}
}

</style>
