<template>
    <!-- <editor 
    id="tinymceEdit"
    apiKey="ind0pdowxct8hg67fjegdeutxwj8dpswmpzrw8yeo0pgokae"
    :init="tinymce_init"
  >
  </editor> -->
    <editor
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
                menubar: false,
                branding: false,
                placeholder: '回答作成待ち',
                // resize: false,
                plugins: 'link image code',
                toolbar:
                    'undo redo | formatselect | bold italic backcolor | link image | code',
                toolbar_mode: 'wrap',
                // image_list: [ ],
                // tinydrive_token_provider: "/jwt",
                images_upload_handler: function (
                    blobInfo,
                    success,
                    failure
                    // ,folderName
                ) {
                    var xhr, formData
                    xhr = new XMLHttpRequest()
                    xhr.withCredentials = false
                    xhr.open('POST', UPLOAD_URL)
                    // var token = document.head.querySelector("[name=csrf-token]").content;
                    // xhr.setRequestHeader("X-CSRF-Token", token);

                    xhr.onload = function () {
                        var json

                        if (xhr.status != 200) {
                            failure('HTTP Error: ' + xhr.status)
                            return
                        }
                        json = JSON.parse(xhr.responseText)

                        if (!json || typeof json.location != 'string') {
                            failure('Invalid JSON: ' + xhr.responseText)
                            return
                        }
                        success(json.location)
                    }

                    formData = new FormData()
                    formData.append(
                        'file',
                        blobInfo.blob(),
                        blobInfo.filename()
                    )

                    xhr.send(formData)
                },
            },
        }
    },
}
</script>
<style></style>
