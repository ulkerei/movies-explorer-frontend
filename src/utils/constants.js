//Это временное безобразие для отображения картинок-заглушек

import pic0 from '../images/temp/pic0.jpg';
import pic1 from '../images/temp/pic1.png';
import pic2 from '../images/temp/pic2.png';
import pic3 from '../images/temp/pic3.png';
import pic4 from '../images/temp/pic4.jpeg';
import pic6 from '../images/temp/pic6.jpg';
import pic7 from '../images/temp/pic7.jpeg';
import pic8 from '../images/temp/pic8.jpg';

const moviesList = [
  {
    name: '33 слова о дэдлайне',
    pic: pic0,
    time: 43
  },
  {
    name: 'Бамбуковые забавы ФБР',
    pic: pic4,
    time: 6565
  },
  {
    name: 'Блаженная атмосфера для деловых блинов',
    pic: pic6,
    time: 234
  },
  {
    name: 'Чипсы для кукол-убийц',
    pic: pic7,
    time: 34
  },
  {
    name: 'Карта разрушения вашей личности',
    pic: pic8,
    time: 10
  },
  {
    name: 'Вспышка первого машиниста',
    pic: pic1,
    time: 872
  },
  {
    name: 'Горчица для детских глаз',
    pic: pic2,
    time: 65
  },
  {
    name: 'Его восхитительный кемпинг разрушен',
    pic: pic3,
    time: 24
  },
  {
    name: 'Нежный задира',
    pic: pic4,
    time: 665
  },
  {
    name: 'Лабораторный порошок для эмоциональных детей',
    pic: pic6,
    time: 240
  },
  {
    name: 'Суть крутого удара молодой колбасой',
    pic: pic7,
    time: 2
  },
  {
    name: 'Слой улик',
    pic: pic8,
    time: 1204
  },
];

for (let i=0; i<12; i = i + 1) {
  moviesList[i]._id = i;
}

export default moviesList;