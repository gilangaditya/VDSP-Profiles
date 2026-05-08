<template>
    <Navbar />
    
    <section>
        <div class="header mt-5 pt-5 bg-color-4 py-5">
            <div class="container mt-5 pt-5 ">
                <h3 class="fw-semibold display-5 text-center color-palette-1">
                    Mengenal Vihara Dhamma Surya Putra <br> Pusat Dhamma dan Kebaikan
                </h3>
                <p class="lead text-center color-palette-3">Vihara kami hadir untuk membimbing umat menuju kedamaian batin dan kebahagiaan sejati.</p>
            </div>
        </div>

        <div class="content mt-5 pt-5">
            <div class="container-fluid">
                <div class="d-flex row align-items-center">
                    <div class="side-right p-0 col-md-6">
                        <div class="p-5 m-2">
                            <h2 class="fw-bold mb-3 color-palette-4">Sejarah Singkat Vihara</h2>
                            <div class="card-text">
                                <p class="lead">Berdiri sejak tahun [Tahun Pendirian], Vihara Dhamma Surya Putra (VDSP) didirikan atas inisiatif dan semangat umat Buddha Temanggung untuk memiliki pusat ibadah yang tenang.</p>
                                <p>Awalnya berupa [Deskripsi awal, misal: cetiya kecil], Vihara ini secara bertahap berkembang menjadi Dhammasala besar yang mampu menampung ratusan umat, berkat dukungan komunitas dan para donatur.</p>
                                <p>VDSP kini menjadi tempat perlindungan dan pusat pengembangan spiritual bagi umat di Kecamatan Kaloran dan sekitarnya, melestarikan tradisi [Sebutkan tradisi/aliran, misal: Theravada] dengan penuh semangat.</p>
                            </div>
                            <div class="card-footer mt-4">
                                <a href="#" class="btn btn-work bg-color-6 text-white rounded-4 shadow">Kisah Pendirian Lengkap</a>
                            </div>
                        </div>
                    </div>
                    <div class="side-left p-0 col-md-6">
                        <div class="">
                            <img src="../assets/img/vihara6-5cd8a03e3ba7f76c1156ad77.jpg" class="img-fluid object-fit-cover about-img" alt="Foto Bangunan Vihara Dhamma Surya Putra">
                        </div>
                    </div>
                </div>

                <div class="d-flex row align-items-center mt-5 pt-5">
                    <div class="side-right p-0 col-md-6">
                        <div class="">
                            <img src="#" class="img-fluid object-fit-cover about-img" alt="Ilustrasi Visi Misi"> 
                        </div>  
                    </div>
                    <div class="side-left p-0 col-md-6">
                        <div class="p-5 m-2">
                            <h2 class="fw-bold mb-3 color-palette-4">Visi dan Misi Kami</h2>
                            <div class="card-text">
                                <h4 class="fw-semibold">Visi</h4>
                                <p>Menjadi pusat Dhamma yang terpercaya, melahirkan umat Buddha yang beretika, bijaksana, dan aktif dalam menciptakan kedamaian di masyarakat.</p>
                                
                                <h4 class="fw-semibold mt-4">Misi</h4>
                                <ul class="list-unstyled">
                                    <li><i class="fa-solid fa-check-circle me-2 color-palette-6"></i> Melaksanakan Pujabhakti dan Meditasi secara rutin.</li>
                                    <li><i class="fa-solid fa-check-circle me-2 color-palette-6"></i> Menyediakan pendidikan Dhamma yang berkualitas bagi segala usia (termasuk SMB).</li>
                                    <li><i class="fa-solid fa-check-circle me-2 color-palette-6"></i> Mendorong praktik Kamma baik dan Bakti Sosial.</li>
                                </ul>
                            </div>
                            <div class="card-footer mt-4">
                                <a href="#" class="btn btn-work bg-color-6 text-white rounded-4 shadow">Pelajari Nilai Kami</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
        <div class="container py-5 mt-5">
            <h2 class="fw-bold mb-4 border-bottom pb-2 text-center">Hubungi Kami & Lokasi</h2>
            <div class="row row-cols-1 row-cols-md-3 g-4 text-center">
                
                <div class="col">
                    <div class="card h-100 shadow border-0 p-3">
                        <i class="fa-solid fa-map-location-dot fs-1 mb-3 color-palette-6"></i>
                        <h5 class="fw-bold">Alamat Vihara</h5>
                        <p>Dusun [Nama Dusun], Desa [Nama Desa], Kaloran, Kabupaten Temanggung, Jawa Tengah.</p>
                        <a href="[Link Google Maps]" target="_blank" class="text-decoration-none fw-semibold">Lihat di Google Maps</a>
                    </div>
                </div>
                
                <div class="col">
                    <div class="card h-100 shadow border-0 p-3">
                        <i class="fa-solid fa-phone fs-1 mb-3 color-palette-6"></i>
                        <h5 class="fw-bold">Kontak Utama</h5>
                        <p>Pengurus Vihara: [Nomor Kontak 1]</p>
                        <p>Sekretariat: [Nomor Kontak 2]</p>
                        <a href="mailto: [Email Vihara]" class="text-decoration-none fw-semibold">Kirim Email</a>
                    </div>
                </div>
                
                <div class="col">
                    <div class="card h-100 shadow border-0 p-3">
                        <i class="fa-solid fa-clock fs-1 mb-3 color-palette-6"></i>
                        <h5 class="fw-bold">Jam Buka Kunjungan</h5>
                        <p>Setiap hari: 08:00 - 17:00 WIB</p>
                        <p class="text-muted small">Kunjungan di luar jam ini disarankan membuat janji terlebih dahulu.</p>
                        <a href="#" class="text-decoration-none fw-semibold">Aturan Berkunjung</a>
                    </div>
                </div>
            </div>
        </div>

    </section>
    <Footer />
</template>

<script>
    import Footer from '@/components/layout/Footer.vue';
    import Navbar from '@/components/layout/Navbar.vue';

    export default{
        name: 'Visith',
        components: {
        Navbar,
        Footer,
    },
    }
</script>

<style scoped>
.about-img {
    width: 100%;
    height: 450px;
    object-fit: cover;
}
.color-palette-6 {
    /* Pastikan ini sesuai dengan warna tombol CTA Anda */
    color: #4a90e2; 
}
.list-unstyled li {
    padding-bottom: 5px;
}
</style>