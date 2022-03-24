import { BaseService } from '../base.service';

export abstract class BasePlayerService<T> extends BaseService<T> {
  public abstract getData(playerId: string): Promise<T>;
}
