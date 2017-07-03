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
    .state('news',{
        url: '/news',
        templateUrl: 'news.html',
        controller: function(){
            document.title = '技术分享'
        }
    })
    .state('recruit',{
        url: '/recruit',
        templateUrl: 'recruit.html',
        controller: function(){
            document.title = '人才招聘'
        }
    })
})

App.controller('Header', function($scope){
  $scope.goHref = function(){
   window.location.hash = '/home'
  }  
})

App.controller('Header1', function($scope){
  $scope.goHref1 = function(){
    alert(11)
   window.location.hash = '/news'
  }  
})

//banner切换
App.controller('Carousel', function ($scope) {
    $scope.myInterval = 1800;
    $scope.noWrapSlides = false;
    var slides = $scope.slides = [];
    $scope.addSlide = function () {
        var newWidth = slides.length + 1;
        console.log(newWidth)
        slides.push({
            image: 'images/jtBanner.jpg',
        });
        slides.push({
            image: 'images/hydBanner.jpg',
        });
        slides.push({
            image: 'images/hybBanner.jpg',
        });
        slides.push({
            image: 'images/xhzBanner.jpg',
        });
    };
    $scope.addSlide();

    var slidesNews = $scope.slidesNews = [];
    $scope.addSlideNews = function () {
        var newWidth = 600 + slidesNews.length + 1;
        console.log(newWidth)
        slidesNews.push({
            image: 'images/newsBanner.png',
            text: '2015年中国民营企业500强发布支氏控股2015年中国民营企业',
        });
        slidesNews.push({
            image: 'images/newsBanner.png',
            text: '2015年中国民营企业500强发布   支氏控股2015年中国民营企业',
        });
        slidesNews.push({
            image: 'images/newsBanner.png',
            text: '2015年中国民营企业500强发布   支氏控股2015年中国民营企业',
        });
        slidesNews.push({
            image: 'images/newsBanner.png',
            text: '2015年中国民营企业500强发布   支氏控股2015年中国民营企业',
        });
    };
    $scope.addSlideNews(); 

//项目广告图片
    $scope.projectLists =[
        {images : 'images/projectOne.png'},
        {images : 'images/projectTwo.png'},
        {images : 'images/projectThere.png'}
    ]
    $scope.goImages = function(projectList){
        if(projectList.images === 'images/projectOne.png'){
            window.location.href = 'https://www.huayingdai.net/'
        }else if(projectList.images === 'images/projectTwo.png'){
            window.location.href = 'http://www.huayingbaolicai.com/'
        }
        else if(projectList.images === 'images/projectThere.png'){
            window.location.href = 'https://www.xian62.com/'
        }
    };
});

//个人资料
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
            span: '13666606473',
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
    ]
});

