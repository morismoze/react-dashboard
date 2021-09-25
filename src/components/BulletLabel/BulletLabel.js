import React from 'react';

import classNames from "classnames";

import colors from '../../modules/styles/colors.module.scss';
import styles from './BulletLabel.module.scss';

const BulletLabel = ({
    bulletText,
    bulletBackgroundColor,
    bulletSize = 6,
    bulletTextSize = 10,
    bulletTextColor = colors.darkBlue,
    className
}) => {
  return (
      <div
          className={classNames(
              styles.bulletLabelWrapper,
              className
          )}
      >
          <div
              className={styles.bulletLabelWrapper__bullet}
              style={{
                  backgroundColor: bulletBackgroundColor,
                  height: `${bulletSize}px`, width: `${bulletSize}px`
              }}
          />
          <span
              className={classNames(
                  styles.bulletLabelWrapper__bulletText,
                  className
              )}
              style={{
                  fontSize: bulletTextSize,
                  color: bulletTextColor
              }}
          >
          {bulletText}
      </span>
      </div>
  );
};

export default BulletLabel;