<template>
  <v-row justify="center" align="center">
    <product :product="product"></product>
  </v-row>
</template>

<script lang="ts">
import {Component, Vue} from 'nuxt-property-decorator'
import Product from '~/components/user-profile/Product.vue'
import axios from 'axios'

@Component({
  components: { Product },
  layout: 'SingleProduct',
})
export default class ProductDetail extends Vue {
  id = this.$route.params.id
  product = {}

  async fetch() {
    this.product = await axios
      .get(process.env.API_URL + `/products/${this.id}`)
      .then((response) => response.data)
  }
}
</script>
