import View from './view';
import ModalView from './modalView';
import contentView from './contentView';
import { tasks, tasksFilter, projects } from './model';
import icons from '../img/icons.svg';

class ProjectsSideView extends View {
  _parentEl = document.querySelector('.projects__list');

  updateMarkup() {
    const markup = projects
      .map((project) => {
        return `
        <li class="projects__item" data-project="${project.name}">
            <svg class="projects__icon">
              <use href="${icons}#icon-folder"></use>
            </svg>
            <span class="projects__name">${
              project.name.charAt(0).toUpperCase() + project.name.slice(1)
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

      if (title === 'inbox') {
        contentView.render(tasks);
        return;
      }

      if (title === 'today') {
        contentView.render(tasksFilter('today'));
        return;
      }

      if (title === 'overdue') contentView.render(tasksFilter('overdue'));
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
