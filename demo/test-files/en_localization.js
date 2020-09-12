/* exported  en_localization */
const en_localization = {
  locales: 'en-UK',

  alert_messages: {
    unsuitable_browser: 'Your browser does not have all the features required by this application. ' +
    'Please, try again using the latest version of Firefox, Edge, Safari, Opera or Chrome',

    too_much_files: 'You can drop here only one file!',
    xhr_error: 'An error occurred while uploading “<strong>{{file_name}}</strong>” file.',
    file_format_error: 'Format of file “<strong>{{file_name}}</strong>” is not allowed',
    file_size_error: 'Size of “<strong>{{file_name}}</strong>” ({{file_size}}) '+
      'exceeds the maximum allowed value ({{allowed_size}})',

    // immagini
    img_err_start_string: 'Image “<strong>{{file_name}}</strong>” is incorrect:',
    img_exact_width_err: 'Incorrect width ({{image_dimension}}px instead of {{allowed_dimension}}px)',
    img_min_width_err: 'Width below the minimum allowed ({{image_dimension}}px instead of {{allowed_dimension}}px)',
    img_max_width_err: 'Width greater than the maximum allowed ({{image_dimension}}px instead of {{allowed_dimension}}px)',
    img_exact_height_err: 'Incorrect height ({{image_dimension}}px instead of {{allowed_dimension}}px)',
    img_min_height_err: 'Height below the minimum allowed ({{image_dimension}}px instead of {{allowed_dimension}}px)',
    img_max_height_err: 'Height greater than the maximum allowed ({{image_dimension}}px instead of {{allowed_dimension}}px)',
    img_ratio_err: 'Image width/height ratio doesn\'t match the requested value of {{aspect_ratio}}'
  },

  templates: {
    // wrapped in <div class="fupl-wrapper"><div class="fupl"></div></div>
    main: '<div class="fupl-result"></div>' +
      '<div class="fupl-panel">' +
        '<div class="fupl-button">' +
          '<label><input type="file"></label>' +
          '<div class="fupl-dd-text">{</div>' +
        '</div>' +
        '<div class="fupl-info-text"></div>' +
      '</div>',

    // contenuto di fupl-result quando non sono presenti files
    no_file: {
      img: '<div class="fupl-result-empty text-muted small font-italic">No image present</div>',
      doc: '<div class="fupl-result-empty text-muted small font-italic">No file present</div>'
    },

    remove_btn: '<button type="button" class="close fupl-remove-trigger" aria-label="Elimina" title="Delete this file">' +
          '<span aria-hidden="true">&times;</span>' +
        '</button>',

    loading_element: '<div class="fupl-loading"><progress class="fupl-progress" max=100 value=0></progress></div>',

    alternative_loading_element: '<div class="spinner-grow text-primary" role="status">' +
        '<span class="sr-only">Loading...</span></div',
    img: {
      single: '<div class="fupl-item">' +
        '<div class="fupl-remove"></div>' +
        '<img alt="Uploaded image" class="img-fluid fupl-img">' +
        '<div class="fupl-file-info">' +
          '<div class="text-truncate fupl-file-name"></div>' +
          '<div class="fupl-file-size"></div>' +
          '<div class="fupl-extra-fields"></div>' +
        '</div>' +
      '</div>',

      multiple: '<div class="fupl-item">' +
          '<div class="fupl-remove"></div>' +
          '<div class="fupl-img-wrapper">' +
            '<img alt="Uploaded image" class="img-fluid fupl-img" draggable="false">' +
          '</div>' +
          '<div class="fupl-file-info">' +
            '<div class="text-truncate fupl-file-name"></div>' +
            '<div class="fupl-file-size"></div>' +
          '</div>' +
          '<div class="fupl-extra-fields"></div>' +
          '<div class="fupl-sortable-icon"></div>' +
        '</div>'
    },

    doc : {
      single: '<div class="fupl-item">' +
          '<div class="fupl-doc-wrapper">' +
            '<div class="fupl-remove"></div>' +
            '<div class="fupl-doc text-truncate">' +
              '<a class="text-truncate fupl-file-name fupl-url" draggable="false"></a>' +
            '</div>' +
          '</div>' +
          '<div class="small ml-1 text-nowrap fupl-file-size"></div>' +
          '<div class="fupl-extra-fields"></div>' +
          '<div class="fupl-sortable-icon"></div>' +
        '</div>',

      multiple: null
    }
  },

  info_text: {
    std_imgs : '<strong>JPEG</strong>, <strong>PNG</strong>, <strong>GIF</strong> or <strong>WEBP</strong> images',
    imgs_svg : '<strong>JPEG</strong>, <strong>PNG</strong>, <strong>GIF</strong>, <strong>WEBP</strong> or <strong>SVG</strong> images',
    imgs_svg_size_info_text: '<strong>Non-SVG images only:</strong> ',
    img_optimize_info: 'Optimize your images before uploading. ' +
        '<a href="https://squoosh.app/" target="_blank">Squoosh</a> is a great and free tools for this.',
    svg_optimize_info: 'Optimize your SVG files before uploading ' +
        '(for example using <a href="https://jakearchibald.github.io/svgomg/" target="_blank">SVGO</a>)',
    img_fixed_size: 'size: <strong>{{img_w}}&times;{{img_h}}px</strong>',
    img_equal_min_size: 'width and height not less than <strong>{{img_min_w}}px</strong>',
    img_equal_max_size: 'width and height not exceeding <strong>{{img_max_w}}px</strong>',
    img_fixed_width : 'width <strong>{{img_w}}px</strong>',
    img_fixed_height : 'height <strong>{{img_h}}px</strong>',
    img_width_range: 'width between <strong>{{img_min_w}}px</strong> and <strong>{{img_max_w}}px</strong>',
    img_min_width: 'width not less than <strong>{{img_min_w}}px</strong>',
    img_max_width: 'width not exceeding <strong>{{img_max_w}}px</strong>',
    img_height_range: 'height between <strong>{{img_min_h}}px</strong> and <strong>{{img_max_h}}px</strong>',
    img_min_height: 'height not less than <strong>{{img_min_h}}px</strong>',
    img_max_height: 'height not exceeding <strong>{{img_max_h}}px</strong>',
    pdf_file: '<strong>PDF</strong> file',
    svg: '<strong>SVG</strong> file',
    max_filesize: 'max <strong>{{max_filesize}}</strong>',
    img_aspect_ratio: 'image width/height ratio must be exactly <strong>{{img_aspect_ratio}}</strong>'
  },

  input_text: {
    img: {
      single:   ['Select an image', '\u2026or drag it here'],
      multiple: ['Select one or more images', '\u2026or drag them here']
    },
    doc: {
      single: ['Select a file', '\u2026or drag it here'],
      multiple: ['Select one or more files', '\u2026or drag them here']
    }
  },

  sortable_icon: '<div title="Drag to change order"></div>'


};
