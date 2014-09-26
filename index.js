(function() {
  //cource code from http://stackoverflow.com/questions/3642035/jquerys-append-not-working-with-svg-element
	function parseSVG(s) {
	  var div= document.createElementNS('http://www.w3.org/1999/xhtml', 'div');
	  div.innerHTML= '<svg xmlns="http://www.w3.org/2000/svg">'+s+'</svg>';
	  var frag= document.createDocumentFragment();
	  while (div.firstChild.firstChild)
	    frag.appendChild(div.firstChild.firstChild);
	  return frag;
	}
  if(typeof module !== 'undefined' && module.exports) {
    module.exports = parseSVG;
  }
  if (typeof window !== 'undefined') {
    window.parseSVG = parseSVG;
  }
})();
