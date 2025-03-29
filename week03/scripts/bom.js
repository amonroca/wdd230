const input = document.querySelector('#favchap');
const button = document.querySelector('#addChapterBtn');
const list = document.querySelector('#list');

let chaptersArray = getChapterList() || [];

chaptersArray.forEach(chapter => {
    displayList(chapter);
});

function setChapterList() {
    localStorage.setItem('chapters', JSON.stringify(chaptersArray));
}

function getChapterList() {
    return JSON.parse(localStorage.getItem('chapters'));
}

function deleteChapter(chapter) {
    const index = chaptersArray.indexOf(chapter);
    if (index > -1) {
        chaptersArray.splice(index, 1);
        setChapterList();
    }
}

function displayList(item) {
    let li = document.createElement('li');
    let deleteButton = document.createElement('button');

    li.textContent = item;
    deleteButton.textContent = '❌';
    deleteButton.classList.add('delete');
    li.append(deleteButton);
    list.append(li);

    deleteButton.addEventListener('click', () => {
        list.removeChild(li);
        deleteChapter(item);
        input.focus();
    });
}

button.addEventListener('click', () => {
    if (input.value.trim() !== '') {
        displayList(input.value);
        chaptersArray.push(input.value);
        setChapterList();
        input.value = '';
        input.focus();
    } else {
        alert('Please enter a chapter name');
    }

    input.value = '';
    input.focus();
});