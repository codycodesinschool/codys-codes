let save = document.querySelector(".save");
let load = document.querySelector(".load");
let text = document.querySelector("textarea");
let storyText = document.querySelector(".story");

function saveToLocal(name, val) {
    localStorage.setItem(name, val);
}

function getFromLocal(name) {
    return localStorage.getItem(name)
}

save.onclick = () => {
    let story = text.value;
    let storyName = prompt("What do you name this entry");
    console.log(storyName, story, text);
    saveToLocal(storyName, story);
}

load.onclick = () => {
    let storyName = prompt("What is the name of the story you want to load");
    let story = getFromLocal(storyName);
    console.log(storyName)
    storyText.innerHTML = story;
    console.log(storyText)
    if (story == null) {
        storyText.innerHTML = "<h1>FAILED TO LOAD</h1>";

    }
}