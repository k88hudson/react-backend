const {Cu, Cc, Ci} = require("chrome");
const {data} = require("sdk/self");
const tabs = require("sdk/tabs");
const {redux} = require("./lib/vendor");
const pageWorkers = require("sdk/page-worker");
const {search} = require("sdk/places/history");

const backgroundPage = pageWorkers.Page({
  contentURL:data.url("content/index-page-worker.html"),
  contentScriptFile: data.url("content-script.js"),
  contentScriptWhen: "start",
  onMessage: function(message) {
    console.log("message", message);
  }
});

const store = require("./lib/create-store")(function broadcast(action) {
  backgroundPage.port.emit("action", action);
});

const history = Cc["@mozilla.org/browser/nav-history-service;1"].
              getService(Ci.nsINavHistoryService);

const historyObserver = {
  onVisit(uri, visitID, lastVisited) {
    store.dispatch({
      type: "VISIT",
      data: {url: uri.spec, lastVisited}
    });
  }
};

history.addObserver(historyObserver, false);

// This doesn't override the URL bar yet
Cu.import("resource:///modules/NewTabURL.jsm");
NewTabURL.override(data.url("content/index.html"));
