<template>
    <div data-tauri-drag-region class="titlebar">
        <div class="titlebar-button" id="titlebar-minimize" @click="windowMinimize()">
            <img alt="minimize" />
        </div>
        <div class="titlebar-button" id="titlebar-maximize" @click="windowMaximize()">
            <img alt="maximize" />
        </div>
        <div class="titlebar-button" id="titlebar-close" @click="windowClose()">
            <img alt="close" />
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue'
import { appWindow } from '@tauri-apps/api/window';

function windowClose(){
    appWindow.close();
}

function windowMinimize(){
    appWindow.minimize();
}

function windowMaximize(){
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
    width: 15px;
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
</style>