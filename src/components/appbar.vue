<template>
    <v-app-bar app clipped-left>
     <v-app-bar-nav-icon @click="drawer=!drawer">
     </v-app-bar-nav-icon>
      <v-spacer></v-spacer>
    CPリスト
      <v-spacer></v-spacer>
    </v-app-bar>
</template>>
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