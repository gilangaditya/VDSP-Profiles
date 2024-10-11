
<template>
    <Navbar />
        <section>
            <div class="header mt-5 pt-5 ">
                <div class="container mt-5 pt-5 ">
                    <h3 class="fw-semibold fs-64">Mari lihat apa saja <br> kegiatan kami di SMB VDSP! 🫰</h3>
                </div>
            </div>
            <div class="topic_filters container mt-5 mb-2 pt-5 mb-2">
                <div class="body_topic_filter">
                    <div class="filters mb-5 d-flex gap-5 align-items-center">
                        <h5 class="fw-semibold">Olah Raga</h5>
                        <a href="" class="btn btn-outline-success rounded-pill">All</a>
                        <a href="" class="btn btn-secondary rounded-pill">Tarik Tambang</a>
                        <a href="" class="btn btn-secondary rounded-pill">Lomba Lari</a>
                        <a href="" class="btn btn-secondary rounded-pill">Balap Karung</a>
                        <a href="" class="btn btn-secondary rounded-pill">Kelereng</a>
                    </div>
                    <div class="filters">
                        <h5 class="fw-semibold">Games</h5>
                    </div>
                </div>
            </div>
            <div class="content mt-5 pt-5">
                <div class="container-fluid">
                    <div class="d-flex row">
                        <div class="side-right p-0 col">
                            <div class="p-5 m-2">
                                <div class="card-text">
                                <p class="">From a studio in London to a global brand with over 400 outlets</p>
                                <p>When we started Avion, the idea was simple. Make high quality furniture affordable and available for the mass market. </p>
                                <p>Handmade, and lovingly crafted furniture and homeware is what we live, breathe and design so our Chelsea boutique become the hotbed for the London interior design community.</p>
                            </div>
                            <div class="card-footer">
                                <a href="" class="btn btn-work">Get in touch</a>
                            </div>
                            </div>
                        </div>
                        <div class="side-left p-0 col">
                            <div class="">
                                <img src="../assets/img/vihara6-5cd8a03e3ba7f76c1156ad77.jpg" class="img-fluid" alt="">
                            </div>
                        </div>
                    </div>
                    <div class="d-flex row">
                        <div class="side-right p-0 col">
                            <div class="">
                                <img src="../assets/img/vihara6-5cd8a03e3ba7f76c1156ad77.jpg" class="img-fluid" alt="">
                            </div>  
                        </div>
                        <div class="side-left p-0 col">
                            <div class="p-5 m-2">
                                <div class="card-text">
                                <p class="">From a studio in London to a global brand with over 400 outlets</p>
                                <p>When we started Avion, the idea was simple. Make high quality furniture affordable and available for the mass market. </p>
                                <p>Handmade, and lovingly crafted furniture and homeware is what we live, breathe and design so our Chelsea boutique become the hotbed for the London interior design community.</p>
                            </div>
                            <div class="card-footer">
                                <a href="" class="btn btn-work">Get in touch</a>
                            </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    <Footer />
</template>

<script>
    import Footer from '@/components/Footer.vue';
    import Navbar from '@/components/Navbar.vue';

    export default{
        name: 'Activity',
        components: {
        Navbar,
        Footer,
    },
    }
</script>