<template v-slot:extension>
    <v-app-bar app clipped-left
    hide-on-scroll
    scroll-target="#scrolling-techniques-3"
    >
     <v-app-bar-nav-icon @click="drawer=!drawer">
     </v-app-bar-nav-icon>
     <v-spacer />
    CPリスト
     <v-spacer />
      <template v-slot:extension>
        <v-tabs >
          <v-tab class="grow">あなた</v-tab>
          <v-tab class="grow">掲示板</v-tab>
        </v-tabs>
      </template>
 </v-app-bar>
 </template>

 
