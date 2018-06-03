<template>
  <div>
    <v-card v-if="subscription">
      <v-toolbar dense
                 class="elevation-0">
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
          <v-flex xs10
                  sm5>
            <v-text-field :value="subscription.functionId"
                          label="Function ID"
                          readonly></v-text-field>
          </v-flex>
          <v-flex class="pt-3 pr-5"
                  xs2
                  sm1>
            <v-btn flat
                   icon
                   color="primary">
              <v-icon dark>open_in_new</v-icon>
            </v-btn>
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
    <v-card class="mt-4">
      <v-card-title>
        <div>
          <span class="headline">Test</span><br>
        </div>
      </v-card-title>
      <v-container grid-list-md>
        <v-layout row
                  wrap>
          <v-flex offset-xs1
                  xs10>
            <v-json-editor v-model="json"
                           @input="jsonChanged">
            </v-json-editor>
          </v-flex>
          <v-flex xs1></v-flex>
          <v-flex offset-xs9>
            <v-btn color="info">Invoke</v-btn>
          </v-flex>
          <v-flex offset-xs1
                  xs10>
            <v-card class="elevation-0 black white--text">
              <v-card-title>
                <div>
                  <span class="headline">Result</span><br>
                </div>
              </v-card-title>
            </v-card>
          </v-flex>
        </v-layout>
      </v-container>
    </v-card>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
import VJsonEditor from '../components/VJsonEditor';

export default {
  components: {
    VJsonEditor
  },
  computed: {
    ...mapGetters({
      subscription: 'subscriptions/selectedSubscription'
    })
  },
  data() {
    return {
      json: {
        success: true
      }
    };
  },
  methods: {
    ...mapActions({
      selectSubscription: 'subscriptions/select',
      getSubscription: 'subscriptions/get'
    }),
    jsonChanged(value) {
      console.log(JSON.stringify(value));
    }
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
