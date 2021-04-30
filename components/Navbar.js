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
                <img className="telIcon" src="/img/icon/tel.png" alt=""/>
                <Link  href="/"><a className="navbar-brand">KELYAN<b >MEDIA</b></a></Link>
                <button onClick={toggleTrueFalse} className="  bg-transparent border-0 sibeBarToggle">
                    <img  src="../img/icon/burger.png" alt=""/>
                </button>
            </div>

            <div className="container mainNavbar">
             <div className="row">
                 <div className="col-md-2">
                     <Link className="navbar-brand" href="/"><a className="navbar-brand">KELYAN<b >MEDIA</b></a></Link>
                 </div>
                 <div className="col-md-6">
                     <div className="navbar">
                         <div ><Link href='/' className={`nav-link `}><a className={`nav-link `}>Главная</a></Link></div>
                         <div ><Link href='/cases' className={`nav-link `}><a className={`nav-link `}>Кейсы</a></Link></div>



                         <div className="dropdownFather">

                             <div className="dropdown-toggle" ><Link href='/services' className={`nav-link`}><a className={`nav-link `}>Услуги</a></Link></div>

                             <div     className="drobdownMenuFather d-none">

                                 <div className="dropdownMenu">
                                     <div ><Link href='/smm' ><a className={`nav-link `}>СММ</a></Link></div>
                                     <div ><Link href='/marceting'><a className={`nav-link `}>Реальный маркетинг</a></Link></div>
                                     <div ><Link href='/logo-page' ><a className={`nav-link `}>Упаковка</a></Link></div>

                                 </div>
                             </div>
                         </div>
                         <div ><Link href='/blog' ><a className={`nav-link `}>Блог</a></Link></div>
                         <div ><Link href='/about'><a className={`nav-link `}>О нас</a></Link></div>
                         <div ><Link href='/'><a className="nav-link lang">RU</a></Link></div>
                         <div ><Link href='/'><a className="nav-link lang">EN</a></Link></div>
                     </div>
                 </div>
                 <div className="col-md-4">
                   <div className="navbar">
                       <div className="nav-link">
                           <a href="https://t.me/kelyanmedia" target="_blank" >   <img src="/img/icon/tg.svg" alt=""/> </a>
                       </div>
                       <div className="nav-link">
                           <a href="https://www.instagram.com/kelyanmedia/" target="_blank"> <img src="/img/icon/ins.svg" alt=""/></a>
                       </div>
                       <div className="nav-link">

                              <a href="#!" className='cons rounded-pill'>Бесплатная консультация</a>
                       </div>

                   </div>
                 </div>
             </div>
            </div>


            <div className={isToggled ? "d-block" : "d-none"} id="sideBar">

                <div className="row d-none">
                        <div className="navbar">
                            <div className="d-flex align-items-center"><div className="navDots mt-2" /><Link href='/' ><a className={`nav-link`}>Главная</a></Link></div>
                            <div  className="d-flex align-items-center"><div className="navDots mt-2" /><Link href='/cases' ><a className={`nav-link`}>Кейсы</a></Link></div>

                            <div className="dropdownFather   ">

                                <div className="d-flex align-items-center">
                                    <div className="navDots  " />
                                    <div className=" d-flex  align-items-center"><div className="minus   " /><Link href='/services' ><a  className={`nav-link `} style={{marginTop: "0 !important"}}>Услуги</a></Link><span className="dropdown-toggle" /></div>


                                </div>
                                <div     id="drobdownMenuFather" className={isOpen ? "d-block" : "d-none"}>

                                    <div className="dropdownMenu">
                                        <div ><Link href='/smm' ><a className={`nav-link `}>СММ</a></Link></div>
                                        <div ><Link href='/marceting'><a className={`nav-link `}>Реальный маркетинг</a></Link></div>
                                        <div ><Link href='/logo-page' ><a className={`nav-link `}>Упаковка</a></Link></div>

                                    </div>
                                </div>
                            </div>


                            {/*<div  className="d-flex align-items-center"><div className="navDots mt-4" /><Link href='/services' className={`nav-link ${props.history.location.pathname === '/services' && 'active'}`}>Услуги</Link></div>*/}
                            <div  className="d-flex align-items-center"><div className="navDots mt-2" /><Link href='/blog'><a className={`nav-link`}>Блог</a></Link></div>
                            <div  className="d-flex align-items-center"><div className="navDots mt-2" /><Link href='/about'><a className={`nav-link`}>О нас</a></Link></div>
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

                                <a href="#!" className='cons rounded-pill'>Бесплатная консультация</a>
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