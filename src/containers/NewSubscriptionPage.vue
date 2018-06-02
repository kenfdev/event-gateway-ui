<template>
  <v-form ref="form"
          lazy-validation>
    <v-select v-model="type"
              :items="['sync', 'async']"
              label="Type"
              required></v-select>
    <v-text-field v-model="eventType"
                  label="Event Type"
                  required></v-text-field>
    <v-text-field v-model="functionId"
                  label="Function ID"
                  required></v-text-field>
    <v-text-field v-model="path"
                  label="Path"></v-text-field>
    <v-text-field v-model="method"
                  label="Method"></v-text-field>
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
      form: 'subscriptionForm/getForm'
    })
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
      create: 'subscriptions/create'
    })
  }
};
</script>

<style>
</style>
