/**
 * Created by ZWH on 2017/6/22.
 */
import Calendar from './calendar.vue';
export default Calendar;

if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.component('clock', Clock);
}
