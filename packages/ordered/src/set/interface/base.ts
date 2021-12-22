import type { CustomBase } from '@rimbu/collection-types';
import type { List } from '@rimbu/list';
import type { Streamable } from '@rimbu/stream';

export interface OrderedSetBase<
  T,
  Tp extends OrderedSetBase.Types = OrderedSetBase.Types
> extends CustomBase.RSetBase<T, Tp> {
  /**
   * Returns a `List` instance containing the order of the elements.
   * @example
   * const s = OrderedHashSet.of('b', 'a', 'c')
   * console.log(s.order.toArray())
   * // => ['b', 'a', 'c']
   */
  readonly order: List<T>;
  /**
   * Returns the contained `Set` instance.
   * @example
   * const s = OrderedHashSet.of('b', 'a', 'c')
   * console.log(m.sourceSet.toString())
   * // => HashSet('a', 'b', 'c')
   */
  readonly sourceSet: CustomBase.WithElem<Tp, T>['sourceSet'];
}

export namespace OrderedSetBase {
  export interface NonEmpty<
    T,
    Tp extends OrderedSetBase.Types = OrderedSetBase.Types
  > extends CustomBase.RSetBase.NonEmpty<T, Tp>,
      Streamable.NonEmpty<T> {
    /**
     * Returns a non-empty `List` instance containing the order of the elements.
     * @example
     * const s = OrderedHashSet.of('b', 'a', 'c')
     * console.log(s.order.toArray())
     * // => ['b', 'a', 'c']
     */
    readonly order: List.NonEmpty<T>;
    /**
     * Returns the contained non-empty `Set` instance.
     * @example
     * const s = OrderedHashSet.of('b', 'a', 'c')
     * console.log(m.sourceSet.toString())
     * // => HashSet('a', 'b', 'c')
     */
    readonly sourceSet: CustomBase.WithElem<Tp, T>['sourceSetNonEmpty'];
  }

  export interface Builder<
    T,
    Tp extends OrderedSetBase.Types = OrderedSetBase.Types
  > extends CustomBase.RSetBase.Builder<T, Tp> {}

  export interface Context<
    UT,
    Tp extends OrderedSetBase.Types = OrderedSetBase.Types
  > extends CustomBase.RSetBase.Context<UT, Tp> {
    readonly typeTag: 'OrderedSet';

    /**
     * The List context used create Lists to keep value insertion order.
     */
    readonly listContext: List.Context;
    /**
     * The wrapped Set context type.
     */
    readonly setContext: CustomBase.WithElem<Tp, UT>['sourceContext'];
  }

  export interface Types extends CustomBase.RSetBase.Types {
    readonly normal: OrderedSetBase<this['_T']>;
    readonly nonEmpty: OrderedSetBase.NonEmpty<this['_T']>;
    readonly context: OrderedSetBase.Context<this['_T']>;
    readonly builder: OrderedSetBase.Builder<this['_T']>;
    readonly sourceContext: CustomBase.RSetBase.Context<this['_T']>;
    readonly sourceSet: CustomBase.RSetBase<this['_T']>;
    readonly sourceSetNonEmpty: CustomBase.RSetBase.NonEmpty<this['_T']>;
    readonly sourceBuilder: CustomBase.RSetBase.Builder<this['_T']>;
  }
}