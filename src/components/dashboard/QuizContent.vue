<template>
    <div class="card">
        <div class="card-body">
            <button class="btn btn-outline-success border-0 text-mx-blue-green hover-mx-green" type="button" @click="toPage">
                <i class="fas fa-angle-left mr-2"></i>
                Back
            </button>
            <div class="d-flex my-4">
                <div class="text-mx-green">
                    <i class="fas fa-book icon-material icon"></i>
                </div>
                <div class="ml-4 w-100">
                    <label class="d-block title text-mx-green">{{ dataAssignment.title }}</label>
                    <label class="d-block sub">Due {{ dataAssignment.due }}</label>
                    <label class="d-block point">No Points</label>
                </div>
            </div>
            <hr>
            <div>
                <div class="info-title">
                    {{ dataAssignment.desc }}
                </div>
                <div class="mt-3">
                    <b-embed
                        type="iframe"
                        :src="dataAssignment.link"
                    ></b-embed>
                </div>
                <div class="my-3 text-center">
                    <button class="btn btn-info bg-mx-blue-green border-mx-blue-green rounded-pill">
                        Complete
                    </button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'QuizContent',
    props: {
        dataAssignment: {
            type: Object
        }
    },
    methods: {
        toPage() {
            const id  = this.$route.params.id
            this.$router.push({ name: 'DetailCourseDashboard', params: { id: id } })
        }
    }
}
</script>

<style scoped>
.card {
    border: 1px solid #D1D5DB;
    border-radius: 12px;
    font-size: 1em;
    padding: 0px 24px 10px 24px;
}
.icon {
    font-size: .9em;
}
.title {
    font-size: .8em;
    font-weight: 600;
}
.sub {
    color: #999898;
    font-size: .5em;
}
.point {
    font-size: .5em;
    font-weight: bolder;
}
hr {
    border: 2px solid #00AFB9;
}
.info-title {
    font-size: .6em;
}
.info-sub {
    font-size: .5em;
    margin-top: 1em;
}
</style>