<template>
    <Navbar />
    
    <section>
        <div class="header mt-5 pt-5 ">
            <div class="container mt-5 pt-5 ">
                <h3 class="fw-semibold fs-64">Jadwal dan Aktivitas <br> Rutin Vihara Kami 🧘‍♀️</h3>
                <p class="lead color-palette-3">Mari berpartisipasi dalam kegiatan spiritual dan sosial mingguan Vihara Dhamma Surya Putra.</p>
            </div>
        </div>

        <div class="topic_filters container mt-5 mb-2 pt-5 mb-2">
            <div class="body_topic_filter">
                <h4 class="fw-bold mb-3">Lihat Berdasarkan Topik:</h4>
                <div class="filters mb-5 d-flex gap-3 align-items-center flex-wrap">
                    
                    <button 
                        @click="filterActivities('Semua')" 
                        :class="['btn', currentFilter === 'Semua' ? 'bg-color-6 text-white' : 'btn-outline-dark', 'rounded-pill']">
                        Semua Kegiatan
                    </button>
                    <button 
                        @click="filterActivities('Meditasi')" 
                        :class="['btn', currentFilter === 'Meditasi' ? 'bg-color-6 text-white' : 'btn-outline-dark', 'rounded-pill']">
                        Meditasi Rutin
                    </button>
                    <button 
                        @click="filterActivities('Pujabhakti')" 
                        :class="['btn', currentFilter === 'Pujabhakti' ? 'bg-color-6 text-white' : 'btn-outline-dark', 'rounded-pill']">
                        Pujabhakti Mingguan
                    </button>
                    <button 
                        @click="filterActivities('Sosial')" 
                        :class="['btn', currentFilter === 'Sosial' ? 'bg-color-6 text-white' : 'btn-outline-dark', 'rounded-pill']">
                        Bakti Sosial
                    </button>
                    <button 
                        @click="filterActivities('Dhamma')" 
                        :class="['btn', currentFilter === 'Dhamma' ? 'bg-color-6 text-white' : 'btn-outline-dark', 'rounded-pill']">
                        Diskusi Dhamma
                    </button>
                </div>
            </div>
        </div>

        <div class="content mt-5 pt-5">
            <div class="container-fluid">
                
                <template v-for="(activity, index) in filteredActivities" :key="activity.id">
                    <div class="d-flex row mb-5 pb-5">
                        
                        <template v-if="index % 2 === 0">
                            <div class="side-right p-0 col-md-6">
                                <div class="p-5 m-2">
                                    <h2 class="fw-bold mb-3 color-palette-4">{{ activity.title }}</h2>
                                    <p class="color-palette-3">{{ activity.description }}</p>
                                    <div class="card-text mt-4">
                                        <p><i class="fa-solid fa-clock me-2"></i> **Waktu:** {{ activity.time }}</p>
                                        <p><i class="fa-solid fa-location-dot me-2"></i> **Tempat:** {{ activity.location }}</p>
                                        <p v-if="activity.speaker"><i class="fa-solid fa-user-group me-2"></i> **Pembimbing:** {{ activity.speaker }}</p>
                                    </div>
                                    <div class="card-footer mt-4">
                                        <a :href="activity.ctaLink" class="btn btn-work bg-color-6 text-white rounded-4 shadow">{{ activity.ctaText }}</a>
                                    </div>
                                </div>
                            </div>
                            <div class="side-left p-0 col-md-6">
                                <div class="">
                                    <img :src="activity.imageUrl" class="img-fluid activity-img" :alt="'Foto ' + activity.title">
                                </div>
                            </div>
                        </template>
                        
                        <template v-else>
                            <div class="side-right p-0 col-md-6">
                                <div class="">
                                    <img :src="activity.imageUrl" class="img-fluid activity-img" :alt="'Foto ' + activity.title">
                                </div>  
                            </div>
                            <div class="side-left p-0 col-md-6">
                                <div class="p-5 m-2">
                                    <h2 class="fw-bold mb-3 color-palette-4">{{ activity.title }}</h2>
                                    <p class="color-palette-3">{{ activity.description }}</p>
                                    <div class="card-text mt-4">
                                        <p><i class="fa-solid fa-clock me-2"></i> **Waktu:** {{ activity.time }}</p>
                                        <p><i class="fa-solid fa-location-dot me-2"></i> **Tempat:** {{ activity.location }}</p>
                                        <p v-if="activity.coordinator"><i class="fa-solid fa-circle-info me-2"></i> **Koordinator:** {{ activity.coordinator }}</p>
                                    </div>
                                    <div class="card-footer mt-4">
                                        <a :href="activity.ctaLink" class="btn btn-work bg-color-6 text-white rounded-4 shadow">{{ activity.ctaText }}</a>
                                    </div>
                                </div>
                            </div>
                        </template>
                    </div>
                </template>

                <div v-if="filteredActivities.length === 0" class="text-center py-5">
                    <h4 class="text-muted">Tidak ada kegiatan "{{ currentFilter }}" saat ini.</h4>
                    <p>Silakan pilih filter lain atau lihat semua kegiatan.</p>
                </div>
            </div>
        </div>

        <section class="full-schedule-cta text-center py-5 bg-glassmorph mt-5">
            <div class="container">
                <h2 class="fw-bold mb-3">Jadwal Rutin Mingguan</h2>
                <p class="lead mb-4">Ingin melihat semua jadwal ibadah dan kegiatan kami selama seminggu penuh?</p>
                <a href="#" class="btn bg-color-6 text-white rounded-4 py-3 px-5 shadow fs-5">
                    <i class="fa-solid fa-calendar-alt me-2"></i> Unduh Kalender Kegiatan
                </a>
            </div>
        </section>

    </section>

    <Footer />
