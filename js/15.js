var Test = {
    template : `
        <div>
            我是test组件{{text}}
            <button @click="text += 1">点击</button>
        </div>
    `,
    data: function(){
        return {
            text: 'hello'
        }
    },
    beforeCreate: function(){
        //组件创建之前
        console.log(this.text);
    },
    //可以操作数据，并且可以实现vue->页面的影响。应用：发起ajax请求
    created: function(){
        //组件创建之后
        console.log(this.text);
    },
    beforeMount: function(){
        //vue起作用，装在数据到DOM之前
        // console.log(document.body.innerHTML);
        console.log("beforeMount");
    },
    mounted: function(){
        //vue起作用，装在数据到DOM之后
        // console.log(document.body.innerHTML);
        console.log("mounted");
    },
    //基于数据改变，影响页面
    //下面两个是当有更改数据才会出发。应用：beforeUpdate可以获取原DOM,updated可以获取新DOM
    beforeUpdate: function(){
        // console.log(document.body.innerHTML);
        console.log("beforeUpdate");
    },
    updated: function(){
        // console.log(document.body.innerHTML);
        console.log("updated");
    },
    //对应父组件v-if false 就销毁当前组件
    //销毁应用：比如销毁前保存到localStorage。
    beforeDestroy: function(){
        //销毁之前
        console.log("beforeDestroy");
    },
    destroyed: function(){
        //销毁之后
        console.log("destroyed");
    },
    //使用keep-alive时触发。如果不使用keep-alive，当父组件频繁v-if true false的时候，会频繁的创建跟销毁，对性能有影响
    activated: function(){
        console.log('组件激活');
    },
    deactivated: function(){
        console.log('组件停用');
    }
}
var App = {
    data: function(){
        return {
            isExist: true
        }
    },
    components: {
        test: Test
    },
    template: `
        <div>
            <keep-alive>
                <test v-if="isExist"></test> 
            </keep-alive> 
            <button @click="isExist=!isExist">切换销毁</button>  
        </div>
    `
}
new Vue({
    el: '#app',
    components:{
        app: App
    },
    template: '<app />'
})