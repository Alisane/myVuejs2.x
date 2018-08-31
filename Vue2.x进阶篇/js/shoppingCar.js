new Vue({
    el:'#app',
    data:{
        //购物车中的数据，从json文件读取
        shopListArr:[],
        //是否全选
        isSelectedAll:false,
        //所有商品总价格
        totalPrice:0
    },
    //组件已经加载完毕，请求网络数据，业务处理
    mounted(){
        //请求本地数据
        this.getLocalData();
    },
    //过滤
    filters:{
        //格式化价格
        moneyFormat(money){
            return "$"+ money.toFixed(2);
        }
    },
    methods: {
        //1.请求本地数据
        getLocalData() {
            this.$http.get('data/car.json').then(response => {
                this.someData = response.body;
                console.log( response.body)
                const res=response.body;
                if(res){
                    this.shopListArr = res.allShops.shopList;
                }
            }, response => {
                alert("0");
            });
        },

        //2.单个商品的加减
        singlePrice(shop,flag){
            if(flag){//加
                shop.shopNumber += 1;
            } else {//减
                if(shop.shopNumber <= 1){
                    shop.shopNumber = 1;
                    return;
                }
                shop.shopNumber -= 1;
            }
            this.getAllShopPrice();
        },

        //3.选中所有商品 改变checked的状态 并计算总价格
        selectedAll(flag){
            this.isSelectedAll = !flag;
            this.shopListArr.forEach((value,index)=>{
               if(typeof value.checked === "undefined"){
                   this.$set(value,'checked',!flag);
               } else {
                   value.checked = !flag;
               }
            });
            this.getAllShopPrice();
        },
        //4.计算商品的总价
        getAllShopPrice(){
            let totalPrice = 0;
            this.shopListArr.forEach((value,index)=>{
                if( value.checked){
                   totalPrice += value.shopPrice * value.shopNumber;
                }
            });
            this.totalPrice = totalPrice;
        },

        //5.计算总价
        singleShopSelected(shop){
            if(typeof shop.checked === "undefined"){
                this.$set(shop,'checked',true);
            } else {
                shop.checked = !shop.checked;
            }
            //5.2计算总价
            this.getAllShopPrice();
            //5.36判断是否全选
            this.hasSelectedAll();
        },
        //6判断是否全选
        hasSelectedAll(){
           let flag = true;
           this.shopListArr.forEach((value,index)=>{
               if(!value.checked){
                   flag=false;
               }
           });
           this.isSelectedAll=flag;
        },

        //删除商品
        deleteShop(shop){
            alert("确认删除？");
        }

    }
});
