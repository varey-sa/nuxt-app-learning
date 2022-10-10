<template>
  <v-app dark>
    <v-app-bar app elevation="0" elevate-on-scroll   style="background-color: #E0F7FA">
      <nuxt-link to="/" style="text-decoration-line: none">
        <v-toolbar-title class="black--text" v-text="title" />
      </nuxt-link>
      <v-spacer />
      <v-avatar size="60">
        <v-img :src="require('@/assets/images/avatar1.jpg')" />
      </v-avatar>
    </v-app-bar>
    <v-main style="background-color:#E0F7FA">
      <v-container style="background-color: #fff" class="pa-10">
        <Nuxt />
      </v-container>
    </v-main>
    <v-footer fixed app>
      <span>&copy; {{ new Date().getFullYear() }}</span>
    </v-footer>
  </v-app>
</template>
<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'
@Component
export default class Index extends Vue {
  title = 'E-COMMERCE'
  items = [
    {
      src: 'https://cdn.vuetifyjs.com/images/carousel/squirrel.jpg',
    },
    {
      src: 'https://cdn.vuetifyjs.com/images/carousel/sky.jpg',
    },
    {
      src: 'https://cdn.vuetifyjs.com/images/carousel/bird.jpg',
    },
    {
      src: 'https://cdn.vuetifyjs.com/images/carousel/planet.jpg',
    },
  ]
}
</script>
