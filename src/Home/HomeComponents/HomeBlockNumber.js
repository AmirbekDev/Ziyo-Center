import React from 'react';

function HomeBlockNumber(props) {

    const numbers = [
        {
            id:1,
            how_many:'85+',
            who: "Teachers",
        },
        {
            id:2,
            how_many:'850+',
            who: "Students",
        },
        {
            id:3,
            how_many:'55+',
            who: "Courses",
        },
        {
            id:4,
            how_many:'25+',
            who: "Country",
        },
    ]

    return (
        <div className='home_block-number'>
            <div className="container">
                <div className="home_number-start">
                    {
                       numbers.map(item =>{
                           return(
                               <div className="c">
                                   <div className="home_number-text_start" key={item.id}>
                                       <div className="home_number-text">
                                           <p>{item.how_many}</p>
                                       </div>
                                       <div className="home_number-text_who">
                                           <p>{item.who}</p>
                                       </div>
                                   </div>
                               </div>

                           )
                       })
                    }
                </div>
            </div>

        </div>

    );
}

export default HomeBlockNumber;