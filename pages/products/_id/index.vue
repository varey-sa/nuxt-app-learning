<template>
  <v-row justify="center" align="center">
    <single-product
      :product="product"
      :is-detail="isDetail"
      @delete-product="deleteProduct(product.id)"
    ></single-product>
  </v-row>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'
import SingleProduct from '~/components/products/SingleProduct.vue'
import Services from '~/services'

@Component({
  components: { SingleProduct },
  layout: 'SingleProduct',
})
export default class ProductDetail extends Vue {
  id = this.$route.params.id
  product = {}
  isDetail = true

  async fetch() {
    this.product = await Services.get(`/products/${this.id}`).then(
      (response) => response.data
    )
  }

  async deleteProduct(id: any) {
    await Services.delete(`/products/${id}`).then(() => {
      this.$router.back()
    })
  }
}
</script>
