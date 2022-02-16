import green from '../../assets/green.svg';
import orange from '../../assets/orange.svg';
import blue from '../../assets/blue.svg';
import recycle from '../../images/slider-recycle.svg';
import info from '../../images/slider/info.svg';
import mask from '../../images/slider/mask.svg';

export default [
    {
        title: 'Сделаем мир чище',
        description: 'Сдай макулатуру или старую одежду и получи скидку на покупку товаров из переработанных материалов',
        image: recycle,
        bg: green,
        buttonText: 'Условия сервиса'
    },
    {
        title: 'А вы знали....',
        description: 'что среднее время разложения пластмассовых изделий колеблется от 400 до 700 лет,  а полиэтиленовых пакетов — от 100 до 200 лет? ',
        image: info,
        bg: orange,
        buttonText: 'Узнать больше'
    },
    {
        title: 'Что с масками?',
        description: 'Медицинские маски не обязательно должны становиться отходами. Их тоже можно сдать на переработку.',
        image: mask,
        bg: blue,
        buttonText: 'Пункты сбора масок'
    }
]
