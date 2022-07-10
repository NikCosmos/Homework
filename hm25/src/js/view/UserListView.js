import { interpolate } from '../../../../common/utility';

export default class UserListView {
   static tempUserHtml =
      document.getElementById('tempUser').innerHTML;
   static userListEl = document.getElementById('userList');
   static createHtml(obj) {
      return interpolate(UserListView.tempUserHtml, obj);
   }

   constructor(config = {}) {
      UserListView.userListEl.addEventListener('click', (e) => {
         if (e.target.classList.contains('delete-btn')) {
            const currentUser = e.target.closest('.contact-user');
            const id = currentUser.dataset.id;
            config.onDeleteBtn(id);
         }
      });
   }

   renderList(objList) {
      const htmlList = objList.map(UserListView.createHtml).join('');
      UserListView.userListEl.innerHTML = htmlList;
   }
}
