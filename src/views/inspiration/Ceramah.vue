<template>
    <Navbar />

    <section class="page-header bg-color-4 py-5">
        <div class="container text-center">
            <h1 class="fw-bold display-4 pt-5 color-palette-1">Koleksi Ceramah Dhamma</h1>
            <p class="lead color-palette-3">Dengarkan dan pelajari ajaran Buddha dari Bhikkhu dan Pandita Vihara Dhamma Surya Putra.</p>
        </div>
    </section>

    <section class="filter-and-search py-4 container">
        <div class="row justify-content-end">
            <div class="col-md-4 mb-3">
                <input type="text" class="form-control rounded-4" placeholder="Cari Judul Ceramah...">
            </div>
            <div class="col-md-3 mb-3">
                <select class="form-select rounded-4">
                    <option selected>Filter Topik</option>
                    <option value="1">Meditasi</option>
                    <option value="2">Moralitas (Sīla)</option>
                    <option value="3">Kisah Jātaka</option>
                    <option value="4">Hari Raya</option>
                </select>
            </div>
        </div>
    </section>

    <section class="ceramah-list container py-5">
        <h2 class="fw-bold mb-4 border-bottom pb-2">Ceramah Terbaru</h2>
        
        <div class="row row-cols-1 row-cols-md-3 g-4">
            
            <div class="col" v-for="item in ceramahList" :key="item.id">
                <div class="card h-100 shadow border-0 bg-glassmorph">
                    <img :src="item.thumbnailUrl" class="card-img-top rounded-4" :alt="'Thumbnail ' + item.title">
                    <div class="card-body">
                        <h5 class="card-title fw-bold color-palette-4">{{ item.title }}</h5>
                        <p class="card-text text-muted small"><i class="fa-solid fa-user me-1"></i> {{ item.speaker }} | <i class="fa-solid fa-calendar-days me-1"></i> {{ formatDate(item.date) }}</p>
                        <p class="card-text description-truncate">{{ item.description }}</p>
                    </div>
                    <div class="card-footer bg-transparent border-0 d-grid">
                        <a :href="item.link" target="_blank" class="btn bg-color-6 text-white rounded-4">
                            <i class="fa-solid fa-play me-2"></i> Tonton / Dengarkan
                        </a>
                    </div>
                </div>
            </div>

        </div>

        <div class="text-center mt-5">
            <button class="btn bg-color-6 text-white rounded-4 py-2 px-4 shadow">Muat Lebih Banyak</button>
        </div>
    </section>

    <Footer />
</template>

<script>
import Footer from '@/components/layout/Footer.vue';
import Navbar from '@/components/layout/Navbar.vue';

export default {
    name: 'Ceramah',
    components: {
        Navbar,
        Footer,
    },
    data() {
        return {
            // Data dummy untuk tampilan
            ceramahList: [
                { id: 1, title: 'Menyambut Waisak dengan Batin Tenang', speaker: 'Bhante. Candra', date: '2025-05-20', description: 'Ceramah tentang makna Waisak dan pentingnya persiapan batin melalui metta bhavana.', thumbnailUrl: '/assets/img/dummy/ceramah1.jpg', link: '#' },
                { id: 2, title: 'Hukum Karma dan Pengaplikasiannya', speaker: 'Pandita Agung', date: '2025-04-15', description: 'Penjelasan mendalam mengenai hukum sebab-akibat dan bagaimana cara menciptakan karma baik.', thumbnailUrl: '/assets/img/dummy/ceramah2.jpg', link: '#' },
                { id: 3, title: 'Dasar-Dasar Meditasi Samatha', speaker: 'Bhante. Purna', date: '2025-03-01', description: 'Panduan praktis bagi pemula untuk memulai dan mendalami teknik meditasi konsentrasi.', thumbnailUrl: '/assets/img/dummy/ceramah3.jpg', link: '#' },
            ]
        };
    },
    methods: {
        formatDate(dateString) {
            const options = { year: 'numeric', month: 'long', day: 'numeric' };
            return new Date(dateString).toLocaleDateString('id-ID', options);
        }
    }
}
</script>

<style scoped>
.card-img-top {
    height: 200px; 
    object-fit: cover;
}
.description-truncate {
    display: -webkit-box;
    -webkit-line-clamp: 3; /* Batasi hingga 3 baris */
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis;
}
</style>