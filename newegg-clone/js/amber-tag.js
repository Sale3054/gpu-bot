var amber_condload = false;
var amber_version = 'v12';
try {
  (function() {
    function ul(src, a, b) {
      a = document;
      b = a.createElement('script');
      b.language = 'javascript';
      b.type = 'text/javascript';
      b.src = src;
      b.defer = true;
      a.getElementsByTagName('head')[0].appendChild(b);
    };
    ul('https://imk.neweggimages.com/WebResource/Scripts/amber-lib-' + amber_version + '.js');
    amber_condload = true;
  })();
} catch (e) {}