<template>
    <div class="card">
        <div class="card-body">
            <label class="font-weight-bolder title">Announcements</label>
            <div class="d-flex justify-content-between">
                <div>
                    <label class="sort-title">Sort by</label>
                </div>
                <div>
                    <b-form-select v-model="optionsSelected" :options="options"></b-form-select>
                </div>
            </div>
            <div>
                <CardAnnounment v-for="n in 3" :key="n" />
            </div>
        </div>
    </div>
</template>

<script>
import CardAnnounment from '@/components/dashboard/CardAnnounmentTabs'
export default {
    name: 'DetailAnnounment',
    components: {
        CardAnnounment
    },
    data() {
        return {
            optionsSelected: 'all',
            options: [
                { value: 'all', text: 'All' },
                { value: 'not', text: 'Not Finished' },
            ],
        }
    },
}
</script>

<style scoped>
.title {
    font-size: .8em;
}
.sort-title {
    font-size: .6em;
}
</style>