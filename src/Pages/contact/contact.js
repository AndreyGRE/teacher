import React from 'react';
import './contact.css'

 function Contact() {

    return (
        <div className="contact">
            <div className='info'>
                <p>
                    Контактная информация 
                </p>
                <ul>
                    <li>
                        <p>
                        Владимирская область, Гусь-Хрустальный   
                        
                        </p>
                    </li>
                    <li>
                        <p>
                        E-mail: anna********  
                        </p>
                    </li>
                    <li>
                        <p>
                        Телефон: 8 800 *** ** ** - Записатьсмя на прием   
                        </p>
                    </li>
                    <li>
                        <p>
                        Контактное лицо: Анна *.*.   
                        </p>
                    </li>
                </ul>
            </div>
            
            <div className='herf'>
                <a href="https://vk.com/kat.serebroofficial">
                    <img src='/img/vkk.png' alt="Вк" width="50"/>   
                </a>    
                <a href="https://vk.com/kat.serebroofficial">
                    <img src='/img/tg.png'  alt="TG" width="50"/>   
                </a>  
                <a href="https://vk.com/kat.serebroofficial">
                    <img src='/img/vi.png' alt="VI"  width="50" />   
                </a>  
                <a href="https://vk.com/kat.serebroofficial">
                    <img src='/img/ws.png' alt="WS" width="50"/>   
                </a>  
            </div>
        </div> 
            );
}

export default Contact;