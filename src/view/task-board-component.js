import {createElement} from '../framework/render.js';


function createTaskBoardComponentTemplate() {
    return (
        
        `<section class="taskboard"></section>`
      );
}


export default class TaskBoardComponent {
  getTemplate() {
    return createTaskBoardComponentTemplate();
  }


  getElement() {
    if (!this.element) {
      this.element = createElement(this.getTemplate());
    }

    console.log(this.element)
    return this.element;
  }


  removeElement() {
    this.element = null;
  }
}