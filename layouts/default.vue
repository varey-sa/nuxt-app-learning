<template>
  <v-app dark>
    <v-app-bar app elevation="4" elevate-on-scroll>
      <nuxt-link to="/" style="text-decoration-line: none">
        <v-toolbar-title v-text="title" />
      </nuxt-link>
      <v-spacer />
      <v-avatar size="60">
        <v-img :src="require('@/assets/images/avatar1.jpg')" />
      </v-avatar>
    </v-app-bar>
    <v-main>
<!--      <v-carousel-->
<!--        cycle-->
<!--        height="70vh"-->
<!--        class="px-4"-->
<!--        hide-delimiter-background-->
<!--        show-arrows-on-hover-->
<!--      >-->
<!--        <v-carousel-item-->
<!--          v-for="(item, i) in items"-->
<!--          :key="i"-->
<!--          :src="item.src"-->
<!--        ></v-carousel-item>-->
<!--      </v-carousel>-->
      <v-container>
        <div>Personal Info</div>
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
  title = 'My Portfolio'
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
