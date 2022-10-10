<template>
  <v-card :loading="loading" class="mx-auto my-12" max-width="374">
    <template slot="progress">
      <v-progress-linear
        color="deep-purple"
        height="10"
        indeterminate
      ></v-progress-linear>
    </template>
    <v-img height="250" :src="product.image"></v-img>
    <v-card-title>{{ product.title }}</v-card-title>
    <v-card-text>
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
          {{ product?.rating }} ({{ product?.totalViews }})
        </div>
      </v-row>
      <div class="my-4 text-subtitle-1">$ • {{ product.price }}</div>
      <div>
        {{ product.description }}
      </div>
    </v-card-text>
    <v-divider class="mx-4"></v-divider>
    <v-card-title>{{ product.brand }}</v-card-title>
    <v-card-text>
      <v-chip text-color="white" color="green" v-if="!isDetail">{{
        product.category
      }}</v-chip>
    </v-card-text>
    <v-card-actions v-if="isDetail" class="justify-center">
      <v-btn
        dark
        class="pa-4"
        rounded
        color="red"
        @click="deleteProduct(product.id)"
      >
        Remove
      </v-btn>
    </v-card-actions>
  </v-card>
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
