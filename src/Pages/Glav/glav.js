import React from 'react';
import './glav.css'


 function Glav() {

    return (
        <div className="glav">
            <div className='logo-def'>
                <p>
                    <img src='/img/logo-def.jpg' className='img_logo'></img>
                    <h1>
                    ЛОГОПЕД-ДЕФЕКТОЛОГ
                    </h1>
                    Логопедия - специальная педагогическая наука о нарушениях речи, способах их предупреждения, выявления и устранения средствами специального обучения и воспитания
                </p>
                <button className='priem'></button>
            </div>
        </div> 
            );
}

export default Glav;