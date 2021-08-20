<template>
    <div class="max-w-4xl border-2 mr-auto">
        <div class="flex justify-around border-b-2 bg-blue-200">
            <p class="w-1/4">ID</p>
            <p class="w-1/4">Name</p>
            <p class="w-1/4">Name</p>
            <p class="w-1/4">Name</p>
        </div>

        <div>
            <vTableRow
                v-for="todo of this.INFO.data"
                :key="todo.id"
                :row_data="todo"
            />
        </div>
        class="max-w-4xl border-2 mr-auto"
    </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
import { useStore } from 'vuex'
import vTableRow from './table-row.vue'

const store = useStore();

export default {
  name: 'app',
  data() {
    return {
      todos: [],

    };
  },
  props: {
    todos: []
  }

  ,
  components: {
    vTableRow,
  },
  computed: {

    ...mapGetters([
      'INFO',
      'NAME'
    ]),
  },
  methods: {
    ...mapActions([
      'GET_TOP_INFO'
    ])
  },
  mounted() {
    this.GET_TOP_INFO(this.NAME)
  }
}
</script>

