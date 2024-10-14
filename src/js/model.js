import contentView from './contentView';
import modalView from './modalView';
import ModalView from './modalView';
import { projectSideView } from './sidebarView';

export let projects = ['school', 'personal', 'work'];
export let tasks = [
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

export const tasksFilter = (type) => {
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

export const updateData = function (id, itemEl, e) {
  e.preventDefault();

  const task = dataRetriever(itemEl);
  task.id = id;
  const index = tasks.findIndex((task) => task.id === id);
  tasks[index] = task;

  contentView.render();
};

export const addTask = function (formEl, e) {
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
  if (formEl.classList.contains('modal__content')) ModalView.closeModal();

  contentView.render();
  updateStorage();
};

export const updateTasks = (index) => {
  tasks = tasks.filter((task) => task.project !== projects[index]);
  updateStorage();
};

export const addProject = (nameInp, e) => {
  e.preventDefault();
  const name = nameInp.value.toLowerCase();

  modalView.closeModal();
  if (name.toLowerCase() === 'inbox' || projects.find((p) => p === name)) return;

  projects.push(name);
  projectSideView._clear();
  projectSideView.updateMarkup();
  updateStorage('project');
};

export const useStorage = (data, type) => {
  if (type === 'tasks') {
    tasks = data;
    return;
  }
  projects = data;
};

export const updateStorage = (type = undefined) => {
  if (type === 'project') {
    localStorage.setItem('projects', JSON.stringify(projects));
    return;
  }
  localStorage.setItem('tasks', JSON.stringify(tasks));
};
