import React from 'react'
import { Link } from 'react-router-dom'

const Blogsingle = () => {
    return (
        <>
            <main id="main"> <br />

                {/* <!-- ======= Breadcrumbs ======= --> */}
                <section id="breadcrumbs" className="breadcrumbs">
                    <div className="container">

                        <div className="d-flex justify-content-between align-items-center">
                            <h2>Blog</h2>
                            <ol>
                                <li><Link to="index.html">Home</Link></li>
                                <li>Blog</li>
                            </ol>
                        </div>

                    </div>
                </section>
                {/* <!-- End Breadcrumbs --> */}

                {/* <!-- ======= Blog Section ======= --> */}
                <section id="blog" className="blog">
                    <div className="container">

                        <div className="row">

                            <div className="col-lg-8 entries">

                                <article className="entry entry-single" data-aos="fade-up">

                                    <div className="entry-img">
                                        <img src="assets/img/blog-1.jpg" alt="" className="img-fluid" />
                                    </div>

                                    <h2 className="entry-title">
                                        <Link to="/blogsingle">Dolorum optio tempore voluptas dignissimos cumque fuga qui quibusdam quia reiciendis</Link>
                                    </h2>

                                    <div className="entry-meta">
                                        <ul>
                                            <li className="d-flex align-items-center"><i className="icofont-user"></i> <Link to="/blogsingle">John Doe</Link></li>
                                            <li className="d-flex align-items-center"><i className="icofont-wall-clock"></i> <Link to="/blogsingle"><time datetime="2020-01-01">Jan 1, 2020</time></Link></li>
                                            <li className="d-flex align-items-center"><i className="icofont-comment"></i> <Link to="/blogsingle">12 Comments</Link></li>
                                        </ul>
                                    </div>

                                    <div className="entry-content">
                                        <p>
                                            Similique neque nam consequuntur ad non maxime aliquam quas. Quibusdam animi praesentium. Aliquam et laboriosam eius aut nostrum quidem aliquid dicta.
                                            Et eveniet enim. Qui velit est ea dolorem doloremque deleniti aperiam unde soluta. Est cum et quod quos aut ut et sit sunt. Voluptate porro consequatur assumenda perferendis dolore.
                                        </p>

                                        <p>
                                            Sit repellat hic cupiditate hic ut nemo. Quis nihil sunt non reiciendis. Sequi in accusamus harum vel aspernatur. Excepturi numquam nihil cumque odio. Et voluptate cupiditate.
                                        </p>

                                        <blockquote>
                                            <i className="icofont-quote-left quote-left"></i>
                                            <p>
                                                Et vero doloremque tempore voluptatem ratione vel aut. Deleniti sunt animi aut. Aut eos aliquam doloribus minus autem quos.
                                            </p>
                                            <i className="las la-quote-right quote-right"></i>
                                            <i className="icofont-quote-right quote-right"></i>
                                        </blockquote>

                                        <p>
                                            Sed quo laboriosam qui architecto. Occaecati repellendus omnis dicta inventore tempore provident voluptas mollitia aliquid. Id repellendus quia. Asperiores nihil magni dicta est suscipit perspiciatis. Voluptate ex rerum assumenda dolores nihil quaerat.
                                            Dolor porro tempora et quibusdam voluptas. Beatae aut at ad qui tempore corrupti velit quisquam rerum. Omnis dolorum exercitationem harum qui qui blanditiis neque.
                                            Iusto autem itaque. Repudiandae hic quae aspernatur ea neque qui. Architecto voluptatem magni. Vel magnam quod et tempora deleniti error rerum nihil tempora.
                                        </p>

                                        <h3>Et quae iure vel ut odit alias.</h3>
                                        <p>
                                            Officiis animi maxime nulla quo et harum eum quis a. Sit hic in qui quos fugit ut rerum atque. Optio provident dolores atque voluptatem rem excepturi molestiae qui. Voluptatem laborum omnis ullam quibusdam perspiciatis nulla nostrum. Voluptatum est libero eum nesciunt aliquid qui.
                                            Quia et suscipit non sequi. Maxime sed odit. Beatae nesciunt nesciunt accusamus quia aut ratione aspernatur dolor. Sint harum eveniet dicta exercitationem minima. Exercitationem omnis asperiores natus aperiam dolor consequatur id ex sed. Quibusdam rerum dolores sint consequatur quidem ea.
                                            Beatae minima sunt libero soluta sapiente in rem assumenda. Et qui odit voluptatem. Cum quibusdam voluptatem voluptatem accusamus mollitia aut atque aut.
                                        </p>
                                        <img src="assets/img/blog-5.jpg" className="img-fluid" alt="" />

                                        <h3>Ut repellat blanditiis est dolore sunt dolorum quae.</h3>
                                        <p>
                                            Rerum ea est assumenda pariatur quasi et quam. Facilis nam porro amet nostrum. In assumenda quia quae a id praesentium. Quos deleniti libero sed occaecati aut porro autem. Consectetur sed excepturi sint non placeat quia repellat incidunt labore. Autem facilis hic dolorum dolores vel.
                                            Consectetur quasi id et optio praesentium aut asperiores eaque aut. Explicabo omnis quibusdam esse. Ex libero illum iusto totam et ut aut blanditiis. Veritatis numquam ut illum ut a quam vitae.
                                        </p>
                                        <p>
                                            Alias quia non aliquid. Eos et ea velit. Voluptatem maxime enim omnis ipsa voluptas incidunt. Nulla sit eaque mollitia nisi asperiores est veniam.
                                        </p>

                                    </div>

                                    <div className="entry-footer clearfix">
                                        <div className="float-left">
                                            <i className="icofont-folder"></i>
                                            <ul className="cats">
                                                <li><Link to="#">Business</Link></li>
                                            </ul>

                                            <i className="icofont-tags"></i>
                                            <ul className="tags">
                                                <li><Link to="#">Creative</Link></li>
                                                <li><Link to="#">Tips</Link></li>
                                                <li><Link to="#">Marketing</Link></li>
                                            </ul>
                                        </div>

                                        <div className="float-right share">
                                            <Link to="" title="Share on Twitter"><i className="icofont-twitter"></i></Link>
                                            <Link to="" title="Share on Facebook"><i className="icofont-facebook"></i></Link>
                                            <Link to="" title="Share on Instagram"><i className="icofont-instagram"></i></Link>
                                        </div>

                                    </div>

                                </article>
                                {/* <!-- End blog entry --> */}

                                <div className="blog-author clearfix" data-aos="fade-up">
                                    <img src="assets/img/blog-author.jpg" className="rounded-circle float-left" alt="" />
                                    <h4>Jane Smith</h4>
                                    <div className="social-links">
                                        <Link to="https://twitters.com/#"><i className="icofont-twitter"></i></Link>
                                        <Link to="https://facebook.com/#"><i className="icofont-facebook"></i></Link>
                                        <Link to="https://instagram.com/#"><i className="icofont-instagram"></i></Link>
                                    </div>
                                    <p>
                                        Itaque quidem optio quia voluptatibus dolorem dolor. Modi eum sed possimus accusantium. Quas repellat voluptatem officia numquam sint aspernatur voluptas. Esse et accusantium ut unde voluptas.
                                    </p>
                                </div>
                                {/* <!-- End blog author bio --> */}

                                <div className="blog-comments" data-aos="fade-up">

                                    <h4 className="comments-count">8 Comments</h4>

                                    <div id="comment-1" className="comment clearfix">
                                        <img src="assets/img/comments-1.jpg" className="comment-img  float-left" alt="" />
                                        <h5><Link to="">Georgia Reader</Link> <Link to="#" className="reply"><i className="icofont-reply"></i> Reply</Link></h5>
                                        <time datetime="2020-01-01">01 Jan, 2020</time>
                                        <p>
                                            Et rerum totam nisi. Molestiae vel quam dolorum vel voluptatem et et. Est ad aut sapiente quis molestiae est qui cum soluta.
                                            Vero aut rerum vel. Rerum quos laboriosam placeat ex qui. Sint qui facilis et.
                                        </p>

                                    </div>
                                    {/* <!-- End comment #1 --> */}

                                    <div id="comment-2" className="comment clearfix">
                                        <img src="assets/img/comments-2.jpg" className="comment-img  float-left" alt="" />
                                        <h5><Link to="">Aron Alvarado</Link> <Link to="#" className="reply"><i className="icofont-reply"></i> Reply</Link></h5>
                                        <time datetime="2020-01-01">01 Jan, 2020</time>
                                        <p>
                                            Ipsam tempora sequi voluptatem quis sapiente non. Autem itaque eveniet saepe. Officiis illo ut beatae.
                                        </p>

                                        <div id="comment-reply-1" className="comment comment-reply clearfix">
                                            <img src="assets/img/comments-3.jpg" className="comment-img  float-left" alt="" />
                                            <h5><Link to="">Lynda Small</Link> <Link to="#" className="reply"><i className="icofont-reply"></i> Reply</Link></h5>
                                            <time datetime="2020-01-01">01 Jan, 2020</time>
                                            <p>
                                                Enim ipsa eum fugiat fuga repellat. Commodi quo quo dicta. Est ullam aspernatur ut vitae quia mollitia id non. Qui ad quas nostrum rerum sed necessitatibus aut est. Eum officiis sed repellat maxime vero nisi natus. Amet nesciunt nesciunt qui illum omnis est et dolor recusandae.

                                                Recusandae sit ad aut impedit et. Ipsa labore dolor impedit et natus in porro aut. Magnam qui cum. Illo similique occaecati nihil modi eligendi. Pariatur distinctio labore omnis incidunt et illum. Expedita et dignissimos distinctio laborum minima fugiat.

                                                Libero corporis qui. Nam illo odio beatae enim ducimus. Harum reiciendis error dolorum non autem quisquam vero rerum neque.
                                            </p>

                                            <div id="comment-reply-2" className="comment comment-reply clearfix">
                                                <img src="assets/img/comments-4.jpg" className="comment-img  float-left" alt="" />
                                                <h5><Link to="">Sianna Ramsay</Link> <Link to="#" className="reply"><i className="icofont-reply"></i> Reply</Link></h5>
                                                <time datetime="2020-01-01">01 Jan, 2020</time>
                                                <p>
                                                    Et dignissimos impedit nulla et quo distinctio ex nemo. Omnis quia dolores cupiditate et. Ut unde qui eligendi sapiente omnis ullam. Placeat porro est commodi est officiis voluptas repellat quisquam possimus. Perferendis id consectetur necessitatibus.
                                                </p>

                                            </div>
                                            {/* <!-- End comment reply #2--> */}

                                        </div>
                                        {/* <!-- End comment reply #1--> */}

                                    </div>
                                    {/* <!-- End comment #2--> */}

                                    <div id="comment-3" className="comment clearfix">
                                        <img src="assets/img/comments-5.jpg" className="comment-img  float-left" alt="" />
                                        <h5><Link to="">Nolan Davidson</Link> <Link to="#" className="reply"><i className="icofont-reply"></i> Reply</Link></h5>
                                        <time datetime="2020-01-01">01 Jan, 2020</time>
                                        <p>
                                            Distinctio nesciunt rerum reprehenderit sed. Iste omnis eius repellendus quia nihil ut accusantium tempore. Nesciunt expedita id dolor exercitationem aspernatur aut quam ut. Voluptatem est accusamus iste at.
                                            Non aut et et esse qui sit modi neque. Exercitationem et eos aspernatur. Ea est consequuntur officia beatae ea aut eos soluta. Non qui dolorum voluptatibus et optio veniam. Quam officia sit nostrum dolorem.
                                        </p>

                                    </div>
                                    {/* <!-- End comment #3 --> */}

                                    <div id="comment-4" className="comment clearfix">
                                        <img src="assets/img/comments-6.jpg" className="comment-img  float-left" alt="" />
                                        <h5><Link to="">Kay Duggan</Link> <Link to="#" className="reply"><i className="icofont-reply"></i> Reply</Link></h5>
                                        <time datetime="2020-01-01">01 Jan, 2020</time>
                                        <p>
                                            Dolorem atque aut. Omnis doloremque blanditiis quia eum porro quis ut velit tempore. Cumque sed quia ut maxime. Est ad aut cum. Ut exercitationem non in fugiat.
                                        </p>

                                    </div>
                                    {/* <!-- End comment #4 --> */}

                                    <div className="reply-form">
                                        <h4>Leave a Reply</h4>
                                        <p>Your email address will not be published. Required fields are marked * </p>
                                        <form action="">
                                            <div className="row">
                                                <div className="col-md-6 form-group">
                                                    <input name="name" type="text" className="form-control" placeholder="Your Name*" />
                                                </div>
                                                <div className="col-md-6 form-group">
                                                    <input name="email" type="text" className="form-control" placeholder="Your Email*" />
                                                </div>
                                            </div>
                                            <div className="row">
                                                <div className="col form-group">
                                                    <input name="website" type="text" className="form-control" placeholder="Your Website" />
                                                </div>
                                            </div>
                                            <div className="row">
                                                <div className="col form-group">
                                                    <textarea name="comment" className="form-control" placeholder="Your Comment*"></textarea>
                                                </div>
                                            </div>
                                            <button type="submit" className="btn btn-primary">Post Comment</button>

                                        </form>

                                    </div>

                                </div>
                                {/* <!-- End blog comments --> */}

                            </div>
                            {/* <!-- End blog entries list --> */}

                            <div className="col-lg-4">

                                <div className="sidebar" data-aos="fade-left">

                                    <h3 className="sidebar-title">Search</h3>
                                    <div className="sidebar-item search-form">
                                        <form action="">
                                            <input type="text" />
                                            <button type="submit"><i className="icofont-search"></i></button>
                                        </form>

                                    </div>
                                    {/* <!-- End sidebar search formn--> */}

                                    <h3 className="sidebar-title">Categories</h3>
                                    <div className="sidebar-item categories">
                                        <ul>
                                            <li><Link to="#">General <span>(25)</span></Link></li>
                                            <li><Link to="#">Lifestyle <span>(12)</span></Link></li>
                                            <li><Link to="#">Travel <span>(5)</span></Link></li>
                                            <li><Link to="#">Design <span>(22)</span></Link></li>
                                            <li><Link to="#">Creative <span>(8)</span></Link></li>
                                            <li><Link to="#">Educaion <span>(14)</span></Link></li>
                                        </ul>

                                    </div>
                                    {/* <!-- End sidebar categories--> */}

                                    <h3 className="sidebar-title">Recent Posts</h3>
                                    <div className="sidebar-item recent-posts">
                                        <div className="post-item clearfix">
                                            <img src="assets/img/blog-recent-posts-1.jpg" alt="" />
                                            <h4><Link to="/blogsingle">Nihil blanditiis at in nihil autem</Link></h4>
                                            <time datetime="2020-01-01">Jan 1, 2020</time>
                                        </div>

                                        <div className="post-item clearfix">
                                            <img src="assets/img/blog-recent-posts-2.jpg" alt="" />
                                            <h4><Link to="/blogsingle">Quidem autem et impedit</Link></h4>
                                            <time datetime="2020-01-01">Jan 1, 2020</time>
                                        </div>

                                        <div className="post-item clearfix">
                                            <img src="assets/img/blog-recent-posts-3.jpg" alt="" />
                                            <h4><Link to="/blogsingle">Id quia et et ut maxime similique occaecati ut</Link></h4>
                                            <time datetime="2020-01-01">Jan 1, 2020</time>
                                        </div>

                                        <div className="post-item clearfix">
                                            <img src="assets/img/blog-recent-posts-4.jpg" alt="" />
                                            <h4><Link to="/blogsingle">Laborum corporis quo dara net para</Link></h4>
                                            <time datetime="2020-01-01">Jan 1, 2020</time>
                                        </div>

                                        <div className="post-item clearfix">
                                            <img src="assets/img/blog-recent-posts-5.jpg" alt="" />
                                            <h4><Link to="/blogsingle">Et dolores corrupti quae illo quod dolor</Link></h4>
                                            <time datetime="2020-01-01">Jan 1, 2020</time>
                                        </div>

                                    </div>
                                    {/* <!-- End sidebar recent posts--> */}

                                    <h3 className="sidebar-title">Tags</h3>
                                    <div className="sidebar-item tags">
                                        <ul>
                                            <li><Link to="#">App</Link></li>
                                            <li><Link to="#">IT</Link></li>
                                            <li><Link to="#">Business</Link></li>
                                            <li><Link to="#">Business</Link></li>
                                            <li><Link to="#">Mac</Link></li>
                                            <li><Link to="#">Design</Link></li>
                                            <li><Link to="#">Office</Link></li>
                                            <li><Link to="#">Creative</Link></li>
                                            <li><Link to="#">Studio</Link></li>
                                            <li><Link to="#">Smart</Link></li>
                                            <li><Link to="#">Tips</Link></li>
                                            <li><Link to="#">Marketing</Link></li>
                                        </ul>

                                    </div>
                                    {/* <!-- End sidebar tags--> */}

                                </div>
                                {/* <!-- End sidebar --> */}

                            </div>
                            {/* <!-- End blog sidebar --> */}

                        </div>

                    </div>
                </section>
                {/* <!-- End Blog Section --> */}

            </main>
            {/* <!-- End #main --> */}
        </>
    )
}

export default Blogsingle