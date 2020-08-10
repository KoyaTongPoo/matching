<template>
   <v-navigation-drawer app v-model="draweabcd" clipped>
     <v-container>
      <v-list-item>
        <v-list-item-content>
          <v-list-item-title class="title blue--text text--darken-2">
          異性リスト
          </v-list-item-title>
        </v-list-item-content>
      </v-list-item>
      <v-divider></v-divider>
      <v-list dense nav>
          <v-list-group 
            v-for="nav_list in nav_lists" 
            :key="nav_list.name" 
            :prepend-icon="nav_list.icon" 
            no-action 
            :append-icon="nav_list.lists ? undefined : ''"> 
              <template v-slot:activator>
                <v-list-item-content>
                  <v-list-item-title>{{ nav_list.name }}</v-list-item-title>
                </v-list-item-content>
              </template>
              <v-list-item v-for="list in nav_list.lists"
              :key="list.name" :to="list.link">
                <v-list-item-content>
                  <v-list-item-title>{{ list }}</v-list-item-title>
                </v-list-item-content>
              </v-list-item>
          </v-list-group>
      </v-list>
    </v-container>
   </v-navigation-drawer>
  
</template>

<script>
export default {
  data(){
    return{
        drawerabcd: null,
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