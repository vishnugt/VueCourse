const app = Vue.createApp({
    data: function () {
        return {
            userInput: '',
            userInput2: ''
        }
    },
    methods: {
        showAlert: function () {
            alert("Clicked");
            return;
        },
        updateUserInput: function (event) {
            this.userInput = event.target.value;
        },
        updateUserInput2: function (event) {
            this.userInput2 = event.target.value;
        }
    }

});

app.mount("#assignment")