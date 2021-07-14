import React, { useEffect, useState } from 'react';
import { Carousel } from 'react-bootstrap';



export default function CarouselAnime() {

    const [topAnime, SetTopAnime] = useState([]);


    const GetTopAnime = async () => {
        const temp = await fetch(`https://api.jikan.moe/v3/top/anime/1/bypopularity`)
            .then(res => res.json());

        SetTopAnime(temp.top.slice(0, 7));
    }

    useEffect(() => {
        GetTopAnime();
    }, []);




    return (
        <Carousel fade={true} pause={false} >

            {topAnime.map(anime => (
                <Carousel.Item interval={2000} >
                    <img
                        className="d-block w-200"
                        src={anime.image_url}
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <h3>{anime.title}</h3>
                        <p>{anime.rank}</p>
                    </Carousel.Caption>
                </Carousel.Item>
            ))}


        </Carousel>
    )
}
