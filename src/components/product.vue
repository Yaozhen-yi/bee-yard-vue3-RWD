<script setup>
import {ref, computed} from "vue";
import { useRouter } from 'vue-router';

const weight1 = ref('');
const taste1 = ref('');
const quantity1 = ref(0);
const result1 = ref(0);
const description1 = ref('');

const taste2 = ref('');
const quantity2 =  ref(0);
const result2 =  ref(0);
const description2 = ref('');

const taste3 = ref('');
const quantity3 = ref('');
const result3 = ref('');
const description3 = ref('');

const taste4 = ref('');
const quantity4 = ref('');
const result4 = ref('');
const description4 = ref('');

const taste5 = ref('');
const quantity5 = ref('');
const result5 = ref('');
const description5 = ref('');

const taste6 = ref('');
const quantity6 = ref('');
const result6 = ref('');
const description6 = ref('');

const taste7 = ref('');
const quantity7 = ref('');
const result7 = ref('');

const taste8 = ref('');
const quantity8 = ref('');
const result8 = ref('');

const quantity9 = ref('');
const result9 = ref('');

const quantity10 = ref('');
const result10 = ref('');

const taste11 = ref('');
const quantity11 = ref('');
const result11 = ref('');

const taste12 = ref('');
const quantity12 = ref('');
const result12 = ref('');

const quantity13 = ref('');
const result13 = ref('');

const descriptions = {
  '百花蜜': '集結數百種花盛開時的花蜜，集百花之精華，口感多層次豐富，甜度偏清甜不膩口。',
  '咸豐草蜜': '咸豐草花蜜其實也是百花蜜的一種，只是以咸豐草為大宗，香氣稍有青草花香，口感較帶果酸。',
  '烏桕蜜': '烏桕為落葉大喬木。烏臼蜜為琥珀翠玉色，結晶顆粒細緻，氣味清香。',
  '荔枝蜜': '荔枝樹的花蜜，俗稱貴妃蜜、玉荷包蜜。帶有獨特荔枝淡雅香甜，微微果酸尾韻。',
  '龍眼蜜': '龍眼樹的花蜜，帶著深琥珀色的色澤、香氣濃郁撲鼻，甜度最佳，是台灣人最喜愛的蜂蜜。',
  '千層蜜': '白千層樹的花蜜。色澤較其他蜂蜜深沉，味道帶點醬油與蜜地瓜的味道，又俗稱台灣版麥蘆卡蜂蜜。',
  '紅柴蜜': '屏東紅柴（厚皮香）樹的花蜜，採集量少且珍貴，品嚐起來多一股木柴特殊的香氣。',
  '結晶蜜': '天然蜂蜜在低溫或長時間存放下會慢慢結晶，口感細緻如沙，甜度稍微降低。'
};
const priceList = {
  '3': {'百花蜜': 700, '咸豐草蜜': 700, '烏桕蜜': 700, '荔枝蜜': 800, '龍眼蜜': 900, '千層蜜': 900, '紅柴蜜': 900},
  '5': {'百花蜜': 1000, '咸豐草蜜': 1000, '烏桕蜜': 1100, '荔枝蜜': 1100, '龍眼蜜': 1300, '千層蜜': 1300, '紅柴蜜': 1300},
  '窄口瓶裝純蜜系列': {'百花蜜': 400, '咸豐草蜜': 400, '烏桕蜜': 400, '荔枝蜜': 450, '龍眼蜜': 450, '千層蜜': 450, '紅柴蜜': 450, '結晶蜜': 600},
  '果糖瓶裝純蜜系列': {'百花蜜': 250, '咸豐草蜜': 250, '烏桕蜜': 250, '荔枝蜜': 300, '龍眼蜜': 300, '千層蜜': 300, '紅柴蜜': 300},
  '隨身瓶裝純蜜系列': {'百花蜜': 120, '咸豐草蜜': 120, '烏桕蜜': 120, '荔枝蜜': 120, '龍眼蜜': 120, '白千層蜜': 120, '紅柴蜜': 120},
  '蜂蜜禮盒(寬口瓶)': {'百花蜜': 500, '咸豐草蜜': 500, '烏桕蜜': 500, '荔枝蜜': 500, '龍眼蜜': 500, '千層蜜': 500, '紅柴蜜': 500},
  '蜂蜜禮盒(窄口瓶)': {'百花蜜': 500, '咸豐草蜜': 500, '烏桕蜜': 500, '荔枝蜜': 500, '龍眼蜜': 500, '千層蜜': 500, '紅柴蜜': 500},
  '護唇膏': {'綠茶香': 80, '香橙香': 80, '桂花香': 80, '天然香': 80},
  '蜂蜜枇杷喉糖':{'小':150, '大':300},
  '蜂蜜水果酵素':450,
  '蜂蜜醋':400,
  '罐裝花粉粒':{'茶花':400, '咸豐草花':400, '油菜花':400, '小花蔓澤蘭花':400, '埔鹽花':500},
  '蜂王乳/膠囊':{'膠囊':1500, '罐裝':1500},
  '蜂膠':1500,
}

