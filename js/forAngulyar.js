var app = angular.module("myApp", []);

app.directive("footerDate", function () {
    return {
        template: "&copy Официальный сайт МБУДО Ирбинская детская музыкальная школа " + (new Date()).getFullYear() + " г."
    }
});

app.directive("lastNews", function () {
   return {
       template: " <span><b><i> 13 марта 2021 года ученицы МБУДО «Ирбинская ДМШ» приняли участие в XXIII-ем районном конкурсе инструментального исполнительства</i></b></span>"
   }
});

// Контроллер для страницы index.html
app.controller("indexController", function ($scope) {
    $scope.oneNews = "13 марта 2021 года ученицы МБУДО «Ирбинская ДМШ» приняли участие в XXIII-ем\n" +
        "районном конкурсе инструментального исполнительства";
});

// Контроллер для страницы contact.html
app.controller("contactController", function ($scope) {
    $scope.countClick = 1;
    $scope.myClick = function () {
      $scope.countClick++;
    };
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
        {"linkPage": "index.html", "linkName": "Главная"},
        {"linkPage": "onas.html", "linkName": "О нас"},
        {"linkPage": "news.html", "linkName": "Новости"},
        {"linkPage": "docs.html", "linkName": "Документы"},
        {"linkPage": "pedsostav.html", "linkName": "Преподаватели"},
        {"linkPage": "uspeh.html", "linkName": "Наши успехи"},
        {"linkPage": "fotoalb.html", "linkName": "Фотоальбом"},
        {"linkPage": "contact.html", "linkName": "Контакты"}
    ];
});

