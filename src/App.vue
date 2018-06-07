<template>
  <v-app dark>
    <v-toolbar app style="z-index: 10">
      <v-toolbar-title>Event Gateway</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-items class="hidden-sm-and-down">
        <v-btn flat to="/functions">Functions</v-btn>
        <v-btn flat to="/eventtypes">Event Types</v-btn>
        <v-btn flat to="/subscriptions">Subscriptions</v-btn>
      </v-toolbar-items>
    </v-toolbar>
    <v-content>
      <v-container fluid>
        <router-view></router-view>
        <ConfirmDialog :isShowDialog="isShowConfirmDialog" :title="confirmItem.title" :content="confirmItem.content" @cancel="cancel" @ok="ok"></ConfirmDialog>
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';

import ConfirmDialog from '@/components/ConfirmDialog';
export default {
  name: 'App',
  components: {
    ConfirmDialog
  },
  computed: {
    ...mapGetters({
      isShowConfirmDialog: 'layout/getIsShowConfirmDialog',
      onConfirmAction: 'layout/getOnConfirmAction',
      confirmItem: 'layout/getConfirmItem'
    })
  },
  methods: {
    ...mapActions({
      openConfirmDialog: 'layout/openConfirmDialog',
      closeConfirmDialog: 'layout/closeConfirmDialog'
    }),
    cancel() {
      this.closeConfirmDialog();
    },
    ok() {
      this.onConfirmAction();
      this.closeConfirmDialog();
    }
  }
};
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  /* margin-top: 60px; */
}

div.jsoneditor {
  border: 1px solid #191919;
}

.jsoneditor > .jsoneditor-menu {
  background-color: #191919;
  border-bottom: #191919;
}
</style>
