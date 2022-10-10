<template>
  <v-row justify="center" align="center">
    <v-col v-for="(c, idx) in categories" :key="idx">
      <v-card class="mx-auto">
        <v-img :src="c.image" height="300px"></v-img>
        <v-card-title> {{ c.name }} </v-card-title>
        <v-card-subtitle> 1,000 miles of wonder </v-card-subtitle>
        <v-card-actions class=" d-flex justify-center">
          <v-btn
            rounded
            dark
            color="orange lighten-2"
            @click="goToProducts(c.id)"
            text
          >
            Explore
          </v-btn>
          <v-spacer></v-spacer>
          <v-btn icon @click="show = !show">
            <v-icon>{{ show ? 'mdi-chevron-up' : 'mdi-chevron-down' }}</v-icon>
          </v-btn>
        </v-card-actions>
        <v-expand-transition>
          <div v-show="show">
            <v-divider></v-divider>
            <v-card-text>
              {{ c.description }}
            </v-card-text>
          </div>
        </v-expand-transition>
      </v-card>
    </v-col>
  </v-row>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'
import Services from '~/services'

@Component({
  layout: 'SingleProduct',
})
export default class ProductList extends Vue {
  show = false
  categories = []

  async fetch() {
    const data = await Services.get(`/categories`)
    this.categories = data.data
  }

  goToProducts(id: any) {
    this.$router.push({ path: '/products', query: { category: id } })
  }
}
</script>
