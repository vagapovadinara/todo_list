import {createElement} from '../framework/render.js';


function createTaskComponentTemplate(task) {
    const {title, status}=task;

    return (
        `
        <div class="${status}">
        <div class="task__body">
        <p class="task--view">${title}</p>
        <input type="text" class="task--input"/>
        </div>
        <button aria-label="Change" class="task__edit" type="button"></button>
        </div>`
      );
}


export default class TaskComponent {

  constructor({task}){
    this.task=task;
  }
  getTemplate() {
    return createTaskComponentTemplate(this.task);
  }


  getElement() {
    if (!this.element) {
      this.element = createElement(this.getTemplate());
    }


    return this.element;
  }


  removeElement() {
    this.element = null;
  }
}