<template>
  <input
    type="text"
    v-model="valueInput"
    @input="onInput"
    class="ui-money"
  />
</template>

<script>
export default {

  name: 'UiMoney',

  props: {
    value: {
      type: Number,
      require: true,
    },
  },

  data() {
    return {
      valueInput: '',
    };
  },

  watch: {
    valueInput(val) {
      this.$emit('input', +this.removeForbiddenSymbols(val));
    },
  },
  methods: {
    onInput() {
      this.$nextTick(() => {
        this.valueInput = this.removeForbiddenSymbols(this.valueInput);
      });
    },
    removeForbiddenSymbols(str) {
      return str.replace(',', '.').replace(/([^\d.])+/, '');
    },
  },
};
</script>
