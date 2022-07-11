<template>
    <div class="card">
        <div class="d-flex">
            <div class="m-2">
                <i class="fas fa-check-square"></i>
            </div>
            <div class="m-2">
                <div class="title">
                    <label class="h-title">Meeting Attendance</label>
                    <label class="s-title">Just Now</label>
                </div>
                <div class="subtitle">
                    <label>Your mentor send you a meeting attendance form. Let’s check it now.</label>
                </div>
            </div>

        </div>
    </div>
</template>

<script>
export default {
    name: 'NotificationListAdmin',
}
</script>

<style scoped>
.card {
    border: none;
}
.card i {
    font-size: .8em;
    color: #3FB550;
}
.card .title .h-title {
    font-size: .8em;
    width: 350px;
}
.card .title .s-title {
    font-size: .6em;
    color: #6B7280;
}
.card .subtitle {
    font-size: .6em;
    color: #6B7280;
}
</style>