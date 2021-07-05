<template lang="">
    <div :class="classObj" class ="app-wrapper">
        
        <div v-if="device==='mobile' && sidebar.opened" class= "drawer-bg" @click="handleClickOutside"> </div>
        <sidebar class="sidebar-container"></sidebar>
        <div class="main-container" :class = "{hasTagsView:needTagsView}"></div>
        <div :class="{'fixed-header':fixedHeader}">
            <navbar/>
            <tags-view v-if="needTagsView"/>
        </div>
        <app-main/>

    </div>
</template>
<script>
import { AppMain, Navbar, Sidebar, TagsView } from './components'
import { mapState } from 'vuex';


export default {
  name: 'Layout',
  components: {
    AppMain,
    Navbar,
    Sidebar,
    TagsView
  },
  computed: {
    ...mapState({
      sidebar: state => state.app.sidebar,
      device: state => state.app.device,
      showSettings: state => state.settings.showSettings,
      needTagsView: state => state.settings.tagsView,
      fixedHeader: state => state.settings.fixedHeader
    }),
    classObj () {
      return {
        //   样式类型
        hideSidebar: !this.sidebar.opened,
        openSidebar: this.sidebar.opened,
        withoutAnimation: this.sidebar.withoutAnimation,
        mobile: this.device === 'mobile'
      }
    }
  },
  methods: {
    handleClickOutside () {
      this.$$store.dispatch('app/closeSideBar', { withoutAnimation: false })
    }
  }
}
</script>
<style lang="less">
</style>