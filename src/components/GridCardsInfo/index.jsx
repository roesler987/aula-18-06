
import Card from "../CardHome/CardHome";
import "./GridCardsInfo.css";

const GridCards = () => {

  return (
    <div className="containerCards"> 
      <div className="grid">
        <div className="primeiraLinha">
              <Card
              title={ "jean carlos"}
              value={ "trabalho com backend" }
              info={"nao trabalho com front pq é coisa de doido"}
            ></Card>
        </div>
      </div>
    </div>
  );
};

export default GridCards;
