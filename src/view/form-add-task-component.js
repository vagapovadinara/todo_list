import {createElement} from '../framework/render.js';


function createFormAddTaskComponentTemplate() {
    return (
        `<form class="new_exercise" aria-label="Форма добавления задачи">
        <!--<div class="add-task__input-wrapper">-->
        <label for="add-task">Новая задача</label><br>
          <input type="text" name="task-name" id="task_name" placeholder="Название задачи..." required>
        </div>
        <button class="add_button" id="add_button" type="submit">
          <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="10.0833" y="3.66663" width="1.83333" height="14.6667" fill="white" />
            <rect x="18.3333" y="10.0833" width="1.83333" height="14.6667" transform="rotate(90 18.3333 10.0833)"
              fill="white" />
          </svg>
          <span>Добавить</span>
        </button>
      </form>`
      );
}


export default class FormAddTaskComponent {
  getTemplate() {
    return createFormAddTaskComponentTemplate();
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