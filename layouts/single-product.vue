<template>
  <v-app dark>
    <v-app-bar app elevation="4" elevate-on-scroll>
      <!--      <v-toolbar-title v-text="title" />-->
      <v-spacer />
      <v-avatar size="60">
        <v-img :src="require('@/assets/images/avatar1.jpg')" />
      </v-avatar>
    </v-app-bar>
    <v-main>
      <v-carousel
        cycle
        height="70vh"
        class="px-4"
        hide-delimiter-background
        show-arrows-on-hover
      >
        <v-carousel-item
          v-for="(item, i) in items"
          :key="i"
          :src="item.src"
        ></v-carousel-item>
      </v-carousel>
      <v-container>
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
@Component({})
export default class SingleProduct extends Vue {
  title = 'My Portfolio'
}
</script>
