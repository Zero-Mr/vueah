<template>
  <div id="app">
    <div class="header">
    <!-- 顶部欢迎信息 -->
      <el-row>
          <el-col :xl="24" :sm="24" :md="24" :lg="24">
              <div class="topwelcome">{{msg}}</div>
          </el-col>
      </el-row>
<!-- 中间logo -->
      <el-row>
          <el-col :xl="24" :sm="24" :md="24" :lg="24">
              <div class="logoarea">
                  <div class="logobox">
                    <a :href="logolink">
                      <img :src="logoimgsrc" alt="" :title="logotitle">
                    </a>
                  </div>
              </div>
          </el-col>
      </el-row>
<!-- 导航条 -->
      <el-row type="flex" justify="space-around" v-show="navshow">
        <el-col :span="18">
            <ul class="nav">
              <li class="navitem" v-for="item in navarr" :key="item.id">
                <a :href="item.link">
                  {{item.text}}
                </a>
              </li>
            </ul>
        </el-col>
      </el-row>
      <!-- 控制显示按钮 -->
      <el-button class="visible-xs" type='success' @click="navshow = !navshow">click</el-button>  
    </div>

    <!-- 页脚 -->  
    <div class="footer">
        <el-row type="flex" justify="space-around">
            <el-col :span="18" class="footerwrap">
              <el-col :span="24">
                  <el-col :span="8" v-for="item in footarr" :key="item.title">
                      <ul>
                        <h3>
                          {{item.title}}
                        </h3>
                        <li v-for="item in item.inner" :key="item.inner">
                          <a href="">
                            {{item.text}}
                          </a>
                        </li>
                      </ul>
                  </el-col>
              </el-col>
            </el-col>
        </el-row>

    </div>
    <router-view/>
  </div>
</template>

<script>
import 'element-ui/lib/theme-chalk/display.css';
import axios from 'axios'
export default {
  name: 'App',
  data () {
    return {
      msg: 'This is welcome data',
      logolink:'',
      logoimgsrc:'',
      logotitle:'',
      navarr:[],
      navshow:true,
      footarr:[],
    }
  },
  created:function(){
    axios.get('../../static/headdata.json')
    .then(reponse =>{
      // console.log(reponse)
      this.logolink=reponse.data[0].link;
      this.logoimgsrc=reponse.data[0].imgsrc;
      this.logotitle=reponse.data[0].title;
      this.navarr=reponse.data[1];
    })
    .catch(error =>{
      console.log(error)
    });
    axios.get('../../static/footdata.json')
    .then(reponse =>{
      this.footarr.push(reponse.data[0])
      this.footarr.push(reponse.data[1])
      console.log( this.footarr);
    })
    .catch(error =>{
      console.log(error)
    })
  }
}
</script>

<style>
.footerwrap{
  border-top:1px solid #636363;
}
body{
  margin: 0;
  padding: 0;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
.nav{
  text-align: center;
  padding: 0;
}
.navitem{
  display: inline-block;
  list-style: none;
  text-transform: uppercase;
  margin: 0 46px;
  padding: 5px 10px;
}
.navitem a{
  color: #636363;
  text-decoration: none;
}
.hiddem-xs{
  display: block;
}
.visible-xs{
  display: none;
}
@media screen and (max-width:767px){
.visible-xs{
  display: block;
}
.hiddem-xs{
  display: none;
}
}

  .topwelcome{
        background-color: #e5e5e5;
        text-align: center;
        padding: 5px 0px;
  }
  .logobox img{
    width: 380px;
  }
  .logobox{
    width: 380px;
    margin: 40px auto;
  }
</style>
