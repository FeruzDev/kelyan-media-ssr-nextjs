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

                <a href=" tel:+998333393334" target="_blank"> <img className="telIcon" src="/img/icon/tel.png" alt=""/></a>

                <Link href="/"><a className="navbar-brand ml-auto mr-auto">KELYAN<b>MEDIA</b></a></Link>
                <button onClick={toggleTrueFalse} className="  bg-transparent border-0 sibeBarToggle">
                    <img src="../img/icon/burger.png" alt=""/>
                </button>
            </div>

            <div className="container-fluid mainNavbar">
                <div className="row">
                    <div className="col-md-3">
                        <Link className="navbar-brand" href="/"><a className="navbar-brand"><img
                            src="/img/icon/logoB.png" className="mr-2 p-0  " alt=""
                            style={{marginTop: "-3px", width: "28px",}}/>KELYAN<b>MEDIA</b></a></Link>
                    </div>
                    <div className="col-md-9">
                        <div className="navbar">
                            <div className="ml-3"><Link href='/' className={`nav-link `}><a
                                className={`nav-link `}>Главная</a></Link></div>
                            <div className="ml-3"><Link href='/cases' className={`nav-link `}><a
                                className={`nav-link `}>Кейсы</a></Link></div>

                            <div className="dropdownFather">

                                <div className="dropdown-toggle"><Link href='/' className={`nav-link`}><a
                                    className={`nav-link `}>Создание сайтов</a></Link></div>

                                <div className="drobdownMenuFather d-none">

                                    <div className="dropdownMenu">
                                        {/*style={{width: "500px !important", left: "-185px !important"}}*/}
                                        <div className="container">
                                            <div className="row align-items-baseline">
                                                <div className="col-md-6">
                                                    <div><Link href='/razrabotka-landing-page'><a className={`nav-link `}>Создание
                                                        landing-page </a></Link></div>
                                                    <div><Link href='/sozdaniye-internet-magazina.html'><a className={`nav-link `}>Разработка
                                                        интернет-магазинов </a></Link></div>
                                                    <div><Link href='/sozdaniye-korporativnogo-sayta.html'><a className={`nav-link `}>Создание
                                                        корпоративных сайтов </a></Link></div>
                                                    <div><Link href='/sayti-vizytki.html'><a className={`nav-link `}>Создание
                                                        сайта-визитки </a></Link></div>
                                                    <div><Link href='/sayt-dlya-kompaniy.html'><a className={`nav-link `}>Создание
                                                        сайта компании </a></Link></div>
                                                    <div><Link href='/sozdanie-prodayshego-sayta.html'><a className={`nav-link `}>Создание
                                                        продающих сайтов </a></Link></div>
                                                    <div><Link href='/razrabotka-promo-saytov.html'><a className={`nav-link `}>Создание
                                                        промо-сайтов </a></Link></div>
                                                    <div><Link href='/once-site.html'><a
                                                        className={`nav-link `}> Создание одностраничного
                                                        сайта</a></Link></div>

                                                </div>
                                                <div className="col-md-6">

                                                    <div><Link href='/sozdanie-sayta-portala.html'><a className={`nav-link `}> Создание
                                                        порталов</a></Link></div>
                                                    <div><Link href='/razrabotka-onlayn-servisa.html'><a className={`nav-link `}>Разработка
                                                        онлайн сервисов </a></Link></div>
                                                    <div><Link href='/sozdanie-sayta-kataloga.html'><a className={`nav-link `}>Разработка
                                                        сайта-каталога </a></Link></div>
                                                    <div><Link href='/podderzhka-saytov.html'><a className={`nav-link `}>Поддержка
                                                        сайтов </a></Link></div>
                                                    <div><Link href='/dorabotka-saytov.html'><a className={`nav-link `}>Доработка
                                                        сайтов </a></Link></div>
                                                    <div><Link href='/sozdanie-unikalnogo-sayta.html'><a className={`nav-link `}>Индивидуальные
                                                        проекты </a></Link></div>
                                                    <div><Link href='/razrabotka-sayta-startapa.html'><a
                                                        className={`nav-link `}>Стартапы </a></Link></div>

                                                </div>
                                            </div>
                                        </div>


                                    </div>
                                </div>
                            </div>


                            <div className="dropdownFather ml-2">

                                <div className="dropdown-toggle"><Link href='/' className={`nav-link`}><a
                                    className={`nav-link `}>Продвижение</a></Link></div>

                                <div className="drobdownMenuFather d-none">

                                    <div className="dropdownMenu">
                                        {/*style={{width: "500px !important", left: "-185px !important"}}*/}
                                        <div className="container">
                                            <div className="row align-items-baseline">
                                                <div className="col-md-6">
                                                    <div><Link href='/targetingova-reklama.html'><a
                                                        className={`nav-link `}>СММ</a></Link></div>
                                                    <div><Link href='/marceting.html'><a className={`nav-link `}>Реальный
                                                        Маркетинг</a></Link></div>
                                                    <div><Link href='/seo-prodvizhenie-sayta.html'><a
                                                        className={`nav-link `}>SEO-продвижение</a></Link></div>
                                                    <div><Link href='/kontekstnaya-reklama.html'><a className={`nav-link `}>PPC -
                                                        контекстная реклама</a></Link></div>
                                                    <div><Link href='/seo-optimizaciya-sayta.html'><a className={`nav-link `}>SEO –
                                                        оптимизация сайта</a></Link></div>
                                                    <div><Link href='/optimizaciya-cro.html'><a className={`nav-link `}>CRO –
                                                        оптимизация коэффициента конверсии</a></Link></div>
                                                    <div><Link href='/optimizaciya-ctr.html'><a className={`nav-link `}>CTR –
                                                        оптимизация коэффициента кликабельности</a></Link></div>
                                                    <div><Link href='/prodvizhenie-prilozeniy.html'><a className={`nav-link `}>ASO –
                                                        продвижение мобильных приложений</a></Link></div>

                                                </div>
                                                <div className="col-md-6">
                                                    <div><Link href='/serm-marketing.html'><a className={`nav-link `}>SERM –
                                                        маркетинг для бизнеса</a></Link></div>
                                                    <div><Link href='/kompleksnoe-prodvizhenie.html'><a className={`nav-link `}>Комплексное
                                                        продвижение</a></Link></div>
                                                    <div><Link href='/prodvizhenie-po-klucevim-slovam.html'><a className={`nav-link `}>Продвижение
                                                        по ключевым словам</a></Link></div>
                                                    <div><Link href='/prodvizhenie-s-garantiey.html'><a className={`nav-link `}>Продвижение
                                                        с оплатой за результат</a></Link></div>
                                                    <div><Link href='/seo-audit-sayta.html'><a className={`nav-link `}>Аудит
                                                        сайта</a></Link></div>
                                                    <div><Link href='/kraud-marketing.html'><a className={`nav-link `}>Крауд
                                                        маркетинг</a></Link></div>
                                                    <div><Link href='/uslugi-kopirayterov.html'><a className={`nav-link `}>Написание
                                                        текстов</a></Link></div>
                                                    <div><Link href='/logo-page.html'><a
                                                        className={`nav-link `}>Упаковка</a></Link></div>

                                                </div>
                                            </div>
                                        </div>


                                    </div>
                                </div>
                            </div>


                            <div className="ml-3"><Link href='/blog.html'><a className={`nav-link `}>Блог</a></Link>
                            </div>
                            <div className="ml-3"><Link href='/about.html'><a className={`nav-link `}>О нас</a></Link>
                            </div>


                            <div className="nav-link ml-5 tedNone">
                                <a href="https://t.me/kelyanmedia" target="_blank"> <img src="/img/icon/tg.svg" alt=""/>
                                </a>
                            </div>
                            <div className="nav-link tedNone">
                                <a href="https://www.instagram.com/kelyanmedia/" target="_blank"> <img
                                    src="/img/icon/ins.svg" alt=""/></a>
                            </div>
                            <div className="nav-link tedNone">

                                <a href="https://t.me/agasi_a" target="_blank" className='cons rounded-pill '>Бесплатная
                                    консультация</a>
                            </div>

                        </div>
                    </div>
                </div>
            </div>


            <div className={isToggled ? "d-block" : "d-none"} id="sideBar">

                <div className="row d-none">
                    <div className="navbar">
                        <div className="d-flex align-items-center">
                            <div className="navDots mt-2"/>
                            <Link href='/'><a className={`nav-link`}>Главная</a></Link></div>
                        <div className="d-flex align-items-center">
                            <div className="navDots mt-2"/>
                            <Link href='/cases.html'><a className={`nav-link`}>Кейсы</a></Link></div>

                        <div className="dropdownFather   ">

                            <div className="d-flex align-items-center">
                                <div className="navDots  "/>
                                <div className=" d-flex  align-items-center">
                                    <div className="minus   "/>
                                    <Link href='/'><a className={`nav-link `} style={{marginTop: "0 !important"}}>Создание
                                        сайтов</a></Link><span className="dropdown-toggle"/></div>


                            </div>
                            <div id="drobdownMenuFather" className={isOpen ? "d-block" : "d-none"}>


                                <div className="dropdownMenu"
                                     style={{width: "500px !important", left: "-185px !important"}}>


                                    <div><Link href='/razrabotka-landing-page'><a className={`nav-link `}>Создание
                                        landing-page </a></Link></div>
                                    <div><Link href='/sozdaniye-internet-magazina.html'><a
                                        className={`nav-link `}>Разработка <br/> интернет-магазинов </a></Link></div>
                                    <div><Link href='/sozdaniye-korporativnogo-sayta.html'><a className={`nav-link `}>Создание
                                        корпоративных <br/> сайтов </a></Link></div>
                                    <div><Link href='/sayti-vizytki.html'><a className={`nav-link `}>Создание
                                        сайта-визитки </a></Link></div>
                                    <div><Link href='/sayt-dlya-kompaniy.html'><a className={`nav-link `}>Создание сайта
                                        компании </a></Link></div>
                                    <div><Link href='/sozdanie-prodayshego-sayta.html'><a className={`nav-link `}>Создание
                                        продающих <br/> сайтов </a></Link></div>
                                    <div><Link href='/razrabotka-promo-saytov.html'><a className={`nav-link `}>Создание
                                        промо-сайтов </a></Link></div>
                                    <div><Link href='/once-site.html'><a className={`nav-link `}> Создание
                                        одностраничного <br/> сайта</a></Link></div>


                                    <div><Link href='/sozdanie-sayta-portala.html'><a className={`nav-link `}> Создание
                                        порталов</a></Link></div>
                                    <div><Link href='/razrabotka-onlayn-servisa.html'><a className={`nav-link `}>Разработка
                                        онлайн <br/> сервисов </a></Link></div>
                                    <div><Link href='/sozdanie-sayta-kataloga.html'><a
                                        className={`nav-link `}>Разработка <br/> сайта-каталога </a></Link></div>
                                    <div><Link href='/podderzhka-saytov.html'><a className={`nav-link `}>Поддержка
                                        сайтов </a></Link></div>
                                    <div><Link href='/dorabotka-saytov.html'><a className={`nav-link `}>Доработка
                                        сайтов </a></Link></div>
                                    <div><Link href='/sozdanie-unikalnogo-sayta.html'><a className={`nav-link `}>Индивидуальные
                                        проекты </a></Link></div>
                                    <div><Link href='/razrabotka-sayta-startapa.html'><a className={`nav-link `}>Стартапы </a></Link>
                                    </div>


                                </div>
                            </div>


                        </div>


                        <div className="dropdownFather   ">

                            <div className="d-flex align-items-center">
                                <div className="navDots  "/>
                                <div className=" d-flex  align-items-center">
                                    <div className="minus   "/>
                                    <Link href='/'><a className={`nav-link `}
                                                      style={{marginTop: "0 !important"}}>Продвижение</a></Link><span
                                    className="dropdown-toggle"/></div>


                            </div>
                            <div id="drobdownMenuFather" className={isOpen ? "d-block" : "d-none"}>


                                <div className="dropdownMenu"
                                     style={{width: "500px !important", left: "-185px !important"}}>


                                    <div><Link href='/targetingova-reklama.html'><a className={`nav-link `}>СММ</a></Link></div>
                                    <div><Link href='/marceting.html'><a className={`nav-link `}>Реальный Маркетинг</a></Link>
                                    </div>
                                    <div><Link href='/seo-prodvizhenie-sayta.html'><a className={`nav-link `}>SEO-продвижение</a></Link>
                                    </div>
                                    <div><Link href='/kontekstnaya-reklama.html'><a className={`nav-link `}>PPC - контекстная реклама</a></Link>
                                    </div>
                                    <div><Link href='/seo-optimizaciya-sayta.html'><a className={`nav-link `}>SEO – оптимизация
                                        сайта</a></Link></div>
                                    <div><Link href='/optimizaciya-cro.html'><a className={`nav-link `}>CRO –
                                        оптимизация <br/> коэффициента конверсии</a></Link></div>
                                    <div><Link href='/optimizaciya-ctr.html'><a className={`nav-link `}>CTR –
                                        оптимизация <br/> коэффициента кликабельности</a></Link></div>
                                    <div><Link href='/prodvizhenie-prilozeniy.html'><a className={`nav-link `}>ASO –
                                        продвижение <br/> мобильных приложений</a></Link></div>
                                    <div><Link href='/logo-page.html'><a className={`nav-link `}>Упаковка</a></Link>
                                    </div>


                                    <div><Link href='/serm-marketing.html'><a className={`nav-link `}>SERM – маркетинг для
                                        бизнеса</a></Link></div>
                                    <div><Link href='/kompleksnoe-prodvizhenie.html'><a className={`nav-link `}>Комплексное
                                        продвижение</a></Link></div>
                                    <div><Link href='/prodvizhenie-po-klucevim-slovam.html'><a className={`nav-link `}>Продвижение
                                        по <br/> ключевым словам</a></Link></div>
                                    <div><Link href='/prodvizhenie-s-garantiey.html'><a className={`nav-link `}>Продвижение с
                                        оплатой <br/> за результат</a></Link></div>
                                    <div><Link href='/seo-audit-sayta.html'><a className={`nav-link `}>Аудит сайта</a></Link>
                                    </div>
                                    <div><Link href='/kraud-marketing.html'><a className={`nav-link `}>Крауд маркетинг</a></Link>
                                    </div>
                                    <div><Link href='/тексты uslugi-kopirayterov.html'><a className={`nav-link `}>Написание текстов</a></Link>
                                    </div>


                                </div>
                            </div>


                        </div>

                        {/*<div  className="d-flex align-items-center"><div className="navDots mt-4" /><Link href='/services' className={`nav-link ${props.history.location.pathname === '/services' && 'active'}`}>Услуги</Link></div>*/}
                        <div className="d-flex align-items-center">
                            <div className="navDots mt-2"/>
                            <Link href='/blog.html'><a className={`nav-link`}>Блог</a></Link></div>
                        <div className="d-flex align-items-center">
                            <div className="navDots mt-2"/>
                            <Link href='/about.html'><a className={`nav-link`}>О нас</a></Link></div>
                        <div className="d-flex align-items-center">
                            <div className="navDots mt-2"/>
                            <Link href='/'><a className={`nav-link`}>RU</a></Link></div>
                        <div className="d-flex align-items-center">
                            <div className="navDots mt-2"/>
                            <Link href='/'><a className={`nav-link`}>EN</a></Link></div>
                    </div>
                    <div className="contactNav d-flex">
                        <div className="navbar w-100  flex-wrap ">
                            <div className="w-100 flex-nowrap d-flex mb-5">
                                <div className="nav-link">
                                    <a href="#!"> <img src="/img/icon/tg.svg" alt=""/> </a>
                                </div>
                                <div className="nav-link ml-3">
                                    <a href="#!"> <img src="/img/icon/ins.svg" alt=""/></a>
                                </div>
                            </div>
                            <div className="nav-link w-100 position-relative">

                                <a href="https://t.me/agasi_a" target="_blank" className='cons rounded-pill'>Бесплатная
                                    консультация</a>
                            </div>

                            <div className="lineNav"/>

                            <span>© 2021 KELYAN MEDIA</span>
                        </div>
                    </div>
                </div>
            </div>


        </div>
    );
};

export default Navbar;