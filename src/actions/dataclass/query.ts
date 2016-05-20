import {IActionGeneric, IDispatch} from 'redux';

import {ReactWakanda} from 'business/react-wakanda';

export interface IQueryParams {
  dataClassName: string;
  options?: any;
  successAction: (data: any) => IActionGeneric<any>;
}

export function query({dataClassName, options = {}, successAction}) {
  return (dispatch: IDispatch) => {
    return ReactWakanda.getInstance().dataClassBusiness
      .query(dataClassName, options)
      .then((collectionDbo: any) => {
        dispatch(successAction(collectionDbo));
      });
  };
}
