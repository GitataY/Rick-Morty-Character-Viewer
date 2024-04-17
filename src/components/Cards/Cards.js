import React from 'react';
import styles from './Cards.module.scss';
import {Link} from 'react-router-dom';

const Cards = ({ results, page }) => {
    let display;

    if (results) {
        display = results.map(x => {
            const { id, name, image, location, status } = x;
            return (
                <Link
                style={{ textDecoration: 'none'}}
                to={`${page}${id}`} key={id} className="col-lg-4 col-md-6 col-12 mb-4 position-relative text-dark">

                    <div className={`${styles.cards} d-flex flex-column justify-content-center`}>
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
                </Link>
            );
        });
    } else {
        display = "No characters found";
    }

    return <>{display}</>;
};

export default Cards;
