<template>
    <div class="container my-4">
        <div class="card border-0">
            <div class="card-body">
                <div>
                    <b-button v-b-toggle.collapse-1 class="btn btn-outline-info border-0 text-black bg-white d-block">
                        <i class="fas fa-chevron-down"></i>
                        Mentors
                        <b-badge pill variant="secondary">1</b-badge>
                    </b-button>
                    <b-collapse id="collapse-1" class="my-2">
                        <div class="d-flex justify-content-around">
                            <div>Name</div>
                            <div></div>
                            <div>Email</div>
                            <div></div>
                            <div>
                                Role
                            </div>
                        </div>
                        <CardMember :member="mentor" :role="'Mentor'" />
                    </b-collapse>
                </div>
                
                <div>
                    <b-button v-b-toggle.collapse-2 class="btn btn-outline-info border-0 text-black bg-white d-block mt-4">
                        <i class="fas fa-chevron-down"></i>
                        Members
                        <b-badge pill variant="secondary">{{ members.length }}</b-badge>
                    </b-button>
                    <b-collapse id="collapse-2" class="my-2">
                        <div class="d-flex justify-content-around">
                            <div>Name</div>
                            <div></div>
                            <div>Email</div>
                            <div></div>
                            <div>
                                Role
                            </div>
                        </div>
                        <CardMember v-for="(value, index) in members" :key="index" :member="value" :role="'Member'" />
                    </b-collapse>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import CardMember from '@/components/dashboard/CardMemberTabs.vue'
export default {
    name: 'TabsMember',
    components: {
        CardMember
    },
    props: {
        mentor: {
            type: Object
        },
        members: {
            type: Array
        }
    },
}
</script>

<style scoped>
.card-wrapper {
    padding: .5em;
    border: 1px solid #D1D5DB;
    border-radius: 15px;
}
</style>