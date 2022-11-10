export function opentab(tabname) {
  var tablinks = document.getElementsByClassName('tab-links');
  var tabcontents = document.getElementsByClassName('tab-contents');

  for (const tablink of tablinks) {
    tablink.classList.remove('active-link');
  }
  for (const tabcontent of tabcontents) {
    tabcontent.classList.remove('active-tab');
  }
  event.currentTarget.classList.add('active-link');
  document.getElementById(tabname).classList.add('active-tab');
}

// TODO Works!
