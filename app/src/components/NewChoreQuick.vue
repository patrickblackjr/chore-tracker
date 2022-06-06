<template>
  <div>
    <q-input filled v-model="choreTitle" label="New one-off chore">
      <template v-slot:append>
        <q-btn round dense flat icon="add" />
      </template>
    </q-input>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
const choreTitle = ref('')
</script>
