import Vue from 'vue';

const filters = {
  formatDate: (value) => {
    const date = new Date(value);
    const dateMonth = date.getMonth() + 1;
    const month = dateMonth < 10
      ? (`0${dateMonth}`)
      : dateMonth;

    return `${date.getDate()}.${month}.${date.getFullYear()}`;
  },
  currency: (money) => money && money.toLocaleString('en-US').replace(',', ' '),
};

Object
  .entries(filters)
  .forEach(([title, fn]) => Vue.filter(title, fn));

Vue.prototype.$filters = Vue.options.filters;

export default filters;
