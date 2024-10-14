export default class View {
  _clear(el = this._parentEl) {
    el.innerHTML = '';
  }

  _getToDay() {
    return new Date().toISOString().split('T')[0];
  }
}
