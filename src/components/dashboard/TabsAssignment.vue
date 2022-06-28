<template>
    <div class="container my-4">
        <div class="card" @click="toPage('DetailAssignmentDashboard')">
            <div class="card-body">
                <div class="d-flex justify-content-around list-card">
                    <div class="text-mx-green">
                        <i class="fas fa-list-ul"></i>  
                    </div>
                    <div>
                        Tugas UI & UX Mobile App
                    </div>
                    <div>
                        <span class="d-block">11:59 PM</span>
                        <span class="text-mx-green">Due April 21, 2022</span>
                    </div>
                    <div>
                        <span class="text-primary">Need Submit</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'TabsAssignment',
    methods: {
        toPage (routeName) {
            this.$router.push({ name: routeName, params: { id: 1, code: 4212 } })
        }
    },
}
</script>

<style scoped>
.card-body {
    padding: .5em;
}
.list-card div{
    margin: auto 0;
}
</style>