class TodosController {
   constructor($container) {
      this._todosListView = new TodosListView({
         onToggle: (id) => this.toggleTodo(id),
         onDelete: (id) => this.removeTodo(id),
      });

      $container.append(this._todosListView.$el);

      this._todosList = new TodosCollection();
      this._todosList
         .fetchList()
         .then(() =>
            this._todosListView.renderList(this._todosList.list)
         );

      this._todoForm = new TodoFormViem({
         onAdd: (title) => this.addTodo(title),
      });
   }

   addTodo(title) {
      this._todosList
         .addTodo(title)
         .then(() =>
            this._todosListView.renderList(this._todosList.list)
         );
   }

   toggleTodo(id) {
      this._todosList.toggleTodo(id);
      this._todosListView.renderList(this._todosList.list);
   }

   removeTodo(id) {
      this._todosList.removeTodo(id);
      this._todosListView.renderList(this._todosList.list);
   }
}
