<template>
  <v-card>
    <v-list two-line>
      <template v-for="(func, index) in functions">
        <v-subheader v-if="func.header"
                     :key="func.header">{{ func.header }}</v-subheader>
        <v-divider v-else-if="func.divider"
                   :inset="func.inset"
                   :key="index"></v-divider>
        <v-list-tile v-else
                     :key="func.title"
                     avatar>
          <v-list-tile-avatar>
            <img :src="func.avatar">
          </v-list-tile-avatar>
          <v-list-tile-content>
            <v-list-tile-title v-html="func.title"></v-list-tile-title>
            <v-list-tile-sub-title v-html="func.subtitle"></v-list-tile-sub-title>
          </v-list-tile-content>
        </v-list-tile>
      </template>
    </v-list>
  </v-card>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';

export default {
  computed: mapGetters({
    functions: 'functions/all'
  }),
  methods: mapActions({
    getAllFunctions: 'functions/getAll'
  }),
  created() {
    this.getAllFunctions();
  }
};
</script>

<style>
</style>