</template>

<script>
    import Footer from '@/components/layout/Footer.vue';
    import Navbar from '@/components/layout/Navbar.vue';

    export default{
        name: 'Activity',
        components: {
            Navbar,
            Footer,
        },
        data() {
            return {
                currentFilter: 'Semua', // State untuk filter yang aktif
                activities: [
                    // Data Dummy Kegiatan Rutin
                    { 
                        id: 1, 
                        title: 'Latihan Meditasi Samatha & Vipassanā', 
                        description: 'Meditasi rutin diadakan setiap hari Jumat malam di Dhammasala utama, terbuka untuk umum. Fokus pada pengembangan ketenangan (Samatha) dan pandangan terang (Vipassanā).', 
                        category: 'Meditasi', 
                        time: 'Setiap Jumat, 19:30 - 21:00 WIB', 
                        location: 'Dhammasala Utama Vihara', 
                        speaker: 'Bhante/Pandita [Nama]', 
                        imageUrl: '../../assets/img/vihara6-5cd8a03e3ba7f76c1156ad77.jpg', 
                        ctaText: 'Lihat Panduan Meditasi',
                        ctaLink: '#'
                    },
                    { 
                        id: 2, 
                        title: 'Program Bakti Sosial Bulanan', 
                        description: 'Sebagai wujud dari Karuna, kami rutin mengadakan bakti sosial (Pembagian Sembako, Donor Darah) untuk membantu masyarakat yang membutuhkan di sekitar desa Kaloran.', 
                        category: 'Sosial', 
                        time: 'Minggu ke-2 setiap bulan, 09:00 WIB', 
                        location: 'Area Vihara dan Desa Sekitar', 
                        coordinator: '[Nama Koordinator Sosial]', 
                        imageUrl: '/assets/img/dummy/bakti-sosial.jpg', // Ganti dengan path foto sosial yang benar
                        ctaText: 'Daftar Jadi Relawan',
                        ctaLink: '#'
                    },
                    { 
                        id: 3, 
                        title: 'Pujabhakti Malam', 
                        description: 'Ibadah rutin untuk melatih penghormatan dan perenungan Dhamma, ditutup dengan pelimpahan jasa. Wajib dihadiri umat Vihara.', 
                        category: 'Pujabhakti', 
                        time: 'Setiap Minggu, 18:30 WIB', 
                        location: 'Dhammasala Utama Vihara', 
                        speaker: 'Pandita Vihara', 
                        imageUrl: '/assets/img/dummy/pujabhakti.jpg', // Ganti dengan path foto pujabhakti
                        ctaText: 'Baca Paritta Pujabhakti',
                        ctaLink: '#'
                    },
                    { 
                        id: 4, 
                        title: 'Diskusi Dhamma Anak Muda', 
                        description: 'Sesi santai dan interaktif untuk membahas aplikasi Dhamma dalam kehidupan sehari-hari anak muda, dipimpin oleh Pandita Muda.', 
                        category: 'Dhamma', 
                        time: 'Sabtu ke-4 setiap bulan, 16:00 WIB', 
                        location: 'Ruang Kelas Vihara', 
                        speaker: 'Pandita Muda [Nama]', 
                        imageUrl: '/assets/img/dummy/diskusi.jpg', // Ganti dengan path foto diskusi
                        ctaText: 'Gabung Grup Diskusi',
                        ctaLink: '#'
                    },
                ]
            };
        },
        computed: {
            filteredActivities() {
                if (this.currentFilter === 'Semua') {
                    return this.activities;
                }
                // Filter berdasarkan kategori
                return this.activities.filter(activity => activity.category === this.currentFilter);
            }
        },
        methods: {
            filterActivities(filter) {
                this.currentFilter = filter;
            }
        }
    }
</script>

<style scoped>
.full-schedule-cta {
    border-top: 1px solid #ccc;
}
.activity-img {
    width: 100%;
    height: 450px; /* Tinggi gambar diatur agar seragam */
    object-fit: cover;
}
.filters .btn {
    transition: background-color 0.3s, color 0.3s;
}
.filters .bg-color-6 {
    /* Pastikan warna tombol aktif kontras */
    border-color: var(--bg-color-6);
}
</style>