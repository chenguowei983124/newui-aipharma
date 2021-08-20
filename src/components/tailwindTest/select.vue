<template>
    <div>
        <select>
            <option value="aa">asdfasdf</option>
            <option value="aa">sadfa</option>
            <option value="aa">asdfa</option>
            <option value="aa">asdfdfd</option>
            <option value="aa">asdfa</option>
            <option value="aa"></option>
        </select>
    </div>
    <br />
    <div class="text-2xl bg-red-300">CURSOR</div>
    <div class="cursor-auto">Hover over this text</div>
    <div class="cursor-default">Hover over this text</div>
    <div class="cursor-pointer ...">Hover me</div>
    <div class="cursor-wait ...">Hover me</div>
    <div class="cursor-text ...">Hover me</div>
    <div class="cursor-move ...">Hover me</div>
    <div class="cursor-not-allowed ...">Hover me</div>

    <br />
    <div class="text-2xl bg-red-300">outlines</div>
    <input type="text" placeholder="Default focus style" class="..." />

    <input
        type="text"
        placeholder="Custom focus style"
        class="focus:outline-none focus:ring focus:border-blue-300 ..."
    />
    <button class="focus:outline-black mr-4 ...">Button A</button>
    <button class="focus:outline-white ...">Button B</button>

    <br />
    <div class="text-2xl bg-red-300">Pointer Events</div>
    <div class="relative">
        <select class="...">
            <option>Indiana</option>
            <option>Michigan</option>
            <option>Ohio</option>
        </select>
        <div class="pointer-events-auto ...">
            <svg
                class="fill-current h-4 w-4"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
            >
                <path
                    d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"
                ></path>
            </svg>
        </div>
    </div>

    <div class="relative">
        <select class="...">
            <option>Indiana</option>
            <option>Michigan</option>
            <option>Ohio</option>
        </select>
        <div class="pointer-events-none ...">
            <svg
                class="fill-current h-4 w-4"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
            >
                <path
                    d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"
                ></path>
            </svg>
        </div>
    </div>
    <br />
    <div class="text-2xl bg-red-300">Resize</div>

    <textarea class="resize border rounded-md bg-yellow-400">
自由調整大小</textarea
    >
    <textarea class="resize-y border rounded-md bg-yellow-400">
上下調整</textarea
    >
    <textarea class="resize-x border rounded-md bg-yellow-400">
左右調整</textarea
    >
    <br />
    <div class="text-2xl bg-red-300">User Select</div>
    <div class="select-none ...">This text is not selectable</div>
    <div class="select-text ...">This text is selectable</div>
    <div class="select-all ...">
        Click anywhere in this text to select it all
    </div>
    <div class="select-auto ...">This text is selectable</div>

    <br />
    <div class="text-2xl bg-red-300">User Select</div>
    <svg class="fill-current text-green-600 ...">sdfa</svg>
    <svg class="stroke-current text-purple-600 ..."></svg>
    <svg class="stroke-current stroke-1 text-green-600 ..."></svg>
    <svg class="stroke-current stroke-2 text-green-600 ..."></svg>

    <br />
    <div class="text-2xl bg-red-300">Screen Readers</div>
    <a href="#">
        <svg><!-- ... --></svg>
        <span class="sr-only">Settings</span>
    </a>

    <br />
    <div class="text-2xl bg-red-300">FILTERS</div>
</template>

