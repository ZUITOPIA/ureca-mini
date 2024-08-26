import React from "react";
import styles from "./NumberGuessPage.module.css"; // 스타일 시트 임포트

export default function PrintHistory({ tryHistory }) {
    return (
        <ul className={styles.historyList}>
            {tryHistory.map((h, idx) => (
                <li key={idx} className={styles.historyItem}>
                    {h}
                </li>
            ))}
        </ul>
    );
}
