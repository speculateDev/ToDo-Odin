/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/css/style.css":
/*!*****************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/css/style.css ***!
  \*****************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css2?family=Nunito+Sans:ital,opsz,wght@0,6..12,200..1000;1,6..12,200..1000&display=swap);"]);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `*,
*::after,
*::before {
  padding: 0;
  margin: 0;
  box-sizing: inherit; }

html {
  font-size: 62.5%;
  box-sizing: border-box;
  user-select: none; }

body {
  font-family: 'Nunito Sans', sans-serif;
  min-height: 100vh;
  color: #fff;
  position: relative; }

.container {
  display: flex;
  min-height: 100vh; }

:root {
  color-scheme: dark; }

.toggle-box {
  cursor: pointer;
  position: relative;
  text-align: end; }

.toggle__icon {
  margin-left: auto;
  height: 3.2rem;
  width: 3.2rem;
  border-radius: 10px;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.2s; }
  .toggle__icon svg {
    height: 2rem;
    width: 2rem;
    fill: #fff; }
  .toggle__icon:hover {
    background-color: #182123; }
  .toggle__icon:active svg {
    transform: scale(0.95); }

.sidebar {
  overflow: hidden;
  border-right: 1px solid #444;
  background-color: #343d3f;
  flex: 0 0 18%;
  padding: 2rem 1rem;
  position: relative;
  transition: all 0.1s; }
  .sidebar__item {
    display: flex;
    align-items: center;
    gap: 0.8rem;
    cursor: pointer;
    padding: 0.5rem;
    border-radius: 6px;
    transition: all 0.1s ease; }
    .sidebar__item:hover {
      background-color: #262626; }
  .sidebar.toggle {
    flex: 0 0 0;
    width: 0;
    padding: 0; }
    .sidebar.toggle .toggle__icon {
      position: fixed;
      top: 1rem;
      left: 0.5rem; }
  .sidebar__item-active, .sidebar__item-active:hover {
    background-color: rgba(49, 109, 202, 0.2); }
  .sidebar__item-active .sidebar__icon {
    fill: #316dca; }
  .sidebar__item-active .sidebar__name {
    color: #316dca; }
  .sidebar__icon {
    height: 2.2rem;
    width: 2.2rem;
    fill: #fff; }
  .sidebar__name {
    font-size: 1.5rem;
    font-weight: 600; }

.projects__title {
  padding-left: 0.5rem;
  display: flex;
  align-items: center;
  margin-bottom: 1.6rem;
  justify-content: space-between; }

.projects__list {
  list-style: none; }

.projects__item {
  display: flex;
  align-items: center;
  gap: 0.8rem;
  cursor: pointer;
  border-radius: 6px;
  padding: 0.5rem;
  transition: all 0.1s ease; }
  .projects__item:hover {
    background-color: #262626; }

.projects__name {
  font-size: 1.5rem;
  font-weight: 500; }

.projects__icon {
  height: 2rem;
  width: 2rem;
  fill: #fff; }

.projects__item-add {
  margin-top: 2rem; }

.projects__name-add {
  font-size: 1.6rem;
  font-weight: 700; }

.projects__icon-add {
  height: 2.5rem;
  width: 2.5rem;
  fill: #fff; }

#icon-add {
  height: 3rem;
  width: 3rem;
  fill: #316dca; }

#sidebar-item-add {
  color: #316dca;
  transition: all 0.2s; }
  #sidebar-item-add .sidebar__name {
    font-weight: 800; }
  #sidebar-item-add:active {
    transform: scale(0.96); }

.mb-sm {
  margin-bottom: 1rem; }

.mb-md {
  margin-bottom: 3rem; }

.ml-auto {
  margin-left: auto; }

.btn {
  padding: 0.7rem 1.2rem;
  border-radius: 5px;
  border: none;
  color: #fff;
  font-weight: 600;
  cursor: pointer; }
  .btn__add {
    background-color: #316dca;
    margin-left: 0.7rem; }
  .btn__cancel {
    background-color: #343d3f; }
  .btn:hover:not(:disabled) {
    filter: brightness(1.2); }
  .btn__edit {
    position: absolute;
    border: none;
    background: none;
    right: 3rem;
    cursor: pointer;
    top: 50%;
    transform: translateY(-50%);
    outline: none; }
    .btn__edit svg {
      fill: rgba(170, 170, 170, 0.8);
      opacity: 0.3;
      height: 2rem;
      width: 2rem;
      transition: all 0.2s ease; }
    .btn__edit:hover svg {
      opacity: 1; }
    .btn__edit:active svg {
      transform: scale(0.9); }

button:disabled {
  opacity: 0.3;
  cursor: default; }

#icon-delete {
  fill: #aaa;
  opacity: 0.3;
  height: 1.5rem;
  width: 1.5rem;
  transition: all 0.2s; }
  #icon-delete:hover {
    transform: scale(1.1);
    opacity: 1;
    fill: #c74746; }

#add-project-icon {
  height: 3rem;
  width: 3rem;
  fill: #aaa;
  cursor: pointer;
  transition: all 0.2s; }
  #add-project-icon:hover {
    fill: #316dca; }
  #add-project-icon:active {
    transform: scale(1.2); }

.reset__icon {
  height: 2.5rem;
  width: 2.5rem;
  position: absolute;
  bottom: 1rem;
  left: 1rem;
  fill: rgba(170, 170, 170, 0.2);
  cursor: pointer;
  transition: all 0.2s; }
  .reset__icon:hover {
    fill: crimson; }

.modal {
  height: 100%;
  width: 100%;
  backdrop-filter: blur(10px);
  position: fixed;
  top: 0;
  left: 0;
  opacity: 0;
  visibility: hidden;
  transition: all 0.3s; }
  .modal__content {
    min-width: 40%;
    border: 1px solid rgba(170, 170, 170, 0.6);
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    padding: 2rem;
    background-color: #182123;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%) scale(0);
    opacity: 0;
    z-index: 2;
    transition: all 0.6s ease; }
  .modal.active {
    opacity: 1;
    visibility: visible; }
    .modal.active .modal__content {
      transform: translate(-50%, -50%) scale(1);
      opacity: 1; }
  .modal__overlay {
    position: fixed;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%; }

.tasks {
  padding: 4rem 8rem;
  background-color: #182123;
  flex: 1; }
  .tasks__title {
    font-size: 3rem;
    font-weight: 700; }
  .tasks__subtitle {
    font-size: 1.3rem;
    color: #aaa;
    font-weight: 300;
    text-transform: lowercase;
    fill: #aaa; }
    .tasks__subtitle svg {
      height: 1.2rem;
      width: 1.2rem; }
  .tasks__list {
    list-style: none; }
  .tasks__item {
    position: relative;
    display: grid;
    column-gap: 1rem;
    grid-template-columns: min-content auto;
    padding: 2rem 0; }
    .tasks__item:not(:last-child) {
      border-bottom: 1px solid rgba(52, 61, 63, 0.5); }
  .tasks__priority {
    margin-top: 3px;
    grid-row: 1 / span 2;
    height: 2rem;
    width: 2rem;
    border-radius: 10rem;
    outline: none;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    overflow: hidden; }
    .tasks__priority-0 {
      border: 2px solid #343d3f;
      fill: #343d3f;
      background: rgba(52, 61, 63, 0.2); }
    .tasks__priority-1 {
      border: 2px solid #c74746;
      fill: #c74746;
      background: rgba(199, 71, 70, 0.2); }
    .tasks__priority-2 {
      border: 2px solid #316dca;
      fill: #316dca;
      background: rgba(49, 109, 202, 0.2); }
    .tasks__priority-3 {
      border: 2px solid #a66917;
      fill: #316dca;
      background: rgba(166, 105, 23, 0.2); }
  .tasks__priority-icon {
    fill: none;
    filter: brightness(1.4);
    height: 2rem;
    width: 2rem; }
  .tasks__priority-0:hover .tasks__priority-icon {
    fill: #555; }
  .tasks__priority-1:hover .tasks__priority-icon {
    fill: #c74746; }
  .tasks__priority-2:hover .tasks__priority-icon {
    fill: #316dca; }
  .tasks__priority-3:hover .tasks__priority-icon {
    fill: #a66917; }
  .tasks__name {
    font-size: 1.9rem;
    font-weight: 700; }
  .tasks__due-date {
    display: flex;
    align-items: center;
    gap: 0.5rem; }
  .tasks__date, .tasks__project-name {
    font-size: 1.2rem;
    color: #aaa; }
  .tasks__icon {
    fill: #aaa;
    height: 1.4rem;
    width: 1.4rem; }
  .tasks__description {
    font-size: 1.1rem;
    color: #aaa; }
  .tasks__data {
    display: flex;
    gap: 1rem;
    align-items: center; }
  .tasks__project {
    display: flex;
    align-items: center;
    gap: 0.5rem; }
  .tasks__inputs-box {
    border: 1px solid rgba(170, 170, 170, 0.2);
    grid-column: 1 / -1;
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    padding: 1.5rem 1rem; }
  .tasks__input {
    outline: none;
    background: none;
    border: none;
    color: #fff; }
    .tasks__input[name='name'] {
      font-size: 1.6rem;
      font-weight: 700; }
  .tasks__btns-box {
    margin-top: 1rem;
    display: flex;
    align-items: center;
    gap: 1rem; }
    .tasks__btns-box:last-child {
      padding-top: 1.8rem;
      border-top: 1px solid rgba(170, 170, 170, 0.2); }
  .tasks__icon-plus-box {
    border-radius: 10rem;
    height: 2.2rem;
    width: 2.2rem;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: all 0.2s; }
    .tasks__icon-plus-box + span {
      font-size: 1.4rem;
      font-weight: 600;
      color: #777;
      transition: all 0.2s; }
  .tasks__icon-plus {
    height: 2rem;
    width: 2rem;
    fill: #316dca;
    transition: all 0.2s; }
  .tasks__item-add-task {
    grid-column: 1 / -1;
    display: flex;
    gap: 0.5rem;
    align-items: center;
    cursor: pointer; }
    .tasks__item-add-task:hover .tasks__icon-plus {
      fill: #fff; }
    .tasks__item-add-task:hover .tasks__icon-plus-box {
      background-color: rgba(49, 109, 202, 0.7); }
    .tasks__item-add-task:hover span {
      color: #316dca; }

input[type='date'] {
  color-scheme: dark;
  font-size: 1.4rem;
  background-color: #182123;
  font-family: inherit;
  border: 1px solid rgba(170, 170, 170, 0.2);
  outline: none;
  border-radius: 5px;
  padding: 0.5rem; }

select {
  background-color: #182123;
  outline: none;
  padding: 0.8rem;
  color: #fff;
  font-weight: 500;
  border-radius: 5px;
  border: 1px solid rgba(170, 170, 170, 0.2);
  cursor: pointer; }
`, "",{"version":3,"sources":["webpack://./src/css/style.css"],"names":[],"mappings":"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","sourcesContent":["@import url(\"https://fonts.googleapis.com/css2?family=Nunito+Sans:ital,opsz,wght@0,6..12,200..1000;1,6..12,200..1000&display=swap\");\n*,\n*::after,\n*::before {\n  padding: 0;\n  margin: 0;\n  box-sizing: inherit; }\n\nhtml {\n  font-size: 62.5%;\n  box-sizing: border-box;\n  user-select: none; }\n\nbody {\n  font-family: 'Nunito Sans', sans-serif;\n  min-height: 100vh;\n  color: #fff;\n  position: relative; }\n\n.container {\n  display: flex;\n  min-height: 100vh; }\n\n:root {\n  color-scheme: dark; }\n\n.toggle-box {\n  cursor: pointer;\n  position: relative;\n  text-align: end; }\n\n.toggle__icon {\n  margin-left: auto;\n  height: 3.2rem;\n  width: 3.2rem;\n  border-radius: 10px;\n  position: relative;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  transition: all 0.2s; }\n  .toggle__icon svg {\n    height: 2rem;\n    width: 2rem;\n    fill: #fff; }\n  .toggle__icon:hover {\n    background-color: #182123; }\n  .toggle__icon:active svg {\n    transform: scale(0.95); }\n\n.sidebar {\n  overflow: hidden;\n  border-right: 1px solid #444;\n  background-color: #343d3f;\n  flex: 0 0 18%;\n  padding: 2rem 1rem;\n  position: relative;\n  transition: all 0.1s; }\n  .sidebar__item {\n    display: flex;\n    align-items: center;\n    gap: 0.8rem;\n    cursor: pointer;\n    padding: 0.5rem;\n    border-radius: 6px;\n    transition: all 0.1s ease; }\n    .sidebar__item:hover {\n      background-color: #262626; }\n  .sidebar.toggle {\n    flex: 0 0 0;\n    width: 0;\n    padding: 0; }\n    .sidebar.toggle .toggle__icon {\n      position: fixed;\n      top: 1rem;\n      left: 0.5rem; }\n  .sidebar__item-active, .sidebar__item-active:hover {\n    background-color: rgba(49, 109, 202, 0.2); }\n  .sidebar__item-active .sidebar__icon {\n    fill: #316dca; }\n  .sidebar__item-active .sidebar__name {\n    color: #316dca; }\n  .sidebar__icon {\n    height: 2.2rem;\n    width: 2.2rem;\n    fill: #fff; }\n  .sidebar__name {\n    font-size: 1.5rem;\n    font-weight: 600; }\n\n.projects__title {\n  padding-left: 0.5rem;\n  display: flex;\n  align-items: center;\n  margin-bottom: 1.6rem;\n  justify-content: space-between; }\n\n.projects__list {\n  list-style: none; }\n\n.projects__item {\n  display: flex;\n  align-items: center;\n  gap: 0.8rem;\n  cursor: pointer;\n  border-radius: 6px;\n  padding: 0.5rem;\n  transition: all 0.1s ease; }\n  .projects__item:hover {\n    background-color: #262626; }\n\n.projects__name {\n  font-size: 1.5rem;\n  font-weight: 500; }\n\n.projects__icon {\n  height: 2rem;\n  width: 2rem;\n  fill: #fff; }\n\n.projects__item-add {\n  margin-top: 2rem; }\n\n.projects__name-add {\n  font-size: 1.6rem;\n  font-weight: 700; }\n\n.projects__icon-add {\n  height: 2.5rem;\n  width: 2.5rem;\n  fill: #fff; }\n\n#icon-add {\n  height: 3rem;\n  width: 3rem;\n  fill: #316dca; }\n\n#sidebar-item-add {\n  color: #316dca;\n  transition: all 0.2s; }\n  #sidebar-item-add .sidebar__name {\n    font-weight: 800; }\n  #sidebar-item-add:active {\n    transform: scale(0.96); }\n\n.mb-sm {\n  margin-bottom: 1rem; }\n\n.mb-md {\n  margin-bottom: 3rem; }\n\n.ml-auto {\n  margin-left: auto; }\n\n.btn {\n  padding: 0.7rem 1.2rem;\n  border-radius: 5px;\n  border: none;\n  color: #fff;\n  font-weight: 600;\n  cursor: pointer; }\n  .btn__add {\n    background-color: #316dca;\n    margin-left: 0.7rem; }\n  .btn__cancel {\n    background-color: #343d3f; }\n  .btn:hover:not(:disabled) {\n    filter: brightness(1.2); }\n  .btn__edit {\n    position: absolute;\n    border: none;\n    background: none;\n    right: 3rem;\n    cursor: pointer;\n    top: 50%;\n    transform: translateY(-50%);\n    outline: none; }\n    .btn__edit svg {\n      fill: rgba(170, 170, 170, 0.8);\n      opacity: 0.3;\n      height: 2rem;\n      width: 2rem;\n      transition: all 0.2s ease; }\n    .btn__edit:hover svg {\n      opacity: 1; }\n    .btn__edit:active svg {\n      transform: scale(0.9); }\n\nbutton:disabled {\n  opacity: 0.3;\n  cursor: default; }\n\n#icon-delete {\n  fill: #aaa;\n  opacity: 0.3;\n  height: 1.5rem;\n  width: 1.5rem;\n  transition: all 0.2s; }\n  #icon-delete:hover {\n    transform: scale(1.1);\n    opacity: 1;\n    fill: #c74746; }\n\n#add-project-icon {\n  height: 3rem;\n  width: 3rem;\n  fill: #aaa;\n  cursor: pointer;\n  transition: all 0.2s; }\n  #add-project-icon:hover {\n    fill: #316dca; }\n  #add-project-icon:active {\n    transform: scale(1.2); }\n\n.reset__icon {\n  height: 2.5rem;\n  width: 2.5rem;\n  position: absolute;\n  bottom: 1rem;\n  left: 1rem;\n  fill: rgba(170, 170, 170, 0.2);\n  cursor: pointer;\n  transition: all 0.2s; }\n  .reset__icon:hover {\n    fill: crimson; }\n\n.modal {\n  height: 100%;\n  width: 100%;\n  backdrop-filter: blur(10px);\n  position: fixed;\n  top: 0;\n  left: 0;\n  opacity: 0;\n  visibility: hidden;\n  transition: all 0.3s; }\n  .modal__content {\n    min-width: 40%;\n    border: 1px solid rgba(170, 170, 170, 0.6);\n    border-radius: 10px;\n    display: flex;\n    flex-direction: column;\n    padding: 2rem;\n    background-color: #182123;\n    position: absolute;\n    top: 50%;\n    left: 50%;\n    transform: translate(-50%, -50%) scale(0);\n    opacity: 0;\n    z-index: 2;\n    transition: all 0.6s ease; }\n  .modal.active {\n    opacity: 1;\n    visibility: visible; }\n    .modal.active .modal__content {\n      transform: translate(-50%, -50%) scale(1);\n      opacity: 1; }\n  .modal__overlay {\n    position: fixed;\n    top: 0;\n    left: 0;\n    height: 100%;\n    width: 100%; }\n\n.tasks {\n  padding: 4rem 8rem;\n  background-color: #182123;\n  flex: 1; }\n  .tasks__title {\n    font-size: 3rem;\n    font-weight: 700; }\n  .tasks__subtitle {\n    font-size: 1.3rem;\n    color: #aaa;\n    font-weight: 300;\n    text-transform: lowercase;\n    fill: #aaa; }\n    .tasks__subtitle svg {\n      height: 1.2rem;\n      width: 1.2rem; }\n  .tasks__list {\n    list-style: none; }\n  .tasks__item {\n    position: relative;\n    display: grid;\n    column-gap: 1rem;\n    grid-template-columns: min-content auto;\n    padding: 2rem 0; }\n    .tasks__item:not(:last-child) {\n      border-bottom: 1px solid rgba(52, 61, 63, 0.5); }\n  .tasks__priority {\n    margin-top: 3px;\n    grid-row: 1 / span 2;\n    height: 2rem;\n    width: 2rem;\n    border-radius: 10rem;\n    outline: none;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    cursor: pointer;\n    overflow: hidden; }\n    .tasks__priority-0 {\n      border: 2px solid #343d3f;\n      fill: #343d3f;\n      background: rgba(52, 61, 63, 0.2); }\n    .tasks__priority-1 {\n      border: 2px solid #c74746;\n      fill: #c74746;\n      background: rgba(199, 71, 70, 0.2); }\n    .tasks__priority-2 {\n      border: 2px solid #316dca;\n      fill: #316dca;\n      background: rgba(49, 109, 202, 0.2); }\n    .tasks__priority-3 {\n      border: 2px solid #a66917;\n      fill: #316dca;\n      background: rgba(166, 105, 23, 0.2); }\n  .tasks__priority-icon {\n    fill: none;\n    filter: brightness(1.4);\n    height: 2rem;\n    width: 2rem; }\n  .tasks__priority-0:hover .tasks__priority-icon {\n    fill: #555; }\n  .tasks__priority-1:hover .tasks__priority-icon {\n    fill: #c74746; }\n  .tasks__priority-2:hover .tasks__priority-icon {\n    fill: #316dca; }\n  .tasks__priority-3:hover .tasks__priority-icon {\n    fill: #a66917; }\n  .tasks__name {\n    font-size: 1.9rem;\n    font-weight: 700; }\n  .tasks__due-date {\n    display: flex;\n    align-items: center;\n    gap: 0.5rem; }\n  .tasks__date, .tasks__project-name {\n    font-size: 1.2rem;\n    color: #aaa; }\n  .tasks__icon {\n    fill: #aaa;\n    height: 1.4rem;\n    width: 1.4rem; }\n  .tasks__description {\n    font-size: 1.1rem;\n    color: #aaa; }\n  .tasks__data {\n    display: flex;\n    gap: 1rem;\n    align-items: center; }\n  .tasks__project {\n    display: flex;\n    align-items: center;\n    gap: 0.5rem; }\n  .tasks__inputs-box {\n    border: 1px solid rgba(170, 170, 170, 0.2);\n    grid-column: 1 / -1;\n    border-radius: 10px;\n    display: flex;\n    flex-direction: column;\n    padding: 1.5rem 1rem; }\n  .tasks__input {\n    outline: none;\n    background: none;\n    border: none;\n    color: #fff; }\n    .tasks__input[name='name'] {\n      font-size: 1.6rem;\n      font-weight: 700; }\n  .tasks__btns-box {\n    margin-top: 1rem;\n    display: flex;\n    align-items: center;\n    gap: 1rem; }\n    .tasks__btns-box:last-child {\n      padding-top: 1.8rem;\n      border-top: 1px solid rgba(170, 170, 170, 0.2); }\n  .tasks__icon-plus-box {\n    border-radius: 10rem;\n    height: 2.2rem;\n    width: 2.2rem;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    transition: all 0.2s; }\n    .tasks__icon-plus-box + span {\n      font-size: 1.4rem;\n      font-weight: 600;\n      color: #777;\n      transition: all 0.2s; }\n  .tasks__icon-plus {\n    height: 2rem;\n    width: 2rem;\n    fill: #316dca;\n    transition: all 0.2s; }\n  .tasks__item-add-task {\n    grid-column: 1 / -1;\n    display: flex;\n    gap: 0.5rem;\n    align-items: center;\n    cursor: pointer; }\n    .tasks__item-add-task:hover .tasks__icon-plus {\n      fill: #fff; }\n    .tasks__item-add-task:hover .tasks__icon-plus-box {\n      background-color: rgba(49, 109, 202, 0.7); }\n    .tasks__item-add-task:hover span {\n      color: #316dca; }\n\ninput[type='date'] {\n  color-scheme: dark;\n  font-size: 1.4rem;\n  background-color: #182123;\n  font-family: inherit;\n  border: 1px solid rgba(170, 170, 170, 0.2);\n  outline: none;\n  border-radius: 5px;\n  padding: 0.5rem; }\n\nselect {\n  background-color: #182123;\n  outline: none;\n  padding: 0.8rem;\n  color: #fff;\n  font-weight: 500;\n  border-radius: 5px;\n  border: 1px solid rgba(170, 170, 170, 0.2);\n  cursor: pointer; }\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/css/style.css":
/*!***************************!*\
  !*** ./src/css/style.css ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/css/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());
options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }
  return result;
}
function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }
    memo[target] = styleTarget;
  }
  return memo[target];
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ }),

/***/ "./src/js/contentView.js":
/*!*******************************!*\
  !*** ./src/js/contentView.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _view__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./view */ "./src/js/view.js");
