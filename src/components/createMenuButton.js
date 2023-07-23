import filterMenuItems from "../handlers/filterMenuItems.js";

const createMenuButton = (btnData) => {
    const btn = document.createElement('button');
    btn.type = 'button';
    btn.innerText = btnData.text;
    btn.id = btnData.id;
    btn.classList.add('filter-btn');

    // add event to btn

    btn.addEventListener('click', () => {
        
        filterMenuItems(btn.id);
    });

    return btn;

}

export default createMenuButton;