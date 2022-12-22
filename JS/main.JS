
import { opentab } from '../JS/tabclick.JS'; 

var allTabs = document.querySelectorAll('.tab-links');

for (const tab of allTabs) {
  tab.addEventListener('click', (evt) => {
    evt.preventDefault();

    opentab(evt.target.title);
  });
}