/* harmony import */ var _img_icons_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../img/icons.svg */ "./src/img/icons.svg");
/* harmony import */ var _model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./model */ "./src/js/model.js");
/* harmony import */ var _modalView__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modalView */ "./src/js/modalView.js");





class ContentView extends _view__WEBPACK_IMPORTED_MODULE_0__["default"] {
  _tasksEl;
  state;

  constructor() {
    super();
    this.state = { title: 'inbox' };
    this._tasksEl = document.querySelector('.tasks__list');
    this._tasksEl.addEventListener('click', this.handleTaskClicks.bind(this));
  }

  render() {
    const { title } = this.state;

    const tasks = _model__WEBPACK_IMPORTED_MODULE_2__.tasksFilter(title);
    this._clear(this._tasksEl);

    let markup = `<h1 class="tasks__title">${
      title.charAt(0).toUpperCase() + title.slice(1)
    }</h1>`;
    markup += this._generateMarkup(tasks);

    this._tasksEl.insertAdjacentHTML('afterbegin', markup);
  }

  _generateMarkup(tasks) {
    return `
      <div class="tasks__subtitle mb-md">
          <svg>
            <use href="${_img_icons_svg__WEBPACK_IMPORTED_MODULE_1__}#icon-check-full"></use>
          </svg>
          <span>${tasks.length} tasks</span>
        </div>

      ${this.renderTasks(tasks)} 
      ${
        this.state.title === 'overdue'
          ? ''
          : `      <li class="tasks__item">
            <div class="tasks__item-add-task">
            <div class="tasks__icon-plus-box">
            <svg class="tasks__icon-plus">
            <use href="${_img_icons_svg__WEBPACK_IMPORTED_MODULE_1__}#icon-plus+"></use>
            </svg>
            </div>
            
            <span>Add task</span>
            </div>
          </li>`
      }
 
    `;
  }

  renderTasks(tasks) {
    return tasks
      .map((task) => {
        return `
        <li class="tasks__item" data-id="${task.id}">
      <button class="btn__edit">
      <svg>
        <use href="${_img_icons_svg__WEBPACK_IMPORTED_MODULE_1__}#icon-edit"></use>
      </svg>
      </button>
      <button class="tasks__priority tasks__priority-${task.priority ? task.priority : 0}">
      <svg class="tasks__priority-icon">
        <use href="${_img_icons_svg__WEBPACK_IMPORTED_MODULE_1__}#icon-check"></use>
      </svg>
      </button>
      <h3 class="tasks__name">${task.name}</h3>
      <div>
        ${task.description ? `<p class="tasks__description">${task.description}</p>` : ''}
        <div class="tasks__data">
          <div class="tasks__due-date">
            <svg class="tasks__icon">
              <use href="${_img_icons_svg__WEBPACK_IMPORTED_MODULE_1__}#icon-calendar"></use>
            </svg>
            <span class="tasks__date">${this.formatDate(task)}</span>
          </div>

          ${
            task.project !== 'inbox'
              ? `          <div class="tasks__project">
            <svg class="tasks__icon">
             <use href="${_img_icons_svg__WEBPACK_IMPORTED_MODULE_1__}#icon-folder"></use>
            </svg>
            <span class="tasks__project-name">${task.project}</span>
          </div>
`
              : ''
          }
          </div>
      </div>
    </li>


      `;
      })
      .join('');
  }

  formatDate(task) {
    const date = new Date(task.date);
    const weekDay = date.toLocaleString('en', { weekday: 'short' });
    const month = date.toLocaleString('en', { month: 'short' });
    const day = '' + date.getDate();

    return `${weekDay}, ${month} ${day.padStart(2, '0')}`;
  }

  handleTaskClicks(e) {
    const editBtn = e.target.closest('.btn__edit');
    const priorityBtn = e.target.closest('.tasks__priority');
    const addTaskBtn = e.target.closest('.tasks__item-add-task');

    // Edit Handling
    if (editBtn) {
      // Select parent task
      const taskEl = editBtn.closest('.tasks__item');

      // Empty the el
      this._clear(taskEl);

      // Get task data
      const id = +taskEl.dataset.id;
      const index = _model__WEBPACK_IMPORTED_MODULE_2__.tasks.findIndex((t) => t.id === id);

      const task = _model__WEBPACK_IMPORTED_MODULE_2__.tasks[index];
      if (!task) return;
      taskEl.insertAdjacentHTML('afterbegin', this.itemInputs(task));

      // Trigger eventListeners
      const cancelBtn = taskEl.querySelector('.btn__cancel');
      const submitBtn = taskEl.querySelector('.btn__add');
      cancelBtn.addEventListener('click', this.itemValues.bind(this, task, taskEl));
      submitBtn.addEventListener('click', _model__WEBPACK_IMPORTED_MODULE_2__.updateData.bind(null, index, taskEl));
      return;
    }

    // PriorityBtn Handling
    if (priorityBtn) {
      // Get index
      const id = +priorityBtn.closest('.tasks__item').dataset.id;

      // Remove el from internal data
      const index = _model__WEBPACK_IMPORTED_MODULE_2__.tasks.findIndex((t) => t.id === id);
      _model__WEBPACK_IMPORTED_MODULE_2__.tasks.splice(index, 1);
      _model__WEBPACK_IMPORTED_MODULE_2__.updateStorage();

      // Update Markup
      this.render();
      return;
    }

    // AddTaskBtn handling
    if (addTaskBtn) {
      const taskEl = addTaskBtn.closest('.tasks__item');

      this._clear(taskEl);
      taskEl.insertAdjacentHTML('afterbegin', this.addTaskForm());

      const cancelBtn = taskEl.querySelector('.btn__cancel');
      const submitBtn = taskEl.querySelector('.btn__add');
      const nameInput = taskEl.querySelector('#name');
      const formEl = taskEl.querySelector('.tasks__inputs-box');

      // Trigger eventListeners
      cancelBtn.addEventListener('click', this.addTaskBtn.bind(this, taskEl));
      submitBtn.addEventListener('click', _model__WEBPACK_IMPORTED_MODULE_2__.addTask.bind(this, formEl));
      nameInput.addEventListener(
        'input',
        _modalView__WEBPACK_IMPORTED_MODULE_3__["default"].trackInput.bind(this, nameInput, submitBtn)
      );
    }

    return;
  }

  addTaskBtn(el) {
    const markup = `
      <div class="tasks__item-add-task">
            <div class="tasks__icon-plus-box">
            <svg class="tasks__icon-plus">
            <use href="${_img_icons_svg__WEBPACK_IMPORTED_MODULE_1__}#icon-plus+"></use>
            </svg>
            </div>
            
            <span>Add task</span>
            </div>`;
    this._clear(el);
    el.insertAdjacentHTML('afterbegin', markup);
  }

  itemInputs(task) {
    return `<form class="tasks__inputs-box">
              <input
                type="text"
                name="name"
                id="name"
                class="tasks__input mb-sm"
                placeholder="Task name"
                value="${task.name}"
                required
              />
              <input
                type="text"
                name="description"
                id="description"
                class="tasks__input"
                ${task.description ? `value="${task.description}"` : ''}
                placeholder="Description"
              />
              <div class="tasks__btns-box">
                <input type="date" name="date" id="date" value="${task.date.split('T')[0]}" />
                <select name="priority" id="priority">
                  ${this.generateOptions(task)}

                </select>
              </div>

              <div class="tasks__btns-box">
                <select name="project" id="projects">
                  <option value="inbox">Inbox</option>
                  ${_modalView__WEBPACK_IMPORTED_MODULE_3__["default"].generateProjects(task)}
                </select>

                <div class="tasks__btns ml-auto">
                  <button type="button" class="btn btn__cancel">Cancel</button>
                  <button type="submit" class="btn btn__add">Save</button>
                </div>
              </div>
            </form>`;
  }

  itemValues(task, el) {
    const markup = `
          <button class="btn__edit">
      <svg>
        <use href="${_img_icons_svg__WEBPACK_IMPORTED_MODULE_1__}#icon-edit"></use>
      </svg>
      </button>
      <button class="tasks__priority tasks__priority-${task.priority}">
      <svg class="tasks__priority-icon">
        <use href="${_img_icons_svg__WEBPACK_IMPORTED_MODULE_1__}#icon-check"></use>
      </svg>
      </button>
      <h3 class="tasks__name">${task.name}</h3>
      <div>
        ${task.description ? `<p class="tasks__description">${task.description}</p>` : ''}
        <div class="tasks__data">
          <div class="tasks__due-date">
            <svg class="tasks__icon">
              <use href="${_img_icons_svg__WEBPACK_IMPORTED_MODULE_1__}#icon-calendar"></use>
            </svg>
            <span class="tasks__date">${this.formatDate(task)}</span>
          </div>

          ${
            task.project !== 'inbox'
              ? `<div class="tasks__project">
              <svg class="tasks__icon">
               <use href="${_img_icons_svg__WEBPACK_IMPORTED_MODULE_1__}#icon-folder"></use>
              </svg>
              <span class="tasks__project-name">${task.project}</span>
            </div>`
              : ''
          }
        </div>
    `;
    this._clear(el);
    el.insertAdjacentHTML('afterbegin', markup);
  }

  addTaskForm() {
    return `<form class="tasks__inputs-box">
    <input
      type="text"
      name="name"
      id="name"
      class="tasks__input mb-sm"
      placeholder="Task name"
      required
    />
    <input
      type="text"
      name="description"
      id="description"
      class="tasks__input"
      placeholder="Description"
    />
    <div class="tasks__btns-box">
      <input type="date" name="date" id="date" min="${this._getToDay()}" value="${this._getToDay()}"/>
      <select name="priority" id="priority">
        ${this.generateOptions()}

      </select>
    </div>

    <div class="tasks__btns-box">
      <select name="project" id="projects">
        <option value="inbox">Inbox</option>
        ${_modalView__WEBPACK_IMPORTED_MODULE_3__["default"].generateProjects()}
      </select>

      <div class="tasks__btns ml-auto">
        <button type="button" class="btn btn__cancel">Cancel</button>
        <button type="submit" class="btn btn__add" disabled>Add task</button>
      </div>
    </div>
  </form>`;
  }

  generateOptions(task) {
    let markup = `<option value="0" ${
      task && task.priority === 0 ? 'selected' : ''
    }>No priority</option>`;

    for (let i = 1; i < 4; i++) {
      markup += `<option value="${i}" ${
        task && task.priority === i ? 'selected' : ''
      }>Priority ${i}</option>`;
    }

    return markup;
  }
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (new ContentView());


/***/ }),

/***/ "./src/js/modalView.js":
/*!*****************************!*\
  !*** ./src/js/modalView.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _view__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./view */ "./src/js/view.js");
/* harmony import */ var _model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./model */ "./src/js/model.js");



class ModalView extends _view__WEBPACK_IMPORTED_MODULE_0__["default"] {
  _modalEl = document.querySelector('.modal');
  _modalFormEl = this._modalEl.querySelector('.modal__content');
  _overlayEl = this._modalEl.querySelector('.modal__overlay');
  _today;

  constructor() {
    super();
    this._overlayEl.addEventListener('click', this.closeModal.bind(this));
    this._today = this._getToDay();
  }

  generateMarkup(type) {
    let markup;
    if (type === 'task') markup = this.taskMarkup();
    else markup = this.projectMarkup();

    this._clear(this._modalFormEl);
    this._modalFormEl.insertAdjacentHTML('afterbegin', markup);
    this._modalEl.classList.add('active');

    // Attach eventsListeners
    const cancelBtn = this._modalEl.querySelector('.btn__cancel');
    const nameInput = this._modalEl.querySelector('#name');
    const addBtn = this._modalEl.querySelector('.btn__add');

    cancelBtn.addEventListener('click', this.closeModal.bind(this));
    nameInput.addEventListener('input', this.trackInput.bind(this, nameInput, addBtn));

    if (type !== 'task') {
      this._modalFormEl.addEventListener('submit', _model__WEBPACK_IMPORTED_MODULE_1__.addProject.bind(null, nameInput), {
        once: true,
      });
      return;
    }
    this._modalFormEl.addEventListener('submit', _model__WEBPACK_IMPORTED_MODULE_1__.addTask.bind(this, this._modalFormEl), {
      once: true,
    });
  }

  projectMarkup() {
    return `
        <input
          type="text"
          name="name"
          id="name"
          class="tasks__input mb-sm"
          placeholder="Project name"
          required
        />

        <div class="tasks__btns-box">
          <div class="tasks__btns ml-auto">
            <button type="button" class="btn btn__cancel">Cancel</button>
            <button type="submit" class="btn btn__add" disabled>Add Project</button>
          </div>
        </div>
    
    `;
  }

  taskMarkup() {
    return `
        <input
          type="text"
          name="name"
          id="name"
          class="tasks__input mb-sm"
          placeholder="Task name"
          required
        />
        <input
          type="text"
          name="description"
          id="description"
          class="tasks__input"
          placeholder="Description"
        />
        <div class="tasks__btns-box">
          <input type="date" min="${this._today}" name="date" id="date" value="${
      this._today
    }" />
          <select name="priority" id="priority">
            <option value="0">No priority</option>
            <option value="1">Priority 1</option>
            <option value="2">Priority 2</option>
            <option value="3">Priority 3</option>
          </select>
        </div>

        <div class="tasks__btns-box">
          <select name="project" id="projects">
            <option value="inbox">Inbox</option>
            ${this.generateProjects()}
            </select>

          <div class="tasks__btns ml-auto">
            <button type="button" class="btn btn__cancel">Cancel</button>
            <button type="submit" class="btn btn__add" disabled>Add task</button>
          </div>
        </div>
     `;
  }

  generateProjects(task) {
    return _model__WEBPACK_IMPORTED_MODULE_1__.projects
      .map((project) => {
        return `<option ${
          task && task.project === project ? 'selected' : ''
        } value="${project}">${project}</option>`;
      })
      .join('');
  }

  closeModal() {
    this._modalEl.classList.remove('active');
  }

  trackInput(input, btn) {
    if (input.validity.valueMissing) {
      btn.disabled = true;
    } else btn.disabled = false;
  }
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (new ModalView());


/***/ }),

/***/ "./src/js/model.js":
/*!*************************!*\
  !*** ./src/js/model.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   addProject: () => (/* binding */ addProject),
/* harmony export */   addTask: () => (/* binding */ addTask),
/* harmony export */   projects: () => (/* binding */ projects),
/* harmony export */   tasks: () => (/* binding */ tasks),
/* harmony export */   tasksFilter: () => (/* binding */ tasksFilter),
/* harmony export */   updateData: () => (/* binding */ updateData),
/* harmony export */   updateStorage: () => (/* binding */ updateStorage),
/* harmony export */   updateTasks: () => (/* binding */ updateTasks),
/* harmony export */   useStorage: () => (/* binding */ useStorage)
/* harmony export */ });
/* harmony import */ var _contentView__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./contentView */ "./src/js/contentView.js");
/* harmony import */ var _modalView__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modalView */ "./src/js/modalView.js");
/* harmony import */ var _sidebarView__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./sidebarView */ "./src/js/sidebarView.js");





let projects = ['school', 'personal', 'work'];
let tasks = [
  {
    id: 0,
    name: 'Practice Spring Boot',
    description: 'It should take you 2 hours.',
    date: '2024-10-09T00:00:00',
    priority: 1,
    project: 'inbox',
  },
  {
    id: 1,
    name: 'Complete Java Assignment',
    description: 'Finish the exercises in Chapter 5.',
    date: '2024-10-10T00:00:00',
    priority: 3,
    project: 'school',
  },
  {
    id: 2,
    name: 'Plan Weekend Hike',
    description: 'Research trails and gear for the trip.',
    date: '2024-10-11T00:00:00',
    priority: 2,
    project: 'personal',
  },
  {
    id: 3,
    name: 'Team Meeting',
    description: 'Discuss progress on current goal.',
    date: '2024-10-12T00:00:00',
    priority: 0,
    project: 'work',
  },
  {
    id: 4,
    name: 'Buy Groceries',
    description: 'Prepare list for the weekend shopping.',
    date: '2024-10-13T00:00:00',
    priority: 0,
    project: 'personal',
  },
  {
    id: 5,
    name: 'Buy whatever',
    description: 'A miscellaneous task.',
    date: new Date().toISOString(),
    priority: 0,
    project: 'inbox',
  },
];

const generateId = function () {
  for (let id = 0; id <= tasks.length + 1; id++) {
    if (!tasks.some((t) => t.id === id)) {
      return id;
    }
  }
};

const tasksFilter = (type) => {
  const today = new Date();

  if (type === 'today') {
    const filtered = tasks.filter(
      (task) => new Date(task.date).toDateString() === today.toDateString()
    );
    return filtered;
  }

  if (type === 'overdue') {
    const filtered = tasks.filter((task) => {
      const taskDate = new Date(task.date);
      return taskDate < today && taskDate.toDateString() !== today.toDateString();
    });
    return filtered;
  }

  if (type !== 'inbox') {
    return tasks.filter((task) => task.project === type);
  }

  return tasks;
};

const dataRetriever = (el) => {
  const name = el.querySelector('#name').value;
  const description = el.querySelector('#description').value;
  const date = el.querySelector('#date').value;
  const priority = +el.querySelector('#priority').value;
  const project = el.querySelector('#projects').value;

  return {
    name,
    ...(description ? { description: description } : {}),
    date: new Date(date).toISOString(),
    priority,
    project,
  };
};

const updateData = function (id, itemEl, e) {
  e.preventDefault();

  const task = dataRetriever(itemEl);
  task.id = id;
  const index = tasks.findIndex((task) => task.id === id);
  tasks[index] = task;

  _contentView__WEBPACK_IMPORTED_MODULE_0__["default"].render();
};

const addTask = function (formEl, e) {
  e.preventDefault();

  const task = dataRetriever(formEl);
  task.id = generateId();

  const exist = tasks.some((t) => {
    return (
      task.name === t.name &&
      task.date === t.date &&
      task.priority === t.priority &&
      task.project === t.project
    );
  });

  if (!exist) tasks.push(task);
  if (formEl.classList.contains('modal__content')) _modalView__WEBPACK_IMPORTED_MODULE_1__["default"].closeModal();

  _contentView__WEBPACK_IMPORTED_MODULE_0__["default"].render();
  updateStorage();
};

const updateTasks = (index) => {
  tasks = tasks.filter((task) => task.project !== projects[index]);
  updateStorage();
};

const addProject = (nameInp, e) => {
  e.preventDefault();
  const name = nameInp.value.toLowerCase();

  _modalView__WEBPACK_IMPORTED_MODULE_1__["default"].closeModal();
  if (name.toLowerCase() === 'inbox' || projects.find((p) => p === name)) return;

  projects.push(name);
  _sidebarView__WEBPACK_IMPORTED_MODULE_2__.projectSideView._clear();
  _sidebarView__WEBPACK_IMPORTED_MODULE_2__.projectSideView.updateMarkup();
  updateStorage('project');
};

const useStorage = (data, type) => {
  if (type === 'tasks') {
    tasks = data;
    return;
  }
  projects = data;
};

const updateStorage = (type = undefined) => {
  if (type === 'project') {
    localStorage.setItem('projects', JSON.stringify(projects));
    return;
  }
  localStorage.setItem('tasks', JSON.stringify(tasks));
};

const setDefault = () => {
  tasks = [
    {
      id: 0,
      name: 'Practice Spring Boot',
      description: 'It should take you 2 hours.',
      date: '2024-10-09T00:00:00',
      priority: 1,
      project: 'inbox',
    },
    {
      id: 1,
      name: 'Complete Java Assignment',
      description: 'Finish the exercises in Chapter 5.',
      date: '2024-10-10T00:00:00',
      priority: 3,
      project: 'school',
    },
    {
      id: 2,
      name: 'Plan Weekend Hike',
      description: 'Research trails and gear for the trip.',
      date: '2024-10-11T00:00:00',
      priority: 2,
      project: 'personal',
    },
    {
      id: 3,
      name: 'Team Meeting',
      description: 'Discuss progress on current goal.',
      date: '2024-10-12T00:00:00',
      priority: 0,
      project: 'work',
    },
    {
      id: 4,
      name: 'Buy Groceries',
      description: 'Prepare list for the weekend shopping.',
      date: '2024-10-13T00:00:00',
      priority: 0,
      project: 'personal',
    },
    {
      id: 5,
      name: 'Buy whatever',
      description: 'A miscellaneous task.',
      date: new Date().toISOString(),
      priority: 0,
      project: 'inbox',
    },
  ];
};


/***/ }),

/***/ "./src/js/sidebarView.js":
/*!*******************************!*\
  !*** ./src/js/sidebarView.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   projectSideView: () => (/* binding */ projectSideView),
/* harmony export */   tasksSideView: () => (/* binding */ tasksSideView)
/* harmony export */ });
/* harmony import */ var _view__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./view */ "./src/js/view.js");
/* harmony import */ var _modalView__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modalView */ "./src/js/modalView.js");
/* harmony import */ var _contentView__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./contentView */ "./src/js/contentView.js");
/* harmony import */ var _model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./model */ "./src/js/model.js");
/* harmony import */ var _img_icons_svg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../img/icons.svg */ "./src/img/icons.svg");






class ProjectsSideView extends _view__WEBPACK_IMPORTED_MODULE_0__["default"] {
  _parentEl = document.querySelector('.projects__list');

