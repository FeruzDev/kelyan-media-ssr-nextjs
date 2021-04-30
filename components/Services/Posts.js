import React from 'react';
import Link from "next/link";


const Posts = () => {

   return (
      <div className="Posts">
         <div className="container">



            <h3
                data-aos="fade-right"
                data-aos-easing="linear"
                data-aos-duration="1000"
                className="styles_typicalWrapper__1_Uvh">СТАТЬИ</h3>

            <div className="posts-content">
               <div className="row">
                  <div className="col-md-4" >
                     <div className="card border-0 h-100 bg-transparent text-white"
>

                        <div className="card-header border-0 p-0 d-flex justify-content-between align-items-center">
                           <p className="mb-0">KELYAN<span>MEDIA</span></p>
                           <div className="tag">SMM</div>
                        </div>
                        <div className="card-body p-0 border-0">
                           <div className="overflow-hidden"><img src="/img/rec3.png" alt="" className="w-100"/></div>

                           <h4>Как раскрутить цветочный магазин в Инстаграме</h4>
                        </div>
                        <div className="card-footer border-0 p-0 d-flex justify-content-between align-items-center">
                           <div>SMM</div>
                           <div>07.02.2021</div>
                        </div>
                         <div className="blogLine"></div>
                         <Link href="/blog/1" ><a className="blogLink">Подробнее</a></Link>

                     </div>

                  </div>
                  <div className="col-md-4">
                     <div className="card h-100 bg-transparent text-white">
                        <div className="card-header p-0 d-flex justify-content-between align-items-center">
                           <p className="mb-0">KELYAN<span>MEDIA</span></p>
                           <div className="tag">SMM</div>
                        </div>
                        <div className="card-body p-0">
                           <div className="overflow-hidden"><img src="/img/rec11.png" alt="" className="w-100"/></div>

                           <h4>Масслайкинг в Инстаграме: Что это такое?</h4>
                        </div>
                        <div className="card-footer p-0 d-flex justify-content-between align-items-center">
                           <div>SMM</div>
                           <div>07.02.2021</div>
                        </div>

                         <div className="blogLine"></div>
                         <Link href="#" ><a className="blogLink">Подробнее</a></Link>

                     </div>
                  </div>
                  <div className="col-md-4">
                     <div className="card h-100 bg-transparent text-white">

                        <div className="card-header p-0 d-flex justify-content-between align-items-center">
                           <p className="mb-0">KELYAN<span>MEDIA</span></p>
                           <div className="tag">SMM</div>
                        </div>
                        <div className="card-body p-0">
                           <div className="overflow-hidden"><img src="/img/rec22.png" alt="" className="w-100"/></div>

                           <h4>Как раскрутить магазин одежды в Инстаграме</h4>
                        </div>
                        <div className="card-footer p-0 d-flex justify-content-between align-items-center">
                           <div>SMM</div>
                           <div>07.02.2021</div>
                        </div>
                         <div className="blogLine"/>
                         <Link href="#" ><a className="blogLink">Подробнее</a></Link>

                     </div>
                  </div>
                  <div className="col-md-4">
                     <div className="card h-100 bg-transparent text-white" >
                        <div className="card-header p-0 d-flex justify-content-between align-items-center">
                           <p className="mb-0">KELYAN<span>MEDIA</span></p>
                           <div className="tag">SMM</div>
                        </div>
                        <div className="card-body p-0">
                           <div className="overflow-hidden"><img src="/img/rec3.png" alt="" className="w-100"/></div>

                           <h4>Как раскрутить цветочный магазин в Инстаграме</h4>
                        </div>
                        <div className="card-footer p-0 d-flex justify-content-between align-items-center">
                           <div>SMM</div>
                           <div>07.02.2021</div>
                        </div>
                         <div className="blogLine" />
                         <Link href="#"><a className="blogLink">Подробнее</a></Link>

                     </div>
                  </div>
                  <div className="col-md-4">
                     <div className="card h-100 bg-transparent text-white" >

                        <div className="card-header p-0 d-flex justify-content-between align-items-center">
                           <p className="mb-0">KELYAN<span>MEDIA</span></p>
                           <div className="tag">SMM</div>
                        </div>
                        <div className="card-body p-0">
                           <div className="overflow-hidden"><img src="/img/rec11.png" alt="" className="w-100"/></div>

                           <h4>Масслайкинг в Инстаграме: Что это такое?</h4>
                        </div>
                        <div className="card-footer p-0 d-flex justify-content-between align-items-center">
                           <div>SMM</div>
                           <div>07.02.2021</div>
                        </div>
                         <div className="blogLine" />
                         <Link href="#"><a className="blogLink">Подробнее</a></Link>

                     </div>
                  </div>
                  <div className="col-md-4">
                     <div className="card h-100 bg-transparent text-white" >

                        <div className="card-header p-0 d-flex justify-content-between align-items-center">
                           <p className="mb-0">KELYAN<span>MEDIA</span></p>
                           <div className="tag">SMM</div>
                        </div>
                        <div className="card-body p-0">
                           <div className="overflow-hidden"><img src="/img/rec22.png" alt="" className="w-100"/></div>

                           <h4>Как раскрутить магазин одежды в Инстаграме</h4>
                        </div>
                        <div className="card-footer p-0 d-flex justify-content-between align-items-center">
                           <div>SMM</div>
                           <div>07.02.2021</div>
                        </div>
                         <div className="blogLine" />
                         <Link href="#"><a className="blogLink">Подробнее</a></Link>

                     </div>
                  </div>

               </div>
            </div>
         </div>
      </div>
   );
};

export default Posts;