import logo from '../img/odin-icon.svg';
import icons from '../img/icons.svg';
import css from '../css/style.css';

import * as model from './model';
import { tasksSideView, projectSideView } from './sidebarView';
import contentView from './contentView';

const toggleBtn = document.querySelector('.toggle__icon');
const listEl = document.querySelector('.sidebar__list');
const addProjectBtn = document.querySelector('#add-project-icon');
const resetBtn = document.querySelector('.reset__icon');

listEl.addEventListener('click', tasksSideView.handleClicks.bind(tasksSideView));
toggleBtn.addEventListener('click', tasksSideView.toggleSidebar);
addProjectBtn.addEventListener('click', projectSideView.handleClicks.bind(this));

const init = function () {
  if (localStorage.getItem('tasks')) {
    model.useStorage(JSON.parse(localStorage.getItem('tasks')), 'tasks');
  }
  if (localStorage.getItem('projects')) {
    model.useStorage(JSON.parse(localStorage.getItem('projects')));
  }
  contentView.render();
  projectSideView.updateMarkup();
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
