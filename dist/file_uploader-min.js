/*!@preserve
 *
 * FileUploader 2.0
 * HTML5 / JS Async Uploader
 * Massimo Cassandro 2017-2019
 *
 */
"use strict";var FileUploader2=function(){var e;return{}}();function _typeof(e){return(_typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function e(t){return typeof t}:function e(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(e)}function _toConsumableArray(e){return _arrayWithoutHoles(e)||_iterableToArray(e)||_nonIterableSpread()}function _nonIterableSpread(){throw new TypeError("Invalid attempt to spread non-iterable instance")}function _iterableToArray(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}function _arrayWithoutHoles(e){if(Array.isArray(e)){for(var t=0,r=new Array(e.length);t<e.length;t++)r[t]=e[t];return r}}function _typeof(e){return(_typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function e(t){return typeof t}:function e(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(e)}function _toConsumableArray(e){return _arrayWithoutHoles(e)||_iterableToArray(e)||_nonIterableSpread()}function _nonIterableSpread(){throw new TypeError("Invalid attempt to spread non-iterable instance")}function _iterableToArray(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}function _arrayWithoutHoles(e){if(Array.isArray(e)){for(var t=0,r=new Array(e.length);t<e.length;t++)r[t]=e[t];return r}}FileUploader2=function(e){var t=function e(){if(-1!==navigator.userAgent.indexOf("MSIE")||navigator.appVersion.indexOf("Trident/")>-1||navigator.userAgent.indexOf("Trident/")>-1)return!1;var t=document.createElement("div");return("draggable"in t||"ondragstart"in t&&"ondrop"in t)&&"FormData"in window&&"FileReader"in window&&"fetch"in window};return e.init=function(r){var a=e.setOptions(r);if(!t())return a.silent_degradation||alert(a.alert_messages.unsuitable_browser),void(a.unsuitable_browser_callback&&"function"==typeof a.unsuitable_browser_callback&&a.unsuitable_browser_callback());a.css&&document.head.insertAdjacentHTML("beforeend",'<link rel="stylesheet" href="'+a.css+'" type="text/css" media="all">'),document.querySelectorAll("[data-"+a.fupl_selector+"]").forEach(function(t){var r=t.dataset,i=a.fupl_selector.replace(/-([a-z])/g,function(e){return e[1].toUpperCase()}),n=t.dataset[i],l={};""===r&&(r={}),n=""===n?{}:JSON.parse(n),delete(l=e.setOptions(a,n,r))[i],l.element=t;try{if(!l.uploader_url)throw new Error("Parametro `uploader_url` non impostato");if(l.filetype=l.filetype.toLowerCase(),-1===Object.keys(e.mimetypes).indexOf(l.filetype))throw new Error("Parametro `filetype` non corretto")}catch(e){console.error(e)}var o=["input_text","templates","info_text_wrap_string","values"];for(var s in o.forEach(function(e){try{"string"==typeof l[e]&&(l[e]=JSON.parse(l[e]))}catch(t){console.error("L'elemento “".concat(e,"” non è un json valido")),console.log(l.element),console.error(t)}}),l)"string"==typeof l[s]&&-1!==["true","false","null"].indexOf(l[s].toLowerCase)&&(l[s]=JSON.parse(l[s]));new e.createUploader(l)})},e}((FileUploader2=function(e){return e.createUploader=function(t){var r=t.element.querySelector('input[type="file"]'),a=t.element.querySelector("label");if("auto"===t.filetype){var i=[],n=[];null!==t.accept&&(n=t.accept.split(",").map(function(e){return e.trim()})),r&&r.getAttribute("accept")&&(i=r.getAttribute("accept").split(",").map(function(e){return e.trim()})),t.accept=_toConsumableArray(new Set([].concat(_toConsumableArray(n),_toConsumableArray(i))))}else t.accept=e.mimetypes[t.filetype];var l=e.parse_max_filesize(t.max_filesize,t.locales),o,s;if(!1===l)throw new Error('"'+t.max_filesize+'" non è un valore corretto per `max_filesize`');(t.max_filesize=l,t.multiple=Boolean(t.multiple||r&&r.hasAttribute("multiple")),t.required=Boolean(t.required||r&&r.hasAttribute("required")),t.disabled=Boolean(t.disabled||r&&r.hasAttribute("disabled")),t._type="img"===t.filetype?"img":"doc",t._mode=t.multiple?"multiple":"single",!t.uploader_legend_text&&a&&(t.uploader_legend_text=a.innerHTML),t.uploader_legend_text||(t.uploader_legend_text="__legend non presente__"),t.element.classList.add("fupl"),t.wrapper=document.createElement("fieldset"),t.element.parentNode.insertBefore(t.wrapper,t.element),t.wrapper.appendChild(t.element),t.wrapper.classList.add("fupl-wrapper"),t.wrapper.classList.add("fupl-type-"+t._type),t.multiple&&t.wrapper.classList.add("fupl-multiple"),t.wrapper_extra_class)&&(o=t.wrapper.classList).add.apply(o,_toConsumableArray(t.wrapper_extra_class.split(" ")));if(t.uploader_legend){var u=["fupl-legend"];t.uploader_legend_class&&u.push(t.uploader_legend_class),t.required&&u.push("required"),t.element.insertAdjacentHTML("beforebegin","<legend"+(u.length?' class="'+u.join(" ")+'"':"")+">"+t.uploader_legend_text+"</legend>"),t.wrapper.classList.add("fupl-has-legend")}(t.element.innerHTML=t.templates.main,t.istance_input=t.element.querySelector('.fupl-panel input[type="file"]'),t.istance_label=t.element.querySelector(".fupl-panel label"),t.istance_dd_text=t.element.querySelector(".fupl-panel .fupl-dd-text"),t.istance_info_text=t.element.querySelector(".fupl-panel .fupl-info-text"),t.istance_result_wrapper=t.element.querySelector(".fupl-result"),t.multiple&&t.istance_input.setAttribute("multiple",""),null!==t.accept&&t.istance_input.setAttribute("accept",t.accept.join(",")),t.required&&(t.wrapper.dataset[e.data_attributes.required]="true"),t.disabled&&(t.wrapper.setAttribute("disabled",!0),t.wrapper.setAttribute("aria-disabled",!0)),t.istance_label.insertAdjacentHTML("beforeend",t.input_text[t._type][t._mode][0]),t.input_label_class)&&(s=t.istance_label.classList).add.apply(s,_toConsumableArray(t.input_label_class.split(" ")));if(t.istance_dd_text.innerHTML=t.input_text[t._type][t._mode][1],t.show_info_text&&(t.custom_info_text?t.istance_info_text.innerHTML=t.custom_info_text:t.istance_info_text.innerHTML=e.create_info_text(t)),t.sortable&&(t.multiple&&t.sortable_varname?e.activateSortable(t):(console.error('"sortable" option incorrectly set'),t.sortable=!1)),t.values&&("object"===_typeof(t.values)?Array.isArray(t.values)||(t.values=[t.values]):console.error("Il parametro `values` non è corretto")),t.values&&t.values.length&&t.values.forEach(function(r){e.createItem(r,t)}),e.set_has_values(t),e.setListeners(t),null!==t.init_callback&&t.init_callback(t),t.fancybox&&null!==t.fancybox_callback_func&&t.fancybox_callback_func(t),t.debug){console.groupCollapsed("FileUploader options");var p={},c=Object.keys(t);c.sort(),c.forEach(function(e){var r="object"===_typeof(t[e])&&null!==t[e]&&"element"!==e;p[e]=r?JSON.stringify(t[e],null," "):t[e]}),console.table(p),console.groupCollapsed("fupl_options"),console.log(t),console.groupEnd(),console.groupEnd()}},e}((FileUploader2=function(e){return e.createItem=function(t,r){try{var a=r.templates[r._type][r._mode];null===a&&"multiple"===r._mode&&(a=r.templates[r._type].single);var i=document.createElement("div");i.innerHTML=a,i.querySelector(".fupl-remove").innerHTML=r.templates.remove_btn;var n=i.querySelector(".fupl-file-name");n&&t.name&&(n.innerHTML=t.name,n.title=t.name);var l=i.querySelector(".fupl-file-size");if(l){var o="";"img"===r._type&&t.wi&&t.he&&(o=t.wi+"&times;"+t.he+'<span class="fupl-unit">px</span>',t.size&&(o+=" &ndash; ")),t.size&&(o+=e.parse_filesize(t.size,r.locales)),l.innerHTML=o}"img"===r._type&&(i.querySelector(".fupl-img").src=t.src);var s=i.querySelector(".fupl-url");s&&t.url&&(s.href=t.url);var u=i.querySelector(".fupl-item");(t.id||t.rel_id)&&(u.dataset[e.data_attributes.item_id]=t.rel_id?t.rel_id:t.id),t.loading&&(u.classList.add("fupl-is-uploading"),u.insertAdjacentHTML("beforeend",r.templates.loading_element)),"single"===r._mode?r.istance_result_wrapper.innerHTML=i.innerHTML:(r.istance_result_wrapper.querySelector(".fupl-item")||(r.istance_result_wrapper.innerHTML=""),r.istance_result_wrapper.insertAdjacentHTML("beforeend",i.innerHTML));var p=r.istance_result_wrapper.querySelector(".fupl-item:last-child");if(p.querySelector(".fupl-remove-trigger").addEventListener("click",function(){var t=p.dataset[e.data_attributes.item_id];p.remove(),t&&r.wrapper.insertAdjacentHTML("beforeend",'<input type="hidden" name="'.concat(r.delete_varname,'" value="').concat(t,'">')),e.set_has_values(r)}),r.fancybox&&"img"===r._type&&t.url&&r.fancybox_anchor_markup){if(!p.querySelector("a.fupl-url")){var c=p.querySelector(".fupl-img"),_=document.createElement("div");_.innerHTML=r.fancybox_anchor_markup,_=_.firstChild,c.parentNode.insertBefore(_,c),_.appendChild(c)}p.querySelector("a.fupl-url").setAttribute("href",t.url)}if(r.sortable){p.setAttribute("draggable",!0);var d=r.istance_result_wrapper.querySelectorAll(".fupl-item").length-1;p.insertAdjacentHTML("beforeend",'<input type="hidden" class="fupl-sortable-order" '+'name="'.concat(r.sortable_varname,"[").concat(t.id,']" value="').concat(d,'">')),r.sortable_icon&&(p.querySelector(".fupl-sortable-icon").innerHTML=r.sortable_icon),e.addSortableEvents(p,r)}return r.istance_result_wrapper.querySelector(".fupl-item:last-child")}catch(e){console.error(e)}},e}((FileUploader2=function(e){return e.setListeners=function(t){["dragenter","dragover","dragleave","drop"].forEach(function(e){t.element.addEventListener(e,function(e){e.preventDefault(),e.stopPropagation()},!1)}),["dragover","dragenter"].forEach(function(e){t.element.addEventListener(e,function(){t.element.classList.add(t.element_dragover_class)},!1)}),["dragleave","dragend"].forEach(function(e){t.element.addEventListener(e,function(){t.element.classList.remove(t.element_dragover_class)},!1)}),t.element.addEventListener("drop",function(r){if(t.element.classList.remove(t.element_dragover_class),!t.wrapper.hasAttribute("disabled")){var a=r.dataTransfer.files;a.length&&(!t.multiple&&a.length>1?t.alert_api(t.alert_messages.too_much_files,t):e.sendFiles(a,t))}},!1),t.istance_input.addEventListener("change",function(){e.sendFiles(t.istance_input.files,t)})},e}((FileUploader2=function(e){return e.sendFiles=function(t,r){var a=function e(t){var a=r.element.closest("form"),i;r.disable_submit&&a&&a.querySelectorAll('[type="submit"]').forEach(function(e){e.disabled=t})},i=function t(i,n){a(!0);var l=e.createItem({id:i.id,name:i.file.name,url:null,src:n,wi:i.width,he:i.height,size:i.file.size,loading:!0},r),o=l.querySelector(".fupl-progress"),s=l.querySelector(".fupl-loading"),u=r.alert_messages.xhr_error.replace(/{{file_name}}/,i.file.name),p=function e(){l.querySelector(".fupl-remove-trigger").click()};r.upload_start_callback&&"function"==typeof r.upload_start_callback&&r.upload_start_callback({item:i,img_preview:n,uploader_options:r}),new Promise(function(e,t){var a=new XMLHttpRequest;a.open("POST",r.uploader_url,!0),a.onload=function(){if(a.status>=200&&a.status<400){var n=JSON.parse(a.responseText);n.error?(r.alert_api(u,r),console.error(n.error),t()):(i.tmp_file=n.tmp_file,e()),r.upload_complete_callback&&"function"==typeof r.upload_complete_callback&&r.upload_complete_callback({item:i,server_error:n.error,fupl_options:r})}else r.alert_api(u,r),console.error(a.status,a.statusText),console.error(a.responseText);t()},a.onerror=function(){r.alert_api(u,r),r.debug&&(console.error(a.status,a.statusText),console.error(a.responseText)),t()},a.upload.addEventListener("progress",function(e){if(r.alternate_loading_func&&"function"==typeof r.alternate_loading_func)r.alternate_loading_func(e,r);else{var t=Math.round(e.loaded/e.total*100)||0;o&&(e.lengthComputable?(t=t===1/0?100:t,l.querySelector(".fupl-progress").value=t):(s.innerHTML=r.templates.alternate_loading_progress,o=null))}},!1);var n=new FormData;n.append("file",i.file),a.send(n)}).then(function(){l.classList.remove("fupl-is-uploading"),l.querySelector(".fupl-loading").remove(),l.insertAdjacentHTML("beforeend",e.buildHiddenFields(i,r)),e.set_has_values(r),a(!1)},function(){p(),e.set_has_values(r)})};t.length&&_toConsumableArray(t).forEach(function(t,a){try{var n={id:"fupl_item_"+Date.now()+"_"+a,file:t,width:null,height:null,tmp_file:null};if(r.accept.length){var l=t.name.split(".").pop().toLowerCase();if(-1===r.accept.indexOf(t.type)&&-1===r.accept.indexOf("."+l))throw r.alert_messages.file_format_error.replace(/{{file_name}}/,t.name)}if(null!==r.max_filesize&&t.size>r.max_filesize.maxbytes){var o=e.parse_filesize(t.size,r.locales);throw r.alert_messages.file_size_error.replace(/{{file_name}}/,t.name).replace(/{{file_size}}/,o).replace(/{{allowed_size}}/,r.max_filesize.feedback_size)}if("img"===r.filetype){var s=new FileReader;s.addEventListener("load",function(){var e=new Image;e.src=s.result,e.addEventListener("load",function(){var a=[];n.width=e.width,n.height=e.height,r.img_w&&e.width!==r.img_w?a.push(r.alert_messages.img_exact_width_err.replace(/{{image_dimension}}/,e.width).replace(/{{allowed_dimension}}/,r.img_w)):r.img_min_w&&e.width<r.img_min_w?a.push(r.alert_messages.img_min_width_err.replace(/{{image_dimension}}/,e.width).replace(/{{allowed_dimension}}/,r.img_min_w)):r.img_max_w&&e.width>r.img_max_w&&a.push(r.alert_messages.img_max_width_err.replace(/{{image_dimension}}/,e.width).replace(/{{allowed_dimension}}/,r.img_max_w)),r.img_h&&e.height!==r.img_h?a.push(r.alert_messages.img_exact_height_err.replace(/{{image_dimension}}/,e.height).replace(/{{allowed_dimension}}/,r.img_h)):r.img_min_h&&e.height<r.img_min_h?a.push(r.alert_messages.img_min_height_err.replace(/{{image_dimension}}/,e.height).replace(/{{allowed_dimension}}/,r.img_min_h)):r.img_max_h&&e.height>r.img_max_h&&a.push(r.alert_messages.img_max_height_err.replace(/{{image_dimension}}/,e.height).replace(/{{allowed_dimension}}/,r.img_max_h)),a.length?r.alert_api(r.alert_messages.img_err_start_string.replace(/{{file_name}}/,t.name)+"<br><ul><li>"+a.join("</li><li>")+"</li></ul>",r):i(n,s.result)},!1)},!1),s.readAsDataURL(t)}else i(n)}catch(e){r.alert_api(e,r,"error")}})},e}((FileUploader2=function(e){var t=function e(t){for(var r="",a={"à":"a","è":"e","é":"e","ì":"i","ò":"o","ù":"u","À":"A","È":"E","É":"E","Ì":"I","Ò":"O","Ù":"U","'":"_","|":"_","!":"_",'"':"_",$:"_","%":"_","&":"_","/":"_","(":"_",")":"_","=":"_","?":"_","^":"_","*":"_","[":"_","]":"_","ç":"c","@":"_","#":"_","<":"_",">":"_","ü":"u","Ü":"U","ñ":"n","Ñ":"N","~":"_",":":"_","\\":"_"},i=0;i<t.length;i++)t[i]in a?r+=a[t[i]]:768===t.charCodeAt(i)||769===t.charCodeAt(i)?r+="":t.charCodeAt(i)>127?r+="_":r+=t.charAt(i);return r.replace(/ /g,"_").replace(/_+/g,"_")};return e.buildHiddenFields=function(e,r){var a="",i={tmp_file:e.tmp_file,file_name:t(e.file.name),size:e.file.size,type:e.file.type};for(var n in"img"===r._type&&(i.width=e.width,i.height=e.height),i)a+='<input type="hidden" name="'+r.varname+"["+e.id+"]["+n+']" value="'+i[n]+'">';return'<div class="fupl-hiddens">'+a+"</div>"},e}((FileUploader2=function(e){var t="fupl-sortable",r="fupl-sorting",a="fupl-item-sorting",i="fupl-item-dragover",n=null,l=!1,o=function e(){n&&(n.classList.remove(a),n.parentNode.querySelectorAll("."+i).forEach(function(e){e.classList.remove(i)}),n.closest(".fupl").classList.remove(r)),n=null};return e.addSortableEvents=function(e,t){e.addEventListener("dragstart",function(e){l=t.wrapper.disabled,o(),l||(n=this,t.element.classList.add(r),e.dataTransfer.effectAllowed="move",e.dataTransfer.setData("text","fupl-sorting"),this.classList.add(a))},!1),e.addEventListener("dragenter",function(e){"fupl-sorting"!==e.dataTransfer.getData("text")||l||(e.stopPropagation&&e.stopPropagation(),this!==n&&this.classList.add(i))},!1),e.addEventListener("dragover",function(e){return"fupl-sorting"!==e.dataTransfer.getData("text")||l||(e.preventDefault&&e.preventDefault(),e.dataTransfer.dropEffect="move",this!==n&&this.classList.add(i)),!1},!1),e.addEventListener("dragleave",function(){this.classList.remove(i)},!1),e.addEventListener("drop",function(e){return"fupl-sorting"!==e.dataTransfer.getData("text")||l||(e.stopPropagation&&e.stopPropagation(),e.preventDefault(),n&&(this.previousElementSibling===n&&this.nextElementSibling?this.parentNode.insertBefore(n,this.nextElementSibling):this.nextElementSibling?this.parentNode.insertBefore(n,this):this.parentNode.insertAdjacentElement("beforeend",n)),o()),!1},!1),e.addEventListener("dragend",function(e){"fupl-sorting"!==e.dataTransfer.getData("text")||l||(t.element.classList.remove(r),o(),t.istance_result_wrapper.querySelectorAll(".fupl-sortable-order").forEach(function(e,t){e.value=t}))},!1)},e.activateSortable=function(e){e.istance_result_wrapper.classList.add(t)},e}((FileUploader2=function(e){return e.create_info_text=function(e){var t=[];"img"===e.filetype?(t.push("immagini in formato <strong>JPEG</strong>, <strong>PNG</strong>, <strong>GIF</strong> o <strong>WEBP</strong>"),e.img_w&&e.img_h?t.push("dimensioni: <strong>"+e.img_w+"&times;"+e.img_h+"px</strong>"):e.img_w&&e.img_h&&e.img_w===e.img_h?t.push("larghezza e altezza <strong>"+e.img_h+"px</strong>"):e.img_min_w&&e.img_min_h&&e.img_min_w===e.img_min_h?t.push("larghezza e altezza non inferiori a <strong>"+e.img_min_w+"px</strong>"):e.img_max_w&&e.img_max_h&&e.img_max_w===e.img_max_h?t.push("larghezza e altezza non superiori a <strong>"+e.img_max_w+"px</strong>"):(e.img_w?t.push("larghezza <strong>"+e.img_w+"px</strong>"):e.img_min_w&&e.img_max_w?t.push("larghezza compresa tra <strong>"+e.img_min_w+"px</strong> e <strong>"+e.img_max_w+"px</strong>"):e.img_min_w?t.push("larghezza non inferiore a <strong>"+e.img_min_w+"px</strong>"):e.img_max_w&&t.push("larghezza non superiore a <strong>"+e.img_max_w+"px</strong>"),e.img_h?t.push("altezza <strong>"+e.img_h+"px</strong>"):e.img_min_h&&e.img_max_h?t.push("altezza compresa tra <strong>"+e.img_min_h+"px</strong> e <strong>"+e.img_max_h+"px</strong>"):e.img_min_h?t.push("altezza non inferiore a <strong>"+e.img_min_h+"px</strong>"):e.img_max_h&&t.push("altezza non superiore a <strong>"+e.img_max_h+"px</strong>"))):"pdf"===e.filetype&&t.push("file in formato <strong>PDF</strong>"),null!==e.max_filesize&&t.push("max <strong>"+e.max_filesize.feedback_size+"</strong>");var r=t.join(e.info_text_join_string);return r=r.charAt(0).toUpperCase()+r.slice(1),e.info_text_wrap_string&&r&&(r=e.info_text_wrap_string[0]+r+e.info_text_wrap_string[1]),r},e}((FileUploader2=function(e){var t={fupl_selector:"file-uploader",silent_degradation:!1,unsuitable_browser_callback:null,css:null,debug:!1,locales:"it-IT",disabled:!1,alert_api:function e(t,r){var a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"error";window.alert(t.replace(/(<([^>]+)>)/gi,""))},alert_messages:{unsuitable_browser:"Il tuo browser non ha tutte le funzionalità richieste da questa applicazione.\nUtilizza la versione più recente di Firefox, Edge, Safari, Opera o Chrome",too_much_files:"Puoi selezionare un solo file!",xhr_error:"Si &egrave; verificato un errore nel caricamento del file “<strong>{{file_name}}</strong>”.",file_format_error:"Il file “<strong>{{file_name}}</strong>” è di un formato non consentito",file_size_error:"Le dimensioni di “<strong>{{file_name}}</strong>” ({{file_size}}) superano il valore massimo consentito ({{allowed_size}})",img_err_start_string:"L'immagine “<strong>{{file_name}}</strong>” non è corretta:",img_exact_width_err:"Larghezza non corrispondente ({{image_dimension}}px invece di {{allowed_dimension}}px)",img_min_width_err:"Larghezza inferiore a quella minima consentita ({{image_dimension}}px invece di {{allowed_dimension}}px)",img_max_width_err:"Larghezza superiore a quella massima consentita ({{image_dimension}}px invece di {{allowed_dimension}}px)",img_exact_height_err:"Altezza non corrispondente ({{image_dimension}}px invece di {{allowed_dimension}}px)",img_min_height_err:"Altezza inferiore a quella minima consentita ({{image_dimension}}px invece di {{allowed_dimension}}px)",img_max_height_err:"Altezza superiore a quella massima consentita ({{image_dimension}}px invece di {{allowed_dimension}}px)"},uploader_url:null,filetype:"auto",accept:null,multiple:!1,required:!1,disable_submit:!1,templates:{main:'<div class="fupl-result"></div><div class="fupl-panel"><div class="fupl-button"><label><input type="file"></label><div class="fupl-dd-text">{</div></div><div class="fupl-info-text"></div></div>',no_file:{img:'<div class="fupl-result-empty text-muted small font-italic">Nessuna immagine presente</div>',doc:'<div class="fupl-result-empty text-muted small font-italic">Nessun file presente</div>'},remove_btn:'<button type="button" class="close fupl-remove-trigger" aria-label="Elimina" title="Elimina questo file"><span aria-hidden="true">&times;</span></button>',loading_element:'<div class="fupl-loading"><progress class="fupl-progress" max=100 value=0></progress></div>',alternate_loading_progress:'<div class="spinner-grow text-primary" role="status"><span class="sr-only">Loading...</span></div',img:{single:'<div class="fupl-item"><div class="fupl-remove"></div><img alt="Immagine caricata" class="img-fluid fupl-img"><div class="fupl-file-info"><div class="text-truncate fupl-file-name"></div><div class="fupl-file-size"></div></div></div>',multiple:'<div class="fupl-item"><div class="fupl-remove"></div><div class="fupl-img-wrapper"><img alt="Immagine caricata" class="img-fluid fupl-img" draggable="false"></div><div class="fupl-file-info"><div class="text-truncate fupl-file-name"></div><div class="fupl-file-size"></div></div><div class="fupl-sortable-icon"></div></div>'},doc:{single:'<div class="fupl-item"><div class="fupl-remove"></div><div class="fupl-doc text-truncate"><a class="text-truncate fupl-file-name fupl-url" draggable="false"></a></div><span class="small ml-1 text-nowrap fupl-file-size"></span><div class="fupl-sortable-icon"></div></div>',multiple:null}},wrapper_extra_class:null,element_dragover_class:"fupl-is-dragover",uploader_legend:!0,uploader_legend_text:null,uploader_legend_class:null,input_text:{img:{single:["Seleziona un'immagine","…oppure trascinala qui"],multiple:["Seleziona una o pi&ugrave; immagini","…oppure trascinale qui"]},doc:{single:["Seleziona un documento","…oppure trascinalo qui"],multiple:["Seleziona uno o pi&ugrave; documenti","…oppure trascinali qui"]}},input_label_class:"btn btn-outline-primary btn-sm",show_info_text:!0,info_text_wrap_string:["(",")"],info_text_join_string:", ",custom_info_text:null,img_min_w:null,img_max_w:null,img_w:null,img_min_h:null,img_max_h:null,img_h:null,max_filesize:null,varname:"file",init_callback:null,upload_start_callback:null,upload_complete_callback:null,alternate_loading_func:null,values:[],delete_varname:"elimina_file[]",fancybox:!1,fancybox_anchor_markup:'<a class="fupl-url" data-fancybox="fupl-gallery"></a>',fancybox_callback_func:null,sortable:!1,sortable_varname:"uploader_order",sortable_icon:'<div title="Trascina per cambiare l\'ordinamento"></div>'};return e.setOptions=function(){for(var e=arguments.length,r=new Array(e),a=0;a<e;a++)r[a]=arguments[a];if(Object.assign&&"function"==typeof Object.assign)return Object.assign.apply(Object,[{},t].concat(r));var i=function(){var e={},a=function a(i){e[i]=t[i],r.forEach(function(t){void 0!==t[i]&&(e[i]=t[i])})};for(var i in t)a(i);return{v:e}}();return"object"===_typeof(i)?i.v:void 0},e}((FileUploader2=function(e){return e.mimetypes={auto:null,img:["image/png","image/jpeg","image/pjpeg","image/gif","image/webp",".png",".jpg",".jpeg",".pjpg",".pjpeg",".gif",".webp"],pdf:["application/pdf",".pdf"]},e.data_attributes={required:"required",hasValues:"hasValues",item_id:"id"},e.set_has_values=function(t){var r=t.istance_result_wrapper.querySelectorAll(".fupl-item").length;t.wrapper.dataset[e.data_attributes.hasValues]=r?"true":"false",r||(t.istance_result_wrapper.innerHTML=t.templates.no_file[t._type])},e.parse_filesize=function(e,t){var r=1048576;return(e=+e)>=r?(e/r).toLocaleString(t,{maximumFractionDigits:1})+'<span class="fupl-unit">MB</span>':Math.round(e/1024).toLocaleString(t,{maximumFractionDigits:0})+'<span class="fupl-unit">KB</span>'},e.parse_max_filesize=function(e,t){if(e){var r,a,i;if(isNaN(e)){if(a=e.substr(-2,2).toUpperCase(),i=r=+e.substr(0,e.length-2),isNaN(r)||"KB"!==a&&"MB"!==a)return!1}else a="KB",i=r=+e;return r>=1024&&"KB"===a&&(a="MB",i=Math.round(r/1024*100)/100),"KB"===a?r*=1024:r=1024*r*1024,{maxbytes:r,feedback_size:i.toLocaleString(t,{maximumFractionDigits:"KB"===a?0:1})+'<span class="fupl-unit">'+a+"</span>"}}return null},e}(FileUploader2||{}))||{}))||{}))||{}))||{}))||{}))||{}))||{}))||{}))||{});
//# sourceMappingURL=file_uploader-min.js.map