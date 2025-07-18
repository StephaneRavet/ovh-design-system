import { Slider, useSliderContext } from '@ark-ui/react/slider';
import classNames from 'classnames';
import { type FC, type JSX, type KeyboardEvent, useRef, useState } from 'react';
import { useFormField } from '../../../../form-field/src';
import { Tooltip, TooltipContent, TooltipTrigger } from '../../../../tooltip/src';
import style from './rangeThumb.module.scss';

interface RangeThumbProp {
  disabled?: boolean,
  index: number,
  invalid?: boolean,
}

const RangeThumb: FC<RangeThumbProp> = ({
  disabled,
  index,
  invalid,
}): JSX.Element => {
  const thumbRef = useRef<HTMLDivElement>(null);
  const fieldContext = useFormField();
  const { value } = useSliderContext();
  const [isFocused, setIsFocused] = useState(false);
  const [isTooltipOpen, setIsTooltipOpen] = useState(false);

  function onBlur(): void {
    setIsFocused(false);
    setIsTooltipOpen(false);
  }

  function onFocus(): void {
    setIsFocused(true);
    setIsTooltipOpen(true);
  }

  function onKeyDown(event: KeyboardEvent): void {
    if ((event.ctrlKey || event.metaKey) && (event.key === 'ArrowRight' || event.key === 'ArrowLeft')) {
      event.preventDefault();
    }
  }

  return (
    <Tooltip open={ !disabled && (isFocused || isTooltipOpen) }>
      <TooltipTrigger asChild>
        <Slider.Thumb
          aria-invalid={ invalid }
          aria-describedby={ fieldContext?.ariaDescribedBy }
          aria-labelledby={ index === 0 ? fieldContext?.labelId : undefined }
          className={ classNames(
            style['range-thumb'],
            { [style['range-thumb--invalid']]: invalid },
          )}
          index={ index }
          onBlur={ onBlur }
          onChange={ () => thumbRef.current?.focus() }
          onFocus={ onFocus }
          onKeyDown={ onKeyDown }
          onMouseLeave={ () => setIsTooltipOpen(false) }
          onMouseOver={ () => setIsTooltipOpen(true) }
          ref={ thumbRef }>
          <Slider.HiddenInput />
        </Slider.Thumb>
      </TooltipTrigger>

      <TooltipContent withArrow>
        { value[index] }
      </TooltipContent>
    </Tooltip>
  );
};

RangeThumb.displayName = 'RangeThumb';

export {
  RangeThumb,
  type RangeThumbProp,
};
