<script setup>
import { ref, onMounted } from 'vue';

const formData = ref({
    weight1: '',
    taste1: '',
    quantity1: '',
    result1: '',
    taste2: '',
    quantity2: '',
    result2: '',
    taste3: '',
    quantity3: '',
    result3: '',
    taste4: '',
    quantity4: '',
    result4: '',
    taste5: '',
    quantity5: '',
    result5: '',
    taste6: '',
    quantity6: '',
    result6: '',
    taste7: '',
    quantity7: '',
    result7: '',
    taste8: '',
    quantity8: '',
    result8: '',
    quantity9: '',
    result9: '',
    quantity10: '',
    result10: '',
    taste11: '',
    quantity11: '',
    result11: '',
    taste12: '',
    quantity12: '',
    result12: '',
    quantity13: '',
    result13: '',
    total: ''
});

const peopleData = ref({
    name:'',
    phone: '',
    address: '',
    emailField: '',
})
// 從 sessionStorage 中獲取數據
onMounted(() => {
  // 訂購人資料
  const storedPeopleData = sessionStorage.getItem('peopleData');
  if (storedPeopleData) {
    peopleData.value = JSON.parse(storedPeopleData);
  }

  // 訂購商品資料
  const storedData = sessionStorage.getItem('formData');
  if (storedData) {
    formData.value = JSON.parse(storedData);
  }
});
// 檢查值是否不為空
const isVisible = (value) => value !== '' && value !== null && value !== undefined;

function submitOrder() {
    const submitButton = document.querySelector('.btn');
    submitButton.textContent = "送出成功";

    submitButton.disabled = true;
    alert("送出完成!")
}
</script>


