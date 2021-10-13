<template>
  <editor 
    id="tinymceEdit"
    apiKey="ind0pdowxct8hg67fjegdeutxwj8dpswmpzrw8yeo0pgokae"
    :init="tinymce_init"
  >
  </editor>
</template>

<script>
import Editor from '@tinymce/tinymce-vue'
const UPLOAD_URL = 'http://localhost:8002/upload'

export default {
  name: 'tinymceEdit',
  components: {
    editor: Editor
  },
  data () {
    return {
      tinymce_init: {
        height: 200,
        menubar: false,
        branding: false,
        placeholder:'回答作成待ち',
        // resize: false,
        plugins: "link image code",
        toolbar:
          "undo redo | formatselect | bold italic backcolor | link image | code",
        // image_list: [ ],
        // tinydrive_token_provider: "/jwt",
        images_upload_handler: 
          function (
            blobInfo
            , success
            , failure
            // ,folderName
          ) {
              var xhr, formData;
              xhr = new XMLHttpRequest();
              xhr.withCredentials = false;
              xhr.open('POST', UPLOAD_URL);
              // var token = document.head.querySelector("[name=csrf-token]").content;
              // xhr.setRequestHeader("X-CSRF-Token", token);
            
              xhr.onload = function() {
                  var json;
                
                  if (xhr.status != 200) {
                      failure('HTTP Error: ' + xhr.status);
                      return;
                  }
                  json = JSON.parse(xhr.responseText);

                  if (!json || typeof json.location != 'string') {
                      failure('Invalid JSON: ' + xhr.responseText);
                      return;
                  }
                  success(json.location);
                
              };
            
              formData = new FormData();
              formData.append('file', blobInfo.blob(), blobInfo.filename());
        
              xhr.send(formData);
              
          },
      }
    }
  },
}
</script>
<style>
</style>
