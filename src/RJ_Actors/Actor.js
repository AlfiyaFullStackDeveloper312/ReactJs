import React, { useState } from "react";
import "./Actor.css";

class Actor extends React.Component {
  constructor(props) {
    super(props);
    // Initialize the actor list
    this.actors = [
      {
        name: "Ranbir Kapoor",
        image:
          "https://upload.wikimedia.org/wikipedia/commons/d/d2/Ranbir_Kapoor_promoting_Brahmastra.jpg",
        movies: [
          "Yeh Jawaani Hai Deewani (2013) - IMDb Rating: 7.3/10",
          "Barfi! (2012) - IMDb Rating: 8.1/10",
          "  Rockstar (2011) - IMDb Rating: 7.8/10",
          "Wake Up Sid (2009) - IMDb Rating: 7.6/10",
          "Tamasha (2015) - IMDb Rating: 7.3/10",
          "Ajab Prem Ki Ghazab Kahani (2009) - IMDb Rating: 6.4/10",
          "Animal (2023) - IMDb Rating: 6.1/10",
          " Brahmāstra: Part One - Shiva (2022)-IMDb Rating: 5.6/10",
          " Ajab Prem Ki Ghazab Kahani (2009)-IMDb Rating: 6.3/10",
        ],
      },
      {
        name: "Kartik Aryan",
        image:
          " https://media.themoviedb.org/t/p/w500/nHdQlBvORSKmH1F1kbyTFs0HLjU.jpg",
        movies: [
          " Chandu Champion (2024) - IMDb Rating: 8.7",
          "  Pyaar Ka Punchnama (2011) - IMDb Rating: 7.6",
          "Freddy (2022) - IMDb Rating: 7.7",
          "     Pyaar Ka Punchnama 2 (2015) - IMDb Rating: 7.3",
          " Sonu Ke Titu Ki Sweety (2018) - IMDb Rating: 7.1",
          "  Dhamaka (2021) - IMDb Rating: 7.1",
          "Satyaprem Ki Katha (2023) - IMDb Rating: 6.7",
          " Akaash Vani (2013) - IMDb Rating: 6.4",
          "   Luka Chuppi (2019) - IMDb Rating: 6.3",
          "  Bhool Bhulaiyaa 2 (2022) - IMDb Rating: 6.1",
        ],
      },
      {
        name: "Varun Dhawan",
        image: " https://i.pinimg.com/236x/e4/3b/45/e43b458945c0cd5347c9b650944bc3b0.jpg",
        movies: [
       "   October (2018) - IMDb Rating: 7.5",
        "  Badlapur (2015) - IMDb Rating: 7.4",
        "  Sui Dhaaga: Made in India (2018) - IMDb Rating: 6.8",
          "Bhediya (2022) - IMDb Rating: 6.7",
          "Badrinath Ki Dulhania (2017) - IMDb Rating: 6.1",
         " JugJugg Jeeyo (2022) - IMDb Rating: 6.1",
          'Humpty Sharma Ki Dulhania (2014) - IMDb Rating: 6.0',
         ' ABCD 2 (2015) - IMDb Rating: 5.4',
        "  Student of the Year (2012) - IMDb Rating: 5.3",
          "Dishoom (2016) - IMDb Rating: 5.2"
        ],
      },
      {
        name: "Rohit Saraf",
        image: "https://pbs.twimg.com/media/Fo2g-NoaIAULR9C.jpg",
        movies: [
          "Ludo (2020) - IMDb Rating: 7.6",
          "Dear Zindagi (2016) - IMDb Rating: 7.4",
          "What Will People Say (2017) - IMDb Rating: 7.4",
         " Hichki (2018) - IMDb Rating: 7.3",
        "  The Sky Is Pink (2019) - IMDb Rating: 7.2",
         " Vikram Vedha (2022) - IMDb Rating: 7.1",
         ' Kamali From Nadukkaveri (2021) - IMDb Rating: 6.8',
        "  Mismatched (TV Series, 2020-present) - IMDb Rating: 5.9",
       "   Ishq Vishk Rebound (2024) - IMDb Rating: 5.9",
          "Dear Maya (2017) - IMDb Rating: 5.8",
        ],
      },
      
      {
        name: "Salman khan",
        image: " https://miro.medium.com/v2/resize:fit:821/1*v0iVLBmkqNK_U_TVEv4VnA.jpeg",
        movies: [
        " Bajrangi Bhaijaan (2015) - IMDb Rating: 8.0",
       " Sultan (2016) - IMDb Rating: 7.5",
          "Kick (2014) - IMDb Rating: 6.8",
         " Dabangg (2010) - IMDb Rating: 6.8",
          "Tere Naam (2003) - IMDb Rating: 6.8",
          "Hum Aapke Hain Koun..! (1994) - IMDb Rating: 7.6",
         " Maine Pyar Kiya (1989) - IMDb Rating: 7.6",
         " Tiger Zinda Hai (2017) - IMDb Rating: 6.9",
          "Jai Ho (2014) - IMDb Rating: 6.5",
      "   Kick 2 (2021) - IMDb Rating: 5.7",
        ],
      },
      {
        name: " Sonali Bendre",
        image: "https://m.sakshipost.com/sites/default/files/styles/storypage_main/public/gallery_images/2024/01/1/Sonali-Bendre-23-1704101911.jpg?itok=B3-BMKA4 ",
        movies: [
         "Sarfarosh (1999) - IMDb Rating: 8.1",
        "  Hum Saath Saath Hain (1999) - IMDb Rating: 6.8",
          "Murari (2001) - IMDb Rating: 7.8",
       "   Angaaray (1998) - IMDb Rating: 6.5",
         " Jis Desh Mein Ganga Rehta Hai (2000) - IMDb Rating: 6.4",
         " Zakhm (1998) - IMDb Rating: 7.7",
          "Bhago Bhoot Aayaa (2008) - IMDb Rating: 6.2",
          "Tara Rum Pum (2007) - IMDb Rating: 6.1",
        '  Laadla (1994) - IMDb Rating: 6.0',
         " Nerkonda Paarvai (2019) - IMDb Rating: 7.6",
          
        ],
      },
      {
        name: "Alia Bhatt",
        image: " https://www.alacouture.com/cdn/shop/files/Screenshot2024-12-15at3.11.23PM.png?v=1734293679 ",
        movies:[
         " RRR (2022) - IMDb Rating: 7.9",
         " Gully Boy (2019) - IMDb Rating: 7.9",
        "  Raazi (2018) - IMDb Rating: 7.7",
         " Udta Punjab (2016) - IMDb Rating: 7.7",
        "  Dear Zindagi (2016) - IMDb Rating: 7.4",
         " Highway (2014) - IMDb Rating: 7.6",
          "Kapoor & Sons (2016) - IMDb Rating: 7.7",
         " 2 States (2014) - IMDb Rating: 6.9",
        "  Badrinath Ki Dulhania (2017) - IMDb Rating: 6.2",
        "  Student of the Year (2012) - IMDb Rating: 6.7",
          
        ] ,
      },
      {
        name: " Kriti Sanon",
        image: "https://preview.redd.it/any-tea-on-kriti-sanon-why-no-rumours-or-link-ups-about-her-v0-db230gcu80xb1.jpg?width=640&crop=smart&auto=webp&s=228542112a29125809b56e0a3f873d7e08cea1fb",
        movies:[
          " Nenokkadine (2014) - Rating: 8.0",
          "Mimi (2021) - Rating: 7.8",
         " Bareilly Ki Barfi (2017) - Rating: 7.5",
        " Bhediya (2022) - Rating: 6.7",
      "  Luka Chuppi (2019) - Rating: 6.4",
     " Dilwale (2015) - Rating: 5.1",
     "Heropanti (2014) - Rating: 5.2",
    " Raabta (2017) - Rating: 4.7",
   " Housefull 4 (2019) - Rating: 3.4",
   "Panipat (2019) - Rating: 5.3",
        ] 
      },
      {
        name: " Kareena Kapoor",
        image: " https://images.filmibeat.com/img/popcorn/profile_photos/kareena-kapoor-20241114172753-137.jpg",
        movies: [
         " 3 Idiots (2009) - Rating: 8.4",
         "Bajrangi Bhaijaan (2015) - Rating: 8.1",
         "Omkara (2006) - Rating: 8.0",
        " Jab We Met (2007) - Rating: 7.9",
        "Udta Punjab (2016) - Rating: 7.7",
       " Kabhi Khushi Kabhie Gham... (2001) - Rating: 7.4",
       "Yuva (2004) - Rating: 7.3",
      " Talaash: The Answer Lies Within (2012) - Rating: 7.2",
    "  Hulchul (2004) - Rating: 7.0",
   " Chameli (2003) - Rating: 6.8",

        ],
      },
      {
        name: "Karishma Kapoor",
        image: "https://www.astrologyarticles.in/directory/wp-content/uploads/2022/01/Karisma-Kapoor.jpeg",
        movies: [
        "  Dil To Pagal Hai (1997) - Rating: 7.0",
       " Raja Hindustani (1996) - Rating: 6.1",
       "Jaanwar (1999) - Rating: 5.9",
    "   Andaz Apna Apna (1994) - Rating: 8.1",
   " Zubeidaa (2001) - Rating: 6.9",
   "Fiza (2000) - Rating: 6.1",
   "Biwi No. 1 (1999) - Rating: 5.7",
  " Hum Saath-Saath Hain (1999) - Rating: 6.2",
 " Jeet (1996) - Rating: 5.8",
" Hero No. 1 (1997) - Rating: 6.1",

        ],
      },
    ];
  }

  render() {
    return <ActorApp actors={this.actors} />;
  }
}

const ActorApp = ({ actors }) => {
  const [selectedActor, setSelectedActor] = useState(null);

  return (
    <div className="Actor-container">
      <h1>  10 Famous Indian Actors</h1>
      <div
        className="actor-grid"
        style={{
          display: "flex",
          flexDirection: "row",
          flexWrap: "wrap",
          gap: "20px",
          justifyContent: "center",
        }}
      >
        {actors.map((actor, index) => (
          <div
            key={index}
            className="actor-card"
            onClick={() => setSelectedActor(actor)}
          >
            <img
              src={actor.image}
              alt={actor.name}
              className="actor-image"
              style={{ height: "150px", width: "150px" }}
            />
            <p className="actor-name">{actor.name}</p>
          </div>
        ))}
      </div>

      {selectedActor && (
        <div className="movie-modal">
          <div className="modal-content">
            <h2>Top 10 Movies of {selectedActor.name}</h2>
            <ol>
              {selectedActor.movies.map((movie, index) => (
                <li key={index}>{movie}</li>
              ))}
            </ol>
            <button
              className="close-button"
              onClick={() => setSelectedActor(null)}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
export default Actor;

 