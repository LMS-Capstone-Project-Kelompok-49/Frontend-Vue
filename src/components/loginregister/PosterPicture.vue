<template>
  <div>
		<div v-if="type === 'register'">
			<b-img rounded center class="img-poster" alt="Rounded image" src="../../assets/images/loginregisterposter.png"></b-img>
		</div>
		<div v-if="type === 'login'">
			<b-img rounded center class="img-poster" alt="Rounded image" src="https://images.unsplash.com/photo-1621361365424-06f0e1eb5c49?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80"></b-img>
		</div>
  </div>
</template>

<script>
export default {
	name: 'SidePoster',
	props: {
		type: String
	}
}
</script>

<style scoped>
.img-poster {
  height: 88vh;
}
</style>