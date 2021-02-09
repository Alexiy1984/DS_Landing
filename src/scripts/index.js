import '../styles/index.scss';
import $ from "jquery";
import LazyLoad from 'vanilla-lazyload';
import WOW from 'wow.js';
import bootstrap from 'bootstrap';

if (process.env.NODE_ENV === 'development') {
  require('../index.pug');
}

$(function() {
  var lazyLoadInstance = new LazyLoad({
    elements_selector: '.lazy',
  });

  var wow = new WOW({
    boxClass:     'wow',      
    animateClass: 'animate__animated',     
    mobile:       true,       
    live:         true,       
    scrollContainer: null,    
    resetAnimation: true, 
  });

  wow.init();

  $('.hero__button').on('click', function() {
    $(this).addClass('open');
    $('.menu').addClass('open');
    $('.hero__link').addClass('open');
  });

  $('.menu__button').on('click', function() {
    $('.menu').removeClass('open');
    $('.hero__link').removeClass('open');
    $('.hero__button').removeClass('open');
  });
});
