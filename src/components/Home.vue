<template>
    <router-link class="mr-4" to="/fonts">fonts</router-link>
    <router-link class="mr-4" to="/select">select</router-link>
    <router-link class="mr-4" to="/filters">FILTERS</router-link>
    <router-link class="mr-4" to="/Borders">Borders</router-link>
    <router-link class="mr-4" to="/pm">pm</router-link>

    <h1 class="font-extrabold text-3xl mb-6">Home</h1>
    <p class="mb-6">Name in store is : {{ name }}</p>
    <div class="max-w-2xl flex">
        <div class="pr-7">1</div>
        <div>2</div>
        <div>3</div>
    </div>
    <input v-model="newName" type="text" class="p-2 mr-4 border rounded" />

    <button @click="saveName" class="p-2 text-white bg-indigo-600 rounded">
        Submit
    </button>
</template>

<script setup>
import { computed, ref } from 'vue'
import { useStore } from 'vuex'
import { useRouter } from 'vue-router'
import myHeader from './myHeader.vue'

const store = useStore()
const router = useRouter()

const name = computed(() => {
  return store.state.user.name
})

const newName = ref('')

function saveName() {
  store.dispatch('saveName', newName.value)
  newName.value = ''
  router.push('/vTable')
}


</script>
<style scoped>
</style>
