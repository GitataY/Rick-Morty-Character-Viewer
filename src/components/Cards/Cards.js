import React from 'react';
import styles from './Cards.module.scss';

const Cards = ({ results }) => {
    let display;

    if (results) {
        display = results.map(x => {
            const { id, name, image, location, status } = x;
            return (
                <div key={id} className="col-4 mb-4">
                    <div className={styles.cards}>
                        <img src={image} alt="" className={`${styles.img} img-fluid`} />
                        <div style={{ padding: "10px" }} className="content">
                            <div className="fs-4 fw-bold mb-4">{name}</div>
                            <div>
                                <div className="fs-6">Last Location</div>
                                <div className="fs-5">{location.name}</div>
                            </div>
                        </div>
                        <div className={`${styles.badge} badge ${status === "Dead" ? "bg-danger" : status === "Alive" ? "bg-success" : "bg-dark"}`}>
                            {status}
                        </div>
                    </div>
                </div>
            );
        });
    } else {
        display = "No characters found";
    }

    return <>{display}</>;
};

export default Cards;
