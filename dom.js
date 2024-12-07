const box = document.createElement("article");
const text = document.createElement("p");
const button = document.createElement("button");
const nextTask = document.createElement("p");

text.textContent = "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Libero unde expedita ullam quod reprehenderit harum dolorem error maxime veniam, sint culpa cupiditate blanditiis ea commodi magni possimus aliquid rerum ratione?";
button.textContent = "click";
button.style.background = "red";
nextTask.textContent = "Завдання 2"
const page = document.querySelector("body");
page.append(box);
box.append(text);
box.append(button);
box.append(nextTask);

const box2 = document.createElement("article");
const image =  document.createElement("img");
const title = document.createElement("h2");
const nextTask2 = document.createElement("p");
title.textContent = "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Libero unde expedita ullam quod reprehenderit harum dolorem error maxime veniam, sint culpa cupiditate blanditiis ea commodi magni possimus aliquid rerum ratione?";
image.src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS3FaRrgt0RBdvk5VawbY--jGxKOzt2kzi-ew&s";
nextTask2.textContent = "Завдання 3"
const task2 = document.querySelector("body");
task2.append(box2);
box2.append(image);
box2.append(title);
box2.append(nextTask2);

const box3 = document.createElement("article");
const image2 =  document.createElement("img");
const link = document.createElement("a");
const nextTask3 = document.createElement("p");

image2.src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS3FaRrgt0RBdvk5VawbY--jGxKOzt2kzi-ew&s";
link.href = "https://developer.mozilla.org/en-US/docs/Learn/Getting_started_with_the_web/JavaScript_basics"
link.textContent = "link";
nextTask3.textContent = "Завдання 4"

const task3 = document.querySelector("body");
task3.append(box3);
box3.append(image2);
box3.append(link);
box3.append(nextTask3);

const box4 = document.createElement("article");
const list = document.createElement("ul");
const item1 = document.createElement("li");
const item2 = document.createElement("li");
const item3 = document.createElement("li");
const item4 = document.createElement("li");

item1.textContent = "text";

const task4 = document.querySelector("body");
task4.append(box4);
box4.append(list);
list.append(item1);
list.append(item2);
list.append(item3);
list.append(item4);






