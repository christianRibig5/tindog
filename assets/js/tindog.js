const copyRigt = document.querySelector('.copy-right');
const currentDate = new Date();

copyRigt.innerHTML += `${currentDate.getFullYear()} © Copyright TinDog. All Right Reserved <br/> `;
copyRigt.innerHTML += `Designed by <a href="http://127.0.0.1:5501/index.html">Christian Onyeukwu<a/>`;