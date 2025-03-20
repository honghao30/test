import ICON_PATH_DICT from './IconPaths'

type TIconName = keyof typeof ICON_PATH_DICT

interface IAIconBase {
  iconName: TIconName
}

export type { TIconName }
