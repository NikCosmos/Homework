const TASK_ITEM = document.getElementById('templateTasklItem').innerHTML;
const EMPTY_TEXT = 'Empty value';
const SHORT_TEXT = 'Short value';

const inputTaskEl = document.getElementById('inputTask');
const addTaskBtnEl = document.getElementById('addTaskBtn');
const taskListEl = document.getElementById('taskList');
const addTaskFormEl = document.getElementById('addTaskForm');
const errorTextEl = document.getElementById('errorText');

addTaskFormEl.addEventListener('submit', onSubmitForm);
inputTaskEl.addEventListener('input', onTaskNameInput);
taskListEl.addEventListener('click', onClassDone);



function onSubmitForm(e) {
   e.preventDefault();
   addTaskInList();
}

function onTaskNameInput() {
   validateForm();
}

function validateForm() {
   const task = getTaskName();
   const error = validateTaskName(task);

   if (error) {
      showError(error);
   } else {
      clearError();
   }
}

function addTaskInList() {
   const task = getTaskName();
   addTask(task);
   clearTask();
}

function onClassDone(e) {
   if (e.target.classList.contains('task-item')) {
      toggleTaskClass(e.target);
   }
   if(e.target.classList.contains('delete-btn')){
      deleteTask(e.target.closest('.task-item'));
   }

}

function toggleTaskClass(el) {
   el.classList.toggle('done');
}

function getTaskName() {
   return inputTaskEl.value;
}

function addTask(task) {
   const el = createTaskEl(task);
   taskListEl.insertAdjacentHTML('beforeend', el);
}

function createTaskEl(task) {
   return TASK_ITEM.replace('{{task}}', task);
}

function validateTaskName(task) {
   if (task === '') return EMPTY_TEXT;
   if (task.length < 4) return SHORT_TEXT;
   return null;
}

function clearTask() {
   return (inputTaskEl.value = '');
}

function showError(msg) {
   errorTextEl.classList.remove('hidden');
   errorTextEl.textContent = msg;
   addTaskBtnEl.disabled = true;
}

function clearError() {
   errorTextEl.classList.add('hidden');
   errorTextEl.textContent = '';
   addTaskBtnEl.disabled = false;
}

function deleteTask(el){
   el.remove()
}