const calculateTotal1 = () =>{
  const price = priceList[weight1.value][taste1.value];
  result1.value = price * Number(quantity1.value);
  description1.value = descriptions[taste1.value];
}
const calculateTotal2 = () =>{
  const price = priceList['窄口瓶裝純蜜系列'][taste2.value];
  result2.value = price * Number(quantity2.value);
  description2.value = descriptions[taste2.value];
}
const calculateTotal3 = () =>{
  const price = priceList['果糖瓶裝純蜜系列'][taste3.value];
  result3.value = price * Number(quantity3.value);
  description3.value = descriptions[taste3.value];
}
const calculateTotal4 = () =>{
  const price = priceList['隨身瓶裝純蜜系列'][taste4.value];
  result4.value = price * Number(quantity4.value);
  description4.value = descriptions[taste4.value];
}
const calculateTotal5 = () =>{
  const price = priceList['蜂蜜禮盒(寬口瓶)'][taste5.value];
  result5.value = price * Number(quantity5.value);
  description5.value = descriptions[taste5.value];
}
const calculateTotal6 = () =>{
  const price = priceList['蜂蜜禮盒(窄口瓶)'][taste6.value];
  result6.value = price * Number(quantity6.value);
  description6.value = descriptions[taste6.value];
}
const calculateTotal7 = () =>{
  const price = priceList['護唇膏'][taste7.value];
  result7.value = price * Number(quantity7.value);
}
const calculateTotal8 = () =>{
  const price = priceList['蜂蜜枇杷喉糖'][taste8.value];
  result8.value = price * Number(quantity8.value);
}
const calculateTotal9 = () =>{
  const price = priceList['蜂蜜水果酵素'];
  result9.value = price * Number(quantity9.value);
}
const calculateTotal10 = () =>{
  const price = priceList['蜂蜜醋'];
  result10.value = price * Number(quantity10.value);
}
const calculateTotal11 = () =>{
  const price = priceList['罐裝花粉粒'][taste11.value];
  result11.value = price * Number(quantity11.value);
}
const calculateTotal12 = () =>{
  const price = priceList['蜂王乳/膠囊'][taste12.value];
  result12.value = price * Number(quantity12.value);
}
const calculateTotal13 = () =>{
  const price = priceList['蜂膠'];
  result13.value = price * Number(quantity13.value);
}

const total = computed(() => {
   return ( Number(result1.value) + Number(result2.value) + Number(result3.value) + Number(result4.value) + Number(result5.value) + Number(result6.value) + Number(result7.value) + Number(result8.value) + Number(result9.value) + Number(result10.value) + Number(result11.value) + Number(result12.value) + Number(result13.value) );
});

const router = useRouter();

