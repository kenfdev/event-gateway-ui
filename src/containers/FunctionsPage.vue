<template>
  <div>
    <v-flex xs6
            offset-xs3>
      <v-card>
        <v-list two-line
                subheader>
          <template v-for="(func, index) in functions">
            <v-subheader v-if="func.header"
                         :key="func.header">{{ func.header }}</v-subheader>
            <v-divider v-else-if="func.divider"
                       :inset="func.inset"
                       :key="index"></v-divider>
            <v-list-tile v-else
                         :key="func.title">
              <v-list-tile-action>
                <v-checkbox v-model="func.selected"></v-checkbox>
              </v-list-tile-action>
              <v-list-tile-content>
                <v-list-tile-title v-text="func.space + '/' + func.functionId"></v-list-tile-title>
                <v-list-tile-sub-title v-text="'type: ' + func.type"></v-list-tile-sub-title>
              </v-list-tile-content>
              <v-list-tile-action>
                <v-menu bottom
                        left>
                  <v-btn slot="activator"
                         icon>
                    <v-icon>more_vert</v-icon>
                  </v-btn>
                  <v-list>
                    <v-list-tile :to="'/functions/' + func.functionId + '/edit'">
                      <v-list-tile-title>Edit</v-list-tile-title>
                    </v-list-tile>
                    <v-list-tile @click="onDelete(func.functionId)">
                      <v-list-tile-title>Delete</v-list-tile-title>
                    </v-list-tile>
                  </v-list>
                </v-menu>
              </v-list-tile-action>
            </v-list-tile>
          </template>
        </v-list>
      </v-card>
      <v-fab-transition>
        <v-btn color="pink"
               dark
               fab
               fixed
               bottom
               right
               to="/functions/new">
          <v-icon>add</v-icon>
        </v-btn>
      </v-fab-transition>
    </v-flex>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';

export default {
  computed: mapGetters({
    functions: 'functions/all'
  }),
  methods: {
    ...mapActions({
      getAllFunctions: 'functions/getAll',
      deleteFunction: 'functions/delete',
      openConfirmDialog: 'layout/openConfirmDialog'
    }),
    onDelete(id) {
      this.openConfirmDialog({
        title: 'Confirm',
        content: 'Are you sure you want to delete this function?',
        onConfirmAction: () => {
          // TODO: namespace
          this.deleteFunction({
            namespace: 'default',
            id: id
          });
        }
      });
    }
  },
  created() {
    // TODO: namespace
    this.getAllFunctions({ namespace: 'default' });
  }
};
</script>

<style>
</style>
