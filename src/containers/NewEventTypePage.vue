<template>
  <v-form ref="form" lazy-validation>
    <v-container grid-list-md>
      <v-layout row wrap>
        <v-flex xs12 sm6>
          <v-text-field v-model="name" label="Event Name" required></v-text-field>
        </v-flex>
        <v-flex xs12 sm6>
          <v-select v-model="authorizerId" :items="['', ...functionIds]" label="Authorizer ID"></v-select>
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
    name: {
      get() {
        return this.form.name;
      },
      set(value) {
        this.setName(value);
      }
    },
    authorizerId: {
      get() {
        return this.form.authorizerId;
      },
      set(value) {
        this.setAuthorizerId(value);
      }
    },
    ...mapGetters({
      functionIds: 'functions/allNames',
      form: 'eventTypeForm/getForm'
    })
  },
  watch: {
    $router: () => {
      this.clearForm().then(() => {
        // TODO: namespace
        this.getAllFunctions({ namespace: 'default' });
      });
    }
  },
  created() {
    this.clearForm().then(() => {
      // TODO: namespace
      this.getAllFunctions({ namespace: 'default' });
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
      setName: 'eventTypeForm/setName',
      setAuthorizerId: 'eventTypeForm/setAuthorizerId',
      clearForm: 'eventTypeForm/clearForm',
      create: 'eventTypes/create',
      getAllFunctions: 'functions/getAll'
    })
  }
};
</script>

<style>
</style>
