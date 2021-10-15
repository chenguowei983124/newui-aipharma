<template>
    <div class="grid grid-cols-7 gap-y-0.5 my-1">
        <transition-group
            enter-from-class="opacity-0"
            enter-to-class="opacity-100"
            enter-active-class="transition-opacity ease-out duration-300"
            leave-active-class="transition-opacity ease-in duration-200"
            leave-from-class="opacity-100"
            leave-to-class="opacity-0"
        >
            <div
                v-for="(date, keyDate) in calendar.date()"
                :key="keyDate"
                class="relative"
                :class="{ 'litepie-tooltip': asRange && date.duration() }"
                :data-tooltip="`${date.duration()}`"
            >
                <transition
                    enter-from-class="opacity-0"
                    enter-to-class="opacity-100"
                    enter-active-class="transition-opacity ease-out duration-200"
                    leave-active-class="transition-opacity ease-in duration-150"
                    leave-from-class="opacity-100"
                    leave-to-class="opacity-0"
                >
                    <span
                        v-if="isBetweenRange(date) || date.hovered()"
                        class="
                            absolute
                            bg-test-Range-Mid bg-opacity-60
                            dark:bg-litepie-secondary-700 dark:bg-opacity-50
                        "
                        :class="betweenRangeClasses(date)"
                    ></span>
                </transition>
                <button
                    type="button"
                    class="
                        litepie-datepicker-date
                        relative
                        w-12
                        h-12
                        lg:w-10
                        lg:h-10
                        flex
                        justify-center
                        items-center
                        text-xs
                        2xl:text-sm
                        focus:outline-none
                    "
                    :class="[
                        datepickerClasses(date),
                        asRange ? 'transition-all' : 'transition-colors',
                    ]"
                    :disabled="date.disabled || date.inRange()"
                    @click="$emit('update:date', date, asPrevOrNext)"
                    @mouseenter="atMouseOver(date)"
                    @focusin="atMouseOver(date)"
                    v-text="date.date()"
                    :data-date="date.toDate()"
                ></button>
            </div>
        </transition-group>
    </div>
</template>

<script>
import { defineComponent, inject } from 'vue';

export default defineComponent({
  name: 'LitepieCalendar',
  props: {
    asPrevOrNext: Boolean,
    calendar: Object,
    weeks: Array,
    asRange: Boolean
  },
  inheritAttrs: false,
  emits: ['update:date'],
  setup() {
    const isBetweenRange = inject('isBetweenRange');
    const betweenRangeClasses = inject('betweenRangeClasses');
    const datepickerClasses = inject('datepickerClasses');
    const atMouseOver = inject('atMouseOver');

    return {
      isBetweenRange,
      betweenRangeClasses,
      datepickerClasses,
      atMouseOver
    };
  }
});
</script>
