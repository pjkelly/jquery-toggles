/*
 * jQuery Toggles
 * Copyright (c) 2010 PJ Kelly <me@pjkel.ly>
 * Released under the MIT and GPL licenses.
 */

 (function ($) {

   $.fn.toggles = function (toggleable, options) {
     var $target = this;
     var $toggleable = $(toggleable);

     options = $.extend({
       initial_state:  'hidden'
     }, options || {});

     if (options.initial_state == 'hidden') {
       $toggleable.hide().addClass('hidden');
       $target.addClass('hidden');
     } else {
       $toggleable.show().addClass('visible');
       $target.addClass('visible');
     }

     $target.click(function () {
       $toggleable.toggle().toggleClass('hidden').toggleClass('visible');
       $target.toggleClass('visible').toggleClass('hidden');
     });

     return this;
   };

 })(jQuery);