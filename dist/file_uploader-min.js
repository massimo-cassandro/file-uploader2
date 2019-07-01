/*!@preserve
 *
 * FileUploader 2.0
 * HTML5 / JS Async Uploader
 * Massimo Cassandro 2017-2019
 *
 */
"use strict";var FileUploader2=function(){var e;return{}}();function _typeof(e){return(_typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function e(t){return typeof t}:function e(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(e)}function _toConsumableArray(e){return _arrayWithoutHoles(e)||_iterableToArray(e)||_nonIterableSpread()}function _nonIterableSpread(){throw new TypeError("Invalid attempt to spread non-iterable instance")}function _iterableToArray(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}function _arrayWithoutHoles(e){if(Array.isArray(e)){for(var t=0,i=new Array(e.length);t<e.length;t++)i[t]=e[t];return i}}function _typeof(e){return(_typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function e(t){return typeof t}:function e(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(e)}function _toConsumableArray(e){return _arrayWithoutHoles(e)||_iterableToArray(e)||_nonIterableSpread()}function _nonIterableSpread(){throw new TypeError("Invalid attempt to spread non-iterable instance")}function _iterableToArray(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}function _arrayWithoutHoles(e){if(Array.isArray(e)){for(var t=0,i=new Array(e.length);t<e.length;t++)i[t]=e[t];return i}}FileUploader2=function(e){var t=function e(){if(-1!==navigator.userAgent.indexOf("MSIE")||navigator.appVersion.indexOf("Trident/")>-1||navigator.userAgent.indexOf("Trident/")>-1)return!1;var t=document.createElement("div");return("draggable"in t||"ondragstart"in t&&"ondrop"in t)&&"FormData"in window&&"FileReader"in window&&"fetch"in window};return e.init=function(i){var r=e.setOptions(i);if(!t())return r.silent_degradation||alert(r.alert_messages.unsuitable_browser),void(r.unsuitable_browser_callback&&"function"==typeof r.unsuitable_browser_callback&&r.unsuitable_browser_callback());r.css&&document.head.insertAdjacentHTML("beforeend",'<link rel="stylesheet" href="'+r.css+'" type="text/css" media="all">'),document.querySelectorAll("[data-"+e.data_attributes.fupl_selector+"]").forEach(function(t){var i=t.dataset,a=t.dataset[e.data_attributes.fupl_selector],n={};""===i&&(i={}),a=""===a?{}:JSON.parse(a),delete(n=e.setOptions(r,a,i))[e.data_attributes.fupl_selector],n.element=t;try{if(!n.uploader_url)throw new Error("Parametro `uploader_url` non impostato");if(n.filetype=n.filetype.toLowerCase(),-1===Object.keys(e.mimetypes).indexOf(n.filetype))throw new Error("Parametro `filetype` non corretto")}catch(e){console.error(e)}var l=["input_text","templates","info_text_wrap_string","values"];for(var o in l.forEach(function(e){try{"string"==typeof n[e]&&(n[e]=JSON.parse(n[e]))}catch(t){console.error("L'elemento “".concat(e,"” non è un json valido")),console.log(n.element),console.error(t)}}),n)"string"==typeof n[o]&&-1!==["true","false","null"].indexOf(n[o].toLowerCase)&&(n[o]=JSON.parse(n[o]));new e.createUploader(n)})},e}((FileUploader2=function(e){return e.createUploader=function(t){var i=t.element.querySelector('input[type="file"]'),r=t.element.querySelector("label");if("auto"===t.filetype){var a=[],n=[];null!==t.accept&&(n=t.accept.split(",").map(function(e){return e.trim()})),i&&i.getAttribute("accept")&&(a=i.getAttribute("accept").split(",").map(function(e){return e.trim()})),t.accept=_toConsumableArray(new Set([].concat(_toConsumableArray(n),_toConsumableArray(a))))}else t.accept=e.mimetypes[t.filetype];var l=e.parse_max_filesize(t.max_filesize,t.locales),o,s;if(!1===l)throw new Error('"'+t.max_filesize+'" non è un valore corretto per `max_filesize`');(t.max_filesize=l,t.multiple=Boolean(t.multiple||i&&i.hasAttribute("multiple")),t.required=Boolean(t.required||i&&i.hasAttribute("required")),t._type="img"===t.filetype?"img":"doc",t._mode=t.multiple?"multiple":"single",!t.uploader_legend_text&&r&&(t.uploader_legend_text=r.innerHTML),t.uploader_legend_text||(t.uploader_legend_text="__label non presente__"),t.element.classList.add("fupl"),t.wrapper=document.createElement("div"),t.element.parentNode.insertBefore(t.wrapper,t.element),t.wrapper.appendChild(t.element),t.wrapper.classList.add("fupl-wrapper"),t.wrapper.classList.add("fupl-type-"+t._type),t.multiple&&t.wrapper.classList.add("fupl-multiple"),t.wrapper_extra_class)&&(o=t.wrapper.classList).add.apply(o,_toConsumableArray(t.wrapper_extra_class.split(" ")));if(t.uploader_add_legend){var u=["fupl-legend"];t.uploader_legend_class&&u.push(t.uploader_legend_class),t.required&&u.push("required"),t.element.insertAdjacentHTML("beforebegin","<legend"+(u.length?' class="'+u.join(" ")+'"':"")+">"+t.uploader_legend_text+"</legend>"),t.wrapper.classList.add("fupl-has-legend")}(t.element.innerHTML=t.templates.main,t.istance_input=t.element.querySelector('.fupl-panel input[type="file"]'),t.istance_label=t.element.querySelector(".fupl-panel label"),t.istance_dd_text=t.element.querySelector(".fupl-panel .fupl-dd-text"),t.istance_info_text=t.element.querySelector(".fupl-panel .fupl-info-text"),t.istance_result_wrapper=t.element.querySelector(".fupl-result"),t.multiple&&t.istance_input.setAttribute("multiple",""),null!==t.accept&&t.istance_input.setAttribute("accept",t.accept.join(",")),t.required&&(t.wrapper.dataset[e.data_attributes.required]="true"),t.istance_label.insertAdjacentHTML("beforeend",t.input_text[t._type][t._mode][0]),t.input_label_class)&&(s=t.istance_label.classList).add.apply(s,_toConsumableArray(t.input_label_class.split(" ")));if(t.istance_dd_text.innerHTML=t.input_text[t._type][t._mode][1],t.show_info_text&&(t.custom_info_text?t.istance_info_text.innerHTML=t.custom_info_text:t.istance_info_text.innerHTML=e.create_info_text(t)),t.values&&("object"===_typeof(t.values)?Array.isArray(t.values)||(t.values=[t.values]):console.error("Il parametro `values` non è corretto")),t.values&&t.values.length&&t.values.forEach(function(i){e.createItem(i,t)}),e.set_has_values(t),e.setListeners(t),null!==t.init_callback&&t.init_callback(t),t.debug){console.groupCollapsed("FileUploader options");var p={},_=Object.keys(t);_.sort(),_.forEach(function(e){var i="object"===_typeof(t[e])&&null!==t[e]&&"element"!==e;p[e]=i?JSON.stringify(t[e],null," "):t[e]}),console.table(p),console.groupCollapsed("fupl_options"),console.log(t),console.groupEnd(),console.groupEnd()}},e}((FileUploader2=function(e){return e.createItem=function(t,i){try{var r=i.templates[i._type][i._mode];null===r&&"multiple"===i._mode&&(r=i.templates[i._type].single);var a=document.createElement("div");a.innerHTML=r,a.querySelector(".fupl-remove").innerHTML=i.templates.remove_btn;var n=a.querySelector(".fupl-file-name");n&&t.name&&(n.innerHTML=t.name,n.title=t.name);var l=a.querySelector(".fupl-file-size");if(l){var o="";"img"===i._type&&t.wi&&t.he&&(o=t.wi+"&times;"+t.he+'<span class="fupl-unit">px</span>',t.size&&(o+=" &ndash; ")),t.size&&(o+=e.parse_filesize(t.size,i.locales)),l.innerHTML=o}"img"===i._type&&(a.querySelector(".fupl-img").src=t.src);var s=a.querySelector(".fupl-url");s&&t.url&&(s.href=t.url);var u=a.querySelector(".fupl-item");return(t.id||t.rel_id)&&(u.dataset[e.data_attributes.item_id]=t.rel_id?t.rel_id:t.id),t.loading&&(u.classList.add("fupl-is-uploading"),u.insertAdjacentHTML("beforeend",i.templates.loading_element)),"single"===i._mode?i.istance_result_wrapper.innerHTML=a.innerHTML:(i.istance_result_wrapper.querySelector(".fupl-item")||(i.istance_result_wrapper.innerHTML=""),i.istance_result_wrapper.insertAdjacentHTML("beforeend",a.innerHTML)),(a=i.istance_result_wrapper.querySelector(".fupl-item:last-child")).querySelector(".fupl-remove-trigger").addEventListener("click",function(){var t=a.dataset[e.data_attributes.item_id];a.remove(),t&&i.wrapper.insertAdjacentHTML("beforeend",'<input type="hidden" name="'.concat(i.delete_varname,'" value="').concat(t,'">')),e.set_has_values(i)}),i.istance_result_wrapper.querySelector(".fupl-item:last-child")}catch(e){console.error(e)}},e}((FileUploader2=function(e){return e.setListeners=function(t){["dragenter","dragover","dragleave","drop"].forEach(function(e){t.element.addEventListener(e,function(e){e.preventDefault(),e.stopPropagation()},!1)}),["dragover","dragenter"].forEach(function(e){t.element.addEventListener(e,function(){t.element.classList.add(t.element_dragover_class)},!1)}),["dragleave","dragend"].forEach(function(e){t.element.addEventListener(e,function(){t.element.classList.remove(t.element_dragover_class)},!1)}),t.element.addEventListener("drop",function(i){t.element.classList.remove(t.element_dragover_class);var r=i.dataTransfer.files;!t.multiple&&r.length>1?t.alert_api(t.alert_messages.too_much_files,t):e.sendFiles(r,t)},!1),t.istance_input.addEventListener("change",function(){e.sendFiles(t.istance_input.files,t)})},e}((FileUploader2=function(e){return e.sendFiles=function(t,i){var r=function e(t){var r=i.element.closest("form"),a;i.disable_submit&&r&&r.querySelectorAll('[type="submit"]').forEach(function(e){e.disabled=t})},a=function t(a,n){r(!0);var l=e.createItem({id:null,name:a.file.name,url:null,src:n,wi:a.width,he:a.height,size:a.file.size,loading:!0},i),o=l.querySelector(".fupl-progress"),s=l.querySelector(".fupl-loading"),u=i.alert_messages.xhr_error.replace(/{{file_name}}/,a.file.name),p=function e(){l.querySelector(".fupl-remove-trigger").click()};i.upload_start_callback&&"function"==typeof i.upload_start_callback&&i.upload_start_callback({item:a,img_preview:n,uploader_options:i}),new Promise(function(e,t){var r=new XMLHttpRequest;r.open("POST",i.uploader_url,!0),r.onload=function(){if(r.status>=200&&r.status<400){var n=JSON.parse(r.responseText);n.error?(i.alert_api(u,i),console.error(n.error),t()):(a.tmp_file=n.tmp_file,e()),i.upload_complete_callback&&"function"==typeof i.upload_complete_callback&&i.upload_complete_callback({item:a,server_error:n.error,fupl_options:i})}else i.alert_api(u,i),console.error(r.status,r.statusText),console.error(r.responseText);t()},r.onerror=function(){i.alert_api(u,i),i.debug&&(console.error(r.status,r.statusText),console.error(r.responseText)),t()},r.upload.addEventListener("progress",function(e){if(i.alternate_loading_func&&"function"==typeof i.alternate_loading_func)i.alternate_loading_func(e,i);else{var t=Math.round(e.loaded/e.total*100)||0;o&&(e.lengthComputable?(t=t===1/0?100:t,l.querySelector(".fupl-progress").value=t):(s.innerHTML=i.templates.alternate_loading_progress,o=null))}},!1);var n=new FormData;n.append("file",a.file),r.send(n)}).then(function(){l.classList.remove("fupl-is-uploading"),l.querySelector(".fupl-loading").remove(),l.insertAdjacentHTML("beforeend",e.buildHiddenFields(a,i)),e.set_has_values(i),r(!1)},function(){p(),e.set_has_values(i)})};t.length&&_toConsumableArray(t).forEach(function(t,r){try{var n={id:"fupl_item_"+ +new Date+"_"+r,file:t,width:null,height:null,tmp_file:null};if(i.accept.length){var l=t.name.split(".").pop().toLowerCase();if(-1===i.accept.indexOf(t.type)&&-1===i.accept.indexOf("."+l))throw i.alert_messages.file_format_error.replace(/{{file_name}}/,t.name)}if(null!==i.max_filesize&&t.size>i.max_filesize.maxbytes){var o=e.parse_filesize(t.size,i.locales);throw i.alert_messages.file_size_error.replace(/{{file_name}}/,t.name).replace(/{{file_size}}/,o).replace(/{{allowed_size}}/,i.max_filesize.feedback_size)}if("img"===i.filetype){var s=new FileReader;s.addEventListener("load",function(){var e=new Image;e.src=s.result,e.addEventListener("load",function(){var r=[];n.width=e.width,n.height=e.height,i.img_w&&e.width!==i.img_w?r.push(i.alert_messages.img_exact_width_err.replace(/{{image_dimension}}/,e.width).replace(/{{allowed_dimension}}/,i.img_w)):i.img_min_w&&e.width<i.img_min_w?r.push(i.alert_messages.img_min_width_err.replace(/{{image_dimension}}/,e.width).replace(/{{allowed_dimension}}/,i.img_min_w)):i.img_max_w&&e.width>i.img_max_w&&r.push(i.alert_messages.img_max_width_err.replace(/{{image_dimension}}/,e.width).replace(/{{allowed_dimension}}/,i.img_max_w)),i.img_h&&e.height!==i.img_h?r.push(i.alert_messages.img_exact_height_err.replace(/{{image_dimension}}/,e.height).replace(/{{allowed_dimension}}/,i.img_h)):i.img_min_h&&e.height<i.img_min_h?r.push(i.alert_messages.img_min_height_err.replace(/{{image_dimension}}/,e.height).replace(/{{allowed_dimension}}/,i.img_min_h)):i.img_max_h&&e.height>i.img_max_h&&r.push(i.alert_messages.img_max_height_err.replace(/{{image_dimension}}/,e.height).replace(/{{allowed_dimension}}/,i.img_max_h)),r.length?i.alert_api(i.alert_messages.img_err_start_string.replace(/{{file_name}}/,t.name)+"<br><ul><li>"+r.join("</li><li>")+"</li></ul>",i):a(n,s.result)},!1)},!1),s.readAsDataURL(t)}else a(n)}catch(e){i.alert_api(e,i)}})},e}((FileUploader2=function(e){var t=function e(t){for(var i="",r={"à":"a","è":"e","é":"e","ì":"i","ò":"o","ù":"u","À":"A","È":"E","É":"E","Ì":"I","Ò":"O","Ù":"U","'":"_","|":"_","!":"_",'"':"_",$:"_","%":"_","&":"_","/":"_","(":"_",")":"_","=":"_","?":"_","^":"_","*":"_","[":"_","]":"_","ç":"c","@":"_","#":"_","<":"_",">":"_","ü":"u","Ü":"U","ñ":"n","Ñ":"N","~":"_",":":"_","\\":"_"},a=0;a<t.length;a++)t[a]in r?i+=r[t[a]]:768===t.charCodeAt(a)||769===t.charCodeAt(a)?i+="":t.charCodeAt(a)>127?i+="_":i+=t.charAt(a);return i.replace(/ /g,"_").replace(/_+/g,"_")};return e.buildHiddenFields=function(e,i){var r="",a={tmp_file:e.tmp_file,file_name:t(e.file.name),size:e.file.size,type:e.file.type};for(var n in"img"===i._type&&(a.width=e.width,a.height=e.height),a)r+='<input type="hidden" name="'+i.varname+"["+e.id+"]["+n+']" value="'+a[n]+'">';return'<div class="fupl-hiddens">'+r+"</div>"},e}((FileUploader2=function(e){return e.create_info_text=function(e){var t=[];"img"===e.filetype?(t.push("immagini in formato <strong>JPEG</strong>, <strong>PNG</strong>, <strong>GIF</strong> o <strong>WEBP</strong>"),e.img_w&&e.img_h?t.push("dimensioni: <strong>"+e.img_w+"&times;"+e.img_h+"px</strong>"):e.img_w&&e.img_h&&e.img_w===e.img_h?t.push("larghezza e altezza <strong>"+e.img_h+"px</strong>"):e.img_min_w&&e.img_min_h&&e.img_min_w===e.img_min_h?t.push("larghezza e altezza non inferiori a <strong>"+e.img_min_w+"px</strong>"):e.img_max_w&&e.img_max_h&&e.img_max_w===e.img_max_h?t.push("larghezza e altezza non superiori a <strong>"+e.img_max_w+"px</strong>"):(e.img_w?t.push("larghezza <strong>"+e.img_w+"px</strong>"):e.img_min_w&&e.img_max_w?t.push("larghezza compresa tra <strong>"+e.img_min_w+"px</strong> e <strong>"+e.img_max_w+"px</strong>"):e.img_min_w?t.push("larghezza non inferiore a <strong>"+e.img_min_w+"px</strong>"):e.img_max_w&&t.push("larghezza non superiore a <strong>"+e.img_max_w+"px</strong>"),e.img_h?t.push("altezza <strong>"+e.img_h+"px</strong>"):e.img_min_h&&e.img_max_h?t.push("altezza compresa tra <strong>"+e.img_min_h+"px</strong> e <strong>"+e.img_max_h+"px</strong>"):e.img_min_h?t.push("altezza non inferiore a <strong>"+e.img_min_h+"px</strong>"):e.img_max_h&&t.push("altezza non superiore a <strong>"+e.img_max_h+"px</strong>"))):"pdf"===e.filetype&&t.push("file in formato <strong>PDF</strong>"),null!==e.max_filesize&&t.push("max <strong>"+e.max_filesize.feedback_size+"</strong>");var i=t.join(e.info_text_join_string);return i=i.charAt(0).toUpperCase()+i.slice(1),e.info_text_wrap_string&&i&&(i=e.info_text_wrap_string[0]+i+e.info_text_wrap_string[1]),i},e}((FileUploader2=function(e){var t={silent_degradation:!1,unsuitable_browser_callback:null,css:null,debug:!1,locales:"it-IT",disabled:!1,alert_api:function e(t,i){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:error;window.alert(i.alert_messages.mes)},alert_messages:{unsuitable_browser:"Il tuo browser non ha tutte le funzionalità richieste da questa applicazione.\nUtilizza la versione più recente di Firefox, Edge, Safari, Opera o Chrome",too_much_files:"Puoi selezionare un solo file!",xhr_error:"Si &egrave; verificato un errore nel caricamento del file &ldquo;<strong>{{file_name}}</strong>&rdquo;.",file_format_error:"Il file &ldquo;<strong>{{file_name}}</strong>&rdquo; &egrave; di un formato non consentito",file_size_error:"Le dimensioni di &ldquo;<strong>{{file_name}}</strong>&rdquo; ({{file_size}}) superano il valore massimo consentito ({{allowed_size}})",img_err_start_string:"L'immagine &ldquo;<strong>{{file_name}}</strong>&rdquo; non è corretta:",img_exact_width_err:"Larghezza non corrispondente ({{image_dimension}}px invece di {{allowed_dimension}}px)",img_min_width_err:"Larghezza inferiore a quella minima consentita ({{image_dimension}}px invece di {{allowed_dimension}}px)",img_max_width_err:"Larghezza superiore a quella massima consentita ({{image_dimension}}px invece di {{allowed_dimension}}px)",img_exact_height_err:"Altezza non corrispondente ({{image_dimension}}px invece di {{allowed_dimension}}px)",img_min_height_err:"Altezza inferiore a quella minima consentita ({{image_dimension}}px invece di {{allowed_dimension}}px)",img_max_height_err:"Altezza superiore a quella massima consentita ({{image_dimension}}px invece di {{allowed_dimension}}px)"},uploader_url:null,filetype:"auto",accept:null,multiple:!1,required:!1,disable_submit:!1,templates:{main:'<div class="fupl-result"></div><div class="fupl-panel"><div class="fupl-button"><label><input type="file"></label><div class="fupl-dd-text">{</div></div><div class="fupl-info-text"></div></div>',no_file:{img:'<div class="fupl-result-empty text-muted small font-italic">Nessuna immagine presente</div>',doc:'<div class="fupl-result-empty text-muted small font-italic">Nessun file presente</div>'},remove_btn:'<button type="button" class="close fupl-remove-trigger" aria-label="Elimina" title="Elimina questo file"><span aria-hidden="true">&times;</span></button>',loading_element:'<div class="fupl-loading"><progress class="fupl-progress" max=100 value=0></progress></div>',alternate_loading_progress:'<div class="spinner-grow text-primary" role="status"><span class="sr-only">Loading...</span></div',img:{single:'<div class="fupl-item"><div class="fupl-remove"></div><img alt="Immagine caricata" class="img-fluid fupl-img"><div class="fupl-file-info"><div class="text-truncate fupl-file-name"></div><div class="fupl-file-size"></div></div></div>',multiple:'<div class="fupl-item"><div class="fupl-remove"></div><div class="fupl-img-wrapper"><img alt="Immagine caricata" class="img-fluid fupl-img"></div><div class="fupl-file-info"><div class="text-truncate fupl-file-name"></div><div class="fupl-file-size"></div></div></div>'},doc:{single:'<div class="fupl-item"><div class="fupl-remove"></div><div class="fupl-doc text-truncate"><a href="#" class="text-truncate fupl-file-name fupl-url"></a></div><span class="small ml-1 text-nowrap fupl-file-size"></span></div>',multiple:null}},wrapper_extra_class:null,element_dragover_class:"fupl-is-dragover",uploader_add_legend:!0,uploader_legend_text:null,uploader_legend_class:null,input_text:{img:{single:["Seleziona un'immagine","…oppure trascinala qui"],multiple:["Seleziona una o pi&ugrave; immagini","…oppure trascinale qui"]},doc:{single:["Seleziona un documento","…oppure trascinalo qui"],multiple:["Seleziona uno o pi&ugrave; documenti","…oppure trascinali qui"]}},input_label_class:"btn btn-outline-primary btn-sm",show_info_text:!0,info_text_wrap_string:["(",")"],info_text_join_string:", ",custom_info_text:null,img_min_w:null,img_max_w:null,img_w:null,img_min_h:null,img_max_h:null,img_h:null,max_filesize:null,varname:"file",init_callback:null,upload_start_callback:null,upload_complete_callback:null,alternate_loading_func:null,values:[],delete_varname:"elimina_file[]",reorder:!1,reorder_varname:"order"};return e.setOptions=function(){for(var e=arguments.length,i=new Array(e),r=0;r<e;r++)i[r]=arguments[r];if(Object.assign&&"function"==typeof Object.assign)return Object.assign.apply(Object,[{},t].concat(i));var a=function(){var e={},r=function r(a){e[a]=t[a],i.forEach(function(t){void 0!==t[a]&&(e[a]=t[a])})};for(var a in t)r(a);return{v:e}}();return"object"===_typeof(a)?a.v:void 0},e}((FileUploader2=function(e){return e.mimetypes={auto:null,img:["image/png","image/jpeg","image/pjpeg","image/gif","image/webp",".png",".jpg",".jpeg",".pjpg",".pjpeg",".gif",".webp"],pdf:["application/pdf",".pdf"]},e.data_attributes={fupl_selector:"file_uploader2",required:"required",hasValues:"hasValues",item_id:"id"},e.set_has_values=function(t){var i=t.istance_result_wrapper.querySelectorAll(".fupl-item").length;t.wrapper.dataset[e.data_attributes.hasValues]=i?"true":"false",i||(t.istance_result_wrapper.innerHTML=t.templates.no_file[t._type])},e.parse_filesize=function(e,t){var i=1048576;return(e=+e)>=i?(e/i).toLocaleString(t,{maximumFractionDigits:1})+'<span class="fupl-unit">MB</span>':Math.round(e/1024).toLocaleString(t,{maximumFractionDigits:0})+'<span class="fupl-unit">KB</span>'},e.parse_max_filesize=function(e,t){if(e){var i,r,a;if(isNaN(e)){if(r=e.substr(-2,2).toUpperCase(),a=i=+e.substr(0,e.length-2),isNaN(i)||"KB"!==r&&"MB"!==r)return!1}else r="KB",a=i=+e;return i>=1024&&"KB"===r&&(r="MB",a=Math.round(i/1024*100)/100),"KB"===r?i*=1024:i=1024*i*1024,{maxbytes:i,feedback_size:a.toLocaleString(t,{maximumFractionDigits:"KB"===r?0:1})+'<span class="fupl-unit">'+r+"</span>"}}return null},e}(FileUploader2||{}))||{}))||{}))||{}))||{}))||{}))||{}))||{}))||{});
//# sourceMappingURL=file_uploader-min.js.map