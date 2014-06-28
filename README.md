angular-to-top
=====
This is a basic directive allows you to scroll to the top of the document -- no more, no less. For advanced features, in my opinion, it should belong to a different directive. And to brag, there are already existing libraries that does more advanced feats such as angular-scroll.

## Bower ##

	Will be available in Bower on v1.0

	bower install angular-to-top -S

### To use ###

Simply wrap your element with either one of the two:

	<to-top> ... </to-top>

	<div to-top> </div>

Additional options would be, speed and slide

	<div to-top speed="1000"></div>
	<div to-top slide="false"></div>