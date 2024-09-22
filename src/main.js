import HeaderComponent from './view/header-component.js';
import {render, RenderPosition} from './framework/render.js';
import FormAddTaskComponent from './view/form-add-task-component.js';
import TaskBoardComponent from './view/task-board-component.js';

const bodyContainer = document.querySelector('.board-app');
const formContainer = document.querySelector('.add-task');
const taskListContainer = document.querySelector('.tasks');


render(new HeaderComponent(), bodyContainer, RenderPosition.BEFOREBEGIN);
render(new FormAddTaskComponent(), formContainer);
render(new TaskBoardComponent(), taskListContainer);