// import styles from './Announcement.module.css';
import {Banknote, Calendar, Clock} from "lucide-react";
// import React from "@types/react";
import styles from './Announcement.module.css';

export default function Announcement(props) {
    return (
        <div className = {styles.announcement}>
            <p className = {styles.title}>{props.announcement.title}</p>
            <div className = {styles.options}>
                <div className = {styles.daysOption}>
                    <Calendar className={styles.icon} color = "#FF6F66"/>
                    <div className={styles.column}>
                    <p className = {styles.optionText}>{props.announcement.days}-Days</p>
                    <p className={styles.optionDetailText} > Per Week </p>
                    </div>

                </div>
                <div className = {styles.budgetOption}>
                    <Banknote className={styles.icon} color = "#4FC3B1"/>
                    <div className={styles.column}>
                    <p className = {styles.optionText}>{props.announcement.budget}-PKR</p>
                    <p className={styles.optionDetailText} > Per Month </p>
                    </div>

                </div>
                <div className = {styles.timeOption}>
                    <Clock className={styles.icon} color = "#3E6C98"/>
                    <div className={styles.column} >
                        <p className = {styles.optionText}>{props.announcement.time}-Hours</p>
                        <p className={styles.optionDetailText} > Per Day </p>
                    </div>
                </div>
            </div>
        </div>
    )

}
