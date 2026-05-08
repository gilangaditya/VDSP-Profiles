<template>
    <Navbar />

    <section class="page-header bg-color-4 py-5">
        <div class="container text-center">
            <h1 class="fw-bold display-4 pt-5 color-palette-1">Dukung Kegiatan Vihara</h1>
            <p class="lead color-palette-3">Berbuat kebajikan melalui Dāna (pemberian) untuk mendukung operasional, pengembangan Dhamma, dan kegiatan sosial Vihara Dhamma Surya Putra.</p>
        </div>
    </section>

    <section class="purpose py-5">
        <div class="container">
            <h2 class="fw-bold mb-5 border-bottom pb-2 text-center">Pilihan Saluran Dāna</h2>

            <div class="row row-cols-1 row-cols-md-3 g-4 text-center">
                
                <div class="col">
                    <div class="card h-100 shadow border-0 p-4 bg-glassmorph">
                        <i class="fa-solid fa-house-chimney fs-1 mb-3 color-palette-6"></i>
                        <h4 class="card-title fw-bold color-palette-4">Dāna Operasional</h4>
                        <p class="card-text">Digunakan untuk kebutuhan sehari-hari Vihara, pemeliharaan bangunan, listrik, air, dan akomodasi Sangha.</p>
                        <span class="badge bg-secondary rounded-pill py-3 px-3 mt-2">Dāna Umum</span>
                    </div>
                </div>

                <div class="col">
                    <div class="card h-100 shadow border-0 p-4 bg-glassmorph">
                        <i class="fa-solid fa-book-open-reader fs-1 mb-3 color-palette-6"></i>
                        <h4 class="card-title fw-bold color-palette-4">Dāna Dhamma & SMB</h4>
                        <p class="card-text">Dialokasikan untuk penyelenggaraan kelas Dhamma, Sekolah Minggu (SMB), pembelian buku Dhamma, dan media pembelajaran.</p>
                        <span class="badge bg-secondary rounded-pill py-3 px-3 mt-2">Pendidikan</span>
                    </div>
                </div>

                <div class="col">
                    <div class="card h-100 shadow border-0 p-4 bg-glassmorph">
                        <i class="fa-solid fa-handshake-angle fs-1 mb-3 color-palette-6"></i>
                        <h4 class="card-title fw-bold color-palette-4">Dāna Bakti Sosial</h4>
                        <p class="card-text">Disalurkan penuh untuk kegiatan kemanusiaan, bantuan bencana, dan santunan kepada masyarakat yang membutuhkan.</p>
                        <span class="badge bg-secondary rounded-pill py-3 px-3 mt-2">Kemanusiaan</span>
                    </div>
                </div>

            </div>
        </div>
    </section>

    <section class="payment py-5 bg-light">
        <div class="container">
            <h2 class="fw-bold mb-4 border-bottom pb-2 text-center">Transfer Dāna Melalui Bank</h2>
            
            <div class="row justify-content-center g-4">
                
                <div class="col-md-6">
                    <div class="card shadow border-0 p-4">
                        <h4 class="fw-bold mb-3"><i class="fa-solid fa-building-columns me-2"></i> Bank BCA</h4>
                        <p class="mb-1 text-muted">Nomor Rekening:</p>
                        <div class="d-flex justify-content-between align-items-center bg-light p-3 rounded">
                            <h3 class="fw-bolder mb-0 color-palette-4">{{ bankDetails.bca.number }}</h3>
                            <button @click="copyText(bankDetails.bca.number)" class="btn bg-color-6 text-white btn-sm rounded-4">
                                <i class="fa-regular fa-copy me-1"></i> Salin
                            </button>
                        </div>
                        <p class="mt-2 mb-0">Atas Nama: **{{ bankDetails.bca.name }}**</p>
                    </div>
                </div>

                <div class="col-md-6">
                    <div class="card shadow border-0 p-4">
                        <h4 class="fw-bold mb-3"><i class="fa-solid fa-building-columns me-2"></i> Bank Mandiri</h4>
                        <p class="mb-1 text-muted">Nomor Rekening:</p>
                        <div class="d-flex justify-content-between align-items-center bg-light p-3 rounded">
                            <h3 class="fw-bolder mb-0 color-palette-4">{{ bankDetails.mandiri.number }}</h3>
                            <button @click="copyText(bankDetails.mandiri.number)" class="btn bg-color-6 text-white btn-sm rounded-4">
                                <i class="fa-regular fa-copy me-1"></i> Salin
                            </button>
                        </div>
                        <p class="mt-2 mb-0">Atas Nama: **{{ bankDetails.mandiri.name }}**</p>
                    </div>
                </div>
            </div>
            
            <p class="text-center mt-4 text-muted small">Semua dana yang masuk tercatat dan diaudit oleh tim Bendahara Vihara.</p>
        </div>
    </section>
    
    <section class="confirmation py-5 container">
        <h2 class="fw-bold mb-4 border-bottom pb-2 text-center">Konfirmasi Dāna (Opsional)</h2>
        
        <div class="row justify-content-center">
            <div class="col-md-8 text-center">
                <p class="lead">Setelah melakukan transfer, Anda dapat mengkonfirmasi dāna Anda agar tercatat dengan nama yang jelas, atau jika Anda ingin mendapatkan tanda terima (kwitansi).</p>
                <div class="mt-4">
                    <a :href="whatsappLink" target="_blank" class="btn bg-success text-white rounded-4 py-3 px-5 shadow fs-5 me-3">
                        <i class="fa-brands fa-whatsapp me-2"></i> Konfirmasi Via WhatsApp
                    </a>
                    <a href="#" class="btn btn-outline-dark rounded-4 py-3 px-5 fs-5">
                        Laporan Keuangan
                    </a>
                </div>
            </div>
        </div>
    </section>

    <Footer />
