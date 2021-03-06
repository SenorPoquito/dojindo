System.register(['angular2/core', '../../services/user.service'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, core_2, user_service_1;
    var UserListComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
                core_2 = core_1_1;
            },
            function (user_service_1_1) {
                user_service_1 = user_service_1_1;
            }],
        execute: function() {
            UserListComponent = (function () {
                function UserListComponent(_userService) {
                    this._userService = _userService;
                    this.updateUser = new core_2.EventEmitter();
                }
                UserListComponent.prototype.ngOnInit = function () {
                    this.getUsers();
                };
                UserListComponent.prototype.getUsers = function () {
                    var _this = this;
                    this._userService.getUsers().subscribe(function (users) { return _this.users = users; }, function (error) { return console.error('Error' + error); }, function () { return console.log(_this.users); });
                };
                UserListComponent.prototype.deleteUser = function (user) {
                    this._userService.deleteUser(user);
                    // this.getUsers();
                };
                UserListComponent.prototype.onSelect = function (user) {
                    this.user = user;
                    this.updateUser.next(user);
                    console.log(this.user);
                };
                UserListComponent = __decorate([
                    core_1.Component({
                        selector: 'user-list',
                        template: "\n  <div>\n  <ul>\n    <li *ngFor=\"#user of users\" (click)=\"onSelect(user)\" [class.selected]=\"user === selectedUser\">\n    <p>----{{user.name}}----</p>\n    <p>Email: {{user.email}}</p>\n    <p>Last Login : {{user.updated}}</p>\n    <p>Created : {{user.created}}</p>\n    <button (click)=\"deleteUser(user)\">Delete</button>\n    <h3 *ngIf=\"user.collection_set.length>0\">Series</h3>\n    <ul>\n      <li *ngFor='#collection of user.collection_set'>\n      <div>\n      <h4>{{collection.name}}</h4>\n      <ol>\n        <li  *ngFor='#volume of collection.volume_set'>\n          <p>{{volume.name}}</p>\n          <pre>{{volume.description}}</pre>\n        </li>\n      </ol>\n      </div>\n      </li>\n    </ul>\n    </li>\n  </ul>\n  </div>\n  ",
                        providers: [user_service_1.UserService],
                        inputs: ['user'],
                        outputs: ['updateUser: userChange']
                    }), 
                    __metadata('design:paramtypes', [user_service_1.UserService])
                ], UserListComponent);
                return UserListComponent;
            }());
            exports_1("UserListComponent", UserListComponent);
        }
    }
});
//# sourceMappingURL=user-list.component.js.map