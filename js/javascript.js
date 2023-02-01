function vuestart() {
    Vue.createApp({
        data() {
            return {
                inl: 'https://cdn.jsdelivr.net/gh/ZogeMung/My-Works/works/',
                outl: '.mp3',
                items: [{
                        artist: '皮特/半生瓜',
                        title: '盛世',
                        filename: '盛世.mp3'
                    },
                    {
                        artist: '魔动闪霸',
                        title: '魔毯',
                        filename: '魔毯.mp3'
                    },
                    {
                        title: '孤勇者·改',
                        filename: '孤勇者.mp3'
                    },
                    {
                        artist: 'Bryce Drew',
                        title: 'Lucky Number',
                        filename: 'Lucky Number.mp3'
                    },
                    {
                        artist: 'BLACK 0/Futo./CEM Records',
                        title: '滇人菇事',
                        filename: '滇人菇事.mp3'
                    },
                    {
                        artist: 'CAC阿卡贝拉人生社团',
                        title: '啊！',
                        filename: '啊！.mp3'
                    },
                    {
                        artist: '马梓皓',
                        title: '好好抱你',
                        filename: '好好抱你'
                    },
                    {
                        artist: '鲸鱼马戏团',
                        title: '鳗鱼饭之味',
                        filename: '鳗鱼饭之味'
                    },
                    {
                        artist: '苟亮',
                        title: '那时候',
                        filename: '那时候'
                    },
                    {
                        artist: '孟楠',
                        title: '痒2018',
                        filename: '痒2018'
                    },
                    {
                        artist: '姚贝娜',
                        title: '光',
                        filename: '光'
                    },
                    {
                        artist: '讲究制噪/DJ Baker/CRAT',
                        title: '福禄寿禧',
                        filename: '福禄寿禧'
                    },
                    {
                        artist: '爱朵女孩',
                        title: '爱情爱情',
                        filename: '爱情爱情'
                    },
                    {
                        artist: '朴树',
                        title: '清白之年',
                        filename: '清白之年'
                    },
                    {
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
                        title: '马蒂尼',
                        filename: '马蒂尼'
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