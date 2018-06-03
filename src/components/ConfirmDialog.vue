<template>
  <v-layout row
            justify-center>
    <v-dialog :value="isShowDialog"
              max-width="290">
      <v-card>
        <v-card-title class="headline">{{ title }}</v-card-title>
        <v-card-text>{{ content }}</v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="green darken-1"
                 flat="flat"
                 @click.native="cancel">Cancel</v-btn>
          <v-btn color="green darken-1"
                 flat="flat"
                 @click.native="ok">OK</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-layout>
</template>

<script>
export default {
  props: ['title', 'content', 'isShowDialog'],
  methods: {
    cancel() {
      this.$emit('cancel');
    },
    ok() {
      this.$emit('ok');
    }
  }
};
</script>

<style>
</style>
