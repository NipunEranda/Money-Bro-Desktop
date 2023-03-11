<template>
    <div data-tauri-drag-region class="titlebar pointer">
        <span data-tauri-drag-region class="titlebarLabel">
            <img src="../assets/32x32.png" alt="" width="25">
        </span>
        <div class="titlebar-button" id="titlebar-minimize">
            <img alt="minimize" @click="windowMinimize()" />
        </div>
        <div class="titlebar-button" id="titlebar-maximize">
            <img alt="maximize" @click="windowMaximize()" />
        </div>
        <div class="titlebar-button" id="titlebar-close">
            <img alt="close" @click="windowClose()" />
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue'
import { appWindow } from '@tauri-apps/api/window';

function windowClose() {
    appWindow.close();
}

function windowMinimize() {
    appWindow.minimize();
}

function windowMaximize() {
    appWindow.toggleMaximize();
}

</script>

<style scoped>
.titlebar {
    height: 30px;
    background: #242424;
    color: #FFF;
    user-select: none;
    display: flex;
    justify-content: flex-end;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
}

.titlebar-button {
    display: inline-flex;
    justify-content: center;
    align-items: center;
    color: #ddd;
    width: 30px;
    height: 30px;
}

.titlebar-button img {
    width: 14px;
}

#titlebar-minimize img {
    content: url('/Buttons/min-normal.png');
}

#titlebar-minimize img:hover {
    content: url('/Buttons/min-hover.png');
}

#titlebar-maximize img {
    content: url('/Buttons/max-normal.png');
}

#titlebar-maximize img:hover {
    content: url('/Buttons/max-hover.png');
}

#titlebar-close img {
    content: url('/Buttons/close-normal.png');
}

#titlebar-close img:hover {
    content: url('/Buttons/close-hover.png');
}

.titlebar-button img:hover {
    cursor: pointer;
}

/* titlebarLabel: {
        display: 'inline',
        marginLeft: 5,
        // marginLeft: 46 * 2,  // for center labels
        lineHeight: '30px'
    }, */

.titlebarLabel {
    position: absolute;
    left: 5px;
}
</style>