import { data, dom } from './data.js';
import createMenuItem from './components/createMenuItem.js';
import createMenuButton from './components/createMenuButton.js';

data.buttons.forEach(btnData => {
    const btnDom = createMenuButton(btnData);
    dom.btnContainer.append(btnDom);
})

data.menu.forEach(itemData => {
    const itemDom = createMenuItem(itemData);
    dom.sectionCenter.append(itemDom);
});