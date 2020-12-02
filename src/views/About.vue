<template>
  <div>
    <h1>SchemaForm</h1>
    <SchemaForm :schema="schema" v-model="FormData" />
  </div>
</template>

<script>
import SchemaForm from "formvuelate";
import { ref, shallowRef } from "vue";
export default {
  components: {
    SchemaForm,
  },
  setup() {
    const schema = shallowRef({
      banco: {
        component: "base-text",
        name: "Test",
        label: "A label",
      },
    });
    const FormData = ref({});
    return { schema, FormData };
  },
};
</script>
