const copyRigt = document.querySelector('.copy-right');
const currentDate = new Date();

copyRigt.innerHTML += `© ${currentDate.getFullYear()} Copyright TinDog. All Right Reserved. <br/> `;
copyRigt.innerHTML += `Redesigned by <a href="https://christianribig5.github.io/myportfolio/">Christian Onyeukwu<a/>`;