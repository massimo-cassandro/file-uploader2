import {FileUploader} from '/src/file_uploader.js';
import {fupl_strings_en} from '/src/i18n/en.js';

FileUploader({
  // selector: default value is used
  // css: `/demo/css/fileuploader.css` is already linked to the page
  options: {
    uploader_url: './demo-assets/server-side-demo-response.json',
    debug: true // show a console.log of parsed options
  },
  local_strs: fupl_strings_en
});
