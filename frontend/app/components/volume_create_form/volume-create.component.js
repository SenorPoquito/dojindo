System.register(['angular2/core', './../../services/user.service'], function(exports_1) {
    "use strict";
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, user_service_1;
    var VolumeCreateComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (user_service_1_1) {
                user_service_1 = user_service_1_1;
            }],
        execute: function() {
            VolumeCreateComponent = (function () {
                function VolumeCreateComponent(_userService) {
                    this._userService = _userService;
                }
                VolumeCreateComponent.prototype.ngOnInit = function () { this.getUsers(); };
                VolumeCreateComponent.prototype.getUsers = function () {
                    var _this = this;
                    this._userService.getUsers().subscribe(function (users) { return _this.users = users; }, function (error) { return _this.errorMessage = error; });
                };
                VolumeCreateComponent = __decorate([
                    core_1.Component({
                        selector: 'volume-create-form',
                        templateUrl: 'app/components/volume_create_form/volume-create.html',
                        bindings: [user_service_1.UserService]
                    }), 
                    __metadata('design:paramtypes', [user_service_1.UserService])
                ], VolumeCreateComponent);
                return VolumeCreateComponent;
            }());
            exports_1("VolumeCreateComponent", VolumeCreateComponent);
        }
    }
});
//# sourceMappingURL=volume-create.component.js.map