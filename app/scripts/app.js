(function (angular) {
    "use strict";

    var CustomException = function () {
        this.message = "well, that didn't work";
        this.stack = (new Error()).stack;
    };

    CustomException.prototype = Object.create(Error.prototype);

    var SpecificCustomException = function () {
        this.message = "This didn't work for concrete reasons";
        this.stack = (new Error()).stack;
    };

    SpecificCustomException.prototype = Object.create(CustomException.prototype);


    angular.module('dataProviderApp', [])
        .service("API", function ($q) {

            var getIt = function () {
                var q = $q.defer();
                q.reject("shit");
                return q.promise;
            };

            return {
                getTasks: function () {
                    return getIt().then(function () {
                        console.log("OK");
                    }, function () {
                        throw new SpecificCustomException();
                    })
                },
                getPeople: function () {
                    return getIt().then(function () {
                        console.log("OK");
                    }, function () {
                        throw new Error();
                    })
                }
            }

        });


    angular.module('playgroundApp', [
            'ngCookies',
            'ngResource',
            'ngSanitize',
            'ngRoute',
            'dataProviderApp',
            'ui.bootstrap'

        ])
        .config(function ($routeProvider, $provide) {
            $routeProvider
                .when('/', {
                    templateUrl: 'views/main.html',
                    controller: 'MainCtrl'
                })
                .otherwise({
                    redirectTo: '/'
                });

            $provide.decorator("$exceptionHandler", ['$delegate', function ($delegate) {
                return function (exception, cause) {
                    if (!(exception instanceof CustomException)) {
                        $delegate(exception, cause);
                    }
                };
            }]);
        })
        .directive("epIf", function ($parse, $timeout) {
            return {
                link: function ($scope, $elem, $attr) {
                    var parent = $elem.parent(),
                        elem = $elem;

                    $scope.$watch($attr.epIf, function () {
                        if (!$scope.$eval($attr.epIf)) {
                            parent.append(elem)
                        } else {
                            $elem.remove();
                        }
                    })
                }
            }
        })
        .directive("channelitem", function ($compile, $http, $timeout, $templateCache) {

            var tpls = ["views/my-cool-container.tpl.html", "views/container-template.tpl.html"];

            $http.get(tpls[0], {cache: $templateCache});
            $http.get(tpls[1], {cache: $templateCache});

            return {
                restrict: "A",
                link: function ($scope, $elem) {

                    var loadTpl = function () {

                        var r = Math.random() > 0.5,
                            dir = null;

                        if (r) {
                            dir = tpls[+r];
                        } else {
                            dir = tpls[+r];
                        }

                        $http.get(dir, {cache: $templateCache}).then(function (tpl) {
                            var comp = $compile(tpl.data)($scope);
                            $elem.html(comp);
                        });

                        $timeout(function () {
                            loadTpl();
                        }, 1000);

                    };

                    loadTpl();

                }
            }
        })
        .controller('MainCtrl', function ($scope, API, $timeout) {

            $scope.a = true;

            var toggle = function () {
                $scope.a = $scope.a + 1;
                if ($scope.a < 100) {
                    $timeout(function () {
                        toggle();
                    }, 20);
                }
            };

            $timeout(function () {
                toggle();
            }, 20);

        });


}(angular));