<template>
  <el-col :span="24" class="main">
    <!--右侧内容区-->
    <section class="content-container">
      <div class="grid-content bg-purple-light">
        <el-col :span="24" class="content-wrapper">
          <transition name="fade" mode="out-in">
            <router-view></router-view>
          </transition>
        </el-col>
      </div>
    </section>
    <!-- 右边nav -->
         <!-- background-color="#545c64" -->
    <aside>
     <el-menu style="width: 50px; height: 100%"
        :default-active="activeIndex2"
        class="el-menu-demo"
        mode="horizontal"
        background-color="#373d41"
        @select="handleSelect"
        >
        <el-menu-item class="pop">
          <div class="msg">弹出信息</div>
          <img style="width: 40px; display: block;  margin-left: -12px;" src="../../assets/icon/account.png">
        </el-menu-item>
        <el-menu-item class="pop">
          <div class="msg">弹出信息</div>
          <img style="width: 40px; display: block;  margin-left: -12px;" src="../../assets/icon/erweima.png">
        </el-menu-item>
        <el-menu-item class="pop">
          <div class="msg">弹出信息</div>
          <img style="width: 40px; display: block;  margin-left: -12px;" src="../../assets/icon/erweima.png">
        </el-menu-item>
        <el-menu-item class="pop">
          <div class="msg">弹出信息</div>
          <img style="width: 40px; display: block;  margin-left: -12px;" src="../../assets/icon/erweima.png">
        </el-menu-item>
      </el-menu>
    </aside>
  </el-col>
</template>
<script>
  export default {
    name: 'leftNav',
    data () {
      return {
        collapsed: this.$store.state.collapsed
      }
    },
    methods: {
      //折叠导航栏
      collapse: function () {
        this.collapsed = !this.collapsed;
        this.$store.state.collapsed = this.collapsed;
      },
      // 左侧导航栏根据当前路径默认打开子菜单（如果当前路由是三级，则二级子菜单默认打开）
      // defaultLeftNavOpened () {
      //   // debugger
      //   console.log(this.$route.path, '1')
      //   console.log(this.$router.options.routes, '2')
      //   let cur_path = this.$route.path; //获取当前路由
      //   let routers = this.$router.options.routes; // 获取路由对象
      //   let subMenuIndex = 0, needOpenSubmenu = false;
      //   for (let i = 0; i < routers.length; i++) {
      //     let children = routers[i].children;
      //     if(children){
      //       for (let j = 0; j < children.length; j++) {
      //         if (children[j].path === cur_path) {
      //           break;
      //         }
      //         // 如果该菜单下有子菜单(个数>1且设置的leaf为false才有下拉子菜单)
      //         if(children[j].children && !children[j].leaf) {
      //           let grandChildren = children[j].children;
      //           for(let z=0; z<grandChildren.length; z++) {
      //             if(grandChildren[z].path === cur_path) {
      //               subMenuIndex = j;
      //               needOpenSubmenu = true;
      //               break;
      //             }
      //           }
      //         }
      //       }
      //     }
      //   }
      //   if(this.$refs['leftNavigation'] && needOpenSubmenu) {
      //     this.$refs['leftNavigation'].open(subMenuIndex);
      //   }
      // },
    },
    mounted() {
      // this.defaultLeftNavOpened();
    }
  }
</script>
