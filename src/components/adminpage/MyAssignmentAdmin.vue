<template>
    <div class="assignment mt-2">
        <div class="d-flex justify-content-around">
            <div class="assignment-dot">
                <button class="btn btn-info rounded" type="button"></button>
            </div>
            <div class="assignment-text">
                <label>Pemrograman Web</label><br>
                <label class="text-muted">Task 1</label>
            </div>
            <div class="assignment-text">
                <label>Quiz Pemahaman Lara...</label><br>
                <label class="text-muted">Laravel</label>
            </div>
            <div class="assignment-text">
                <label>23:59 PM</label><br>
                <label class="text-muted">Due April 21, 2022</label>
            </div>
            <div class="assignment-dot">
                <button type="button" class="btn btn-info rounded-pill" @click="toPage('DetailAssignmentAdmin')">Add Task</button>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'MyAssignmentAdmin',
    methods: {
        toPage (routeName) {
            this.$router.push({ name: routeName, params: { id: 1, code: 2 } })
        }
    },
}
</script>

<style scoped>
.assignment {
    border: 1px solid #D1D5DB;
    padding: 0.5em;
    border-radius: 12px;
    font-size: .6em;
}
.assignment-text {
    line-height: 1em;
    margin: 15px;
}
.assignment-dot {
    margin: auto 0;
}
</style>