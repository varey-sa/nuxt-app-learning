<template>
  <v-row justify="center" align="center">
    <div v-for="(product, idx) in products" :key="idx" class="pa-2">
      <div @click="goToDetail(product.id)">
        <Product :product="product" />
      </div>
    </div>
  </v-row>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'
import Product from '~/components/user-profile/Product.vue'
import axios from 'axios'
@Component({
  layout: 'SingleProduct',
  components: { Product },
})
export default class ProductList extends Vue {

  products = []

  async fetch() {
    try {
      const products = await axios.get(process.env.API_URL + `/products`)
      this.products = products?.data
    } catch (e) {

    }
  }

  async goToDetail(id: any) {
    await this.$router.push({ path: `/${id}` })
  }
}
</script>
