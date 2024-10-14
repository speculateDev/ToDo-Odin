import View from './view';
import { addTask, projects, addProject } from './model';

class ModalView extends View {
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
      this._modalFormEl.addEventListener('submit', addProject.bind(null, nameInput), {
        once: true,
      });
      return;
    }
    this._modalFormEl.addEventListener('submit', addTask.bind(this, this._modalFormEl), {
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
    return projects
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

export default new ModalView();
