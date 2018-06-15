const RATING = require('webgl-gpu-rating');

export default class WebGLReportHash {
  constructor (hashContainer, ratingContainer) {
    const hash = RATING.getGpuHash();
    hashContainer.innerHTML = hash;

    const rating = RATING.getGpuRating();
    ratingContainer.innerHTML = rating;
  }
}
