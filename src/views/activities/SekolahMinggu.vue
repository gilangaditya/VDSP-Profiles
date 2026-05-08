<template>
    <Navbar />
    <section>
        
        <div class="mt-5 pt-5 mb-5 pb-5" style="background-color: #f5f5f5;">
            <div class="container text-center mt-5 pt-5">
                <h3 class="fw-bold fs-46">Sekolah Minggu Buddhis (SMB) <br> Vihara Dhamma Surya Putra</h3>
                <p class="card-text fs-5">Mendidik generasi muda Dhamma dengan cinta, moralitas, dan kebijaksanaan.</p>
                <a href="#" class="btn bg-color-6 text-white fw-bold rounded-4 py-3 px-5 shadow mt-4">
                    <i class="fa-solid fa-user-plus me-2"></i> Daftar Sekarang
                </a>
            </div>
        </div>

        <div class="mt-5 pt-5 mb-5 pb-5">
            <div class="knowledge container">
                <div class="header_knowladge text-center">
                    <h3 class="fw-bold fs-46">Jadwal dan Lokasi Kegiatan</h3>
                </div>
                
                <div class="body_footer_knowledge pt-5 pb-5">
                    <div class="row justify-content-center">
                        <div class="col-md-8">
                            <ul class="list-group list-group-flush text-center">
                                <li class="list-group-item d-flex justify-content-between align-items-center fs-24" style="background-color: #f8f8f8; border: 1px solid #eee;">
                                    <span class="fw-semibold"><i class="fa-solid fa-calendar-alt me-2"></i> Hari Pelaksanaan</span>
                                    <span class="badge bg-color-6 text-white p-2" :style="{ backgroundColor: '#753FC7' }">Setiap Minggu Pagi</span>
                                </li>
                                <li class="list-group-item d-flex justify-content-between align-items-center fs-24" style="background-color: #f8f8f8; border: 1px solid #eee;">
                                    <span class="fw-semibold"><i class="fa-solid fa-clock me-2"></i> Waktu</span>
                                    <span class="badge bg-color-6 text-white p-2" :style="{ backgroundColor: '#753FC7' }">Pukul 09:00 - 11:30 WIB</span>
                                </li>
                                <li class="list-group-item d-flex justify-content-between align-items-center fs-24" style="background-color: #f8f8f8; border: 1px solid #eee;">
                                    <span class="fw-semibold"><i class="fa-solid fa-location-dot me-2"></i> Tempat</span>
                                    <span class="badge bg-color-6 text-white p-2" :style="{ backgroundColor: '#753FC7' }">Ruang Kelas SMB Vihara</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
        <div class="mt-5 pt-5 mb-5 pb-5">
            <div class="knowledge container">
                <div class="header_knowladge text-center">
                    <h3 class="fw-bold fs-46">Kurikulum Berjenjang SMB</h3>
                    <p class="card-text fs-5">Materi Dhamma disajikan secara relevan dan mudah dipahami sesuai usia anak.</p>
                </div>
                <div class="body_footer_knowledge pt-5 pb-5">
                    <div class="row row-cols-1 row-cols-md-3 g-4 text-center justify-content-center">
                        
                        <div class="col" style="max-width: 350px;">
                            <div class="card bg-glassmorph rounded-5 shadow-sm p-4 h-100">
                                <i class="fa-solid fa-child-reaching fs-1 mb-3" style="color: #007bff;"></i>
                                <h4 class="fw-bold card-title pt-4 pb-4">Kelas Metta (Usia 3-5 Tahun)</h4>
                                <p class="card-text text-muted">Fokus pada pengenalan Sangha, Vihara, dan konsep **Cinta Kasih (Metta)** melalui lagu dan cerita bergambar.</p>
                            </div>
                        </div>
                        
                        <div class="col" style="max-width: 350px;">
                            <div class="card bg-glassmorph rounded-5 shadow-sm p-4 h-100">
                                <i class="fa-solid fa-school fs-1 mb-3" style="color: #28a745;"></i>
                                <h4 class="fw-bold card-title pt-4 pb-4">Kelas Sīla (Usia 6-11 Tahun)</h4>
                                <p class="card-text text-muted">Mempelajari kisah Jātaka, **Pancasīla**, Paritta dasar, dan praktik meditasi singkat untuk menumbuhkan etika baik.</p>
                            </div>
                        </div>
                        
                        <div class="col" style="max-width: 350px;">
                            <div class="card bg-glassmorph rounded-5 shadow-sm p-4 h-100">
                                <i class="fa-solid fa-graduation-cap fs-1 mb-3" style="color: #ffc107;"></i>
                                <h4 class="fw-bold card-title pt-4 pb-4">Kelas Paññā (Usia 12-18 Tahun)</h4>
                                <p class="card-text text-muted">Diskusi mendalam mengenai **Empat Kebenaran Mulia**, Karmma, dan aplikasi Dhamma dalam kehidupan remaja.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div class="mt-5 pt-5 mb-5 pb-5">
            <div class="knowledge container mt-5 pt-5 mb-5 pt-5">
                <div class="header_knowladge text-center">
                    <h3 class="fw-bold fs-46">Materi Inti Pembelajaran SMB</h3>
                    <p class="card-text fs-5">Pelajaran berputar pada 4 area utama: Sīla & Etika, Dhamma, Kultivasi Batin, dan Seni, <br>
                    membantu anak-anak meningkatkan <span class="text-wavy">pengetahuan komprehensif</span> mereka</p>
                </div>
                <div class="body_footer_knowledge pt-5 pb-5">
                    <div class="cta_knowledge d-flex align-items-center justify-content-center gap-4 flex-wrap">
                        <a href="" class="btn btn-knowledge fw-semibold rounded-4 justify-content-evenly pt-3 pb-3 py-5 px-5 gap-4 d-flex align-items-center flex-column">
                            <div class="cta-logo rounded-4 bg-cta-logo-2">
                                <i class="fa-solid fa-handshake-angle p-3 fs-3" style="color: orange;"></i>
                            </div>
                            Sīla & Etika
                        </a>
                        <a href="" class="btn btn-knowledge fw-semibold rounded-4 justify-content-evenly pt-3 pb-3 py-5 px-5 gap-4 d-flex align-items-center flex-column">
                            <div class="bg-cta-logo-2 rounded-4">
                                <img class="p-2" src="../../assets/img/logo/open-book.svg" alt="">
                            </div>
                            Pelajaran Dhamma
                        </a>
                        <a href="" class="btn btn-knowledge fw-semibold rounded-4 justify-content-evenly pt-3 pb-3 py-5 px-5 gap-4 d-flex align-items-center flex-column">
                            <div class="bg-cta-logo-3 rounded-4">
                                <i class="fa-solid fa-spa p-3 fs-3" style="color: red;"></i>
                            </div>
                            Kultivasi Batin
                        </a>
                        <a href="" class="btn btn-knowledge fw-semibold rounded-4 justify-content-evenly pt-3 pb-3 py-5 px-5 gap-4 d-flex align-items-center flex-column">
                            <div class="bg-cta-logo-4 rounded-4">
                                <img class="p-2" src="../../assets/img/logo/palette.svg" alt="">
                            </div>
                            Seni & Kreativitas
                        </a>
                    </div>
                </div>
            </div>
        </div>

        <div class="pt-5 mt-5 mb-5 pb-3">
            <div class="card border-0 bg-color-6 pt-md-5 rounded-0 m-0 ">
                <div class="row g-0 align-items-center">
                    <div class="col-md-5 d-flex justify-content-center position-relative">
                        <div class="wrap-icon position-absolute w-100 h-100">
                            <img class="position-absolute bottom-0 start-0 translate-middle-y" src="../../assets/img/logo/Vector(1).svg" alt="">
                            <img class="position-absolute bottom-50 start-0 translate-middle-y" src="../../assets/img/logo/Vector.svg" alt="">
                            <img class="position-absolute bottom-50 start-0 translate-middle-y" src="../../assets/img/logo/4.svg" alt="">
                            <img class="position-absolute bottom-50 end-50 translate-middle-y" src="../../assets/img/logo/3.svg" alt="">
                            <img class="position-absolute bottom-50 start-0 translate-middle-y" src="../../assets/img/logo/1.svg" alt="">
                            <img class="position-absolute swing bottom-10 end-50 translate-middle-y" src="../../assets/img/logo/icon-2.svg" alt="">
                            <img class="position-absolute top-50 end-50 translate-middle-y" src="../../assets/img/logo/icon-1.svg" alt="">
                        </div>
                        <img src="../../assets/img/boys.svg" class="card-img w-50" alt="Anak-anak SMB">
                    </div>
                    
                    <div class="col-md-7 p-4 p-md-5">
                        <h5 class="card-title fw-bold fs-46">Apa yang diperoleh anak Anda setelah bersekolah di SMB VDSP?</h5>
                        <ul class="list-group fs-24 mt-5">
                            <li class="list-group-item d-flex align-items-center gap-4 text-white">
                                <i class="fa-solid fa-circle-check" style="color: #FFD700;"></i>
                                <p class="m-0">Memahami dan mempraktikkan **Sīla** (Moralitas) dalam kehidupan sehari-hari.</p>
                            </li>
                            <li class="list-group-item d-flex align-items-center gap-4 text-white">
                                <i class="fa-solid fa-circle-check" style="color: #FFD700;"></i>
                                <p class="m-0">Meningkatkan kemampuan **berpikir kritis** dan **beretika** terhadap lingkungan.</p>
                            </li>
                            <li class="list-group-item d-flex align-items-center gap-4 text-white">
                                <i class="fa-solid fa-circle-check" style="color: #FFD700;"></i>
                                <p class="m-0">Mampu **merespons kesulitan** dengan batin tenang dan percaya diri.</p>
                            </li>
                             <li class="list-group-item d-flex align-items-center gap-4 text-white">
                                <i class="fa-solid fa-circle-check" style="color: #FFD700;"></i>
                                <p class="m-0">Memiliki **lingkaran pertemanan** yang positif sesama anak Dhamma.</p>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
        
        <section class="profit-class">
            <div class="container">
                <div class="header-text pt-5 pb-5">
                    <h3 class="fw-bold fs-46 text-center">Mengapa memilih SMB Vihara Dhamma Surya Putra?</h3>
                </div>
                <div class="body d-flex gap-4 text-center justify-content-center flex-wrap">
                    
                    <div class="card bg-glassmorph rounded-5 shadow-sm p-4" style="max-width: 350px;">
                        <div class="card-body">
                            <img src="../../assets/img/logo/teacher.svg" class="card-img img-fluid w-25 mb-4" alt="Guru Berpengalaman">
                            <h4 class="card-title pt-4 pb-4 fw-bold">Guru Pengajar Berpengalaman</h4>
                            <p class="card-text text-muted">Dibimbing oleh guru-guru Dhamma dan Pandita Vihara yang memiliki dedikasi tinggi serta berpengalaman dalam mendidik anak-anak Buddhis.</p>
                        </div>
                    </div>
                    
                    <div class="card bg-glassmorph rounded-5 shadow-sm p-4" style="max-width: 350px;">
                        <div class="card-body">
                            <img src="../../assets/img/logo/storyteling.svg" class="card-img img-fluid w-25 mb-4" alt="Program Kreatif">
                            <h4 class="card-title pt-4 pb-4 fw-bold">Kurikulum Kreatif & Seimbang</h4>
                            <p class="card-text text-muted">Menggabungkan pelajaran Dhamma, kisah Jātaka, dan aktivitas kreatif (seni, musik, drama) untuk pembelajaran yang menyenangkan.</p>
                        </div>
                    </div>
                    
                    <div class="card bg-glassmorph rounded-5 shadow-sm p-4" style="max-width: 350px;">
                        <div class="card-body">
                            <img src="../../assets/img/logo/cost.svg" class="card-img img-fluid w-25 mb-4" alt="Biaya Donasi">
                            <h4 class="card-title pt-4 pb-4 fw-bold">Berbasis Dana Sukarela</h4>
                            <p class="card-text text-muted">Kegiatan SMB didukung oleh dāna sukarela umat Vihara. Pendidikan Dhamma kami diupayakan agar dapat diakses tanpa memberatkan biaya orang tua.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>

    </section>

    <!-- VIDEO GALLERY SECTION -->
