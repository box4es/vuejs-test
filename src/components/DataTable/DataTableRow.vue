<template>
  <div
    :class="{ 'data-table__row_header' : isTableHeader }"
    class="data-table__row"
  >
    <div
      v-for="column in columns"
      :key="column.prop"
      :style="{ 'width': column.width }"
      class="data-table__column"
    >
      <slot v-bind="{ column }" >
        <div class="data-table__label">
            {{column.label}}
        </div>
        {{ filter(row[column.prop], column.prop)}}
      </slot>
    </div>
  </div>
</template>

<script>
export default {

  name: 'DataTableRow',

  props: {
    row: {
      type: Object,
      default: () => ({}),
    },
    columns: {
      type: Array,
      required: true,
    },
    isTableHeader: {
      type: Boolean,
      default: false,
    },
  },
  methods: {
    filter(value, type) {
      if (type === 'date') {
        return this.$filters.formatDate(value);
      }
      if (type === 'money') {
        return this.$filters.currency(value);
      }

      return value;
    },
  },
};
</script>
