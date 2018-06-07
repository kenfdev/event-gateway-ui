<template>
  <v-form ref="form" lazy-validation>
    <v-container grid-list-md>
      <v-layout row wrap>
        <v-flex xs12 sm6>
          <v-select v-model="type" :items="subscriptionTypes" label="Type" required></v-select>
        </v-flex>
        <v-flex xs12 sm6>
          <v-select v-model="eventType" :items="eventTypes" label="Event Type" required></v-select>
        </v-flex>
        <v-flex xs12 sm6>
          <v-select v-model="functionId" :items="functionIds" label="Function Id" required></v-select>
        </v-flex>
        <v-flex xs12 sm6>
          <v-text-field v-model="path" label="Path"></v-text-field>
        </v-flex>
        <v-flex xs12 sm6>
          <v-select v-model="method" :items="httpMethods" label="Method"></v-select>
        </v-flex>
      </v-layout>
    </v-container>
    <v-btn @click="submit">
      submit
    </v-btn>
  </v-form>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';

export default {
  computed: {
    type: {
      get() {
        return this.form.type;
      },
      set(value) {
        this.setType(value);
      }
    },
    eventType: {
      get() {
        return this.form.eventType;
      },
      set(value) {
        this.setEventType(value);
      }
    },
    functionId: {
      get() {
        return this.form.functionId;
      },
      set(value) {
        this.setFunctionId(value);
      }
    },
    path: {
      get() {
        return this.form.path;
      },
      set(value) {
        this.setPath(value);
      }
    },
    method: {
      get() {
        return this.form.method;
      },
      set(value) {
        this.setMethod(value);
      }
    },
    ...mapGetters({
      functionIds: 'functions/allNames',
      eventTypes: 'eventTypes/allNames',
      form: 'subscriptionForm/getForm'
    })
  },
  data() {
    return {
      subscriptionTypes: ['sync', 'async'],
      httpMethods: [
        'GET',
        'HEAD',
        'POST',
        'PUT',
        'DELETE',
        'CONNECT',
        'OPTIONS',
        'TRACE',
        'PATCH'
      ]
    };
  },
  watch: {
    $router: () => {
      this.clearForm().then(() => {
        // TODO: namespace
        this.getAllFunctions({ namespace: 'default' });
        this.getAllEventsTypes({ namespace: 'default' });
      });
    }
  },
  created() {
    this.clearForm().then(() => {
      // TODO: namespace
      this.getAllFunctions({ namespace: 'default' });
      this.getAllEventsTypes({ namespace: 'default' });
    });
  },
  methods: {
    submit() {
      this.create({
        namespace: 'default',
        data: this.form
      });
    },
    ...mapActions({
      setType: 'subscriptionForm/setType',
      setEventType: 'subscriptionForm/setEventType',
      setFunctionId: 'subscriptionForm/setFunctionId',
      setPath: 'subscriptionForm/setPath',
      setMethod: 'subscriptionForm/setMethod',
      create: 'subscriptions/create',
      getAllFunctions: 'functions/getAll',
      getAllEventsTypes: 'eventTypes/getAll',
      clearForm: 'subscriptionForm/clearForm'
    })
  }
};
</script>

<style>
</style>
