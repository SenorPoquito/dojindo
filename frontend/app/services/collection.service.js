System.register(['angular2/core', 'angular2/http', 'rxjs/Rx'], function(exports_1, context_1) {
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
    var core_1, http_1, http_2;
    var CollectionService;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
                http_2 = http_1_1;
            },
            function (_1) {}],
        execute: function() {
            CollectionService = (function () {
                function CollectionService(_http) {
                    this._http = _http;
                    this._baseUrl = "http://localhost:8000/api/v1/collections/";
                }
                CollectionService.prototype.getCollections = function () {
                    var query = this._baseUrl;
                    console.log('GET : ' + query);
                    return this._http
                        .get(query)
                        .map(function (res) { return res.json(); }).share();
                };
                CollectionService.prototype.createCollection = function (collection) {
                    // var bodyJson = {
                    //   'name':collection.name,
                    //   'description':collection.description,
                    //   'cover_art':collection.cover_art,
                    //   'author' : collection.author,
                    //   'category' : [],
                    //   'referenceWork' : []
                    // }
                    //
                    // bodyJson.category.push(collection.category);
                    // bodyJson.referenceWork.push(collection.referenceWork);
                    //
                    var body = JSON.stringify(collection);
                    var query = this._baseUrl;
                    var headers = new http_2.Headers();
                    headers.append('Content-Type', 'application/json');
                    console.log('POST : ' + query);
                    console.log("BODY : " + body);
                    console.log("HEADERS : " + headers);
                    this._http
                        .post(query, body, {
                        headers: headers
                    })
                        .map(function (res) { return res.json(); })
                        .subscribe(function (data) { return console.log("RETURN : " + data); }, function (err) { return console.log("ERROR : " + err); }, function () { return console.log("User Created"); });
                };
                CollectionService.prototype.deleteCollection = function (collection) {
                    var collectionId = collection.id;
                    var query = this._baseUrl + collectionId + '/';
                    this._http
                        .delete(query)
                        .map(function (res) { return res.json(); })
                        .subscribe(function (err) { return console.log("ERROR : " + err); }, function () { return console.log("User Deleted"); });
                };
                CollectionService.prototype.getUser = function (user) {
                };
                CollectionService = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [http_1.Http])
                ], CollectionService);
                return CollectionService;
            }());
            exports_1("CollectionService", CollectionService);
        }
    }
});
//# sourceMappingURL=collection.service.js.map