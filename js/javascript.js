function vuestart() {
    Vue.createApp({
        data() {
            return {
                inl: 'https://cdn.jsdelivr.net/gh/ZogeMung/My-Works/works/',
                outl: '.mp3',
                items: [{
                        title: '漂亮话',
                        filename: '漂亮话'
                    },
                    {
                        artist: '程响',
                        title: '时光洪流',
                        filename: '时光洪流'
                    },
                    {
                        artist: '袁莉媛',
                        title: '虹',
                        filename: '虹'
                    },
                    {
                        artist: '次瓜锦鲤',
                        title: '领航员',
                        filename: '领航员'
                    },
                    {
                        artist: '初月',
                        title: '痴心者',
                        filename: '痴心者'
                    },
                    {
                        artist: '于洛萱',
                        title: '躲藏',
                        filename: '躲藏'
                    },
                    {
                        artist: 'Brian CeeFH',
                        title: 'Never Let You Go',
                        filename: 'NeverLetYouGo'
                    },
                    {
                        artist: '小猛',
                        title: '冬日里的一棵树',
                        filename: '冬日里的一棵树'
                    },
                    {
                        artist: 'joysaaaa',
                        title: '时间缝隙',
                        filename: '时间缝隙'
                    },
                    {
                        artist: 'OM BAND',
                        title: '那么奇怪（马蒂尼）',
                        filename: '那么奇怪'
                    },
                    {
                        artist: '曹轩宾',
                        title: '你不在北京',
                        filename: '你不在北京'
                    },
                    {
                        artist: '杨斯壬',
                        title: '醒',
                        filename: '醒'
                    },
                    {
                        artist: '银临',
                        title: '何须问',
                        filename: '何须问'
                    }
                ]
            }
        },
        methods: ({
            pauseOther(index) {
                var audios = document.getElementsByTagName("audio");
                for (let i = 0; i < audios.length; i++) {
                    i !== index && audios[i].pause();
                }
            }
        })
    }).mount('#files')
}