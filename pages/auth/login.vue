<!--<template>-->
<!--&lt;!&ndash;  <v-app id="inspire">&ndash;&gt;-->
<!--    <v-main>-->
<!--      <v-container fluid fill-height>-->
<!--        <v-layout align-center justify-center>-->
<!--          <v-flex xs12 sm8 md4>-->
<!--            <v-card class="elevation-12">-->
<!--              <v-toolbar dark color="primary">-->
<!--                <v-toolbar-title>Login form</v-toolbar-title>-->
<!--              </v-toolbar>-->
<!--              <v-card-text>-->
<!--                <v-form>-->
<!--                  <v-text-field-->
<!--                   v-model="user.email"-->
<!--                    label="Email"-->
<!--                    type="text"-->
<!--                  ></v-text-field>-->
<!--                  <v-text-field-->
<!--                    id="password"-->
<!--                    v-model="user.password"-->
<!--                    label="Password"-->
<!--                    type="password"-->
<!--                  ></v-text-field>-->
<!--                </v-form>-->
<!--              </v-card-text>-->
<!--              <v-card-actions>-->
<!--                <v-spacer></v-spacer>-->
<!--                <v-btn color="primary" @click="login">Login</v-btn>-->
<!--              </v-card-actions>-->
<!--            </v-card>-->
<!--          </v-flex>-->
<!--        </v-layout>-->
<!--      </v-container>-->
<!--    </v-main>-->
<!--&lt;!&ndash;  </v-app>&ndash;&gt;-->
<!--</template>-->
<!--<script lang="ts">-->
<!--import { Component, Vue } from 'nuxt-property-decorator'-->
<!--import axios from '~/config/axios'-->

<!--@Component({})-->
<!--export default class UserLogin extends Vue {-->
<!--  user = {-->
<!--    email: '',-->
<!--    password: '',-->
<!--  }-->

<!--  async login() {-->
<!--    console.warn($auth)-->
<!--    await this.$auth.loginWith('laravelSanctum', {-->
<!--      data: {-->
<!--        email: this.user.email,-->
<!--        password: this.user.password,-->
<!--      },-->
<!--    })-->
<!--    this.$router.push('/')-->
<!--  }-->
<!--}-->
<!--</script>-->
