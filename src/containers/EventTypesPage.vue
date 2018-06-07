<template>
  <div>
    <v-flex xs6 offset-xs3>
      <v-card v-if="eventTypes && eventTypes.length > 0">
        <v-list two-line subheader>
          <template v-for="(eventType) in eventTypes">
            <v-list-tile :key="eventType.name">
              <v-list-tile-content>
                <v-list-tile-title v-text="eventType.space + '/' + eventType.name"></v-list-tile-title>
                <v-list-tile-sub-title v-if="eventType.authorizerId" v-text="'Authorizer ID: ' + eventType.authorizerId"></v-list-tile-sub-title>
              </v-list-tile-content>
              <v-list-tile-action>
                <v-menu bottom left>
                  <v-btn slot="activator" icon>
                    <v-icon>more_vert</v-icon>
                  </v-btn>
                  <v-list>
                    <v-list-tile :to="'/eventtypes/' + eventType.name + '/edit'">
                      <v-list-tile-title>Edit</v-list-tile-title>
                    </v-list-tile>
                    <v-list-tile @click="onDelete(eventType.name)">
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
        <v-btn color="pink" dark fab fixed bottom right to="/eventtypes/new">
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
    eventTypes: 'eventTypes/all'
  }),
  methods: {
    ...mapActions({
      getAllEventTypes: 'eventTypes/getAll',
      deleteEventType: 'eventTypes/delete',
      openConfirmDialog: 'layout/openConfirmDialog'
    }),
    onDelete(id) {
      this.openConfirmDialog({
        title: 'Confirm',
        content: 'Are you sure you want to delete this eventType?',
        onConfirmAction: () => {
          // TODO: namespace
          this.deleteEventType({
            namespace: 'default',
            id: id
          });
        }
      });
    }
  },
  created() {
    // TODO: namespace
    this.getAllEventTypes({ namespace: 'default' });
  }
};
</script>

<style>
</style>