  constructor() {
    super();
    this._parentEl.addEventListener('click', this.handleClicks.bind(this));
  }
  updateMarkup() {
    const markup = _model__WEBPACK_IMPORTED_MODULE_3__.projects
      .map((project) => {
        return `
        <li class="projects__item" data-project="${project}">
            <svg class="projects__icon">
              <use href="${_img_icons_svg__WEBPACK_IMPORTED_MODULE_4__}#icon-folder"></use>
            </svg>
            <span class="projects__name">${
              project.charAt(0).toUpperCase() + project.slice(1)
            }</span>

            <svg id="icon-delete" class="projects__icon ml-auto">
              <use href="${_img_icons_svg__WEBPACK_IMPORTED_MODULE_4__}#icon-delete"></use>
            </svg>
          </li>
      `;
      })
      .join('');

    this._parentEl.insertAdjacentHTML('afterbegin', markup);
  }

  handleClicks(e) {
    const deleteBtn = e.target.closest('#icon-delete');
    const itemEl = e.target.closest('.projects__item');
    const addProject = e.target.closest('#add-project-icon');

    if (deleteBtn) {
      const index = _model__WEBPACK_IMPORTED_MODULE_3__.projects.findIndex((project) => project === itemEl.dataset.project);

      const res = prompt('Type "yes" to confirm the deletion');
      if (!res || res.toLowerCase() !== 'yes') return;
      // Delete the tasks related to project
      _model__WEBPACK_IMPORTED_MODULE_3__.updateTasks(index);

      // Update projects arr
      _model__WEBPACK_IMPORTED_MODULE_3__.projects.splice(index, 1);
      _model__WEBPACK_IMPORTED_MODULE_3__.updateStorage('project');

      // Update Markup
      this._clear(this._parentEl);
      this.updateMarkup();
      _contentView__WEBPACK_IMPORTED_MODULE_2__["default"].state.title = 'inbox';
      _contentView__WEBPACK_IMPORTED_MODULE_2__["default"].render();
      return;
    }

    if (addProject) {
      _modalView__WEBPACK_IMPORTED_MODULE_1__["default"].generateMarkup('project');
      return;
    }

    if (!itemEl) return;
    _contentView__WEBPACK_IMPORTED_MODULE_2__["default"].state.title = itemEl.dataset.project;
    _contentView__WEBPACK_IMPORTED_MODULE_2__["default"].render();
  }
}

class TasksSideView extends _view__WEBPACK_IMPORTED_MODULE_0__["default"] {
  _parentEl = document.querySelector('.projects__list');

  toggleSidebar() {
    const sidebar = document.querySelector('.sidebar');
    sidebar.classList.toggle('toggle');
  }

  handleClicks(e) {
    const addTaskEl = e.target.closest('#sidebar-item-add');

    // handle addTask
    if (addTaskEl) {
      addTaskEl.addEventListener('click', _modalView__WEBPACK_IMPORTED_MODULE_1__["default"].generateMarkup.bind(_modalView__WEBPACK_IMPORTED_MODULE_1__["default"], 'task'));
      return;
    }

    // update style active
    this._updateActive(e);

    const itemEl = e.target.closest('.sidebar__item-active');

    if (itemEl) {
      // render relative to the clicked one
      const title = itemEl.dataset.name;
      _contentView__WEBPACK_IMPORTED_MODULE_2__["default"].state.title = title;
      _contentView__WEBPACK_IMPORTED_MODULE_2__["default"].render();
    }

    return;
  }

  _updateActive(e) {
    const itemEl = e.target.closest('.sidebar__item');
    if (!itemEl || itemEl.id) return;

    const activeEl = document.querySelector('.sidebar__item-active');
    activeEl.classList.remove('sidebar__item-active');

    itemEl.classList.add('sidebar__item-active');
  }
}

const projectSideView = new ProjectsSideView();
const tasksSideView = new TasksSideView();


/***/ }),

/***/ "./src/js/view.js":
/*!************************!*\
  !*** ./src/js/view.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ View)
/* harmony export */ });
class View {
  _clear(el = this._parentEl) {
    el.innerHTML = '';
  }

  _getToDay() {
    return new Date().toISOString().split('T')[0];
  }
}


/***/ }),

/***/ "./src/img/icons.svg":
/*!***************************!*\
  !*** ./src/img/icons.svg ***!
  \***************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "ce261b3951d80bc6e53f.svg";

/***/ }),

/***/ "./src/img/odin-icon.svg":
/*!*******************************!*\
  !*** ./src/img/odin-icon.svg ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "9b30578d7bee0dbf6398.svg";

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript && document.currentScript.tagName.toUpperCase() === 'SCRIPT')
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && (!scriptUrl || !/^http(s?):/.test(scriptUrl))) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**************************!*\
  !*** ./src/js/script.js ***!
  \**************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _img_odin_icon_svg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../img/odin-icon.svg */ "./src/img/odin-icon.svg");
/* harmony import */ var _img_icons_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../img/icons.svg */ "./src/img/icons.svg");
/* harmony import */ var _css_style_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../css/style.css */ "./src/css/style.css");
/* harmony import */ var _model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./model */ "./src/js/model.js");
/* harmony import */ var _sidebarView__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./sidebarView */ "./src/js/sidebarView.js");
/* harmony import */ var _contentView__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./contentView */ "./src/js/contentView.js");








const toggleBtn = document.querySelector('.toggle__icon');
const listEl = document.querySelector('.sidebar__list');
const addProjectBtn = document.querySelector('#add-project-icon');
const resetBtn = document.querySelector('.reset__icon');

listEl.addEventListener('click', _sidebarView__WEBPACK_IMPORTED_MODULE_4__.tasksSideView.handleClicks.bind(_sidebarView__WEBPACK_IMPORTED_MODULE_4__.tasksSideView));
toggleBtn.addEventListener('click', _sidebarView__WEBPACK_IMPORTED_MODULE_4__.tasksSideView.toggleSidebar);
addProjectBtn.addEventListener('click', _sidebarView__WEBPACK_IMPORTED_MODULE_4__.projectSideView.handleClicks.bind(undefined));

const init = function () {
  if (localStorage.getItem('tasks')) {
    _model__WEBPACK_IMPORTED_MODULE_3__.useStorage(JSON.parse(localStorage.getItem('tasks')), 'tasks');
  }
  if (localStorage.getItem('projects')) {
    _model__WEBPACK_IMPORTED_MODULE_3__.useStorage(JSON.parse(localStorage.getItem('projects')));
  }
  _contentView__WEBPACK_IMPORTED_MODULE_5__["default"].render();
  _sidebarView__WEBPACK_IMPORTED_MODULE_4__.projectSideView.updateMarkup();
};
init();

