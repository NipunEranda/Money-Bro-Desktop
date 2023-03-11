<template>
    <div class="main">
        <img class="main-logo center" src="../assets/icon.png" />
        <h1 class="main-title">Welcome To MoneyBro</h1>
        <button class="btn btn-sm btn-primary mt-3" @click="goToInit()">Get Started</button>
    </div>
</template>

<script>

import * as fs from '@tauri-apps/api/fs';
import * as tauriPath from '@tauri-apps/api/path';
import * as shell from '@tauri-apps/api/shell';
import { invoke } from '@tauri-apps/api/tauri';
import { notify } from '../utils';

export default {
    data() {
        return {}
    },
    methods: {
        goToInit: async function () {
            this.$router.push('/init');
            await this.createFile();
        },
        createFile: async function () {
            // https://tauri.app/v1/api/js/modules/fs
            const appObj = {
                createdOn: (new Date().toLocaleString())
            };

            const filePath = `${await tauriPath.documentDir()}MoneyBro\\config.json`;
            fs.readTextFile(filePath).then((data) => {
                console.log('file exists');
            }).catch(async e => {
                if (e.includes('os error 3')) {
                    await fs.createDir('MoneyBro', { dir: fs.BaseDirectory.Document, recursive: true })
                    await fs.writeTextFile('MoneyBro\\config.json', JSON.stringify(appObj, 2, null), { dir: fs.BaseDirectory.Document });
                    notify('User Data', 'User data store is located in Documents/MoneyBro');
                } else {
                    notify('Something went wrong', e);
                }
            })

            console.log(await fs.readTextFile(filePath));
        }
    }
};


</script>

<style scoped>
.main-logo {
    width: 150px;
}

.btn {
    margin: auto;
    padding: 5px 20px 5px 20px;
}
</style>