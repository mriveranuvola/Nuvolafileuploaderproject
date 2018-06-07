/*!
 * bootstrap-fileinput v4.4.8
 * http://plugins.krajee.com/file-input
 *
 * Krajee Explorer theme configuration for bootstrap-fileinput. Load this theme file after loading `fileinput.js`.
 *
 * Author: Kartik Visweswaran
 * Copyright: 2014 - 2018, Kartik Visweswaran, Krajee.com
 *
 * Licensed under the BSD 3-Clause
 * https://github.com/kartik-v/bootstrap-fileinput/blob/master/LICENSE.md
 */
(function ($) {
    "use strict";
    $.fn.fileinputThemes.nuvola = {
        frameClass: 'nuvola-frame',
        layoutTemplates: {
            /*preview:'' +
            '<div class = "toolbar">' +
            '   {browse}\n' +
            '</div>',*/
            // wrapper del footer -> aunque en esta version el footer esta de header en el preview
            footer  :'<div class="file-preview-caption">' +
            '           {caption}' +
            '         </div>'+
            '        {progress}'+
            '        {actions}',

            // wrapper de los botones
            actions :'<div class="file-actions">\n' +
            '               {upload} {download} {delete} {zoom} {other} ' +
            '         </div>',

            // botones dentro el prewiew
            actionDelete    :'<a class="kv-file-remove {removeClass}" title="{removeTitle}" {dataUrl}{dataKey}>{removeIcon}</a>',
            actionUpload    :'<a class="kv-file-upload {uploadClass}" title="{uploadTitle}" {dataUrl}{dataKey}>{uploadIcon}</a>',
            actionDownload  :'<a class="kv-file-download {downloadClass}" title="{downloadTitle}" href="{downloadUrl}" download="{caption}" target="_blank">{downloadIcon}</a>',
            actionZoom      :'<a class="kv-file-zoom {zoomClass}" title="{zoomTitle}">{zoomIcon}</a>',
            btnBrowse       :'<div tabindex="500" class="pull-right btn-file" {status}>{icon}</div>',// boton con el clip
            size            :'<span>({sizeText})</span>',

            //wrapper de casa preview en "file-preview-thumbnails se redenriza lo que está en "PreviewContentTemplates" (uno para casda tipo de archivo) "
            preview:
                    '<div class="file-preview {class}">' +
                    '    <div class="{dropClass}">' +
                    '       <div class="file-preview-thumbnails nuvola-thumbs"></div>' +
                    '       <div class="clearfix"></div>' +
                    '       <div class="file-preview-status text-center text-success"></div>' +
                    '       <div class="kv-fileinput-error"></div>' +
                    '    </div>' +
                    '</div>',

            caption  :/*'<span class="file-caption nuvola-caption" tabindex="500">\n' +
                        '   <span class="file-caption-name"> </span>' +
                        ' ' +
                      '</span>'*/ '',
            // wrapper del template principal
            main1:
                    '<div class="file-header"><span>{title}</span>{caption} {browse}</div>' +
                    '<div class="kv-upload-progress kv-hidden"></div>' +
                    '<div class="clearfix"></div>'+
                    '{preview}',

            // Zoom view -> modal
            modal:
                    '<div class="modal-dialog modal-lg{rtl}" role="document">' +
                    '  <div class="modal-content">' +
                    '    <div class="kv-zoom-actions">'+
                    '      {close}' +
                    '    </div>' +
                    '    <div class="modal-body">' +
                    '      <div class="floating-buttons"></div>' +
                    '      <div class="kv-zoom-body file-zoom-content {zoomFrameClass}"></div>' +
                    '      <div class="kv-zoom-content-footer file-zoom-title"><span class="kv-zoom-title"></span></div>' +
                    '       {prev} {next}' +
                    '    </div>' +
                    '  </div>' +
                    '</div>'

        },
        // lo que se renederiza antes del preview tagbefore1+previContent
        previewMarkupTags: {
            tagBefore1:
            '<div class="file-preview-frame {frameClass}" id="{previewId}" data-fileindex="{fileindex}" data-template="{template}">' +
            '{footer}'+
            '<div class="kv-file-content content-wrapper">',
            tagBefore2:
            '<div class="file-preview-frame {frameClass}" id="{previewId}" data-fileindex="{fileindex}" data-template="{template}" title="{caption}">'+
            '{footer}'+
            '<div class="kv-file-content content-wrapper">',
            tagAfter:
               ''
        },
        // templates o tag para cada tipo de archivo
        previewContentTemplates: {
           image:'<img src="{data}" class="file-preview-image kv-preview-data" title="{caption}" alt="{caption}">'
        },
        // ancho y alto del archivo a visualizar
        previewSettings: {
            image: {height: "100px", width:"auto"},
        },
        //  icono y clases que se pasan a actionDelete:, actionUpload:, actionDownload:, etc. dentro de action:
        fileActionSettings: {
            removeIcon: '<i class="fa fa-trash"></i>',
            uploadIcon: '<i class="fa fa-upload"></i>',
            uploadRetryIcon: '<i class="fa fa-repeat"></i>',
            downloadIcon: '<i class="fa fa-download"></i>',
            zoomIcon: '<i class="fa fa-search-plus"></i>',
            dragIcon: '<i class="fa fa-arrows"></i>',
            indicatorNew: '<i class="fa fa-plus-circle text-warning"></i>',
            indicatorSuccess: '<i class="fa fa-check-circle text-success"></i>',
            indicatorError: '<i class="fa fa-exclamation-circle text-danger"></i>',
            indicatorLoading: '<i class="fa fa-hourglass text-muted"></i>',
            removeClass: 'btn-action',
            uploadClass: 'btn-action',
            downloadClass: 'btn-action',
            zoomClass: 'btn-action',
        },
        previewFileIcon: '<i class="fa fa-file"></i>',
        browseIcon: '<i class="fa fa-paperclip"></i>',
        removeIcon: '<i class="fa fa-trash"></i>',
        cancelIcon: '<i class="fa fa-ban"></i>',
        uploadIcon: '<i class="fa fa-upload"></i>',
        msgValidationErrorIcon: '<i class="fa fa-exclamation-circle"></i> ',
        //  modal de vista en grande
        previewZoomButtonIcons: {
            prev: '<i class="fa fa-angle-left fa-lg"></i>',
            next: '<i class="fa fa-angle-right fa-lg"></i>',
            toggleheader: '<i class="fa fa-fw fa-arrows-v"></i>',
            fullscreen: '<i class="fa fa-fw fa-arrows-alt"></i>',
            borderless: '<i class="fa fa-fw fa-external-link"></i>',
            close: '<i class="fa fa-fw fa-remove"></i>'
        },
        previewZoomButtonClasses: {
            prev: 'btn btn-navigate',
            next: 'btn btn-navigate',
            toggleheader: 'btn btn-sm btn-kv btn-default btn-outline-secondary',
            fullscreen: 'btn btn-sm btn-kv btn-default btn-outline-secondary',
            borderless: 'btn btn-sm btn-kv btn-default btn-outline-secondary',
            close: 'btn-close btn-outline-secondary'
        },

    };
})(window.jQuery);

//--

$(document).ready(function(){

    $("#open").click(function () {
        console.log('documentReady');
        $("#nuvolafileuploaderModal").modal('show');
    })

    $("#attahments").fileinput({
        theme: 'nuvola',
        language: $('html').attr('lang'),
        uploadUrl: "/file-upload-single/1"})
});

//--
$(document).on('show.bs.modal', '.modal', function () {
    var zIndex = 1040 + (10 * $('.modal:visible').length);
    $(this).css('z-index', zIndex);
    setTimeout(function() {
        $('.modal-backdrop').not('.modal-stack').css('z-index', zIndex - 1).addClass('modal-stack');
    }, 0);


});
