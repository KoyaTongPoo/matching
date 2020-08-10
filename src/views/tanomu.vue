<template>
<v-container>
<v-row>
    <!-- 一つ目 -->
    <v-col cols="12" sm="6" md="4" lg="3">
   <v-card
    class="mx-auto px-3"
    min-height="150"
    color="#f8f8f8"
    to="/chat"
  >
  <v-row>
        <v-col cols="2">
         <v-avatar
      size="36"
      >
        <v-img src="https://rr.img.naver.jp/mig?src=http%3A%2F%2Fimgcc.naver.jp%2Fkaze%2Fmission%2FUSER%2F20160626%2F12%2F1277332%2F22%2F491x405xb42267cc25f890bfebe5dbd8.jpg%2F300%2F600&twidth=300&theight=600&qlt=80&res_format=jpg&op=r"></v-img>
      </v-avatar>
        </v-col>
        <v-col cols="10" class="pa-2">
        <v-list-item class="pa-0" dense>
      <v-list-item-subtitle  class="pa-0 text-body-1">
        もこ
     </v-list-item-subtitle>
      <v-list-item-subtitle  class="pa-0 text-body-1">
        27歳
      </v-list-item-subtitle>
      <v-list-item-subtitle  class="pa-0 text-body-1">
        東京
      </v-list-item-subtitle>
      <v-list-item-subtitle class="text-end"> 
        1時間
      </v-list-item-subtitle>
        </v-list-item>
      <v-card-title class="text-body-2 pa-0" >
        初めまして。よろしくお願いします😊
        初めまして。よろしくお願いします😊
        暇すぎて
      </v-card-title>
        </v-col>
  </v-row>
  </v-card>
    </v-col>

    <!-- 二つ目 -->
    <v-col cols="12" sm="6" md="4" lg="3">
   <v-card
    class="mx-auto px-3"
    min-height="150"
    color="#f8f8f8"
  >
    <v-card-title class="text-h5">
        依頼中
    </v-card-title>
    <v-card-subtitle class="text-h8 py-0">
        残り5時間32分
    </v-card-subtitle>
        <v-card-subtitle class="py-0">
        <a href="/about">
        依頼をキャンセル
        </a>
        </v-card-subtitle>
     </v-card>
    </v-col>

    <!-- 三つ目 -->
    <v-col cols="12" sm="6" md="4" lg="3">
   <v-card
    class="mx-auto px-3"
    min-height="150"
    color="#f8f8f8"
    @click="dialog=!dialog"
  >
   <v-dialog
      v-model="dialog"
      max-width="290"
    >
      <v-card>
        <v-card-title class="headline">
          依頼先を選びましょう
        </v-card-title>
        <v-card-actions>
          <v-spacer></v-spacer>

          <v-btn
            color="green darken-1"
            text
            to="/cupid"
          >
          キューピット
          </v-btn>

          <v-btn
            color="green darken-1"
            text
            to="/iraigamen"
          >
          掲示板
          </v-btn>

        <v-spacer></v-spacer>
        </v-card-actions>
      </v-card>
    </v-dialog>

     <v-card-title class="text-h5">
依頼をする
     </v-card-title>
     <v-card-subtitle class="py-0">
        キューピットor掲示板
        </v-card-subtitle>
    </v-card>
    </v-col>

        <!-- 四つ目 -->
    <v-col cols="12" sm="6" md="4" lg="3">
   <v-card
    class="mx-auto px-3"
    min-height="150"
    color="#f8f8f8"
  >
     <v-card-title class="text-h5">
利用できません
     </v-card-title>
     <v-card-subtitle class="py-0">
        利用できるようにする
        </v-card-subtitle>
    </v-card>
    </v-col>

</v-row>
</v-container>
</template>

<script>
  export default {
    data () {
      return {
        dialog: false,
        drawer: null,
      }
    },
  }
</script>
