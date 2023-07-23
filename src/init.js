import createMenuItem from './components/createMenuItem.js';
import createMenuButton from './components/createMenuButton.js';
import { data, dom } from './data.js';

data.buttons.forEach(btnData => {
    const btnDom = createMenuButton(btnData);
    dom.btnContainer.append(btnDom);
})

data.menu.forEach(itemData => {
    const itemDom = createMenuItem(itemData);
    dom.sectionCenter.append(itemDom);
});