/* в этот файл добавляет скрипты*/
const menuToggleButton = document.querySelector('.navigation__menu-toggle');
const navigation = document.querySelector('.navigation');


menuToggleButton.addEventListener('click', () => {
  navigation.classList.toggle('navigation--open');
});
