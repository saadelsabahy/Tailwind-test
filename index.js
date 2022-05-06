const menuBtn = document.getElementById('menu-btn');
const menu = document.getElementById('menu');

menuBtn.addEventListener('click', () => {
	menuBtn.classList.toggle('open');
	menu.classList.toggle('block');
	menu.classList.toggle('hidden');
});
