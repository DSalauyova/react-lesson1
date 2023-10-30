import style from './Liste.module.css';

const Liste = () => {
    return (
        <div className={style.components}>
            <p>Liste des objectifs de la vie</p>
            <ul>
                <li>Faire les courses</li>
                <li>Aller à la salle de sport 3 fois par semaine</li>
                <li>Monter à plus de 5000m d'altitude</li>
                <li>Acheter mon premier appartement</li>
                <li>Perdre 5 kgs</li>
                <li>Gagner en productivité</li>
                <li>Apprendre un nouveau langage</li>
                <li>Faire une mission en freelance</li>
                <li>Organiser un meetup autour de la tech</li>
                <li>Faire un triathlon</li>
            </ul>

        </div>

    )
}

export default Liste;