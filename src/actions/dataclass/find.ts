import {IActionGeneric, IDispatch} from 'redux';
import {ReactWakanda} from 'business/react-wakanda';

export interface IFindParams {
  dataClassName: string;
  key: string|number;
  options?: any;
  successAction: (data: any) => IActionGeneric<any>;
};

export function find({dataClassName, key, options = {}, successAction}: IFindParams) {

  return (dispatch: IDispatch) => {
    return ReactWakanda.getInstance().dataClassBusiness
      .find(dataClassName, key, options)
      .then((entityDbo: any) => {

        console.log(entityDbo);
        dispatch(successAction(entityDbo));
      });
  };
}
