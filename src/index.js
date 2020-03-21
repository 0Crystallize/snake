import './styles/index.css';

document.querySelector('.js-index') && import('./js/index/index').then(resolve => resolve.initIndexPage());
