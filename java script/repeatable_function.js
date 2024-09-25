function getElemById(id) {
    return document.getElementById(id);
}
function parseFloatTagByElem(elem, tagName) {
    if (tagName === 'input') {
        return parseFloat(elem.value);
    }
    else {
        return parseFloat(elem.innerText);
    }
}
function getShowElement(id) {
    getElemById('all-donation-card').classList.add('hidden');
    getElemById('history-list').classList.add('hidden');
    getElemById(id).classList.remove('hidden');
}
