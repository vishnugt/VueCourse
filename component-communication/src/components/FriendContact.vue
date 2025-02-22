<script>
export default {
  //This also works
  /*  props: [
      'name',
      'phoneNumber',
      'emailAddress'
    ],*/
  props: {
    name: String,
    phoneNumber: {
      type: String,
      required: true
    },
    emailAddress: {
      type: String,
      required: false,
      default: function () {
        return "redacted@gmail.com"
      },
      validator: function (value) {
        console.log(value)
        return value.includes(".com")
      }
    }
  },
  data() {
    return {
      showDetails: false
    }
  },
  methods: {
    toggleDetails() {
      this.showDetails = !this.showDetails;
    }
  }
}
</script>

<template>
  <li>
    <h2>{{ name }}</h2>
    <button @click="toggleDetails"> {{ !showDetails ? "Show Details" : "Hide Details" }}</button>
    <ul v-if="showDetails">
      <li><strong>Phone:</strong> {{ phoneNumber }}</li>
      <li><strong>Email:</strong> {{ emailAddress }}</li>
    </ul>
  </li>
</template>

<style>

</style>