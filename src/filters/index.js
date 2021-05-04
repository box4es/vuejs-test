import Vue from 'vue';

const filters = {
  formatDate: (value) => {
    const date = new Date(value);
    const day = date.getDate();
    const month = date.getMonth() + 1;

    function addLeadingZero(num) {
      return num < 10
        ? (`0${num}`)
        : num;
    }

    return `${addLeadingZero(day)}.${addLeadingZero(month)}.${date.getFullYear()}`;
  },
  currency: (money) => money && money.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' '),
};

Object
  .entries(filters)
  .forEach(([title, fn]) => Vue.filter(title, fn));

Vue.prototype.$filters = Vue.options.filters;

export default filters;
