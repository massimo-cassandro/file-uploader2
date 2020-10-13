/* exported showToastNotification */
/* eslint-env jquery */

/*
  @codekit-prepend quiet '../node_modules/bootstrap/js/dist/util.js'
  @codekit-prepend quiet '../node_modules/bootstrap/js/dist/toast.js'
*/

function showToastNotification (message, fupl_options, error_type='error') {
  let alert_class= error_type === 'error' ? 'danger' : error_type, // per allineamento alle classi di bs4

    toast_notification = `<div class="toast fupl-alert" role="alert" aria-live="assertive" aria-atomic="true">
      <div class="toast-header">
        <strong class="mr-auto lead text-${alert_class}">Warning!</strong>
        <button type="button" class="ml-2 mb-1 close" data-dismiss="toast" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="toast-body">${message}</div>
    </div>`,

    alert_wrapper = '<div class="fupl-alert-wrapper"></div>';

  if(!$('.fupl-alert-wrapper', fupl_options.wrapper).length) {
    $(alert_wrapper).appendTo(fupl_options.wrapper);
  }

  $(toast_notification).appendTo($('.fupl-alert-wrapper', fupl_options.wrapper));

  $('.fupl-alert:last').toast({
    animation: true,
    autohide: true,
    delay: 10000
  }).on('hidden.bs.toast', function () {
    $(this).remove();
    if( !$('.fupl-alert-wrapper .fupl-alert', fupl_options.wrapper).length ) {
      $('.fupl-alert-wrapper', fupl_options.wrapper).remove();
    }
  }).toast('show');
}
