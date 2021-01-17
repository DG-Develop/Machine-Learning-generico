<template>
  <v-app>
    <v-app-bar color="indigo" dark fixed app>
      <v-toolbar-title>Memes Factory</v-toolbar-title>
    </v-app-bar>
    <v-content>
      <v-container fluid>
        <v-layout>
          <router-view />
        </v-layout>
      </v-container>
    </v-content>
  </v-app>
</template>

<script>

export default {
  name: 'App',
  data: () => ({
    //
  }),
};
</script>
