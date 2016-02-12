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
    var CreateUserComponent;
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
            CreateUserComponent = (function () {
                function CreateUserComponent(_userService) {
                    this._userService = _userService;
                    this.updateUser = new core_2.EventEmitter();
                    this.user = {
                        'name': "",
                        'email': "",
                        'collection_set': [],
                        'updated': new Date(),
                        'created': new Date()
                    };
                }
                CreateUserComponent.prototype.ngOnInit = function () {
                    console.log("Create User");
                };
                CreateUserComponent.prototype.submitUser = function (newUser) {
                    this._userService.createUser(newUser);
                    this.user = {
                        'name': "",
                        'email': "",
                        'collection_set': [],
                        'updated': new Date(),
                        'created': new Date()
                    };
                };
                CreateUserComponent = __decorate([
                    core_1.Component({
                        selector: 'create-user',
                        template: "\n  <div>\n  <form>\n  <input [(ngModel)]=\"user.name\" name=\"user-name\" placeholder=\"Username\" ><br>\n  <input [(ngModel)]=\"user.email\" type=\"email\" name=\"email-description\" placeholder=\"Email\" ><br>\n  <button (click)=\"submitUser(user)\" >Register</button>\n  </form>\n  </div>\n\n  ",
                        providers: [user_service_1.UserService],
                    }), 
                    __metadata('design:paramtypes', [user_service_1.UserService])
                ], CreateUserComponent);
                return CreateUserComponent;
            }());
            exports_1("CreateUserComponent", CreateUserComponent);
        }
    }
});
//# sourceMappingURL=create-user.component.js.map