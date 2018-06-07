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

            footer  :'<div class="file-preview-caption">' +
            '           {caption}' +
            '         </div>'+
            '        {progress}'+
            '        {actions}',

            actions :'<div class="file-actions">\n' +
            '               {upload} {download} {delete} {zoom} {other} ' +
            '         </div>',

            preview : '<div class="file-preview {class}">' +
            '               <div class="{dropClass}">' +
            '               <div class="file-preview-thumbnails nuvola-thumbs">' +
            '               </div>' +
            '               <div class="clearfix"></div>' +
            '               <div class="file-preview-status text-center text-success"></div>' +
            '               <div class="kv-fileinput-error"></div>' +
            '               </div>' +
            '           </div>',

            btnBrowse:'<div tabindex="500" class="pull-right btn-file" {status}>{icon}</div>',

            caption  :/*'<span class="file-caption nuvola-caption" tabindex="500">\n' +
                        '   <span class="file-caption-name"> </span>' +
                        ' ' +
                      '</span>'*/ '',

            main1:  '<div class="file-header"><span>{title}</span>{caption} {browse}</div>' +
                    '<div class="kv-upload-progress kv-hidden"></div>' +
                    '<div class="clearfix"></div>'+
                    '{preview}',

        },

        previewMarkupTags: {
            tagBefore1:
            '<div class="file-preview-frame {frameClass}" id="{previewId}" data-fileindex="{fileindex}" data-template="{template}">' +
            '{footer}'+
            '<div class="kv-file-content image">',
            tagBefore2:
            '<div class="file-preview-frame {frameClass}" id="{previewId}" data-fileindex="{fileindex}" data-template="{template}" title="{caption}">'+
            '{footer}'+
            '<div class="kv-file-content image2">',
            tagAfter:
               ''
        },
        previewContentTemplates: {
           image:'<img src="{data}" class="file-preview-image kv-preview-data" title="{caption}" alt="{caption}">'
        },
        previewSettings: {
            image: {height: "100px", width:"auto"},
        },
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
            indicatorLoading: '<i class="fa fa-hourglass text-muted"></i>'
        },
        previewZoomButtonIcons: {
            prev: '<i class="fa fa-caret-left fa-lg"></i>',
            next: '<i class="fa fa-caret-right fa-lg"></i>',
            toggleheader: '<i class="fa fa-fw fa-arrows-v"></i>',
            fullscreen: '<i class="fa fa-fw fa-arrows-alt"></i>',
            borderless: '<i class="fa fa-fw fa-external-link"></i>',
            close: '<i class="fa fa-fw fa-remove"></i>'
        },
        previewFileIcon: '<i class="fa fa-file"></i>',
        browseIcon: '<i class="fa fa-paperclip"></i>',
        removeIcon: '<i class="fa fa-trash"></i>',
        cancelIcon: '<i class="fa fa-ban"></i>',
        uploadIcon: '<i class="fa fa-upload"></i>',
        msgValidationErrorIcon: '<i class="fa fa-exclamation-circle"></i> '
    };
})(window.jQuery);
