<template>
    <div class="card-wrapper my-4">
        <div class="d-flex justify-content-around list-card">
            <div>
                <b-avatar src="https://placekitten.com/300/300"></b-avatar>
                Hamidillah Ajie, S...
            </div>
            <div>
                Hamidillah Ajie@gmail.co.id
            </div>
            <div>
                {{ role }}
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'CardMember',
    props: {
        role: String
    }
}
</script>

<style scoped>
.list-card div {
    margin: auto;
}
</style>