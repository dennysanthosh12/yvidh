import React from 'react'
import Events from '../events/events'


export default function Special() {
    const special = [
        {
            src: './assets/carouselImages/AUTOSHW.webp',
            title: 'AUTOSHOW',
            description: `🚗🏁AUTO SHOW!!!🏁🚗\n
            Get reved up for the Autoshow ! It's the ultimate auto show where you'll see the coolest cars and latest tech in action.\nFrom sleek designs to mind-blowing innovations, get ready for an adrenaline rush like no other! Don't miss out on the excitement – join us at YVIDH 2024 for an unforgettable moment!\n
            📌Venue-St. Thomas College of Engineering & Technology \n
            📌Date-April 4th\n
            📌website - www.yvidh.live\n
            Coordinators\n
            SREEHARI : 9746319601\n
            ANANDHU : 7510588009\n
            JEFFIN : 8547936120`,
            filename: '',
            id:"30",
            reglink: ''
          },
          {
            src: './assets/carouselImages/soapyfootball.webp',
            title: 'SOAPY FOOTBALL',
            description:`⚽ SOAPY FOOTBALL !!!\n
            Get ready for an exhilarating and hilarious experience with Soapy Football, one of the most anticipated events at YVIDH 2K24! \nThis unique twist on the traditional game of football combines the thrill of competition with the slippery fun of soapy water, creating an unforgettable experience for participants and spectators alike.\n 
            📌Venue-St. Thomas College of Engineering & Technology\n 
            📌Date-April 4th\n
            📌Registration fees-100/- per team of 5 members \n
            📌website - www.yvidh.live\n
            Coordinators\n
            NIBIN : 8139812566\n
            ANANDHU : 7907574050\n
            ALFIN : 9895572208`,
            filename: '',
            id:"31",
            reglink:''
          },

    ]
  return (
    <div className='depmaincont specialcont'>
        <div className='depevent'>
        <section className="eventsec">
            <Events dept={special} />
          </section>
    </div>
    </div>
    
  )
}
