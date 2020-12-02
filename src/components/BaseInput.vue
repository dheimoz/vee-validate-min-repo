<template>
  <div class="input">
    <label :for="name">{{ label }}</label>
    <input
      v-bind="$attrs"
      :aria-describedby="`${name}-error`"
      :value="value"
      :name="name"
      :id="name"
      v-on="{
        input: (event) => $emit('input', event.target.value),
      }"
    />
    <p :id="name" class="p-invalid">{{ validation.errorMessage }}</p>
  </div>
</template>

<script>
export default {
  name: "BaseInput",
  inheritAttrs: false,
  props: {
    value: {
      type: [String, Number],
    },
    name: {
      type: String,
      required: true,
    },
    label: {
      type: String,
      required: true,
    },
    validation: {
      type: Object,
      default: () => ({}),
    },
  },
};
</script>

<style scoped>
input {
  width: 100%;
  padding: 0.375rem 0.75rem;
  font-size: 1rem;
  line-height: 1.5;
  color: #495057;
  background-color: #fff;
  background-clip: padding-box;
  border: 1px solid #ced4da;
  border-radius: 0.25rem;
  transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
}

input.error {
  border-color: #721c24;
}

input.green {
  border-color: green;
  border-width: 2px;
}
</style>
