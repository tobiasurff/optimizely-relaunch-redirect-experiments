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
  "origin": "regus.co.uk/?(\\?.*)?$",
  "destination": "http://b.regus.co.uk/"
}, {
  "origin": "/products/meeting-facilities/meeting-rooms.aspx",
  "destination": "http://b.regus.co.uk/meeting-rooms"
}, {
  "origin": "/products/virtual-offices/",
  "destination": "http://b.regus.co.uk/virtual-office"
}, {
  "origin": "/products/virtual-offices/business-address.aspx",
  "destination": "http://b.regus.co.uk/virtual-office"
}, {
  "origin": "/office-space/united-kingdom/london",
  "destination": "http://b.regus.co.uk/office-space/united-kingdom/london"
}, {
  "origin": "/meeting-rooms/united-kingdom/london",
  "destination": "http://b.regus.co.uk/meeting-rooms/united-kingdom/london"
}, {
  "origin": "/products/offices/index.aspx",
  "destination": "http://b.regus.co.uk/office-space"
}, {
  "origin": "/locations/office-space/london-city-point",
  "destination": "http://b.regus.co.uk/office-space/united-kingdom/london/london-city-point"
}, {
  "origin": "/locations/office-space/london-tower-42",
  "destination": "http://b.regus.co.uk/office-space/united-kingdom/london/london-tower-42"
}, {
  "origin": "/virtual-office/united-kingdom/london",
  "destination": "http://b.regus.co.uk/virtual-office/united-kingdom/london"
}, {
  "origin": "/products/virtual-offices/mail-handling.aspx",
  "destination": "http://b.regus.co.uk/virtual-office"
}, {
  "origin": "/products/offices/office-space-to-rent.aspx",
  "destination": "http://b.regus.co.uk/office-space"
}, {
  "origin": "/locations/office-space/london-berkeley-square",
  "destination": "http://b.regus.co.uk/virtual-office/united-kingdom/london/london-berkeley-square"
}, {
  "origin": "/locations/office-space/london-fleet-street",
  "destination": "http://b.regus.co.uk/virtual-office/united-kingdom/london/london,-fleet-street"
}, {
  "origin": "/products/businessworld-membership/index.aspx",
  "destination": "http://b.regus.co.uk/virtual-office"
}, {
  "origin": "/locations/office-space/manchester-peter-house",
  "destination": "http://b.regus.co.uk/virtual-office/united-kingdom/manchester/manchester-peter-house"
}, {
  "origin": "/products/business-lounges/",
  "destination": "http://b.regus.co.uk/virtual-office"
}, {
  "origin": "/locations/office-space/london-new-broad-street",
  "destination": "http://b.regus.co.uk/office-space/united-kingdom/london/london-new-broad-street"
}, {
  "origin": "/locations/office-space/london-victoria-greycoat-place",
  "destination": "http://b.regus.co.uk/office-space/united-kingdom/london/london,-victoria---greycoat-place"
}, {
  "origin": "cat=brand",
  "destination": "http://b.regus.co.uk/"
});