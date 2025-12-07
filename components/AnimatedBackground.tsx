import React, { CSSProperties } from 'react';

const styles: { [key: string]: CSSProperties } = {
  // --- .box-area ---
  boxArea: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    overflow: 'hidden',
  },
  // --- .box-area li ---
  boxAreaLiBase: {
    position: 'absolute',
    display: 'block',
    listStyle: 'none',
    width: '25px',
    height: '25px',
    background: 'rgba(255, 255, 255, 0.2)',
    animation: 'animate 20s linear infinite',
    bottom: '-150px',
  },
  // --- .box-area li:nth-child(1) ---
  boxAreaLi1: {
    left: '86%',
    width: '80px',
    height: '80px',
    animationDelay: '0s',
  },
  // --- .box-area li:nth-child(2) ---
  boxAreaLi2: {
    left: '12%',
    width: '30px',
    height: '30px',
    animationDelay: '1.5s',
    animationDuration: '10s',
  },
  // --- .box-area li:nth-child(3) ---
  boxAreaLi3: {
    left: '70%',
    width: '100px',
    height: '100px',
    animationDelay: '5.5s',
  },
  // --- .box-area li:nth-child(4) ---
  boxAreaLi4: {
    left: '42%',
    width: '150px',
    height: '150px',
    animationDelay: '0s',
    animationDuration: '15s',
  },
  // --- .box-area li:nth-child(5) ---
  boxAreaLi5: {
    left: '65%',
    width: '40px',
    height: '40px',
    animationDelay: '0s',
  },
  // --- .box-area li:nth-child(6) ---
  boxAreaLi6: {
    left: '15%',
    width: '110px',
    height: '110px',
    animationDelay: '3.5s',
  },
};

const AnimatedBackground: React.FC = () => {
  return (
    <div style={styles.animationArea}>
      <ul style={styles.boxArea}>
        {/* Box 1 */}
        <li style={{ ...styles.boxAreaLiBase, ...styles.boxAreaLi1 }}></li>
        {/* Box 2 */}
        <li style={{ ...styles.boxAreaLiBase, ...styles.boxAreaLi2 }}></li>
        {/* Box 3 */}
        <li style={{ ...styles.boxAreaLiBase, ...styles.boxAreaLi3 }}></li>
        {/* Box 4 */}
        <li style={{ ...styles.boxAreaLiBase, ...styles.boxAreaLi4 }}></li>
        {/* Box 5 */}
        <li style={{ ...styles.boxAreaLiBase, ...styles.boxAreaLi5 }}></li>
        {/* Box 6 */}
        <li style={{ ...styles.boxAreaLiBase, ...styles.boxAreaLi6 }}></li>
      </ul>
    </div>
  );
};

export default AnimatedBackground;