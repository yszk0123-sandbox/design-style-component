// Workaround to suppress flow errors of styled-components

declare module 'danger' {
  declare var exports: any;
}

declare module 'expect' {
  declare var exports: any;
}

declare module 'react-native' {
  declare var exports: any;
}
