<template>
    <Navbar />

    <section class="page-header bg-color-4 py-5">
        <div class="container text-center">
            <h1 class="fw-bold display-4 pt-5 color-palette-1">Artikel dan Kisah Inspiratif</h1>
            <p class="lead color-palette-3">Dapatkan pencerahan harian melalui kisah nyata dan refleksi Dhamma yang mendalam.</p>
        </div>
    </section>

    <section class="featured-inspiration container pt-5">
        <h2 class="fw-bold mb-4 border-bottom pb-2">Inspirasi Pilihan</h2>
        
        <div class="card mb-5 shadow border-0 bg-glassmorph">
            <div class="row g-0">
                <div class="col-md-5">
                    <img src="#" class="img-fluid rounded-start h-100 object-fit-cover" alt="Gambar Artikel Unggulan">
                </div>
                <div class="col-md-7">
                    <div class="card-body py-4">
                        <h3 class="card-title fw-bold color-palette-4">Judul Kisah Pencerahan Batin</h3>
                        <p class="card-text text-muted small"><i class="fa-solid fa-feather me-1"></i> Admin Vihara | <i class="fa-solid fa-calendar-days me-1"></i> 30 November 2025</p>
                        <p class="card-text lead">Kisah inspiratif ini menceritakan perjalanan seorang umat dalam menghadapi kesulitan hidup dengan berpegang teguh pada Empat Kebenaran Mulia.</p>
                        <a href="#" class="btn bg-color-6 text-white py-3 px-4 rounded-4 mt-3">Baca Kisah Lengkap</a>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <section class="inspiration-list container py-5">
        <h2 class="fw-bold mb-4 border-bottom pb-2">Artikel Terbaru</h2>
        
        <div class="row row-cols-1 row-cols-md-3 g-4">
            
            <div class="col" v-for="item in articleList" :key="item.id">
                <div class="card h-100 shadow border-0 bg-glassmorph">
                    <img :src="item.imageUrl" class="card-img-top rounded-0" :alt="'Ilustrasi ' + item.title">
                    <div class="card-body">
                        <h5 class="card-title fw-bold color-palette-4">{{ item.title }}</h5>
                        <p class="card-text text-muted small"><i class="fa-solid fa-tag me-1"></i> {{ item.category }} | <i class="fa-solid fa-calendar-days me-1"></i> {{ formatDate(item.date) }}</p>
                        <p class="card-text description-truncate">{{ item.summary }}</p>
                    </div>
                    <div class="card-footer bg-transparent border-0 d-grid">
                        <a :href="item.link" class="btn bg-color-6 py-3 text-white rounded-4">Baca Selengkapnya</a>
                    </div>
                </div>
            </div>

        </div>

        <div class="text-center mt-5">
            <button class="btn bg-color-6 text-white rounded-4 py-3 px-4 shadow">Muat Lebih Banyak</button>
        </div>
    </section>

    <Footer />
</template>

<script>
import Footer from '@/components/layout/Footer.vue';
import Navbar from '@/components/layout/Navbar.vue';

export default {
    name: 'Inspirasi',
    components: {
        Navbar,
        Footer,
    },
    data() {
        return {
            // Data dummy untuk tampilan
            articleList: [
                { id: 1, title: 'Mengendalikan Amarah dengan Kesabaran', category: 'Etika', date: '2025-11-25', summary: 'Lima langkah praktis yang diajarkan Sang Buddha untuk mengatasi perasaan marah dalam kehidupan sehari-hari.', imageUrl: '/assets/img/dummy/artikel1.jpg', link: '#' },
                { id: 2, title: 'Jejak Kebaikan di Vihara Kami', category: 'Kisah Umat', date: '2025-11-10', summary: 'Kisah nyata tentang kegiatan bakti sosial terbaru dan dampaknya pada masyarakat desa.', imageUrl: '/assets/img/dummy/artikel2.jpg', link: '#' },
                { id: 3, title: 'Apa Itu Lima Sīla? Panduan Lengkap', category: 'Dhamma Dasar', date: '2025-10-28', summary: 'Penjelasan mendalam tentang Lima Latihan Moralitas (Pañca Sīla) dan penerapannya.', imageUrl: '/assets/img/dummy/artikel3.jpg', link: '#' },
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
.featured-inspiration .img-fluid {
    max-height: 300px;
}
.description-truncate {
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis;
}
</style>