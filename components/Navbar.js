import React, {useState} from 'react';
import Link from "next/link";



const Navbar = (props) => {

    const [isToggled, setToggled] = useState(false);

    const toggleTrueFalse = () => setToggled(!isToggled);


    const [isOpen, setOpen] = useState(false);

    const OpenFalse = () => setOpen(!isOpen);
    return (

        <div className="Navbar ">

            <div className="sideMenu  ">

                <a href=" tel:+998333393334" target="_blank" >    <img className="telIcon" src="/img/icon/tel.png" alt=""/></a>

                <Link  href="/"><a className="navbar-brand ml-auto mr-auto">KELYAN<b >MEDIA</b></a></Link>
                <button onClick={toggleTrueFalse} className="  bg-transparent border-0 sibeBarToggle">
                    <img  src="../img/icon/burger.png" alt=""/>
                </button>
            </div>

            <div className="container-fluid mainNavbar">
             <div className="row">
                 <div className="col-md-3">
                     <Link className="navbar-brand" href="/"><a className="navbar-brand"><img src="/img/icon/logoB.png" className="mr-2 p-0  " alt="" style={{marginTop: "-3px", width: "28px", }}/>KELYAN<b >MEDIA</b></a></Link>
                 </div>
                 <div className="col-md-9">
                     <div className="navbar">
                         <div className="ml-3"><Link href='/' className={`nav-link `}><a className={`nav-link `}>Главная</a></Link></div>
                         <div  className="ml-3"><Link href='/cases.html' className={`nav-link `}><a className={`nav-link `}>Кейсы</a></Link></div>

                         <div className="dropdownFather">

                             <div className="dropdown-toggle" ><Link href='/' className={`nav-link`}><a className={`nav-link `}>Создание сайтов</a></Link></div>

                             <div     className="drobdownMenuFather d-none">

                                 <div className="dropdownMenu" >
                                     {/*style={{width: "500px !important", left: "-185px !important"}}*/}
                                     <div className="container">
                                         <div className="row align-items-baseline">
                                             <div className="col-md-6">
                                                 <div ><Link href='/create-landing.html' ><a className={`nav-link `}>Создание landing-page </a></Link></div>
                                                 <div ><Link href='/online-shopping.html' ><a className={`nav-link `}>Разработка интернет-магазинов </a></Link></div>
                                                 <div ><Link href='/corp-site.html' ><a className={`nav-link `}>Создание корпоративных сайтов </a></Link></div>
                                                 <div ><Link href='/visitok.html' ><a className={`nav-link `}>Создание сайта-визитки </a></Link></div>
                                                 <div ><Link href='/comp-site.html' ><a className={`nav-link `}>Создание сайта компании </a></Link></div>
                                                 <div ><Link href='/product-stie.html' ><a className={`nav-link `}>Создание продающих сайтов </a></Link></div>
                                                 <div ><Link href='/promo-site.html' ><a className={`nav-link `}>Создание промо-сайтов </a></Link></div>
                                                 <div ><Link href='/once-site.html' ><a className={`nav-link `}> Создание одностраничного сайта</a></Link></div>

                                             </div>
                                             <div className="col-md-6">

                                                 <div ><Link href='/portol.html' ><a className={`nav-link `}> Создание порталов</a></Link></div>
                                                 <div ><Link href='/online-service.html' ><a className={`nav-link `}>Разработка онлайн сервисов </a></Link></div>
                                                 <div ><Link href='/site-catalog.html' ><a className={`nav-link `}>Разработка сайта-каталога </a></Link></div>
                                                 <div ><Link href='/pod-site.html' ><a className={`nav-link `}>Поддержка сайтов </a></Link></div>
                                                 <div ><Link href='/dor-site.html' ><a className={`nav-link `}>Доработка сайтов </a></Link></div>
                                                 <div ><Link href='/ind-project.html' ><a className={`nav-link `}>Индивидуальные проекты </a></Link></div>
                                                 <div ><Link href='/startup.html' ><a className={`nav-link `}>Стартапы </a></Link></div>

                                             </div>
                                         </div>
                                     </div>


                                 </div>
                             </div>
                         </div>



                         <div className="dropdownFather ml-2">

                             <div className="dropdown-toggle" ><Link href='/' className={`nav-link`}><a className={`nav-link `}>Продвижение</a></Link></div>

                             <div     className="drobdownMenuFather d-none">

                                 <div className="dropdownMenu" >
                                     {/*style={{width: "500px !important", left: "-185px !important"}}*/}
                                     <div className="container">
                                         <div className="row align-items-baseline">
                                             <div className="col-md-6">
                                                 <div ><Link href='/smm.html' ><a className={`nav-link `}>СММ</a></Link></div>
                                                 <div ><Link href='/marceting.html' ><a className={`nav-link `}>Реальный Маркетинг</a></Link></div>
                                                 <div ><Link href='/seo.html' ><a className={`nav-link `}>SEO-продвижение</a></Link></div>
                                                 <div ><Link href='/pps.html' ><a className={`nav-link `}>PPC - контекстная реклама</a></Link></div>
                                                 <div ><Link href='/seo-opt.html' ><a className={`nav-link `}>SEO – оптимизация сайта</a></Link></div>
                                                 <div ><Link href='/conversi.html' ><a className={`nav-link `}>CRO – оптимизация коэффициента конверсии</a></Link></div>
                                                 <div ><Link href='/ctr.html' ><a className={`nav-link `}>CTR – оптимизация коэффициента кликабельности</a></Link></div>
                                                 <div ><Link href='/aso.html' ><a className={`nav-link `}>ASO – продвижение мобильных приложений</a></Link></div>

                                             </div>
                                             <div className="col-md-6">
                                                 <div ><Link href='/serm.html' ><a className={`nav-link `}>SERM – маркетинг для бизнеса</a></Link></div>
                                                 <div ><Link href='/complex.html' ><a className={`nav-link `}>Комплексное продвижение</a></Link></div>
                                                 <div ><Link href='/keywords.html' ><a className={`nav-link `}>Продвижение по ключевым словам</a></Link></div>
                                                 <div ><Link href='/results.html' ><a className={`nav-link `}>Продвижение с оплатой за результат</a></Link></div>
                                                 <div ><Link href='/audit.html' ><a className={`nav-link `}>Аудит сайта</a></Link></div>
                                                 <div ><Link href='/craud.html' ><a className={`nav-link `}>Крауд маркетинг</a></Link></div>
                                                 <div ><Link href='/text.html' ><a className={`nav-link `}>Написание текстов</a></Link></div>
                                                 <div ><Link href='/logo-page.html' ><a className={`nav-link `}>Упаковка</a></Link></div>

                                             </div>
                                         </div>
                                     </div>


                                 </div>
                             </div>
                         </div>



                         <div  className="ml-3"><Link href='/blog.html' ><a className={`nav-link `}>Блог</a></Link></div>
                         <div  className="ml-3"><Link href='/about.html'><a className={`nav-link `}>О нас</a></Link></div>


                       <div className="nav-link ml-5 tedNone">
                           <a href="https://t.me/kelyanmedia" target="_blank"    >   <img src="/img/icon/tg.svg" alt=""/> </a>
                       </div>
                       <div className="nav-link tedNone">
                           <a href="https://www.instagram.com/kelyanmedia/" target="_blank"   > <img src="/img/icon/ins.svg" alt=""/></a>
                       </div>
                       <div className="nav-link tedNone">

                              <a href="https://t.me/agasi_a" target="_blank" className='cons rounded-pill ' >Бесплатная консультация</a>
                       </div>

                   </div>
                 </div>
            </div>
            </div>


            <div className={isToggled ? "d-block" : "d-none"} id="sideBar">

                <div className="row d-none">
                        <div className="navbar">
                            <div className="d-flex align-items-center"><div className="navDots mt-2" /><Link href='/' ><a className={`nav-link`}>Главная</a></Link></div>
                            <div  className="d-flex align-items-center"><div className="navDots mt-2" /><Link href='/cases.html' ><a className={`nav-link`}>Кейсы</a></Link></div>

                            <div className="dropdownFather   ">

                                <div className="d-flex align-items-center">
                                    <div className="navDots  " />
                                    <div className=" d-flex  align-items-center"><div className="minus   " /><Link href='/' ><a  className={`nav-link `} style={{marginTop: "0 !important"}}>Создание сайтов</a></Link><span className="dropdown-toggle" /></div>


                                </div>
                                <div     id="drobdownMenuFather" className={isOpen ? "d-block" : "d-none"}>



                                    <div className="dropdownMenu" style={{width: "500px !important", left: "-185px !important"}}>


                                                    <div ><Link href='/create-landing.html' ><a className={`nav-link `}>Создание landing-page </a></Link></div>
                                                    <div ><Link href='/online-shopping.html' ><a className={`nav-link `}>Разработка <br/> интернет-магазинов </a></Link></div>
                                                    <div ><Link href='/corp-site.html' ><a className={`nav-link `}>Создание корпоративных <br/> сайтов </a></Link></div>
                                                    <div ><Link href='/visitok.html' ><a className={`nav-link `}>Создание сайта-визитки </a></Link></div>
                                                    <div ><Link href='/comp-site.html' ><a className={`nav-link `}>Создание сайта компании </a></Link></div>
                                                    <div ><Link href='/product-stie.html' ><a className={`nav-link `}>Создание продающих <br/> сайтов </a></Link></div>
                                                    <div ><Link href='/promo-site.html' ><a className={`nav-link `}>Создание промо-сайтов </a></Link></div>
                                                    <div ><Link href='/once-site.html' ><a className={`nav-link `}> Создание одностраничного <br/> сайта</a></Link></div>


                                                    <div ><Link href='/portol.html' ><a className={`nav-link `}> Создание порталов</a></Link></div>
                                                    <div ><Link href='/online-service.html' ><a className={`nav-link `}>Разработка онлайн <br/> сервисов </a></Link></div>
                                                    <div ><Link href='/site-catalog.html' ><a className={`nav-link `}>Разработка <br/> сайта-каталога </a></Link></div>
                                                    <div ><Link href='/pod-site.html' ><a className={`nav-link `}>Поддержка сайтов </a></Link></div>
                                                    <div ><Link href='/dor-site.html' ><a className={`nav-link `}>Доработка сайтов </a></Link></div>
                                                    <div ><Link href='/ind-project.html' ><a className={`nav-link `}>Индивидуальные проекты </a></Link></div>
                                                    <div ><Link href='/startup.html' ><a className={`nav-link `}>Стартапы </a></Link></div>




                                    </div>
                                </div>

























                            </div>





                            <div className="dropdownFather   ">

                                <div className="d-flex align-items-center">
                                    <div className="navDots  " />
                                    <div className=" d-flex  align-items-center"><div className="minus   " /><Link href='/' ><a  className={`nav-link `} style={{marginTop: "0 !important"}}>Продвижение</a></Link><span className="dropdown-toggle" /></div>


                                </div>
                                <div     id="drobdownMenuFather" className={isOpen ? "d-block" : "d-none"}>



                                    <div className="dropdownMenu" style={{width: "500px !important", left: "-185px !important"}}>


                                        <div ><Link href='/smm.html' ><a className={`nav-link `}>СММ</a></Link></div>
                                        <div ><Link href='/marceting.html' ><a className={`nav-link `}>Реальный Маркетинг</a></Link></div>
                                        <div ><Link href='/seo.html' ><a className={`nav-link `}>SEO-продвижение</a></Link></div>
                                        <div ><Link href='/pps.html' ><a className={`nav-link `}>PPC - контекстная реклама</a></Link></div>
                                        <div ><Link href='/seo-opt.html' ><a className={`nav-link `}>SEO – оптимизация сайта</a></Link></div>
                                        <div ><Link href='/conversi.html' ><a className={`nav-link `}>CRO – оптимизация <br/> коэффициента конверсии</a></Link></div>
                                        <div ><Link href='/ctr.html' ><a className={`nav-link `}>CTR – оптимизация <br/> коэффициента  кликабельности</a></Link></div>
                                        <div ><Link href='/aso.html' ><a className={`nav-link `}>ASO – продвижение <br/> мобильных приложений</a></Link></div>
                                        <div ><Link href='/logo-page.html' ><a className={`nav-link `}>Упаковка</a></Link></div>


                                        <div ><Link href='/serm.html' ><a className={`nav-link `}>SERM – маркетинг для бизнеса</a></Link></div>
                                        <div ><Link href='/complex.html' ><a className={`nav-link `}>Комплексное продвижение</a></Link></div>
                                        <div ><Link href='/keywords.html' ><a className={`nav-link `}>Продвижение по <br/> ключевым словам</a></Link></div>
                                        <div ><Link href='/results.html' ><a className={`nav-link `}>Продвижение с оплатой <br/> за результат</a></Link></div>
                                        <div ><Link href='/audit.html' ><a className={`nav-link `}>Аудит сайта</a></Link></div>
                                        <div ><Link href='/craud.html' ><a className={`nav-link `}>Крауд маркетинг</a></Link></div>
                                        <div ><Link href='/text.html' ><a className={`nav-link `}>Написание текстов</a></Link></div>


                                    </div>
                                </div>

























                            </div>

                            {/*<div  className="d-flex align-items-center"><div className="navDots mt-4" /><Link href='/services' className={`nav-link ${props.history.location.pathname === '/services' && 'active'}`}>Услуги</Link></div>*/}
                            <div  className="d-flex align-items-center"><div className="navDots mt-2" /><Link href='/blog.html'><a className={`nav-link`}>Блог</a></Link></div>
                            <div  className="d-flex align-items-center"><div className="navDots mt-2" /><Link href='/about.html'><a className={`nav-link`}>О нас</a></Link></div>
                            <div  className="d-flex align-items-center"><div className="navDots mt-2" /><Link href='/' ><a className={`nav-link`}>RU</a></Link></div>
                            <div  className="d-flex align-items-center"><div className="navDots mt-2" /><Link href='/' ><a className={`nav-link`}>EN</a></Link></div>
                        </div>
                    <div className="contactNav d-flex">
                        <div className="navbar w-100  flex-wrap ">
                            <div className="w-100 flex-nowrap d-flex mb-5">
                                <div className="nav-link">
                                    <a href="#!">     <img src="/img/icon/tg.svg" alt=""/> </a>
                                </div>
                                <div className="nav-link ml-3">
                                    <a href="#!"> <img src="/img/icon/ins.svg" alt=""/></a>
                                </div>
                            </div>
                            <div className="nav-link w-100 position-relative">

                                <a href="https://t.me/agasi_a" target="_blank" className='cons rounded-pill'>Бесплатная консультация</a>
                            </div>

                            <div className="lineNav" />

                            <span>© 2021 KELYAN MEDIA</span>
                        </div>
                    </div>
                </div>
            </div>





        </div>
    );
};

export default Navbar;