// Scripts for meme interactivity

// Execute all listeners on document ready state
$(document).ready(() => {
  const imageEl = $('.image');
  const scaleBtnEl = $('.btn-action-scale');
  const rotateBtnEl = $('.btn-action-rotate');
  const skewBtnEl = $('.btn-action-skew');

  // Add/remove the provided class name
  function toggleClassName(className) {
    removeToggleClassName();

    if (imageEl.hasClass(className)) {
      imageEl.removeClass(className);
    } else {
      imageEl.addClass(className);
    }
  }

  function removeToggleClassName() {
    const toggleClassName = imageEl.attr('class').split(' ')[1];
    imageEl.removeClass(toggleClassName);
  }

  // Establish click listener functions
  function scaleImage() {
    scaleBtnEl.on('click', function(e) {
      const className = $(this).data('toggle-classname');
      toggleClassName(className);
    });
  }

  function rotateImage() {
    rotateBtnEl.on('click', function(e) {
      const className = $(this).data('toggle-classname');
      toggleClassName(className);
    });
  }

  function skewImage() {
    skewBtnEl.on('click', function(e) {
      const className = $(this).data('toggle-classname');
      toggleClassName(className);
    });
  }

  scaleImage();
  rotateImage();
  skewImage();
});