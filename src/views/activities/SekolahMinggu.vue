<script>
import Navbar from '@/components/Navbar.vue';
import Footer from '@/components/Footer.vue';
import EducationHero from '@/components/EducationHero.vue';

    export default{
            name: 'SchoolEvents',
            components: {
            Navbar,
            Footer,
            EducationHero,
        },
    }

</script>

<template>
    <Navbar />
    <section>
        <EducationHero />
        <div class="mt-5 pt-5 mb-5 pb-5">
            <div class="knowledge container mt-5 pt-5 mb-5 pt-5">
                <div class="header_knowladge text-center">
                    <h3 class="fw-bold fs-46">Lessons revolve around 4 areas</h3>
                    <p class="card-text fs-5">Diverse lessons around 4 subjects: Math, Dhamma Class, English, drawing help <br>
                 children improve their <span class="text-wavy">comprehensive knowledge</span></p>
                </div>
                <div class="body_footer_knowledge pt-5 pb-5">
                    <div class="cta_knowledge d-flex align-items-center justify-content-center gap-4">
                        <a href="" class="btn btn-knowledge fw-semibold rounded-4 justify-content-evenly pt-3 pb-3 py-5 px-5 gap-4 d-flex align-items-center">
                            <div class="cta-logo rounded-4">
                                <img class="p-2" src="../../assets/img/logo/math.svg" alt="">
                            </div>
                            Math
                        </a>
                        <a href="" class="btn btn-knowledge fw-semibold rounded-4 justify-content-evenly pt-3 pb-3 py-5 px-5 gap-4 d-flex align-items-center">
                            <div class="bg-cta-logo-2 rounded-4">
                                <img class="p-2" src="../../assets/img/logo/open-book.svg" alt="">
                            </div>
                            Dhamma Class
                        </a>
                        <a href="" class="btn btn-knowledge fw-semibold rounded-4 justify-content-evenly pt-3 pb-3 py-5 px-5 gap-4 d-flex align-items-center">
                            <div class="bg-cta-logo-3 rounded-4">
                                <img class="p-2" src="../../assets/img/logo/layer1.svg" alt="">
                            </div>
                            English
                        </a>
                        <a href="" class="btn btn-knowledge fw-semibold rounded-4 justify-content-evenly pt-3 pb-3 py-5 px-5 gap-4 d-flex align-items-center">
                            <div class="bg-cta-logo-4 rounded-4">
                                <img class="p-2" src="../../assets/img/logo/palette.svg" alt="">
                            </div>
                            Art
                        </a>
                        
                    </div>
                </div>
            </div>
        </div>
        <div class="pt-5 mt-5 mb-5 pb-3">
            <div class="card border-0 bg-color-6 pt-md-5 rounded-0 m-0 ">
                <div class="">
                    <div class="wrap-icon">
                        <img class="position-absolute bottom-0 start-0 translate-middle-y" src="../../assets/img/logo/Vector(1).svg" alt="">
                        <img class="position-absolute bottom-50 start-0 translate-middle-y" src="../../assets/img/logo/Vector.svg" alt="">
                        <img class="position-absolute bottom-50 start-0 translate-middle-y" src="../../assets/img/logo/4.svg" alt="">
                        <img class="position-absolute bottom-50 end-50 translate-middle-y" src="../../assets/img/logo/3.svg" alt="">
                        <img class="position-absolute bottom-50 start-0 translate-middle-y" src="../../assets/img/logo/1.svg" alt="">
                        <img class="position-absolute swing bottom-10 end-50 translate-middle-y" src="../../assets/img/logo/icon-2.svg" alt="">
                        <img class="position-absolute top-50 end-50 translate-middle-y" src="../../assets/img/logo/icon-1.svg" alt="">
                    </div>
                    <img src="../../assets/img/boys.svg" class="card-img w-50" alt="...">
                </div>
                <div class="card-img-overlay top-50 start-50 end-0 translate-middle-y w-50">
                    <h5 class="card-title fw-bold fs-46">What will your child get after studying at SMB VDSP ?</h5>
                    <ul class="list-group fs-24 mt-5">
                        <li class="list-group-item d-flex text-center align-items-center gap-4">
                            <i class="fa-solid fa-circle-check" style="color: #74C0FC;"></i>
                            <p class="m-0">Master program knowledge at school</p>
                        </li>
                        <li class="list-group-item d-flex text-center align-items-center gap-4">
                            <i class="fa-solid fa-circle-check" style="color: #74C0FC;"></i>
                            <p class="m-0">The ability to criticize knowledge increases</p>
                        </li>
                        <li class="list-group-item d-flex align-items-center gap-4">
                            <i class="fa-solid fa-circle-check" style="color: #74C0FC;"></i>
                            <p class="m-0">Respond confidently when encountering difficult situations</p>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </section>
    <section class="profit-class">
        <div class="container">
            <div class="header-text pt-5 pb-5">
                <h3 class="fw-bold fs-46 text-center">Why should you choose SMB VDSP?</h3>
            </div>
            <div class="body d-flex gap-4 text-center">
                <div class="card bg-glassmorph rounded-5" style="max-width: 350px;">
                    <div class="card-body">
                        <img src="../../assets/img/logo/teacher.svg" class="card-img img-fluid" alt="">
                        <h4 class="card-title pt-4 pb-4">Experienced teacher</h4>
                        <p class="card-text">Instructors from all over Vietnam and around the world, providing quality learning experiences and helping students develop their full potential</p>
                    </div>
                </div>
                <div class="card bg-glassmorph rounded-5" style="max-width: 350px;">
                    <div class="card-body">
                        <img src="../../assets/img/logo/storyteling.svg" class="card-img img-fluid" alt="">
                        <h4 class="card-title pt-4 pb-4">Creative program</h4>
                        <p class="card-text">Flexible payment, suitable to personal financial situation and study schedule. Pay monthly, by course or “study now, pay later”</p>
                    </div>
                </div>
                <div class="card bg-glassmorph rounded-5" style="max-width: 350px;">
                    <div class="card-body">
                        <img src="../../assets/img/logo/cost.svg" class="card-img img-fluid" alt="">
                        <h4 class="card-title pt-4 pb-4">Appropriate cost</h4>
                        <p class="card-text">Free timeless</p>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <Footer />
</template>

<style>
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