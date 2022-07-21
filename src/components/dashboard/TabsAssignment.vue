<template>
    <div class="container my-4">
        <div class="card" v-if="type === 1" @click="toPage('DetailAssignmentDashboard', assignment.id)">
            <div class="card-body">
                <div class="d-flex justify-content-around list-card">
                    <div>
                        <i class="fas fa-list-ul text-mx-green mr-2"></i>  
                        {{ assignment.title.substring(0,25)+".." }}
                    </div>
                    <div>
                        <span class="text-mx-green">Due {{ assignment.due }}</span>
                    </div>
                    <div>
                        <span class="text-primary">Need Submit</span>
                    </div>
                </div>
            </div>
        </div>
        <div class="card" v-if="type === 2" @click="toPage('DetailAssignmentDashboard', assignment.id)">
            <div class="card-body">
                <div class="d-flex justify-content-around list-card">
                    <div>
                        <i class="fas fa-pen-nib text-danger mr-2"></i>
                        {{ assignment.title.substring(0,25)+".." }}
                    </div>
                    <div>
                        <span class="text-mx-green">Due {{ assignment.due }}</span>
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
    props: {
        assignment: {
            type: Object
        },
        type: {
            default: 1,
            type: Number
        }
    },
    methods: {
        toPage (routeName, typeAss) {
            this.$router.push({ name: routeName, params: { id: 1, code: typeAss } })
        }
    },
}
</script>

<style scoped>
.card-body {
    padding: 1em;
}
.list-card div{
    margin: auto 0;
}
</style>