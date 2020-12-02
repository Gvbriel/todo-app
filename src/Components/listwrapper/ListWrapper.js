import React from "react";
import ListItem from "./ListItem/ListItem";
import styles from "./ListWrapper.module.scss";

class ListWrapper extends React.Component{



    render(){
        return(
            <ul className={styles.wrapper}>
                {this.props.items.map(item =>(
                    <ListItem
                        key={item.id}
                        deleteFn={this.props.deleteFn}
                        completeFn={this.props.completeFn}
                        {...item} />
                ))}
            </ul>
        )
    }
};

export default ListWrapper;