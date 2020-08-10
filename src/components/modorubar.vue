<template>
  <v-app-bar app>
    <v-btn text to="/tanomu">
    <v-icon color="primary"  left>
      mdi-arrow-left
    </v-icon>
    </v-btn>
    {{ message }}
    <v-spacer />
  </v-app-bar>
</template>

<script>
export default {
  data () {
    return {
      message: '送信画面'
    }
  }
  }
</script>

