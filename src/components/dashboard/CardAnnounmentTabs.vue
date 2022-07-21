<template>
    <div class="card border-0 my-4 p-1" @click="toPage('DetailAssignmentDashboard', courseid ,assignment.id)">
        <div class="card-body p-0">
            <div class="d-flex justify-content-around list-card">
                <div>
                    <i class="fas fa-list-alt text-mx-green" v-if="assignment.type === 1"></i>
                    <i class="fas fa-list-alt text-danger" v-if="assignment.type === 2"></i>
                </div>
                <div>
                    <span class="d-block title">
                        {{ assignment.title.substring(0,25)+".." }}
                    </span>
                    <span class="sub">
                        {{ assignment.due }}
                    </span>
                </div>
                <div>
                    <i class="fas fa-chevron-right"></i>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'CardAnnounment',
    props: {
        assignment: {
            type: Object
        },
        courseid: {
            type: Number
        }
    },
    methods: {
        toPage (routeName, idCourse ,assignmentId) {
            this.$router.push({ name: routeName, params: { id: idCourse, code: assignmentId } })
        }
    },
}
</script>

<style scoped>
.card:hover {
    background-color: #e2e2e2;
    color: black;
}
* {
    font-size: 16px;
}
.list-card div {
    margin: auto;
}
.sub {
    font-size: 12px;
    color: #999898;
}
</style>