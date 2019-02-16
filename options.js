function save_settings() {
  var interval = document.getElementById("interval");

  if (interval === "") {
    alert("You left the interval blank.");
  } else {
    var real_val = interval.value * 1000;
    chrome.storage.local.set({"oref_interval": real_val, "oref_enabled": "enabled"});
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
        chrome.tabs.update(tabs[0].id, {url: tabs[0].url});
    });
  }
}

function stop() {
  chrome.storage.local.set({"oref_interval": 0, "oref_enabled": "disabled"});
}

document.getElementById("start").addEventListener("click",save_settings);
document.getElementById("stop").addEventListener("click", stop);
chrome.storage.local.get(function(data) {
    if (data.oref_interval != null) {
        document.getElementById("interval").value = data.oref_interval;
    }
});
