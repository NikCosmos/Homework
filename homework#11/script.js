const DONE_CLASS = 'done';
const CLASS_ITEM = 'task-item';
const CLASS_DELETE_BTN = 'delete-btn';
const CLASS_BORDER_ERR = 'errorInput';
const CLASS_BORDER_DONE = 'doneInput';
const TEXT_ERROR = {
   empty: 'Empty value',
   short: 'Short value',
};

const TEMPLATE_TASK = document.getElementById('task-template').innerHTML;

const taskNameInputEL = document.getElementById('taskNameInput');
const taskListEl = document.getElementById('taskList');
const formEL = document.getElementById('addTaskForm');
const errorEl = document.querySelector('#errorContainer');
const addBtnEL = document.querySelector('#addBtn');

formEL.addEventListener('submit', onClickAddBtn);
taskNameInputEL.addEventListener('input', onInputTask);
taskListEl.addEventListener('click', onDoneClick);
taskListEl.addEventListener('click', onDeleteClick);

let taskArr = [];

function onClickAddBtn(e) {
   e.preventDefault();
   submitForm();
}

function submitForm() {
   if (!validateVal()) {
      const objTask = getObjTask();
      addTask(objTask);
      resetForm();
      removeBorder(CLASS_BORDER_DONE);
   }
}

function onInputTask() {
   validateVal();
}

function validateVal() {
   const val = getValue();
   const error = validator(val);
   if (error) {
      showError(error);
   } else {
      clearError();
   }
   return error;
}

function validator(val) {
   if (val === '') return TEXT_ERROR.empty;
   if (val.length < 3) return TEXT_ERROR.short;
   return null;
}

function getValue() {
   return taskNameInputEL.value;
}

function getObjTask() {
   let objTask = {};
   objTask.task = taskNameInputEL.value;
   return objTask;
}

function addTask(objTask) {
   objTask.id = Date.now();
   taskArr.push(objTask);

   renderListTask();
}

function renderListTask() {
   taskListEl.innerHTML = taskArr.map(generateTaskHtml).join();
}

function generateTaskHtml(obj) {
   return TEMPLATE_TASK.replace('{{title}}', obj.task).replace(
      '{{id}}',
      obj.id
   );
}

function onDoneClick(e) {
   if (e.target.classList.contains(CLASS_ITEM)) {
      e.target.classList.toggle(DONE_CLASS);
   }
}

function onDeleteClick(e) {
   if (e.target.classList.contains(CLASS_DELETE_BTN)) {
      const taskId = getTaskId(e.target);
      removeTask(taskId);
   }
}

function getTaskId(elem) {
   const row = elem.closest('.' + CLASS_ITEM);
   return +row.dataset.id;
}

function resetForm() {
   formEL.reset();
}

function removeTask(id) {
   taskArr = taskArr.filter((obj) => obj.id !== id);
   renderListTask();
}

function showError(err) {
   errorEl.textContent = err;
   addBtnEL.disabled = true;
   addBorder(CLASS_BORDER_ERR);
   removeBorder(CLASS_BORDER_DONE);
}

function clearError() {
   errorEl.textContent = '';
   addBtnEL.disabled = false;
   addBorder(CLASS_BORDER_DONE);
   removeBorder(CLASS_BORDER_ERR);
}

function addBorder(val) {
   taskNameInputEL.classList.add(val);
}

function removeBorder(val) {
   taskNameInputEL.classList.remove(val);
}
