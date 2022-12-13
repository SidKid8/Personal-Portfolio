// import {submit} from '../JS/contact.js';
// var submitmsg = document.getSelection

// for (const msg of submitmsg){

// 
// import {} from '../JS/tech-comp.JS';

// !works
import { opentab } from '../JS/tabclick.JS'; 

var allTabs = document.querySelectorAll('.tab-links');

for (const tab of allTabs) {
  tab.addEventListener('click', (evt) => {
    evt.preventDefault();

    opentab(evt.target.title);
  });
}

