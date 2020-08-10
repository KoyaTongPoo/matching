<template>
<v-app>
<router-view name="drawer">
  </router-view>
<router-view name="appbar">
</router-view>

    <v-bottom-navigation
    grow
    color="teal"
    app
  >
    <v-btn text to="/tanomu">
      <span>たのむ</span>
      <v-icon>mdi-history</v-icon>
    </v-btn>

    <v-btn text to="/cupid">
      <span>Cupid</span>
      <v-icon>mdi-heart</v-icon>
    </v-btn>

    <v-btn text to="/iraigamen">
      <span>ジャッジ</span>
      <v-icon>mdi-map-marker</v-icon>
   </v-btn>

     <v-btn text to="/">
      <span>その他</span>
      <v-icon>mdi-book</v-icon>
    </v-btn>
  </v-bottom-navigation>
        <v-main>
        <v-container>
          <router-view />
        </v-container>
        </v-main>
  </v-app>
</template>
<script>
export default {
  data(){
    return{
        drawer: null,
    nav_lists:[
          {name: '住んでいる地域',icon: 'mdi-discord'},
          {name: 'その他',icon: 'mdi-bug',lists:['Colors','Content','Display']},
          {name: 'その他２',icon: 'mdi-access-point',lists:['API explorer','Alerts']},
          {name: 'その他３',icon: 'mdi-stack-overflow'},
        ]
    }
  }
  }
</script>