import View from './view';
import icons from '../img/icons.svg';
import * as model from './model';
import ModalView from './modalView';

class ContentView extends View {
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

    const tasks = model.tasksFilter(title);
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
            <use href="${icons}#icon-check-full"></use>
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
            <use href="${icons}#icon-plus+"></use>
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
        <use href="${icons}#icon-edit"></use>
      </svg>
      </button>
      <button class="tasks__priority tasks__priority-${task.priority ? task.priority : 0}">
      <svg class="tasks__priority-icon">
        <use href="${icons}#icon-check"></use>
      </svg>
      </button>
      <h3 class="tasks__name">${task.name}</h3>
      <div>
        ${task.description ? `<p class="tasks__description">${task.description}</p>` : ''}
        <div class="tasks__data">
          <div class="tasks__due-date">
            <svg class="tasks__icon">
              <use href="${icons}#icon-calendar"></use>
            </svg>
            <span class="tasks__date">${this.formatDate(task)}</span>
          </div>

          ${
            task.project !== 'inbox'
              ? `          <div class="tasks__project">
            <svg class="tasks__icon">
             <use href="${icons}#icon-folder"></use>
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
      const index = model.tasks.findIndex((t) => t.id === id);

      const task = model.tasks[index];
      if (!task) return;
      taskEl.insertAdjacentHTML('afterbegin', this.itemInputs(task));

      // Trigger eventListeners
      const cancelBtn = taskEl.querySelector('.btn__cancel');
      const submitBtn = taskEl.querySelector('.btn__add');
      cancelBtn.addEventListener('click', this.itemValues.bind(this, task, taskEl));
      submitBtn.addEventListener('click', model.updateData.bind(null, index, taskEl));
      return;
    }

    // PriorityBtn Handling
    if (priorityBtn) {
      // Get index
      const id = +priorityBtn.closest('.tasks__item').dataset.id;

      // Remove el from internal data
      const index = model.tasks.findIndex((t) => t.id === id);
      model.tasks.splice(index, 1);

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
      submitBtn.addEventListener('click', model.addTask.bind(this, formEl));
      nameInput.addEventListener(
        'input',
        ModalView.trackInput.bind(this, nameInput, submitBtn)
      );
    }

    return;
  }

  addTaskBtn(el) {
    const markup = `
      <div class="tasks__item-add-task">
            <div class="tasks__icon-plus-box">
            <svg class="tasks__icon-plus">
            <use href="${icons}#icon-plus+"></use>
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
                  ${ModalView.generateProjects(task)}
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
        <use href="${icons}#icon-edit"></use>
      </svg>
      </button>
      <button class="tasks__priority tasks__priority-${task.priority}">
      <svg class="tasks__priority-icon">
        <use href="${icons}#icon-check"></use>
      </svg>
      </button>
      <h3 class="tasks__name">${task.name}</h3>
      <div>
        ${task.description ? `<p class="tasks__description">${task.description}</p>` : ''}
        <div class="tasks__data">
          <div class="tasks__due-date">
            <svg class="tasks__icon">
              <use href="${icons}#icon-calendar"></use>
            </svg>
            <span class="tasks__date">${this.formatDate(task)}</span>
          </div>

          ${
            task.project !== 'inbox'
              ? `<div class="tasks__project">
              <svg class="tasks__icon">
               <use href="${icons}#icon-folder"></use>
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
        ${ModalView.generateProjects()}
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

export default new ContentView();
