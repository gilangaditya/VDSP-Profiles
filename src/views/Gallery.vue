<template>
    <Navbar />

    <section class="page-header bg-white py-5">
        <div class="container text-center">
            <h1 class="fw-light display-5 pt-5 color-palette-4">Galeri Vihara Dhamma Surya Putra</h1>
            <p class="lead color-palette-3">Dokumentasi momen-momen suci, kebersamaan umat, dan keindahan arsitektur Vihara kami.</p>
        </div>
    </section>
    
    <hr class="container my-4">

    <section class="gallery-filters container mt-4 pb-5">
        <div class="filters d-flex gap-3 align-items-center flex-wrap justify-content-center">
            
            <button 
                v-for="cat in categories" 
                :key="cat"
                @click="filterGallery(cat)" 
                :class="['btn', 'rounded-pill', 'px-4', 'shadow-sm', currentFilter === cat ? 'bg-color-6 text-white fw-bold' : 'btn-outline-secondary']">
                {{ cat }}
            </button>
            
        </div>
    </section>

    <section class="gallery-grid container pb-5">
        
        <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 g-4">
            
            <div class="col" v-for="photo in filteredPhotos" :key="photo.id">
                <div class="card h-100 border-0 elegant-card" data-bs-toggle="modal" data-bs-target="#photoModal" @click="setSelectedPhoto(photo)">
                    <img :src="photo.url" class="card-img-top gallery-img" :alt="'Foto ' + photo.caption">
                    <div class="caption-overlay p-3 text-white">
                        <p class="mb-0 fw-semibold">{{ photo.caption }}</p>
                        <span class="small text-light">{{ photo.category }}</span>
                    </div>
                </div>
            </div>

            <div v-if="filteredPhotos.length === 0" class="col-12 text-center py-5">
                <h4 class="text-muted">Tidak ada foto dalam kategori "{{ currentFilter }}" saat ini.</h4>
            </div>

        </div>
    </section>
    
    <div class="modal fade" id="photoModal" tabindex="-1" aria-labelledby="photoModalLabel" aria-hidden="true">
        <div class="modal-dialog modal-xl modal-dialog-centered">
            <div class="modal-content bg-dark border-0">
                <div class="modal-header border-0">
                    <h5 class="modal-title text-white" id="photoModalLabel">{{ selectedPhoto.caption }}</h5>
                    <button type="button" class="btn-close btn-close-white" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body text-center">
                    <img :src="selectedPhoto.url" class="img-fluid modal-photo" :alt="selectedPhoto.caption">
                    <p class="text-white mt-3">{{ selectedPhoto.category }}</p>
                </div>
            </div>
        </div>
    </div>

    <Footer />
</template>

<script>
import Footer from '@/components/layout/Footer.vue';
import Navbar from '@/components/layout/Navbar.vue';

export default {
    name: 'Gallery',
    components: {
        Navbar,
        Footer,
    },
    data() {
        return {
            currentFilter: 'Semua',
            selectedPhoto: { url: '', caption: '', category: '' },
            categories: ['Semua', 'Perayaan', 'Sosial', 'Arsitektur', 'Sekolah Minggu'], // List kategori untuk V-FOR
            photos: [
                { id: 1, url: '/assets/img/gallery/waisak.jpg', caption: 'Pujabhakti Waisak 2569 BE', category: 'Perayaan' },
                { id: 2, url: '/assets/img/gallery/baksos.jpg', caption: 'Bakti Sosial Donor Darah', category: 'Sosial' },
                { id: 3, url: '/assets/img/gallery/bangunan.jpg', caption: 'Tampak Depan Dhammasala', category: 'Arsitektur' },
                { id: 4, url: '/assets/img/gallery/kathina.jpg', caption: 'Upacara Persembahan Kathina', category: 'Perayaan' },
                { id: 5, url: '/assets/img/gallery/smb.jpg', caption: 'Pelajaran Menggambar SMB', category: 'Sekolah Minggu' },
                { id: 6, url: '/assets/img/gallery/sembako.jpg', caption: 'Pembagian Sembako Komunitas', category: 'Sosial' },
            ]
        };
    },
    computed: {
        filteredPhotos() {
            if (this.currentFilter === 'Semua') {
                return this.photos;
            }
            return this.photos.filter(photo => photo.category === this.currentFilter);
        }
    },
    methods: {
        filterGallery(filter) {
            this.currentFilter = filter;
        },
        setSelectedPhoto(photo) {
            this.selectedPhoto = photo;
        }
    }
}
</script>

<style scoped>
/* Variabel Warna Placeholder (Ganti dengan Palet Anda) */
.color-palette-4 { color: #333; }
.color-palette-3 { color: #555; } 
.bg-color-6 { background-color: #7952b3; } /* Contoh: Warna Ungu/Dark Lavender */
.btn-outline-secondary { color: #555; border-color: #ddd; }


/* Elemen Galeri */
.gallery-img {
    width: 100%;
    height: 300px; /* Diperbesar sedikit untuk kesan premium */
    object-fit: cover;
    transition: transform 0.5s ease;
}

.elegant-card {
    cursor: pointer;
    position: relative;
    overflow: hidden;
    /* Efek bayangan minimalis */
    box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -2px rgba(0, 0, 0, 0.06); 
}

.elegant-card:hover .gallery-img {
    transform: scale(1.03); /* Zoom yang sangat halus saat hover */
}

/* Overlay Deskripsi Minimalis (Ditempatkan di bagian bawah) */
.caption-overlay {
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    /* Transparansi elegan dari bawah ke atas */
    background: linear-gradient(0deg, rgba(0, 0, 0, 0.75) 0%, rgba(0, 0, 0, 0) 100%);
    opacity: 1; /* Selalu terlihat agar lebih elegan */
    padding-top: 50px !important; 
    transition: opacity 0.5s ease;
}

/* Filter Tombol */
.filters .btn-outline-secondary {
    background-color: transparent;
    color: #555;
    border: 1px solid #ddd;
    transition: all 0.3s;
}

.filters .btn-outline-secondary:hover {
    background-color: #f5f5f5;
    color: #333;
    border-color: #ccc;
}
</style>