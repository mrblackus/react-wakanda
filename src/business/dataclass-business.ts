import {Business} from './business';
import {DataClassBaseService} from 'wakanda-client';

export class DataClassBusiness extends Business {

  public find(dataClassName: string, key: string|number, options: any) {
    return DataClassBaseService.find({
      httpClient: this._httpClient,
      key,
      options: options,
      dataClassName
    });
  }

  public query(dataClassName: string, options: any) {
    return DataClassBaseService.query({
      httpClient: this._httpClient,
      options,
      dataClassName
    });
  }
}