<div class="mt-5 pt-5 mb-5 pb-5">
    <div class="container">
        <div class="text-center mb-5">
            <h3 class="fw-bold fs-46">Sekilas Kegiatan SMB</h3>
            <p class="card-text fs-5">Saksikan momen-momen berharga anak-anak belajar Dhamma dengan gembira.</p>
        </div>

        <div class="row g-4 justify-content-center">
            
            <!-- Card Video 1 -->
            <div class="col-md-4">
                <div class="video-card rounded-5 overflow-hidden shadow position-relative">
                    <video class="video-bg w-100 h-100" autoplay muted loop playsinline>
                        <source src="../../assets/video/smb-kegiatan-1.mp4" type="video/mp4">
                    </video>
                    <div class="video-overlay position-absolute top-0 start-0 w-100 h-100"></div>
                    <div class="video-title position-absolute bottom-0 start-0 w-100 p-4">
                        <span class="badge bg-color-6 text-white mb-2 px-3 py-2 rounded-pill">Kelas Metta</span>
                        <h5 class="fw-bold text-white m-0">Bermain & Belajar Cinta Kasih</h5>
                        <p class="text-white-50 small m-0 mt-1">Usia 3–5 Tahun</p>
                    </div>
                </div>
            </div>

            <!-- Card Video 2 -->
            <div class="col-md-4">
                <div class="video-card rounded-5 overflow-hidden shadow position-relative">
                    <video class="video-bg w-100 h-100" autoplay muted loop playsinline>
                        <source src="../../assets/video/smb-kegiatan-2.mp4" type="video/mp4">
                    </video>
                    <div class="video-overlay position-absolute top-0 start-0 w-100 h-100"></div>
                    <div class="video-title position-absolute bottom-0 start-0 w-100 p-4">
                        <span class="badge bg-color-6 text-white mb-2 px-3 py-2 rounded-pill">Kelas Sīla</span>
                        <h5 class="fw-bold text-white m-0">Meditasi & Kisah Jātaka</h5>
                        <p class="text-white-50 small m-0 mt-1">Usia 6–11 Tahun</p>
                    </div>
                </div>
            </div>

            <!-- Card Video 3 -->
            <div class="col-md-4">
                <div class="video-card rounded-5 overflow-hidden shadow position-relative">
                    <video class="video-bg w-100 h-100" autoplay muted loop playsinline>
                        <source src="../../assets/video/smb-kegiatan-3.mp4" type="video/mp4">
                    </video>
                    <div class="video-overlay position-absolute top-0 start-0 w-100 h-100"></div>
                    <div class="video-title position-absolute bottom-0 start-0 w-100 p-4">
                        <span class="badge bg-color-6 text-white mb-2 px-3 py-2 rounded-pill">Kelas Paññā</span>
                        <h5 class="fw-bold text-white m-0">Diskusi Dhamma Remaja</h5>
                        <p class="text-white-50 small m-0 mt-1">Usia 12–18 Tahun</p>
                    </div>
                </div>
            </div>

        </div>
    </div>
