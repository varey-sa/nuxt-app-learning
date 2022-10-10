<template>
  <div class="products" style="background-color: #F5F5F5">
    <v-responsive
      :aspect-ratio="4"
      :min-height="350"
      :max-height="330"
      class="align-sm-center align-md-center align-lg-center align-xl-center mt-lg-4 mt-xl-0 ma-lg-2 mb-lg-4"
    >
      <v-container class="content-body pa-4">
        <v-row>
          <v-col>
            <v-img height="250" :src="product.image" />
          </v-col>
          <v-col class="pb-0">
            <h3 class="mb-3">
              {{ product.title }}
            </h3>
            <v-row align="center" class="mx-0">
              <v-rating
                :value="product.rating"
                color="amber"
                dense
                half-increments
                readonly
                size="14"
              ></v-rating>
              <div class="grey--text ms-4">
                {{ product?.rating }}
              </div>
            </v-row>
            <h3 class="text-center red--text">
              $ {{ product.price.toLocaleString() }}
            </h3>
          </v-col>
        </v-row>
      </v-container>
    </v-responsive>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Emit, Vue } from 'nuxt-property-decorator'
@Component
export default class Product extends Vue {
  // Props
  @Prop({ type: Object, default: {} })
  product!: {}

  @Prop({ type: Boolean, default: false })
  isDetail!: false

  @Emit()
  deleteProduct() {}
  loading = false
}
</script>
<style scoped>
.products {
  box-shadow: 0 4px 8px 0 #B0BEC5, 0 6px 20px 0 #B0BEC5;
  background-color: white;
  border: 4px solid white;
  border-radius: 5px;
  cursor: pointer;
  width: 100%;
}
</style>
