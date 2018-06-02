<template>
  <v-form ref="form"
          lazy-validation>
    <v-text-field v-model="functionId"
                  label="Function ID"
                  required></v-text-field>
    <v-select v-model="type"
              :items="['http']"
              label="Type"
              required></v-select>
    <v-text-field v-model="providerUrl"
                  label="Provider URL"
                  required></v-text-field>

    <v-btn @click="submit">
      submit
    </v-btn>
    <!-- <v-btn @click="clear">clear</v-btn> -->
  </v-form>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';

export default {
  computed: {
    functionId: {
      get() {
        return this.form.functionId;
      },
      set(value) {
        this.setFunctionId(value);
      }
    },
    type: {
      get() {
        return this.form.type;
      },
      set(value) {
        this.setType(value);
      }
    },
    providerUrl: {
      get() {
        return this.form.provider.url;
      },
      set(value) {
        this.setProviderUrl(value);
      }
    },
    ...mapGetters({
      form: 'functionForm/getForm'
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
      setFunctionId: 'functionForm/setFunctionId',
      setType: 'functionForm/setType',
      setProviderUrl: 'functionForm/setProviderUrl',
      create: 'functions/create'
    })
  }
};
</script>

<style>
</style>
