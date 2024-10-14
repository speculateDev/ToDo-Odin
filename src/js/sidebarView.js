import View from './view';
import ModalView from './modalView';
import contentView from './contentView';
import * as model from './model';
import icons from '../img/icons.svg';

class ProjectsSideView extends View {
  _parentEl = document.querySelector('.projects__list');

  constructor() {
    super();
    this._parentEl.addEventListener('click', this.handleClicks.bind(this));
  }
  updateMarkup() {
    const markup = model.projects
      .map((project) => {
        return `
        <li class="projects__item" data-project="${project}">
            <svg class="projects__icon">
              <use href="${icons}#icon-folder"></use>
            </svg>
            <span class="projects__name">${
              project.charAt(0).toUpperCase() + project.slice(1)
            }</span>

            <svg id="icon-delete" class="projects__icon ml-auto">
              <use href="${icons}#icon-delete"></use>
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
      const index = model.projects.findIndex((project) => project === itemEl.dataset.project);

      const res = prompt('Type "yes" to confirm the deletion');
      if (!res || res.toLowerCase() !== 'yes') return;
      // Delete the tasks related to project
      model.updateTasks(index);

      // Update projects arr
      model.projects.splice(index, 1);

      // Update Markup
      this._clear(this._parentEl);
      this.updateMarkup();
      contentView.state.title = 'inbox';
      contentView.render();
      return;
    }

    if (addProject) {
      ModalView.generateMarkup('project');
      return;
    }

    contentView.state.title = itemEl.dataset.project;
    contentView.render();
  }
}

class TasksSideView extends View {
  _parentEl = document.querySelector('.projects__list');

  toggleSidebar() {
    const sidebar = document.querySelector('.sidebar');
    sidebar.classList.toggle('toggle');
  }

  handleClicks(e) {
    const addTaskEl = e.target.closest('#sidebar-item-add');

    // handle addTask
    if (addTaskEl) {
      addTaskEl.addEventListener('click', ModalView.generateMarkup.bind(ModalView, 'task'));
      return;
    }

    // update style active
    this._updateActive(e);

    const itemEl = e.target.closest('.sidebar__item-active');

    if (itemEl) {
      // render relative to the clicked one
      const title = itemEl.dataset.name;
      contentView.state.title = title;
      contentView.render();
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

export const projectSideView = new ProjectsSideView();
export const tasksSideView = new TasksSideView();
