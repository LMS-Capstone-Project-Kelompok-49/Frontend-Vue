<template>
    <div class="container my-4">
        <div class="card" v-if="type === 1" @click="toPage('DetailAssignmentAdmin', 1)">
            <div class="card-body">
                <div class="d-flex justify-content-around list-card">
                    <div>
                        <i class="fas fa-list-ul text-mx-green mr-2"></i>  
                        Tugas UI & UX Mobile App
                    </div>
                    <div>
                        <span class="d-block">11:59 PM</span>
                        <span class="text-mx-green">Due April 21, 2022</span>
                    </div>
                    <div>
                        <span class="text-primary">0/3 have turned in </span>
                    </div>
                </div>
            </div>
        </div>
        <div class="card" v-if="type === 2" @click="toPage('DetailAssignmentAdmin', 2)">
            <div class="card-body">
                <div class="d-flex justify-content-around list-card">
                    <div>
                        <i class="fas fa-pen-nib text-danger mr-2"></i>
                        Quiz Practice 3
                    </div>
                    <div>
                        <span class="d-block">11:59 PM</span>
                        <span class="text-mx-green">Due April 21, 2022</span>
                    </div>
                    <div>
                        <span class="text-primary">0/3 have turned in </span>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'TabsAssignmentAdmin',
    props: {
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
    padding: .5em;
}
.list-card div{
    margin: auto 0;
}
</style>