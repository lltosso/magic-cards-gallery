import { useEffect } from "react";
import { useState } from "react";
import "./MagicCards.css";

const MagicCards = () => {
    const [cards, setCards] = useState([])
    function getAllCards() {
        fetch('https://api.magicthegathering.io/v1/cards')
            .then(response => response.json())
            .then(data => {
                console.log(data.cards)
                setCards(data.cards)

            });

    }
    useEffect(() => {
        getAllCards()
    }, []);

    return (
        
    <div className="container-card">
        <h1>Cartas</h1>
        {
            cards.map((card) => (
                <div className="card" key={card.id}>
                    <img src={card.imageUrl} alt={card.name} />
                    <p className="name">{card.name}</p>
                    <p className="name">Type<p/>{card.type}</p>
                    <p>Description:{card.text}</p>
                </div>
            ))

        }
    </div>
    );
};

export default MagicCards;