// App.controller('bannerImg', function ($scope) {
//     $scope.img = [{
//       imageUrl: 'images/banner01.jpg',
//     }, 
//     {
//       imageUrl: 'images/banner01.jpg',
//     }, 
//     {
//       imageUrl: 'images/banner01.jpg',
//     },
//     {
//       imageUrl: 'images/banner01.jpg',
//     }];
//     setTimeout(function() {    
//         var swiper = new Swiper('.swiper-container', {
//         pagination: '.swiper-pagination',
//         paginationClickable: true,
//         spaceBetween: 0,
//         centeredSlides: true,
//         autoplay: 2000,
//         autoplayDisableOnInteraction: false
//         });
//     }, 100);
// });
//项目图片
App.controller('projectImg', function ($scope) {
    $scope.img = [
        {imageUrl: 'images/projectOne.png'}, 
        {imageUrl: 'images/projectTwo.png'}, 
        {imageUrl: 'images/projectThere.png'}
    ];
});
//新闻中心
App.controller('newSize', function ($scope) {
    $scope.news = [
        {
            title: '支氏控股集团2016年羽毛球、兵兵球赛圆满结束', 
            time: '2016-9-30', 
            explain: '以利润和品牌价值为核心，搞好企业管理和企业文化建设基础工作，走产业创新和机制创新之路，立足杭州，逐步向全国拓展。通过产业投资和资本运营，实现跳跃式快速发展通过产业投资和资本运营，实现跳跃式快速发展'
        }, 
        {
            title: '支氏控股集团2016年羽毛球、兵兵球赛圆满结束', 
            time: '2016-9-30', 
            explain: '以利润和品牌价值为核心，搞好企业管理和企业文化建设基础工作，走产业创新和机制创新之路，立足杭州，逐步向全国拓展。通过产业投资和资本运营，实现跳跃式快速发展通过产业投资和资本运营，实现跳跃式快速发展'
        }, 
        {
            title: '支氏控股集团2016年羽毛球、兵兵球赛圆满结束', 
            time: '2016-9-30', 
            explain: '以利润和品牌价值为核心，搞好企业管理和企业文化建设基础工作，走产业创新和机制创新之路，立足杭州，逐步向全国拓展。通过产业投资和资本运营，实现跳跃式快速发展通过产业投资和资本运营，实现跳跃式快速发展'
        }
    ];
});
//分页
App.controller("Pages",function($scope){
    $scope.currentPage = 0;
    $scope.pageSize = 6;
    $scope.lists = [
        {
            title: '支氏控股集团2016年羽毛球、乒乓球赛圆满落幕', 
            time: '2016-9-30', 
            imgNews:'images/news01.png', 
            explain:'一场球赛，尽显支氏人的体育精神。昨天，为了丰富员工文化生活，提升员工精神面貌，并为组队参加杭州市运动会选拔选手，支氏控股集团在创客空间举办了一场别开生面的员工羽毛球和乒乓球比赛'
        },
        {
            title: '支氏控股集团2016年羽毛球、乒乓球赛圆满落幕', 
            time: '2016-9-30', 
            imgNews:'images/news02.png', 
            explain:'一场球赛，尽显支氏人的体育精神。昨天，为了丰富员工文化生活，提升员工精神面貌，并为组队参加杭州市运动会选拔选手，支氏控股集团在创客空间举办了一场别开生面的员工羽毛球和乒乓球比赛'
        },
        {
            title: '支氏控股集团2016年羽毛球、乒乓球赛圆满落幕', 
            time: '2016-9-30', 
            imgNews:'images/news03.png', 
            explain:'一场球赛，尽显支氏人的体育精神。昨天，为了丰富员工文化生活，提升员工精神面貌，并为组队参加杭州市运动会选拔选手，支氏控股集团在创客空间举办了一场别开生面的员工羽毛球和乒乓球比赛'
        },
        {
            title: '支氏控股集团2016年羽毛球、乒乓球赛圆满落幕', 
            time: '2016-9-30', 
            imgNews:'images/news04.png', 
            explain:'一场球赛，尽显支氏人的体育精神。昨天，为了丰富员工文化生活，提升员工精神面貌，并为组队参加杭州市运动会选拔选手，支氏控股集团在创客空间举办了一场别开生面的员工羽毛球和乒乓球比赛'
        },
        {
            title: '支氏控股集团2016年羽毛球、乒乓球赛圆满落幕', 
            time: '2016-9-30', 
            imgNews:'images/news05.png', 
            explain:'一场球赛，尽显支氏人的体育精神。昨天，为了丰富员工文化生活，提升员工精神面貌，并为组队参加杭州市运动会选拔选手，支氏控股集团在创客空间举办了一场别开生面的员工羽毛球和乒乓球比赛'
        },
        {
            title: '支氏控股集团2016年羽毛球、乒乓球赛圆满落幕', 
            time: '2016-9-30', 
            imgNews:'images/news01.png', 
            explain:'一场球赛，尽显支氏人的体育精神。昨天，为了丰富员工文化生活，提升员工精神面貌，并为组队参加杭州市运动会选拔选手，支氏控股集团在创客空间举办了一场别开生面的员工羽毛球和乒乓球比赛'
        },
        {
            title: '支氏控股集团2016年羽毛球、乒乓球赛圆满落幕', 
            time: '2016-9-30', 
            imgNews:'images/news01.png', 
            explain:'一场球赛，尽显支氏人的体育精神。昨天，为了丰富员工文化生活，提升员工精神面貌，并为组队参加杭州市运动会选拔选手，支氏控股集团在创客空间举办了一场别开生面的员工羽毛球和乒乓球比赛'
        },
        {
            title: '支氏控股集团2016年羽毛球、乒乓球赛圆满落幕', 
            time: '2016-9-30', 
            imgNews:'images/news01.png', 
            explain:'一场球赛，尽显支氏人的体育精神。昨天，为了丰富员工文化生活，提升员工精神面貌，并为组队参加杭州市运动会选拔选手，支氏控股集团在创客空间举办了一场别开生面的员工羽毛球和乒乓球比赛'
        },
    ];
    //分页数量
    $scope.pageNum = function(){
        var size= Math.floor(this.lists.length / this.pageSize);
        if(this.lists.length % this.pageSize == 0){
            return size;
        }
        return size+1;
    }
});
//过滤器
App.filter("paging",function(){
    return function(input,start){
        if(input.length == 0) return;
        return input.slice(start);
    }
});
//人才招聘
App.controller('recruitTable', function ($scope) {
    $scope.table = [
        {name: 'JAVA中级开发工程师', company: '杭州分途旅游有限公司', region: '滨江区', date : '2016-10-18', apply : '立即申请'}, 
        {name: 'JAVA中级开发工程师1', company: '杭州分途旅游有限公司', region: '滨江区', date : '2016-10-18', apply : '立即申请'},
        {name: 'JAVA中级开发工程师2', company: '杭州分途旅游有限公司', region: '滨江区', date : '2016-10-18', apply : '立即申请'},
        {name: 'JAVA中级开发工程师3', company: '杭州分途旅游有限公司', region: '滨江区', date : '2016-10-18', apply : '立即申请'}
    ];
});
  // var routingDemoApp = angular.module('routingDemoApp',['ngRoute'])
 //    routingDemoApp.config(['$routeProvider', function($routeProvider){
 //      $routeProvider
 //      .when('/home',{
 //      	templateUrl: "home.html",
 //      	controller: 'indexController'
 //    	})
 //      .when('/group',{
 //      	templateUrl: "group.html",
 //      	controller: 'groupController'
 //    	})
 //    	.when('/corporate',{
 //      	templateUrl: "corporate.html",
 //      	controller: 'corporateController'
 //    	})
 //      .when('/news',{
 //      	templateUrl: "news.html",
 //      	controller: 'newsController'
 //    	})
 //      .when('/recruit',{
 //      	templateUrl: "recruit.html",
 //      	controller: 'recruitController'
 //    	})
 //    	.otherwise({
 //        templateUrl: "home.html",
 //      	controller: 'recruitController'
 //    	});
 //    }]);
 //    routingDemoApp.run(['$rootScope', '$location', function($rootScope, $location) {
 //        $rootScope.$on('$routeChangeSuccess', function(newV) {
 //            $rootScope.path = $location.path()
 //        });
 //    }]);
 //    routingDemoApp.controller('main', ['$scope', function($scope){
 //    }]);

