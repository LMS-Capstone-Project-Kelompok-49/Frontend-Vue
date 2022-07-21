<template>
    <div class="assignment mt-2">
        <div class="d-flex justify-content-around">
            <div class="assignment-dot">
                <button class="btn btn-info rounded" type="button" v-if="assignment.type === 1"></button>
                <button class="btn btn-danger rounded" type="button" v-if="assignment.type === 2"></button>
            </div>
            <div class="assignment-text">
                <label>{{ course.title }}</label>
            </div>
            <div class="assignment-text">
                <label>{{ assignment.title.substring(0,25)+".." }}</label>
            </div>
            <div class="assignment-text">
                <label class="text-muted">Due {{ assignment.due }}</label>
            </div>
            <div class="assignment-dot">
                <button type="button" class="btn btn-info rounded-pill" @click="toPage('DetailAssignmentAdmin', course.id ,assignment.id)">Add Task</button>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'MyAssignmentAdmin',
    props: {
        assignment: {
            type: Object
        },
        course: {
            type: Object
        },
    },
    methods: {
        toPage (routeName, idCourse ,assignmentId) {
            this.$router.push({ name: routeName, params: { id: idCourse, code: assignmentId } })
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