/*發送定義事件, 向父組件發送數據 */
const emit = defineEmits(['submitForm']);
const submitForm = () => {
  const data = {
    weight1: weight1.value,
    taste1: taste1.value,
    quantity1: quantity1.value,
    result1: result1.value,
    taste2: taste2.value,
    quantity2: quantity2.value,
    result2: result2.value,
    taste3: taste3.value,
    quantity3: quantity3.value,
    result3: result3.value,
    taste4: taste4.value,
    quantity4: quantity4.value,
    result4: result4.value,
    taste5: taste5.value,
    quantity5: quantity5.value,
    result5: result5.value,
    taste6: taste6.value,
    quantity6: quantity6.value,
    result6: quantity6.value,
    taste7: taste7.value,
    quantity7: quantity7.value,
    result7: result7.value,
    taste8: taste8.value,
    quantity8: quantity8.value,
    result8: result8.value,
    quantity9: quantity9.value,
    result9: result9.value,
    quantity10: quantity10.value,
    result10: result10.value,
    taste11: taste11.value,
    quantity11: quantity11.value,
    result11: result11.value,
    taste12: taste12.value,
    quantity12: quantity12.value,
    result12: result12.value,
    quantity13: quantity13.value,
    result13: result13.value,
    total: total.value
  };
  // 觸發 send-data 事件，並傳遞數據給父組件
  emit('submitForm', data);
  console.log("輸入的數據是:",data);

  sessionStorage.setItem('formData', JSON.stringify(data));
  router.push('/from');
}
</script>

