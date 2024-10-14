import logo from '../img/odin-icon.svg';
import icons from '../img/icons.svg';
import css from '../css/style.css';

import { tasksSideView, projectSideView } from './sidebarView';

const toggleBtn = document.querySelector('.toggle__icon');
const listEl = document.querySelector('.sidebar__list');

listEl.addEventListener('click', tasksSideView.handleClicks.bind(tasksSideView));
toggleBtn.addEventListener('click', tasksSideView.toggleSidebar);

projectSideView.updateMarkup();
