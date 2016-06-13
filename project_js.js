window.optimizelyRedirect = {
  url_mappings: [],
  getMappedUrl: function(originurl) {
    // Check if user is navigating to this page from the same domain (to avoid switching sites mid-session)
    if (document.referrer.indexOf(window.location.hostname) <= 0){
      return false;
    }
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
  "origin": "www.optimizely.com/?(\\?.*)?$",
  "destination": "https://beta.optimizely.com/"
}, {
  "origin": "www.optimizely.com/resources/customer-stories",
  "destination": "https://beta.optimizely.com/happy-customers"
}, {
  "origin": "www.optimizely.com/.*",
  "destination": "https://beta.optimizely.com/"
});
