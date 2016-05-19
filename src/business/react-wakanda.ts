import {WakandaClient} from 'wakanda-client';
import {DataClassBusiness} from './dataclass-business';

export class ReactWakanda {

  private static _instance: ReactWakanda = null;

  public dataClassBusiness: DataClassBusiness;

  private _client: WakandaClient;

  public static getInstance() {
    if (!this._instance) {
      this._instance = new ReactWakanda();
    }

    return this._instance;
  }

  constructor() {
    this._client = new WakandaClient();

    this.dataClassBusiness = new DataClassBusiness(this._client._httpClient);
  }
}
