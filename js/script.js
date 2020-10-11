/* Задания на урок:

1) Удалить все рекламные блоки со страницы (правая часть сайта)

2) Изменить жанр фильма, поменять "комедия" на "драма"

3) Изменить задний фон постера с фильмом на изображение "bg.jpg". Оно лежит в папке img.
Реализовать только при помощи JS

4) Список фильмов на странице сформировать на основании данных из этого JS файла.
Отсортировать их по алфавиту 

5) Добавить нумерацию выведенных фильмов */

'use strict';

const movieDB = {
    movies: [
        "Логан",
        "Лига справедливости",
        "Ла-ла лэнд",
        "Одержимость",
        "Скотт Пилигрим против..."
    ]
};



const rightBlock = document.querySelector(".promo__adv");
rightBlock.remove();

const genre = document.querySelector(".promo__genre");
genre.textContent = "КОМЕДИЯ";

const bg = document.querySelector(".promo__bg");
console.log(bg);
bg.style.background= 'url(../img/bg.jpg)';

movieDB.movies.sort();

const movieList = document.createElement('ul');
movieList.classList.add('promo__interactive-list');

for (let i = 0; i < movieDB.movies.length; i++ ){
	const movieItem = document.createElement('li');
	movieItem.classList.add('promo__interactive-item');
	movieItem.textContent = `${i+1} - ${movieDB.movies[i]}`;
	movieList.append(movieItem);
}

document.querySelector('.promo__interactive-list').replaceWith(movieList);
