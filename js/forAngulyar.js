var app = angular.module("myApp", ["ngRoute"]);

app.config(function($routeProvider) {
   $routeProvider
       .when("/", {
           templateUrl: 'home.html'
       })
       .when("/onas", {
           templateUrl: 'onas.html',
           controller: 'onasController'
       })
       .when("/news", {
           templateUrl: 'news.html',
           controller: 'newsController'
       })
       .when("/docs", {
           templateUrl: 'docs.html',
           controller: 'docsController'
       })
       .when("/pedsostav", {
           templateUrl: 'pedsostav.html',
           controller: 'pedsostavController'
       })
       .when("/uspeh", {
           templateUrl: 'uspeh.html',
           controller: 'uspehController'
       })
       .when("/fotoalb", {
           templateUrl: 'fotoalb.html',
           controller: 'fotoalbController'
       })
       .when("/contact", {
           templateUrl: 'contact.html',
           controller: 'contactController'
       })
       .otherwise("", {
           template: "<h2>Page not found</h2>"
       });
});

app.directive("footerDate", function () {
    return {
        template: "&copy Официальный сайт МБУДО Ирбинская детская музыкальная школа " + (new Date()).getFullYear() + " г."
    }
});

app.directive("lastNews", function () {
   return {
       template: " <span style='font-size: 14px;'><b><i> 7 апреля 2021 года состоялся XII МЕЖДУНАРОДНЫЙ музыкально-театральный конкурс-фестиваль «Надежда» (г. Красноярск)</i></b></span>"
   }
});

// Контроллер для страницы index.html
app.controller("indexController", function ($scope) {
    $scope.oneNews = "7 апреля 2021 года ученик МБУДО «Ирбинская ДМШ» НЕЖИД АНДРЕЙ успешно выступил\n" +
        "\t\tна XII МЕЖДУНАРОДНОМ музыкально-театральном конкурсе-фестивале «Надежда» (г. Красноярск)";
});

// Контроллер для страницы contact.html
app.controller("contactController", function ($scope) {
    $scope.prefixes = ['Mr', 'Mrs', 'Miss', 'Ms', 'Dr'];
});

// Контроллер для страницы docs.html
app.controller("docsController", function ($scope) {
});

// Контроллер для страницы fotoalb.html
app.controller("fotoalbController", function ($scope) {
});

// Контроллер для страницы news.html
app.controller("newsController", function ($scope) {
});

// Контроллер для страницы onas.html
app.controller("onasController", function ($scope) {
});

// Контроллер для страницы pedsostav.html
app.controller("pedsostavController", function ($scope) {
});

// Контроллер для страницы uspeh.html
app.controller("uspehController", function ($scope) {
});

// Контроллер для страницы zoom.html
app.controller("zoomController", function ($scope) {
});

// Контроллер для меню(слева) на всех страницах
app.controller("menuController", function ($scope) {
    $scope.listMenu = [
        {"linkPage": "#/!", "linkName": "Главная"},
        {"linkPage": "#!onas", "linkName": "О нас"},
        {"linkPage": "#!news", "linkName": "Новости"},
        {"linkPage": "#!docs", "linkName": "Документы"},
        {"linkPage": "#!pedsostav", "linkName": "Преподаватели"},
        {"linkPage": "#!uspeh", "linkName": "Наши успехи"},
        {"linkPage": "#!fotoalb", "linkName": "Фотоальбом"},
        {"linkPage": "#!contact", "linkName": "Контакты"}
    ];
});

