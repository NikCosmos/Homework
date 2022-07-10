import UserModel from '../model/UserModel';
import UserListView from '../view/UserListView';
import UserFormView from '../view/UserFormView';

export default class UserController {
   constructor() {
      this._userListModel = new UserModel();
      this._userListModel
         .fetchList()
         .then(() =>
            this._userListView.renderList(this._userListModel.list)
         );

      this._userListView = new UserListView({
         onDeleteBtn: (id) => this.deleteUser(id),
      });
      this._userFormView = new UserFormView();
   }

   deleteUser(id) {
      this._userListModel.removeUser(id);
      this._userListView.renderList(this._userListModel.list);
   }
}
