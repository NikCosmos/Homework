import RestApi from '../../../../common/RestApi';

export default class UserModel {
   static URL_API =
      'https://5dd3d5ba8b5e080014dc4bfa.mockapi.io/users/';
   static userApi = new RestApi(UserModel.URL_API);

   constructor() {
      this.list = [];
   }
   fetchList() {
      return UserModel.userApi
         .getList()
         .then((date) => (this.list = date));
   }
   removeUser(userId) {
      this.list = this.list.filter((obj) => obj.id != userId);
      return UserModel.userApi.delete(userId);
   }
}
