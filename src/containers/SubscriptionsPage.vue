<template>
  <div>
    <v-flex xs6
            offset-xs3>
      <v-card v-if="paths && paths.length > 0">
        <v-list>
          <v-list-group v-for="(path, index) in paths"
                        :key="index"
                        no-action>
            <v-list-tile slot="activator">
              <v-list-tile-content>
                <v-list-tile-title>{{ path.key }}</v-list-tile-title>
              </v-list-tile-content>
            </v-list-tile>
            <v-list-tile v-for="subscription in path.value"
                         :key="subscription.subscriptionId"
                         :to="'/subscriptions/' + subscription.subscriptionId">
              <v-list-tile-content>
                <v-list-tile-title>
                  {{ subscription.method }} {{ subscription.space }}/{{ subscription.functionId }}
                </v-list-tile-title>
              </v-list-tile-content>

            </v-list-tile>
          </v-list-group>
        </v-list>
      </v-card>
      <v-fab-transition>
        <v-btn color="pink"
               dark
               fab
               fixed
               bottom
               right
               to="/subscriptions/new">
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
    paths: 'subscriptions/paths'
  }),
  watch: {
    // call again the method if the route changes
    $route: () => {
      this.getAllSubscriptions({ namespace: 'default' });
    }
  },
  methods: {
    ...mapActions({
      getAllSubscriptions: 'subscriptions/getAll'
    })
  },
  created() {
    // TODO: namespace
    this.getAllSubscriptions({ namespace: 'default' });
  }
};
</script>

<style>
</style>
