<template>
  <v-app dark>
    <v-app-bar :clipped-left="clipped" fixed app>
      <v-toolbar-title v-text="title" />
      <v-spacer />
      <v-menu offset-y transition="scale-transition" origin="center center">
        <template v-slot:activator="{ on, attrs  }">
          <v-btn v-bind="attrs" icon v-on="on" color="primary" class="mr-3">
            <v-avatar size="50">
              <v-img :src="require('@/assets/images/avatar1.jpg')" />
            </v-avatar>
          </v-btn>
        </template>
        <v-list>
          <template v-if="menu.length > 0">
            <v-list-item v-for="(m, idx) in menu" @click="m.handler" :key="idx">
              <v-list-item-title>
                {{ m.label }}
              </v-list-item-title>
            </v-list-item>
            <v-divider />
          </template>
          <v-list-item>
            <v-list-item-title> LOGOUT </v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>
    </v-app-bar>
    <v-main>
      <v-container>
        <Nuxt />
      </v-container>
    </v-main>
    <v-footer :absolute="!fixed" app>
      <span>&copy; {{ new Date().getFullYear() }}</span>
    </v-footer>
  </v-app>
</template>

<!--<script>-->
<!--export default {-->
<!--  name: 'DefaultLayout',-->
<!--  data() {-->
<!--    return {-->
<!--      clipped: false,-->
<!--      drawer: false,-->
<!--      fixed: false,-->
<!--      items: [-->
<!--        {-->
<!--          icon: 'mdi-apps',-->
<!--          title: 'Welcome',-->
<!--          to: '/',-->
<!--        },-->
<!--        {-->
<!--          icon: 'mdi-chart-bubble',-->
<!--          title: 'Inspire',-->
<!--          to: '/inspire',-->
<!--        },-->
<!--      ],-->
<!--      miniVariant: false,-->
<!--      right: true,-->
<!--      rightDrawer: false,-->
<!--      title: 'Vuetify.js',-->
<!--    }-->
<!--  },-->
<!--}-->
<!--</script>-->
<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'
import { DEFAULT_MENU } from '~/lib/defination'

@Component
export default class Index extends Vue {
  title = 'Vuetify.js'
  menu = DEFAULT_MENU
  clipped = false
  fixed = false
}
</script>
