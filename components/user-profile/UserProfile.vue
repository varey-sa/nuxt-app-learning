<template>
  <v-card :loading="loading" class="mx-auto my-12" max-width="374">
    <template slot="progress">
      <v-progress-linear
        color="deep-purple"
        height="10"
        indeterminate
      ></v-progress-linear>
    </template>
    <v-img height="250" :src="userList.images[1]"></v-img>
    <v-card-title>{{ userList.title }}</v-card-title>
    <v-card-text>
      <v-row align="center" class="mx-0">
        <v-rating
          :value="userList.rating"
          color="amber"
          dense
          half-increments
          readonly
          size="14"
        ></v-rating>

        <div class="grey--text ms-4">
          {{ userList.rating }} ({{ userList.totalViews }})
        </div>
      </v-row>

      <div class="my-4 text-subtitle-1">$ • {{ userList.price }}</div>

      <div>
        {{ userList.description }}
      </div>
    </v-card-text>

    <v-divider class="mx-4"></v-divider>

    <v-card-title>Tonight's availability</v-card-title>

    <v-card-text>
      <v-chip-group active-class="deep-purple accent-4 white--text" column>
        <v-chip>{{ userList.category }}</v-chip>
      </v-chip-group>
    </v-card-text>
    <v-card-actions>
      <v-btn color="deep-purple lighten-2" text> Reserve </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'nuxt-property-decorator'
@Component
export default class UserProfile extends Vue {
  // Props
  @Prop({ type: Object, default: {} })
  userList!: {}

  // Data
  loading = false
}
</script>
