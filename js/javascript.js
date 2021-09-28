function vuestart() {
    Vue.createApp({
        data() {
            return {
                inl: 'https://raw.staticdn.net/ZogeMung/My-Works/master/works/',
                outl: '.mp3',
                items: [
                    {
                        title: '痴心者',
                        filename: '痴心者'
                    },
                    {
                        title: '躲藏',
                        filename: '躲藏'
                    },
                    {
                        title: 'Never Let You Go',
                        filename: 'NeverLetYouGo'
                    },
                    {
                        title: '冬日里的一棵树',
                        filename: '冬日里的一棵树'
                    },
                    {
                        title: '时间缝隙',
                        filename: '时间缝隙'
                    },
                    {
                        title: '那么奇怪（马蒂尼）',
                        filename: '那么奇怪'
                    },
                    {
                        title: '你不在北京',
                        filename: '你不在北京'
                    },
                    {
                        title: '醒',
                        filename: '醒'
                    },
                    {
                        title: '何须问',
                        filename: '何须问'
                    }
                ]
            }
        }
    }).mount('#files')
}