<template>
    <!-- <editor
        id="tinymceEdit"
        apiKey="ind0pdowxct8hg67fjegdeutxwj8dpswmpzrw8yeo0pgokae"
        :init="tinymce_init"
    >
    </editor> -->
    <!-- <editor
        api-key="wymbw7u3lecjz7f30u9h8j0b174d0zrusk9f2j7ey9eu3xlz"
        initialValue="<p>Initial editor content</p>"
        v-model="data"
        :init="{
            selector: 'textarea#drive-demo',
            // plugins: 'image media link tinydrive code imagetools',
            height: 200,
            menubar: false,
            plugins:
                'print preview powerpaste casechange importcss tinydrive searchreplace autolink autosave save directionality advcode visualblocks visualchars fullscreen image link media mediaembed template codesample table charmap hr pagebreak nonbreaking anchor toc insertdatetime advlist lists checklist wordcount tinymcespellchecker a11ychecker imagetools textpattern noneditable help formatpainter permanentpen pageembed charmap  mentions quickbars linkchecker emoticons advtable export',
            toolbar:
                'undo redo | bold italic underline strikethrough | fontselect fontsizeselect formatselect | alignleft aligncenter alignright alignjustify | outdent indent |  numlist bullist checklist | forecolor backcolor casechange permanentpen formatpainter removeformat | pagebreak | charmap emoticons | fullscreen  preview save print | insertfile image table media pageembed template link anchor codesample | a11ycheck ltr rtl | showcomments addcomment',
            //tinydrive_token_provider: 'http://localhost:8002/jwt',
            images_upload_handler: images_upload_handler,
        }"
    /> -->
    <editor
        api-key="qph8nbd0u6yvubz8os1ghqw2txzvs1uq3qng582s4w0t63vp"
        initialValue="<p>Initial editor content</p>"
        v-model="data"
        :init="{
            selector: 'textarea#drive-demo',
            // plugins: 'image media link tinydrive code imagetools',
            height: 200,
            menubar: false,
            statusbar: false,
            //content_style: `p{line-height: 1;} body {font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;line-height: 1.0; margin: 1rem;}`,
            //content_css: '/mycontent.css',
            plugins:
                'print preview powerpaste casechange importcss tinydrive searchreplace autolink autosave save directionality advcode visualblocks visualchars fullscreen image link media mediaembed template codesample table charmap hr pagebreak nonbreaking anchor toc insertdatetime advlist lists checklist wordcount tinymcespellchecker a11ychecker imagetools textpattern noneditable help formatpainter permanentpen pageembed charmap  mentions quickbars linkchecker emoticons advtable export',
            toolbar:
                'myButton | undo redo | bold italic underline strikethrough | fontselect fontsizeselect formatselect | alignleft aligncenter alignright alignjustify | outdent indent |  numlist bullist checklist | forecolor backcolor casechange permanentpen formatpainter removeformat | pagebreak | charmap emoticons | fullscreen  preview save print | insertfile image table media pageembed template link anchor codesample | a11ycheck ltr rtl | showcomments addcomment',
            //tinydrive_token_provider: 'http://localhost:8002/jwt',
            images_upload_handler: images_upload_handler,
        }"
    />
    <!-- <div class="border-r-2 border-l-2 border-b-2 h-8 flex justify-end">
        <button class="bg-green-500 rounded">
            <send-message-icon-svg></send-message-icon-svg>
        </button>
    </div> -->
</template>

<script>
import Editor from '@tinymce/tinymce-vue'
import SendMessageIconSvg from '../common/svgImage/sendMessageIconSvg.vue'
const UPLOAD_URL = 'http://localhost:8002/upload'

export default {
    name: 'tinymceEdit',
    components: {
        editor: Editor,
        SendMessageIconSvg,
    },
    data() {
        return {
            tinymce_init: {
                selector: 'textarea#custom-toolbar-button',
                toolbar: 'customInsertButton customDateButton',
                setup: function (editor) {
                    editor.ui.registry.addButton('customInsertButton', {
                        text: 'My Button',
                        onAction: function (_) {
                            editor.insertContent(
                                "&nbsp;<strong>It's my button!</strong>&nbsp;"
                            )
                        },
                    })

                    var toTimeHtml = function (date) {
                        return (
                            '<time datetime="' +
                            date.toString() +
                            '">' +
                            date.toDateString() +
                            '</time>'
                        )
                    }

                    editor.ui.registry.addButton('customDateButton', {
                        icon: 'insert-time',
                        tooltip: 'Insert Current Date',
                        disabled: true,
                        onAction: function (_) {
                            editor.insertContent(toTimeHtml(new Date()))
                        },
                        onSetup: function (buttonApi) {
                            var editorEventCallback = function (eventApi) {
                                buttonApi.setDisabled(
                                    eventApi.element.nodeName.toLowerCase() ===
                                        'time'
                                )
                            }
                            editor.on('NodeChange', editorEventCallback)

                            /* onSetup should always return the unbind handlers */
                            return function (buttonApi) {
                                editor.off('NodeChange', editorEventCallback)
                            }
                        },
                    })
                },
                content_style:
                    'body { font-family:Helvetica,Arial,sans-serif; font-size:14px }',
            },

            // tinymce_init: {
            //     menubar: false,
            //     branding: false,
            //     placeholder: '回答作成待ち',
            //     // resize: false,
            //     plugins: 'link image code',
            //     toolbar:
            //         'undo redo | formatselect | bold italic backcolor | link image | code',
            //     toolbar_mode: 'wrap',
            //     // image_list: [ ],
            //     // tinydrive_token_provider: "/jwt",
            //     images_upload_handler: function (
            //         blobInfo,
            //         success,
            //         failure
            //         // ,folderName
            //     ) {
            //         var xhr, formData
            //         xhr = new XMLHttpRequest()
            //         xhr.withCredentials = false
            //         xhr.open('POST', UPLOAD_URL)
            //         // var token = document.head.querySelector("[name=csrf-token]").content;
            //         // xhr.setRequestHeader("X-CSRF-Token", token);

            //         xhr.onload = function () {
            //             var json

            //             if (xhr.status != 200) {
            //                 failure('HTTP Error: ' + xhr.status)
            //                 return
            //             }
            //             json = JSON.parse(xhr.responseText)

            //             if (!json || typeof json.location != 'string') {
            //                 failure('Invalid JSON: ' + xhr.responseText)
            //                 return
            //             }
            //             success(json.location)
            //         }

            //         formData = new FormData()
            //         formData.append(
            //             'file',
            //             blobInfo.blob(),
            //             blobInfo.filename()
            //         )

            //         xhr.send(formData)
            //     },
            // },
        }
    },
}
</script>
<style></style>
