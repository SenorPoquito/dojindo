System.register(['angular2/core', './mock-user', 'rxjs/Rx'], function(exports_1) {
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
    var core_1, mock_user_1;
    var UserService;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (mock_user_1_1) {
                mock_user_1 = mock_user_1_1;
            },
            function (_1) {}],
        execute: function() {
            // import {Http, HTTP_PROVIDERS} from 'angular2/http';
            // import { Injectable } from 'angular2/core';
            UserService = (function () {
                function UserService() {
                    this._baseUrl = "http://localhost:8000/api/v1/";
                }
                UserService.prototype.getUsers = function () {
                    // return this.http.get(this._baseUrl+'/users').map(res => <User[]> res.json().data)
                    // .catch(this.handleError);
                    return Promise.resolve(mock_user_1.USERS);
                };
                UserService.prototype.getUser = function (user) {
                };
                UserService = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [])
                ], UserService);
                return UserService;
            }());
            exports_1("UserService", UserService);
        }
    }
});
//# sourceMappingURL=user.service.js.map