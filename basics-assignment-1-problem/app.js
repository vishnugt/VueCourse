const app = Vue.createApp({
    data: function() {
        return {
            name: 'Vishnu',
            age: 30,
            imageUrl: 'https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png'
        }
    },
    methods: {
        generateRandomNumber: function() {
            return Math.random();
        },
        generateRandomText: function() {
            return this.name + " is " + this.age + " years old";
        }
    }
});

app.mount('#assignment');