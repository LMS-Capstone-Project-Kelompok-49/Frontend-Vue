<template>
    <div class="card">
        <div class="card-body">
            <button class="btn btn-outline-success border-0 text-mx-blue-green hover-mx-green" type="button" @click="$router.go(-1)">
                <i class="fas fa-angle-left mr-2"></i>
                Back
            </button>
            <div class="d-flex justify-content-between mt-4">
                <div class="d-flex">
                    <div>
                        <b-img fluid :src="require('@/assets/images/component-dashboard/icon-course.png')" alt="Image 1" width="100%"></b-img>
                    </div>
                    <div class="ml-3 silabus-head">
                        <div class="silabus-title">
                            <b>{{ course.title }}</b>
                        </div>
                        <div class="silabus-mentor">
                            <i class="far fa-user"></i>
                            {{ course.mentor.name }}
                        </div>
                    </div>
                </div>
                <div class="button-head">
                    <button class="btn btn-info bg-mx-blue-green border-mx-green">
                        Request Mentoring
                    </button>
                </div>
            </div>
            <div class="mt-5">
                <b-tabs 
                    active-nav-item-class="font-weight-bold text-uppercase text-success"
                    active-tab-class="font-weight-bold"
                    class="tabs-content"
                    content-class="mt-3" 
                    fill 
                    lazy
                >
                    <b-tab title="Silabus" disabled>
                        <p>I'm the first tab</p>
                        </b-tab>
                    <b-tab title="Materials" active>
                        <TabsMaterial v-for="(value, index) in course.materials" :key="index" :material="value" :mentor="course.mentor.name" :courseid="course.id" />
                    </b-tab>
                    <b-tab title="Assignments">
                        <TabsAssignment v-for="(value, index) in course.assignments" :key="index" :type="value.type" :assignment="value" :courseid="course.id" />
                    </b-tab>
                    <b-tab title="Members">
                        <TabsMember :mentor="course.mentor" :members="course.members" /> 
                    </b-tab>
                </b-tabs>
            </div>
        </div>
    </div>
</template>

<script>
import TabsMaterial from '@/components/dashboard/TabsMaterial.vue'
import TabsAssignment from '@/components/dashboard/TabsAssignment.vue'
import TabsMember from '@/components/dashboard/TabsMember.vue'
export default {
    name: 'DetailSilabus',
    components: {
        TabsMaterial,
        TabsAssignment,
        TabsMember
    },
    props: {
        course: {
            type: Object
        }
    },
}
</script>

<style scoped>
.card {
    border: 1px solid #D1D5DB;
    border-radius: 12px;
    font-size: 1em;
    padding: 0px 24px 10px 24px;
}
.button-head, .silabus-head {
    margin: auto 0;
}
.silabus-title {
    font-size: 1.1em;
    font-weight: 700;
    color: #000000;
}
.silabus-mentor {
    color: #999898;
    font-size: .5em;
}
.tabs-content {
    font-size: .5em;
}
.tabs-content .nav-tabs {
    color: #00899F !important;
}
</style>