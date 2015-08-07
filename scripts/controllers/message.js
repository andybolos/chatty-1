'use strict';

angular.module('chattyApp').controller('MessageCtrl', function ($scope, MessageService) {
    
  $scope.getMessages = function() {
    MessageService.getMessages().then(function(data) {
      $scope.messages = data;
    });
	};

	$scope.getMessages();

  $scope.addMessage = function(isValid) {
    if (isValid) {
      MessageService.addMessage($scope.newMessage, $scope.newUsername).then(function(data) {
        $scope.messages = data;
        $scope.newUsername = '';
        $scope.newMessage = '';
      });
    }
  };

});