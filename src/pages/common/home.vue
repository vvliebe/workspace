<template lang="html">
  <section id='workspace'>
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

<style lang="scss">
  #workspace {
    display: flex;
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    height: 100vh;

    .menu-bar {
      width: 200px;
      height: 100%;
    }
  }
</style>
