import {useEffect, useState} from 'react';
import {scale} from 'react-native-size-matters';

/**
 * @param {number} baseWidth - The width of the base design (e.g., iPhone 11 width).
 * @param {number} elementWidth - The width of the element in the design (e.g., button width in Figma).
 * @returns {number} - The scaled width of the element.
 */

const useScaledDimensions = (baseWidth: number, elementWidth: number) => {
  const [scaledWidth, setScaledWidth] = useState(0);

  useEffect(() => {
    const scaleRatio = scale(elementWidth) / baseWidth;
    const scaledElementWidth = scale(elementWidth * scaleRatio);
    setScaledWidth(scaledElementWidth);
  }, [baseWidth, elementWidth]);

  return scaledWidth;
};

export default useScaledDimensions;
