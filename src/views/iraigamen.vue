
<template>
    <v-container class="pa-2">
      <v-row class="pt-12" justify="center" align="center">
        <v-col cols="8">
    <v-img
      src="@/assets/6074_sample.png"
      height="130px"
      width="400px"
    ></v-img>
        </v-col>
        </v-row>
      <v-row>
      <v-col cols="12" md="6">
        <v-textarea 
          outlined
          name="文章記入蘭"
          value="初めまして。紹介希望します。よろしくお願いします。"
          rows="3"
          row-height="15"
        ></v-textarea>
      </v-col>
    </v-row>
<v-row class="pt-8" justify="center" align="center">
  <v-btn  justify="center" align="center">
  送信
  </v-btn>
</v-row>
 </v-container>
</template>

<script>
export default {
  data () {
    return {
      message: 'Hello world!'
    }
  }
  }
</script>

