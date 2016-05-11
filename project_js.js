window.optimizelyRedirect = {
  url_mappings: [],
  getMappedUrl: function(originurl) {
    // Check one by one if url has mapping and return url, else return false
    for (var i = 0; i < window.optimizelyRedirect.url_mappings.length; i++) {
      if (RegExp(window.optimizelyRedirect.url_mappings[i].origin).test(originurl)) {
        return window.optimizelyRedirect.url_mappings[i].destination;
      }
    }
    return false;
  },
  redirectToMappedUrl: function(originurl) {

    var destinationurl = optimizelyRedirect.getMappedUrl(originurl);

    if (destinationurl) {
      // Default Optimizely redirect code
      var _optly = {
        redir: document.createElement("a")
      };
      _optly.redir.href = destinationurl;
      _optly.cur = window.location.search;
      if (_optly.cur) {
        _optly.redir.search = _optly.redir.search ? _optly.cur + "&" + _optly.redir.search.slice(1) : _optly.cur;
      }
      window.location.replace(_optly.redir.href);
    }

  }
}

optimizelyRedirect.url_mappings.push({
  "origin": "urff.me/?(\\?.*)?$",
  "destination": "http://tobiasurff.nl/"
}, {
  "origin": "/example/test.aspx",
  "destination": "http://example.net/funky-example/funky-test"
});