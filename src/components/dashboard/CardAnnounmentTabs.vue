<template>
    <div class="card border-0 my-4 p-1" @click="toPage('DetailAssignmentDashboard')">
        <div class="card-body p-0">
            <div class="d-flex justify-content-around list-card">
                <div>
                    <i class="fas fa-list-alt text-danger"></i>
                </div>
                <div>
                    <span class="d-block title">
                        Assignment Pertemuan 15
                    </span>
                    <span class="sub">
                        Mei 03, 2022
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
    methods: {
        toPage (routeName) {
            this.$router.push({ name: routeName, params: { id: 1, code: 1 } })
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