import { Properties } from './panda-csstype'

type ClassNameFn = (value: string, prop: string) => string

export type PropertyClassName = string | ClassNameFn

type ValuesFn = (token: (path: string) => any) => Record<string, string>

type CssObject =
  | Properties
  | {
      [selector: string]: string | number | null | undefined | Properties
    }

export type PropertyUtility<T extends Record<string, any>> = {
  className: PropertyClassName
  transform?: (value: string) => CssObject
  values?: keyof T | string[] | Record<string, string> | ValuesFn
  cssType?: keyof Properties
  valueType?: string
}

export type UtilityConfig<T = Record<string, any>> = {
  properties: {
    [property in keyof Properties | (string & {})]?: string | PropertyUtility<T>
  }

  shorthands?: {
    [shorthand: string]: string
  }
}

export type PluginResult = {
  type: 'object' | 'named-object'
  name?: string
  data: Record<string, any>
}
