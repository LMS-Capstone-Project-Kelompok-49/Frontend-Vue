<template>
    <div class="card">
        <div class="card-body">
            <button class="btn btn-outline-success border-0 text-mx-blue-green hover-mx-green" type="button" @click="toPage">
                <i class="fas fa-angle-left mr-2"></i>
                Back
            </button>
            <div class="d-flex justify-content-between my-4">
                <div class="d-flex">
                    <div class="text-mx-green">
                        <i class="fas fa-book icon-material icon"></i>
                    </div>
                    <div class="ml-4 w-100">
                        <label class="d-block title text-mx-green">{{ material.title }}</label>
                        <label class="d-block sub">
                            <i class="far fa-user mr-2"></i>
                            {{ mentor }}
                        </label>
                    </div>
                </div>
                <!-- <div>
                    <button class="btn btn-info bg-mx-blue-green border-mx-green">
                        Request Mentoring
                    </button>
                </div> -->
            </div>
            <hr>
            <div class="my-4">
                <div class="embed-wrapper">
                    <div v-if="material.type === 1">
                        <b-embed
                            type="iframe"
                            aspect="16by9"
                            :src="material.link"
                            allowfullscreen
                            class="embed-item"
                        ></b-embed>
                    </div>
                    <div v-if="material.type === 2">
                        <iframe :src="material.link" frameborder="0" width="100%" height="500" allowfullscreen="true" mozallowfullscreen="true" webkitallowfullscreen="true"></iframe>
                    </div>
                </div>
                <div class="info-title">
                    Descriptions
                </div>
                <div class="info-sub">
                    {{ material.desc }}
                </div>
            </div>
            <div class="my-4">
                <div class="other-title">
                    Other’s Materials
                </div>
                <div>
                    <OtherMaterial v-for="(value, index) in  otherMaterials" :key="index" :material="value" />
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import OtherMaterial from '@/components/dashboard/OtherMaterials.vue'
export default {
    name: 'DetailMaterial',
    components: {
        OtherMaterial
    },
    props: {
        material: {
            type: Object
        },
        mentor: {
            type: String
        },
        otherMaterials: {
            type: Array
        }
    },
    methods: {
        toPage() {
            const id  = this.$route.params.id
            this.$router.push({ name: 'DetailCourseAdmin', params: { id: id } })
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
hr {
    border: 2px solid #00AFB9;
}
.info-title {
    font-size: .5em;
    color: #999898;
}
.info-sub {
    font-size: .5em;
    margin-top: 1em;
}
.embed-wrapper {
    width: 100%;
    height: 550px;
}
.embed-item {
    height: 500px;
}
.other-title {
    font-size: .9em;
    font-weight: 600;
}
</style>