</template>

<script>
import Footer from '@/components/layout/Footer.vue';
import Navbar from '@/components/layout/Navbar.vue';

export default {
    name: 'Donation',
    components: {
        Navbar,
        Footer,
    },
    data() {
        return {
            bankDetails: {
                bca: { number: '1234567890', name: 'Yayasan Dhamma Surya Putra' },
                mandiri: { number: '0987654321', name: 'Vihara Dhamma Surya Putra' },
            },
            // Ganti dengan nomor WhatsApp Bendahara Vihara
            whatsappNumber: '6281234567890', 
            copyStatus: ''
        };
    },
    computed: {
        whatsappLink() {
            const message = `Sādhu. Saya ingin mengkonfirmasi Dāna untuk Vihara. (Mohon lampirkan bukti transfer dan tujuan dāna Anda.)`;
            return `https://wa.me/${this.whatsappNumber}?text=${encodeURIComponent(message)}`;
        }
    },
    methods: {
        copyText(text) {
            if (navigator.clipboard) {
                navigator.clipboard.writeText(text).then(() => {
                    alert('Nomor rekening berhasil disalin!');
                }).catch(err => {
                    console.error('Gagal menyalin:', err);
                    alert('Gagal menyalin. Silakan salin manual.');
                });
            } else {
                // Fallback untuk browser lama
                const textArea = document.createElement("textarea");
                textArea.value = text;
                document.body.appendChild(textArea);
                textArea.focus();
                textArea.select();
                try {
                    document.execCommand('copy');
                    alert('Nomor rekening berhasil disalin!');
                } catch (err) {
                    alert('Gagal menyalin. Silakan salin manual.');
                }
                document.body.removeChild(textArea);
            }
        }
    }
}
</script>

<style scoped>
.color-palette-6 {
    /* Pastikan ini sesuai dengan warna palet 6 Anda */
    color: #4a90e2; 
}
.payment .card {
    border-color: #ddd;
}
</style>