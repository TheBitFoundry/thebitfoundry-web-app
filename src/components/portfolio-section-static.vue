<template>
    <!-- Portfolio Grid -->
        <section id="portfolio-grid" class="section-1 showcase portfolio blog-grid filter-section">
            <div class="overflow-holder">
                <div class="container">
                    <div class="row text-center intro">
                        <div class="col-12">
                            <h2 class="mb-0">View some of our work</h2>
                        </div>
                    </div>
                    <div class="row justify-content-center text-center">
                        <div class="col-12">
                            <div class="btn-group btn-group-toggle" data-toggle="buttons">
                                <label v-for="item in this.projectTags"
                                       v-bind:key="item.title" class="btn">

                                    <input type="radio" :value="item.title" class="btn-filter-item">
                                    <span>{{ item.title }}</span>
                                </label>
                            </div>
                        </div>
                    </div>
                    <div class="row items filter-items">
                        <!-- Portfolio Item -->
                       <div class="col-12 col-md-6 col-lg-4 item filter-item" v-for="project in projects"
                            v-bind:key="project.title"
                            :data-groups="pullTagsFromProject(project)">
                            <div class="row card p-0 text-center" style="margin-bottom: 100px;">
                                <div class="gallery">
                                    <a href="assets/images/news-8-h.jpg" class="image-over">
                                        <img :src="project.imageUrl" alt="The BitFoundry">
                                    </a>
                                </div>
                                <div class="card-caption col-12 p-0">
                                    <div class="card-body">
                                        <h4 class="m-0">{{ project.title }}</h4>
                                    </div>
                                    <div class="card-footer d-lg-flex align-items-center justify-content-center">
                                        <p>{{ project.excerpt }}</p>
                                    </div>
                                </div>
                            </div>
                       </div>
                        <!-- END -- Portfolio Item -->

                        <div class="col-1 filter-sizer"></div>
                    </div>
                </div>
            </div>

<!--            <div class="row">-->
<!--                <div class="col-12">-->
<!--                    <nav>-->
<!--                        <ul class="pagination justify-content-center">-->
<!--                            <li class="page-item">-->
<!--                                <a class="page-link" href="#" tabindex="-1">-->
<!--                                    <i class="icon-arrow-left"></i>-->
<!--                                </a>-->
<!--                            </li>-->
<!--                            <li class="page-item"><a class="page-link" href="#">1</a></li>-->
<!--                            <li class="page-item"><a class="page-link" href="#">2</a></li>-->
<!--                            <li class="page-item active"><a class="page-link" href="#">3</a></li>-->
<!--                            <li class="page-item"><a class="page-link" href="#">4</a></li>-->
<!--                            <li class="page-item">-->
<!--                                <a class="page-link" href="#">-->
<!--                                    <i class="icon-arrow-right"></i>-->
<!--                                </a>-->
<!--                            </li>-->
<!--                        </ul>-->
<!--                    </nav>-->
<!--                </div>-->
<!--            </div>-->

        </section>
</template>

<style>

.blog-item {
    width: 33.30% !important;
    float: left !important;
    padding:10px;
}

@media(max-width: 767px) {

.blog-item {
width: 100% !important;
float: left !important;
padding:10px;

} }

</style>

<script>
    export default {
        name: 'portfolio-section-static',
        data() {
            return {
                projectTagArray: [],
                displayProjectTags: []
            }
        },
        props: {
            projects: {
                type: Array
            },
            projectTags: {
                type: Array
            }
        },
        watch: {
            projectTags: function() {
                this.displayProjectTags = [];
                this.projectTags.forEach(f => {
                    this.displayProjectTags.push(f.title);
                    console.log(f.title);
                });
            }
        },
        mounted() {
            this.displayProjectTags = this.projectTags;
        },
        computed: {
        },
        methods: {
            pullTagsFromProject: function(project) {
                let startSegment = '["';
                let endSegment = "\"]";
                let tags = []
                project.projectTags.forEach(f => {
                    tags.push(f.title)
                });
                return startSegment.concat(tags.join("\",\""), endSegment);
            },
            DoThingsInAWhile: function (project) {
                console.log(document.getElementById(project.title));
                document.getElementById(project.title).setAttribute("data-groups", "asdf");
                console.log("hello from the other side...")
            }
        }
    };

</script>

