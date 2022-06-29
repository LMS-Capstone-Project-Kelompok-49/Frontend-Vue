<template>
    <div>
        <div class="card p-0">
            <div class="card-body">
                <div class="title">
                    My Assigment
                </div>
                <div class="form-wrapper my-3">
                    <b-form-file
                    placeholder="Upload your Assigment"
                    drop-placeholder="Drop file here..."
                    ></b-form-file>
                </div>
            </div>
        </div>
        <div class="mt-3">
            <button class="btn btn-info bg-mx-blue-green border-mx-green btn-block">
                Submit
            </button>
        </div>
    </div>
</template>

<script>
export default {
    name: 'AssignmentForm',
}
</script>

<style scoped>
.card {
    border: 1px solid #D1D5DB;
    border-radius: 12px;
    padding: 0px 24px 10px 24px;
}
.title {
    font-size: .8em !important;
    font-weight: 600;
}
.form-wrapper {
    font-size: .5em;
}
</style>