<template>
    <div>
        <div class="people">
        <h2>訂購人資訊</h2>
            <p id="information1">姓名: <span>{{ peopleData.name }}</span></p>
            <p id="information2">電話: <span>{{ peopleData.phone }}</span></p>
            <p id="information3">地址: <span>{{ peopleData.address }}</span></p>
            <p id="information4">E-mail: <span>{{ peopleData.emailField }}</span></p>
        </div>
        <div class="product">
            <h2>訂購商品</h2>
            <div class="pure_honey" v-show="isVisible(formData.weight1) && isVisible(formData.taste1) && isVisible(formData.quantity1) && isVisible(formData.result1)">
                <p class="title">3、5斤裝純蜜</p>
                <div class="material">
                    <img src="../uploads/3、5kg.jpg" class="img" alt="3、5公斤裝純蜜系列">
                <p v-show="isVisible(formData.weight1)">重量：<span>{{ formData.weight1 }}</span></p>
                <p v-show="isVisible(formData.taste1)">口味：<span>{{ formData.taste1 }}</span></p>
                <p v-show="isVisible(formData.quantity1)">數量：<span>{{ formData.quantity1 }}</span></p>
                <p v-show="isVisible(formData.result1)">金額：<span>{{ formData.result1 }}</span></p>
                </div>
            </div>
            <div class="narrow-mouth" v-show="isVisible(formData.taste2) && isVisible(formData.quantity2) && isVisible(formData.result2)">
                <p class="title">窄口瓶装纯蜜系列</p>
                <div class="material">
                    <img src="../uploads/3、5kg.jpg" class="img" alt="窄口瓶装纯蜜系列">
                <p v-show="isVisible(formData.taste2)">口味：<span>{{ formData.taste2 }}</span></p>
                <p v-show="isVisible(formData.quantity2)">數量：<span>{{ formData.quantity2 }}</span></p>
                <p v-show="isVisible(formData.result2)">金額：<span>{{ formData.result2 }}</span></p>
                </div>
            </div>
            <div class="suger" v-show="isVisible(formData.taste3) && isVisible(formData.quantity3) && isVisible(formData.result3)">
                <p class="title">果糖瓶裝純蜜系列</p>
                <div class="material">
                    <img src="../uploads/suger.jpg" class="img" alt="果糖瓶裝純蜜系列">
                <p v-show="isVisible(formData.taste3)">口味：<span>{{ formData.taste3 }}</span></p>
                <p v-show="isVisible(formData.quantity3)">數量：<span>{{ formData.quantity3 }}</span></p>
                <p v-show="isVisible(formData.result3)">金額：<span>{{ formData.result3 }}</span></p>
                </div>
            </div>
            <div class="portable" v-show="isVisible(formData.taste4) && isVisible(formData.quantity4) && isVisible(formData.result4)">
                <p class="title">隨身瓶裝純蜜系列</p>
                <div class="material">
                    <img src="../uploads/portable.jpg" class="img" alt="隨身瓶裝純蜜系列">
                <p v-show="isVisible(formData.taste4)">口味：<span>{{ formData.taste4 }}</span></p>
                <p v-show="isVisible(formData.quantity4)">數量：<span>{{ formData.quantity4 }}</span></p>
                <p v-show="isVisible(formData.result4)">金額：<span>{{ formData.result4 }}</span></p>
                </div>
            </div>
            <div class="gift_wide_mouth" v-show="isVisible(formData.taste5) && isVisible(formData.quantity5) && isVisible(formData.result5)">
                <p class="title">蜂蜜禮盒(寬口瓶)</p>
                <div class="material">
                    <img src="../uploads/gift_wide_mouth.jpg" class="img" alt="蜂蜜禮盒(寬口瓶)">
                <p v-show="isVisible(formData.taste5)">口味：<span>{{ formData.taste5 }}</span></p>
                <p v-show="isVisible(formData.quantity5)">數量：<span>{{ formData.quantity5 }}</span></p>
                <p v-show="isVisible(formData.result5)">金額：<span>{{ formData.result5 }}</span></p>
                </div>
            </div>
            <div class="gift_Narrow_mouth" v-show="isVisible(formData.taste6) && isVisible(formData.quantity6) && isVisible(formData.result6)">
                <p class="title">蜂蜜禮盒(窄口瓶)</p>
                <div class="material">
                    <img src="../uploads/gift_Narrow_mouth.jpg" class="img" alt="蜂蜜禮盒(窄口瓶)">
                <p v-show="isVisible(formData.taste6)">口味：<span>{{ formData.taste6 }}</span></p>
                <p v-show="isVisible(formData.quantity6)">數量：<span>{{ formData.quantity6 }}</span></p>
                <p v-show="isVisible(formData.result6)">金額：<span>{{ formData.result6 }}</span></p>
                </div>
            </div>
            <div class="lip_balm" v-show="isVisible(formData.taste8) && isVisible(formData.quantity8) && isVisible(formData.result8)">
                <p class="title">護唇膏</p>
                <div class="material">
                    <img src="../uploads/lip_balm.jpg" class="img" alt="護唇膏">
                <p v-show="isVisible(formData.taste7)">口味：<span>{{ formData.taste7 }}</span></p>
                <p v-show="isVisible(formData.quantity7)">數量：<span>{{ formData.quantity7}}</span></p>
                <p v-show="isVisible(formData.result7)">金額：<span>{{ formData.result7 }}</span></p>
                </div>
            </div>
            <div class="Honey_loquat" v-show="isVisible(formData.taste8) && isVisible(formData.quantity8) && isVisible(formData.result8)">
                <p class="title">蜂蜜枇杷喉糖</p>
                <div class="material">
                    <img src="../uploads/Honey_loquat.jpg" class="img" alt="蜂蜜枇杷喉糖">
                <p v-show="isVisible(formData.taste8)">口味：<span>{{ formData.taste8 }}</span></p>
                <p v-show="isVisible(formData.quantity8)">數量：<span>{{ formData.quantity8}}</span></p>
                <p v-show="isVisible(formData.result8)">金額：<span>{{ formData.result8 }}</span></p>
                </div>
            </div>
            <div class="Fruit_enzyme" v-show="isVisible(formData.quantity9) && isVisible(formData.result9)">
                <p class="title">蜂蜜水果酵素</p>
                <div class="material">
                    <img src="../uploads/Fruit_enzyme.jpg" class="img" alt="蜂蜜水果酵素">
                <p v-show="isVisible(formData.quantity9)">數量：<span>{{ formData.quantity9}}</span></p>
                <p v-show="isVisible(formData.result9)">金額：<span>{{ formData.result9 }}</span></p>
                </div>
            </div>
            <div class="honey_vinegar" v-show="isVisible(formData.quantity10) && isVisible(formData.result10)">
                <p class="title">蜂蜜醋</p>
                <div class="material">
                    <img src="../uploads/honey_vinegar.jpg" class="img" alt="蜂蜜醋">
                <p v-show="isVisible(formData.quantity10)">數量：<span>{{ formData.quantity10}}</span></p>
                <p v-show="isVisible(formData.result10)">金額：<span>{{ formData.result10 }}</span></p>
                </div>
            </div>
            <div class="pollen_grains" v-show="isVisible(formData.taste11) && isVisible(formData.quantity11) && isVisible(formData.result11)">
                <p class="title">罐裝花粉粒</p>
                <div class="material">
                    <img src="../uploads/pollen_grains.jpg" class="img" alt="罐裝花粉粒">
                <p v-show="isVisible(formData.taste11)">口味：<span>{{ formData.taste11 }}</span></p>
                <p v-show="isVisible(formData.quantity11)">數量：<span>{{ formData.quantity11}}</span></p>
                <p v-show="isVisible(formData.result11)">金額：<span>{{ formData.result11 }}</span></p>
                </div>
            </div>
            <div class="Queen_Bee_Capsule" v-show="isVisible(formData.taste12) && isVisible(formData.quantity12) && isVisible(formData.result12)">
                <p class="title">蜂王乳/膠囊</p>
                <div class="material">
                    <img src="../uploads/Queen_Bee_Capsule.jpg" class="img" alt="蜂王乳/膠囊">
                <p v-show="isVisible(formData.taste12)">口味：<span>{{ formData.taste12 }}</span></p>
                <p v-show="isVisible(formData.quantity12)">數量：<span>{{ formData.quantity12}}</span></p>
                <p v-show="isVisible(formData.result12)">金額：<span>{{ formData.result12 }}</span></p>
                </div>
            </div>
            <div class="Propolis" v-show="isVisible(formData.quantity13) && isVisible(formData.result13)">
                <p class="title">蜂膠</p>
                <div class="material">
                    <img src="../uploads/Propolis.jpg" class="img" alt="蜂膠">
                <p v-show="isVisible(formData.quantity13)">數量：<span>{{ formData.quantity13}}</span></p>
                <p v-show="isVisible(formData.result13)">金額：<span>{{ formData.result13 }}</span></p>
                </div>
            </div>
        </div>

        <div class="total">
            <p v-show="isVisible(formData.total)">商品總金額: <span>{{ formData.total }}</span></p>
        </div>
        <button type="button" class="btn" onclick="submitOrder()">確認送出</button>
    </div>
  </template>

