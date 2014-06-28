/**
 * This is a basic directive allows you to scroll to the top
 * of the document -- no more, no less. For advanced features,
 * in my opinion, it should belong to a different directive.
 * And to brag, there are already existing libraries that
 * does more advanced feats such as angular-scroll
 *
 * To use, simply wrap your element with either one of the two:
 * <to-top> ... </to-top>
 * <div to-top> </div>
 *
 * Additional options would be, speed and slide
 * <div to-top speed="1000"></div>
 * <div to-top slide="false"></div>
 *
 * @author 	SRPH (Kier Borromeo)
 * @link 	http://github.com/srph/angular-to-top
 */
var app = angular.module('angular-to-top', []);

app.directive('toTop', ['$document', '$window', function($document, $window) {
	// Animate the screen with the provided speed
	var animate = function(speed) {
		angular.element($document).animate({ scrollTop: 0 + 'px' }, speed);
	}

	// The link function which allows us to bind
	// event listeners to the directive
	var link = function(scope, element, attributes) {
		scope.speed = scope.speed || 1000;
		scope.slide = scope.slide || true;
		// If the slide option is set to false
		// We will instead use the $anchorScroll
		if(!scope.slide) {
			$window.scrollTo(0,0);
		}

		element.on('click', function(event) {
			// Prevent default event from occuring
			event.preventDefault();

			animate(scope.speed);
		})
	}

	return {
		restrict: 'AEC',
		template: '<div ng-transclude></div>',
		transclude: true
		scope: {
			speed: '@',
			slide: '@'
		}
		link: link
	}
}]);