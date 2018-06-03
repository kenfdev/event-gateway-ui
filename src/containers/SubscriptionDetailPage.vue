<template>
  <div>
    <v-card>
      <v-toolbar dense>
        <v-toolbar-title>{{ subscription.method }} {{ subscription.path }}</v-toolbar-title>
        <v-spacer></v-spacer>
        <v-menu bottom
                left>
          <v-btn slot="activator"
                 icon>
            <v-icon>more_vert</v-icon>
          </v-btn>
          <v-list>
            <v-list-tile>
              <v-list-tile-title>Delete</v-list-tile-title>
            </v-list-tile>
          </v-list>
        </v-menu>
      </v-toolbar>
      <v-container grid-list-md>
        <v-layout row
                  wrap>
          <v-flex xs12
                  sm6>
            <v-text-field :value="subscription.space"
                          label="Space"
                          readonly></v-text-field>
          </v-flex>
          <v-flex xs12
                  sm6>
            <v-text-field :value="subscription.subscriptionId"
                          label="Subscription ID"
                          readonly></v-text-field>
          </v-flex>
          <v-flex xs12
                  sm6>
            <v-text-field :value="subscription.event"
                          label="Event Type"
                          readonly></v-text-field>
          </v-flex>
          <v-flex xs12
                  sm6>
            <v-text-field :value="subscription.functionId"
                          label="Function ID"
                          readonly></v-text-field>
          </v-flex>
          <v-flex xs12
                  sm6>
            <v-text-field :value="subscription.method"
                          label="Method"
                          readonly></v-text-field>
          </v-flex>
          <v-flex xs12
                  sm6>
            <v-text-field :value="subscription.path"
                          label="Path"
                          readonly></v-text-field>
          </v-flex>
        </v-layout>
      </v-container>

    </v-card>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';

export default {
  computed: mapGetters({
    subscription: 'subscriptions/selectedSubscription'
  }),
  methods: {
    ...mapActions({
      selectSubscription: 'subscriptions/select',
      getSubscription: 'subscriptions/get'
    })
  },
  created() {
    // e.g. user.echo,test,/test
    // FIXME: unfortunately, the vue-router decodes the params which results to a request failure
    const id = this.$route.params.id;
    const cols = id.split(',');
    const fixedId = `${cols[0]},${cols[1]},${encodeURIComponent(cols[2])}`;
    this.selectSubscription({ id: fixedId });
    // TODO: namespace
    this.getSubscription({ namespace: 'default', id: fixedId });
  }
};
</script>

<style>
</style>
