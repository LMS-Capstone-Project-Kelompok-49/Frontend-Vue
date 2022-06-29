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
                        <CardMember :role="'Mentor'" />
                    </b-collapse>
                </div>
                
                <div>
                    <b-button v-b-toggle.collapse-2 class="btn btn-outline-info border-0 text-black bg-white d-block mt-4">
                        <i class="fas fa-chevron-down"></i>
                        Members
                        <b-badge pill variant="secondary">20</b-badge>
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
                        <CardMember :role="'Member'" v-for="n in 3" :key="n" />
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
    }
}
</script>

<style scoped>
.card-wrapper {
    padding: .5em;
    border: 1px solid #D1D5DB;
    border-radius: 15px;
}
</style>