</div>
    <Footer />
</template>

<script>
import Navbar from '@/components/layout/Navbar.vue';
import Footer from '@/components/layout/Footer.vue';

    export default{
        name: 'SchoolEvents',
        components: {
            Navbar,
            Footer,
        },
    }
</script>

<style>
    /* VIDEO CARD */
.video-card {
    height: 420px;
    cursor: pointer;
}

.video-bg {
    object-fit: cover;
    position: absolute;
    top: 0;
    left: 0;
}

.video-overlay {
    background: linear-gradient(
        to top,
        rgba(0, 0, 0, 0.75) 0%,
        rgba(0, 0, 0, 0.1) 50%,
        rgba(0, 0, 0, 0) 100%
    );
    z-index: 1;
    transition: opacity 0.4s ease;
}

.video-title {
    z-index: 2;
    opacity: 0.5;
    transition: opacity 0.4s ease;
    background: linear-gradient(to top, rgba(0,0,0,0.6) 0%, transparent 100%);
    border-radius: 0 0 1.5rem 1.5rem;
}

.video-card:hover .video-title {
    opacity: 0;
}

.video-card:hover .video-overlay {
    opacity: 0.3;
}

/* STYLE ASLI DARI USER - TIDAK ADA PERUBAHAN */
    .fs-24{
        font-size: 24px !important;
    }

    .bottom-10{
        bottom: 10% !important;
    }

    .text-bg-dark{
        background-color: #12181F !important;
        
    }

     .bg-cta-logo-2{
        background-color: #FFF8E8;
    }

    .bg-cta-logo-3{
        background-color: #FFECEC;
    }

    .bg-cta-logo-4{
        background-color: #EDFFFD;
    }

    .cta-logo{
        background-color: #EFEFEF;
    }

    .btn-knowledge{
        background-color: #ffffff !important;
        color: #0D1117 !important;
    }

    .card .list-group-item{
        background-color: #753FC7 !important;
        border: none !important;
    }

    .text-wavy{
        text-decoration-line: underline;
        text-decoration-style: wavy;
        text-decoration-color: #753FC7;
    }

    .swing{
        transform-origin: top center !important;
        animation: swing 2s ease infinite !important;
    }

    @keyframes wrap-icon {
        20% { 
            transform: rotate(15deg) !important; 
        }   
        40% { 
            transform: rotate(-10deg) !important; 
        }
        60% { 
            transform: rotate(5deg) !important; 
        }   
        80% { 
            transform: rotate(-5deg); 
        }   
        100% { 
            transform: rotate(0deg); 
        }
        
    }

</style>