let app = Vue.createApp({
    data() {
        return {
            count: 0
        }
    }, methods: {
        addCount(value) {
            this.count += value;
        }
    }, watch: {
        result() {
            setTimeout(() => {this.count = 0;}, 5000);
        }
    },
    computed: {
        result() {
            console.log(this.count);
            if (this.count > 37) {
                return 'Too much!';
            } else if (this.count < 37) {
                return 'Not there yet';
            } else {
                return 37;
            }
        }
    }
})

app.mount('#assignment')