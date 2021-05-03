<template>
  <div
    class="data-table__row"
  >
    <div
      v-for="column in columns"
      :key="column.prop"
      :style="{ 'width': column.width }"
      :class="{ 'data-table__column_header' : isTableHeader }"
      class="data-table__column"
    >
      <slot v-bind="{ column }" >
        {{ row[column.prop] }}
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
};
</script>
