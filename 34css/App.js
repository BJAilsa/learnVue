//引入静态文件不能直接在src上使用相对路径，
//因为最终webpack会打包从html页面查找相对路径，
//当从html访问的相对路径跟在目前组件中的相对路径一般是不一样的，就会导致找不到静态文件
import img from './test.png';
export default{
    template: `
        <div>
            <img :src="imgSrc"/>
        </div>
    `,
    data(){
        return{
            imgSrc:img
        }
    }
}