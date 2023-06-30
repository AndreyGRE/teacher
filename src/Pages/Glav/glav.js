import React, { useEffect, useState } from 'react';
import './glav.css'


 function Glav() {
    let otziv = [
        {
            name: "Катя",
            img: 'img/ot1.jpg',
            text: "111Все что указано в договоре, было выполнено в срок, поэтому могу поставить вашей компании отлично и советовать другим обращаться только к вам. Приятно удивлена уровнем ваших мастеров и их дисциплиной. Спасибо вам большое"
        },
        {
            name: "Маша",
            img: 'img/otz2.jpg',
            text: "222Все что указано в договоре, было выполнено в срок, поэтому могу поставить вашей компании отлично и советовать другим обращаться только к вам. Приятно удивлена уровнем ваших мастеров и их дисциплиной. Спасибо вам большое"
        },
        {
            name: "Саша",
            img: 'img/otz3.jpg',
            text: "333Все что указано в договоре, было выполнено в срок, поэтому могу поставить вашей компании отлично и советовать другим обращаться только к вам. Приятно удивлена уровнем ваших мастеров и их дисциплиной. Спасибо вам большое"
        }
    ]

    const [people, setPeople] = useState(otziv)
    const [currentIndex,setCurrentIndex] = useState()

   useEffect(()=>{
        const lastIndex = people.length - 1
        if(currentIndex < 0){
            setCurrentIndex(lastIndex)
        }
        if(currentIndex > lastIndex){
            setCurrentIndex(0)
        }
    },[currentIndex,people])

    return (
        <div className="glav">
            <div className='logo-def'>
                <p className='test_logo'>
                    
                    <h1>
                    ЛОГОПЕД-ДЕФЕКТОЛОГ
                    </h1>
                    Логопедия - специальная педагогическая наука о нарушениях речи, способах их предупреждения, выявления и устранения средствами специального обучения и воспитания
                </p> 
            </div>
            <div className='otz'>
               {
                otziv.map((person, personIndex)=>{
                    const {name,img,text} = person;
                        
                    let position = "nextSlide"
                    if(personIndex === currentIndex){
                        position = "activSlide"
                    }

                    if(personIndex === currentIndex - 1 || (currentIndex === 0 && personIndex === people.lenght - 1)){
                        position = "lastSliide"
                    }

                    return (
                    <article className={position} key={name}>
                        <img  src={img} alt='отзыв' height={440}></img>
                        <p className='text'>{text}</p>
                        <button className='prev' onClick={()=>{setCurrentIndex(prevState => prevState - 1)}}>назад</button>
                        <button className='next' onClick={()=>{setCurrentIndex(prevState => prevState + 1)}}>вперед</button>
                    </article>
                    )
                 }
                )
               }  
            </div>
        </div> 
            );
}

export default Glav;