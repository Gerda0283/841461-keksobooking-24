import {similarAnnouncements} from './data.js';
import {
  createPopupText,
  getFeatures,
  getPopupPhotos
} from './popup.js';

createPopupText(similarAnnouncements[0]);
getFeatures(similarAnnouncements[0]);
getPopupPhotos(similarAnnouncements[0]);
