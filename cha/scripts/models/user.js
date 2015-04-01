define(["$http"],function($http){
    var user=function(){
    };
    user.prototype={
        Id:"",
        userName:"",
        password:"",
        email:""
    };
    user.prototype.register=function(callback){
          $http.registerUser(this,callback);
          return this;
    };
    user.prototype.deleted=function(callback) {
        $http.deletedUser(this,callback);
        return this;
    };
     return user;
});