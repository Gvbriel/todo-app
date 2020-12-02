import React from "react";
import styles from "./ListItem.module.scss";



const ListItem = ({id,description, isCompleted, deleteFn, completeFn}) => {

    const isComp = isCompleted ? styles.completed : styles.description;

    return (
        <li className={styles.wrapper}>
            <p className={styles.id}>
                {id}
            </p>
            <p className={isComp}>
                {description}
            </p>
                <button
                    onClick={() => completeFn(id)}
                    className={styles.completeButton}
                    type="complete">&#10003;</button>
                <button
                    onClick={() => deleteFn(id)}
                    className={styles.deleteButton}
                    type="delete">x</button>
        </li>
    )
};

export default ListItem;