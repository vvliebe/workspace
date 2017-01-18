<template lang="html">
  <section id='workspace'>

    <div class="nav">
      <div class="nav-header">
        <img src="http://ojygpugo6.bkt.clouddn.com/images/workspace-avatar.jpeg">
      </div>

      <el-menu :default-active="activeMenu" router class="menu-bar">
        <template v-for="(route, index) in $router.options.routes[$router.options.routes.length - 2].children">
          <template v-if="route.isSubmenu">
            <el-submenu :index="route.name">
              <template slot="title"><i :class="route.iconClass"></i>{{route.name}}</template>
              <el-menu-item :index="cRoute.name" v-for="(cRoute, cIndex) in route.children" :route="cRoute">{{cRoute.name}}</el-menu-item>
            </el-submenu>
          </template>
          <template v-if="route.isMenuItem">
            <el-menu-item :index="route.name" :route="route"><i :class="route.iconClass"></i>{{route.name}}</el-menu-item>
          </template>
        </template>
      </el-menu>

      <div class="nav-footer">

      </div>
    </div>

    <div class="main-content">
      <router-view></router-view>
    </div>

  </section>
</template>

<script>
export default {
  data() {
    return {
      activeMenu: ''
    }
  }
}
</script>

<style lang="scss" scoped>
  #workspace {
    display: flex;
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    height: 100vh;

    .nav {
      display: flex;
      flex-direction: column;
      width: 250px;
      height: 100%;
      background: #EFF2F7;

      .nav-header {
        display: flex;
        height: 150px;
        align-items: center;
        justify-content: center;
        img {
          width: 100px;
          height: 100px;
          border-radius: 50%;
        }
      }

      .menu-bar {
        flex: 1;
      }
      .nav-footer {
        height: 100px;
      }
    }

    .main-content {
      flex: 1;
      max-height: 100%;
      overflow-y: auto;
    }
  }
</style>
