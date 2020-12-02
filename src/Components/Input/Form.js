import React from "react";
import styles from "./Form.module.scss";

const Form = ({submitFn}) => (
    <div className={styles.wrapper}>
        <form
            className={styles.form}
            onSubmit={submitFn}
            autoComplete="off"
        >
            <label className={styles.customField}>
                <input
                    type="text"
                    name="item"
                    placeholder=" " id="item"
                    className={styles.addItem}
                    required
                />
                <span className={styles.activity}>add activity:</span>
            </label>
            <button
                className={styles.addButton}
                type="submit">+</button>
        </form>
    </div>
);

export default Form;