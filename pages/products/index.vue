<template>
  <v-container class="my-contents" grid-list-md>
    <v-layout row wrap v-if="products.length">
      <v-flex
        v-for="(product, idx) in products"
        :key="idx"
        xs12
        sm12
        md6
        lg4
        xl4
        @click="goToDetail(product.id)"
      >
        <Product :product="product" />
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'
import Product from '~/components/products/Product.vue'
import Services from '~/services'

@Component({
  layout: 'SingleProduct',
  components: { Product },
})
export default class ProductList extends Vue {
  products = []
  categoryId: any = +this.$route.query.category
  categoryName: any = {}

  async fetch() {
    try {
      const categoryProducts = await Services.get(
        `/products/category/${this.categoryId}`
      )
      this.products = categoryProducts.data.products
      this.categoryName = categoryProducts.data.name
      this.products.forEach((product) => {
        Object.assign(product, {
          category: this.categoryName,
        })
      })
    } catch (e) {}
  }

  async goToDetail(id: any) {
    await this.$router.push({
      path: `/products/${id}`,
      query: {
        category: this.categoryId,
      },
    })
  }
}
</script>
