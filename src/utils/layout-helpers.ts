import { css } from 'styled-components'

let camelToDashedCase = camel => camel.replace(/[A-Z]/g, m => '-' + m.toLowerCase())

export type SpaceProps = 'xxs' | 'xs' | 's' | 'm' | 'l' | 'xl' | 'xxl'
export type PositionProps = 'relative' | 'absolute' | 'fixed'
export type JustifyProps = 'center' | 'flex-start' | 'right' | 'space-between' | 'space-around' | 'space-evenly'
export type NumStringProps = number | string | null
/**
 * [All]
 * [Mobile, Tablet and up]
 * [Mobile, Tablet, Desktop]
 **/
type ViewPorts<T> = T | [T, T] | [T, T, T]

export interface ResponsiveProps {
  margin?: ViewPorts<SpaceProps>
  marginTop?: ViewPorts<SpaceProps>
  marginBottom?: ViewPorts<SpaceProps>
  marginLeft?: ViewPorts<SpaceProps>
  marginRight?: ViewPorts<SpaceProps>
  padding?: ViewPorts<SpaceProps>
  paddingTop?: ViewPorts<SpaceProps>
  paddingBottom?: ViewPorts<SpaceProps>
  paddingLeft?: ViewPorts<SpaceProps>
  paddingRight?: ViewPorts<SpaceProps>
  maxWidth?: ViewPorts<NumStringProps>
  minWidth?: ViewPorts<NumStringProps>
  width?: ViewPorts<NumStringProps>
  minHeight?: ViewPorts<NumStringProps>
  maxHeight?: ViewPorts<NumStringProps>
  height?: ViewPorts<NumStringProps>

  position?: ViewPorts<PositionProps>
  justifyContent?: ViewPorts<JustifyProps>

  top?: ViewPorts<NumStringProps>
  left?: ViewPorts<NumStringProps>
  right?: ViewPorts<NumStringProps>
  bottom?: ViewPorts<NumStringProps>
}

// const getValue = (value: ) => {
//   /**
//    * If value is a string, use it as it is
//    * If it's a number, use pixels
//    */

//   if (type )

// }

const getValueByProps = (value: SpaceProps | NumStringProps | PositionProps): string => {
  switch (value) {
    case 'xxs':
      return '4px'
    case 'xs':
      return '8px'
    case 's':
      return '12px'
    case 'm':
      return '16px'
    case 'l':
      return '20px'
    case 'xl':
      return '24px'
    case 'xxl':
      return '40px'
    default: {
      if (typeof value === 'number') {
        return `${value}px`
      }

      return value
    }
  }
}

const getResponsiveProps = (
  prop: keyof ResponsiveProps,
  value: ViewPorts<SpaceProps | NumStringProps | PositionProps>,
) => {
  const dashedProp = camelToDashedCase(prop)
  if (typeof value !== 'object') {
    return css`
      ${dashedProp}: ${getValueByProps(value)};
    `
  } else if (value?.length === 2) {
    return css`
      @media (min-width: 0) {
        ${dashedProp}: ${getValueByProps(value[0])};
      }

      @media (min-width: 768px) {
        ${dashedProp}: ${getValueByProps(value[1])};
      }
    `
  } else {
    return css`
      @media (min-width: 0) {
        ${dashedProp}: ${getValueByProps(value[0])};
      }

      @media (min-width: 768px) {
        ${dashedProp}: ${getValueByProps(value[1])};
      }
      @media (min-width: 992px) {
        ${dashedProp}: ${getValueByProps(value[2])};
      }
    `
  }
}

export const responsiveCss = css<ResponsiveProps>`
  ${(p: ResponsiveProps) => p.position && getResponsiveProps('position', p.position)}
  ${(p: ResponsiveProps) => p.justifyContent && getResponsiveProps('justifyContent', p.justifyContent)}
 
  ${(p: ResponsiveProps) => p.margin && getResponsiveProps('margin', p.margin)}
  ${(p: ResponsiveProps) => p.marginTop && getResponsiveProps('marginTop', p.marginTop)}
  ${(p: ResponsiveProps) => p.marginBottom && getResponsiveProps('marginBottom', p.marginBottom)}
  ${(p: ResponsiveProps) => p.marginLeft && getResponsiveProps('marginLeft', p.marginLeft)}
  ${(p: ResponsiveProps) => p.marginRight && getResponsiveProps('marginRight', p.marginRight)}
  
  ${(p: ResponsiveProps) => p.width && getResponsiveProps('width', p.width)}
  ${(p: ResponsiveProps) => p.maxWidth && getResponsiveProps('maxWidth', p.maxWidth)}
  ${(p: ResponsiveProps) => p.minWidth && getResponsiveProps('minWidth', p.minWidth)}

  ${(p: ResponsiveProps) => p.height && getResponsiveProps('height', p.height)}
  ${(p: ResponsiveProps) => p.minHeight && getResponsiveProps('minHeight', p.minHeight)}
  ${(p: ResponsiveProps) => p.maxHeight && getResponsiveProps('maxHeight', p.maxHeight)}

  ${(p: ResponsiveProps) => p.top && getResponsiveProps('top', p.top)}
  ${(p: ResponsiveProps) => p.left && getResponsiveProps('left', p.left)}
  ${(p: ResponsiveProps) => p.right && getResponsiveProps('right', p.right)}
  ${(p: ResponsiveProps) => p.bottom && getResponsiveProps('bottom', p.bottom)}
  
`
