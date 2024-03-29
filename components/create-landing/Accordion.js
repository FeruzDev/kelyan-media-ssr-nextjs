import React, { useState } from 'react';

const Accordion = () => {
    const accordionData = [
        {
            id: '0',
            title: ' Как формируется стоимость разработки интернет-магазина?',
            content: ` Цена напрямую зависит от времени, которое будет необходимо для нашей команды на его разработку. Над проектом работают: project-менеджер, дизайнер, верстальщик и web-программист. Стоимость разработки начинается от 1500$`,
            isActive: false

        },
        {
            id: '1',
            title: ' Почему не указаны конкретные цены?',
            content: `Мы не штампуем веб-сайты по шаблонам, подход к каждому клиенту индивидуален – мы учитываем все пожелания и возможности заказчиков. Не зная сложности проекта и объема работы, мы не можем сразу называть точной суммы. Однако, мы готовы бесплатно рассчитать вам стоимость до начала нашей работы `,
            isActive: false
        },
        {
            id: '2',
            title: 'Используете ли вы шаблоны в своей работе? ',
            content: `95% наших проектов были реализованы с нуля и совершенно индивидуально для каждого клиента. Шаблоны мы используем только по вашему желанию: если вы уверены, что шаблон вам подходит и вы хотите сэкономить деньги, то мы готовы заняться разработкой вашего интернет-магазина с применением шаблонных решений `,
            isActive: false
        },
        {
            id: '3',
            title: 'Кто работает над созданием сайта? ',
            content: `В команду входят:
                        Project-менеджер, Копирайтер, Web-дизайнер, Frontend-разработчик, Backend-разработчик,  Специалист по SEO-оптимизации
                        В зависимости от ситуации и набора услуг, в команду также могут входить:
                        Маркетолог, PPC-специалист, UX/UI дизайнер `,
            isActive: false
        },
        {
            id: '4',
            title: ' Делаете ли вы Google Adwords / Яндекс.Директ?',
            content: `Да, мы работаем с контекстной рекламой. Более того, при заказе сайта у нас, вы получаете настройку и 1 месяц сопровождения рекламной кампании Google Adwords совершенно бесплатно! `,
            isActive: false
        },
        {
            id: '5',
            title: ' Будет ли сайт адаптирован под мобильные устройства?',
            content: `Да, конечно! Ведь при нынешних интернет-реалиях сайт без мобильной версии невозможно назвать полноценным `,
            isActive: false
        },
        {
            id: '6',
            title: ' Каковы сроки создания интернет-магазина?',
            content: `Все зависит от ваших требований (как и в случае стоимости). Можем точно сказать, что срок займет от 20-ти дней и больше. Максимальный период работы определяется сложностью проекта. Если вы оставите заявку сейчас, мы согласуем сроки и стоимость в течение одного рабочего дня `,
            isActive: false
        },
        {
            id: '7',
            title: 'Смогу ли я самостоятельно редактировать информацию на сайте? ',
            content: ` Да, вы сможете редактировать все тексты, товарные позиции, а также категории на сайте. Более того, вы сможете самостоятельно изменять его структуру и внешний вид`,
            isActive: false
        },
        {
            id: '8',
            title: 'Вы занимаетесь продвижением интернет-магазинов? (SEO) ',
            content: ` Да, мы предоставляем не только услугу разработки сайта, а полный пакет, куда входят продвижение и поддержка вашего интернет-магазина. В стоимость разработки сайта входит его первичная SEO-оптимизация. После этого мы можем заключить Договор на дальнейшее SEO-продвижение`,
            isActive: false
        },
    ];
    let indexPlus;

    const [active, setActive] = useState(0);

    const eventHandler = (e, index) => {
        e.preventDefault();
        setActive(index);
    }

    const indexCount = (index) => {
        indexPlus = index + 1;
        return indexPlus;
    }

    return(
        <div className="accordionTable container">
            <h3 className="newPagesTitle">Часто задаваемы вопросы</h3>
            <form>
                { accordionData.map((tab, index) => (
                    <div key={index}>
                        <h2>
                            <button
                                onClick={(e) => eventHandler(e, index)}
                                className={ active === index ? 'active' : 'inactive'}
                                aria-expanded={ active === index ? 'true' : 'false' }
                                aria-controls={ 'sect-' + indexCount(index) }
                                aria-disabled={ active === index ? 'true' : 'false' }
                                tabIndex={indexCount(index)}
                            >
                                <h1 className="mr-3">B</h1>
                                <img src="/img/icon/Line 20.png" alt=""/>
                                <span className="title-wrapper ml-3"><p className="text-left pr-4">{tab.title}</p>
                                    <span className={ active === index  ? 'plus' : 'minus'}></span>
                                </span>
                            </button>
                        </h2>
                        <div id={ 'sect-' + indexCount(index) } className={ active === index  ? 'panel-open' : 'panel-close' }>
                            <div className="privateContent">
                                { tab.content }
                            </div>
                            <img className="ml-3" src="/img/icon/Line 20.png" alt=""/>

                            <h1 className="ml-3">O</h1>
                        </div>
                    </div>
                ))
                }
            </form>
        </div>
    );
}

export default Accordion;