<template>
  <h2>My Friends</h2>
  <ul>
    <friend-contact v-for="friend in friends" :key="friend.id" :name="friend.name" :email-address="friend.email"
                    :phone-number="friend.phone"></friend-contact>
  </ul>
</template>

<script>

const app = {
  data() {
    return {
      friends: [{
        id: 'manuel',
        name: 'Manuel Lorenz',
        phone: '01234 5678 991',
        email: 'abc@gmail.com'
      }, {
        id: 'julie',
        name: 'Julie Jones',
        phone: '09876 543 221',
        email: 'abc@hotmail.com'
      }]
    }
  }
}

export default app;
</script>


