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

app.directive('toTop', [function() {
	// Animate the screen with the provided speed
	var animate = function(speed) {
		angular.element($document).animate({ scrollTop: 0 + 'px' }, speed);
	}

	// The link function which allows us to bind
	// event listeners to the directive
	var link = function(scope, element, attributes) {
		scope.speed = scope.speed || 700;
		// True by default
		scope.slide = scope.slide || true;
		
		// 'click' event listener for the directive
		// If the element is clicked, start going to the top of the screen
		element.on('click', function(event) {
			// Prevent default event from occuring
			event.preventDefault();
			
			// If the slide option is set to false, we will adjust
			// the scrollTop property of the body in the dom to zero
			// (which is the top)
			if( ! scope.slide || angular.equals(scope.slide, false) ) {
				document.getElementsByTagName('body')[0].scrollTop = 0;
			} else {
				animate(scope.speed);
			}
		})
	}

	return {
		// Restricts use only as an attribute or element
		restrict: 'AE',
		// Allows us to scroll to the top of the screen by
		// simply wrapping the directive around your element
		template: '<div ng-transclude></div>',
		transclude: true,
		// So that..
		scope: {
			speed: '@',
			slide: '@'
		},
		link: link
	}
}]);