<style>
div{
    margin: auto;
}
/*訂購人資訊 */
.people{
    width: 100%;
}
.people h2{
    font-size: 3rem;
    font-weight: 700;
    text-align: center;
}
.people p{
    font-size: 1.5rem;
    margin-left: 2rem;
    font-weight: 700;
}
.people span{
    color: #EF5350;
    font-size: 2rem;
}
/*訂購商品資訊 */
.product h2{
    text-align: center;
    font-size: 3rem;
    font-weight: 700;
}
/*純蜜 */
.product .title{
    font-size: 2rem;
    margin-left: 2rem;
}
.product div{
    border-bottom: 1px solid black;
    margin: 1rem 0;
}
.material{
    text-align:left
}
.material .img{
    width: 100%;
}
.material p{
    font-size: 1.5rem;
    margin-left: 2rem;
    font-weight: 700;
}
.material span{
    color: #EF5350;
    font-size: 2rem;
    margin-left: 2rem;
    font-weight: 700;
}
/*總金額 */
.total{
    font-size: 3rem;
    text-align: center;
    margin: 1%;
}
.total span{
    color: #EF5350;
    font-size: 3rem;
    margin-left: 2rem;
    font-weight: 700;
}

@media (min-width: 768px) {
    .people h2{
    font-size: 5rem;
}
.people p{
    font-size: 3rem;
}
.people span{
    color: #EF5350;
    font-size: 3.5rem;
    margin-left: 1rem;
}
/*訂購商品資訊 */
.product h2{
    font-size: 5rem;
}
.product .title{
    font-size: 3.5rem;
}
.material{
    text-align:left
}
.material .img{
    width: 100%;
}
.material p{
    font-size: 3rem;
}
.material span{
    font-size: 3rem;
}
/*總金額 */
.total p{
    margin-top: 2rem;
    font-size: 4rem;
}
.total span{
    font-size: 4.5rem;
}
}

@media (min-width: 1024px) {
/*訂購商品資訊 */
/*純蜜 */
.product .title{
    font-size: 3.5rem;
}
.material{
    text-align:left
}
.material .img{
    width: 100%;
}
.material p{
    font-size: 3rem;
}
.material span{
    font-size: 3rem;
}
/*總金額 */
.total p{
    margin-top: 2rem;
    font-size: 4rem;
}
.total span{
    font-size: 4.5rem;
}
}
</style>
