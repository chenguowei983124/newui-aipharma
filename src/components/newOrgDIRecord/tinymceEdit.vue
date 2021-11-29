<template>
    <editor
        :api-key="$constant.APIKEY"
        initialValue="<p>Initial editor content</p>"
        aria-readonly="true"
        :init="{
            selector: 'textarea#drive-demo',
            height: 200,
            readonly: true,
            menubar: false,
            statusbar: false,
            plugins:
                'print preview powerpaste casechange importcss tinydrive searchreplace autolink autosave save directionality advcode visualblocks visualchars fullscreen image link media mediaembed template codesample table charmap hr pagebreak nonbreaking anchor toc insertdatetime advlist lists checklist wordcount tinymcespellchecker a11ychecker imagetools textpattern noneditable help formatpainter permanentpen pageembed charmap  mentions quickbars linkchecker emoticons advtable export',
            toolbar:
                ' undo redo | bold italic underline strikethrough | fontsizeselect forecolor removeformat | alignleft aligncenter alignright alignjustify |  numlist bullist | image table link | fullscreen  preview pagebreak ',
        }"
    />
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
}
</script>
<style></style>
