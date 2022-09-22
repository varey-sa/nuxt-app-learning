<template>
  <v-row justify="center" align="center">
    <div v-for="(user, idx) in userList" :key="idx" class="pa-2" @click="">
      <user-profile :user-list="user"></user-profile>
    </div>
  </v-row>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'
import UserProfile from '~/components/user-profile/UserProfile.vue'
// import axios from '~/config/axios'
import axios from 'axios'
@Component({
  components: { UserProfile },
})
export default class UsersList extends Vue {
  // userList = [
  //   {
  //     id: 1,
  //     image:
  //       'https://media-cdn.tripadvisor.com/media/photo-s/1c/be/0b/cc/a-hip-industrial-vibe.jpg',
  //     brandName: 'The Hill Cafe',
  //     rating: 4.5,
  //     totalViews: 873,
  //     description:
  //       'The Hill Café, located in Historic Church Hill, offers delicious neighborhood comfort foods in a cozy setting. Nightly Blue Plate specials, a broad selection of liquor, beer & wine and friendly service make The Hill Café a great spot to eat, drink and enjoy the neighborly atmosphere',
  //     availableTime: [{}],
  //   },
  //   {
  //     id: 2,
  //     image:
  //       'https://media-cdn.tripadvisor.com/media/photo-s/12/db/18/14/cafe-amazon.jpg',
  //     brandName: 'Amazon Cafe',
  //     rating: 4,
  //     totalViews: 873,
  //     description:
  //       'We would like to express our sincere thanks for your patronage with warm welcome at Cafe Amazon\n' +
  //       'We would like to inform you that Café Amazon has 12 Branch that waiting to serves you as with great taste of coffee and drink',
  //     availableTime: [{}],
  //   },
  //   {
  //     id: 3,
  //     image:
  //       'https://lh5.googleusercontent.com/p/AF1QipMA6Wl5jkbZKYsCRHbzFVJcuZK-cJ7Jb3YH3Rt2=w500-h500-k-no',
  //     brandName: 'Tube Cafe',
  //     rating: 4,
  //     totalViews: 873,
  //     description:
  //       'Tube Coffee is a locally grown coffee chain here in Cambodia serving delicious Fast, Affordable, and Quality coffee and beverages.Serving the people of Cambodia with delicious Fast, Affordable, and Quality coffee and beverages.',
  //     availableTime: [{}],
  //   },
  //   {
  //     id: 4,
  //     image: 'https://images.deliveryhero.io/image/fd-kh/LH/gxk6-hero.jpg',
  //     brandName: 'Brown Cafe',
  //     rating: 5,
  //     totalViews: 873,
  //     description:
  //       'ចាប់ពីថ្ងៃទី ១១ ខែកក្កដា តទៅ បងៗអាចរកទិញកាហ្វេដប ធីអេសប៊្រេសូ និង ប្រោន អាយឡាតេ នៅគ្រប់សាខាប្រោនរ៉ូស្តើរីទាំងអស់នៅភ្នំពេញ និង ប្រោនព្រះនរោត្តម។ ចំណែកឯ ស៊ូម៉ាត្រា ខូលប្រ៊ូ វិញ បងៗអាចរកបាននៅគ្រប់សាខាប្រោនរ៉ូស្តើរីទាំងអស់ទាំងនៅភ្នំពេញ និង សៀមរាប។',
  //     availableTime: [{}],
  //   },
  //   {
  //     id: 5,
  //     image: 'https://www.jongnhams.com/uploads/Mobile%20Coffee/store1.jpg',
  //     brandName: 'Mobile cafe',
  //     rating: 4,
  //     totalViews: 873,
  //     description:
  //       "Ones Cambodia Original Brand, We committed to brew the real delicious coffee & fancy drinks for afford to drink everyday. We're the First Mobile Standard Coffee Package in Cambodia! We committed to serve the Premium Qualitative Coffee & Fancy Drinks to your workplaces & Home.",
  //     availableTime: [{}],
  //   },
  //   {
  //     id: 6,
  //     image:
  //       'https://www.nobicha.co.th/wp-content/uploads/2020/07/%E0%B9%82%E0%B8%99%E0%B8%9A%E0%B8%B4%E0%B8%8A%E0%B8%B2-%E0%B8%AA%E0%B8%B2%E0%B8%82%E0%B8%B2%E0%B9%82%E0%B8%A3%E0%B8%9A%E0%B8%B4%E0%B8%99%E0%B8%AA%E0%B8%B1%E0%B8%99%E0%B9%82%E0%B8%AD%E0%B9%80%E0%B8%8A%E0%B8%B5%E0%B9%88%E0%B8%A2%E0%B8%99-1-960x640.jpg',
  //     brandName: 'Nobicha',
  //     rating: 5,
  //     totalViews: 873,
  //     description:
  //       'Nobi Cha is a bubble tea franchise chain originated in Bangkok, Thailand. Since 2018, Nobi Cha has expanded internationally into the United States, Cambodia, and Malaysia with over 600 locations! With over 80 drinks on the menu, there’s a favorite for everyone.',
  //     availableTime: [{}],
  //   },
  // ]
  userList = []

  async fetch() {
    const data = await axios.get('https://dummyjson.com/products').then(response => response.data)
    this.userList = data.products
    console.warn('hello', data.products)
  }
}
</script>
