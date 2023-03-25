<template>
  <div :class="classObj" class="app-wrapper">
    <el-scrollbar>
      <sidebar class="sidebar-container"/>
      <div class="main-container">
        <div>
          <navbar/>
          <!-- <tags-view /> -->
        </div>
        <app-main/>
        <!-- <right-panel>
          <settings/>
        </right-panel> -->
      </div>
    </el-scrollbar>
  </div>
</template>

<script>
// import RightPanel from '@/components/RightPanel'
import { AppMain, Navbar, Sidebar /* , Settings, TagsView */ } from './components'
import variables from '@/assets/styles/variables.scss'

export default {
  name: 'Layout',
  components: {
    AppMain,
    Navbar,
    // RightPanel,
    // Settings,
    Sidebar,
    // TagsView
  },
  computed: {
    classObj() {
      return {
      }
    },
    variables() {
      return variables;
    }
  },
  methods: {
  }
}
</script>

<style lang="scss" scoped>
  @import "~@/assets/styles/mixin.scss";
  @import "~@/assets/styles/variables.scss";

  .app-wrapper {
    @include clearfix;
    position: relative;
    height: 100%;
    width: 100%;

    .el-scrollbar{
      height: 100%;
    }

    ::v-deep .el-scrollbar__wrap {
      overflow-x: hidden;
    }

    &.mobile.openSidebar {
      position: fixed;
      top: 0;
    }
  }

  .fixed-header {
    position: fixed;
    top: 0;
    right: 0;
    z-index: 9;
    width: calc(100% - #{$base-sidebar-width});
    transition: width 0.28s;
  }

  .hideSidebar .fixed-header {
    width: calc(100% - 54px);
  }

  .sidebarHide .fixed-header {
    width: 100%;
  }

  .mobile .fixed-header {
    width: 100%;
  }
</style>
