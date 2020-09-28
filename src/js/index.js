require('../css/index.css')
import angular from 'angular';

var app = angular.module('shop', []);
app.controller('car', function($scope,$http) {
    $http.get('static/json/data.json').then(function(data){//获取json数据
        $scope.product=data.data;
    })
    //样式
    $scope.headStyle={display:'flex','justify-content': 'space-between',width:'87%',margin:'auto'};
    $scope.priceStyle={color:'red',fontSize:'18px'};
    $scope.fontSize={fontSize:'13px'};
    $scope.footStyle={fontSize:'12px',color:"gray",'text-align':"center"};
    //图片点击事件
    $scope.imgClick=function() {
        location.href='footer.html'
    };
})
