<template>
    <Navbar />

    <section class="page-header bg-color-4 py-5">
        <div class="container text-center">
            <h1 class="fw-bold display-4 pt-5 color-palette-1">Jadwal dan Panduan Pujabhakti</h1>
            <p class="lead color-palette-3">Mari bersama-sama melatih penghormatan, perenungan Dhamma, dan pelimpahan jasa di Vihara Dhamma Surya Putra.</p>
        </div>
    </section>

    <section class="schedule py-5">
        <div class="container">
            <h2 class="fw-bold mb-4 border-bottom pb-2 text-center">Jadwal Ibadah Rutin Mingguan</h2>
            
            <div class="row justify-content-center">
                <div class="col-md-8">
                    <div class="card shadow border-0 bg-glassmorph">
                        <ul class="list-group list-group-flush">
                            <li class="list-group-item d-flex justify-content-between align-items-center fs-5">
                                <span class="fw-semibold">Pujabhakti Malam Minggu</span>
                                <span class="badge bg-color-6 text-white p-2">Minggu, 18:30 WIB</span>
                            </li>
                            <li class="list-group-item d-flex justify-content-between align-items-center fs-5">
                                <span class="fw-semibold">Pujabhakti Meditasi (Khusus Praktisi)</span>
                                <span class="badge bg-color-6 text-white p-2">Jumat, 19:30 WIB</span>
                            </li>
                            <li class="list-group-item d-flex justify-content-between align-items-center fs-5">
                                <span class="fw-semibold">Pujabhakti Sekolah Minggu (SMB)</span>
                                <span class="badge bg-color-6 text-white p-2">Minggu Pagi, 09:00 WIB</span>
                            </li>
                            <li class="list-group-item text-muted pt-3">
                                <i class="fa-solid fa-bell me-2"></i> Mohon datang 15 menit sebelum waktu dimulai.
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            <div class="text-center mt-5">
                <a href="#" class="btn btn-outline-dark rounded-4 py-2 px-4">Lihat Aturan Berpakaian (Dress Code)</a>
            </div>
        </div>
    </section>

    <section class="liturgy py-5 bg-light">
        <div class="container">
            <h2 class="fw-bold mb-4 border-bottom pb-2 text-center">Panduan dan Teks Pujabhakti</h2>
            
            <div class="row row-cols-1 row-cols-md-3 g-4">
                
                <div class="col">
                    <div class="card h-100 shadow border-0">
                        <div class="card-body text-center">
                            <i class="fa-solid fa-sun fs-2 mb-3 color-palette-6"></i>
                            <h5 class="card-title fw-bold">Paritta Pagi & Perenungan</h5>
                            <p class="card-text text-muted">Kumpulan paritta yang cocok untuk dibacakan saat fajar atau sebagai pembukaan ibadah.</p>
                            <a href="#" class="btn bg-color-6 text-white rounded-4 mt-3">Unduh Teks (PDF)</a>
                        </div>
                    </div>
                </div>

                <div class="col">
                    <div class="card h-100 shadow border-0">
                        <div class="card-body text-center">
                            <i class="fa-solid fa-moon fs-2 mb-3 color-palette-6"></i>
                            <h5 class="card-title fw-bold">Liturgi Pujabhakti Minggu</h5>
                            <p class="card-text text-muted">Urutan dan teks lengkap untuk Pujabhakti rutin yang diadakan setiap malam Minggu.</p>
                            <a href="#" class="btn bg-color-6 text-white rounded-4 mt-3">Lihat Teks Online</a>
                        </div>
                    </div>
                </div>

                <div class="col">
                    <div class="card h-100 shadow border-0">
                        <div class="card-body text-center">
                            <i class="fa-solid fa-star fs-2 mb-3 color-palette-6"></i>
                            <h5 class="card-title fw-bold">Paritta Hari Suci Khusus</h5>
                            <p class="card-text text-muted">Paritta dan tata cara ibadah yang digunakan saat Waisak, Kathina, dan Asadha.</p>
                            <a href="#" class="btn bg-color-6 text-white rounded-4 mt-3">Pelajari Lebih Lanjut</a>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    </section>

    <section class="holidays py-5 container">
        <h2 class="fw-bold mb-4 border-bottom pb-2 text-center">Acara Hari Suci Mendatang</h2>
        
        <div class="row">
            <div class="col-md-6 mb-4">
                <div class="card bg-glassmorph shadow-sm border-start border-4 border-primary h-100">
                    <div class="card-body">
                        <h4 class="fw-bold color-palette-4">Perayaan Hari Raya Kathina</h4>
                        <p class="text-muted"><i class="fa-solid fa-calendar-days me-2"></i> **Tanggal:** [Tanggal Kathina Mendatang]</p>
                        <p>Ritual persembahan jubah dan kebutuhan kepada Saṅgha setelah masa Vassa, sebagai bentuk dukungan umat.</p>
                        <a href="#" class="text-decoration-none color-palette-6 fw-semibold">Detail Acara <i class="fa-solid fa-arrow-right-long ms-1"></i></a>
                    </div>
                </div>
            </div>
            <div class="col-md-6 mb-4">
                <div class="card bg-glassmorph shadow-sm border-start border-4 border-warning h-100">
                    <div class="card-body">
                        <h4 class="fw-bold color-palette-4">Retret Meditasi Waisak</h4>
                        <p class="text-muted"><i class="fa-solid fa-calendar-days me-2"></i> **Tanggal:** [Tanggal Waisak Mendatang]</p>
                        <p>Rangkaian ibadah dan meditasi intensif untuk memperingati Kelahiran, Pencerahan, dan Parinibbana Sang Buddha.</p>
                        <a href="#" class="text-decoration-none color-palette-6 fw-semibold">Daftar Retret <i class="fa-solid fa-arrow-right-long ms-1"></i></a>
                    </div>
                </div>
            </div>
        </div>

        <div class="text-center mt-4">
            <a href="#" class="btn bg-color-6 text-white rounded-4 py-2 px-4 shadow">Lihat Semua Hari Suci</a>
        </div>
    </section>

    <Footer />
</template>

<script>
import Footer from '@/components/layout/Footer.vue';
import Navbar from '@/components/layout/Navbar.vue';

export default {
    name: 'Pujabhakti',
    components: {
        Navbar,
        Footer,
    },
}
</script>

<style scoped>
/* Anda dapat menyesuaikan style sesuai dengan tema Vihara Anda */
.list-group-item {
    border-color: #eee;
}
.holidays .card {
    transition: transform 0.3s ease-in-out;
}
.holidays .card:hover {
    transform: translateY(-5px);
}
.color-palette-6 {
    color: #4a90e2; /* Ganti dengan warna palet 6 Anda */
}
</style>