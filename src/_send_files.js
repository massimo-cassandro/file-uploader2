FileUploader = ((upl) => {

  /*
	sendFiles
	Esegue i controlli impostati, quindi la chiamata ajax e produce
	il feedback per l'utente
	*/
  upl.sendFiles = (filelist, fupl_options) => {


    /*
    disable_submit
    disabilita il form fino a caricamento completato
    */
    const disable_submit = (modo) => {
      // modo === true → disable, false → enable
        const _form = fupl_options.element.closest('form');

        if(fupl_options.disable_submit && _form) {
          const submit_btns = _form.querySelectorAll('[type="submit"]');

          submit_btns.forEach( btn => {
            btn.disabled = modo;
          });

        //BUG il listener non viene rimosso con modo == false
        // const submitHandler = (e) => {
        //   e.preventDefault();
        //   //return false;
        // };
        // if(modo === true) {
        //   _form.addEventListener('submit', submitHandler);
        // } else {
        //   if( !fupl_options.instance_result_wrapper.querySelector('.fupl-item.fupl-is-uploading')) {
        //     _form.removeEventListener('submit', submitHandler);
        //   }
        // }
        }
      },

      /*
      uploadFile
      esegue l'upload Ajax
      https://www.smashingmagazine.com/2018/01/drag-drop-file-uploader-vanilla-js/

      current_item contiene:
        - `id`: id univoco dell'elemento
        - `file`: oggetto filelist
        - `width` e height: dimensioni in pixel dell'immagine.
                    null se non si tratta di immagini
        - `tmp_file`: nel caso di nuovi elementi: nome del file temporaneo

      */
      uploadFile = function ( current_item, img_preview ) {

        // disabilitazione form
        disable_submit(true);

        // aggiunta elemento all'uploader
        let this_item = upl.createItem({
            id       : current_item.id,
            name     : current_item.file.name,
            url      : null,
            src      : img_preview,
            wi       : current_item.width,
            he       : current_item.height,
            size     : current_item.file.size,
            img_type : current_item.file.img_type,
            loading  : true
          }, fupl_options),


          fupl_progress= this_item.querySelector('.fupl-progress'),
          fupl_loading_wrapper = this_item.querySelector('.fupl-loading'),

          xhr_error_message = fupl_options.alert_messages.xhr_error.replace(/{{file_name}}/, current_item.file.name);

        //console.log(this_item); // eslint-disable-line

        const remove_item_on_error = () => {
          this_item.querySelector('.fupl-remove-trigger').click();
        };

        /*
        Funzione callback personalizzata
        Vedi `_set_options.js` per tutti i parametri
        */
        if( fupl_options.upload_start_callback ) {
          upl.exec_callback(fupl_options.upload_start_callback, {
            item              : current_item,
            img_preview       : img_preview,
            uploader_options  : fupl_options
          });
        }

        new Promise(function(resolve, reject) {
          let ajax = new XMLHttpRequest();
          ajax.open( 'POST', fupl_options.uploader_url, true );

          ajax.onload = function() {

            if( ajax.status >= 200 && ajax.status < 400 ) {

              const response = JSON.parse( ajax.responseText );

              /*
              jsonResponse:
              {
                "tmp_file": "file_temporaneo",
                "error": null
              }
            */
              if(response.error) {

                fupl_options.alert_api( xhr_error_message, fupl_options );
                console.error( response.error ); // eslint-disable-line
                reject();

              } else {
                current_item.tmp_file = response.tmp_file;
                resolve();
              }

              /*
              Funzione callback personalizzata
              Vedi `_set_options.js` per tutti i parametri
              */
              if( fupl_options.upload_complete_callback ) {
                upl.exec_callback(fupl_options.upload_complete_callback, {
                  item          : current_item,
                  server_error  : response.error,
                  fupl_options  : fupl_options
                });
              }


            } else {
              fupl_options.alert_api( xhr_error_message, fupl_options );
              /* eslint-disable */
              console.error( ajax.status, ajax.statusText );
              console.error( ajax.responseText );
              /* eslint-enable */
            }

            reject();
          };

          ajax.onerror = function() {
            fupl_options.alert_api( xhr_error_message, fupl_options );
            /* eslint-disable */
            if(fupl_options.debug) {
              console.error( ajax.status,  ajax.statusText );
              console.error( ajax.responseText );
            }
            /* eslint-enable */

            reject();
          };

          ajax.upload.addEventListener('progress', function (e) {
            if( fupl_options.alternative_loading_func ) {
              //fupl_options.alternative_loading_func(e, fupl_options);

              upl.exec_callback(fupl_options.alternative_loading_func, ...[e, fupl_options]);

            } else {
              let perc_loaded = Math.round(e.loaded / e.total * 100.0) || 0;

              //console.log(e.loaded ,e.total, perc_loaded); // eslint-disable-line
              if(fupl_progress) {
                if(e.lengthComputable) {
                  perc_loaded = perc_loaded === Infinity? 100 : perc_loaded;
                  this_item.querySelector('.fupl-progress').value = perc_loaded;
                } else {
                  fupl_loading_wrapper.innerHTML = fupl_options.templates.alternative_loading_element;
                  fupl_progress = null;
                }
              }
            }
          }, false);


          let fileData = new FormData();
          fileData.append('file', current_item.file);
          ajax.send( fileData );
        }) // end promise
          .then(
            // resolve
            function (  ) {
              //console.log('resolve'); // eslint-disable-line
              this_item.classList.remove('fupl-is-uploading');
              this_item.querySelector('.fupl-loading').remove(); // elemento loading

              this_item.insertAdjacentHTML('beforeend',
                upl.buildHiddenFields(current_item, fupl_options)
              );

              upl.set_has_values(fupl_options);

              //Se non ci sono altri elemento in caricamento, disable_submit viene annullato
              disable_submit(false);

            },
            //reject
            function (  ) {
              //console.log('reject'); // eslint-disable-line
              remove_item_on_error();
              upl.set_has_values(fupl_options);
            }
          );

      };

    if( filelist.length ) {

      // https://stackoverflow.com/questions/38362231/
      //how-to-use-promise-in-foreach-loop-of-array-to-populate-an-object
      [...filelist].forEach(function (filelist_item, idx) {
        try {

          let current_item = {
            id: 'fupl_item_' + Date.now() + '_' + idx, // id unico
            file: filelist_item,
            width: null,
            height: null,
            tmp_file: null,
            img_type: fupl_options._type === 'img'?
              (filelist_item.type === 'image/svg+xml' ? 'svg' : 'bmp') : null
          };

          // controllo filetype (per drag&drop e browser che non supportano accept)
          if( fupl_options.accept.length ) {
            let ext = filelist_item.name.split('.').pop().toLowerCase();
            if( fupl_options.accept.indexOf( filelist_item.type ) === -1 &&
              fupl_options.accept.indexOf( '.' + ext ) === -1) {

              throw fupl_options.alert_messages.file_format_error
                .replace(/{{file_name}}/, filelist_item.name );
            }
          } // end controllo filetype

          // controllo maxfilesize
          if( fupl_options.max_filesize !== null ) {
            if( filelist_item.size > fupl_options.max_filesize.maxbytes ) {
              let item_parsed_size = upl.parse_bytes_value(filelist_item.size, fupl_options.locales);

              throw fupl_options.alert_messages.file_size_error
                .replace(/{{file_name}}/, filelist_item.name )
                .replace(/{{file_size}}/, item_parsed_size )
                .replace(/{{allowed_size}}/, fupl_options.max_filesize.feedback_size );

            }
          } // end controllo maxfilesize

          // analisi immagini bitmap e caricamento
          //if(current_item.img_type === 'bmp') {
          if( fupl_options._type === 'img') {
            let reader  = new FileReader();
            reader.addEventListener('load', function () {

              let image = new Image();
              image.src = reader.result;
              image.addEventListener('load', function () {

                let err_mes = [];
                current_item.width=image.width;
                current_item.height=image.height;
                if(current_item.img_type === 'bmp') {
                  if( fupl_options.img_w && image.width !== fupl_options.img_w ) {
                    err_mes.push(
                      fupl_options.alert_messages.img_exact_width_err
                        .replace(/{{image_dimension}}/, image.width)
                        .replace(/{{allowed_dimension}}/, fupl_options.img_w)
                    );

                  } else if(fupl_options.img_min_w && image.width < fupl_options.img_min_w) {
                    err_mes.push(
                      fupl_options.alert_messages.img_min_width_err
                        .replace(/{{image_dimension}}/, image.width)
                        .replace(/{{allowed_dimension}}/, fupl_options.img_min_w)
                    );

                  } else if(fupl_options.img_max_w && image.width > fupl_options.img_max_w) {
                    err_mes.push(
                      fupl_options.alert_messages.img_max_width_err
                        .replace(/{{image_dimension}}/, image.width)
                        .replace(/{{allowed_dimension}}/, fupl_options.img_max_w)
                    );
                  }

                  if (fupl_options.img_h && image.height !== fupl_options.img_h) {
                    err_mes.push(
                      fupl_options.alert_messages.img_exact_height_err
                        .replace(/{{image_dimension}}/, image.height)
                        .replace(/{{allowed_dimension}}/, fupl_options.img_h)
                    );

                  } else if(fupl_options.img_min_h && image.height < fupl_options.img_min_h) {
                    err_mes.push(
                      fupl_options.alert_messages.img_min_height_err
                        .replace(/{{image_dimension}}/, image.height)
                        .replace(/{{allowed_dimension}}/, fupl_options.img_min_h)
                    );

                  } else if(fupl_options.img_max_h && image.height > fupl_options.img_max_h) {
                    err_mes.push(
                      fupl_options.alert_messages.img_max_height_err
                        .replace(/{{image_dimension}}/, image.height)
                        .replace(/{{allowed_dimension}}/, fupl_options.img_max_h)
                    );

                  }
                }

                // aspect ratio
                if(fupl_options.parsed_img_aspect_ratio) {
                  let img_ratio = Math.round(((image.width / image.height) + Number.EPSILON) * fupl_options.aspect_ratio_accuracy) / fupl_options.aspect_ratio_accuracy;
                  if(img_ratio !== fupl_options.parsed_img_aspect_ratio) {
                    err_mes.push(
                      fupl_options.alert_messages.img_ratio_err
                        .replace(/{{aspect_ratio}}/, fupl_options.img_aspect_ratio)
                    );
                  }
                }

                if( err_mes.length ) {
                  fupl_options.alert_api(
                    fupl_options.alert_messages.img_err_start_string
                      .replace(/{{file_name}}/, filelist_item.name ) + '<br>\n' +
                    '<ul><li>' + err_mes.join('</li>\n<li>') + '</li></ul>',
                    fupl_options );

                } else {
                  uploadFile( current_item, reader.result );
                }

              }, false); // end image.addEventListener("load"

            }, false); // end reader.addEventListener("load"

            reader.readAsDataURL( filelist_item );

            // } else if(current_item.img_type === 'svg') { // svg

            //   let reader = new FileReader();

            //   reader.addEventListener('load', () => {

            //     let image = new Image();
            //     image.src = reader.result;

            //     image.addEventListener('load', function () {
            //       current_item.width=image.width;
            //       current_item.height=image.height;
            //     });

            //     uploadFile( current_item,
            //       reader.result
            //       //'data:image/svg+xml;base64,' +  window.btoa(event.target.result)
            //     );
            //   });
            //   reader.readAsDataURL(filelist_item);

          } else { // non immagine
            uploadFile( current_item );

          } // end if image

        } catch (errormessage) {
          fupl_options.alert_api( errormessage, fupl_options ,'error');
        }
      }); // end foreach

    } // end if( filelist.length )

  }; // end upl.sendFiles

  return upl;

})(FileUploader || {});
