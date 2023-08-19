import React from 'react';
import styles from './index.module.scss';

const _arr = (cnt: number) =>
    Array(cnt)
        .fill(0)
        .map((it, i) => it + i);

function Universe() {
    return (
        <div className={styles['stars-wrapper']}>
            {_arr(3).map((it) => (
                <svg
                    key={it}
                    className={styles.stars}
                    width="100%"
                    height="100%"
                    preserveAspectRatio="none"
                >
                    {_arr(88).map((i) => (
                        <circle
                            key={i}
                            className={styles.star}
                            cx={Math.round(Math.random() * 10000) / 100 + '%'}
                            cy={Math.round(Math.random() * 10000) / 100 + '%'}
                            r={Math.round((Math.random() + 0.5) * 10) / 10}
                        ></circle>
                    ))}
                </svg>
            ))}
            <svg className="extras" width="100%" height="100%" preserveAspectRatio="none">
                <defs>
                    <radialGradient id="comet-gradient" cx="0" cy=".5" r="0.5">
                        <stop offset="0%" stopColor="rgba(255,255,255,.8)"></stop>
                        <stop offset="100%" stopColor="rgba(255,255,255,0)"></stop>
                    </radialGradient>
                </defs>
                <g transform="rotate(-135)">
                    <ellipse
                        className={`${styles.comet} ${styles['comet-a']}`}
                        fill="url(#comet-gradient)"
                        cx="0"
                        cy="0"
                        rx="150"
                        ry="2"
                    ></ellipse>
                </g>
                <g transform="rotate(20)">
                    <ellipse
                        className={`${styles.comet} ${styles['comet-b']}`}
                        fill="url(#comet-gradient)"
                        cx="100%"
                        cy="0"
                        rx="150"
                        ry="2"
                    ></ellipse>
                </g>
                <g transform="rotate(300)">
                    <ellipse
                        className={`${styles.comet} ${styles['comet-c']}`}
                        fill="url(#comet-gradient)"
                        cx="40%"
                        cy="100%"
                        rx="150"
                        ry="2"
                    ></ellipse>
                </g>
            </svg>
        </div>
    );
}

export default React.memo(Universe);
