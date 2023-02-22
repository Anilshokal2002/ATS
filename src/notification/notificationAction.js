import * as React from 'react';
import { print } from '../Constants';

export const navigationRef = React.createRef();

export function navigate(name, params) {
  navigationRef?.current?.navigate(name, params);
}

export const notificationOpen = notification => {
  print(notification, '/////------------------->');
};
