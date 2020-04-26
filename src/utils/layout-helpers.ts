import { css } from 'styled-components'

let camelToDashedCase = camel => camel.replace(/[A-Z]/g, m => '-' + m.toLowerCase())

export type SpaceProps = 'xxs' | 'xs' | 's' | 'm' | 'l' | 'xl' | 'xxl'
type Key = SpaceProps
/**
 * [All]
 * [Mobile, Tablet and up]
 * [Mobile, Tablet, Desktop]
 **/
type ViewPorts = Key | [Key, Key] | [Key, Key, Key]
export interface ResponsiveProps {
  margin?: ViewPorts
  marginTop?: ViewPorts
  marginBottom?: ViewPorts
  marginLeft?: ViewPorts
  marginRight?: ViewPorts
  padding?: ViewPorts
  paddingTop?: ViewPorts
  paddingBottom?: ViewPorts
  paddingLeft?: ViewPorts
  paddingRight?: ViewPorts
  maxWidth?: number | string
  minWidth?: number | string
  width?: number | string
  minHeight?: number | string
  maxHeight?: number | string
  height?: number | string

  position?: 'relative' | 'absolute' | 'fixed'
  justifyContent?: 'center' | 'flex-start' | 'right' | 'space-between' | 'space-around' | 'space-evenly'
}

const getSpace = (value: SpaceProps): string => {
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
    default:
      return '0'
  }
}

const getResponsiveProps = (prop: keyof ResponsiveProps, value: ViewPorts): Readonly<[Key, Key, Key]> => {
  const dashedProp = camelToDashedCase(prop)
  if (typeof value !== 'object') {
    return css`
      ${dashedProp}: ${getSpace(value)};
    `
  } else if (value?.length === 2) {
    return css`
      @media (min-width: 0) {
        ${dashedProp}: ${getSpace(value[0])};
      }

      @media (min-width: 768px) {
        ${dashedProp}: ${getSpace(value[1])};
      }
    `
  } else {
    return css`
      @media (min-width: 0) {
        ${dashedProp}: ${getSpace(value[0])};
      }

      @media (min-width: 768px) {
        ${dashedProp}: ${getSpace(value[1])};
      }
      @media (min-width: 992) {
        ${dashedProp}: ${getSpace(value[2])};
      }
    `
  }
}

const responsiveCss = css<ResponsiveProps>`
  ${p =>
    p.justifyContent &&
    css`
      justify-content: ${p.justifyContent};
    `}
  ${p =>
    p.position &&
    css<ResponsiveProps>`
      position: ${p => `${p.position}`};
    `}

  ${p => p.margin && getResponsiveProps('margin', p.margin)}
  ${p => p.marginTop && getResponsiveProps('marginTop', p.marginTop)}
  ${p => p.marginBottom && getResponsiveProps('marginBottom', p.marginBottom)}
  ${p => p.marginLeft && getResponsiveProps('marginLeft', p.marginLeft)}
  ${p => p.marginRight && getResponsiveProps('marginRight', p.marginRight)}
  
  ${p => p.width && getResponsiveProps('width', p.width)}
  ${p => p.maxWidth && getResponsiveProps('maxWidth', p.maxWidth)}
  ${p => p.minWidth && getResponsiveProps('minWidth', p.minWidth)}

  ${p => p.height && getResponsiveProps('height', p.height)}
  ${p => p.minHeight && getResponsiveProps('minHeight', p.minHeight)}
  ${p => p.maxHeight && getResponsiveProps('maxHeight', p.maxHeight)}

`

export { getSpace, responsiveCss }
