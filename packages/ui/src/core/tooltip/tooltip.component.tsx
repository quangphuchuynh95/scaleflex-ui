import React, { useState, useRef, useEffect } from 'react';
import PT, { Validator } from 'prop-types';

import { intrinsicComponent, objectValues } from '../../utils/functions';
import type { TooltipProps } from './tooltip.props';
import type { PopperOptions, Modifiers } from '../popper/popper.props';
import { Size } from './types';
import { Position, Strategy } from '../popper/types';
import Styled from './tooltip.styles';

import Popper from '../popper';

const Tooltip = intrinsicComponent<TooltipProps, HTMLSpanElement>(
  (
    {
      children,
      position = Position.Top,
      popperOptions,
      arrow = true,
      warning = false,
      enableUnderlayingEvent,
      popperWrapperStyles = {},
      enableHover,
      enterDelay = 0,
      leaveDelay = 0,
      stayOpen,
      title,
      tooltipProps,
      size = Size.Sm,
      ...rest
    }: TooltipProps,
    ref
  ): JSX.Element => {
    const [isHovering, setIsHovering] = useState(true);
    const [anchorEl, setAnchorEl] = useState<HTMLElement | null>(null);

    const open = Boolean(anchorEl);

    const tooltipRef = useRef(null);

    const handleMouseEnter = (event: any): void => {
      const { onMouseEnter } = children.props;
      const { currentTarget } = event;

      setTimeout(() => {
        setAnchorEl(currentTarget);
      }, enterDelay);

      if (typeof onMouseEnter === 'function') {
        onMouseEnter(event);
      }
    };

    const closeTooltip = (): void => {
      if (!stayOpen) {
        setAnchorEl(null);
      }
    };

    useEffect(() => {
      closeTooltip();
    }, [isHovering]);

    const handleMouseLeave = (event: any): void => {
      const { onMouseLeave } = children.props;

      if (enableHover) {
        setTimeout(() => {
          if (!isHovering) {
            closeTooltip();
          }
        }, 200);
      } else {
        setTimeout(() => {
          closeTooltip();
        }, leaveDelay);
      }

      if (typeof onMouseLeave === 'function') {
        onMouseLeave(event);
      }
    };

    const handleEnteringTooltip = (): void => {
      if (enableHover) {
        setIsHovering(true);
      }
    };

    const handleLeavingTooltip = (): void => {
      if (enableHover) {
        setTimeout(() => {
          setIsHovering(false);
        }, leaveDelay);
      }
    };

    const render = (): JSX.Element => (
      <Popper
        ref={tooltipRef}
        position={position}
        anchorEl={anchorEl}
        warning={warning}
        open={anchorEl ? open : false}
        popperOptions={popperOptions}
        arrow={arrow}
        enableUnderlayingEvent={enableUnderlayingEvent}
        wrapperStyles={popperWrapperStyles}
      >
        <Styled.TooltipContainer
          {...rest}
          size={size}
          open={open}
          onMouseEnter={handleEnteringTooltip}
          onMouseLeave={handleLeavingTooltip}
        >
          <Styled.Tooltip warning={warning} {...tooltipProps}>
            {title}
          </Styled.Tooltip>
        </Styled.TooltipContainer>
      </Popper>
    );

    return (
      <>
        {React.cloneElement(children, {
          ref,
          onMouseEnter: handleMouseEnter,
          onMouseLeave: handleMouseLeave,
        })}
        {render()}
      </>
    );
  }
);

Tooltip.propTypes = {
  position: PT.oneOf(objectValues(Position)),
  size: PT.oneOf(objectValues(Size)),
  title: PT.node.isRequired,
  children: PT.element.isRequired,
  arrow: PT.bool,
  warning: PT.bool,
  enterDelay: PT.number,
  leaveDelay: PT.number,
  stayOpen: PT.bool,
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
  enableUnderlayingEvent: PT.bool,
  popperWrapperStyles: PT.object,
  tooltipProps: PT.object,
  enableHover: PT.bool,
};

export default Tooltip;
