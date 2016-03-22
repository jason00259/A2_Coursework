angular.module('ui.script.demo', ['ui.bootstrap']);

function CarouselDemoCtrl($scope){
  $scope.myInterval = 3000;
  $scope.slides = [
    {
      image: 'http://www.chinadaily.com.cn/olympics/images/attachement/jpg/site1/20080817/0013729c05180a113ff628.jpg'
    },
    {
      image: 'http://imgc.allpostersimages.com/images/P-473-488-90/67/6707/WKCA100Z/posters/tennis-players-handshake-over-the-net.jpg'
    },
    {
      image: 'http://s3.amazonaws.com/vnn-aws-sites/2871/files/2014/06/tennis.jpg'
    }
  ];
}

