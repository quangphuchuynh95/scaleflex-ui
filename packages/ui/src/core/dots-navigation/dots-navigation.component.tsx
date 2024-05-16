import React from 'react';

import { intrinsicComponent } from '../../utils/functions';
import Dot from '../dot';
import type { DotsNavigationProps } from './dots-navigation.props';
import Styled from './dots-navigation.styles';

const DotsNavigation = intrinsicComponent<DotsNavigationProps, HTMLDivElement>(
  ({ activeItem = 0, size, ...rest }: DotsNavigationProps, ref): JSX.Element => (
    <Styled.DotsNavigation ref={ref} {...rest}>
      {[...new Array(size)]
        .map((_item, index) => index)
        .map((index) => (
          <Dot key={index} active={activeItem > -1 && index <= activeItem} />
        ))}
    </Styled.DotsNavigation>
  )
);

export default DotsNavigation;
