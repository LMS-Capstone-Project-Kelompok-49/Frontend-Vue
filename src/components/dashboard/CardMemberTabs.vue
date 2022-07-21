<template>
    <div class="card-wrapper my-4">
        <div class="d-flex justify-content-around list-card">
            <div>
                <b-avatar :src="member.image"></b-avatar>
                {{ member.name }}
            </div>
            <div>
                {{ member.email }}
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
        member: {
            type: Object
        },
        role: {
            type: String
        }
    }
}
</script>

<style scoped>
.list-card div {
    margin: auto;
}
</style>