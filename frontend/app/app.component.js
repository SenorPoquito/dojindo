System.register(['angular2/core', './services/user.service', './components/user_list/user-list.component', './components/create-user/create-user.component', './components/collection_create_form/collection-create.component'], function(exports_1, context_1) {
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
    var core_1, user_service_1, user_list_component_1, create_user_component_1, collection_create_component_1;
    var AppComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (user_service_1_1) {
                user_service_1 = user_service_1_1;
            },
            function (user_list_component_1_1) {
                user_list_component_1 = user_list_component_1_1;
            },
            function (create_user_component_1_1) {
                create_user_component_1 = create_user_component_1_1;
            },
            function (collection_create_component_1_1) {
                collection_create_component_1 = collection_create_component_1_1;
            }],
        execute: function() {
            AppComponent = (function () {
                function AppComponent() {
                    this.title = 'Dojo';
                }
                AppComponent.prototype.ngOnInit = function () {
                    console.log("App Started");
                };
                AppComponent.prototype.onSelect = function (view) {
                    this.selectedView = view;
                    console.log(this.selectedView);
                };
                AppComponent = __decorate([
                    core_1.Component({
                        selector: 'my-app',
                        template: "\n  <h1>{{title}}</h1>\n  <h2 *ngIf=\"selectedUser\">Current User : {{selectedUser.name}}</h2>\n  <button (click)=\"onSelect('user-list')\">User List</button>\n  <button (click)=\"onSelect('new-user')\">Register User</button>\n  <button *ngIf=\"selectedUser\" (click)=\"onSelect('create-collection')\">Create Collection</button>\n\n  <user-list *ngIf=\"selectedView=='user-list'\" [(user)]=\"selectedUser\"></user-list>\n  <collection-create-form *ngIf=\"selectedView=='create-collection'\" [user]=\"selectedUser\"></collection-create-form>\n  <create-user *ngIf=\"selectedView=='new-user'\"></create-user>\n\n  ",
                        providers: [user_service_1.UserService],
                        directives: [user_list_component_1.UserListComponent, create_user_component_1.CreateUserComponent, collection_create_component_1.CollectionCreateComponent]
                    }), 
                    __metadata('design:paramtypes', [])
                ], AppComponent);
                return AppComponent;
            }());
            exports_1("AppComponent", AppComponent);
        }
    }
});
//# sourceMappingURL=app.component.js.map