<template>
  <div class="container-fluid">
    <DetailMaterial :mentor="detailCourses.mentor" :material="detailCourses.material" :otherMaterials="detailCourses.anotherMaterials" />
  </div>
</template>

<script>
import DetailMaterial from '@/components/adminpage/DetailMaterialsAdmin.vue'
export default {
  name: 'DetailMaterialsAdmin',
  components: {
    DetailMaterial
  },
  computed: {
    detailCourses () {
      const materialId = this.$route.params.materialId
      const id  = this.$route.params.id
      let courses = this.$store.state.main.user.courses.filter(function(value){
          return value.id === id
      })
      console.log(courses, id);
      let material = courses[0].materials.filter(function(value){
        return value.id === materialId
      })
      console.log(material);
      const otherMaterial = courses[0].materials.filter(function(value){
        return value.id !== materialId
      })
      console.log(otherMaterial);
      return { material: material[0], mentor: courses[0].mentor.name, anotherMaterials: otherMaterial }
    }
  }
}
</script>