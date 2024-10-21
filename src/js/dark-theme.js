const themeToggleBtn = document.querySelector('.dark-theme-icon');

themeToggleBtn.onclick = function (){
    alert('Proper dark mode color needs to be added')
    document.body.classList.toggle('dark-mode');
    const isDarkMode = document.body.classList.contains('dark-mode')
    localStorage.setItem('darkMode', isDarkMode)
};

const darkMode = localStorage.getItem('darkMode');
if(darkMode === 'true'){
    document.body.classList.toggle('dark-mode');
}
