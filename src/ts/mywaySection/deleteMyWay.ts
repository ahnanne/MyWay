import { getNumOfSlides } from '../state/carouselState';
import spinner from '../utils/spinner';

const axios = require('axios');
const url = 'http://localhost:7000';

import state from '../state/state';
import renderMyFavorite from './renderMyFavorite';
import showMorePopup from './showMorePopup';

const $mywayList = document.querySelector('.myway__list') as HTMLUListElement;

showMorePopup;

export default () => {
  $mywayList.addEventListener('click', async e => {
    spinner.display();

    const $target = e.target as HTMLElement;

    if ($target.matches('.delete-myway')) {
      const $li = $target.parentNode?.parentNode?.parentNode as HTMLElement;

      await axios.delete(url + `/myFavorite/${$li.id}`);

      await renderMyFavorite();
      await getNumOfSlides();
    }

    spinner.hide();
  });
};