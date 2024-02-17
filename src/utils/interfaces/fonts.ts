export type IFont =
  | "regular"
  | "italic"
  | "light"
  | "black"
  | "bold"
  | "medium"
  | "thin"
  | "blackItalic"
  | "boldItalic"
  | "lightItalic"
  | "mediumItalic"
  | "thinItalic";

export type IFontWeight = "xbold" | "bold" | "regular" | "light";

export type IFontSize =
  | "bodyLarge"
  | "bodyMedium"
  | "bodySmall"
  | "overline"
  | "displayLarge"
  | "displayMedium"
  | "displaySmall"
  | "headline1"
  | "headline2"
  | "headline3"
  | "headline4"
  | "headline5"
  | "headline6";

export type ILineHeight =
  | "bodyLarge"
  | "bodyMedium"
  | "bodySmall"
  | "overline"
  | "displayLarge"
  | "displayMedium"
  | "displaySmall"
  | "headline1"
  | "headline2"
  | "headline3"
  | "headline4"
  | "headline5"
  | "headline6";

export type ITextVariants =
  | "sinaf:body-large/bold-18"
  | "sinaf:body-large/regular-18"
  | "sinaf:body-medium/bold-16"
  | "sinaf:body-medium/regular-16"
  | "sinaf:body-small/regular-14"
  | "sinaf:body-small/light-14"
  | "sinaf:overline/regular-13"
  | "sinaf:overline/light-13"
  | "sinaf:headline-1/bold-32"
  | "sinaf:headline-1/regular-32"
  | "sinaf:headline-1/light-32"
  | "sinaf:headline-2/bold-29"
  | "sinaf:headline-2/regular-29"
  | "sinaf:headline-2/light-32"
  | "sinaf:headline-3/bold-26"
  | "sinaf:headline-3/regular-26"
  | "sinaf:headline-4/bold-23"
  | "sinaf:headline-4/regular-23"
  | "sinaf:headline-5/bold-20"
  | "sinaf:headline-5/regular-20"
  | "sinaf:headline-6/bold-18"
  | "sinaf:headline-6/regular-18"
  | "sinaf:display-large/xbold-32"
  | "sinaf:display-large/light-32"
  | "sinaf:display-medium/xbold-29"
  | "sinaf:display-medium/regular-29"
  | "sinaf:display-small/xbold-26"
  | "sinaf:display-small/regular-26";

export type IVariants = ITextVariants | Array<ITextVariants>;
