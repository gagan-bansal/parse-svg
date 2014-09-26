# parse-svg

Parse svg string to svg DOM element. Original source code is from [bobince](http://stackoverflow.com/a/3642265/713573)

## Getting Started
include parse-svg.min.js in your app.

``` <script type="text/javascript" src="path/to/parse-svg.min.js"></script>```

It creates global variable **parseSVG** function.

usage:
``` var svgEle = parseSVG('svg string');```

example: 
```javascript
var myPathEle = parseSVG(
  '<path d="M100,100 L150,100 L150,150  Z"  style="stroke: #0000cc; stroke-width: 2px;  fill: #ccccff;"/>'
);
```

## License
Copyright (c) 2014 Gagan Bansal  
Licensed under the MIT license.
