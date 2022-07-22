<template>
    <div>
        <div class="card border-light">
            <div class="card-body">
                <div class="d-flex justify-content-between">
                    <div>
                        <img :src="require('@/assets/images/Rectangle4486.png')"/>
                    </div>
                    <div>
                        <b-form-rating :value="data.rating" variant="warning" class="rating-form" no-border readonly></b-form-rating>
                    </div>
                </div>
                <div>
                    <label class="title-course">{{ data.title }}</label>
                    <div class="sub-title-course">
                        <div>
                            <i class="fas fa-user text-muted mr-3"></i>
                            <label class="text-muted">{{ data.mentor.name }}</label>
                        </div>
                    </div>
                    <div class="d-flex sub-subtile-course">
                        <div>
                            <i class="fas fa-file-video mr-2 icon"></i>
                            <label class="text-muted">{{ data.material.length }} Videos</label>
                        </div>
                        <div class="mx-3">
                            <i class="fas fa-users mr-2 icon"></i>
                            <label class="text-muted">{{ data.member }} Members  </label>
                        </div>
                    </div>
                </div>
                <div class="d-flex justify-content-between mt-4">
                    <div>
                        <div class="discount-course">
                            <label class="text-decoration-line-through text-muted">Rp {{ data.price }}</label>
                        </div>
                        <div class="price-course">
                            <label>Rp {{ data.price-(data.price*data.discount/100) }}</label>
                        </div>
                    </div>
                    <div class="btn-course-wrapper">
                        <button class="btn btn-success py-2 btn-join-course" @click="toDetail(data.id)">
                            Join Class
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'ResultCard',
    props: {
        data: {
            type: Object
        }
    },
    methods: {
        toDetail (courseId) {
            this.$router.push({ name: 'DetailCoursePage', params: { id: courseId } })
        }
    },
}
</script>

<style scoped>
.rating-form {
    margin-top: 10%;
}
.title-course {
    color: #00899F;
    font-size: 1.2em;
    font-weight: 700;
    margin-top: 1em;
}
.sub-title-course{
    font-size: 1em;
}
.sub-subtile-course{
    font-size: .9em;
}
.sub-subtile-course .icon {
    color: #00AFB9;
}
.discount-course {
    font-size: .8em;
}
.price-course {
    font-size: 1.2em;
    color: #DD234E;
    font-weight: 600;
}
.btn-course-wrapper {
    margin: auto 0 0;
}
.btn-join-course {
    background-color: #00AFB9;
    border-color: #00AFB9;
    padding-right: 2.5em;
    padding-left: 2.5em;
}
</style>