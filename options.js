function save_options() {
  var color = document.getElementById('backgroundcolor').value;
  var date = document.getElementById('date').value;
  var passed = document.getElementById('passed').value;
  console.log(passed)
  var left = document.getElementById('left').value;
  var x = new Date();
  var now = x.getFullYear()+"-"+(x.getMonth()+1)+"-"+x.getDate()
  chrome.storage.sync.set({
    color: color, date: date, now: now, passed: passed, left: left
  }, function() {
    // Update status to let user know options were saved.
    var status = document.getElementById('status1');
    status.textContent = 'Options saved.';
  });
}

// Restores select box and checkbox state using the preferences
// stored in chrome.storage.
function restore_options() {
  // Use default value color = 'red' and likesColor = true.
  document.getElementById('backgroundcolor').value = '#333333';
  document.getElementById('date').value = '11/03/1967';
  document.getElementById('passed').value = '19.1, 97.7, 100, 60';
  document.getElementById('left').value = '0, 0, 40, 25';

  chrome.storage.sync.set({
    color: '#333333', date: '11/03/1967', passed: '19.1, 97.7, 100, 60', left: '0, 0, 40, 25'}, function() {
    document.getElementById('status1').innerHTML = status.textContent = 'Default restored.';
  });
}

document.getElementById('default').addEventListener('click',
    restore_options);
document.getElementById('save').addEventListener('click',
    save_options);

var websites = [];

chrome.storage.sync.get(['website'], function(data) {
  websites = data.website;
  for (var i = 0; i < websites.length; i++) {
      document.getElementById('list').innerHTML += '<div>' + websites[i] + '</div>';
}
});

function web_save_options() {
  console.log(websites);
  var website = document.getElementById('add').value;
  if (websites.includes(website))
  {

  }
  else
  {
    websites.push(website);
  }

  var website = document.getElementById('remove').value;
  if (websites.includes(website))
  {
    var index = websites.indexOf(website);
    if (index > -1) {
      websites.splice(index, 1);
    }
  }

  chrome.storage.sync.set({
      website: websites
    }, function() {
      // Update status to let user know options were saved.
      document.getElementById('status2').innerHTML = 'Websites saved.';
  });
  document.getElementById('list').innerHTML = '';
  for (var i = 0; i < websites.length; i++) {
      document.getElementById('list').innerHTML += '<div>' + websites[i] + '</div>';
  }
}



function web_restore_options() {
  // Use default value color = 'red' and likesColor = true.
  websites = [];
  chrome.storage.sync.set({
    website: websites}, function() {
    document.getElementById('status2').innerHTML = 'Default websites restored.';
  });
  document.getElementById('list').innerHTML = '';
  for (var i = 0; i < websites.length; i++) {
      document.getElementById('list').innerHTML += '<div>' + websites[i] + '</div>';
}
}


document.getElementById('websitedefault').addEventListener('click',
    web_restore_options);
document.getElementById('websitesave').addEventListener('click',
    web_save_options);



document.getElementById('reset').addEventListener('click',
    reset);

function reset() {
  chrome.runtime.sendMessage({"message": "reset"});
}


