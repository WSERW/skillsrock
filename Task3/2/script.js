// 2. Карусель изображений

const nextSlide = document.querySelector('.next');
const prevSlide = document.querySelector('.prev');

const slideList = document.querySelector('.slide_list');


let currentSlide = 0; // переменная с номером текущего активного слайда

const next = () => {
	currentSlide++;
	if (currentSlide >= slideList.children.length) { // если слайды закончились
		currentSlide = 0;							// вернуться к первому
	};
	slideList.style.transform = 'translate(-' + currentSlide * 100 + '%)';
}

const prev = () => {
	currentSlide--;
	if (currentSlide < 0) { 							// если слайды закончились
		currentSlide = slideList.children.length - 1;   // вернуться к последнему
	};
	slideList.style.transform = 'translate(-' + currentSlide * 100 + '%)';
}

nextSlide.addEventListener('click', next)
prevSlide.addEventListener('click', prev)

let interval = setInterval(next, 3000)