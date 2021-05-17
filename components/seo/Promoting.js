import React from 'react';

const Promoting = () => {
    const promotingData = [
        {
            title: "Создание имиджа вашей компании",
            content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Diam ac eu imperdiet proin accumsan leo. Ultricies blandit netus diam sagittis vitae tempus nec. Eget a, aliquet venenatis, viverrablandit netus diam sagittis vitae tempus nec. Eget a, aliquet venenatis, viverra."
        },
        {
            title: "Увеличение продаж",
            content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Diam ac eu imperdiet proin accumsan leo. Ultricies blandit netus diam sagittis vitae tempus nec. Eget a, aliquet venenatis, viverrablandit netus diam sagittis vitae tempus nec. Eget a, aliquet venenatis, viverra."
        },
        {
            title: "Бесплатная реклама",
            content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Diam ac eu imperdiet proin accumsan leo. Ultricies blandit netus diam sagittis vitae tempus nec. Eget a, aliquet venenatis, viverrablandit netus diam sagittis vitae tempus nec. Eget a, aliquet venenatis, viverra."
        },
        {
            title: "Широкий охват аудитории",
            content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Diam ac eu imperdiet proin accumsan leo. Ultricies blandit netus diam sagittis vitae tempus nec. Eget a, aliquet venenatis, viverrablandit netus diam sagittis vitae tempus nec. Eget a, aliquet venenatis, viverra."
        },
        {
            title: "Постоянный контакт с аудиторией",
            content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Diam ac eu imperdiet proin accumsan leo. Ultricies blandit netus diam sagittis vitae tempus nec. Eget a, aliquet venenatis, viverrablandit netus diam sagittis vitae tempus nec. Eget a, aliquet venenatis, viverra."
        },
        {
            title: "Анализ статистики",
            content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Diam ac eu imperdiet proin accumsan leo. Ultricies blandit netus diam sagittis vitae tempus nec. Eget a, aliquet venenatis, viverrablandit netus diam sagittis vitae tempus nec. Eget a, aliquet venenatis, viverra."
        },
    ]
    return (
        <div className="Promoting">


            <div className="container">
                <h3>Преимущества продвижения в</h3>
                <h2>FACEBOOK</h2>
                <div className="row">
                    {
                        promotingData.map(item => (
                            <div className="col-md-6 p-4">
                                <h4>{item.title}</h4>
                                <div className="line" />
                                <p>{item.content}</p>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    );
};

export default Promoting;