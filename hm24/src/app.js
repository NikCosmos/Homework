import TodosController from './controller/TodosController';
import $ from 'jquery';

$(() => {
   new TodosController($('.task-list'));
});
