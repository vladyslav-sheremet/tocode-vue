console.log(Vue)

const app = {
    data() {
        return {
            title: 'VTwitter',
            item: '',
            items: [
                {
                    id: 1,
                    avatar: 'https://avatars.dicebear.com/api/male/1.svg',
                    body: 'hello vue 3',
                    date: new Date(Date.now()).toLocaleString()
                },
                {
                    id: 2,
                    avatar: 'https://avatars.dicebear.com/api/male/2.svg',
                    body: 'hello react 18',
                    date: new Date(Date.now()).toLocaleString()
                }
            ]
        }
    },
    methods: {
        onSubmit() {
            this.items.push({
                id: Math.round(Math.random() * 30),
                avatar: `https://avatars.dicebear.com/api/male/${Date.now()}.svg`,
                body: this.item,
                date: new Date(Date.now()).toLocaleString()
            })
            //reset
            this.item = ''
        }
    }
}

Vue.createApp(app).mount('#app')