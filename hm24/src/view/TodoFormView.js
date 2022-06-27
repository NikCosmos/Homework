class TodoFormViem {
   static FORM_ID = '#addTaskForm';
   static INPUT_ID = '#taskNameInput';
   constructor(config = {}) {
      this._form = $(TodoFormViem.FORM_ID).on('submit', (e) => {
         e.preventDefault();
         const $input = $(TodoFormViem.INPUT_ID);
         config.onAdd && config.onAdd({ title: $input.val() });
         $input.val('');
      });
   }
}
