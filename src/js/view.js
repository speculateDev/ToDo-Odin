export default class View {
  _clear(el) {
    el.innerHTML = '';
  }

  _getToDay() {
    return new Date().toISOString().split('T')[0];
  }
}
