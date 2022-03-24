/* eslint-disable react/forbid-prop-types */
import React, { useRef, useEffect } from 'react';
import { createPortal } from 'react-dom';
import PT, { Validator } from 'prop-types';
import { createPopper } from '@popperjs/core';

import usePortal from '../../hooks/use-portal';
import { intrinsicComponent, generateClassNames, useForkRef, objectValues } from '../../utils/functions';
import { Position, Strategy } from './types';
import type { PopperProps, PopperOptions, Modifiers } from './popper.props';
import Styled from './popper.styles';

const Popper = intrinsicComponent<PopperProps, HTMLDivElement>(
  (
    {
      anchorEl,
      children,
      open,
      position: initialPlacement = 'bottom',
      arrow = false,
      popperOptions,
      onClick,
      overlay = false,
      zIndex = 1300,
      enableUnderlayingEvent,
      wrapperStyles = {},
    }: PopperProps,
    ref
    // eslint-disable-next-line sonarjs/cognitive-complexity
  ): JSX.Element => {
    const target = usePortal(generateClassNames('Popper'));
    const popperRef = useRef(null);
    const handlePopperRef = useForkRef(popperRef, ref);

    const arrowModifier = [
      { name: 'arrow', options: { element: '[data-popper-arrow]' } },
      {
        name: 'offset',
        options: {
          offset: [0, 10],
        },
      },
    ];

    let popperModifiers: Modifiers = arrow ? arrowModifier : [];

    if (popperOptions && popperOptions.modifiers != null) {
      popperModifiers = popperModifiers.concat(popperOptions.modifiers);
    }

    useEffect(() => {
      if (anchorEl && popperRef.current !== null) {
        const popper = createPopper(anchorEl, popperRef.current, {
          placement: initialPlacement,
          ...popperOptions,
          modifiers: popperModifiers,
        });

        handlePopperRef.current = popper;

        return () => {
          popper.destroy();
          handlePopperRef.current = null;
        };
      }
    }, [anchorEl]);

    if (!open) {
      return <div ref={handlePopperRef} />;
    }

    const passEventToUnderlayingEvent = (event: React.MouseEvent<HTMLDivElement>): void => {
      setTimeout(() => {
        if (event.clientX && event.clientY) {
          const elem = document.elementFromPoint(event.clientX, event.clientY);
          if (elem) {
            elem.dispatchEvent(event.nativeEvent);
          }
        }
      }, 0);
    };

    const handleOnClicking = (event: React.MouseEvent<HTMLDivElement>): void => {
      event.persist();
      event.preventDefault();
      event.stopPropagation();

      if (onClick) {
        onClick(event);
      }
      if (enableUnderlayingEvent) {
        passEventToUnderlayingEvent(event);
      }
    };

    const renderOverlay = (): JSX.Element => (
      <Styled.Overlay onClick={handleOnClicking} onContextMenu={handleOnClicking} />
    );

    const render = (): JSX.Element => (
      <Styled.PopperWrapper zIndex={zIndex} style={{ ...wrapperStyles }}>
        {overlay && renderOverlay()}
        <Styled.Popper ref={handlePopperRef}>
          {children}
          {arrow && <Styled.Arrow data-popper-arrow position={handlePopperRef?.state?.placement || initialPlacement} />}
        </Styled.Popper>
      </Styled.PopperWrapper>
    );

    return createPortal(render(), target);
  }
);

Popper.defaultProps = {};

export const propTypes = {
  anchorEl: PT.oneOfType([PT.instanceOf(Element), PT.object]),

  popperOptions: PT.shape({
    modifiers: PT.arrayOf(
      PT.shape({
        data: PT.object,
        effect: PT.func,
        enabled: PT.bool,
        fn: PT.func,
        name: PT.any.isRequired,
        options: PT.object,
        phase: PT.oneOf([
          'afterMain',
          'afterRead',
          'afterWrite',
          'beforeMain',
          'beforeRead',
          'beforeWrite',
          'main',
          'read',
          'write',
        ]),
        requires: PT.arrayOf(PT.string),
        requiresIfExists: PT.arrayOf(PT.string),
      })
    ) as Validator<Modifiers>,
    onFirstUpdate: PT.func,
    placement: PT.oneOf(objectValues(Position)),
    strategy: PT.oneOf(objectValues(Strategy)),
  }) as Validator<PopperOptions>,
  overlay: PT.bool,
  arrow: PT.bool,
  zIndex: PT.number,
  enableUnderlayingEvent: PT.bool,
  wrapperStyles: PT.object,
};

Popper.propTypes = propTypes;

export default Popper;