<template>
 <form id="dataForm" action="" method="post">
        <div class="section">
            <span class="tltle">商品介紹</span>
            <ul class="list-group list-group-horizontal-sm">
                <li class="list-group-item"><a href="#pure_hone">純蜜系列</a></li>
                <li class="list-group-item"><a href="#gift-box">禮盒系列</a></li>
                <li class="list-group-item"><a href="#other">相關產品系列</a></li>
            </ul>
            <h4 id="pure_hone">純蜜系列</h4>
            <div class="row">
                <div class="col-sm-6">
                    <img src="../uploads/3、5kg.jpg" class="card-img" alt="3、5公斤裝純蜜系列">
                    <h5 class="title">3、5公斤裝純蜜系列</h5>
                    <div class="dropdown-group">
                        <div class="weight">
                            <span class="title">重量</span>
                            <select name="weight"  v-model="weight1" @change="calculateTotal1">
                                <option value="3">3公斤</option>
                                <option value="5">5公斤</option>
                            </select>    
                        </div>
                        <div class="taste">
                            <span class="title">口味</span>
                            <select v-model="taste1" @change="calculateTotal1">
                                <option value="百花蜜" :data-description="descriptions['百花蜜']">百花蜜</option>
                                <option value="咸豐草蜜" :data-description="descriptions['咸豐草蜜']">咸豐草蜜</option>
                                <option value="烏桕蜜" :data-description="descriptions['烏桕蜜']">烏桕蜜</option>
                                <option value="荔枝蜜" :data-description="descriptions['荔枝蜜']">荔枝蜜</option>
                                <option value="龍眼蜜" :data-description="descriptions['龍眼蜜']">龍眼蜜</option>
                                <option value="千層蜜" :data-description="descriptions['千層蜜']">千層蜜</option>
                                <option value="紅柴蜜" :data-description="descriptions['紅柴蜜']">紅柴蜜</option>
                            </select>
                        </div>
                        <p id="description1" class="mt-2">{{description1}}</p>
                        <div class="quantity">
                            <span class="title">數量</span>
                            <input type="number" name="quantity" v-model="quantity1" @change="calculateTotal1" min="0" placeholder="請輸入數量">
                        </div>
                        <div class="money">
                            <span class="title">金額:</span>
                            <span class="result">{{ result1 }}</span>
                        </div>
                    </div>
                </div>
                <div class="col-sm-6">
                    <img src="../uploads/Narrow_mouth.jpg" class="card-img" alt="窄口瓶裝純蜜系列">
                    <h5 class="title">窄口瓶裝純蜜系列</h5>
                    <div class="dropdown-group">
                      <div class="taste">
                            <span class="title">口味</span>
                            <select v-model="taste2" @change="calculateTotal2">
                                <option value="百花蜜" :data-description="descriptions['百花蜜']">百花蜜</option>
                                <option value="咸豐草蜜" :data-description="descriptions['咸豐草蜜']">咸豐草蜜</option>
                                <option value="烏桕蜜" :data-description="descriptions['烏桕蜜']">烏桕蜜</option>
                                <option value="荔枝蜜" :data-description="descriptions['荔枝蜜']">荔枝蜜</option>
                                <option value="龍眼蜜" :data-description="descriptions['龍眼蜜']">龍眼蜜</option>
                                <option value="千層蜜" :data-description="descriptions['千層蜜']">千層蜜</option>
                                <option value="紅柴蜜" :data-description="descriptions['紅柴蜜']">紅柴蜜</option>
                                <option value="結晶蜜">結晶蜜</option>
                            </select>
                        </div>
                        <p id="description2" class="mt-2">{{description2}}</p>
                        <div class="quantity">
                            <span class="title">數量</span>
                            <input type="number" name="quantity" v-model="quantity2" @change="calculateTotal2" min="0" placeholder="請輸入數量">
                        </div>
                        <div class="money">
                            <span class="title">金額:</span>
                            <span class="result">{{ result2 }}</span>
                        </div>
                    </div>
                </div> 
                <div class="col-sm-6">
                    <img src="../uploads/suger.jpg" class="card-img" alt="果糖瓶裝純蜜系列">
                    <h5 class="title">果糖瓶裝純蜜系列</h5>
                    <div class="dropdown-group">
                      <div class="taste">
                            <span class="title">口味</span>
                            <select v-model="taste3" @change="calculateTotal3">
                                <option value="百花蜜" :data-description="descriptions['百花蜜']">百花蜜</option>
                                <option value="咸豐草蜜" :data-description="descriptions['咸豐草蜜']">咸豐草蜜</option>
                                <option value="烏桕蜜" :data-description="descriptions['烏桕蜜']">烏桕蜜</option>
                                <option value="荔枝蜜" :data-description="descriptions['荔枝蜜']">荔枝蜜</option>
                                <option value="龍眼蜜" :data-description="descriptions['龍眼蜜']">龍眼蜜</option>
                                <option value="千層蜜" :data-description="descriptions['千層蜜']">千層蜜</option>
                                <option value="紅柴蜜" :data-description="descriptions['紅柴蜜']">紅柴蜜</option>
                            </select>
                        </div>
                        <p id="description3" class="mt-2">{{description3}}</p>
                        <div class="quantity">
                            <span class="title">數量</span>
                            <input type="number" name="quantity" v-model="quantity3" @change="calculateTotal3" min="0" placeholder="請輸入數量">
                        </div>
                        <div class="money">
                            <span class="title">金額:</span>
                            <span class="result">{{ result3 }}</span>
                        </div>
                    </div>
                </div> 
                <div class="col-sm-6">
                    <img src="../uploads/portable.jpg" class="card-img" alt="隨身瓶裝純蜜系列">
                    <h5 class="title">隨身瓶裝純蜜系列</h5>
                    <div class="dropdown-group">
                      <div class="taste">
                            <span class="title">口味</span>
                            <select v-model="taste4" @change="calculateTotal4">
                                <option value="百花蜜" :data-description="descriptions['百花蜜']">百花蜜</option>
                                <option value="咸豐草蜜" :data-description="descriptions['咸豐草蜜']">咸豐草蜜</option>
                                <option value="烏桕蜜" :data-description="descriptions['烏桕蜜']">烏桕蜜</option>
                                <option value="荔枝蜜" :data-description="descriptions['荔枝蜜']">荔枝蜜</option>
                                <option value="龍眼蜜" :data-description="descriptions['龍眼蜜']">龍眼蜜</option>
                                <option value="千層蜜" :data-description="descriptions['千層蜜']">千層蜜</option>
                                <option value="紅柴蜜" :data-description="descriptions['紅柴蜜']">紅柴蜜</option>
                            </select>
                        </div>
                        <p id="description4" class="mt-2">{{description4}}</p>
                        <div class="quantity">
                            <span class="title">數量</span>
                            <input type="number" name="quantity" v-model="quantity4" @change="calculateTotal4" min="0" placeholder="請輸入數量">
                        </div>
                        <div class="money">
                            <span class="title">金額:</span>
                            <span class="result">{{ result4 }}</span>
                        </div>
                    </div>
                </div>
            </div>
            <h4 id="gift-box">禮盒系列</h4>
            <div class="row">
                <div class="col-sm-6">
                    <img src="../uploads/gift_wide_mouth.jpg" class="card-img" alt="蜂蜜禮盒(寬口瓶)">
                    <h5 class="title">蜂蜜禮盒(寬口瓶)</h5>
                    <div class="dropdown-group">
                      <div class="taste">
                            <span class="title">口味</span>
                            <select v-model="taste5" @change="calculateTotal5">
                                <option value="百花蜜" :data-description="descriptions['百花蜜']">百花蜜</option>
                                <option value="咸豐草蜜" :data-description="descriptions['咸豐草蜜']">咸豐草蜜</option>
                                <option value="烏桕蜜" :data-description="descriptions['烏桕蜜']">烏桕蜜</option>
                                <option value="荔枝蜜" :data-description="descriptions['荔枝蜜']">荔枝蜜</option>
                                <option value="龍眼蜜" :data-description="descriptions['龍眼蜜']">龍眼蜜</option>
                                <option value="千層蜜" :data-description="descriptions['千層蜜']">千層蜜</option>
                                <option value="紅柴蜜" :data-description="descriptions['紅柴蜜']">紅柴蜜</option>
                            </select>
                        </div>
                        <p id="description5" class="mt-2">{{description5}}</p>
                        <div class="quantity">
                            <span class="title">數量</span>
                            <input type="number" name="quantity" v-model="quantity5" @change="calculateTotal5" min="0" placeholder="請輸入數量">
                        </div>
                        <div class="money">
                            <span class="title">金額:</span>
                            <span class="result">{{ result5 }}</span>
                        </div>
                    </div>
                </div>
                <div class="col-sm-6">
                    <img src="../uploads/gift_Narrow_mouth.jpg" class="card-img" alt="蜂蜜禮盒(窄口瓶)">
                    <h5 class="title">蜂蜜禮盒(窄口瓶)</h5>
                    <div class="dropdown-group">
                      <div class="taste">
                            <span class="title">口味</span>
                            <select v-model="taste6" @change="calculateTotal6">
                                <option value="百花蜜" :data-description="descriptions['百花蜜']">百花蜜</option>
                                <option value="咸豐草蜜" :data-description="descriptions['咸豐草蜜']">咸豐草蜜</option>
                                <option value="烏桕蜜" :data-description="descriptions['烏桕蜜']">烏桕蜜</option>
                                <option value="荔枝蜜" :data-description="descriptions['荔枝蜜']">荔枝蜜</option>
                                <option value="龍眼蜜" :data-description="descriptions['龍眼蜜']">龍眼蜜</option>
                                <option value="千層蜜" :data-description="descriptions['千層蜜']">千層蜜</option>
                                <option value="紅柴蜜" :data-description="descriptions['紅柴蜜']">紅柴蜜</option>
                            </select>
                        </div>
                        <p id="description6" class="mt-2">{{description6}}</p>
                        <div class="quantity">
                            <span class="title">數量</span>
                            <input type="number" name="quantity" v-model="quantity6" @change="calculateTotal6" min="0" placeholder="請輸入數量">
                        </div>
                        <div class="money">
                            <span class="title">金額:</span>
                            <span class="result">{{ result6 }}</span>
                        </div>
                    </div>
                </div> 
            </div>
            <h4 id="other">相關產品系列</h4>
            <div class="row">
                <div class="col-sm-6">
                    <img src="../uploads/lip_balm.jpg" class="card-img" alt="護唇膏">
                    <h5 class="title">護唇膏</h5>
                    <div class="dropdown-group">
                      <div class="taste">
                            <span class="title">口味</span>
                            <select v-model="taste7" @change="calculateTotal7">
                                <option value="綠茶香">綠茶香</option>
                                <option value="香橙香">香橙香</option>
                                <option value="桂花香">桂花香</option>
                                <option value="天然香">天然香</option>
                            </select>
                        </div>
                        <div class="quantity">
                            <span class="title">數量</span>
                            <input type="number" name="quantity" v-model="quantity7" @change="calculateTotal7" min="0" placeholder="請輸入數量">
                        </div>
                        <div class="money">
                            <span class="title">金額:</span>
                            <span class="result">{{ result7 }}</span>
                        </div>
                    </div>
                </div>
                <div class="col-sm-6">
                    <img src="../uploads/Honey_loquat.jpg" class="card-img" alt="蜂蜜枇杷喉糖">
                    <h5 class="title">蜂蜜枇杷喉糖</h5>
                    <div class="dropdown-group">
                      <div class="taste">
                            <span class="title">口味</span>
                            <select v-model="taste8" @change="calculateTotal8">
                                <option value="小">小</option>
                                <option value="大">大</option>
                            </select>
                        </div>
                        <div class="quantity">
                            <span class="title">數量</span>
                            <input type="number" name="quantity" v-model="quantity8" @change="calculateTotal8" min="0" placeholder="請輸入數量">
                        </div>
                        <div class="money">
                            <span class="title">金額:</span>
                            <span class="result">{{ result8 }}</span>
                        </div>
                    </div>
                </div> 
                <div class="col-sm-6">
                    <img src="../uploads/Fruit_enzyme.jpg" class="card-img" alt="蜂蜜水果酵素">
                    <h5 class="title">蜂蜜水果酵素</h5>
                    <div class="dropdown-group">
                      <div class="quantity">
                            <span class="title">數量</span>
                            <input type="number" name="quantity" v-model="quantity9" @change="calculateTotal9" min="0" placeholder="請輸入數量">
                        </div>
                        <div class="money">
                            <span class="title">金額:</span>
                            <span class="result">{{ result9 }}</span>
                        </div>
                    </div>
                    
                </div> 
                <div class="col-sm-6">
                    <img src="../uploads/honey_vinegar.jpg" class="card-img" alt="蜂蜜醋">
                    <h5 class="title">蜂蜜醋</h5>
                    <div class="dropdown-group">
                      <div class="quantity">
                            <span class="title">數量</span>
                            <input type="number" name="quantity" v-model="quantity10" @change="calculateTotal10" min="0" placeholder="請輸入數量">
                        </div>
                        <div class="money">
                            <span class="title">金額:</span>
                            <span class="result">{{ result10 }}</span>
                        </div>
                    </div>
                </div> 
                <div class="col-sm-6">
                    <img src="../uploads/pollen_grains.jpg" class="card-img" alt="罐裝花粉粒">
                    <h5 class="title">罐裝花粉粒</h5>
                    <div class="dropdown-group">
                        <div class="taste">
                          <span class="title">口味</span>
                            <select v-model="taste11" @change="calculateTotal11">
                              <option  value="茶花">茶花</option>
                                <option value="咸豐草花">咸豐草花</option>
                                <option value="油菜花">油菜花</option>
                                <option value="小花蔓澤蘭花
                                ">小花蔓澤蘭花</option>
                                <option value="埔鹽花">埔鹽花</option>
                            </select>
                        </div>
                        <div class="quantity">
                            <span class="title">數量</span>
                            <input type="number" name="quantity" v-model="quantity11" @change="calculateTotal11" min="0" placeholder="請輸入數量">
                        </div>
                        <div class="money">
                            <span class="title">金額:</span>
                            <span class="result">{{ result11 }}</span>
                        </div>
                    </div>
                </div> 
                <div class="col-sm-6">
                    <img src="../uploads/Queen_Bee_Capsule.jpg" class="card-img" alt="蜂王乳/膠囊">
                    <h5 class="title">蜂王乳/膠囊</h5>
                    <div class="dropdown-group">
                        <div class="taste">
                            <span class="title">口味</span>
                            <select v-model="taste12" @change="calculateTotal12">
                                <option value="膠囊">膠囊</option>
                                <option value="罐裝"> 蜂王乳罐裝</option>
                            </select>
                        </div>
                        <div class="quantity">
                            <span class="title">數量</span>
                            <input type="number" name="quantity" v-model="quantity12" @change="calculateTotal12" min="0" placeholder="請輸入數量">
                        </div>
                        <div class="money">
                            <span class="title">金額:</span>
                            <span class="result">{{ result12 }}</span>
                        </div>
                    </div>
                </div> 
                <div class="col-sm-6">
                    <img src="../uploads/Propolis.jpg" class="card-img" alt="蜂膠">
                    <h5 class="title">蜂膠</h5>
                    <div class="dropdown-group">
                      <div class="quantity">
                            <span class="title">數量</span>
                            <input type="number" name="quantity" v-model="quantity13" @change="calculateTotal13" min="0" placeholder="請輸入數量">
                        </div>
                        <div class="money">
                            <span class="title">金額:</span>
                            <span class="result">{{ result13 }}</span>
                        </div>
                    </div>
                </div> 
                <div class="col-sm-6" id="total">
                    <span class="title">總金額</span>
                    <span class="result">{{ total }}</span>
                    <button type="button" @click="submitForm">下一步</button>
                </div>
            </div>
        </div>
        
