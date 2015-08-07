'use strict';

angular.module('chattyApp').factory('MessageService', ['$q', '$http', function MessageService($q, $http) {
    
	var messages = {};

		messages.getMessages = function() {
			var dfd = $q.defer();
			$http({
				method: 'GET',
				url: 'http://localhost:3000'
			}).then(function(response) {
				//console.log(response);
				var relevant = response.data;
				dfd.resolve(relevant);
			});
			return dfd.promise;	
		};

		messages.addMessage = function(message, username) {
			var dfd = $q.defer();
			$http({
				method: 'POST',
				url: 'http://localhost:3000',
				data: {
					message: message,
					username: username
				}
			}).then(function(response) {
				var relevant = response.data;
				dfd.resolve(relevant);
			});
			return dfd.promise;
		};

	return messages;

}]);