const resetData = function () {
  const res = prompt('Type "reset" to load default data');
  if (!res || res.toLowerCase() !== 'reset') return;

  localStorage.removeItem('tasks');
  localStorage.removeItem('projects');
  location.reload();
};
resetBtn.addEventListener('click', resetData);

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUM2RztBQUNqQjtBQUM1Riw4QkFBOEIsbUZBQTJCLENBQUMsNEZBQXFDO0FBQy9GLDRJQUE0SSxnQ0FBZ0M7QUFDNUs7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU8sc0ZBQXNGLFVBQVUsVUFBVSxrQkFBa0IsTUFBTSxZQUFZLGFBQWEsbUJBQW1CLE1BQU0sWUFBWSxhQUFhLFdBQVcsa0JBQWtCLE1BQU0sVUFBVSxrQkFBa0IsTUFBTSxrQkFBa0IsTUFBTSxVQUFVLFlBQVksaUJBQWlCLE1BQU0sWUFBWSxXQUFXLFVBQVUsWUFBWSxhQUFhLFdBQVcsWUFBWSxhQUFhLGtCQUFrQixNQUFNLFVBQVUsVUFBVSxlQUFlLEtBQUssaUJBQWlCLE1BQU0sa0JBQWtCLE1BQU0sWUFBWSxhQUFhLGFBQWEsV0FBVyxZQUFZLGFBQWEsa0JBQWtCLE1BQU0sVUFBVSxZQUFZLFdBQVcsVUFBVSxVQUFVLFlBQVksa0JBQWtCLE1BQU0saUJBQWlCLE1BQU0sVUFBVSxVQUFVLGVBQWUsS0FBSyxVQUFVLFVBQVUsZUFBZSxNQUFNLGlCQUFpQixNQUFNLGVBQWUsTUFBTSxlQUFlLE1BQU0sVUFBVSxVQUFVLGVBQWUsS0FBSyxZQUFZLG1CQUFtQixNQUFNLFlBQVksV0FBVyxZQUFZLGFBQWEsbUJBQW1CLE1BQU0sa0JBQWtCLE1BQU0sVUFBVSxZQUFZLFdBQVcsVUFBVSxZQUFZLFdBQVcsaUJBQWlCLE1BQU0sa0JBQWtCLE1BQU0sWUFBWSxtQkFBbUIsTUFBTSxVQUFVLFVBQVUsZ0JBQWdCLEtBQUssa0JBQWtCLE1BQU0sWUFBWSxtQkFBbUIsTUFBTSxVQUFVLFVBQVUsZ0JBQWdCLEtBQUssVUFBVSxVQUFVLGdCQUFnQixNQUFNLFVBQVUsaUJBQWlCLE1BQU0saUJBQWlCLE1BQU0sa0JBQWtCLE1BQU0sa0JBQWtCLE1BQU0sa0JBQWtCLE1BQU0sa0JBQWtCLE1BQU0sWUFBWSxhQUFhLFdBQVcsVUFBVSxZQUFZLGdCQUFnQixNQUFNLFlBQVksa0JBQWtCLE1BQU0saUJBQWlCLE1BQU0saUJBQWlCLE1BQU0sWUFBWSxXQUFXLFlBQVksV0FBVyxVQUFVLFVBQVUsWUFBWSxnQkFBZ0IsS0FBSyxZQUFZLFdBQVcsVUFBVSxVQUFVLGlCQUFpQixNQUFNLGVBQWUsS0FBSyxrQkFBa0IsTUFBTSxVQUFVLGdCQUFnQixNQUFNLFVBQVUsVUFBVSxVQUFVLFVBQVUsaUJBQWlCLE1BQU0sWUFBWSxXQUFXLGdCQUFnQixNQUFNLFVBQVUsVUFBVSxVQUFVLFVBQVUsaUJBQWlCLE1BQU0sZUFBZSxNQUFNLGtCQUFrQixNQUFNLFVBQVUsVUFBVSxZQUFZLFdBQVcsVUFBVSxZQUFZLFdBQVcsaUJBQWlCLE1BQU0sZ0JBQWdCLE1BQU0sVUFBVSxVQUFVLFlBQVksV0FBVyxVQUFVLFVBQVUsVUFBVSxZQUFZLGtCQUFrQixNQUFNLFVBQVUsWUFBWSxhQUFhLFdBQVcsWUFBWSxXQUFXLFlBQVksYUFBYSxXQUFXLFVBQVUsWUFBWSxXQUFXLFVBQVUsaUJBQWlCLE1BQU0sVUFBVSxpQkFBaUIsTUFBTSxZQUFZLGdCQUFnQixNQUFNLFVBQVUsVUFBVSxVQUFVLFVBQVUsZ0JBQWdCLE1BQU0sWUFBWSxhQUFhLGdCQUFnQixLQUFLLFVBQVUsaUJBQWlCLE1BQU0sWUFBWSxXQUFXLFlBQVksYUFBYSxnQkFBZ0IsS0FBSyxVQUFVLGVBQWUsTUFBTSxpQkFBaUIsTUFBTSxZQUFZLFdBQVcsWUFBWSxhQUFhLGdCQUFnQixNQUFNLGlCQUFpQixNQUFNLFVBQVUsWUFBWSxXQUFX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Ozs7QUNwSFE7QUFDZjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztVQ1JBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxpQ0FBaUMsV0FBVztXQUM1QztXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSxHQUFHO1dBQ0g7V0FDQTtXQUNBLENBQUM7Ozs7O1dDUEQ7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7OztXQ05BO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOzs7OztXQ2xCQTs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNBd0M7QUFDSDtBQUNGOztBQUVGO0FBQzhCO0FBQ3ZCOztBQUV4QztBQUNBO0FBQ0E7QUFDQTs7QUFFQSxpQ0FBaUMsdURBQWEsbUJBQW1CLHVEQUFhO0FBQzlFLG9DQUFvQyx1REFBYTtBQUNqRCx3Q0FBd0MseURBQWUsbUJBQW1CLFNBQUk7O0FBRTlFO0FBQ0E7QUFDQSxJQUFJLDhDQUFnQjtBQUNwQjtBQUNBO0FBQ0EsSUFBSSw4Q0FBZ0I7QUFDcEI7QUFDQSxFQUFFLG9EQUFXO0FBQ2IsRUFBRSx5REFBZTtBQUNqQjtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdG9kby8uL3NyYy9jc3Mvc3R5bGUuY3NzIiwid2VicGFjazovL3RvZG8vLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3RvZG8vLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly90b2RvLy4vc3JjL2Nzcy9zdHlsZS5jc3M/OWZjZCIsIndlYnBhY2s6Ly90b2RvLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3RvZG8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL3RvZG8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vdG9kby8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly90b2RvLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vdG9kby8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL3RvZG8vLi9zcmMvanMvY29udGVudFZpZXcuanMiLCJ3ZWJwYWNrOi8vdG9kby8uL3NyYy9qcy9tb2RhbFZpZXcuanMiLCJ3ZWJwYWNrOi8vdG9kby8uL3NyYy9qcy9tb2RlbC5qcyIsIndlYnBhY2s6Ly90b2RvLy4vc3JjL2pzL3NpZGViYXJWaWV3LmpzIiwid2VicGFjazovL3RvZG8vLi9zcmMvanMvdmlldy5qcyIsIndlYnBhY2s6Ly90b2RvL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3RvZG8vd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vdG9kby93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vdG9kby93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovL3RvZG8vd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly90b2RvL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vdG9kby93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly90b2RvL3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly90b2RvLy4vc3JjL2pzL3NjcmlwdC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJAaW1wb3J0IHVybChodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PU51bml0bytTYW5zOml0YWwsb3Bzeix3Z2h0QDAsNi4uMTIsMjAwLi4xMDAwOzEsNi4uMTIsMjAwLi4xMDAwJmRpc3BsYXk9c3dhcCk7XCJdKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgKixcbio6OmFmdGVyLFxuKjo6YmVmb3JlIHtcbiAgcGFkZGluZzogMDtcbiAgbWFyZ2luOiAwO1xuICBib3gtc2l6aW5nOiBpbmhlcml0OyB9XG5cbmh0bWwge1xuICBmb250LXNpemU6IDYyLjUlO1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICB1c2VyLXNlbGVjdDogbm9uZTsgfVxuXG5ib2R5IHtcbiAgZm9udC1mYW1pbHk6ICdOdW5pdG8gU2FucycsIHNhbnMtc2VyaWY7XG4gIG1pbi1oZWlnaHQ6IDEwMHZoO1xuICBjb2xvcjogI2ZmZjtcbiAgcG9zaXRpb246IHJlbGF0aXZlOyB9XG5cbi5jb250YWluZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBtaW4taGVpZ2h0OiAxMDB2aDsgfVxuXG46cm9vdCB7XG4gIGNvbG9yLXNjaGVtZTogZGFyazsgfVxuXG4udG9nZ2xlLWJveCB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB0ZXh0LWFsaWduOiBlbmQ7IH1cblxuLnRvZ2dsZV9faWNvbiB7XG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xuICBoZWlnaHQ6IDMuMnJlbTtcbiAgd2lkdGg6IDMuMnJlbTtcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgdHJhbnNpdGlvbjogYWxsIDAuMnM7IH1cbiAgLnRvZ2dsZV9faWNvbiBzdmcge1xuICAgIGhlaWdodDogMnJlbTtcbiAgICB3aWR0aDogMnJlbTtcbiAgICBmaWxsOiAjZmZmOyB9XG4gIC50b2dnbGVfX2ljb246aG92ZXIge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMxODIxMjM7IH1cbiAgLnRvZ2dsZV9faWNvbjphY3RpdmUgc3ZnIHtcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDAuOTUpOyB9XG5cbi5zaWRlYmFyIHtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgIzQ0NDtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzM0M2QzZjtcbiAgZmxleDogMCAwIDE4JTtcbiAgcGFkZGluZzogMnJlbSAxcmVtO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHRyYW5zaXRpb246IGFsbCAwLjFzOyB9XG4gIC5zaWRlYmFyX19pdGVtIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgZ2FwOiAwLjhyZW07XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIHBhZGRpbmc6IDAuNXJlbTtcbiAgICBib3JkZXItcmFkaXVzOiA2cHg7XG4gICAgdHJhbnNpdGlvbjogYWxsIDAuMXMgZWFzZTsgfVxuICAgIC5zaWRlYmFyX19pdGVtOmhvdmVyIHtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICMyNjI2MjY7IH1cbiAgLnNpZGViYXIudG9nZ2xlIHtcbiAgICBmbGV4OiAwIDAgMDtcbiAgICB3aWR0aDogMDtcbiAgICBwYWRkaW5nOiAwOyB9XG4gICAgLnNpZGViYXIudG9nZ2xlIC50b2dnbGVfX2ljb24ge1xuICAgICAgcG9zaXRpb246IGZpeGVkO1xuICAgICAgdG9wOiAxcmVtO1xuICAgICAgbGVmdDogMC41cmVtOyB9XG4gIC5zaWRlYmFyX19pdGVtLWFjdGl2ZSwgLnNpZGViYXJfX2l0ZW0tYWN0aXZlOmhvdmVyIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDQ5LCAxMDksIDIwMiwgMC4yKTsgfVxuICAuc2lkZWJhcl9faXRlbS1hY3RpdmUgLnNpZGViYXJfX2ljb24ge1xuICAgIGZpbGw6ICMzMTZkY2E7IH1cbiAgLnNpZGViYXJfX2l0ZW0tYWN0aXZlIC5zaWRlYmFyX19uYW1lIHtcbiAgICBjb2xvcjogIzMxNmRjYTsgfVxuICAuc2lkZWJhcl9faWNvbiB7XG4gICAgaGVpZ2h0OiAyLjJyZW07XG4gICAgd2lkdGg6IDIuMnJlbTtcbiAgICBmaWxsOiAjZmZmOyB9XG4gIC5zaWRlYmFyX19uYW1lIHtcbiAgICBmb250LXNpemU6IDEuNXJlbTtcbiAgICBmb250LXdlaWdodDogNjAwOyB9XG5cbi5wcm9qZWN0c19fdGl0bGUge1xuICBwYWRkaW5nLWxlZnQ6IDAuNXJlbTtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgbWFyZ2luLWJvdHRvbTogMS42cmVtO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47IH1cblxuLnByb2plY3RzX19saXN0IHtcbiAgbGlzdC1zdHlsZTogbm9uZTsgfVxuXG4ucHJvamVjdHNfX2l0ZW0ge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBnYXA6IDAuOHJlbTtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBib3JkZXItcmFkaXVzOiA2cHg7XG4gIHBhZGRpbmc6IDAuNXJlbTtcbiAgdHJhbnNpdGlvbjogYWxsIDAuMXMgZWFzZTsgfVxuICAucHJvamVjdHNfX2l0ZW06aG92ZXIge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMyNjI2MjY7IH1cblxuLnByb2plY3RzX19uYW1lIHtcbiAgZm9udC1zaXplOiAxLjVyZW07XG4gIGZvbnQtd2VpZ2h0OiA1MDA7IH1cblxuLnByb2plY3RzX19pY29uIHtcbiAgaGVpZ2h0OiAycmVtO1xuICB3aWR0aDogMnJlbTtcbiAgZmlsbDogI2ZmZjsgfVxuXG4ucHJvamVjdHNfX2l0ZW0tYWRkIHtcbiAgbWFyZ2luLXRvcDogMnJlbTsgfVxuXG4ucHJvamVjdHNfX25hbWUtYWRkIHtcbiAgZm9udC1zaXplOiAxLjZyZW07XG4gIGZvbnQtd2VpZ2h0OiA3MDA7IH1cblxuLnByb2plY3RzX19pY29uLWFkZCB7XG4gIGhlaWdodDogMi41cmVtO1xuICB3aWR0aDogMi41cmVtO1xuICBmaWxsOiAjZmZmOyB9XG5cbiNpY29uLWFkZCB7XG4gIGhlaWdodDogM3JlbTtcbiAgd2lkdGg6IDNyZW07XG4gIGZpbGw6ICMzMTZkY2E7IH1cblxuI3NpZGViYXItaXRlbS1hZGQge1xuICBjb2xvcjogIzMxNmRjYTtcbiAgdHJhbnNpdGlvbjogYWxsIDAuMnM7IH1cbiAgI3NpZGViYXItaXRlbS1hZGQgLnNpZGViYXJfX25hbWUge1xuICAgIGZvbnQtd2VpZ2h0OiA4MDA7IH1cbiAgI3NpZGViYXItaXRlbS1hZGQ6YWN0aXZlIHtcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDAuOTYpOyB9XG5cbi5tYi1zbSB7XG4gIG1hcmdpbi1ib3R0b206IDFyZW07IH1cblxuLm1iLW1kIHtcbiAgbWFyZ2luLWJvdHRvbTogM3JlbTsgfVxuXG4ubWwtYXV0byB7XG4gIG1hcmdpbi1sZWZ0OiBhdXRvOyB9XG5cbi5idG4ge1xuICBwYWRkaW5nOiAwLjdyZW0gMS4ycmVtO1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIGJvcmRlcjogbm9uZTtcbiAgY29sb3I6ICNmZmY7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIGN1cnNvcjogcG9pbnRlcjsgfVxuICAuYnRuX19hZGQge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMzMTZkY2E7XG4gICAgbWFyZ2luLWxlZnQ6IDAuN3JlbTsgfVxuICAuYnRuX19jYW5jZWwge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMzNDNkM2Y7IH1cbiAgLmJ0bjpob3Zlcjpub3QoOmRpc2FibGVkKSB7XG4gICAgZmlsdGVyOiBicmlnaHRuZXNzKDEuMik7IH1cbiAgLmJ0bl9fZWRpdCB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGJvcmRlcjogbm9uZTtcbiAgICBiYWNrZ3JvdW5kOiBub25lO1xuICAgIHJpZ2h0OiAzcmVtO1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICB0b3A6IDUwJTtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7XG4gICAgb3V0bGluZTogbm9uZTsgfVxuICAgIC5idG5fX2VkaXQgc3ZnIHtcbiAgICAgIGZpbGw6IHJnYmEoMTcwLCAxNzAsIDE3MCwgMC44KTtcbiAgICAgIG9wYWNpdHk6IDAuMztcbiAgICAgIGhlaWdodDogMnJlbTtcbiAgICAgIHdpZHRoOiAycmVtO1xuICAgICAgdHJhbnNpdGlvbjogYWxsIDAuMnMgZWFzZTsgfVxuICAgIC5idG5fX2VkaXQ6aG92ZXIgc3ZnIHtcbiAgICAgIG9wYWNpdHk6IDE7IH1cbiAgICAuYnRuX19lZGl0OmFjdGl2ZSBzdmcge1xuICAgICAgdHJhbnNmb3JtOiBzY2FsZSgwLjkpOyB9XG5cbmJ1dHRvbjpkaXNhYmxlZCB7XG4gIG9wYWNpdHk6IDAuMztcbiAgY3Vyc29yOiBkZWZhdWx0OyB9XG5cbiNpY29uLWRlbGV0ZSB7XG4gIGZpbGw6ICNhYWE7XG4gIG9wYWNpdHk6IDAuMztcbiAgaGVpZ2h0OiAxLjVyZW07XG4gIHdpZHRoOiAxLjVyZW07XG4gIHRyYW5zaXRpb246IGFsbCAwLjJzOyB9XG4gICNpY29uLWRlbGV0ZTpob3ZlciB7XG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxLjEpO1xuICAgIG9wYWNpdHk6IDE7XG4gICAgZmlsbDogI2M3NDc0NjsgfVxuXG4jYWRkLXByb2plY3QtaWNvbiB7XG4gIGhlaWdodDogM3JlbTtcbiAgd2lkdGg6IDNyZW07XG4gIGZpbGw6ICNhYWE7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgdHJhbnNpdGlvbjogYWxsIDAuMnM7IH1cbiAgI2FkZC1wcm9qZWN0LWljb246aG92ZXIge1xuICAgIGZpbGw6ICMzMTZkY2E7IH1cbiAgI2FkZC1wcm9qZWN0LWljb246YWN0aXZlIHtcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMik7IH1cblxuLnJlc2V0X19pY29uIHtcbiAgaGVpZ2h0OiAyLjVyZW07XG4gIHdpZHRoOiAyLjVyZW07XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgYm90dG9tOiAxcmVtO1xuICBsZWZ0OiAxcmVtO1xuICBmaWxsOiByZ2JhKDE3MCwgMTcwLCAxNzAsIDAuMik7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgdHJhbnNpdGlvbjogYWxsIDAuMnM7IH1cbiAgLnJlc2V0X19pY29uOmhvdmVyIHtcbiAgICBmaWxsOiBjcmltc29uOyB9XG5cbi5tb2RhbCB7XG4gIGhlaWdodDogMTAwJTtcbiAgd2lkdGg6IDEwMCU7XG4gIGJhY2tkcm9wLWZpbHRlcjogYmx1cigxMHB4KTtcbiAgcG9zaXRpb246IGZpeGVkO1xuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG4gIG9wYWNpdHk6IDA7XG4gIHZpc2liaWxpdHk6IGhpZGRlbjtcbiAgdHJhbnNpdGlvbjogYWxsIDAuM3M7IH1cbiAgLm1vZGFsX19jb250ZW50IHtcbiAgICBtaW4td2lkdGg6IDQwJTtcbiAgICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDE3MCwgMTcwLCAxNzAsIDAuNik7XG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgcGFkZGluZzogMnJlbTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTgyMTIzO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IDUwJTtcbiAgICBsZWZ0OiA1MCU7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSkgc2NhbGUoMCk7XG4gICAgb3BhY2l0eTogMDtcbiAgICB6LWluZGV4OiAyO1xuICAgIHRyYW5zaXRpb246IGFsbCAwLjZzIGVhc2U7IH1cbiAgLm1vZGFsLmFjdGl2ZSB7XG4gICAgb3BhY2l0eTogMTtcbiAgICB2aXNpYmlsaXR5OiB2aXNpYmxlOyB9XG4gICAgLm1vZGFsLmFjdGl2ZSAubW9kYWxfX2NvbnRlbnQge1xuICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSkgc2NhbGUoMSk7XG4gICAgICBvcGFjaXR5OiAxOyB9XG4gIC5tb2RhbF9fb3ZlcmxheSB7XG4gICAgcG9zaXRpb246IGZpeGVkO1xuICAgIHRvcDogMDtcbiAgICBsZWZ0OiAwO1xuICAgIGhlaWdodDogMTAwJTtcbiAgICB3aWR0aDogMTAwJTsgfVxuXG4udGFza3Mge1xuICBwYWRkaW5nOiA0cmVtIDhyZW07XG4gIGJhY2tncm91bmQtY29sb3I6ICMxODIxMjM7XG4gIGZsZXg6IDE7IH1cbiAgLnRhc2tzX190aXRsZSB7XG4gICAgZm9udC1zaXplOiAzcmVtO1xuICAgIGZvbnQtd2VpZ2h0OiA3MDA7IH1cbiAgLnRhc2tzX19zdWJ0aXRsZSB7XG4gICAgZm9udC1zaXplOiAxLjNyZW07XG4gICAgY29sb3I6ICNhYWE7XG4gICAgZm9udC13ZWlnaHQ6IDMwMDtcbiAgICB0ZXh0LXRyYW5zZm9ybTogbG93ZXJjYXNlO1xuICAgIGZpbGw6ICNhYWE7IH1cbiAgICAudGFza3NfX3N1YnRpdGxlIHN2ZyB7XG4gICAgICBoZWlnaHQ6IDEuMnJlbTtcbiAgICAgIHdpZHRoOiAxLjJyZW07IH1cbiAgLnRhc2tzX19saXN0IHtcbiAgICBsaXN0LXN0eWxlOiBub25lOyB9XG4gIC50YXNrc19faXRlbSB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgY29sdW1uLWdhcDogMXJlbTtcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IG1pbi1jb250ZW50IGF1dG87XG4gICAgcGFkZGluZzogMnJlbSAwOyB9XG4gICAgLnRhc2tzX19pdGVtOm5vdCg6bGFzdC1jaGlsZCkge1xuICAgICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHJnYmEoNTIsIDYxLCA2MywgMC41KTsgfVxuICAudGFza3NfX3ByaW9yaXR5IHtcbiAgICBtYXJnaW4tdG9wOiAzcHg7XG4gICAgZ3JpZC1yb3c6IDEgLyBzcGFuIDI7XG4gICAgaGVpZ2h0OiAycmVtO1xuICAgIHdpZHRoOiAycmVtO1xuICAgIGJvcmRlci1yYWRpdXM6IDEwcmVtO1xuICAgIG91dGxpbmU6IG5vbmU7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICBvdmVyZmxvdzogaGlkZGVuOyB9XG4gICAgLnRhc2tzX19wcmlvcml0eS0wIHtcbiAgICAgIGJvcmRlcjogMnB4IHNvbGlkICMzNDNkM2Y7XG4gICAgICBmaWxsOiAjMzQzZDNmO1xuICAgICAgYmFja2dyb3VuZDogcmdiYSg1MiwgNjEsIDYzLCAwLjIpOyB9XG4gICAgLnRhc2tzX19wcmlvcml0eS0xIHtcbiAgICAgIGJvcmRlcjogMnB4IHNvbGlkICNjNzQ3NDY7XG4gICAgICBmaWxsOiAjYzc0NzQ2O1xuICAgICAgYmFja2dyb3VuZDogcmdiYSgxOTksIDcxLCA3MCwgMC4yKTsgfVxuICAgIC50YXNrc19fcHJpb3JpdHktMiB7XG4gICAgICBib3JkZXI6IDJweCBzb2xpZCAjMzE2ZGNhO1xuICAgICAgZmlsbDogIzMxNmRjYTtcbiAgICAgIGJhY2tncm91bmQ6IHJnYmEoNDksIDEwOSwgMjAyLCAwLjIpOyB9XG4gICAgLnRhc2tzX19wcmlvcml0eS0zIHtcbiAgICAgIGJvcmRlcjogMnB4IHNvbGlkICNhNjY5MTc7XG4gICAgICBmaWxsOiAjMzE2ZGNhO1xuICAgICAgYmFja2dyb3VuZDogcmdiYSgxNjYsIDEwNSwgMjMsIDAuMik7IH1cbiAgLnRhc2tzX19wcmlvcml0eS1pY29uIHtcbiAgICBmaWxsOiBub25lO1xuICAgIGZpbHRlcjogYnJpZ2h0bmVzcygxLjQpO1xuICAgIGhlaWdodDogMnJlbTtcbiAgICB3aWR0aDogMnJlbTsgfVxuICAudGFza3NfX3ByaW9yaXR5LTA6aG92ZXIgLnRhc2tzX19wcmlvcml0eS1pY29uIHtcbiAgICBmaWxsOiAjNTU1OyB9XG4gIC50YXNrc19fcHJpb3JpdHktMTpob3ZlciAudGFza3NfX3ByaW9yaXR5LWljb24ge1xuICAgIGZpbGw6ICNjNzQ3NDY7IH1cbiAgLnRhc2tzX19wcmlvcml0eS0yOmhvdmVyIC50YXNrc19fcHJpb3JpdHktaWNvbiB7XG4gICAgZmlsbDogIzMxNmRjYTsgfVxuICAudGFza3NfX3ByaW9yaXR5LTM6aG92ZXIgLnRhc2tzX19wcmlvcml0eS1pY29uIHtcbiAgICBmaWxsOiAjYTY2OTE3OyB9XG4gIC50YXNrc19fbmFtZSB7XG4gICAgZm9udC1zaXplOiAxLjlyZW07XG4gICAgZm9udC13ZWlnaHQ6IDcwMDsgfVxuICAudGFza3NfX2R1ZS1kYXRlIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgZ2FwOiAwLjVyZW07IH1cbiAgLnRhc2tzX19kYXRlLCAudGFza3NfX3Byb2plY3QtbmFtZSB7XG4gICAgZm9udC1zaXplOiAxLjJyZW07XG4gICAgY29sb3I6ICNhYWE7IH1cbiAgLnRhc2tzX19pY29uIHtcbiAgICBmaWxsOiAjYWFhO1xuICAgIGhlaWdodDogMS40cmVtO1xuICAgIHdpZHRoOiAxLjRyZW07IH1cbiAgLnRhc2tzX19kZXNjcmlwdGlvbiB7XG4gICAgZm9udC1zaXplOiAxLjFyZW07XG4gICAgY29sb3I6ICNhYWE7IH1cbiAgLnRhc2tzX19kYXRhIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGdhcDogMXJlbTtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyOyB9XG4gIC50YXNrc19fcHJvamVjdCB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGdhcDogMC41cmVtOyB9XG4gIC50YXNrc19faW5wdXRzLWJveCB7XG4gICAgYm9yZGVyOiAxcHggc29saWQgcmdiYSgxNzAsIDE3MCwgMTcwLCAwLjIpO1xuICAgIGdyaWQtY29sdW1uOiAxIC8gLTE7XG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgcGFkZGluZzogMS41cmVtIDFyZW07IH1cbiAgLnRhc2tzX19pbnB1dCB7XG4gICAgb3V0bGluZTogbm9uZTtcbiAgICBiYWNrZ3JvdW5kOiBub25lO1xuICAgIGJvcmRlcjogbm9uZTtcbiAgICBjb2xvcjogI2ZmZjsgfVxuICAgIC50YXNrc19faW5wdXRbbmFtZT0nbmFtZSddIHtcbiAgICAgIGZvbnQtc2l6ZTogMS42cmVtO1xuICAgICAgZm9udC13ZWlnaHQ6IDcwMDsgfVxuICAudGFza3NfX2J0bnMtYm94IHtcbiAgICBtYXJnaW4tdG9wOiAxcmVtO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBnYXA6IDFyZW07IH1cbiAgICAudGFza3NfX2J0bnMtYm94Omxhc3QtY2hpbGQge1xuICAgICAgcGFkZGluZy10b3A6IDEuOHJlbTtcbiAgICAgIGJvcmRlci10b3A6IDFweCBzb2xpZCByZ2JhKDE3MCwgMTcwLCAxNzAsIDAuMik7IH1cbiAgLnRhc2tzX19pY29uLXBsdXMtYm94IHtcbiAgICBib3JkZXItcmFkaXVzOiAxMHJlbTtcbiAgICBoZWlnaHQ6IDIuMnJlbTtcbiAgICB3aWR0aDogMi4ycmVtO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC4yczsgfVxuICAgIC50YXNrc19faWNvbi1wbHVzLWJveCArIHNwYW4ge1xuICAgICAgZm9udC1zaXplOiAxLjRyZW07XG4gICAgICBmb250LXdlaWdodDogNjAwO1xuICAgICAgY29sb3I6ICM3Nzc7XG4gICAgICB0cmFuc2l0aW9uOiBhbGwgMC4yczsgfVxuICAudGFza3NfX2ljb24tcGx1cyB7XG4gICAgaGVpZ2h0OiAycmVtO1xuICAgIHdpZHRoOiAycmVtO1xuICAgIGZpbGw6ICMzMTZkY2E7XG4gICAgdHJhbnNpdGlvbjogYWxsIDAuMnM7IH1cbiAgLnRhc2tzX19pdGVtLWFkZC10YXNrIHtcbiAgICBncmlkLWNvbHVtbjogMSAvIC0xO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZ2FwOiAwLjVyZW07XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBjdXJzb3I6IHBvaW50ZXI7IH1cbiAgICAudGFza3NfX2l0ZW0tYWRkLXRhc2s6aG92ZXIgLnRhc2tzX19pY29uLXBsdXMge1xuICAgICAgZmlsbDogI2ZmZjsgfVxuICAgIC50YXNrc19faXRlbS1hZGQtdGFzazpob3ZlciAudGFza3NfX2ljb24tcGx1cy1ib3gge1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSg0OSwgMTA5LCAyMDIsIDAuNyk7IH1cbiAgICAudGFza3NfX2l0ZW0tYWRkLXRhc2s6aG92ZXIgc3BhbiB7XG4gICAgICBjb2xvcjogIzMxNmRjYTsgfVxuXG5pbnB1dFt0eXBlPSdkYXRlJ10ge1xuICBjb2xvci1zY2hlbWU6IGRhcms7XG4gIGZvbnQtc2l6ZTogMS40cmVtO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTgyMTIzO1xuICBmb250LWZhbWlseTogaW5oZXJpdDtcbiAgYm9yZGVyOiAxcHggc29saWQgcmdiYSgxNzAsIDE3MCwgMTcwLCAwLjIpO1xuICBvdXRsaW5lOiBub25lO1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIHBhZGRpbmc6IDAuNXJlbTsgfVxuXG5zZWxlY3Qge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTgyMTIzO1xuICBvdXRsaW5lOiBub25lO1xuICBwYWRkaW5nOiAwLjhyZW07XG4gIGNvbG9yOiAjZmZmO1xuICBmb250LXdlaWdodDogNTAwO1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMTcwLCAxNzAsIDE3MCwgMC4yKTtcbiAgY3Vyc29yOiBwb2ludGVyOyB9XG5gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9jc3Mvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUNBOzs7RUFHRSxVQUFVO0VBQ1YsU0FBUztFQUNULG1CQUFtQixFQUFFOztBQUV2QjtFQUNFLGdCQUFnQjtFQUNoQixzQkFBc0I7RUFD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bUI7SUFDbkIsbUJBQW1CO0lBQ25CLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsb0JBQW9CLEVBQUU7RUFDeEI7SUFDRSxhQUFhO0lBQ2IsZ0JBQWdCO0lBQ2hCLFlBQVk7SUFDWixXQUFXLEVBQUU7SUFDYjtNQUNFLGlCQUFpQjtNQUNqQixnQkFBZ0IsRUFBRTtFQUN0QjtJQUNFLGdCQUFnQjtJQUNoQixhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLFNBQVMsRUFBRTtJQUNYO01BQ0UsbUJBQW1CO01BQ25CLDhDQUE4QyxFQUFFO0VBQ3BEO0lBQ0Usb0JBQW9CO0lBQ3BCLGNBQWM7SUFDZCxhQUFhO0lBQ2IsYUFBYTtJQUNiLG1CQUFtQjtJQUNuQix1QkFBdUI7SUFDdkIsb0JBQW9CLEVBQUU7SUFDdEI7TUFDRSxpQkFBaUI7TUFDakIsZ0JBQWdCO01BQ2hCLFdBQVc7TUFDWCxvQkFBb0IsRUFBRTtFQUMxQjtJQUNFLFlBQVk7SUFDWixXQUFXO0lBQ1gsYUFBYTtJQUNiLG9CQUFvQixFQUFFO0VBQ3hCO0lBQ0UsbUJBQW1CO0lBQ25CLGFBQWE7SUFDYixXQUFXO0lBQ1gsbUJBQW1CO0lBQ25CLGVBQWUsRUFBRTtJQUNqQjtNQUNFLFVBQVUsRUFBRTtJQUNkO01BQ0UseUNBQXlDLEVBQUU7SUFDN0M7TUFDRSxjQUFjLEVBQUU7O0FBRXRCO0VBQ0Usa0JBQWtCO0VBQ2xCLGlCQUFpQjtFQUNqQix5QkFBeUI7RUFDekIsb0JBQW9CO0VBQ3BCLDBDQUEwQztFQUMxQyxhQUFhO0VBQ2Isa0JBQWtCO0VBQ2xCLGVBQWUsRUFBRTs7QUFFbkI7RUFDRSx5QkFBeUI7RUFDekIsYUFBYTtFQUNiLGVBQWU7RUFDZixXQUFXO0VBQ1gsZ0JBQWdCO0VBQ2hCLGtCQUFrQjtFQUNsQiwwQ0FBMEM7RUFDMUMsZUFBZSxFQUFFXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIkBpbXBvcnQgdXJsKFxcXCJodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PU51bml0bytTYW5zOml0YWwsb3Bzeix3Z2h0QDAsNi4uMTIsMjAwLi4xMDAwOzEsNi4uMTIsMjAwLi4xMDAwJmRpc3BsYXk9c3dhcFxcXCIpO1xcbiosXFxuKjo6YWZ0ZXIsXFxuKjo6YmVmb3JlIHtcXG4gIHBhZGRpbmc6IDA7XFxuICBtYXJnaW46IDA7XFxuICBib3gtc2l6aW5nOiBpbmhlcml0OyB9XFxuXFxuaHRtbCB7XFxuICBmb250LXNpemU6IDYyLjUlO1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gIHVzZXItc2VsZWN0OiBub25lOyB9XFxuXFxuYm9keSB7XFxuICBmb250LWZhbWlseTogJ051bml0byBTYW5zJywgc2Fucy1zZXJpZjtcXG4gIG1pbi1oZWlnaHQ6IDEwMHZoO1xcbiAgY29sb3I6ICNmZmY7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7IH1cXG5cXG4uY29udGFpbmVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBtaW4taGVpZ2h0OiAxMDB2aDsgfVxcblxcbjpyb290IHtcXG4gIGNvbG9yLXNjaGVtZTogZGFyazsgfVxcblxcbi50b2dnbGUtYm94IHtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIHRleHQtYWxpZ246IGVuZDsgfVxcblxcbi50b2dnbGVfX2ljb24ge1xcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XFxuICBoZWlnaHQ6IDMuMnJlbTtcXG4gIHdpZHRoOiAzLjJyZW07XFxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIHRyYW5zaXRpb246IGFsbCAwLjJzOyB9XFxuICAudG9nZ2xlX19pY29uIHN2ZyB7XFxuICAgIGhlaWdodDogMnJlbTtcXG4gICAgd2lkdGg6IDJyZW07XFxuICAgIGZpbGw6ICNmZmY7IH1cXG4gIC50b2dnbGVfX2ljb246aG92ZXIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTgyMTIzOyB9XFxuICAudG9nZ2xlX19pY29uOmFjdGl2ZSBzdmcge1xcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDAuOTUpOyB9XFxuXFxuLnNpZGViYXIge1xcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcXG4gIGJvcmRlci1yaWdodDogMXB4IHNvbGlkICM0NDQ7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzQzZDNmO1xcbiAgZmxleDogMCAwIDE4JTtcXG4gIHBhZGRpbmc6IDJyZW0gMXJlbTtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIHRyYW5zaXRpb246IGFsbCAwLjFzOyB9XFxuICAuc2lkZWJhcl9faXRlbSB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGdhcDogMC44cmVtO1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIHBhZGRpbmc6IDAuNXJlbTtcXG4gICAgYm9yZGVyLXJhZGl1czogNnB4O1xcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC4xcyBlYXNlOyB9XFxuICAgIC5zaWRlYmFyX19pdGVtOmhvdmVyIHtcXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjYyNjI2OyB9XFxuICAuc2lkZWJhci50b2dnbGUge1xcbiAgICBmbGV4OiAwIDAgMDtcXG4gICAgd2lkdGg6IDA7XFxuICAgIHBhZGRpbmc6IDA7IH1cXG4gICAgLnNpZGViYXIudG9nZ2xlIC50b2dnbGVfX2ljb24ge1xcbiAgICAgIHBvc2l0aW9uOiBmaXhlZDtcXG4gICAgICB0b3A6IDFyZW07XFxuICAgICAgbGVmdDogMC41cmVtOyB9XFxuICAuc2lkZWJhcl9faXRlbS1hY3RpdmUsIC5zaWRlYmFyX19pdGVtLWFjdGl2ZTpob3ZlciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoNDksIDEwOSwgMjAyLCAwLjIpOyB9XFxuICAuc2lkZWJhcl9faXRlbS1hY3RpdmUgLnNpZGViYXJfX2ljb24ge1xcbiAgICBmaWxsOiAjMzE2ZGNhOyB9XFxuICAuc2lkZWJhcl9faXRlbS1hY3RpdmUgLnNpZGViYXJfX25hbWUge1xcbiAgICBjb2xvcjogIzMxNmRjYTsgfVxcbiAgLnNpZGViYXJfX2ljb24ge1xcbiAgICBoZWlnaHQ6IDIuMnJlbTtcXG4gICAgd2lkdGg6IDIuMnJlbTtcXG4gICAgZmlsbDogI2ZmZjsgfVxcbiAgLnNpZGViYXJfX25hbWUge1xcbiAgICBmb250LXNpemU6IDEuNXJlbTtcXG4gICAgZm9udC13ZWlnaHQ6IDYwMDsgfVxcblxcbi5wcm9qZWN0c19fdGl0bGUge1xcbiAgcGFkZGluZy1sZWZ0OiAwLjVyZW07XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIG1hcmdpbi1ib3R0b206IDEuNnJlbTtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjsgfVxcblxcbi5wcm9qZWN0c19fbGlzdCB7XFxuICBsaXN0LXN0eWxlOiBub25lOyB9XFxuXFxuLnByb2plY3RzX19pdGVtIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgZ2FwOiAwLjhyZW07XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICBib3JkZXItcmFkaXVzOiA2cHg7XFxuICBwYWRkaW5nOiAwLjVyZW07XFxuICB0cmFuc2l0aW9uOiBhbGwgMC4xcyBlYXNlOyB9XFxuICAucHJvamVjdHNfX2l0ZW06aG92ZXIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjYyNjI2OyB9XFxuXFxuLnByb2plY3RzX19uYW1lIHtcXG4gIGZvbnQtc2l6ZTogMS41cmVtO1xcbiAgZm9udC13ZWlnaHQ6IDUwMDsgfVxcblxcbi5wcm9qZWN0c19faWNvbiB7XFxuICBoZWlnaHQ6IDJyZW07XFxuICB3aWR0aDogMnJlbTtcXG4gIGZpbGw6ICNmZmY7IH1cXG5cXG4ucHJvamVjdHNfX2l0ZW0tYWRkIHtcXG4gIG1hcmdpbi10b3A6IDJyZW07IH1cXG5cXG4ucHJvamVjdHNfX25hbWUtYWRkIHtcXG4gIGZvbnQtc2l6ZTogMS42cmVtO1xcbiAgZm9udC13ZWlnaHQ6IDcwMDsgfVxcblxcbi5wcm9qZWN0c19faWNvbi1hZGQge1xcbiAgaGVpZ2h0OiAyLjVyZW07XFxuICB3aWR0aDogMi41cmVtO1xcbiAgZmlsbDogI2ZmZjsgfVxcblxcbiNpY29uLWFkZCB7XFxuICBoZWlnaHQ6IDNyZW07XFxuICB3aWR0aDogM3JlbTtcXG4gIGZpbGw6ICMzMTZkY2E7IH1cXG5cXG4jc2lkZWJhci1pdGVtLWFkZCB7XFxuICBjb2xvcjogIzMxNmRjYTtcXG4gIHRyYW5zaXRpb246IGFsbCAwLjJzOyB9XFxuICAjc2lkZWJhci1pdGVtLWFkZCAuc2lkZWJhcl9fbmFtZSB7XFxuICAgIGZvbnQtd2VpZ2h0OiA4MDA7IH1cXG4gICNzaWRlYmFyLWl0ZW0tYWRkOmFjdGl2ZSB7XFxuICAgIHRyYW5zZm9ybTogc2NhbGUoMC45Nik7IH1cXG5cXG4ubWItc20ge1xcbiAgbWFyZ2luLWJvdHRvbTogMXJlbTsgfVxcblxcbi5tYi1tZCB7XFxuICBtYXJnaW4tYm90dG9tOiAzcmVtOyB9XFxuXFxuLm1sLWF1dG8ge1xcbiAgbWFyZ2luLWxlZnQ6IGF1dG87IH1cXG5cXG4uYnRuIHtcXG4gIHBhZGRpbmc6IDAuN3JlbSAxLjJyZW07XFxuICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICBib3JkZXI6IG5vbmU7XFxuICBjb2xvcjogI2ZmZjtcXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XFxuICBjdXJzb3I6IHBvaW50ZXI7IH1cXG4gIC5idG5fX2FkZCB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICMzMTZkY2E7XFxuICAgIG1hcmdpbi1sZWZ0OiAwLjdyZW07IH1cXG4gIC5idG5fX2NhbmNlbCB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICMzNDNkM2Y7IH1cXG4gIC5idG46aG92ZXI6bm90KDpkaXNhYmxlZCkge1xcbiAgICBmaWx0ZXI6IGJyaWdodG5lc3MoMS4yKTsgfVxcbiAgLmJ0bl9fZWRpdCB7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICBiYWNrZ3JvdW5kOiBub25lO1xcbiAgICByaWdodDogM3JlbTtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICB0b3A6IDUwJTtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xcbiAgICBvdXRsaW5lOiBub25lOyB9XFxuICAgIC5idG5fX2VkaXQgc3ZnIHtcXG4gICAgICBmaWxsOiByZ2JhKDE3MCwgMTcwLCAxNzAsIDAuOCk7XFxuICAgICAgb3BhY2l0eTogMC4zO1xcbiAgICAgIGhlaWdodDogMnJlbTtcXG4gICAgICB3aWR0aDogMnJlbTtcXG4gICAgICB0cmFuc2l0aW9uOiBhbGwgMC4ycyBlYXNlOyB9XFxuICAgIC5idG5fX2VkaXQ6aG92ZXIgc3ZnIHtcXG4gICAgICBvcGFjaXR5OiAxOyB9XFxuICAgIC5idG5fX2VkaXQ6YWN0aXZlIHN2ZyB7XFxuICAgICAgdHJhbnNmb3JtOiBzY2FsZSgwLjkpOyB9XFxuXFxuYnV0dG9uOmRpc2FibGVkIHtcXG4gIG9wYWNpdHk6IDAuMztcXG4gIGN1cnNvcjogZGVmYXVsdDsgfVxcblxcbiNpY29uLWRlbGV0ZSB7XFxuICBmaWxsOiAjYWFhO1xcbiAgb3BhY2l0eTogMC4zO1xcbiAgaGVpZ2h0OiAxLjVyZW07XFxuICB3aWR0aDogMS41cmVtO1xcbiAgdHJhbnNpdGlvbjogYWxsIDAuMnM7IH1cXG4gICNpY29uLWRlbGV0ZTpob3ZlciB7XFxuICAgIHRyYW5zZm9ybTogc2NhbGUoMS4xKTtcXG4gICAgb3BhY2l0eTogMTtcXG4gICAgZmlsbDogI2M3NDc0NjsgfVxcblxcbiNhZGQtcHJvamVjdC1pY29uIHtcXG4gIGhlaWdodDogM3JlbTtcXG4gIHdpZHRoOiAzcmVtO1xcbiAgZmlsbDogI2FhYTtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIHRyYW5zaXRpb246IGFsbCAwLjJzOyB9XFxuICAjYWRkLXByb2plY3QtaWNvbjpob3ZlciB7XFxuICAgIGZpbGw6ICMzMTZkY2E7IH1cXG4gICNhZGQtcHJvamVjdC1pY29uOmFjdGl2ZSB7XFxuICAgIHRyYW5zZm9ybTogc2NhbGUoMS4yKTsgfVxcblxcbi5yZXNldF9faWNvbiB7XFxuICBoZWlnaHQ6IDIuNXJlbTtcXG4gIHdpZHRoOiAyLjVyZW07XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICBib3R0b206IDFyZW07XFxuICBsZWZ0OiAxcmVtO1xcbiAgZmlsbDogcmdiYSgxNzAsIDE3MCwgMTcwLCAwLjIpO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgdHJhbnNpdGlvbjogYWxsIDAuMnM7IH1cXG4gIC5yZXNldF9faWNvbjpob3ZlciB7XFxuICAgIGZpbGw6IGNyaW1zb247IH1cXG5cXG4ubW9kYWwge1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBiYWNrZHJvcC1maWx0ZXI6IGJsdXIoMTBweCk7XFxuICBwb3NpdGlvbjogZml4ZWQ7XFxuICB0b3A6IDA7XFxuICBsZWZ0OiAwO1xcbiAgb3BhY2l0eTogMDtcXG4gIHZpc2liaWxpdHk6IGhpZGRlbjtcXG4gIHRyYW5zaXRpb246IGFsbCAwLjNzOyB9XFxuICAubW9kYWxfX2NvbnRlbnQge1xcbiAgICBtaW4td2lkdGg6IDQwJTtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgcmdiYSgxNzAsIDE3MCwgMTcwLCAwLjYpO1xcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBwYWRkaW5nOiAycmVtO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTgyMTIzO1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIHRvcDogNTAlO1xcbiAgICBsZWZ0OiA1MCU7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpIHNjYWxlKDApO1xcbiAgICBvcGFjaXR5OiAwO1xcbiAgICB6LWluZGV4OiAyO1xcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC42cyBlYXNlOyB9XFxuICAubW9kYWwuYWN0aXZlIHtcXG4gICAgb3BhY2l0eTogMTtcXG4gICAgdmlzaWJpbGl0eTogdmlzaWJsZTsgfVxcbiAgICAubW9kYWwuYWN0aXZlIC5tb2RhbF9fY29udGVudCB7XFxuICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSkgc2NhbGUoMSk7XFxuICAgICAgb3BhY2l0eTogMTsgfVxcbiAgLm1vZGFsX19vdmVybGF5IHtcXG4gICAgcG9zaXRpb246IGZpeGVkO1xcbiAgICB0b3A6IDA7XFxuICAgIGxlZnQ6IDA7XFxuICAgIGhlaWdodDogMTAwJTtcXG4gICAgd2lkdGg6IDEwMCU7IH1cXG5cXG4udGFza3Mge1xcbiAgcGFkZGluZzogNHJlbSA4cmVtO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzE4MjEyMztcXG4gIGZsZXg6IDE7IH1cXG4gIC50YXNrc19fdGl0bGUge1xcbiAgICBmb250LXNpemU6IDNyZW07XFxuICAgIGZvbnQtd2VpZ2h0OiA3MDA7IH1cXG4gIC50YXNrc19fc3VidGl0bGUge1xcbiAgICBmb250LXNpemU6IDEuM3JlbTtcXG4gICAgY29sb3I6ICNhYWE7XFxuICAgIGZvbnQtd2VpZ2h0OiAzMDA7XFxuICAgIHRleHQtdHJhbnNmb3JtOiBsb3dlcmNhc2U7XFxuICAgIGZpbGw6ICNhYWE7IH1cXG4gICAgLnRhc2tzX19zdWJ0aXRsZSBzdmcge1xcbiAgICAgIGhlaWdodDogMS4ycmVtO1xcbiAgICAgIHdpZHRoOiAxLjJyZW07IH1cXG4gIC50YXNrc19fbGlzdCB7XFxuICAgIGxpc3Qtc3R5bGU6IG5vbmU7IH1cXG4gIC50YXNrc19faXRlbSB7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgY29sdW1uLWdhcDogMXJlbTtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiBtaW4tY29udGVudCBhdXRvO1xcbiAgICBwYWRkaW5nOiAycmVtIDA7IH1cXG4gICAgLnRhc2tzX19pdGVtOm5vdCg6bGFzdC1jaGlsZCkge1xcbiAgICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCByZ2JhKDUyLCA2MSwgNjMsIDAuNSk7IH1cXG4gIC50YXNrc19fcHJpb3JpdHkge1xcbiAgICBtYXJnaW4tdG9wOiAzcHg7XFxuICAgIGdyaWQtcm93OiAxIC8gc3BhbiAyO1xcbiAgICBoZWlnaHQ6IDJyZW07XFxuICAgIHdpZHRoOiAycmVtO1xcbiAgICBib3JkZXItcmFkaXVzOiAxMHJlbTtcXG4gICAgb3V0bGluZTogbm9uZTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjsgfVxcbiAgICAudGFza3NfX3ByaW9yaXR5LTAge1xcbiAgICAgIGJvcmRlcjogMnB4IHNvbGlkICMzNDNkM2Y7XFxuICAgICAgZmlsbDogIzM0M2QzZjtcXG4gICAgICBiYWNrZ3JvdW5kOiByZ2JhKDUyLCA2MSwgNjMsIDAuMik7IH1cXG4gICAgLnRhc2tzX19wcmlvcml0eS0xIHtcXG4gICAgICBib3JkZXI6IDJweCBzb2xpZCAjYzc0NzQ2O1xcbiAgICAgIGZpbGw6ICNjNzQ3NDY7XFxuICAgICAgYmFja2dyb3VuZDogcmdiYSgxOTksIDcxLCA3MCwgMC4yKTsgfVxcbiAgICAudGFza3NfX3ByaW9yaXR5LTIge1xcbiAgICAgIGJvcmRlcjogMnB4IHNvbGlkICMzMTZkY2E7XFxuICAgICAgZmlsbDogIzMxNmRjYTtcXG4gICAgICBiYWNrZ3JvdW5kOiByZ2JhKDQ5LCAxMDksIDIwMiwgMC4yKTsgfVxcbiAgICAudGFza3NfX3ByaW9yaXR5LTMge1xcbiAgICAgIGJvcmRlcjogMnB4IHNvbGlkICNhNjY5MTc7XFxuICAgICAgZmlsbDogIzMxNmRjYTtcXG4gICAgICBiYWNrZ3JvdW5kOiByZ2JhKDE2NiwgMTA1LCAyMywgMC4yKTsgfVxcbiAgLnRhc2tzX19wcmlvcml0eS1pY29uIHtcXG4gICAgZmlsbDogbm9uZTtcXG4gICAgZmlsdGVyOiBicmlnaHRuZXNzKDEuNCk7XFxuICAgIGhlaWdodDogMnJlbTtcXG4gICAgd2lkdGg6IDJyZW07IH1cXG4gIC50YXNrc19fcHJpb3JpdHktMDpob3ZlciAudGFza3NfX3ByaW9yaXR5LWljb24ge1xcbiAgICBmaWxsOiAjNTU1OyB9XFxuICAudGFza3NfX3ByaW9yaXR5LTE6aG92ZXIgLnRhc2tzX19wcmlvcml0eS1pY29uIHtcXG4gICAgZmlsbDogI2M3NDc0NjsgfVxcbiAgLnRhc2tzX19wcmlvcml0eS0yOmhvdmVyIC50YXNrc19fcHJpb3JpdHktaWNvbiB7XFxuICAgIGZpbGw6ICMzMTZkY2E7IH1cXG4gIC50YXNrc19fcHJpb3JpdHktMzpob3ZlciAudGFza3NfX3ByaW9yaXR5LWljb24ge1xcbiAgICBmaWxsOiAjYTY2OTE3OyB9XFxuICAudGFza3NfX25hbWUge1xcbiAgICBmb250LXNpemU6IDEuOXJlbTtcXG4gICAgZm9udC13ZWlnaHQ6IDcwMDsgfVxcbiAgLnRhc2tzX19kdWUtZGF0ZSB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGdhcDogMC41cmVtOyB9XFxuICAudGFza3NfX2RhdGUsIC50YXNrc19fcHJvamVjdC1uYW1lIHtcXG4gICAgZm9udC1zaXplOiAxLjJyZW07XFxuICAgIGNvbG9yOiAjYWFhOyB9XFxuICAudGFza3NfX2ljb24ge1xcbiAgICBmaWxsOiAjYWFhO1xcbiAgICBoZWlnaHQ6IDEuNHJlbTtcXG4gICAgd2lkdGg6IDEuNHJlbTsgfVxcbiAgLnRhc2tzX19kZXNjcmlwdGlvbiB7XFxuICAgIGZvbnQtc2l6ZTogMS4xcmVtO1xcbiAgICBjb2xvcjogI2FhYTsgfVxcbiAgLnRhc2tzX19kYXRhIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZ2FwOiAxcmVtO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyOyB9XFxuICAudGFza3NfX3Byb2plY3Qge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBnYXA6IDAuNXJlbTsgfVxcbiAgLnRhc2tzX19pbnB1dHMtYm94IHtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgcmdiYSgxNzAsIDE3MCwgMTcwLCAwLjIpO1xcbiAgICBncmlkLWNvbHVtbjogMSAvIC0xO1xcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBwYWRkaW5nOiAxLjVyZW0gMXJlbTsgfVxcbiAgLnRhc2tzX19pbnB1dCB7XFxuICAgIG91dGxpbmU6IG5vbmU7XFxuICAgIGJhY2tncm91bmQ6IG5vbmU7XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgY29sb3I6ICNmZmY7IH1cXG4gICAgLnRhc2tzX19pbnB1dFtuYW1lPSduYW1lJ10ge1xcbiAgICAgIGZvbnQtc2l6ZTogMS42cmVtO1xcbiAgICAgIGZvbnQtd2VpZ2h0OiA3MDA7IH1cXG4gIC50YXNrc19fYnRucy1ib3gge1xcbiAgICBtYXJnaW4tdG9wOiAxcmVtO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBnYXA6IDFyZW07IH1cXG4gICAgLnRhc2tzX19idG5zLWJveDpsYXN0LWNoaWxkIHtcXG4gICAgICBwYWRkaW5nLXRvcDogMS44cmVtO1xcbiAgICAgIGJvcmRlci10b3A6IDFweCBzb2xpZCByZ2JhKDE3MCwgMTcwLCAxNzAsIDAuMik7IH1cXG4gIC50YXNrc19faWNvbi1wbHVzLWJveCB7XFxuICAgIGJvcmRlci1yYWRpdXM6IDEwcmVtO1xcbiAgICBoZWlnaHQ6IDIuMnJlbTtcXG4gICAgd2lkdGg6IDIuMnJlbTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIHRyYW5zaXRpb246IGFsbCAwLjJzOyB9XFxuICAgIC50YXNrc19faWNvbi1wbHVzLWJveCArIHNwYW4ge1xcbiAgICAgIGZvbnQtc2l6ZTogMS40cmVtO1xcbiAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XFxuICAgICAgY29sb3I6ICM3Nzc7XFxuICAgICAgdHJhbnNpdGlvbjogYWxsIDAuMnM7IH1cXG4gIC50YXNrc19faWNvbi1wbHVzIHtcXG4gICAgaGVpZ2h0OiAycmVtO1xcbiAgICB3aWR0aDogMnJlbTtcXG4gICAgZmlsbDogIzMxNmRjYTtcXG4gICAgdHJhbnNpdGlvbjogYWxsIDAuMnM7IH1cXG4gIC50YXNrc19faXRlbS1hZGQtdGFzayB7XFxuICAgIGdyaWQtY29sdW1uOiAxIC8gLTE7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGdhcDogMC41cmVtO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7IH1cXG4gICAgLnRhc2tzX19pdGVtLWFkZC10YXNrOmhvdmVyIC50YXNrc19faWNvbi1wbHVzIHtcXG4gICAgICBmaWxsOiAjZmZmOyB9XFxuICAgIC50YXNrc19faXRlbS1hZGQtdGFzazpob3ZlciAudGFza3NfX2ljb24tcGx1cy1ib3gge1xcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoNDksIDEwOSwgMjAyLCAwLjcpOyB9XFxuICAgIC50YXNrc19faXRlbS1hZGQtdGFzazpob3ZlciBzcGFuIHtcXG4gICAgICBjb2xvcjogIzMxNmRjYTsgfVxcblxcbmlucHV0W3R5cGU9J2RhdGUnXSB7XFxuICBjb2xvci1zY2hlbWU6IGRhcms7XFxuICBmb250LXNpemU6IDEuNHJlbTtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMxODIxMjM7XFxuICBmb250LWZhbWlseTogaW5oZXJpdDtcXG4gIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMTcwLCAxNzAsIDE3MCwgMC4yKTtcXG4gIG91dGxpbmU6IG5vbmU7XFxuICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICBwYWRkaW5nOiAwLjVyZW07IH1cXG5cXG5zZWxlY3Qge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzE4MjEyMztcXG4gIG91dGxpbmU6IG5vbmU7XFxuICBwYWRkaW5nOiAwLjhyZW07XFxuICBjb2xvcjogI2ZmZjtcXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XFxuICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDE3MCwgMTcwLCAxNzAsIDAuMik7XFxuICBjdXJzb3I6IHBvaW50ZXI7IH1cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcbm9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gdXBkYXRlcjtcbn1cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTtcblxuICAgIC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuICBjc3MgKz0gb2JqLmNzcztcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfVxuXG4gIC8vIEZvciBvbGQgSUVcbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgaWYgKHR5cGVvZiBkb2N1bWVudCA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHJldHVybiB7XG4gICAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZSgpIHt9LFxuICAgICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7fVxuICAgIH07XG4gIH1cbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImltcG9ydCBWaWV3IGZyb20gJy4vdmlldyc7XG5pbXBvcnQgaWNvbnMgZnJvbSAnLi4vaW1nL2ljb25zLnN2Zyc7XG5pbXBvcnQgKiBhcyBtb2RlbCBmcm9tICcuL21vZGVsJztcbmltcG9ydCBNb2RhbFZpZXcgZnJvbSAnLi9tb2RhbFZpZXcnO1xuXG5jbGFzcyBDb250ZW50VmlldyBleHRlbmRzIFZpZXcge1xuICBfdGFza3NFbDtcbiAgc3RhdGU7XG5cbiAgY29uc3RydWN0b3IoKSB7XG4gICAgc3VwZXIoKTtcbiAgICB0aGlzLnN0YXRlID0geyB0aXRsZTogJ2luYm94JyB9O1xuICAgIHRoaXMuX3Rhc2tzRWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudGFza3NfX2xpc3QnKTtcbiAgICB0aGlzLl90YXNrc0VsLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdGhpcy5oYW5kbGVUYXNrQ2xpY2tzLmJpbmQodGhpcykpO1xuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHsgdGl0bGUgfSA9IHRoaXMuc3RhdGU7XG5cbiAgICBjb25zdCB0YXNrcyA9IG1vZGVsLnRhc2tzRmlsdGVyKHRpdGxlKTtcbiAgICB0aGlzLl9jbGVhcih0aGlzLl90YXNrc0VsKTtcblxuICAgIGxldCBtYXJrdXAgPSBgPGgxIGNsYXNzPVwidGFza3NfX3RpdGxlXCI+JHtcbiAgICAgIHRpdGxlLmNoYXJBdCgwKS50b1VwcGVyQ2FzZSgpICsgdGl0bGUuc2xpY2UoMSlcbiAgICB9PC9oMT5gO1xuICAgIG1hcmt1cCArPSB0aGlzLl9nZW5lcmF0ZU1hcmt1cCh0YXNrcyk7XG5cbiAgICB0aGlzLl90YXNrc0VsLmluc2VydEFkamFjZW50SFRNTCgnYWZ0ZXJiZWdpbicsIG1hcmt1cCk7XG4gIH1cblxuICBfZ2VuZXJhdGVNYXJrdXAodGFza3MpIHtcbiAgICByZXR1cm4gYFxuICAgICAgPGRpdiBjbGFzcz1cInRhc2tzX19zdWJ0aXRsZSBtYi1tZFwiPlxuICAgICAgICAgIDxzdmc+XG4gICAgICAgICAgICA8dXNlIGhyZWY9XCIke2ljb25zfSNpY29uLWNoZWNrLWZ1bGxcIj48L3VzZT5cbiAgICAgICAgICA8L3N2Zz5cbiAgICAgICAgICA8c3Bhbj4ke3Rhc2tzLmxlbmd0aH0gdGFza3M8L3NwYW4+XG4gICAgICAgIDwvZGl2PlxuXG4gICAgICAke3RoaXMucmVuZGVyVGFza3ModGFza3MpfSBcbiAgICAgICR7XG4gICAgICAgIHRoaXMuc3RhdGUudGl0bGUgPT09ICdvdmVyZHVlJ1xuICAgICAgICAgID8gJydcbiAgICAgICAgICA6IGAgICAgICA8bGkgY2xhc3M9XCJ0YXNrc19faXRlbVwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cInRhc2tzX19pdGVtLWFkZC10YXNrXCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwidGFza3NfX2ljb24tcGx1cy1ib3hcIj5cbiAgICAgICAgICAgIDxzdmcgY2xhc3M9XCJ0YXNrc19faWNvbi1wbHVzXCI+XG4gICAgICAgICAgICA8dXNlIGhyZWY9XCIke2ljb25zfSNpY29uLXBsdXMrXCI+PC91c2U+XG4gICAgICAgICAgICA8L3N2Zz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgXG4gICAgICAgICAgICA8c3Bhbj5BZGQgdGFzazwvc3Bhbj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvbGk+YFxuICAgICAgfVxuIFxuICAgIGA7XG4gIH1cblxuICByZW5kZXJUYXNrcyh0YXNrcykge1xuICAgIHJldHVybiB0YXNrc1xuICAgICAgLm1hcCgodGFzaykgPT4ge1xuICAgICAgICByZXR1cm4gYFxuICAgICAgICA8bGkgY2xhc3M9XCJ0YXNrc19faXRlbVwiIGRhdGEtaWQ9XCIke3Rhc2suaWR9XCI+XG4gICAgICA8YnV0dG9uIGNsYXNzPVwiYnRuX19lZGl0XCI+XG4gICAgICA8c3ZnPlxuICAgICAgICA8dXNlIGhyZWY9XCIke2ljb25zfSNpY29uLWVkaXRcIj48L3VzZT5cbiAgICAgIDwvc3ZnPlxuICAgICAgPC9idXR0b24+XG4gICAgICA8YnV0dG9uIGNsYXNzPVwidGFza3NfX3ByaW9yaXR5IHRhc2tzX19wcmlvcml0eS0ke3Rhc2sucHJpb3JpdHkgPyB0YXNrLnByaW9yaXR5IDogMH1cIj5cbiAgICAgIDxzdmcgY2xhc3M9XCJ0YXNrc19fcHJpb3JpdHktaWNvblwiPlxuICAgICAgICA8dXNlIGhyZWY9XCIke2ljb25zfSNpY29uLWNoZWNrXCI+PC91c2U+XG4gICAgICA8L3N2Zz5cbiAgICAgIDwvYnV0dG9uPlxuICAgICAgPGgzIGNsYXNzPVwidGFza3NfX25hbWVcIj4ke3Rhc2submFtZX08L2gzPlxuICAgICAgPGRpdj5cbiAgICAgICAgJHt0YXNrLmRlc2NyaXB0aW9uID8gYDxwIGNsYXNzPVwidGFza3NfX2Rlc2NyaXB0aW9uXCI+JHt0YXNrLmRlc2NyaXB0aW9ufTwvcD5gIDogJyd9XG4gICAgICAgIDxkaXYgY2xhc3M9XCJ0YXNrc19fZGF0YVwiPlxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJ0YXNrc19fZHVlLWRhdGVcIj5cbiAgICAgICAgICAgIDxzdmcgY2xhc3M9XCJ0YXNrc19faWNvblwiPlxuICAgICAgICAgICAgICA8dXNlIGhyZWY9XCIke2ljb25zfSNpY29uLWNhbGVuZGFyXCI+PC91c2U+XG4gICAgICAgICAgICA8L3N2Zz5cbiAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwidGFza3NfX2RhdGVcIj4ke3RoaXMuZm9ybWF0RGF0ZSh0YXNrKX08L3NwYW4+XG4gICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAke1xuICAgICAgICAgICAgdGFzay5wcm9qZWN0ICE9PSAnaW5ib3gnXG4gICAgICAgICAgICAgID8gYCAgICAgICAgICA8ZGl2IGNsYXNzPVwidGFza3NfX3Byb2plY3RcIj5cbiAgICAgICAgICAgIDxzdmcgY2xhc3M9XCJ0YXNrc19faWNvblwiPlxuICAgICAgICAgICAgIDx1c2UgaHJlZj1cIiR7aWNvbnN9I2ljb24tZm9sZGVyXCI+PC91c2U+XG4gICAgICAgICAgICA8L3N2Zz5cbiAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwidGFza3NfX3Byb2plY3QtbmFtZVwiPiR7dGFzay5wcm9qZWN0fTwvc3Bhbj5cbiAgICAgICAgICA8L2Rpdj5cbmBcbiAgICAgICAgICAgICAgOiAnJ1xuICAgICAgICAgIH1cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIDwvbGk+XG5cblxuICAgICAgYDtcbiAgICAgIH0pXG4gICAgICAuam9pbignJyk7XG4gIH1cblxuICBmb3JtYXREYXRlKHRhc2spIHtcbiAgICBjb25zdCBkYXRlID0gbmV3IERhdGUodGFzay5kYXRlKTtcbiAgICBjb25zdCB3ZWVrRGF5ID0gZGF0ZS50b0xvY2FsZVN0cmluZygnZW4nLCB7IHdlZWtkYXk6ICdzaG9ydCcgfSk7XG4gICAgY29uc3QgbW9udGggPSBkYXRlLnRvTG9jYWxlU3RyaW5nKCdlbicsIHsgbW9udGg6ICdzaG9ydCcgfSk7XG4gICAgY29uc3QgZGF5ID0gJycgKyBkYXRlLmdldERhdGUoKTtcblxuICAgIHJldHVybiBgJHt3ZWVrRGF5fSwgJHttb250aH0gJHtkYXkucGFkU3RhcnQoMiwgJzAnKX1gO1xuICB9XG5cbiAgaGFuZGxlVGFza0NsaWNrcyhlKSB7XG4gICAgY29uc3QgZWRpdEJ0biA9IGUudGFyZ2V0LmNsb3Nlc3QoJy5idG5fX2VkaXQnKTtcbiAgICBjb25zdCBwcmlvcml0eUJ0biA9IGUudGFyZ2V0LmNsb3Nlc3QoJy50YXNrc19fcHJpb3JpdHknKTtcbiAgICBjb25zdCBhZGRUYXNrQnRuID0gZS50YXJnZXQuY2xvc2VzdCgnLnRhc2tzX19pdGVtLWFkZC10YXNrJyk7XG5cbiAgICAvLyBFZGl0IEhhbmRsaW5nXG4gICAgaWYgKGVkaXRCdG4pIHtcbiAgICAgIC8vIFNlbGVjdCBwYXJlbnQgdGFza1xuICAgICAgY29uc3QgdGFza0VsID0gZWRpdEJ0bi5jbG9zZXN0KCcudGFza3NfX2l0ZW0nKTtcblxuICAgICAgLy8gRW1wdHkgdGhlIGVsXG4gICAgICB0aGlzLl9jbGVhcih0YXNrRWwpO1xuXG4gICAgICAvLyBHZXQgdGFzayBkYXRhXG4gICAgICBjb25zdCBpZCA9ICt0YXNrRWwuZGF0YXNldC5pZDtcbiAgICAgIGNvbnN0IGluZGV4ID0gbW9kZWwudGFza3MuZmluZEluZGV4KCh0KSA9PiB0LmlkID09PSBpZCk7XG5cbiAgICAgIGNvbnN0IHRhc2sgPSBtb2RlbC50YXNrc1tpbmRleF07XG4gICAgICBpZiAoIXRhc2spIHJldHVybjtcbiAgICAgIHRhc2tFbC5pbnNlcnRBZGphY2VudEhUTUwoJ2FmdGVyYmVnaW4nLCB0aGlzLml0ZW1JbnB1dHModGFzaykpO1xuXG4gICAgICAvLyBUcmlnZ2VyIGV2ZW50TGlzdGVuZXJzXG4gICAgICBjb25zdCBjYW5jZWxCdG4gPSB0YXNrRWwucXVlcnlTZWxlY3RvcignLmJ0bl9fY2FuY2VsJyk7XG4gICAgICBjb25zdCBzdWJtaXRCdG4gPSB0YXNrRWwucXVlcnlTZWxlY3RvcignLmJ0bl9fYWRkJyk7XG4gICAgICBjYW5jZWxCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0aGlzLml0ZW1WYWx1ZXMuYmluZCh0aGlzLCB0YXNrLCB0YXNrRWwpKTtcbiAgICAgIHN1Ym1pdEJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIG1vZGVsLnVwZGF0ZURhdGEuYmluZChudWxsLCBpbmRleCwgdGFza0VsKSk7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgLy8gUHJpb3JpdHlCdG4gSGFuZGxpbmdcbiAgICBpZiAocHJpb3JpdHlCdG4pIHtcbiAgICAgIC8vIEdldCBpbmRleFxuICAgICAgY29uc3QgaWQgPSArcHJpb3JpdHlCdG4uY2xvc2VzdCgnLnRhc2tzX19pdGVtJykuZGF0YXNldC5pZDtcblxuICAgICAgLy8gUmVtb3ZlIGVsIGZyb20gaW50ZXJuYWwgZGF0YVxuICAgICAgY29uc3QgaW5kZXggPSBtb2RlbC50YXNrcy5maW5kSW5kZXgoKHQpID0+IHQuaWQgPT09IGlkKTtcbiAgICAgIG1vZGVsLnRhc2tzLnNwbGljZShpbmRleCwgMSk7XG4gICAgICBtb2RlbC51cGRhdGVTdG9yYWdlKCk7XG5cbiAgICAgIC8vIFVwZGF0ZSBNYXJrdXBcbiAgICAgIHRoaXMucmVuZGVyKCk7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgLy8gQWRkVGFza0J0biBoYW5kbGluZ1xuICAgIGlmIChhZGRUYXNrQnRuKSB7XG4gICAgICBjb25zdCB0YXNrRWwgPSBhZGRUYXNrQnRuLmNsb3Nlc3QoJy50YXNrc19faXRlbScpO1xuXG4gICAgICB0aGlzLl9jbGVhcih0YXNrRWwpO1xuICAgICAgdGFza0VsLmluc2VydEFkamFjZW50SFRNTCgnYWZ0ZXJiZWdpbicsIHRoaXMuYWRkVGFza0Zvcm0oKSk7XG5cbiAgICAgIGNvbnN0IGNhbmNlbEJ0biA9IHRhc2tFbC5xdWVyeVNlbGVjdG9yKCcuYnRuX19jYW5jZWwnKTtcbiAgICAgIGNvbnN0IHN1Ym1pdEJ0biA9IHRhc2tFbC5xdWVyeVNlbGVjdG9yKCcuYnRuX19hZGQnKTtcbiAgICAgIGNvbnN0IG5hbWVJbnB1dCA9IHRhc2tFbC5xdWVyeVNlbGVjdG9yKCcjbmFtZScpO1xuICAgICAgY29uc3QgZm9ybUVsID0gdGFza0VsLnF1ZXJ5U2VsZWN0b3IoJy50YXNrc19faW5wdXRzLWJveCcpO1xuXG4gICAgICAvLyBUcmlnZ2VyIGV2ZW50TGlzdGVuZXJzXG4gICAgICBjYW5jZWxCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0aGlzLmFkZFRhc2tCdG4uYmluZCh0aGlzLCB0YXNrRWwpKTtcbiAgICAgIHN1Ym1pdEJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIG1vZGVsLmFkZFRhc2suYmluZCh0aGlzLCBmb3JtRWwpKTtcbiAgICAgIG5hbWVJbnB1dC5hZGRFdmVudExpc3RlbmVyKFxuICAgICAgICAnaW5wdXQnLFxuICAgICAgICBNb2RhbFZpZXcudHJhY2tJbnB1dC5iaW5kKHRoaXMsIG5hbWVJbnB1dCwgc3VibWl0QnRuKVxuICAgICAgKTtcbiAgICB9XG5cbiAgICByZXR1cm47XG4gIH1cblxuICBhZGRUYXNrQnRuKGVsKSB7XG4gICAgY29uc3QgbWFya3VwID0gYFxuICAgICAgPGRpdiBjbGFzcz1cInRhc2tzX19pdGVtLWFkZC10YXNrXCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwidGFza3NfX2ljb24tcGx1cy1ib3hcIj5cbiAgICAgICAgICAgIDxzdmcgY2xhc3M9XCJ0YXNrc19faWNvbi1wbHVzXCI+XG4gICAgICAgICAgICA8dXNlIGhyZWY9XCIke2ljb25zfSNpY29uLXBsdXMrXCI+PC91c2U+XG4gICAgICAgICAgICA8L3N2Zz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgXG4gICAgICAgICAgICA8c3Bhbj5BZGQgdGFzazwvc3Bhbj5cbiAgICAgICAgICAgIDwvZGl2PmA7XG4gICAgdGhpcy5fY2xlYXIoZWwpO1xuICAgIGVsLmluc2VydEFkamFjZW50SFRNTCgnYWZ0ZXJiZWdpbicsIG1hcmt1cCk7XG4gIH1cblxuICBpdGVtSW5wdXRzKHRhc2spIHtcbiAgICByZXR1cm4gYDxmb3JtIGNsYXNzPVwidGFza3NfX2lucHV0cy1ib3hcIj5cbiAgICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICAgICAgICAgIG5hbWU9XCJuYW1lXCJcbiAgICAgICAgICAgICAgICBpZD1cIm5hbWVcIlxuICAgICAgICAgICAgICAgIGNsYXNzPVwidGFza3NfX2lucHV0IG1iLXNtXCJcbiAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIlRhc2sgbmFtZVwiXG4gICAgICAgICAgICAgICAgdmFsdWU9XCIke3Rhc2submFtZX1cIlxuICAgICAgICAgICAgICAgIHJlcXVpcmVkXG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICAgICAgICBuYW1lPVwiZGVzY3JpcHRpb25cIlxuICAgICAgICAgICAgICAgIGlkPVwiZGVzY3JpcHRpb25cIlxuICAgICAgICAgICAgICAgIGNsYXNzPVwidGFza3NfX2lucHV0XCJcbiAgICAgICAgICAgICAgICAke3Rhc2suZGVzY3JpcHRpb24gPyBgdmFsdWU9XCIke3Rhc2suZGVzY3JpcHRpb259XCJgIDogJyd9XG4gICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJEZXNjcmlwdGlvblwiXG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ0YXNrc19fYnRucy1ib3hcIj5cbiAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cImRhdGVcIiBuYW1lPVwiZGF0ZVwiIGlkPVwiZGF0ZVwiIHZhbHVlPVwiJHt0YXNrLmRhdGUuc3BsaXQoJ1QnKVswXX1cIiAvPlxuICAgICAgICAgICAgICAgIDxzZWxlY3QgbmFtZT1cInByaW9yaXR5XCIgaWQ9XCJwcmlvcml0eVwiPlxuICAgICAgICAgICAgICAgICAgJHt0aGlzLmdlbmVyYXRlT3B0aW9ucyh0YXNrKX1cblxuICAgICAgICAgICAgICAgIDwvc2VsZWN0PlxuICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwidGFza3NfX2J0bnMtYm94XCI+XG4gICAgICAgICAgICAgICAgPHNlbGVjdCBuYW1lPVwicHJvamVjdFwiIGlkPVwicHJvamVjdHNcIj5cbiAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJpbmJveFwiPkluYm94PC9vcHRpb24+XG4gICAgICAgICAgICAgICAgICAke01vZGFsVmlldy5nZW5lcmF0ZVByb2plY3RzKHRhc2spfVxuICAgICAgICAgICAgICAgIDwvc2VsZWN0PlxuXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInRhc2tzX19idG5zIG1sLWF1dG9cIj5cbiAgICAgICAgICAgICAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzPVwiYnRuIGJ0bl9fY2FuY2VsXCI+Q2FuY2VsPC9idXR0b24+XG4gICAgICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJzdWJtaXRcIiBjbGFzcz1cImJ0biBidG5fX2FkZFwiPlNhdmU8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Zvcm0+YDtcbiAgfVxuXG4gIGl0ZW1WYWx1ZXModGFzaywgZWwpIHtcbiAgICBjb25zdCBtYXJrdXAgPSBgXG4gICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cImJ0bl9fZWRpdFwiPlxuICAgICAgPHN2Zz5cbiAgICAgICAgPHVzZSBocmVmPVwiJHtpY29uc30jaWNvbi1lZGl0XCI+PC91c2U+XG4gICAgICA8L3N2Zz5cbiAgICAgIDwvYnV0dG9uPlxuICAgICAgPGJ1dHRvbiBjbGFzcz1cInRhc2tzX19wcmlvcml0eSB0YXNrc19fcHJpb3JpdHktJHt0YXNrLnByaW9yaXR5fVwiPlxuICAgICAgPHN2ZyBjbGFzcz1cInRhc2tzX19wcmlvcml0eS1pY29uXCI+XG4gICAgICAgIDx1c2UgaHJlZj1cIiR7aWNvbnN9I2ljb24tY2hlY2tcIj48L3VzZT5cbiAgICAgIDwvc3ZnPlxuICAgICAgPC9idXR0b24+XG4gICAgICA8aDMgY2xhc3M9XCJ0YXNrc19fbmFtZVwiPiR7dGFzay5uYW1lfTwvaDM+XG4gICAgICA8ZGl2PlxuICAgICAgICAke3Rhc2suZGVzY3JpcHRpb24gPyBgPHAgY2xhc3M9XCJ0YXNrc19fZGVzY3JpcHRpb25cIj4ke3Rhc2suZGVzY3JpcHRpb259PC9wPmAgOiAnJ31cbiAgICAgICAgPGRpdiBjbGFzcz1cInRhc2tzX19kYXRhXCI+XG4gICAgICAgICAgPGRpdiBjbGFzcz1cInRhc2tzX19kdWUtZGF0ZVwiPlxuICAgICAgICAgICAgPHN2ZyBjbGFzcz1cInRhc2tzX19pY29uXCI+XG4gICAgICAgICAgICAgIDx1c2UgaHJlZj1cIiR7aWNvbnN9I2ljb24tY2FsZW5kYXJcIj48L3VzZT5cbiAgICAgICAgICAgIDwvc3ZnPlxuICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJ0YXNrc19fZGF0ZVwiPiR7dGhpcy5mb3JtYXREYXRlKHRhc2spfTwvc3Bhbj5cbiAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICR7XG4gICAgICAgICAgICB0YXNrLnByb2plY3QgIT09ICdpbmJveCdcbiAgICAgICAgICAgICAgPyBgPGRpdiBjbGFzcz1cInRhc2tzX19wcm9qZWN0XCI+XG4gICAgICAgICAgICAgIDxzdmcgY2xhc3M9XCJ0YXNrc19faWNvblwiPlxuICAgICAgICAgICAgICAgPHVzZSBocmVmPVwiJHtpY29uc30jaWNvbi1mb2xkZXJcIj48L3VzZT5cbiAgICAgICAgICAgICAgPC9zdmc+XG4gICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwidGFza3NfX3Byb2plY3QtbmFtZVwiPiR7dGFzay5wcm9qZWN0fTwvc3Bhbj5cbiAgICAgICAgICAgIDwvZGl2PmBcbiAgICAgICAgICAgICAgOiAnJ1xuICAgICAgICAgIH1cbiAgICAgICAgPC9kaXY+XG4gICAgYDtcbiAgICB0aGlzLl9jbGVhcihlbCk7XG4gICAgZWwuaW5zZXJ0QWRqYWNlbnRIVE1MKCdhZnRlcmJlZ2luJywgbWFya3VwKTtcbiAgfVxuXG4gIGFkZFRhc2tGb3JtKCkge1xuICAgIHJldHVybiBgPGZvcm0gY2xhc3M9XCJ0YXNrc19faW5wdXRzLWJveFwiPlxuICAgIDxpbnB1dFxuICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgbmFtZT1cIm5hbWVcIlxuICAgICAgaWQ9XCJuYW1lXCJcbiAgICAgIGNsYXNzPVwidGFza3NfX2lucHV0IG1iLXNtXCJcbiAgICAgIHBsYWNlaG9sZGVyPVwiVGFzayBuYW1lXCJcbiAgICAgIHJlcXVpcmVkXG4gICAgLz5cbiAgICA8aW5wdXRcbiAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgIG5hbWU9XCJkZXNjcmlwdGlvblwiXG4gICAgICBpZD1cImRlc2NyaXB0aW9uXCJcbiAgICAgIGNsYXNzPVwidGFza3NfX2lucHV0XCJcbiAgICAgIHBsYWNlaG9sZGVyPVwiRGVzY3JpcHRpb25cIlxuICAgIC8+XG4gICAgPGRpdiBjbGFzcz1cInRhc2tzX19idG5zLWJveFwiPlxuICAgICAgPGlucHV0IHR5cGU9XCJkYXRlXCIgbmFtZT1cImRhdGVcIiBpZD1cImRhdGVcIiBtaW49XCIke3RoaXMuX2dldFRvRGF5KCl9XCIgdmFsdWU9XCIke3RoaXMuX2dldFRvRGF5KCl9XCIvPlxuICAgICAgPHNlbGVjdCBuYW1lPVwicHJpb3JpdHlcIiBpZD1cInByaW9yaXR5XCI+XG4gICAgICAgICR7dGhpcy5nZW5lcmF0ZU9wdGlvbnMoKX1cblxuICAgICAgPC9zZWxlY3Q+XG4gICAgPC9kaXY+XG5cbiAgICA8ZGl2IGNsYXNzPVwidGFza3NfX2J0bnMtYm94XCI+XG4gICAgICA8c2VsZWN0IG5hbWU9XCJwcm9qZWN0XCIgaWQ9XCJwcm9qZWN0c1wiPlxuICAgICAgICA8b3B0aW9uIHZhbHVlPVwiaW5ib3hcIj5JbmJveDwvb3B0aW9uPlxuICAgICAgICAke01vZGFsVmlldy5nZW5lcmF0ZVByb2plY3RzKCl9XG4gICAgICA8L3NlbGVjdD5cblxuICAgICAgPGRpdiBjbGFzcz1cInRhc2tzX19idG5zIG1sLWF1dG9cIj5cbiAgICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3M9XCJidG4gYnRuX19jYW5jZWxcIj5DYW5jZWw8L2J1dHRvbj5cbiAgICAgICAgPGJ1dHRvbiB0eXBlPVwic3VibWl0XCIgY2xhc3M9XCJidG4gYnRuX19hZGRcIiBkaXNhYmxlZD5BZGQgdGFzazwvYnV0dG9uPlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gIDwvZm9ybT5gO1xuICB9XG5cbiAgZ2VuZXJhdGVPcHRpb25zKHRhc2spIHtcbiAgICBsZXQgbWFya3VwID0gYDxvcHRpb24gdmFsdWU9XCIwXCIgJHtcbiAgICAgIHRhc2sgJiYgdGFzay5wcmlvcml0eSA9PT0gMCA/ICdzZWxlY3RlZCcgOiAnJ1xuICAgIH0+Tm8gcHJpb3JpdHk8L29wdGlvbj5gO1xuXG4gICAgZm9yIChsZXQgaSA9IDE7IGkgPCA0OyBpKyspIHtcbiAgICAgIG1hcmt1cCArPSBgPG9wdGlvbiB2YWx1ZT1cIiR7aX1cIiAke1xuICAgICAgICB0YXNrICYmIHRhc2sucHJpb3JpdHkgPT09IGkgPyAnc2VsZWN0ZWQnIDogJydcbiAgICAgIH0+UHJpb3JpdHkgJHtpfTwvb3B0aW9uPmA7XG4gICAgfVxuXG4gICAgcmV0dXJuIG1hcmt1cDtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBuZXcgQ29udGVudFZpZXcoKTtcbiIsImltcG9ydCBWaWV3IGZyb20gJy4vdmlldyc7XG5pbXBvcnQgeyBhZGRUYXNrLCBwcm9qZWN0cywgYWRkUHJvamVjdCB9IGZyb20gJy4vbW9kZWwnO1xuXG5jbGFzcyBNb2RhbFZpZXcgZXh0ZW5kcyBWaWV3IHtcbiAgX21vZGFsRWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubW9kYWwnKTtcbiAgX21vZGFsRm9ybUVsID0gdGhpcy5fbW9kYWxFbC5xdWVyeVNlbGVjdG9yKCcubW9kYWxfX2NvbnRlbnQnKTtcbiAgX292ZXJsYXlFbCA9IHRoaXMuX21vZGFsRWwucXVlcnlTZWxlY3RvcignLm1vZGFsX19vdmVybGF5Jyk7XG4gIF90b2RheTtcblxuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBzdXBlcigpO1xuICAgIHRoaXMuX292ZXJsYXlFbC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHRoaXMuY2xvc2VNb2RhbC5iaW5kKHRoaXMpKTtcbiAgICB0aGlzLl90b2RheSA9IHRoaXMuX2dldFRvRGF5KCk7XG4gIH1cblxuICBnZW5lcmF0ZU1hcmt1cCh0eXBlKSB7XG4gICAgbGV0IG1hcmt1cDtcbiAgICBpZiAodHlwZSA9PT0gJ3Rhc2snKSBtYXJrdXAgPSB0aGlzLnRhc2tNYXJrdXAoKTtcbiAgICBlbHNlIG1hcmt1cCA9IHRoaXMucHJvamVjdE1hcmt1cCgpO1xuXG4gICAgdGhpcy5fY2xlYXIodGhpcy5fbW9kYWxGb3JtRWwpO1xuICAgIHRoaXMuX21vZGFsRm9ybUVsLmluc2VydEFkamFjZW50SFRNTCgnYWZ0ZXJiZWdpbicsIG1hcmt1cCk7XG4gICAgdGhpcy5fbW9kYWxFbC5jbGFzc0xpc3QuYWRkKCdhY3RpdmUnKTtcblxuICAgIC8vIEF0dGFjaCBldmVudHNMaXN0ZW5lcnNcbiAgICBjb25zdCBjYW5jZWxCdG4gPSB0aGlzLl9tb2RhbEVsLnF1ZXJ5U2VsZWN0b3IoJy5idG5fX2NhbmNlbCcpO1xuICAgIGNvbnN0IG5hbWVJbnB1dCA9IHRoaXMuX21vZGFsRWwucXVlcnlTZWxlY3RvcignI25hbWUnKTtcbiAgICBjb25zdCBhZGRCdG4gPSB0aGlzLl9tb2RhbEVsLnF1ZXJ5U2VsZWN0b3IoJy5idG5fX2FkZCcpO1xuXG4gICAgY2FuY2VsQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdGhpcy5jbG9zZU1vZGFsLmJpbmQodGhpcykpO1xuICAgIG5hbWVJbnB1dC5hZGRFdmVudExpc3RlbmVyKCdpbnB1dCcsIHRoaXMudHJhY2tJbnB1dC5iaW5kKHRoaXMsIG5hbWVJbnB1dCwgYWRkQnRuKSk7XG5cbiAgICBpZiAodHlwZSAhPT0gJ3Rhc2snKSB7XG4gICAgICB0aGlzLl9tb2RhbEZvcm1FbC5hZGRFdmVudExpc3RlbmVyKCdzdWJtaXQnLCBhZGRQcm9qZWN0LmJpbmQobnVsbCwgbmFtZUlucHV0KSwge1xuICAgICAgICBvbmNlOiB0cnVlLFxuICAgICAgfSk7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIHRoaXMuX21vZGFsRm9ybUVsLmFkZEV2ZW50TGlzdGVuZXIoJ3N1Ym1pdCcsIGFkZFRhc2suYmluZCh0aGlzLCB0aGlzLl9tb2RhbEZvcm1FbCksIHtcbiAgICAgIG9uY2U6IHRydWUsXG4gICAgfSk7XG4gIH1cblxuICBwcm9qZWN0TWFya3VwKCkge1xuICAgIHJldHVybiBgXG4gICAgICAgIDxpbnB1dFxuICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICBuYW1lPVwibmFtZVwiXG4gICAgICAgICAgaWQ9XCJuYW1lXCJcbiAgICAgICAgICBjbGFzcz1cInRhc2tzX19pbnB1dCBtYi1zbVwiXG4gICAgICAgICAgcGxhY2Vob2xkZXI9XCJQcm9qZWN0IG5hbWVcIlxuICAgICAgICAgIHJlcXVpcmVkXG4gICAgICAgIC8+XG5cbiAgICAgICAgPGRpdiBjbGFzcz1cInRhc2tzX19idG5zLWJveFwiPlxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJ0YXNrc19fYnRucyBtbC1hdXRvXCI+XG4gICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzcz1cImJ0biBidG5fX2NhbmNlbFwiPkNhbmNlbDwvYnV0dG9uPlxuICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwic3VibWl0XCIgY2xhc3M9XCJidG4gYnRuX19hZGRcIiBkaXNhYmxlZD5BZGQgUHJvamVjdDwvYnV0dG9uPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICBcbiAgICBgO1xuICB9XG5cbiAgdGFza01hcmt1cCgpIHtcbiAgICByZXR1cm4gYFxuICAgICAgICA8aW5wdXRcbiAgICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgbmFtZT1cIm5hbWVcIlxuICAgICAgICAgIGlkPVwibmFtZVwiXG4gICAgICAgICAgY2xhc3M9XCJ0YXNrc19faW5wdXQgbWItc21cIlxuICAgICAgICAgIHBsYWNlaG9sZGVyPVwiVGFzayBuYW1lXCJcbiAgICAgICAgICByZXF1aXJlZFxuICAgICAgICAvPlxuICAgICAgICA8aW5wdXRcbiAgICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgbmFtZT1cImRlc2NyaXB0aW9uXCJcbiAgICAgICAgICBpZD1cImRlc2NyaXB0aW9uXCJcbiAgICAgICAgICBjbGFzcz1cInRhc2tzX19pbnB1dFwiXG4gICAgICAgICAgcGxhY2Vob2xkZXI9XCJEZXNjcmlwdGlvblwiXG4gICAgICAgIC8+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJ0YXNrc19fYnRucy1ib3hcIj5cbiAgICAgICAgICA8aW5wdXQgdHlwZT1cImRhdGVcIiBtaW49XCIke3RoaXMuX3RvZGF5fVwiIG5hbWU9XCJkYXRlXCIgaWQ9XCJkYXRlXCIgdmFsdWU9XCIke1xuICAgICAgdGhpcy5fdG9kYXlcbiAgICB9XCIgLz5cbiAgICAgICAgICA8c2VsZWN0IG5hbWU9XCJwcmlvcml0eVwiIGlkPVwicHJpb3JpdHlcIj5cbiAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCIwXCI+Tm8gcHJpb3JpdHk8L29wdGlvbj5cbiAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCIxXCI+UHJpb3JpdHkgMTwvb3B0aW9uPlxuICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIjJcIj5Qcmlvcml0eSAyPC9vcHRpb24+XG4gICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiM1wiPlByaW9yaXR5IDM8L29wdGlvbj5cbiAgICAgICAgICA8L3NlbGVjdD5cbiAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgPGRpdiBjbGFzcz1cInRhc2tzX19idG5zLWJveFwiPlxuICAgICAgICAgIDxzZWxlY3QgbmFtZT1cInByb2plY3RcIiBpZD1cInByb2plY3RzXCI+XG4gICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiaW5ib3hcIj5JbmJveDwvb3B0aW9uPlxuICAgICAgICAgICAgJHt0aGlzLmdlbmVyYXRlUHJvamVjdHMoKX1cbiAgICAgICAgICAgIDwvc2VsZWN0PlxuXG4gICAgICAgICAgPGRpdiBjbGFzcz1cInRhc2tzX19idG5zIG1sLWF1dG9cIj5cbiAgICAgICAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzPVwiYnRuIGJ0bl9fY2FuY2VsXCI+Q2FuY2VsPC9idXR0b24+XG4gICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJzdWJtaXRcIiBjbGFzcz1cImJ0biBidG5fX2FkZFwiIGRpc2FibGVkPkFkZCB0YXNrPC9idXR0b24+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICBgO1xuICB9XG5cbiAgZ2VuZXJhdGVQcm9qZWN0cyh0YXNrKSB7XG4gICAgcmV0dXJuIHByb2plY3RzXG4gICAgICAubWFwKChwcm9qZWN0KSA9PiB7XG4gICAgICAgIHJldHVybiBgPG9wdGlvbiAke1xuICAgICAgICAgIHRhc2sgJiYgdGFzay5wcm9qZWN0ID09PSBwcm9qZWN0ID8gJ3NlbGVjdGVkJyA6ICcnXG4gICAgICAgIH0gdmFsdWU9XCIke3Byb2plY3R9XCI+JHtwcm9qZWN0fTwvb3B0aW9uPmA7XG4gICAgICB9KVxuICAgICAgLmpvaW4oJycpO1xuICB9XG5cbiAgY2xvc2VNb2RhbCgpIHtcbiAgICB0aGlzLl9tb2RhbEVsLmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZScpO1xuICB9XG5cbiAgdHJhY2tJbnB1dChpbnB1dCwgYnRuKSB7XG4gICAgaWYgKGlucHV0LnZhbGlkaXR5LnZhbHVlTWlzc2luZykge1xuICAgICAgYnRuLmRpc2FibGVkID0gdHJ1ZTtcbiAgICB9IGVsc2UgYnRuLmRpc2FibGVkID0gZmFsc2U7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgbmV3IE1vZGFsVmlldygpO1xuIiwiaW1wb3J0IGNvbnRlbnRWaWV3IGZyb20gJy4vY29udGVudFZpZXcnO1xuaW1wb3J0IG1vZGFsVmlldyBmcm9tICcuL21vZGFsVmlldyc7XG5pbXBvcnQgTW9kYWxWaWV3IGZyb20gJy4vbW9kYWxWaWV3JztcbmltcG9ydCB7IHByb2plY3RTaWRlVmlldyB9IGZyb20gJy4vc2lkZWJhclZpZXcnO1xuXG5leHBvcnQgbGV0IHByb2plY3RzID0gWydzY2hvb2wnLCAncGVyc29uYWwnLCAnd29yayddO1xuZXhwb3J0IGxldCB0YXNrcyA9IFtcbiAge1xuICAgIGlkOiAwLFxuICAgIG5hbWU6ICdQcmFjdGljZSBTcHJpbmcgQm9vdCcsXG4gICAgZGVzY3JpcHRpb246ICdJdCBzaG91bGQgdGFrZSB5b3UgMiBob3Vycy4nLFxuICAgIGRhdGU6ICcyMDI0LTEwLTA5VDAwOjAwOjAwJyxcbiAgICBwcmlvcml0eTogMSxcbiAgICBwcm9qZWN0OiAnaW5ib3gnLFxuICB9LFxuICB7XG4gICAgaWQ6IDEsXG4gICAgbmFtZTogJ0NvbXBsZXRlIEphdmEgQXNzaWdubWVudCcsXG4gICAgZGVzY3JpcHRpb246ICdGaW5pc2ggdGhlIGV4ZXJjaXNlcyBpbiBDaGFwdGVyIDUuJyxcbiAgICBkYXRlOiAnMjAyNC0xMC0xMFQwMDowMDowMCcsXG4gICAgcHJpb3JpdHk6IDMsXG4gICAgcHJvamVjdDogJ3NjaG9vbCcsXG4gIH0sXG4gIHtcbiAgICBpZDogMixcbiAgICBuYW1lOiAnUGxhbiBXZWVrZW5kIEhpa2UnLFxuICAgIGRlc2NyaXB0aW9uOiAnUmVzZWFyY2ggdHJhaWxzIGFuZCBnZWFyIGZvciB0aGUgdHJpcC4nLFxuICAgIGRhdGU6ICcyMDI0LTEwLTExVDAwOjAwOjAwJyxcbiAgICBwcmlvcml0eTogMixcbiAgICBwcm9qZWN0OiAncGVyc29uYWwnLFxuICB9LFxuICB7XG4gICAgaWQ6IDMsXG4gICAgbmFtZTogJ1RlYW0gTWVldGluZycsXG4gICAgZGVzY3JpcHRpb246ICdEaXNjdXNzIHByb2dyZXNzIG9uIGN1cnJlbnQgZ29hbC4nLFxuICAgIGRhdGU6ICcyMDI0LTEwLTEyVDAwOjAwOjAwJyxcbiAgICBwcmlvcml0eTogMCxcbiAgICBwcm9qZWN0OiAnd29yaycsXG4gIH0sXG4gIHtcbiAgICBpZDogNCxcbiAgICBuYW1lOiAnQnV5IEdyb2NlcmllcycsXG4gICAgZGVzY3JpcHRpb246ICdQcmVwYXJlIGxpc3QgZm9yIHRoZSB3ZWVrZW5kIHNob3BwaW5nLicsXG4gICAgZGF0ZTogJzIwMjQtMTAtMTNUMDA6MDA6MDAnLFxuICAgIHByaW9yaXR5OiAwLFxuICAgIHByb2plY3Q6ICdwZXJzb25hbCcsXG4gIH0sXG4gIHtcbiAgICBpZDogNSxcbiAgICBuYW1lOiAnQnV5IHdoYXRldmVyJyxcbiAgICBkZXNjcmlwdGlvbjogJ0EgbWlzY2VsbGFuZW91cyB0YXNrLicsXG4gICAgZGF0ZTogbmV3IERhdGUoKS50b0lTT1N0cmluZygpLFxuICAgIHByaW9yaXR5OiAwLFxuICAgIHByb2plY3Q6ICdpbmJveCcsXG4gIH0sXG5dO1xuXG5jb25zdCBnZW5lcmF0ZUlkID0gZnVuY3Rpb24gKCkge1xuICBmb3IgKGxldCBpZCA9IDA7IGlkIDw9IHRhc2tzLmxlbmd0aCArIDE7IGlkKyspIHtcbiAgICBpZiAoIXRhc2tzLnNvbWUoKHQpID0+IHQuaWQgPT09IGlkKSkge1xuICAgICAgcmV0dXJuIGlkO1xuICAgIH1cbiAgfVxufTtcblxuZXhwb3J0IGNvbnN0IHRhc2tzRmlsdGVyID0gKHR5cGUpID0+IHtcbiAgY29uc3QgdG9kYXkgPSBuZXcgRGF0ZSgpO1xuXG4gIGlmICh0eXBlID09PSAndG9kYXknKSB7XG4gICAgY29uc3QgZmlsdGVyZWQgPSB0YXNrcy5maWx0ZXIoXG4gICAgICAodGFzaykgPT4gbmV3IERhdGUodGFzay5kYXRlKS50b0RhdGVTdHJpbmcoKSA9PT0gdG9kYXkudG9EYXRlU3RyaW5nKClcbiAgICApO1xuICAgIHJldHVybiBmaWx0ZXJlZDtcbiAgfVxuXG4gIGlmICh0eXBlID09PSAnb3ZlcmR1ZScpIHtcbiAgICBjb25zdCBmaWx0ZXJlZCA9IHRhc2tzLmZpbHRlcigodGFzaykgPT4ge1xuICAgICAgY29uc3QgdGFza0RhdGUgPSBuZXcgRGF0ZSh0YXNrLmRhdGUpO1xuICAgICAgcmV0dXJuIHRhc2tEYXRlIDwgdG9kYXkgJiYgdGFza0RhdGUudG9EYXRlU3RyaW5nKCkgIT09IHRvZGF5LnRvRGF0ZVN0cmluZygpO1xuICAgIH0pO1xuICAgIHJldHVybiBmaWx0ZXJlZDtcbiAgfVxuXG4gIGlmICh0eXBlICE9PSAnaW5ib3gnKSB7XG4gICAgcmV0dXJuIHRhc2tzLmZpbHRlcigodGFzaykgPT4gdGFzay5wcm9qZWN0ID09PSB0eXBlKTtcbiAgfVxuXG4gIHJldHVybiB0YXNrcztcbn07XG5cbmNvbnN0IGRhdGFSZXRyaWV2ZXIgPSAoZWwpID0+IHtcbiAgY29uc3QgbmFtZSA9IGVsLnF1ZXJ5U2VsZWN0b3IoJyNuYW1lJykudmFsdWU7XG4gIGNvbnN0IGRlc2NyaXB0aW9uID0gZWwucXVlcnlTZWxlY3RvcignI2Rlc2NyaXB0aW9uJykudmFsdWU7XG4gIGNvbnN0IGRhdGUgPSBlbC5xdWVyeVNlbGVjdG9yKCcjZGF0ZScpLnZhbHVlO1xuICBjb25zdCBwcmlvcml0eSA9ICtlbC5xdWVyeVNlbGVjdG9yKCcjcHJpb3JpdHknKS52YWx1ZTtcbiAgY29uc3QgcHJvamVjdCA9IGVsLnF1ZXJ5U2VsZWN0b3IoJyNwcm9qZWN0cycpLnZhbHVlO1xuXG4gIHJldHVybiB7XG4gICAgbmFtZSxcbiAgICAuLi4oZGVzY3JpcHRpb24gPyB7IGRlc2NyaXB0aW9uOiBkZXNjcmlwdGlvbiB9IDoge30pLFxuICAgIGRhdGU6IG5ldyBEYXRlKGRhdGUpLnRvSVNPU3RyaW5nKCksXG4gICAgcHJpb3JpdHksXG4gICAgcHJvamVjdCxcbiAgfTtcbn07XG5cbmV4cG9ydCBjb25zdCB1cGRhdGVEYXRhID0gZnVuY3Rpb24gKGlkLCBpdGVtRWwsIGUpIHtcbiAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gIGNvbnN0IHRhc2sgPSBkYXRhUmV0cmlldmVyKGl0ZW1FbCk7XG4gIHRhc2suaWQgPSBpZDtcbiAgY29uc3QgaW5kZXggPSB0YXNrcy5maW5kSW5kZXgoKHRhc2spID0+IHRhc2suaWQgPT09IGlkKTtcbiAgdGFza3NbaW5kZXhdID0gdGFzaztcblxuICBjb250ZW50Vmlldy5yZW5kZXIoKTtcbn07XG5cbmV4cG9ydCBjb25zdCBhZGRUYXNrID0gZnVuY3Rpb24gKGZvcm1FbCwgZSkge1xuICBlLnByZXZlbnREZWZhdWx0KCk7XG5cbiAgY29uc3QgdGFzayA9IGRhdGFSZXRyaWV2ZXIoZm9ybUVsKTtcbiAgdGFzay5pZCA9IGdlbmVyYXRlSWQoKTtcblxuICBjb25zdCBleGlzdCA9IHRhc2tzLnNvbWUoKHQpID0+IHtcbiAgICByZXR1cm4gKFxuICAgICAgdGFzay5uYW1lID09PSB0Lm5hbWUgJiZcbiAgICAgIHRhc2suZGF0ZSA9PT0gdC5kYXRlICYmXG4gICAgICB0YXNrLnByaW9yaXR5ID09PSB0LnByaW9yaXR5ICYmXG4gICAgICB0YXNrLnByb2plY3QgPT09IHQucHJvamVjdFxuICAgICk7XG4gIH0pO1xuXG4gIGlmICghZXhpc3QpIHRhc2tzLnB1c2godGFzayk7XG4gIGlmIChmb3JtRWwuY2xhc3NMaXN0LmNvbnRhaW5zKCdtb2RhbF9fY29udGVudCcpKSBNb2RhbFZpZXcuY2xvc2VNb2RhbCgpO1xuXG4gIGNvbnRlbnRWaWV3LnJlbmRlcigpO1xuICB1cGRhdGVTdG9yYWdlKCk7XG59O1xuXG5leHBvcnQgY29uc3QgdXBkYXRlVGFza3MgPSAoaW5kZXgpID0+IHtcbiAgdGFza3MgPSB0YXNrcy5maWx0ZXIoKHRhc2spID0+IHRhc2sucHJvamVjdCAhPT0gcHJvamVjdHNbaW5kZXhdKTtcbiAgdXBkYXRlU3RvcmFnZSgpO1xufTtcblxuZXhwb3J0IGNvbnN0IGFkZFByb2plY3QgPSAobmFtZUlucCwgZSkgPT4ge1xuICBlLnByZXZlbnREZWZhdWx0KCk7XG4gIGNvbnN0IG5hbWUgPSBuYW1lSW5wLnZhbHVlLnRvTG93ZXJDYXNlKCk7XG5cbiAgbW9kYWxWaWV3LmNsb3NlTW9kYWwoKTtcbiAgaWYgKG5hbWUudG9Mb3dlckNhc2UoKSA9PT0gJ2luYm94JyB8fCBwcm9qZWN0cy5maW5kKChwKSA9PiBwID09PSBuYW1lKSkgcmV0dXJuO1xuXG4gIHByb2plY3RzLnB1c2gobmFtZSk7XG4gIHByb2plY3RTaWRlVmlldy5fY2xlYXIoKTtcbiAgcHJvamVjdFNpZGVWaWV3LnVwZGF0ZU1hcmt1cCgpO1xuICB1cGRhdGVTdG9yYWdlKCdwcm9qZWN0Jyk7XG59O1xuXG5leHBvcnQgY29uc3QgdXNlU3RvcmFnZSA9IChkYXRhLCB0eXBlKSA9PiB7XG4gIGlmICh0eXBlID09PSAndGFza3MnKSB7XG4gICAgdGFza3MgPSBkYXRhO1xuICAgIHJldHVybjtcbiAgfVxuICBwcm9qZWN0cyA9IGRhdGE7XG59O1xuXG5leHBvcnQgY29uc3QgdXBkYXRlU3RvcmFnZSA9ICh0eXBlID0gdW5kZWZpbmVkKSA9PiB7XG4gIGlmICh0eXBlID09PSAncHJvamVjdCcpIHtcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgncHJvamVjdHMnLCBKU09OLnN0cmluZ2lmeShwcm9qZWN0cykpO1xuICAgIHJldHVybjtcbiAgfVxuICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgndGFza3MnLCBKU09OLnN0cmluZ2lmeSh0YXNrcykpO1xufTtcblxuY29uc3Qgc2V0RGVmYXVsdCA9ICgpID0+IHtcbiAgdGFza3MgPSBbXG4gICAge1xuICAgICAgaWQ6IDAsXG4gICAgICBuYW1lOiAnUHJhY3RpY2UgU3ByaW5nIEJvb3QnLFxuICAgICAgZGVzY3JpcHRpb246ICdJdCBzaG91bGQgdGFrZSB5b3UgMiBob3Vycy4nLFxuICAgICAgZGF0ZTogJzIwMjQtMTAtMDlUMDA6MDA6MDAnLFxuICAgICAgcHJpb3JpdHk6IDEsXG4gICAgICBwcm9qZWN0OiAnaW5ib3gnLFxuICAgIH0sXG4gICAge1xuICAgICAgaWQ6IDEsXG4gICAgICBuYW1lOiAnQ29tcGxldGUgSmF2YSBBc3NpZ25tZW50JyxcbiAgICAgIGRlc2NyaXB0aW9uOiAnRmluaXNoIHRoZSBleGVyY2lzZXMgaW4gQ2hhcHRlciA1LicsXG4gICAgICBkYXRlOiAnMjAyNC0xMC0xMFQwMDowMDowMCcsXG4gICAgICBwcmlvcml0eTogMyxcbiAgICAgIHByb2plY3Q6ICdzY2hvb2wnLFxuICAgIH0sXG4gICAge1xuICAgICAgaWQ6IDIsXG4gICAgICBuYW1lOiAnUGxhbiBXZWVrZW5kIEhpa2UnLFxuICAgICAgZGVzY3JpcHRpb246ICdSZXNlYXJjaCB0cmFpbHMgYW5kIGdlYXIgZm9yIHRoZSB0cmlwLicsXG4gICAgICBkYXRlOiAnMjAyNC0xMC0xMVQwMDowMDowMCcsXG4gICAgICBwcmlvcml0eTogMixcbiAgICAgIHByb2plY3Q6ICdwZXJzb25hbCcsXG4gICAgfSxcbiAgICB7XG4gICAgICBpZDogMyxcbiAgICAgIG5hbWU6ICdUZWFtIE1lZXRpbmcnLFxuICAgICAgZGVzY3JpcHRpb246ICdEaXNjdXNzIHByb2dyZXNzIG9uIGN1cnJlbnQgZ29hbC4nLFxuICAgICAgZGF0ZTogJzIwMjQtMTAtMTJUMDA6MDA6MDAnLFxuICAgICAgcHJpb3JpdHk6IDAsXG4gICAgICBwcm9qZWN0OiAnd29yaycsXG4gICAgfSxcbiAgICB7XG4gICAgICBpZDogNCxcbiAgICAgIG5hbWU6ICdCdXkgR3JvY2VyaWVzJyxcbiAgICAgIGRlc2NyaXB0aW9uOiAnUHJlcGFyZSBsaXN0IGZvciB0aGUgd2Vla2VuZCBzaG9wcGluZy4nLFxuICAgICAgZGF0ZTogJzIwMjQtMTAtMTNUMDA6MDA6MDAnLFxuICAgICAgcHJpb3JpdHk6IDAsXG4gICAgICBwcm9qZWN0OiAncGVyc29uYWwnLFxuICAgIH0sXG4gICAge1xuICAgICAgaWQ6IDUsXG4gICAgICBuYW1lOiAnQnV5IHdoYXRldmVyJyxcbiAgICAgIGRlc2NyaXB0aW9uOiAnQSBtaXNjZWxsYW5lb3VzIHRhc2suJyxcbiAgICAgIGRhdGU6IG5ldyBEYXRlKCkudG9JU09TdHJpbmcoKSxcbiAgICAgIHByaW9yaXR5OiAwLFxuICAgICAgcHJvamVjdDogJ2luYm94JyxcbiAgICB9LFxuICBdO1xufTtcbiIsImltcG9ydCBWaWV3IGZyb20gJy4vdmlldyc7XG5pbXBvcnQgTW9kYWxWaWV3IGZyb20gJy4vbW9kYWxWaWV3JztcbmltcG9ydCBjb250ZW50VmlldyBmcm9tICcuL2NvbnRlbnRWaWV3JztcbmltcG9ydCAqIGFzIG1vZGVsIGZyb20gJy4vbW9kZWwnO1xuaW1wb3J0IGljb25zIGZyb20gJy4uL2ltZy9pY29ucy5zdmcnO1xuXG5jbGFzcyBQcm9qZWN0c1NpZGVWaWV3IGV4dGVuZHMgVmlldyB7XG4gIF9wYXJlbnRFbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wcm9qZWN0c19fbGlzdCcpO1xuXG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHN1cGVyKCk7XG4gICAgdGhpcy5fcGFyZW50RWwuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0aGlzLmhhbmRsZUNsaWNrcy5iaW5kKHRoaXMpKTtcbiAgfVxuICB1cGRhdGVNYXJrdXAoKSB7XG4gICAgY29uc3QgbWFya3VwID0gbW9kZWwucHJvamVjdHNcbiAgICAgIC5tYXAoKHByb2plY3QpID0+IHtcbiAgICAgICAgcmV0dXJuIGBcbiAgICAgICAgPGxpIGNsYXNzPVwicHJvamVjdHNfX2l0ZW1cIiBkYXRhLXByb2plY3Q9XCIke3Byb2plY3R9XCI+XG4gICAgICAgICAgICA8c3ZnIGNsYXNzPVwicHJvamVjdHNfX2ljb25cIj5cbiAgICAgICAgICAgICAgPHVzZSBocmVmPVwiJHtpY29uc30jaWNvbi1mb2xkZXJcIj48L3VzZT5cbiAgICAgICAgICAgIDwvc3ZnPlxuICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJwcm9qZWN0c19fbmFtZVwiPiR7XG4gICAgICAgICAgICAgIHByb2plY3QuY2hhckF0KDApLnRvVXBwZXJDYXNlKCkgKyBwcm9qZWN0LnNsaWNlKDEpXG4gICAgICAgICAgICB9PC9zcGFuPlxuXG4gICAgICAgICAgICA8c3ZnIGlkPVwiaWNvbi1kZWxldGVcIiBjbGFzcz1cInByb2plY3RzX19pY29uIG1sLWF1dG9cIj5cbiAgICAgICAgICAgICAgPHVzZSBocmVmPVwiJHtpY29uc30jaWNvbi1kZWxldGVcIj48L3VzZT5cbiAgICAgICAgICAgIDwvc3ZnPlxuICAgICAgICAgIDwvbGk+XG4gICAgICBgO1xuICAgICAgfSlcbiAgICAgIC5qb2luKCcnKTtcblxuICAgIHRoaXMuX3BhcmVudEVsLmluc2VydEFkamFjZW50SFRNTCgnYWZ0ZXJiZWdpbicsIG1hcmt1cCk7XG4gIH1cblxuICBoYW5kbGVDbGlja3MoZSkge1xuICAgIGNvbnN0IGRlbGV0ZUJ0biA9IGUudGFyZ2V0LmNsb3Nlc3QoJyNpY29uLWRlbGV0ZScpO1xuICAgIGNvbnN0IGl0ZW1FbCA9IGUudGFyZ2V0LmNsb3Nlc3QoJy5wcm9qZWN0c19faXRlbScpO1xuICAgIGNvbnN0IGFkZFByb2plY3QgPSBlLnRhcmdldC5jbG9zZXN0KCcjYWRkLXByb2plY3QtaWNvbicpO1xuXG4gICAgaWYgKGRlbGV0ZUJ0bikge1xuICAgICAgY29uc3QgaW5kZXggPSBtb2RlbC5wcm9qZWN0cy5maW5kSW5kZXgoKHByb2plY3QpID0+IHByb2plY3QgPT09IGl0ZW1FbC5kYXRhc2V0LnByb2plY3QpO1xuXG4gICAgICBjb25zdCByZXMgPSBwcm9tcHQoJ1R5cGUgXCJ5ZXNcIiB0byBjb25maXJtIHRoZSBkZWxldGlvbicpO1xuICAgICAgaWYgKCFyZXMgfHwgcmVzLnRvTG93ZXJDYXNlKCkgIT09ICd5ZXMnKSByZXR1cm47XG4gICAgICAvLyBEZWxldGUgdGhlIHRhc2tzIHJlbGF0ZWQgdG8gcHJvamVjdFxuICAgICAgbW9kZWwudXBkYXRlVGFza3MoaW5kZXgpO1xuXG4gICAgICAvLyBVcGRhdGUgcHJvamVjdHMgYXJyXG4gICAgICBtb2RlbC5wcm9qZWN0cy5zcGxpY2UoaW5kZXgsIDEpO1xuICAgICAgbW9kZWwudXBkYXRlU3RvcmFnZSgncHJvamVjdCcpO1xuXG4gICAgICAvLyBVcGRhdGUgTWFya3VwXG4gICAgICB0aGlzLl9jbGVhcih0aGlzLl9wYXJlbnRFbCk7XG4gICAgICB0aGlzLnVwZGF0ZU1hcmt1cCgpO1xuICAgICAgY29udGVudFZpZXcuc3RhdGUudGl0bGUgPSAnaW5ib3gnO1xuICAgICAgY29udGVudFZpZXcucmVuZGVyKCk7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgaWYgKGFkZFByb2plY3QpIHtcbiAgICAgIE1vZGFsVmlldy5nZW5lcmF0ZU1hcmt1cCgncHJvamVjdCcpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGlmICghaXRlbUVsKSByZXR1cm47XG4gICAgY29udGVudFZpZXcuc3RhdGUudGl0bGUgPSBpdGVtRWwuZGF0YXNldC5wcm9qZWN0O1xuICAgIGNvbnRlbnRWaWV3LnJlbmRlcigpO1xuICB9XG59XG5cbmNsYXNzIFRhc2tzU2lkZVZpZXcgZXh0ZW5kcyBWaWV3IHtcbiAgX3BhcmVudEVsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnByb2plY3RzX19saXN0Jyk7XG5cbiAgdG9nZ2xlU2lkZWJhcigpIHtcbiAgICBjb25zdCBzaWRlYmFyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnNpZGViYXInKTtcbiAgICBzaWRlYmFyLmNsYXNzTGlzdC50b2dnbGUoJ3RvZ2dsZScpO1xuICB9XG5cbiAgaGFuZGxlQ2xpY2tzKGUpIHtcbiAgICBjb25zdCBhZGRUYXNrRWwgPSBlLnRhcmdldC5jbG9zZXN0KCcjc2lkZWJhci1pdGVtLWFkZCcpO1xuXG4gICAgLy8gaGFuZGxlIGFkZFRhc2tcbiAgICBpZiAoYWRkVGFza0VsKSB7XG4gICAgICBhZGRUYXNrRWwuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBNb2RhbFZpZXcuZ2VuZXJhdGVNYXJrdXAuYmluZChNb2RhbFZpZXcsICd0YXNrJykpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIC8vIHVwZGF0ZSBzdHlsZSBhY3RpdmVcbiAgICB0aGlzLl91cGRhdGVBY3RpdmUoZSk7XG5cbiAgICBjb25zdCBpdGVtRWwgPSBlLnRhcmdldC5jbG9zZXN0KCcuc2lkZWJhcl9faXRlbS1hY3RpdmUnKTtcblxuICAgIGlmIChpdGVtRWwpIHtcbiAgICAgIC8vIHJlbmRlciByZWxhdGl2ZSB0byB0aGUgY2xpY2tlZCBvbmVcbiAgICAgIGNvbnN0IHRpdGxlID0gaXRlbUVsLmRhdGFzZXQubmFtZTtcbiAgICAgIGNvbnRlbnRWaWV3LnN0YXRlLnRpdGxlID0gdGl0bGU7XG4gICAgICBjb250ZW50Vmlldy5yZW5kZXIoKTtcbiAgICB9XG5cbiAgICByZXR1cm47XG4gIH1cblxuICBfdXBkYXRlQWN0aXZlKGUpIHtcbiAgICBjb25zdCBpdGVtRWwgPSBlLnRhcmdldC5jbG9zZXN0KCcuc2lkZWJhcl9faXRlbScpO1xuICAgIGlmICghaXRlbUVsIHx8IGl0ZW1FbC5pZCkgcmV0dXJuO1xuXG4gICAgY29uc3QgYWN0aXZlRWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc2lkZWJhcl9faXRlbS1hY3RpdmUnKTtcbiAgICBhY3RpdmVFbC5jbGFzc0xpc3QucmVtb3ZlKCdzaWRlYmFyX19pdGVtLWFjdGl2ZScpO1xuXG4gICAgaXRlbUVsLmNsYXNzTGlzdC5hZGQoJ3NpZGViYXJfX2l0ZW0tYWN0aXZlJyk7XG4gIH1cbn1cblxuZXhwb3J0IGNvbnN0IHByb2plY3RTaWRlVmlldyA9IG5ldyBQcm9qZWN0c1NpZGVWaWV3KCk7XG5leHBvcnQgY29uc3QgdGFza3NTaWRlVmlldyA9IG5ldyBUYXNrc1NpZGVWaWV3KCk7XG4iLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBWaWV3IHtcbiAgX2NsZWFyKGVsID0gdGhpcy5fcGFyZW50RWwpIHtcbiAgICBlbC5pbm5lckhUTUwgPSAnJztcbiAgfVxuXG4gIF9nZXRUb0RheSgpIHtcbiAgICByZXR1cm4gbmV3IERhdGUoKS50b0lTT1N0cmluZygpLnNwbGl0KCdUJylbMF07XG4gIH1cbn1cbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18uZyA9IChmdW5jdGlvbigpIHtcblx0aWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSAnb2JqZWN0JykgcmV0dXJuIGdsb2JhbFRoaXM7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIHRoaXMgfHwgbmV3IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcpIHJldHVybiB3aW5kb3c7XG5cdH1cbn0pKCk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsInZhciBzY3JpcHRVcmw7XG5pZiAoX193ZWJwYWNrX3JlcXVpcmVfXy5nLmltcG9ydFNjcmlwdHMpIHNjcmlwdFVybCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5sb2NhdGlvbiArIFwiXCI7XG52YXIgZG9jdW1lbnQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcuZG9jdW1lbnQ7XG5pZiAoIXNjcmlwdFVybCAmJiBkb2N1bWVudCkge1xuXHRpZiAoZG9jdW1lbnQuY3VycmVudFNjcmlwdCAmJiBkb2N1bWVudC5jdXJyZW50U2NyaXB0LnRhZ05hbWUudG9VcHBlckNhc2UoKSA9PT0gJ1NDUklQVCcpXG5cdFx0c2NyaXB0VXJsID0gZG9jdW1lbnQuY3VycmVudFNjcmlwdC5zcmM7XG5cdGlmICghc2NyaXB0VXJsKSB7XG5cdFx0dmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKTtcblx0XHRpZihzY3JpcHRzLmxlbmd0aCkge1xuXHRcdFx0dmFyIGkgPSBzY3JpcHRzLmxlbmd0aCAtIDE7XG5cdFx0XHR3aGlsZSAoaSA+IC0xICYmICghc2NyaXB0VXJsIHx8ICEvXmh0dHAocz8pOi8udGVzdChzY3JpcHRVcmwpKSkgc2NyaXB0VXJsID0gc2NyaXB0c1tpLS1dLnNyYztcblx0XHR9XG5cdH1cbn1cbi8vIFdoZW4gc3VwcG9ydGluZyBicm93c2VycyB3aGVyZSBhbiBhdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIHlvdSBtdXN0IHNwZWNpZnkgYW4gb3V0cHV0LnB1YmxpY1BhdGggbWFudWFsbHkgdmlhIGNvbmZpZ3VyYXRpb25cbi8vIG9yIHBhc3MgYW4gZW1wdHkgc3RyaW5nIChcIlwiKSBhbmQgc2V0IHRoZSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyB2YXJpYWJsZSBmcm9tIHlvdXIgY29kZSB0byB1c2UgeW91ciBvd24gbG9naWMuXG5pZiAoIXNjcmlwdFVybCkgdGhyb3cgbmV3IEVycm9yKFwiQXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCBpbiB0aGlzIGJyb3dzZXJcIik7XG5zY3JpcHRVcmwgPSBzY3JpcHRVcmwucmVwbGFjZSgvIy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcPy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcL1teXFwvXSskLywgXCIvXCIpO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gc2NyaXB0VXJsOyIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiaW1wb3J0IGxvZ28gZnJvbSAnLi4vaW1nL29kaW4taWNvbi5zdmcnO1xuaW1wb3J0IGljb25zIGZyb20gJy4uL2ltZy9pY29ucy5zdmcnO1xuaW1wb3J0IGNzcyBmcm9tICcuLi9jc3Mvc3R5bGUuY3NzJztcblxuaW1wb3J0ICogYXMgbW9kZWwgZnJvbSAnLi9tb2RlbCc7XG5pbXBvcnQgeyB0YXNrc1NpZGVWaWV3LCBwcm9qZWN0U2lkZVZpZXcgfSBmcm9tICcuL3NpZGViYXJWaWV3JztcbmltcG9ydCBjb250ZW50VmlldyBmcm9tICcuL2NvbnRlbnRWaWV3JztcblxuY29uc3QgdG9nZ2xlQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRvZ2dsZV9faWNvbicpO1xuY29uc3QgbGlzdEVsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnNpZGViYXJfX2xpc3QnKTtcbmNvbnN0IGFkZFByb2plY3RCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjYWRkLXByb2plY3QtaWNvbicpO1xuY29uc3QgcmVzZXRCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucmVzZXRfX2ljb24nKTtcblxubGlzdEVsLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdGFza3NTaWRlVmlldy5oYW5kbGVDbGlja3MuYmluZCh0YXNrc1NpZGVWaWV3KSk7XG50b2dnbGVCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0YXNrc1NpZGVWaWV3LnRvZ2dsZVNpZGViYXIpO1xuYWRkUHJvamVjdEJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHByb2plY3RTaWRlVmlldy5oYW5kbGVDbGlja3MuYmluZCh0aGlzKSk7XG5cbmNvbnN0IGluaXQgPSBmdW5jdGlvbiAoKSB7XG4gIGlmIChsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgndGFza3MnKSkge1xuICAgIG1vZGVsLnVzZVN0b3JhZ2UoSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgndGFza3MnKSksICd0YXNrcycpO1xuICB9XG4gIGlmIChsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgncHJvamVjdHMnKSkge1xuICAgIG1vZGVsLnVzZVN0b3JhZ2UoSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgncHJvamVjdHMnKSkpO1xuICB9XG4gIGNvbnRlbnRWaWV3LnJlbmRlcigpO1xuICBwcm9qZWN0U2lkZVZpZXcudXBkYXRlTWFya3VwKCk7XG59O1xuaW5pdCgpO1xuXG5jb25zdCByZXNldERhdGEgPSBmdW5jdGlvbiAoKSB7XG4gIGNvbnN0IHJlcyA9IHByb21wdCgnVHlwZSBcInJlc2V0XCIgdG8gbG9hZCBkZWZhdWx0IGRhdGEnKTtcbiAgaWYgKCFyZXMgfHwgcmVzLnRvTG93ZXJDYXNlKCkgIT09ICdyZXNldCcpIHJldHVybjtcblxuICBsb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbSgndGFza3MnKTtcbiAgbG9jYWxTdG9yYWdlLnJlbW92ZUl0ZW0oJ3Byb2plY3RzJyk7XG4gIGxvY2F0aW9uLnJlbG9hZCgpO1xufTtcbnJlc2V0QnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgcmVzZXREYXRhKTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==