</form>
</template>

<style>
.section .tltle{
    font-size: 25px;
    margin-left: 20px;
}
.section .list-group{
    margin: 10px;
    list-style: none;
}
.section .list-group li{
    width: 100%;
    font-size: 20px;
    text-align: center;
}
.section .list-group li :hover{
    font-weight: 700;
    color: #5ba3a3f4;
}
.section .card-img{
    margin-top: 10px;
}
.section #pure_hone{
    font-size: 20px;
    font-weight: 700;
    margin-left: 10px;
    margin: 15px;
}
.section .row{
    width: 100%;
}
.section .row .title{
    width: 100%;
    font-size: 20px;
    margin-top: 10px;
    text-align: center;
    margin-left: 10px;
}
.section #gift-box{
    font-size: 20px;
    font-weight: 700;
    margin: 10px;

}
.section #other{
    font-size: 20px;
    font-weight: 700;
    margin-left: 10px;
    margin: 10px;
}
/*下拉式選單*/
.dropdown-group{
    display: flex;
    width: 100%;
    font-size: 25px;
    text-align: center;
    flex-direction: column;
}
.dropdown-group div{
    width: 100%;
}
.dropdown-group select{
    width: 100%;
    text-align: center;
    font-size: 20px;
    border: 1px solid black;
}
.dropdown-group input{
    border: 1px solid black;
    width: 100%;
    text-align: center;
    font-size: 25px;
}
.dropdown-group .mt-2{
  margin: auto;
  font-size: 20px;
}
.dropdown-group .money{
    margin: auto;
}
.dropdown-group .money .title{
   font-size: 20px;
}
.dropdown-group .money .result{
    font-size: 25px;
    font-weight: 700;
    color: red;
}
#total{
    font-size: 30px;
    font-weight: 700;
    margin: auto;
    text-align: center;
}
#total .title{
  font-size: 30px;
  margin: 0 1rem;
}
#total .result{
    color: red;
    margin: 10px;
}
#total button{
    margin: 10px ;
}

@media (min-width: 768px) {
  .col-sm-6{
    border: 1px solid black;
}
}

@media (min-width: 1024px) {
    .section .tltle{
    font-size: 30px;
    margin-left: 20px;
}
.section .list-group li{
    font-size: 25px;
}
.section #pure_hone{
    font-size: 25px;
    margin: 15px;
}
.section .row .title{
    font-size: 25px;
}
.section #gift-box{
    font-size: 25px;
    margin: 15px;

}
.section #other{
    font-size: 25px;
    margin: 15px;
}
/*下拉式選單*/
.dropdown-group{
    font-size: 30px;
}
.dropdown-group select{
    font-size: 30px;
}
.dropdown-group input{
    font-size: 30px;
}
.dropdown-group .mt-2{
  font-size: 25px;
}
.dropdown-group .money{
    margin: auto;
}
.dropdown-group .money .title{
   font-size: 30px;
}
.dropdown-group .money .result{
    font-size: 35px;
}
#total{
    font-size: 30px;
    font-weight: 700;
    margin: auto;
    text-align: center;
}
#total .title{
  font-size: 30px;
  margin: 0 10px;
}
#total .result{
    font-size: 35px;
}
}
</style>
