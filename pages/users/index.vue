<template>
  <v-row justify="center" align="center">
    <div v-for="(user, idx) in userList" :key="idx" class="pa-2">
      <user-profile :user-list="user"></user-profile>
    </div>
  </v-row>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'
import UserProfile from '~/components/user-profile/UserProfile.vue'
@Component({
  components: { UserProfile },
})

export default class UsersList extends Vue {
  userList = [
    {
      id: 1,
      images: '',
      brandName: 'Hill Cafe',
      rating: 4.5,
      totalViews: 873,
      description: 'Here is the best place in the world',
      availableTime:[{}],
    },
    {
      id: 2,
      images: '',
      brandName: 'Amazon Cafe',
      rating: 4.5,
      totalViews: 873,
      description: 'Here is the best place in the world',
      availableTime:[{}],
    },
    {
      id: 3,
      images: '',
      brandName: 'Tube Cafe',
      rating: 4.5,
      totalViews: 873,
      description: 'Here is the best place in the world',
      availableTime:[{}],
    },
    {
      id: 4,
      images: '',
      brandName: 'K7 Cafe',
      rating: 4.5,
      totalViews: 873,
      description: 'Here is the best place in the world',
      availableTime:[{}],
    },
    {
      id: 5,
      images: '',
      brandName: 'Mobile cafe',
      rating: 4.5,
      totalViews: 873,
      description: 'Here is the best place in the world',
      availableTime:[{}],
    },
    {
      id: 6,
      images: '',
      brandName: 'Nobicha cafe',
      rating: 4.5,
      totalViews: 873,
      description: 'Here is the best place in the world',
      availableTime:[{}],
    },
  ]
}
</script>
