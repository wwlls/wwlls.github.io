var App = angular.module('App',['ui.router', 'ui.bootstrap', 'ngAnimate']);
App.config(function($stateProvider, $urlRouterProvider){
  $urlRouterProvider.otherwise('/home');
  $stateProvider
    .state('home',{
        url: '/home',
        templateUrl: 'home.html',
        controller: function(){
            document.title = '个人资料'
        }
    })
    .state('technology',{
        url: '/technology',
        templateUrl: 'technology.html',
        controller: function(){
            document.title = '技术分享'
        }
    })
    .state('share',{
        url: '/share',
        templateUrl: 'share.html',
        controller: function(){
            document.title = '技术分享'
        }
    })
    .state('experience',{
        url: '/experience',
        templateUrl: 'experience.html',
        controller: function(){
            document.title = '工作经历'
        }
    })
    // home.list符合惯例
    .state('experience.projectOne', {
        url: '/projectOne',
        templateUrl: 'projectOne.html',
        controller: function($scope) {
            $scope.dogs = ['Bernese', 'Husky', 'Goldendoodle'];
        }
    })

    // home.paragraph符合惯例
    .state('experience.paragraph', {
        url: '/paragraph',
        template: 'I could sure use a drink right now.'
    })
})

App.controller('SecondController', function($scope) {

    $scope.message = 'test';

    $scope.products = [
        {
            name: 'Macallan 12',
            price: 50
        },
        {
            name: 'Chivas Regal Royal Salute',
            price: 10000
        },
        {
            name: 'Glenfiddich 1937',
            price: 20000
        }
    ];

}); 

App.controller('Header', function($scope){
  $scope.goHref = function(){
   window.location.hash = '/home'
  }  
})

//个人资料
App.directive('repeatDone', function () { // 用于判断ng-repeat是否执行完成
    return function (scope, element, attrs) {
        if (scope.$last) { // all are rendered
            attrs.repeatDone && scope.$eval(attrs.repeatDone);
        }
    }
})
App.controller('personalSize', function ($scope) {
    $scope.personal = [
        {
            label: '姓名：', 
            span: '危文亮', 
        }, 
        {
            label: '性别：', 
            span: '男', 
        },
        {
            label: '出生：', 
            span: '1992年', 
        },
        {
            label: '教育程度：', 
            span: '大专', 
        },
        {
            label: 'Tel：', 
            span: '',
        },
        {
            label: 'Email：', 
            span: '121048014@qq.com', 
        },
        {
            label: '婚姻状况：', 
            span: '否', 
        },
        {
            label: '现居住地：', 
            span: '杭州滨江', 
        },
        {
            label: '到岗时间：', 
            span: '待定', 
        }

    ];
    $scope.education = [
        {
            label: '学校：',
            span: '武汉软件工程职业技术学院'
        },
        {
            label: '时间：',
            span: '201009-201307'
        },
        {
            label: '专业：',
            span: '软件开发'
        }
    ];
    $scope.renderFinish = function(index) { // user对象
        console.log(index=5);
        for (var i = 0; i < index.length; i++) {
            var num = index[i];
            console.log(num)
        }
        // 
    };
});
App.controller('Information', function($scope){
    $scope.title='基本信息';
})
App.controller('Education', function($scope){
    $scope.title='教育经历';
})
App.controller('Self', function($scope){
    $scope.title='自我描述';
})
App.controller('Hobby', function($scope){
    $scope.title='爱好';
})
App.controller('technologyList', function($scope){
    $scope.title='生命不息，学习不止';
})