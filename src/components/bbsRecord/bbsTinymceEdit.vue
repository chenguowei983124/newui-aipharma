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
        api-key="wymbw7u3lecjz7f30u9h8j0b174d0zrusk9f2j7ey9eu3xlz"
        initialValue="<p>Initial editor content</p>"
        v-model="sdfasdfsadf"
        :init="{
            selector: 'textarea#drive-demo',
            // plugins: 'image media link tinydrive code imagetools',
            height: 200,
            menubar: false,
            statusbar: true,
            content_css: 'dark',
            plugins:
                'print preview powerpaste casechange importcss tinydrive searchreplace autolink autosave save directionality advcode visualblocks visualchars fullscreen image link media mediaembed template codesample table charmap hr pagebreak nonbreaking anchor toc insertdatetime advlist lists checklist wordcount tinymcespellchecker a11ychecker imagetools textpattern noneditable help formatpainter permanentpen pageembed charmap  mentions quickbars linkchecker emoticons advtable export',
            toolbar:
                'myButton | undo redo | bold italic underline strikethrough | fontselect fontsizeselect formatselect | alignleft aligncenter alignright alignjustify | outdent indent |  numlist bullist checklist | forecolor backcolor casechange permanentpen formatpainter removeformat | pagebreak | charmap emoticons | fullscreen  preview save print | insertfile image table media pageembed template link anchor codesample | a11ycheck ltr rtl | showcomments addcomment',
            //tinydrive_token_provider: 'http://localhost:8002/jwt',
            images_upload_handler: images_upload_handler,
        }"
    />
</template>

<script>
import Editor from '@tinymce/tinymce-vue'
const UPLOAD_URL = 'http://localhost:8002/upload'

export default {
    name: 'tinymceEdit',
    components: {
        editor: Editor,
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

<style scoped>
/* .body {
    line-height: 2px;
}
div.card h1,
.tox div.card h1 {
    font-size: 14px;
    font-weight: bold;
    margin: 0 0 8px;
    padding: 0;
    line-height: 2px;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto,
        Oxygen-Sans, Ubuntu, Cantarell, 'Helvetica Neue', sans-serif;
} */
/* textarea#mentions {
    height: 350px;
}

div.card,
.tox div.card {
    width: 240px;
    background: white;
    border: 1px solid #ccc;
    border-radius: 3px;
    box-shadow: 0 4px 8px 0 rgba(34, 47, 62, 0.1);
    padding: 8px;
    font-size: 14px;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto,
        Oxygen-Sans, Ubuntu, Cantarell, 'Helvetica Neue', sans-serif;
}

div.card::after,
.tox div.card::after {
    content: '';
    clear: both;
    display: table;
}

div.card h1,
.tox div.card h1 {
    font-size: 14px;
    font-weight: bold;
    margin: 0 0 8px;
    padding: 0;
    line-height: normal;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto,
        Oxygen-Sans, Ubuntu, Cantarell, 'Helvetica Neue', sans-serif;
}

div.card p,
.tox div.card p {
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto,
        Oxygen-Sans, Ubuntu, Cantarell, 'Helvetica Neue', sans-serif;
}

div.card img.avatar,
.tox div.card img.avatar {
    width: 48px;
    height: 48px;
    margin-right: 8px;
    float: left;
} */
</style>
