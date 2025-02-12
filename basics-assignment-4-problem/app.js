const app = Vue.createApp({

    data() {
        return {
            loggedInUser: '',
            isToggled: true,
            userColor: 'grey'
        }

    },

    computed: {
        paragraphClasses() {
            return {
                user1: this.loggedInUser === 'user1',
                user2: this.loggedInUser === 'user2',
                visible: this.isToggled,
                hidden: !this.isToggled
            }
        }
    },

    methods: {
        toggleButton() {
            console.log("button pressed")
            this.isToggled = !this.isToggled;
        }
    }
});


app.mount("#assignment")