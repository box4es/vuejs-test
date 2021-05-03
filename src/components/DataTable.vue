<template>
  <div class="data-table">
    <div class="data-table__filter">
      <ui-money v-model="moneyFilter" />
    </div>

    <!-- Your component code here -->
    <div class="data-table__container">
      <div class="data-table__row">
        <div
          v-for="column in columns"
          :key="column.prop"
          :style="{ 'width': column.width }"
          class="data-table__column data-table__column_header"
        >
          {{ column.label }}
        </div>
      </div>
      <div
        v-for="row in rowsPage"
        :key="row.id"
        class="data-table__row"
      >
        <div
          v-for="column in columns"
          :key="column.prop"
          :style="{ 'width': column.width }"
          class="data-table__column"
        >
          {{ row[column.prop] }}
        </div>
      </div>
    </div>

    <div class="data-table__paginator">
      <ui-pagination
        v-model="page"
        :pages="pageCount"
      />
    </div>
  </div>
</template>

<script>
export default {

  name: 'DataTable',

  props: {
    rows: {
      type: Array,
      required: true,
    },
    columns: {
      type: Array,
      required: true,
    },
  },

  data: () => ({
    page: 1,
    pageSize: 4,
    moneyFilter: 0,
  }),

  computed: {
    pageCount() {
      return Math.ceil(this.rows.length / this.pageSize);
    },
    rowsPage() {
      const firstRowIndex = (this.page - 1) * this.pageSize;
      const lastRowIndex = this.page * this.pageSize;

      return this.rows.slice(firstRowIndex, lastRowIndex);
    },
  },
};
</script>
