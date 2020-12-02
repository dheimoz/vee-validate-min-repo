<template>
  <div class="home">
    <h1>SchemaFormWithVee</h1>
    <SchemaFormWithVee :schema="schema" v-model="FormData" />
  </div>
</template>

<script>
import { ref, shallowRef } from "vue";
import VeeValidatePlugin from "@formvuelate/plugin-vee-validate";
import { SchemaFormFactory } from "formvuelate";
const SchemaFormWithVee = SchemaFormFactory([VeeValidatePlugin()]);
// import BaseInput from "@/components/BaseInput";
export default {
  name: "Home",
  components: {
    SchemaFormWithVee,
    // eslint-disable-next-line vue/no-unused-components
    // BaseInput,
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
