function NewsCtrl(newsList) {
  // $scope.text = 'Hello, testing';
  this.stories = newsList.data;



  // NewsService
  //   .getNews(13439828)
  //   .then( function (news) {
  //     console.log(news.data);
  //   });
}

angular
	.module('app')
	.controller('NewsCtrl', NewsCtrl);
