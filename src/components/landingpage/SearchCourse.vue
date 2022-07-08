<template>
  <div>
    <form autocomplete="off">
        <div class="d-flex">

            <div class="w-100 m-2">
                <div class="form-group">
                    <div class="input-group">
                        <div class="input-group-prepend">
                            <div class="input-group-text bg-white">
                                <i class="fas fa-search"></i>
                            </div>
                        </div>
                        <input  type="text" class="form-control" id="EmailInput" placeholder="Search for courses" height="250px">
                    </div>
                </div>
            </div>

            <div class="m-2">
                <button class="btn btn-info bg-mx-green border-mx-green">
                    Search
                </button>
            </div>

        </div>
        <div class="d-flex">
            <label class="m-2">Filter By</label>
            <div class="m-1">
                <b-form-select v-model="selected">
                    <b-form-select-option :value="null">All Category</b-form-select-option>
                    <b-form-select-option value="a">Option A</b-form-select-option>
                </b-form-select>
            </div>
            <div class="m-1">
                <div class="form-group">
                    <div class="input-group">
                        <div class="input-group-prepend">
                            <div class="input-group-text bg-white">
                                <i class="fas fa-star text-warning"></i>
                            </div>
                        </div>
                        <b-form-select v-model="selectedStar">
                            <b-form-select-option :value="null"> 
                                Semua
                            </b-form-select-option>
                            <b-form-select-option v-for="n in 5" :key="n" :value="n"> {{ n }} Star</b-form-select-option>
                        </b-form-select>
                    </div>
                </div>
            </div>
        </div>
        <i></i>
    </form>
    <div class="mt-5">
        <div class="d-flex justify-content-between">
            <h4 class="font-weight-bold w-25">
                Result
            </h4>
            <div class="d-flex">
                <label class="w-50 my-auto">Sort By</label>
                <b-form-select v-model="selectedPrice" class="w-75">
                    <b-form-select-option :value="null">All Prices</b-form-select-option>
                    <b-form-select-option value="up">highest price</b-form-select-option>
                    <b-form-select-option value="down">lowest price</b-form-select-option>
                </b-form-select>
            </div>
        </div>
    </div>
    <div class="mt-0">
        <ExploreCourseItem />
    </div>
  </div>
</template>

<script>
import ExploreCourseItem from "@/components/landingpage/ExploreCourseItem"

export default {
  name: 'SearchCourse',
  components: {
    ExploreCourseItem
  },
  data() {
      return {
        selected: null,
        selectedStar: null,
        selectedPrice: null,
      }
  },
}
</script>

<style scoped>

</style>