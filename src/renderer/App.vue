<template>
  <div id="app">
    <v-app light>
      <v-navigation-drawer
        persistent
        :mini-variant="miniVariant"
        :clipped="clipped"
        v-model="drawer"
        width=200
        app
      >
        <v-list>
          <v-list-tile 
            router
            :to="item.to"
            :key="i"
            v-for="(item, i) in items"
            exact
            @click="breadChange(item)"
          >
            <v-list-tile-action>
              <v-icon v-html="item.icon"></v-icon>
            </v-list-tile-action>
            <v-list-tile-content>
              <v-list-tile-title v-text="item.title"></v-list-tile-title>
            </v-list-tile-content>
          </v-list-tile>
        </v-list>
      </v-navigation-drawer>
      <v-toolbar fixed app :clipped-left="clipped">
        <v-toolbar-side-icon @click.native.stop="drawer = !drawer"></v-toolbar-side-icon>
        <v-btn 
          icon
          @click.native.stop="miniVariant = !miniVariant"
        >
          <v-icon v-html="miniVariant ? 'chevron_right' : 'chevron_left'"></v-icon>
        </v-btn>
        <v-btn
          icon
          @click.native.stop="clipped = !clipped"
        >
          <v-icon>web</v-icon>
        </v-btn>
        <v-btn
          icon
          @click.native.stop="fixed = !fixed"
        >
          <v-icon>remove</v-icon>
        </v-btn>
        <v-toolbar-title v-text="title"></v-toolbar-title>
        <v-toolbar-title v-text="subTitle"></v-toolbar-title>
        <v-spacer></v-spacer>
        <v-btn
          icon
          @click.native.stop="rightDrawer = !rightDrawer"
        >
          <v-icon>menu</v-icon>
        </v-btn>
      </v-toolbar>
      <main>
        <v-content>
          <v-container fluid fill-height>
            <v-slide-y-transition mode="out-in">
              <router-view></router-view>
            </v-slide-y-transition>
          </v-container>
        </v-content>
      </main>
      <v-navigation-drawer
        temporary
        :right="right"
        v-model="rightDrawer"
        app
      >
        <v-list>
          <v-list-tile @click.native="right = !right">
            <v-list-tile-action>
              <v-icon light>compare_arrows</v-icon>
            </v-list-tile-action>
            <v-list-tile-title>Switch drawer (click me)</v-list-tile-title>
          </v-list-tile>
        </v-list>
      </v-navigation-drawer>
      <v-footer :fixed="fixed" app>
        <v-spacer></v-spacer>
        <span>中国石油集团川庆钻探工程有限公司井下作业公司&copy; 2017</span>
      </v-footer>
    </v-app>
  </div>
</template>

<script>
  export default {
    name: 'u-frac',
    data: () => ({
      clipped: false,
      drawer: true,
      fixed: false,
      items: [
        { icon: 'bubble_chart', title: '大数据分析', to: '/bigData' },
        { icon: 'line_style', title: '地质模型', to: '/earth' },
        { icon: 'insert_chart', title: '储层评价', to: '/layer' },
        { icon: 'merge_type', title: '裂缝扩展', to: '/fracs' },
        { icon: 'trending_up', title: '产能预测', to: '/forecast' },
        { icon: 'info_outline', title: '安全评估', to: '/safety' },
        { icon: 'attach_money', title: '经济评估', to: '/eco' },
        { icon: 'assignment_turned_in', title: '优化设计', to: '/optim' },
        { icon: 'schedule', title: '实时决策', to: '/design' },
        { icon: 'timeline', title: '压后评估', to: '/eval' }
      ],
      miniVariant: false,
      right: true,
      rightDrawer: false,
      title: 'U-Frac',
      subTitle: ''
    }),
    methods: {
      breadChange: function (item) {
        this.subTitle = item.title
      }
    }
  }
</script>

<style lang="stylus">
  @import './assets/stylus/main.styl'
</style>


<style>
  /* Global CSS */
</style>
