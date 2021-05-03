<template>
  <div class="data-table">
    <div class="data-table__filter">
      <ui-money v-model="moneyFilter" />
    </div>

    <!-- Your component code here -->
    <div class="data-table__container">
      <data-table-row
        v-slot="{ column }"
        :columns="columns"
        isTableHeader
      >
        {{ column.label }}
      </data-table-row>
      <data-table-row
        v-for="row in rowsPage"
        :key="row.id"
        :row="row"
        :columns="columns"
      />
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
import DataTableRow from './DataTableRow.vue';

export default {

  name: 'DataTable',

  components: { DataTableRow },

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
