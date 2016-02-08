System.register(['angular2/core', './../../services/category.service', './../../services/reference.service', './../../services/collection.service'], function(exports_1) {
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
    var core_1, category_service_1, reference_service_1, collection_service_1;
    var CollectionCreateComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (category_service_1_1) {
                category_service_1 = category_service_1_1;
            },
            function (reference_service_1_1) {
                reference_service_1 = reference_service_1_1;
            },
            function (collection_service_1_1) {
                collection_service_1 = collection_service_1_1;
            }],
        execute: function() {
            CollectionCreateComponent = (function () {
                function CollectionCreateComponent(_categoryService, _referenceService, _collectionService) {
                    this._categoryService = _categoryService;
                    this._referenceService = _referenceService;
                    this._collectionService = _collectionService;
                    this.collection = {
                        id: 0,
                        author: "",
                        name: "",
                        description: "",
                        cover_art: "file.zip",
                        volume_set: [],
                        category: [],
                        referenceWork: [],
                        updated: new Date(),
                        created: new Date()
                    };
                }
                CollectionCreateComponent.prototype.ngOnInit = function () {
                    this.getCategories();
                    this.getReferences();
                };
                CollectionCreateComponent.prototype.createCollection = function (collection) {
                    collection.author = this.user.name;
                    this._collectionService.createCollection(collection);
                };
                CollectionCreateComponent.prototype.getCategories = function () {
                    var _this = this;
                    this._categoryService.getCategories().subscribe(function (data) { return _this.categories = data; }, function (error) { return console.error('Error' + error); }, function () { return console.log(JSON.stringify(_this.categories)); });
                };
                CollectionCreateComponent.prototype.getReferences = function () {
                    var _this = this;
                    this._referenceService.getReferenceWorks().subscribe(function (data) { return _this.references = data; }, function (error) { return console.error('Error' + error); }, function () { return console.log(JSON.stringify(_this.references)); });
                };
                CollectionCreateComponent = __decorate([
                    core_1.Component({
                        selector: 'collection-create-form',
                        templateUrl: 'app/components/collection_create_form/collection-create.html',
                        inputs: ['user'],
                        providers: [category_service_1.CategoryService, reference_service_1.ReferenceWorkService, collection_service_1.CollectionService]
                    }), 
                    __metadata('design:paramtypes', [category_service_1.CategoryService, reference_service_1.ReferenceWorkService, collection_service_1.CollectionService])
                ], CollectionCreateComponent);
                return CollectionCreateComponent;
            }());
            exports_1("CollectionCreateComponent", CollectionCreateComponent);
        }
    }
});
//# sourceMappingURL=collection-create.component.js.map