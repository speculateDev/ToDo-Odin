import logo from '../img/odin-icon.svg';
import icons from '../img/icons.svg';
import css from '../css/style.css';

import { tasksSideView, projectSideView } from './sidebarView';
import * as model from './model';
import contentView from './contentView';

const toggleBtn = document.querySelector('.toggle__icon');
const listEl = document.querySelector('.sidebar__list');
const addProjectBtn = document.querySelector('#add-project-icon');

listEl.addEventListener('click', tasksSideView.handleClicks.bind(tasksSideView));
toggleBtn.addEventListener('click', tasksSideView.toggleSidebar);
addProjectBtn.addEventListener('click', projectSideView.handleClicks.bind(this));

const init = function () {
  if (localStorage.getItem('tasks')) model.tasks = JSON.parse(localStorage.getItem('tasks'));
  model.updateProjects();
  contentView.render();
  projectSideView.updateMarkup();
};
init();
