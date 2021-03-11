new Vue({
    el: '#app',
    data: {
        res: '',
        numbers:['1','2','3','4','5','6','7','8','9','0','.'],
        opers:['+','-','*','/'],
        data1:'2020-12-20'
    },
    methods:{
        input: function(val){
        if (this.res=='Ошибка ввода'){
            this.res="";
            this.res = this.res+=val;
        }
        else{
            this.res = this.res+=val;
         }
        },
        answ: function(){
            try{
                this.res=eval(this.res);
            }
            catch{
                this.res="Ошибка ввода";
            }
        },
        reset: function(){
            this.res='';
        },        
    },
    watch: {
        data1() {
            console.log(this.data1);
        },
    }
});