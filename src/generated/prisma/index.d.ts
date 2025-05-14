
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model Cuisine
 * 
 */
export type Cuisine = $Result.DefaultSelection<Prisma.$CuisinePayload>
/**
 * Model PantryEssential
 * 
 */
export type PantryEssential = $Result.DefaultSelection<Prisma.$PantryEssentialPayload>
/**
 * Model Vegetable
 * 
 */
export type Vegetable = $Result.DefaultSelection<Prisma.$VegetablePayload>
/**
 * Model Mushroom
 * 
 */
export type Mushroom = $Result.DefaultSelection<Prisma.$MushroomPayload>
/**
 * Model Fruit
 * 
 */
export type Fruit = $Result.DefaultSelection<Prisma.$FruitPayload>
/**
 * Model NutAndSeed
 * 
 */
export type NutAndSeed = $Result.DefaultSelection<Prisma.$NutAndSeedPayload>
/**
 * Model Dairy
 * 
 */
export type Dairy = $Result.DefaultSelection<Prisma.$DairyPayload>
/**
 * Model Meat
 * 
 */
export type Meat = $Result.DefaultSelection<Prisma.$MeatPayload>
/**
 * Model Seafood
 * 
 */
export type Seafood = $Result.DefaultSelection<Prisma.$SeafoodPayload>
/**
 * Model HerbAndSpice
 * 
 */
export type HerbAndSpice = $Result.DefaultSelection<Prisma.$HerbAndSpicePayload>
/**
 * Model Sweetener
 * 
 */
export type Sweetener = $Result.DefaultSelection<Prisma.$SweetenerPayload>
/**
 * Model Grain
 * 
 */
export type Grain = $Result.DefaultSelection<Prisma.$GrainPayload>
/**
 * Model Legume
 * 
 */
export type Legume = $Result.DefaultSelection<Prisma.$LegumePayload>
/**
 * Model Pasta
 * 
 */
export type Pasta = $Result.DefaultSelection<Prisma.$PastaPayload>
/**
 * Model Bread
 * 
 */
export type Bread = $Result.DefaultSelection<Prisma.$BreadPayload>
/**
 * Model OilAndFat
 * 
 */
export type OilAndFat = $Result.DefaultSelection<Prisma.$OilAndFatPayload>
/**
 * Model Condiment
 * 
 */
export type Condiment = $Result.DefaultSelection<Prisma.$CondimentPayload>
/**
 * Model SoupStock
 * 
 */
export type SoupStock = $Result.DefaultSelection<Prisma.$SoupStockPayload>
/**
 * Model Beverage
 * 
 */
export type Beverage = $Result.DefaultSelection<Prisma.$BeveragePayload>
/**
 * Model BakingGood
 * 
 */
export type BakingGood = $Result.DefaultSelection<Prisma.$BakingGoodPayload>
/**
 * Model DoughWrapper
 * 
 */
export type DoughWrapper = $Result.DefaultSelection<Prisma.$DoughWrapperPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Cuisines
 * const cuisines = await prisma.cuisine.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Cuisines
   * const cuisines = await prisma.cuisine.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.cuisine`: Exposes CRUD operations for the **Cuisine** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Cuisines
    * const cuisines = await prisma.cuisine.findMany()
    * ```
    */
  get cuisine(): Prisma.CuisineDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.pantryEssential`: Exposes CRUD operations for the **PantryEssential** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more PantryEssentials
    * const pantryEssentials = await prisma.pantryEssential.findMany()
    * ```
    */
  get pantryEssential(): Prisma.PantryEssentialDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.vegetable`: Exposes CRUD operations for the **Vegetable** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Vegetables
    * const vegetables = await prisma.vegetable.findMany()
    * ```
    */
  get vegetable(): Prisma.VegetableDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.mushroom`: Exposes CRUD operations for the **Mushroom** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Mushrooms
    * const mushrooms = await prisma.mushroom.findMany()
    * ```
    */
  get mushroom(): Prisma.MushroomDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.fruit`: Exposes CRUD operations for the **Fruit** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Fruits
    * const fruits = await prisma.fruit.findMany()
    * ```
    */
  get fruit(): Prisma.FruitDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.nutAndSeed`: Exposes CRUD operations for the **NutAndSeed** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more NutAndSeeds
    * const nutAndSeeds = await prisma.nutAndSeed.findMany()
    * ```
    */
  get nutAndSeed(): Prisma.NutAndSeedDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.dairy`: Exposes CRUD operations for the **Dairy** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Dairies
    * const dairies = await prisma.dairy.findMany()
    * ```
    */
  get dairy(): Prisma.DairyDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.meat`: Exposes CRUD operations for the **Meat** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Meats
    * const meats = await prisma.meat.findMany()
    * ```
    */
  get meat(): Prisma.MeatDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.seafood`: Exposes CRUD operations for the **Seafood** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Seafoods
    * const seafoods = await prisma.seafood.findMany()
    * ```
    */
  get seafood(): Prisma.SeafoodDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.herbAndSpice`: Exposes CRUD operations for the **HerbAndSpice** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more HerbAndSpices
    * const herbAndSpices = await prisma.herbAndSpice.findMany()
    * ```
    */
  get herbAndSpice(): Prisma.HerbAndSpiceDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.sweetener`: Exposes CRUD operations for the **Sweetener** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Sweeteners
    * const sweeteners = await prisma.sweetener.findMany()
    * ```
    */
  get sweetener(): Prisma.SweetenerDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.grain`: Exposes CRUD operations for the **Grain** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Grains
    * const grains = await prisma.grain.findMany()
    * ```
    */
  get grain(): Prisma.GrainDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.legume`: Exposes CRUD operations for the **Legume** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Legumes
    * const legumes = await prisma.legume.findMany()
    * ```
    */
  get legume(): Prisma.LegumeDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.pasta`: Exposes CRUD operations for the **Pasta** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Pastas
    * const pastas = await prisma.pasta.findMany()
    * ```
    */
  get pasta(): Prisma.PastaDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.bread`: Exposes CRUD operations for the **Bread** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Breads
    * const breads = await prisma.bread.findMany()
    * ```
    */
  get bread(): Prisma.BreadDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.oilAndFat`: Exposes CRUD operations for the **OilAndFat** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more OilAndFats
    * const oilAndFats = await prisma.oilAndFat.findMany()
    * ```
    */
  get oilAndFat(): Prisma.OilAndFatDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.condiment`: Exposes CRUD operations for the **Condiment** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Condiments
    * const condiments = await prisma.condiment.findMany()
    * ```
    */
  get condiment(): Prisma.CondimentDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.soupStock`: Exposes CRUD operations for the **SoupStock** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more SoupStocks
    * const soupStocks = await prisma.soupStock.findMany()
    * ```
    */
  get soupStock(): Prisma.SoupStockDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.beverage`: Exposes CRUD operations for the **Beverage** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Beverages
    * const beverages = await prisma.beverage.findMany()
    * ```
    */
  get beverage(): Prisma.BeverageDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.bakingGood`: Exposes CRUD operations for the **BakingGood** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more BakingGoods
    * const bakingGoods = await prisma.bakingGood.findMany()
    * ```
    */
  get bakingGood(): Prisma.BakingGoodDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.doughWrapper`: Exposes CRUD operations for the **DoughWrapper** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more DoughWrappers
    * const doughWrappers = await prisma.doughWrapper.findMany()
    * ```
    */
  get doughWrapper(): Prisma.DoughWrapperDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.7.0
   * Query Engine version: 3cff47a7f5d65c3ea74883f1d736e41d68ce91ed
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    Cuisine: 'Cuisine',
    PantryEssential: 'PantryEssential',
    Vegetable: 'Vegetable',
    Mushroom: 'Mushroom',
    Fruit: 'Fruit',
    NutAndSeed: 'NutAndSeed',
    Dairy: 'Dairy',
    Meat: 'Meat',
    Seafood: 'Seafood',
    HerbAndSpice: 'HerbAndSpice',
    Sweetener: 'Sweetener',
    Grain: 'Grain',
    Legume: 'Legume',
    Pasta: 'Pasta',
    Bread: 'Bread',
    OilAndFat: 'OilAndFat',
    Condiment: 'Condiment',
    SoupStock: 'SoupStock',
    Beverage: 'Beverage',
    BakingGood: 'BakingGood',
    DoughWrapper: 'DoughWrapper'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "cuisine" | "pantryEssential" | "vegetable" | "mushroom" | "fruit" | "nutAndSeed" | "dairy" | "meat" | "seafood" | "herbAndSpice" | "sweetener" | "grain" | "legume" | "pasta" | "bread" | "oilAndFat" | "condiment" | "soupStock" | "beverage" | "bakingGood" | "doughWrapper"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Cuisine: {
        payload: Prisma.$CuisinePayload<ExtArgs>
        fields: Prisma.CuisineFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CuisineFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CuisinePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CuisineFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CuisinePayload>
          }
          findFirst: {
            args: Prisma.CuisineFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CuisinePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CuisineFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CuisinePayload>
          }
          findMany: {
            args: Prisma.CuisineFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CuisinePayload>[]
          }
          create: {
            args: Prisma.CuisineCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CuisinePayload>
          }
          createMany: {
            args: Prisma.CuisineCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.CuisineDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CuisinePayload>
          }
          update: {
            args: Prisma.CuisineUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CuisinePayload>
          }
          deleteMany: {
            args: Prisma.CuisineDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CuisineUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.CuisineUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CuisinePayload>
          }
          aggregate: {
            args: Prisma.CuisineAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCuisine>
          }
          groupBy: {
            args: Prisma.CuisineGroupByArgs<ExtArgs>
            result: $Utils.Optional<CuisineGroupByOutputType>[]
          }
          count: {
            args: Prisma.CuisineCountArgs<ExtArgs>
            result: $Utils.Optional<CuisineCountAggregateOutputType> | number
          }
        }
      }
      PantryEssential: {
        payload: Prisma.$PantryEssentialPayload<ExtArgs>
        fields: Prisma.PantryEssentialFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PantryEssentialFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PantryEssentialPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PantryEssentialFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PantryEssentialPayload>
          }
          findFirst: {
            args: Prisma.PantryEssentialFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PantryEssentialPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PantryEssentialFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PantryEssentialPayload>
          }
          findMany: {
            args: Prisma.PantryEssentialFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PantryEssentialPayload>[]
          }
          create: {
            args: Prisma.PantryEssentialCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PantryEssentialPayload>
          }
          createMany: {
            args: Prisma.PantryEssentialCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.PantryEssentialDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PantryEssentialPayload>
          }
          update: {
            args: Prisma.PantryEssentialUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PantryEssentialPayload>
          }
          deleteMany: {
            args: Prisma.PantryEssentialDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PantryEssentialUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.PantryEssentialUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PantryEssentialPayload>
          }
          aggregate: {
            args: Prisma.PantryEssentialAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePantryEssential>
          }
          groupBy: {
            args: Prisma.PantryEssentialGroupByArgs<ExtArgs>
            result: $Utils.Optional<PantryEssentialGroupByOutputType>[]
          }
          count: {
            args: Prisma.PantryEssentialCountArgs<ExtArgs>
            result: $Utils.Optional<PantryEssentialCountAggregateOutputType> | number
          }
        }
      }
      Vegetable: {
        payload: Prisma.$VegetablePayload<ExtArgs>
        fields: Prisma.VegetableFieldRefs
        operations: {
          findUnique: {
            args: Prisma.VegetableFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VegetablePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.VegetableFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VegetablePayload>
          }
          findFirst: {
            args: Prisma.VegetableFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VegetablePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.VegetableFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VegetablePayload>
          }
          findMany: {
            args: Prisma.VegetableFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VegetablePayload>[]
          }
          create: {
            args: Prisma.VegetableCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VegetablePayload>
          }
          createMany: {
            args: Prisma.VegetableCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.VegetableDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VegetablePayload>
          }
          update: {
            args: Prisma.VegetableUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VegetablePayload>
          }
          deleteMany: {
            args: Prisma.VegetableDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.VegetableUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.VegetableUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VegetablePayload>
          }
          aggregate: {
            args: Prisma.VegetableAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateVegetable>
          }
          groupBy: {
            args: Prisma.VegetableGroupByArgs<ExtArgs>
            result: $Utils.Optional<VegetableGroupByOutputType>[]
          }
          count: {
            args: Prisma.VegetableCountArgs<ExtArgs>
            result: $Utils.Optional<VegetableCountAggregateOutputType> | number
          }
        }
      }
      Mushroom: {
        payload: Prisma.$MushroomPayload<ExtArgs>
        fields: Prisma.MushroomFieldRefs
        operations: {
          findUnique: {
            args: Prisma.MushroomFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MushroomPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.MushroomFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MushroomPayload>
          }
          findFirst: {
            args: Prisma.MushroomFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MushroomPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.MushroomFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MushroomPayload>
          }
          findMany: {
            args: Prisma.MushroomFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MushroomPayload>[]
          }
          create: {
            args: Prisma.MushroomCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MushroomPayload>
          }
          createMany: {
            args: Prisma.MushroomCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.MushroomDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MushroomPayload>
          }
          update: {
            args: Prisma.MushroomUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MushroomPayload>
          }
          deleteMany: {
            args: Prisma.MushroomDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.MushroomUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.MushroomUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MushroomPayload>
          }
          aggregate: {
            args: Prisma.MushroomAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateMushroom>
          }
          groupBy: {
            args: Prisma.MushroomGroupByArgs<ExtArgs>
            result: $Utils.Optional<MushroomGroupByOutputType>[]
          }
          count: {
            args: Prisma.MushroomCountArgs<ExtArgs>
            result: $Utils.Optional<MushroomCountAggregateOutputType> | number
          }
        }
      }
      Fruit: {
        payload: Prisma.$FruitPayload<ExtArgs>
        fields: Prisma.FruitFieldRefs
        operations: {
          findUnique: {
            args: Prisma.FruitFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FruitPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.FruitFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FruitPayload>
          }
          findFirst: {
            args: Prisma.FruitFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FruitPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.FruitFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FruitPayload>
          }
          findMany: {
            args: Prisma.FruitFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FruitPayload>[]
          }
          create: {
            args: Prisma.FruitCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FruitPayload>
          }
          createMany: {
            args: Prisma.FruitCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.FruitDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FruitPayload>
          }
          update: {
            args: Prisma.FruitUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FruitPayload>
          }
          deleteMany: {
            args: Prisma.FruitDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.FruitUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.FruitUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FruitPayload>
          }
          aggregate: {
            args: Prisma.FruitAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateFruit>
          }
          groupBy: {
            args: Prisma.FruitGroupByArgs<ExtArgs>
            result: $Utils.Optional<FruitGroupByOutputType>[]
          }
          count: {
            args: Prisma.FruitCountArgs<ExtArgs>
            result: $Utils.Optional<FruitCountAggregateOutputType> | number
          }
        }
      }
      NutAndSeed: {
        payload: Prisma.$NutAndSeedPayload<ExtArgs>
        fields: Prisma.NutAndSeedFieldRefs
        operations: {
          findUnique: {
            args: Prisma.NutAndSeedFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NutAndSeedPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.NutAndSeedFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NutAndSeedPayload>
          }
          findFirst: {
            args: Prisma.NutAndSeedFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NutAndSeedPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.NutAndSeedFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NutAndSeedPayload>
          }
          findMany: {
            args: Prisma.NutAndSeedFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NutAndSeedPayload>[]
          }
          create: {
            args: Prisma.NutAndSeedCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NutAndSeedPayload>
          }
          createMany: {
            args: Prisma.NutAndSeedCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.NutAndSeedDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NutAndSeedPayload>
          }
          update: {
            args: Prisma.NutAndSeedUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NutAndSeedPayload>
          }
          deleteMany: {
            args: Prisma.NutAndSeedDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.NutAndSeedUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.NutAndSeedUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NutAndSeedPayload>
          }
          aggregate: {
            args: Prisma.NutAndSeedAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateNutAndSeed>
          }
          groupBy: {
            args: Prisma.NutAndSeedGroupByArgs<ExtArgs>
            result: $Utils.Optional<NutAndSeedGroupByOutputType>[]
          }
          count: {
            args: Prisma.NutAndSeedCountArgs<ExtArgs>
            result: $Utils.Optional<NutAndSeedCountAggregateOutputType> | number
          }
        }
      }
      Dairy: {
        payload: Prisma.$DairyPayload<ExtArgs>
        fields: Prisma.DairyFieldRefs
        operations: {
          findUnique: {
            args: Prisma.DairyFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DairyPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.DairyFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DairyPayload>
          }
          findFirst: {
            args: Prisma.DairyFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DairyPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.DairyFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DairyPayload>
          }
          findMany: {
            args: Prisma.DairyFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DairyPayload>[]
          }
          create: {
            args: Prisma.DairyCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DairyPayload>
          }
          createMany: {
            args: Prisma.DairyCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.DairyDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DairyPayload>
          }
          update: {
            args: Prisma.DairyUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DairyPayload>
          }
          deleteMany: {
            args: Prisma.DairyDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.DairyUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.DairyUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DairyPayload>
          }
          aggregate: {
            args: Prisma.DairyAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateDairy>
          }
          groupBy: {
            args: Prisma.DairyGroupByArgs<ExtArgs>
            result: $Utils.Optional<DairyGroupByOutputType>[]
          }
          count: {
            args: Prisma.DairyCountArgs<ExtArgs>
            result: $Utils.Optional<DairyCountAggregateOutputType> | number
          }
        }
      }
      Meat: {
        payload: Prisma.$MeatPayload<ExtArgs>
        fields: Prisma.MeatFieldRefs
        operations: {
          findUnique: {
            args: Prisma.MeatFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MeatPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.MeatFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MeatPayload>
          }
          findFirst: {
            args: Prisma.MeatFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MeatPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.MeatFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MeatPayload>
          }
          findMany: {
            args: Prisma.MeatFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MeatPayload>[]
          }
          create: {
            args: Prisma.MeatCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MeatPayload>
          }
          createMany: {
            args: Prisma.MeatCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.MeatDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MeatPayload>
          }
          update: {
            args: Prisma.MeatUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MeatPayload>
          }
          deleteMany: {
            args: Prisma.MeatDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.MeatUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.MeatUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MeatPayload>
          }
          aggregate: {
            args: Prisma.MeatAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateMeat>
          }
          groupBy: {
            args: Prisma.MeatGroupByArgs<ExtArgs>
            result: $Utils.Optional<MeatGroupByOutputType>[]
          }
          count: {
            args: Prisma.MeatCountArgs<ExtArgs>
            result: $Utils.Optional<MeatCountAggregateOutputType> | number
          }
        }
      }
      Seafood: {
        payload: Prisma.$SeafoodPayload<ExtArgs>
        fields: Prisma.SeafoodFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SeafoodFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SeafoodPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SeafoodFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SeafoodPayload>
          }
          findFirst: {
            args: Prisma.SeafoodFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SeafoodPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SeafoodFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SeafoodPayload>
          }
          findMany: {
            args: Prisma.SeafoodFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SeafoodPayload>[]
          }
          create: {
            args: Prisma.SeafoodCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SeafoodPayload>
          }
          createMany: {
            args: Prisma.SeafoodCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.SeafoodDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SeafoodPayload>
          }
          update: {
            args: Prisma.SeafoodUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SeafoodPayload>
          }
          deleteMany: {
            args: Prisma.SeafoodDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SeafoodUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.SeafoodUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SeafoodPayload>
          }
          aggregate: {
            args: Prisma.SeafoodAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSeafood>
          }
          groupBy: {
            args: Prisma.SeafoodGroupByArgs<ExtArgs>
            result: $Utils.Optional<SeafoodGroupByOutputType>[]
          }
          count: {
            args: Prisma.SeafoodCountArgs<ExtArgs>
            result: $Utils.Optional<SeafoodCountAggregateOutputType> | number
          }
        }
      }
      HerbAndSpice: {
        payload: Prisma.$HerbAndSpicePayload<ExtArgs>
        fields: Prisma.HerbAndSpiceFieldRefs
        operations: {
          findUnique: {
            args: Prisma.HerbAndSpiceFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HerbAndSpicePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.HerbAndSpiceFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HerbAndSpicePayload>
          }
          findFirst: {
            args: Prisma.HerbAndSpiceFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HerbAndSpicePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.HerbAndSpiceFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HerbAndSpicePayload>
          }
          findMany: {
            args: Prisma.HerbAndSpiceFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HerbAndSpicePayload>[]
          }
          create: {
            args: Prisma.HerbAndSpiceCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HerbAndSpicePayload>
          }
          createMany: {
            args: Prisma.HerbAndSpiceCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.HerbAndSpiceDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HerbAndSpicePayload>
          }
          update: {
            args: Prisma.HerbAndSpiceUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HerbAndSpicePayload>
          }
          deleteMany: {
            args: Prisma.HerbAndSpiceDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.HerbAndSpiceUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.HerbAndSpiceUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HerbAndSpicePayload>
          }
          aggregate: {
            args: Prisma.HerbAndSpiceAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateHerbAndSpice>
          }
          groupBy: {
            args: Prisma.HerbAndSpiceGroupByArgs<ExtArgs>
            result: $Utils.Optional<HerbAndSpiceGroupByOutputType>[]
          }
          count: {
            args: Prisma.HerbAndSpiceCountArgs<ExtArgs>
            result: $Utils.Optional<HerbAndSpiceCountAggregateOutputType> | number
          }
        }
      }
      Sweetener: {
        payload: Prisma.$SweetenerPayload<ExtArgs>
        fields: Prisma.SweetenerFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SweetenerFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SweetenerPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SweetenerFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SweetenerPayload>
          }
          findFirst: {
            args: Prisma.SweetenerFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SweetenerPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SweetenerFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SweetenerPayload>
          }
          findMany: {
            args: Prisma.SweetenerFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SweetenerPayload>[]
          }
          create: {
            args: Prisma.SweetenerCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SweetenerPayload>
          }
          createMany: {
            args: Prisma.SweetenerCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.SweetenerDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SweetenerPayload>
          }
          update: {
            args: Prisma.SweetenerUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SweetenerPayload>
          }
          deleteMany: {
            args: Prisma.SweetenerDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SweetenerUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.SweetenerUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SweetenerPayload>
          }
          aggregate: {
            args: Prisma.SweetenerAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSweetener>
          }
          groupBy: {
            args: Prisma.SweetenerGroupByArgs<ExtArgs>
            result: $Utils.Optional<SweetenerGroupByOutputType>[]
          }
          count: {
            args: Prisma.SweetenerCountArgs<ExtArgs>
            result: $Utils.Optional<SweetenerCountAggregateOutputType> | number
          }
        }
      }
      Grain: {
        payload: Prisma.$GrainPayload<ExtArgs>
        fields: Prisma.GrainFieldRefs
        operations: {
          findUnique: {
            args: Prisma.GrainFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GrainPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.GrainFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GrainPayload>
          }
          findFirst: {
            args: Prisma.GrainFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GrainPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.GrainFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GrainPayload>
          }
          findMany: {
            args: Prisma.GrainFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GrainPayload>[]
          }
          create: {
            args: Prisma.GrainCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GrainPayload>
          }
          createMany: {
            args: Prisma.GrainCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.GrainDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GrainPayload>
          }
          update: {
            args: Prisma.GrainUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GrainPayload>
          }
          deleteMany: {
            args: Prisma.GrainDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.GrainUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.GrainUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GrainPayload>
          }
          aggregate: {
            args: Prisma.GrainAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateGrain>
          }
          groupBy: {
            args: Prisma.GrainGroupByArgs<ExtArgs>
            result: $Utils.Optional<GrainGroupByOutputType>[]
          }
          count: {
            args: Prisma.GrainCountArgs<ExtArgs>
            result: $Utils.Optional<GrainCountAggregateOutputType> | number
          }
        }
      }
      Legume: {
        payload: Prisma.$LegumePayload<ExtArgs>
        fields: Prisma.LegumeFieldRefs
        operations: {
          findUnique: {
            args: Prisma.LegumeFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LegumePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.LegumeFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LegumePayload>
          }
          findFirst: {
            args: Prisma.LegumeFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LegumePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.LegumeFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LegumePayload>
          }
          findMany: {
            args: Prisma.LegumeFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LegumePayload>[]
          }
          create: {
            args: Prisma.LegumeCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LegumePayload>
          }
          createMany: {
            args: Prisma.LegumeCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.LegumeDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LegumePayload>
          }
          update: {
            args: Prisma.LegumeUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LegumePayload>
          }
          deleteMany: {
            args: Prisma.LegumeDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.LegumeUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.LegumeUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LegumePayload>
          }
          aggregate: {
            args: Prisma.LegumeAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateLegume>
          }
          groupBy: {
            args: Prisma.LegumeGroupByArgs<ExtArgs>
            result: $Utils.Optional<LegumeGroupByOutputType>[]
          }
          count: {
            args: Prisma.LegumeCountArgs<ExtArgs>
            result: $Utils.Optional<LegumeCountAggregateOutputType> | number
          }
        }
      }
      Pasta: {
        payload: Prisma.$PastaPayload<ExtArgs>
        fields: Prisma.PastaFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PastaFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PastaPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PastaFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PastaPayload>
          }
          findFirst: {
            args: Prisma.PastaFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PastaPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PastaFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PastaPayload>
          }
          findMany: {
            args: Prisma.PastaFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PastaPayload>[]
          }
          create: {
            args: Prisma.PastaCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PastaPayload>
          }
          createMany: {
            args: Prisma.PastaCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.PastaDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PastaPayload>
          }
          update: {
            args: Prisma.PastaUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PastaPayload>
          }
          deleteMany: {
            args: Prisma.PastaDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PastaUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.PastaUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PastaPayload>
          }
          aggregate: {
            args: Prisma.PastaAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePasta>
          }
          groupBy: {
            args: Prisma.PastaGroupByArgs<ExtArgs>
            result: $Utils.Optional<PastaGroupByOutputType>[]
          }
          count: {
            args: Prisma.PastaCountArgs<ExtArgs>
            result: $Utils.Optional<PastaCountAggregateOutputType> | number
          }
        }
      }
      Bread: {
        payload: Prisma.$BreadPayload<ExtArgs>
        fields: Prisma.BreadFieldRefs
        operations: {
          findUnique: {
            args: Prisma.BreadFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BreadPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.BreadFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BreadPayload>
          }
          findFirst: {
            args: Prisma.BreadFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BreadPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.BreadFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BreadPayload>
          }
          findMany: {
            args: Prisma.BreadFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BreadPayload>[]
          }
          create: {
            args: Prisma.BreadCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BreadPayload>
          }
          createMany: {
            args: Prisma.BreadCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.BreadDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BreadPayload>
          }
          update: {
            args: Prisma.BreadUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BreadPayload>
          }
          deleteMany: {
            args: Prisma.BreadDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.BreadUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.BreadUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BreadPayload>
          }
          aggregate: {
            args: Prisma.BreadAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateBread>
          }
          groupBy: {
            args: Prisma.BreadGroupByArgs<ExtArgs>
            result: $Utils.Optional<BreadGroupByOutputType>[]
          }
          count: {
            args: Prisma.BreadCountArgs<ExtArgs>
            result: $Utils.Optional<BreadCountAggregateOutputType> | number
          }
        }
      }
      OilAndFat: {
        payload: Prisma.$OilAndFatPayload<ExtArgs>
        fields: Prisma.OilAndFatFieldRefs
        operations: {
          findUnique: {
            args: Prisma.OilAndFatFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OilAndFatPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.OilAndFatFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OilAndFatPayload>
          }
          findFirst: {
            args: Prisma.OilAndFatFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OilAndFatPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.OilAndFatFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OilAndFatPayload>
          }
          findMany: {
            args: Prisma.OilAndFatFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OilAndFatPayload>[]
          }
          create: {
            args: Prisma.OilAndFatCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OilAndFatPayload>
          }
          createMany: {
            args: Prisma.OilAndFatCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.OilAndFatDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OilAndFatPayload>
          }
          update: {
            args: Prisma.OilAndFatUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OilAndFatPayload>
          }
          deleteMany: {
            args: Prisma.OilAndFatDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.OilAndFatUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.OilAndFatUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OilAndFatPayload>
          }
          aggregate: {
            args: Prisma.OilAndFatAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateOilAndFat>
          }
          groupBy: {
            args: Prisma.OilAndFatGroupByArgs<ExtArgs>
            result: $Utils.Optional<OilAndFatGroupByOutputType>[]
          }
          count: {
            args: Prisma.OilAndFatCountArgs<ExtArgs>
            result: $Utils.Optional<OilAndFatCountAggregateOutputType> | number
          }
        }
      }
      Condiment: {
        payload: Prisma.$CondimentPayload<ExtArgs>
        fields: Prisma.CondimentFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CondimentFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CondimentPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CondimentFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CondimentPayload>
          }
          findFirst: {
            args: Prisma.CondimentFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CondimentPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CondimentFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CondimentPayload>
          }
          findMany: {
            args: Prisma.CondimentFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CondimentPayload>[]
          }
          create: {
            args: Prisma.CondimentCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CondimentPayload>
          }
          createMany: {
            args: Prisma.CondimentCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.CondimentDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CondimentPayload>
          }
          update: {
            args: Prisma.CondimentUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CondimentPayload>
          }
          deleteMany: {
            args: Prisma.CondimentDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CondimentUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.CondimentUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CondimentPayload>
          }
          aggregate: {
            args: Prisma.CondimentAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCondiment>
          }
          groupBy: {
            args: Prisma.CondimentGroupByArgs<ExtArgs>
            result: $Utils.Optional<CondimentGroupByOutputType>[]
          }
          count: {
            args: Prisma.CondimentCountArgs<ExtArgs>
            result: $Utils.Optional<CondimentCountAggregateOutputType> | number
          }
        }
      }
      SoupStock: {
        payload: Prisma.$SoupStockPayload<ExtArgs>
        fields: Prisma.SoupStockFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SoupStockFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SoupStockPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SoupStockFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SoupStockPayload>
          }
          findFirst: {
            args: Prisma.SoupStockFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SoupStockPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SoupStockFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SoupStockPayload>
          }
          findMany: {
            args: Prisma.SoupStockFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SoupStockPayload>[]
          }
          create: {
            args: Prisma.SoupStockCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SoupStockPayload>
          }
          createMany: {
            args: Prisma.SoupStockCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.SoupStockDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SoupStockPayload>
          }
          update: {
            args: Prisma.SoupStockUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SoupStockPayload>
          }
          deleteMany: {
            args: Prisma.SoupStockDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SoupStockUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.SoupStockUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SoupStockPayload>
          }
          aggregate: {
            args: Prisma.SoupStockAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSoupStock>
          }
          groupBy: {
            args: Prisma.SoupStockGroupByArgs<ExtArgs>
            result: $Utils.Optional<SoupStockGroupByOutputType>[]
          }
          count: {
            args: Prisma.SoupStockCountArgs<ExtArgs>
            result: $Utils.Optional<SoupStockCountAggregateOutputType> | number
          }
        }
      }
      Beverage: {
        payload: Prisma.$BeveragePayload<ExtArgs>
        fields: Prisma.BeverageFieldRefs
        operations: {
          findUnique: {
            args: Prisma.BeverageFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BeveragePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.BeverageFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BeveragePayload>
          }
          findFirst: {
            args: Prisma.BeverageFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BeveragePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.BeverageFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BeveragePayload>
          }
          findMany: {
            args: Prisma.BeverageFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BeveragePayload>[]
          }
          create: {
            args: Prisma.BeverageCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BeveragePayload>
          }
          createMany: {
            args: Prisma.BeverageCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.BeverageDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BeveragePayload>
          }
          update: {
            args: Prisma.BeverageUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BeveragePayload>
          }
          deleteMany: {
            args: Prisma.BeverageDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.BeverageUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.BeverageUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BeveragePayload>
          }
          aggregate: {
            args: Prisma.BeverageAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateBeverage>
          }
          groupBy: {
            args: Prisma.BeverageGroupByArgs<ExtArgs>
            result: $Utils.Optional<BeverageGroupByOutputType>[]
          }
          count: {
            args: Prisma.BeverageCountArgs<ExtArgs>
            result: $Utils.Optional<BeverageCountAggregateOutputType> | number
          }
        }
      }
      BakingGood: {
        payload: Prisma.$BakingGoodPayload<ExtArgs>
        fields: Prisma.BakingGoodFieldRefs
        operations: {
          findUnique: {
            args: Prisma.BakingGoodFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BakingGoodPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.BakingGoodFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BakingGoodPayload>
          }
          findFirst: {
            args: Prisma.BakingGoodFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BakingGoodPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.BakingGoodFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BakingGoodPayload>
          }
          findMany: {
            args: Prisma.BakingGoodFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BakingGoodPayload>[]
          }
          create: {
            args: Prisma.BakingGoodCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BakingGoodPayload>
          }
          createMany: {
            args: Prisma.BakingGoodCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.BakingGoodDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BakingGoodPayload>
          }
          update: {
            args: Prisma.BakingGoodUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BakingGoodPayload>
          }
          deleteMany: {
            args: Prisma.BakingGoodDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.BakingGoodUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.BakingGoodUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BakingGoodPayload>
          }
          aggregate: {
            args: Prisma.BakingGoodAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateBakingGood>
          }
          groupBy: {
            args: Prisma.BakingGoodGroupByArgs<ExtArgs>
            result: $Utils.Optional<BakingGoodGroupByOutputType>[]
          }
          count: {
            args: Prisma.BakingGoodCountArgs<ExtArgs>
            result: $Utils.Optional<BakingGoodCountAggregateOutputType> | number
          }
        }
      }
      DoughWrapper: {
        payload: Prisma.$DoughWrapperPayload<ExtArgs>
        fields: Prisma.DoughWrapperFieldRefs
        operations: {
          findUnique: {
            args: Prisma.DoughWrapperFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DoughWrapperPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.DoughWrapperFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DoughWrapperPayload>
          }
          findFirst: {
            args: Prisma.DoughWrapperFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DoughWrapperPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.DoughWrapperFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DoughWrapperPayload>
          }
          findMany: {
            args: Prisma.DoughWrapperFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DoughWrapperPayload>[]
          }
          create: {
            args: Prisma.DoughWrapperCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DoughWrapperPayload>
          }
          createMany: {
            args: Prisma.DoughWrapperCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.DoughWrapperDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DoughWrapperPayload>
          }
          update: {
            args: Prisma.DoughWrapperUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DoughWrapperPayload>
          }
          deleteMany: {
            args: Prisma.DoughWrapperDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.DoughWrapperUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.DoughWrapperUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DoughWrapperPayload>
          }
          aggregate: {
            args: Prisma.DoughWrapperAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateDoughWrapper>
          }
          groupBy: {
            args: Prisma.DoughWrapperGroupByArgs<ExtArgs>
            result: $Utils.Optional<DoughWrapperGroupByOutputType>[]
          }
          count: {
            args: Prisma.DoughWrapperCountArgs<ExtArgs>
            result: $Utils.Optional<DoughWrapperCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    cuisine?: CuisineOmit
    pantryEssential?: PantryEssentialOmit
    vegetable?: VegetableOmit
    mushroom?: MushroomOmit
    fruit?: FruitOmit
    nutAndSeed?: NutAndSeedOmit
    dairy?: DairyOmit
    meat?: MeatOmit
    seafood?: SeafoodOmit
    herbAndSpice?: HerbAndSpiceOmit
    sweetener?: SweetenerOmit
    grain?: GrainOmit
    legume?: LegumeOmit
    pasta?: PastaOmit
    bread?: BreadOmit
    oilAndFat?: OilAndFatOmit
    condiment?: CondimentOmit
    soupStock?: SoupStockOmit
    beverage?: BeverageOmit
    bakingGood?: BakingGoodOmit
    doughWrapper?: DoughWrapperOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */



  /**
   * Models
   */

  /**
   * Model Cuisine
   */

  export type AggregateCuisine = {
    _count: CuisineCountAggregateOutputType | null
    _avg: CuisineAvgAggregateOutputType | null
    _sum: CuisineSumAggregateOutputType | null
    _min: CuisineMinAggregateOutputType | null
    _max: CuisineMaxAggregateOutputType | null
  }

  export type CuisineAvgAggregateOutputType = {
    id: number | null
  }

  export type CuisineSumAggregateOutputType = {
    id: number | null
  }

  export type CuisineMinAggregateOutputType = {
    id: number | null
    name: string | null
    description: string | null
  }

  export type CuisineMaxAggregateOutputType = {
    id: number | null
    name: string | null
    description: string | null
  }

  export type CuisineCountAggregateOutputType = {
    id: number
    name: number
    description: number
    _all: number
  }


  export type CuisineAvgAggregateInputType = {
    id?: true
  }

  export type CuisineSumAggregateInputType = {
    id?: true
  }

  export type CuisineMinAggregateInputType = {
    id?: true
    name?: true
    description?: true
  }

  export type CuisineMaxAggregateInputType = {
    id?: true
    name?: true
    description?: true
  }

  export type CuisineCountAggregateInputType = {
    id?: true
    name?: true
    description?: true
    _all?: true
  }

  export type CuisineAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Cuisine to aggregate.
     */
    where?: CuisineWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Cuisines to fetch.
     */
    orderBy?: CuisineOrderByWithRelationInput | CuisineOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CuisineWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Cuisines from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Cuisines.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Cuisines
    **/
    _count?: true | CuisineCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CuisineAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CuisineSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CuisineMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CuisineMaxAggregateInputType
  }

  export type GetCuisineAggregateType<T extends CuisineAggregateArgs> = {
        [P in keyof T & keyof AggregateCuisine]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCuisine[P]>
      : GetScalarType<T[P], AggregateCuisine[P]>
  }




  export type CuisineGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CuisineWhereInput
    orderBy?: CuisineOrderByWithAggregationInput | CuisineOrderByWithAggregationInput[]
    by: CuisineScalarFieldEnum[] | CuisineScalarFieldEnum
    having?: CuisineScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CuisineCountAggregateInputType | true
    _avg?: CuisineAvgAggregateInputType
    _sum?: CuisineSumAggregateInputType
    _min?: CuisineMinAggregateInputType
    _max?: CuisineMaxAggregateInputType
  }

  export type CuisineGroupByOutputType = {
    id: number
    name: string
    description: string
    _count: CuisineCountAggregateOutputType | null
    _avg: CuisineAvgAggregateOutputType | null
    _sum: CuisineSumAggregateOutputType | null
    _min: CuisineMinAggregateOutputType | null
    _max: CuisineMaxAggregateOutputType | null
  }

  type GetCuisineGroupByPayload<T extends CuisineGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CuisineGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CuisineGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CuisineGroupByOutputType[P]>
            : GetScalarType<T[P], CuisineGroupByOutputType[P]>
        }
      >
    >


  export type CuisineSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
  }, ExtArgs["result"]["cuisine"]>



  export type CuisineSelectScalar = {
    id?: boolean
    name?: boolean
    description?: boolean
  }

  export type CuisineOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "description", ExtArgs["result"]["cuisine"]>

  export type $CuisinePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Cuisine"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      description: string
    }, ExtArgs["result"]["cuisine"]>
    composites: {}
  }

  type CuisineGetPayload<S extends boolean | null | undefined | CuisineDefaultArgs> = $Result.GetResult<Prisma.$CuisinePayload, S>

  type CuisineCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CuisineFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CuisineCountAggregateInputType | true
    }

  export interface CuisineDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Cuisine'], meta: { name: 'Cuisine' } }
    /**
     * Find zero or one Cuisine that matches the filter.
     * @param {CuisineFindUniqueArgs} args - Arguments to find a Cuisine
     * @example
     * // Get one Cuisine
     * const cuisine = await prisma.cuisine.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CuisineFindUniqueArgs>(args: SelectSubset<T, CuisineFindUniqueArgs<ExtArgs>>): Prisma__CuisineClient<$Result.GetResult<Prisma.$CuisinePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Cuisine that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CuisineFindUniqueOrThrowArgs} args - Arguments to find a Cuisine
     * @example
     * // Get one Cuisine
     * const cuisine = await prisma.cuisine.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CuisineFindUniqueOrThrowArgs>(args: SelectSubset<T, CuisineFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CuisineClient<$Result.GetResult<Prisma.$CuisinePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Cuisine that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CuisineFindFirstArgs} args - Arguments to find a Cuisine
     * @example
     * // Get one Cuisine
     * const cuisine = await prisma.cuisine.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CuisineFindFirstArgs>(args?: SelectSubset<T, CuisineFindFirstArgs<ExtArgs>>): Prisma__CuisineClient<$Result.GetResult<Prisma.$CuisinePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Cuisine that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CuisineFindFirstOrThrowArgs} args - Arguments to find a Cuisine
     * @example
     * // Get one Cuisine
     * const cuisine = await prisma.cuisine.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CuisineFindFirstOrThrowArgs>(args?: SelectSubset<T, CuisineFindFirstOrThrowArgs<ExtArgs>>): Prisma__CuisineClient<$Result.GetResult<Prisma.$CuisinePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Cuisines that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CuisineFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Cuisines
     * const cuisines = await prisma.cuisine.findMany()
     * 
     * // Get first 10 Cuisines
     * const cuisines = await prisma.cuisine.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const cuisineWithIdOnly = await prisma.cuisine.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CuisineFindManyArgs>(args?: SelectSubset<T, CuisineFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CuisinePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Cuisine.
     * @param {CuisineCreateArgs} args - Arguments to create a Cuisine.
     * @example
     * // Create one Cuisine
     * const Cuisine = await prisma.cuisine.create({
     *   data: {
     *     // ... data to create a Cuisine
     *   }
     * })
     * 
     */
    create<T extends CuisineCreateArgs>(args: SelectSubset<T, CuisineCreateArgs<ExtArgs>>): Prisma__CuisineClient<$Result.GetResult<Prisma.$CuisinePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Cuisines.
     * @param {CuisineCreateManyArgs} args - Arguments to create many Cuisines.
     * @example
     * // Create many Cuisines
     * const cuisine = await prisma.cuisine.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CuisineCreateManyArgs>(args?: SelectSubset<T, CuisineCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Cuisine.
     * @param {CuisineDeleteArgs} args - Arguments to delete one Cuisine.
     * @example
     * // Delete one Cuisine
     * const Cuisine = await prisma.cuisine.delete({
     *   where: {
     *     // ... filter to delete one Cuisine
     *   }
     * })
     * 
     */
    delete<T extends CuisineDeleteArgs>(args: SelectSubset<T, CuisineDeleteArgs<ExtArgs>>): Prisma__CuisineClient<$Result.GetResult<Prisma.$CuisinePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Cuisine.
     * @param {CuisineUpdateArgs} args - Arguments to update one Cuisine.
     * @example
     * // Update one Cuisine
     * const cuisine = await prisma.cuisine.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CuisineUpdateArgs>(args: SelectSubset<T, CuisineUpdateArgs<ExtArgs>>): Prisma__CuisineClient<$Result.GetResult<Prisma.$CuisinePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Cuisines.
     * @param {CuisineDeleteManyArgs} args - Arguments to filter Cuisines to delete.
     * @example
     * // Delete a few Cuisines
     * const { count } = await prisma.cuisine.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CuisineDeleteManyArgs>(args?: SelectSubset<T, CuisineDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Cuisines.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CuisineUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Cuisines
     * const cuisine = await prisma.cuisine.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CuisineUpdateManyArgs>(args: SelectSubset<T, CuisineUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Cuisine.
     * @param {CuisineUpsertArgs} args - Arguments to update or create a Cuisine.
     * @example
     * // Update or create a Cuisine
     * const cuisine = await prisma.cuisine.upsert({
     *   create: {
     *     // ... data to create a Cuisine
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Cuisine we want to update
     *   }
     * })
     */
    upsert<T extends CuisineUpsertArgs>(args: SelectSubset<T, CuisineUpsertArgs<ExtArgs>>): Prisma__CuisineClient<$Result.GetResult<Prisma.$CuisinePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Cuisines.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CuisineCountArgs} args - Arguments to filter Cuisines to count.
     * @example
     * // Count the number of Cuisines
     * const count = await prisma.cuisine.count({
     *   where: {
     *     // ... the filter for the Cuisines we want to count
     *   }
     * })
    **/
    count<T extends CuisineCountArgs>(
      args?: Subset<T, CuisineCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CuisineCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Cuisine.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CuisineAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends CuisineAggregateArgs>(args: Subset<T, CuisineAggregateArgs>): Prisma.PrismaPromise<GetCuisineAggregateType<T>>

    /**
     * Group by Cuisine.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CuisineGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends CuisineGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CuisineGroupByArgs['orderBy'] }
        : { orderBy?: CuisineGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, CuisineGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCuisineGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Cuisine model
   */
  readonly fields: CuisineFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Cuisine.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CuisineClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Cuisine model
   */
  interface CuisineFieldRefs {
    readonly id: FieldRef<"Cuisine", 'Int'>
    readonly name: FieldRef<"Cuisine", 'String'>
    readonly description: FieldRef<"Cuisine", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Cuisine findUnique
   */
  export type CuisineFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cuisine
     */
    select?: CuisineSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cuisine
     */
    omit?: CuisineOmit<ExtArgs> | null
    /**
     * Filter, which Cuisine to fetch.
     */
    where: CuisineWhereUniqueInput
  }

  /**
   * Cuisine findUniqueOrThrow
   */
  export type CuisineFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cuisine
     */
    select?: CuisineSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cuisine
     */
    omit?: CuisineOmit<ExtArgs> | null
    /**
     * Filter, which Cuisine to fetch.
     */
    where: CuisineWhereUniqueInput
  }

  /**
   * Cuisine findFirst
   */
  export type CuisineFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cuisine
     */
    select?: CuisineSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cuisine
     */
    omit?: CuisineOmit<ExtArgs> | null
    /**
     * Filter, which Cuisine to fetch.
     */
    where?: CuisineWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Cuisines to fetch.
     */
    orderBy?: CuisineOrderByWithRelationInput | CuisineOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Cuisines.
     */
    cursor?: CuisineWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Cuisines from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Cuisines.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Cuisines.
     */
    distinct?: CuisineScalarFieldEnum | CuisineScalarFieldEnum[]
  }

  /**
   * Cuisine findFirstOrThrow
   */
  export type CuisineFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cuisine
     */
    select?: CuisineSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cuisine
     */
    omit?: CuisineOmit<ExtArgs> | null
    /**
     * Filter, which Cuisine to fetch.
     */
    where?: CuisineWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Cuisines to fetch.
     */
    orderBy?: CuisineOrderByWithRelationInput | CuisineOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Cuisines.
     */
    cursor?: CuisineWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Cuisines from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Cuisines.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Cuisines.
     */
    distinct?: CuisineScalarFieldEnum | CuisineScalarFieldEnum[]
  }

  /**
   * Cuisine findMany
   */
  export type CuisineFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cuisine
     */
    select?: CuisineSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cuisine
     */
    omit?: CuisineOmit<ExtArgs> | null
    /**
     * Filter, which Cuisines to fetch.
     */
    where?: CuisineWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Cuisines to fetch.
     */
    orderBy?: CuisineOrderByWithRelationInput | CuisineOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Cuisines.
     */
    cursor?: CuisineWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Cuisines from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Cuisines.
     */
    skip?: number
    distinct?: CuisineScalarFieldEnum | CuisineScalarFieldEnum[]
  }

  /**
   * Cuisine create
   */
  export type CuisineCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cuisine
     */
    select?: CuisineSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cuisine
     */
    omit?: CuisineOmit<ExtArgs> | null
    /**
     * The data needed to create a Cuisine.
     */
    data: XOR<CuisineCreateInput, CuisineUncheckedCreateInput>
  }

  /**
   * Cuisine createMany
   */
  export type CuisineCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Cuisines.
     */
    data: CuisineCreateManyInput | CuisineCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Cuisine update
   */
  export type CuisineUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cuisine
     */
    select?: CuisineSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cuisine
     */
    omit?: CuisineOmit<ExtArgs> | null
    /**
     * The data needed to update a Cuisine.
     */
    data: XOR<CuisineUpdateInput, CuisineUncheckedUpdateInput>
    /**
     * Choose, which Cuisine to update.
     */
    where: CuisineWhereUniqueInput
  }

  /**
   * Cuisine updateMany
   */
  export type CuisineUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Cuisines.
     */
    data: XOR<CuisineUpdateManyMutationInput, CuisineUncheckedUpdateManyInput>
    /**
     * Filter which Cuisines to update
     */
    where?: CuisineWhereInput
    /**
     * Limit how many Cuisines to update.
     */
    limit?: number
  }

  /**
   * Cuisine upsert
   */
  export type CuisineUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cuisine
     */
    select?: CuisineSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cuisine
     */
    omit?: CuisineOmit<ExtArgs> | null
    /**
     * The filter to search for the Cuisine to update in case it exists.
     */
    where: CuisineWhereUniqueInput
    /**
     * In case the Cuisine found by the `where` argument doesn't exist, create a new Cuisine with this data.
     */
    create: XOR<CuisineCreateInput, CuisineUncheckedCreateInput>
    /**
     * In case the Cuisine was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CuisineUpdateInput, CuisineUncheckedUpdateInput>
  }

  /**
   * Cuisine delete
   */
  export type CuisineDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cuisine
     */
    select?: CuisineSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cuisine
     */
    omit?: CuisineOmit<ExtArgs> | null
    /**
     * Filter which Cuisine to delete.
     */
    where: CuisineWhereUniqueInput
  }

  /**
   * Cuisine deleteMany
   */
  export type CuisineDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Cuisines to delete
     */
    where?: CuisineWhereInput
    /**
     * Limit how many Cuisines to delete.
     */
    limit?: number
  }

  /**
   * Cuisine without action
   */
  export type CuisineDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cuisine
     */
    select?: CuisineSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cuisine
     */
    omit?: CuisineOmit<ExtArgs> | null
  }


  /**
   * Model PantryEssential
   */

  export type AggregatePantryEssential = {
    _count: PantryEssentialCountAggregateOutputType | null
    _avg: PantryEssentialAvgAggregateOutputType | null
    _sum: PantryEssentialSumAggregateOutputType | null
    _min: PantryEssentialMinAggregateOutputType | null
    _max: PantryEssentialMaxAggregateOutputType | null
  }

  export type PantryEssentialAvgAggregateOutputType = {
    id: number | null
  }

  export type PantryEssentialSumAggregateOutputType = {
    id: number | null
  }

  export type PantryEssentialMinAggregateOutputType = {
    id: number | null
    name: string | null
    description: string | null
    shelfLife: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type PantryEssentialMaxAggregateOutputType = {
    id: number | null
    name: string | null
    description: string | null
    shelfLife: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type PantryEssentialCountAggregateOutputType = {
    id: number
    name: number
    description: number
    shelfLife: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type PantryEssentialAvgAggregateInputType = {
    id?: true
  }

  export type PantryEssentialSumAggregateInputType = {
    id?: true
  }

  export type PantryEssentialMinAggregateInputType = {
    id?: true
    name?: true
    description?: true
    shelfLife?: true
    createdAt?: true
    updatedAt?: true
  }

  export type PantryEssentialMaxAggregateInputType = {
    id?: true
    name?: true
    description?: true
    shelfLife?: true
    createdAt?: true
    updatedAt?: true
  }

  export type PantryEssentialCountAggregateInputType = {
    id?: true
    name?: true
    description?: true
    shelfLife?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type PantryEssentialAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PantryEssential to aggregate.
     */
    where?: PantryEssentialWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PantryEssentials to fetch.
     */
    orderBy?: PantryEssentialOrderByWithRelationInput | PantryEssentialOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PantryEssentialWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PantryEssentials from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PantryEssentials.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned PantryEssentials
    **/
    _count?: true | PantryEssentialCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PantryEssentialAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PantryEssentialSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PantryEssentialMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PantryEssentialMaxAggregateInputType
  }

  export type GetPantryEssentialAggregateType<T extends PantryEssentialAggregateArgs> = {
        [P in keyof T & keyof AggregatePantryEssential]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePantryEssential[P]>
      : GetScalarType<T[P], AggregatePantryEssential[P]>
  }




  export type PantryEssentialGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PantryEssentialWhereInput
    orderBy?: PantryEssentialOrderByWithAggregationInput | PantryEssentialOrderByWithAggregationInput[]
    by: PantryEssentialScalarFieldEnum[] | PantryEssentialScalarFieldEnum
    having?: PantryEssentialScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PantryEssentialCountAggregateInputType | true
    _avg?: PantryEssentialAvgAggregateInputType
    _sum?: PantryEssentialSumAggregateInputType
    _min?: PantryEssentialMinAggregateInputType
    _max?: PantryEssentialMaxAggregateInputType
  }

  export type PantryEssentialGroupByOutputType = {
    id: number
    name: string
    description: string | null
    shelfLife: string | null
    createdAt: Date
    updatedAt: Date
    _count: PantryEssentialCountAggregateOutputType | null
    _avg: PantryEssentialAvgAggregateOutputType | null
    _sum: PantryEssentialSumAggregateOutputType | null
    _min: PantryEssentialMinAggregateOutputType | null
    _max: PantryEssentialMaxAggregateOutputType | null
  }

  type GetPantryEssentialGroupByPayload<T extends PantryEssentialGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PantryEssentialGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PantryEssentialGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PantryEssentialGroupByOutputType[P]>
            : GetScalarType<T[P], PantryEssentialGroupByOutputType[P]>
        }
      >
    >


  export type PantryEssentialSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    shelfLife?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["pantryEssential"]>



  export type PantryEssentialSelectScalar = {
    id?: boolean
    name?: boolean
    description?: boolean
    shelfLife?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type PantryEssentialOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "description" | "shelfLife" | "createdAt" | "updatedAt", ExtArgs["result"]["pantryEssential"]>

  export type $PantryEssentialPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "PantryEssential"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      description: string | null
      shelfLife: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["pantryEssential"]>
    composites: {}
  }

  type PantryEssentialGetPayload<S extends boolean | null | undefined | PantryEssentialDefaultArgs> = $Result.GetResult<Prisma.$PantryEssentialPayload, S>

  type PantryEssentialCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PantryEssentialFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PantryEssentialCountAggregateInputType | true
    }

  export interface PantryEssentialDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['PantryEssential'], meta: { name: 'PantryEssential' } }
    /**
     * Find zero or one PantryEssential that matches the filter.
     * @param {PantryEssentialFindUniqueArgs} args - Arguments to find a PantryEssential
     * @example
     * // Get one PantryEssential
     * const pantryEssential = await prisma.pantryEssential.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PantryEssentialFindUniqueArgs>(args: SelectSubset<T, PantryEssentialFindUniqueArgs<ExtArgs>>): Prisma__PantryEssentialClient<$Result.GetResult<Prisma.$PantryEssentialPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one PantryEssential that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PantryEssentialFindUniqueOrThrowArgs} args - Arguments to find a PantryEssential
     * @example
     * // Get one PantryEssential
     * const pantryEssential = await prisma.pantryEssential.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PantryEssentialFindUniqueOrThrowArgs>(args: SelectSubset<T, PantryEssentialFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PantryEssentialClient<$Result.GetResult<Prisma.$PantryEssentialPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PantryEssential that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PantryEssentialFindFirstArgs} args - Arguments to find a PantryEssential
     * @example
     * // Get one PantryEssential
     * const pantryEssential = await prisma.pantryEssential.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PantryEssentialFindFirstArgs>(args?: SelectSubset<T, PantryEssentialFindFirstArgs<ExtArgs>>): Prisma__PantryEssentialClient<$Result.GetResult<Prisma.$PantryEssentialPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PantryEssential that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PantryEssentialFindFirstOrThrowArgs} args - Arguments to find a PantryEssential
     * @example
     * // Get one PantryEssential
     * const pantryEssential = await prisma.pantryEssential.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PantryEssentialFindFirstOrThrowArgs>(args?: SelectSubset<T, PantryEssentialFindFirstOrThrowArgs<ExtArgs>>): Prisma__PantryEssentialClient<$Result.GetResult<Prisma.$PantryEssentialPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more PantryEssentials that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PantryEssentialFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all PantryEssentials
     * const pantryEssentials = await prisma.pantryEssential.findMany()
     * 
     * // Get first 10 PantryEssentials
     * const pantryEssentials = await prisma.pantryEssential.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const pantryEssentialWithIdOnly = await prisma.pantryEssential.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PantryEssentialFindManyArgs>(args?: SelectSubset<T, PantryEssentialFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PantryEssentialPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a PantryEssential.
     * @param {PantryEssentialCreateArgs} args - Arguments to create a PantryEssential.
     * @example
     * // Create one PantryEssential
     * const PantryEssential = await prisma.pantryEssential.create({
     *   data: {
     *     // ... data to create a PantryEssential
     *   }
     * })
     * 
     */
    create<T extends PantryEssentialCreateArgs>(args: SelectSubset<T, PantryEssentialCreateArgs<ExtArgs>>): Prisma__PantryEssentialClient<$Result.GetResult<Prisma.$PantryEssentialPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many PantryEssentials.
     * @param {PantryEssentialCreateManyArgs} args - Arguments to create many PantryEssentials.
     * @example
     * // Create many PantryEssentials
     * const pantryEssential = await prisma.pantryEssential.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PantryEssentialCreateManyArgs>(args?: SelectSubset<T, PantryEssentialCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a PantryEssential.
     * @param {PantryEssentialDeleteArgs} args - Arguments to delete one PantryEssential.
     * @example
     * // Delete one PantryEssential
     * const PantryEssential = await prisma.pantryEssential.delete({
     *   where: {
     *     // ... filter to delete one PantryEssential
     *   }
     * })
     * 
     */
    delete<T extends PantryEssentialDeleteArgs>(args: SelectSubset<T, PantryEssentialDeleteArgs<ExtArgs>>): Prisma__PantryEssentialClient<$Result.GetResult<Prisma.$PantryEssentialPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one PantryEssential.
     * @param {PantryEssentialUpdateArgs} args - Arguments to update one PantryEssential.
     * @example
     * // Update one PantryEssential
     * const pantryEssential = await prisma.pantryEssential.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PantryEssentialUpdateArgs>(args: SelectSubset<T, PantryEssentialUpdateArgs<ExtArgs>>): Prisma__PantryEssentialClient<$Result.GetResult<Prisma.$PantryEssentialPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more PantryEssentials.
     * @param {PantryEssentialDeleteManyArgs} args - Arguments to filter PantryEssentials to delete.
     * @example
     * // Delete a few PantryEssentials
     * const { count } = await prisma.pantryEssential.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PantryEssentialDeleteManyArgs>(args?: SelectSubset<T, PantryEssentialDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PantryEssentials.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PantryEssentialUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many PantryEssentials
     * const pantryEssential = await prisma.pantryEssential.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PantryEssentialUpdateManyArgs>(args: SelectSubset<T, PantryEssentialUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one PantryEssential.
     * @param {PantryEssentialUpsertArgs} args - Arguments to update or create a PantryEssential.
     * @example
     * // Update or create a PantryEssential
     * const pantryEssential = await prisma.pantryEssential.upsert({
     *   create: {
     *     // ... data to create a PantryEssential
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the PantryEssential we want to update
     *   }
     * })
     */
    upsert<T extends PantryEssentialUpsertArgs>(args: SelectSubset<T, PantryEssentialUpsertArgs<ExtArgs>>): Prisma__PantryEssentialClient<$Result.GetResult<Prisma.$PantryEssentialPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of PantryEssentials.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PantryEssentialCountArgs} args - Arguments to filter PantryEssentials to count.
     * @example
     * // Count the number of PantryEssentials
     * const count = await prisma.pantryEssential.count({
     *   where: {
     *     // ... the filter for the PantryEssentials we want to count
     *   }
     * })
    **/
    count<T extends PantryEssentialCountArgs>(
      args?: Subset<T, PantryEssentialCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PantryEssentialCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a PantryEssential.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PantryEssentialAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends PantryEssentialAggregateArgs>(args: Subset<T, PantryEssentialAggregateArgs>): Prisma.PrismaPromise<GetPantryEssentialAggregateType<T>>

    /**
     * Group by PantryEssential.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PantryEssentialGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends PantryEssentialGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PantryEssentialGroupByArgs['orderBy'] }
        : { orderBy?: PantryEssentialGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, PantryEssentialGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPantryEssentialGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the PantryEssential model
   */
  readonly fields: PantryEssentialFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for PantryEssential.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PantryEssentialClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the PantryEssential model
   */
  interface PantryEssentialFieldRefs {
    readonly id: FieldRef<"PantryEssential", 'Int'>
    readonly name: FieldRef<"PantryEssential", 'String'>
    readonly description: FieldRef<"PantryEssential", 'String'>
    readonly shelfLife: FieldRef<"PantryEssential", 'String'>
    readonly createdAt: FieldRef<"PantryEssential", 'DateTime'>
    readonly updatedAt: FieldRef<"PantryEssential", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * PantryEssential findUnique
   */
  export type PantryEssentialFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PantryEssential
     */
    select?: PantryEssentialSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PantryEssential
     */
    omit?: PantryEssentialOmit<ExtArgs> | null
    /**
     * Filter, which PantryEssential to fetch.
     */
    where: PantryEssentialWhereUniqueInput
  }

  /**
   * PantryEssential findUniqueOrThrow
   */
  export type PantryEssentialFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PantryEssential
     */
    select?: PantryEssentialSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PantryEssential
     */
    omit?: PantryEssentialOmit<ExtArgs> | null
    /**
     * Filter, which PantryEssential to fetch.
     */
    where: PantryEssentialWhereUniqueInput
  }

  /**
   * PantryEssential findFirst
   */
  export type PantryEssentialFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PantryEssential
     */
    select?: PantryEssentialSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PantryEssential
     */
    omit?: PantryEssentialOmit<ExtArgs> | null
    /**
     * Filter, which PantryEssential to fetch.
     */
    where?: PantryEssentialWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PantryEssentials to fetch.
     */
    orderBy?: PantryEssentialOrderByWithRelationInput | PantryEssentialOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PantryEssentials.
     */
    cursor?: PantryEssentialWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PantryEssentials from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PantryEssentials.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PantryEssentials.
     */
    distinct?: PantryEssentialScalarFieldEnum | PantryEssentialScalarFieldEnum[]
  }

  /**
   * PantryEssential findFirstOrThrow
   */
  export type PantryEssentialFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PantryEssential
     */
    select?: PantryEssentialSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PantryEssential
     */
    omit?: PantryEssentialOmit<ExtArgs> | null
    /**
     * Filter, which PantryEssential to fetch.
     */
    where?: PantryEssentialWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PantryEssentials to fetch.
     */
    orderBy?: PantryEssentialOrderByWithRelationInput | PantryEssentialOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PantryEssentials.
     */
    cursor?: PantryEssentialWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PantryEssentials from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PantryEssentials.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PantryEssentials.
     */
    distinct?: PantryEssentialScalarFieldEnum | PantryEssentialScalarFieldEnum[]
  }

  /**
   * PantryEssential findMany
   */
  export type PantryEssentialFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PantryEssential
     */
    select?: PantryEssentialSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PantryEssential
     */
    omit?: PantryEssentialOmit<ExtArgs> | null
    /**
     * Filter, which PantryEssentials to fetch.
     */
    where?: PantryEssentialWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PantryEssentials to fetch.
     */
    orderBy?: PantryEssentialOrderByWithRelationInput | PantryEssentialOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing PantryEssentials.
     */
    cursor?: PantryEssentialWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PantryEssentials from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PantryEssentials.
     */
    skip?: number
    distinct?: PantryEssentialScalarFieldEnum | PantryEssentialScalarFieldEnum[]
  }

  /**
   * PantryEssential create
   */
  export type PantryEssentialCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PantryEssential
     */
    select?: PantryEssentialSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PantryEssential
     */
    omit?: PantryEssentialOmit<ExtArgs> | null
    /**
     * The data needed to create a PantryEssential.
     */
    data: XOR<PantryEssentialCreateInput, PantryEssentialUncheckedCreateInput>
  }

  /**
   * PantryEssential createMany
   */
  export type PantryEssentialCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many PantryEssentials.
     */
    data: PantryEssentialCreateManyInput | PantryEssentialCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * PantryEssential update
   */
  export type PantryEssentialUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PantryEssential
     */
    select?: PantryEssentialSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PantryEssential
     */
    omit?: PantryEssentialOmit<ExtArgs> | null
    /**
     * The data needed to update a PantryEssential.
     */
    data: XOR<PantryEssentialUpdateInput, PantryEssentialUncheckedUpdateInput>
    /**
     * Choose, which PantryEssential to update.
     */
    where: PantryEssentialWhereUniqueInput
  }

  /**
   * PantryEssential updateMany
   */
  export type PantryEssentialUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update PantryEssentials.
     */
    data: XOR<PantryEssentialUpdateManyMutationInput, PantryEssentialUncheckedUpdateManyInput>
    /**
     * Filter which PantryEssentials to update
     */
    where?: PantryEssentialWhereInput
    /**
     * Limit how many PantryEssentials to update.
     */
    limit?: number
  }

  /**
   * PantryEssential upsert
   */
  export type PantryEssentialUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PantryEssential
     */
    select?: PantryEssentialSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PantryEssential
     */
    omit?: PantryEssentialOmit<ExtArgs> | null
    /**
     * The filter to search for the PantryEssential to update in case it exists.
     */
    where: PantryEssentialWhereUniqueInput
    /**
     * In case the PantryEssential found by the `where` argument doesn't exist, create a new PantryEssential with this data.
     */
    create: XOR<PantryEssentialCreateInput, PantryEssentialUncheckedCreateInput>
    /**
     * In case the PantryEssential was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PantryEssentialUpdateInput, PantryEssentialUncheckedUpdateInput>
  }

  /**
   * PantryEssential delete
   */
  export type PantryEssentialDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PantryEssential
     */
    select?: PantryEssentialSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PantryEssential
     */
    omit?: PantryEssentialOmit<ExtArgs> | null
    /**
     * Filter which PantryEssential to delete.
     */
    where: PantryEssentialWhereUniqueInput
  }

  /**
   * PantryEssential deleteMany
   */
  export type PantryEssentialDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PantryEssentials to delete
     */
    where?: PantryEssentialWhereInput
    /**
     * Limit how many PantryEssentials to delete.
     */
    limit?: number
  }

  /**
   * PantryEssential without action
   */
  export type PantryEssentialDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PantryEssential
     */
    select?: PantryEssentialSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PantryEssential
     */
    omit?: PantryEssentialOmit<ExtArgs> | null
  }


  /**
   * Model Vegetable
   */

  export type AggregateVegetable = {
    _count: VegetableCountAggregateOutputType | null
    _avg: VegetableAvgAggregateOutputType | null
    _sum: VegetableSumAggregateOutputType | null
    _min: VegetableMinAggregateOutputType | null
    _max: VegetableMaxAggregateOutputType | null
  }

  export type VegetableAvgAggregateOutputType = {
    id: number | null
  }

  export type VegetableSumAggregateOutputType = {
    id: number | null
  }

  export type VegetableMinAggregateOutputType = {
    id: number | null
    name: string | null
    description: string | null
    isOrganic: boolean | null
    category: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type VegetableMaxAggregateOutputType = {
    id: number | null
    name: string | null
    description: string | null
    isOrganic: boolean | null
    category: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type VegetableCountAggregateOutputType = {
    id: number
    name: number
    description: number
    isOrganic: number
    category: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type VegetableAvgAggregateInputType = {
    id?: true
  }

  export type VegetableSumAggregateInputType = {
    id?: true
  }

  export type VegetableMinAggregateInputType = {
    id?: true
    name?: true
    description?: true
    isOrganic?: true
    category?: true
    createdAt?: true
    updatedAt?: true
  }

  export type VegetableMaxAggregateInputType = {
    id?: true
    name?: true
    description?: true
    isOrganic?: true
    category?: true
    createdAt?: true
    updatedAt?: true
  }

  export type VegetableCountAggregateInputType = {
    id?: true
    name?: true
    description?: true
    isOrganic?: true
    category?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type VegetableAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Vegetable to aggregate.
     */
    where?: VegetableWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Vegetables to fetch.
     */
    orderBy?: VegetableOrderByWithRelationInput | VegetableOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: VegetableWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Vegetables from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Vegetables.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Vegetables
    **/
    _count?: true | VegetableCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: VegetableAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: VegetableSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: VegetableMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: VegetableMaxAggregateInputType
  }

  export type GetVegetableAggregateType<T extends VegetableAggregateArgs> = {
        [P in keyof T & keyof AggregateVegetable]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateVegetable[P]>
      : GetScalarType<T[P], AggregateVegetable[P]>
  }




  export type VegetableGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: VegetableWhereInput
    orderBy?: VegetableOrderByWithAggregationInput | VegetableOrderByWithAggregationInput[]
    by: VegetableScalarFieldEnum[] | VegetableScalarFieldEnum
    having?: VegetableScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: VegetableCountAggregateInputType | true
    _avg?: VegetableAvgAggregateInputType
    _sum?: VegetableSumAggregateInputType
    _min?: VegetableMinAggregateInputType
    _max?: VegetableMaxAggregateInputType
  }

  export type VegetableGroupByOutputType = {
    id: number
    name: string
    description: string | null
    isOrganic: boolean
    category: string | null
    createdAt: Date
    updatedAt: Date
    _count: VegetableCountAggregateOutputType | null
    _avg: VegetableAvgAggregateOutputType | null
    _sum: VegetableSumAggregateOutputType | null
    _min: VegetableMinAggregateOutputType | null
    _max: VegetableMaxAggregateOutputType | null
  }

  type GetVegetableGroupByPayload<T extends VegetableGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<VegetableGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof VegetableGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], VegetableGroupByOutputType[P]>
            : GetScalarType<T[P], VegetableGroupByOutputType[P]>
        }
      >
    >


  export type VegetableSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    isOrganic?: boolean
    category?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["vegetable"]>



  export type VegetableSelectScalar = {
    id?: boolean
    name?: boolean
    description?: boolean
    isOrganic?: boolean
    category?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type VegetableOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "description" | "isOrganic" | "category" | "createdAt" | "updatedAt", ExtArgs["result"]["vegetable"]>

  export type $VegetablePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Vegetable"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      description: string | null
      isOrganic: boolean
      category: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["vegetable"]>
    composites: {}
  }

  type VegetableGetPayload<S extends boolean | null | undefined | VegetableDefaultArgs> = $Result.GetResult<Prisma.$VegetablePayload, S>

  type VegetableCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<VegetableFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: VegetableCountAggregateInputType | true
    }

  export interface VegetableDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Vegetable'], meta: { name: 'Vegetable' } }
    /**
     * Find zero or one Vegetable that matches the filter.
     * @param {VegetableFindUniqueArgs} args - Arguments to find a Vegetable
     * @example
     * // Get one Vegetable
     * const vegetable = await prisma.vegetable.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends VegetableFindUniqueArgs>(args: SelectSubset<T, VegetableFindUniqueArgs<ExtArgs>>): Prisma__VegetableClient<$Result.GetResult<Prisma.$VegetablePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Vegetable that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {VegetableFindUniqueOrThrowArgs} args - Arguments to find a Vegetable
     * @example
     * // Get one Vegetable
     * const vegetable = await prisma.vegetable.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends VegetableFindUniqueOrThrowArgs>(args: SelectSubset<T, VegetableFindUniqueOrThrowArgs<ExtArgs>>): Prisma__VegetableClient<$Result.GetResult<Prisma.$VegetablePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Vegetable that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VegetableFindFirstArgs} args - Arguments to find a Vegetable
     * @example
     * // Get one Vegetable
     * const vegetable = await prisma.vegetable.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends VegetableFindFirstArgs>(args?: SelectSubset<T, VegetableFindFirstArgs<ExtArgs>>): Prisma__VegetableClient<$Result.GetResult<Prisma.$VegetablePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Vegetable that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VegetableFindFirstOrThrowArgs} args - Arguments to find a Vegetable
     * @example
     * // Get one Vegetable
     * const vegetable = await prisma.vegetable.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends VegetableFindFirstOrThrowArgs>(args?: SelectSubset<T, VegetableFindFirstOrThrowArgs<ExtArgs>>): Prisma__VegetableClient<$Result.GetResult<Prisma.$VegetablePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Vegetables that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VegetableFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Vegetables
     * const vegetables = await prisma.vegetable.findMany()
     * 
     * // Get first 10 Vegetables
     * const vegetables = await prisma.vegetable.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const vegetableWithIdOnly = await prisma.vegetable.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends VegetableFindManyArgs>(args?: SelectSubset<T, VegetableFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VegetablePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Vegetable.
     * @param {VegetableCreateArgs} args - Arguments to create a Vegetable.
     * @example
     * // Create one Vegetable
     * const Vegetable = await prisma.vegetable.create({
     *   data: {
     *     // ... data to create a Vegetable
     *   }
     * })
     * 
     */
    create<T extends VegetableCreateArgs>(args: SelectSubset<T, VegetableCreateArgs<ExtArgs>>): Prisma__VegetableClient<$Result.GetResult<Prisma.$VegetablePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Vegetables.
     * @param {VegetableCreateManyArgs} args - Arguments to create many Vegetables.
     * @example
     * // Create many Vegetables
     * const vegetable = await prisma.vegetable.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends VegetableCreateManyArgs>(args?: SelectSubset<T, VegetableCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Vegetable.
     * @param {VegetableDeleteArgs} args - Arguments to delete one Vegetable.
     * @example
     * // Delete one Vegetable
     * const Vegetable = await prisma.vegetable.delete({
     *   where: {
     *     // ... filter to delete one Vegetable
     *   }
     * })
     * 
     */
    delete<T extends VegetableDeleteArgs>(args: SelectSubset<T, VegetableDeleteArgs<ExtArgs>>): Prisma__VegetableClient<$Result.GetResult<Prisma.$VegetablePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Vegetable.
     * @param {VegetableUpdateArgs} args - Arguments to update one Vegetable.
     * @example
     * // Update one Vegetable
     * const vegetable = await prisma.vegetable.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends VegetableUpdateArgs>(args: SelectSubset<T, VegetableUpdateArgs<ExtArgs>>): Prisma__VegetableClient<$Result.GetResult<Prisma.$VegetablePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Vegetables.
     * @param {VegetableDeleteManyArgs} args - Arguments to filter Vegetables to delete.
     * @example
     * // Delete a few Vegetables
     * const { count } = await prisma.vegetable.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends VegetableDeleteManyArgs>(args?: SelectSubset<T, VegetableDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Vegetables.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VegetableUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Vegetables
     * const vegetable = await prisma.vegetable.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends VegetableUpdateManyArgs>(args: SelectSubset<T, VegetableUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Vegetable.
     * @param {VegetableUpsertArgs} args - Arguments to update or create a Vegetable.
     * @example
     * // Update or create a Vegetable
     * const vegetable = await prisma.vegetable.upsert({
     *   create: {
     *     // ... data to create a Vegetable
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Vegetable we want to update
     *   }
     * })
     */
    upsert<T extends VegetableUpsertArgs>(args: SelectSubset<T, VegetableUpsertArgs<ExtArgs>>): Prisma__VegetableClient<$Result.GetResult<Prisma.$VegetablePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Vegetables.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VegetableCountArgs} args - Arguments to filter Vegetables to count.
     * @example
     * // Count the number of Vegetables
     * const count = await prisma.vegetable.count({
     *   where: {
     *     // ... the filter for the Vegetables we want to count
     *   }
     * })
    **/
    count<T extends VegetableCountArgs>(
      args?: Subset<T, VegetableCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], VegetableCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Vegetable.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VegetableAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends VegetableAggregateArgs>(args: Subset<T, VegetableAggregateArgs>): Prisma.PrismaPromise<GetVegetableAggregateType<T>>

    /**
     * Group by Vegetable.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VegetableGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends VegetableGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: VegetableGroupByArgs['orderBy'] }
        : { orderBy?: VegetableGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, VegetableGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetVegetableGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Vegetable model
   */
  readonly fields: VegetableFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Vegetable.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__VegetableClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Vegetable model
   */
  interface VegetableFieldRefs {
    readonly id: FieldRef<"Vegetable", 'Int'>
    readonly name: FieldRef<"Vegetable", 'String'>
    readonly description: FieldRef<"Vegetable", 'String'>
    readonly isOrganic: FieldRef<"Vegetable", 'Boolean'>
    readonly category: FieldRef<"Vegetable", 'String'>
    readonly createdAt: FieldRef<"Vegetable", 'DateTime'>
    readonly updatedAt: FieldRef<"Vegetable", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Vegetable findUnique
   */
  export type VegetableFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vegetable
     */
    select?: VegetableSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Vegetable
     */
    omit?: VegetableOmit<ExtArgs> | null
    /**
     * Filter, which Vegetable to fetch.
     */
    where: VegetableWhereUniqueInput
  }

  /**
   * Vegetable findUniqueOrThrow
   */
  export type VegetableFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vegetable
     */
    select?: VegetableSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Vegetable
     */
    omit?: VegetableOmit<ExtArgs> | null
    /**
     * Filter, which Vegetable to fetch.
     */
    where: VegetableWhereUniqueInput
  }

  /**
   * Vegetable findFirst
   */
  export type VegetableFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vegetable
     */
    select?: VegetableSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Vegetable
     */
    omit?: VegetableOmit<ExtArgs> | null
    /**
     * Filter, which Vegetable to fetch.
     */
    where?: VegetableWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Vegetables to fetch.
     */
    orderBy?: VegetableOrderByWithRelationInput | VegetableOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Vegetables.
     */
    cursor?: VegetableWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Vegetables from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Vegetables.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Vegetables.
     */
    distinct?: VegetableScalarFieldEnum | VegetableScalarFieldEnum[]
  }

  /**
   * Vegetable findFirstOrThrow
   */
  export type VegetableFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vegetable
     */
    select?: VegetableSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Vegetable
     */
    omit?: VegetableOmit<ExtArgs> | null
    /**
     * Filter, which Vegetable to fetch.
     */
    where?: VegetableWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Vegetables to fetch.
     */
    orderBy?: VegetableOrderByWithRelationInput | VegetableOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Vegetables.
     */
    cursor?: VegetableWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Vegetables from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Vegetables.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Vegetables.
     */
    distinct?: VegetableScalarFieldEnum | VegetableScalarFieldEnum[]
  }

  /**
   * Vegetable findMany
   */
  export type VegetableFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vegetable
     */
    select?: VegetableSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Vegetable
     */
    omit?: VegetableOmit<ExtArgs> | null
    /**
     * Filter, which Vegetables to fetch.
     */
    where?: VegetableWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Vegetables to fetch.
     */
    orderBy?: VegetableOrderByWithRelationInput | VegetableOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Vegetables.
     */
    cursor?: VegetableWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Vegetables from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Vegetables.
     */
    skip?: number
    distinct?: VegetableScalarFieldEnum | VegetableScalarFieldEnum[]
  }

  /**
   * Vegetable create
   */
  export type VegetableCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vegetable
     */
    select?: VegetableSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Vegetable
     */
    omit?: VegetableOmit<ExtArgs> | null
    /**
     * The data needed to create a Vegetable.
     */
    data: XOR<VegetableCreateInput, VegetableUncheckedCreateInput>
  }

  /**
   * Vegetable createMany
   */
  export type VegetableCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Vegetables.
     */
    data: VegetableCreateManyInput | VegetableCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Vegetable update
   */
  export type VegetableUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vegetable
     */
    select?: VegetableSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Vegetable
     */
    omit?: VegetableOmit<ExtArgs> | null
    /**
     * The data needed to update a Vegetable.
     */
    data: XOR<VegetableUpdateInput, VegetableUncheckedUpdateInput>
    /**
     * Choose, which Vegetable to update.
     */
    where: VegetableWhereUniqueInput
  }

  /**
   * Vegetable updateMany
   */
  export type VegetableUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Vegetables.
     */
    data: XOR<VegetableUpdateManyMutationInput, VegetableUncheckedUpdateManyInput>
    /**
     * Filter which Vegetables to update
     */
    where?: VegetableWhereInput
    /**
     * Limit how many Vegetables to update.
     */
    limit?: number
  }

  /**
   * Vegetable upsert
   */
  export type VegetableUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vegetable
     */
    select?: VegetableSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Vegetable
     */
    omit?: VegetableOmit<ExtArgs> | null
    /**
     * The filter to search for the Vegetable to update in case it exists.
     */
    where: VegetableWhereUniqueInput
    /**
     * In case the Vegetable found by the `where` argument doesn't exist, create a new Vegetable with this data.
     */
    create: XOR<VegetableCreateInput, VegetableUncheckedCreateInput>
    /**
     * In case the Vegetable was found with the provided `where` argument, update it with this data.
     */
    update: XOR<VegetableUpdateInput, VegetableUncheckedUpdateInput>
  }

  /**
   * Vegetable delete
   */
  export type VegetableDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vegetable
     */
    select?: VegetableSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Vegetable
     */
    omit?: VegetableOmit<ExtArgs> | null
    /**
     * Filter which Vegetable to delete.
     */
    where: VegetableWhereUniqueInput
  }

  /**
   * Vegetable deleteMany
   */
  export type VegetableDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Vegetables to delete
     */
    where?: VegetableWhereInput
    /**
     * Limit how many Vegetables to delete.
     */
    limit?: number
  }

  /**
   * Vegetable without action
   */
  export type VegetableDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vegetable
     */
    select?: VegetableSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Vegetable
     */
    omit?: VegetableOmit<ExtArgs> | null
  }


  /**
   * Model Mushroom
   */

  export type AggregateMushroom = {
    _count: MushroomCountAggregateOutputType | null
    _avg: MushroomAvgAggregateOutputType | null
    _sum: MushroomSumAggregateOutputType | null
    _min: MushroomMinAggregateOutputType | null
    _max: MushroomMaxAggregateOutputType | null
  }

  export type MushroomAvgAggregateOutputType = {
    id: number | null
  }

  export type MushroomSumAggregateOutputType = {
    id: number | null
  }

  export type MushroomMinAggregateOutputType = {
    id: number | null
    name: string | null
    description: string | null
    isWild: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type MushroomMaxAggregateOutputType = {
    id: number | null
    name: string | null
    description: string | null
    isWild: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type MushroomCountAggregateOutputType = {
    id: number
    name: number
    description: number
    isWild: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type MushroomAvgAggregateInputType = {
    id?: true
  }

  export type MushroomSumAggregateInputType = {
    id?: true
  }

  export type MushroomMinAggregateInputType = {
    id?: true
    name?: true
    description?: true
    isWild?: true
    createdAt?: true
    updatedAt?: true
  }

  export type MushroomMaxAggregateInputType = {
    id?: true
    name?: true
    description?: true
    isWild?: true
    createdAt?: true
    updatedAt?: true
  }

  export type MushroomCountAggregateInputType = {
    id?: true
    name?: true
    description?: true
    isWild?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type MushroomAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Mushroom to aggregate.
     */
    where?: MushroomWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Mushrooms to fetch.
     */
    orderBy?: MushroomOrderByWithRelationInput | MushroomOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: MushroomWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Mushrooms from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Mushrooms.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Mushrooms
    **/
    _count?: true | MushroomCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: MushroomAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: MushroomSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MushroomMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MushroomMaxAggregateInputType
  }

  export type GetMushroomAggregateType<T extends MushroomAggregateArgs> = {
        [P in keyof T & keyof AggregateMushroom]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMushroom[P]>
      : GetScalarType<T[P], AggregateMushroom[P]>
  }




  export type MushroomGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MushroomWhereInput
    orderBy?: MushroomOrderByWithAggregationInput | MushroomOrderByWithAggregationInput[]
    by: MushroomScalarFieldEnum[] | MushroomScalarFieldEnum
    having?: MushroomScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MushroomCountAggregateInputType | true
    _avg?: MushroomAvgAggregateInputType
    _sum?: MushroomSumAggregateInputType
    _min?: MushroomMinAggregateInputType
    _max?: MushroomMaxAggregateInputType
  }

  export type MushroomGroupByOutputType = {
    id: number
    name: string
    description: string | null
    isWild: boolean
    createdAt: Date
    updatedAt: Date
    _count: MushroomCountAggregateOutputType | null
    _avg: MushroomAvgAggregateOutputType | null
    _sum: MushroomSumAggregateOutputType | null
    _min: MushroomMinAggregateOutputType | null
    _max: MushroomMaxAggregateOutputType | null
  }

  type GetMushroomGroupByPayload<T extends MushroomGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<MushroomGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MushroomGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MushroomGroupByOutputType[P]>
            : GetScalarType<T[P], MushroomGroupByOutputType[P]>
        }
      >
    >


  export type MushroomSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    isWild?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["mushroom"]>



  export type MushroomSelectScalar = {
    id?: boolean
    name?: boolean
    description?: boolean
    isWild?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type MushroomOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "description" | "isWild" | "createdAt" | "updatedAt", ExtArgs["result"]["mushroom"]>

  export type $MushroomPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Mushroom"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      description: string | null
      isWild: boolean
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["mushroom"]>
    composites: {}
  }

  type MushroomGetPayload<S extends boolean | null | undefined | MushroomDefaultArgs> = $Result.GetResult<Prisma.$MushroomPayload, S>

  type MushroomCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<MushroomFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: MushroomCountAggregateInputType | true
    }

  export interface MushroomDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Mushroom'], meta: { name: 'Mushroom' } }
    /**
     * Find zero or one Mushroom that matches the filter.
     * @param {MushroomFindUniqueArgs} args - Arguments to find a Mushroom
     * @example
     * // Get one Mushroom
     * const mushroom = await prisma.mushroom.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends MushroomFindUniqueArgs>(args: SelectSubset<T, MushroomFindUniqueArgs<ExtArgs>>): Prisma__MushroomClient<$Result.GetResult<Prisma.$MushroomPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Mushroom that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {MushroomFindUniqueOrThrowArgs} args - Arguments to find a Mushroom
     * @example
     * // Get one Mushroom
     * const mushroom = await prisma.mushroom.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends MushroomFindUniqueOrThrowArgs>(args: SelectSubset<T, MushroomFindUniqueOrThrowArgs<ExtArgs>>): Prisma__MushroomClient<$Result.GetResult<Prisma.$MushroomPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Mushroom that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MushroomFindFirstArgs} args - Arguments to find a Mushroom
     * @example
     * // Get one Mushroom
     * const mushroom = await prisma.mushroom.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends MushroomFindFirstArgs>(args?: SelectSubset<T, MushroomFindFirstArgs<ExtArgs>>): Prisma__MushroomClient<$Result.GetResult<Prisma.$MushroomPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Mushroom that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MushroomFindFirstOrThrowArgs} args - Arguments to find a Mushroom
     * @example
     * // Get one Mushroom
     * const mushroom = await prisma.mushroom.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends MushroomFindFirstOrThrowArgs>(args?: SelectSubset<T, MushroomFindFirstOrThrowArgs<ExtArgs>>): Prisma__MushroomClient<$Result.GetResult<Prisma.$MushroomPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Mushrooms that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MushroomFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Mushrooms
     * const mushrooms = await prisma.mushroom.findMany()
     * 
     * // Get first 10 Mushrooms
     * const mushrooms = await prisma.mushroom.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const mushroomWithIdOnly = await prisma.mushroom.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends MushroomFindManyArgs>(args?: SelectSubset<T, MushroomFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MushroomPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Mushroom.
     * @param {MushroomCreateArgs} args - Arguments to create a Mushroom.
     * @example
     * // Create one Mushroom
     * const Mushroom = await prisma.mushroom.create({
     *   data: {
     *     // ... data to create a Mushroom
     *   }
     * })
     * 
     */
    create<T extends MushroomCreateArgs>(args: SelectSubset<T, MushroomCreateArgs<ExtArgs>>): Prisma__MushroomClient<$Result.GetResult<Prisma.$MushroomPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Mushrooms.
     * @param {MushroomCreateManyArgs} args - Arguments to create many Mushrooms.
     * @example
     * // Create many Mushrooms
     * const mushroom = await prisma.mushroom.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends MushroomCreateManyArgs>(args?: SelectSubset<T, MushroomCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Mushroom.
     * @param {MushroomDeleteArgs} args - Arguments to delete one Mushroom.
     * @example
     * // Delete one Mushroom
     * const Mushroom = await prisma.mushroom.delete({
     *   where: {
     *     // ... filter to delete one Mushroom
     *   }
     * })
     * 
     */
    delete<T extends MushroomDeleteArgs>(args: SelectSubset<T, MushroomDeleteArgs<ExtArgs>>): Prisma__MushroomClient<$Result.GetResult<Prisma.$MushroomPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Mushroom.
     * @param {MushroomUpdateArgs} args - Arguments to update one Mushroom.
     * @example
     * // Update one Mushroom
     * const mushroom = await prisma.mushroom.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends MushroomUpdateArgs>(args: SelectSubset<T, MushroomUpdateArgs<ExtArgs>>): Prisma__MushroomClient<$Result.GetResult<Prisma.$MushroomPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Mushrooms.
     * @param {MushroomDeleteManyArgs} args - Arguments to filter Mushrooms to delete.
     * @example
     * // Delete a few Mushrooms
     * const { count } = await prisma.mushroom.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends MushroomDeleteManyArgs>(args?: SelectSubset<T, MushroomDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Mushrooms.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MushroomUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Mushrooms
     * const mushroom = await prisma.mushroom.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends MushroomUpdateManyArgs>(args: SelectSubset<T, MushroomUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Mushroom.
     * @param {MushroomUpsertArgs} args - Arguments to update or create a Mushroom.
     * @example
     * // Update or create a Mushroom
     * const mushroom = await prisma.mushroom.upsert({
     *   create: {
     *     // ... data to create a Mushroom
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Mushroom we want to update
     *   }
     * })
     */
    upsert<T extends MushroomUpsertArgs>(args: SelectSubset<T, MushroomUpsertArgs<ExtArgs>>): Prisma__MushroomClient<$Result.GetResult<Prisma.$MushroomPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Mushrooms.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MushroomCountArgs} args - Arguments to filter Mushrooms to count.
     * @example
     * // Count the number of Mushrooms
     * const count = await prisma.mushroom.count({
     *   where: {
     *     // ... the filter for the Mushrooms we want to count
     *   }
     * })
    **/
    count<T extends MushroomCountArgs>(
      args?: Subset<T, MushroomCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MushroomCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Mushroom.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MushroomAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends MushroomAggregateArgs>(args: Subset<T, MushroomAggregateArgs>): Prisma.PrismaPromise<GetMushroomAggregateType<T>>

    /**
     * Group by Mushroom.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MushroomGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends MushroomGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: MushroomGroupByArgs['orderBy'] }
        : { orderBy?: MushroomGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, MushroomGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMushroomGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Mushroom model
   */
  readonly fields: MushroomFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Mushroom.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__MushroomClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Mushroom model
   */
  interface MushroomFieldRefs {
    readonly id: FieldRef<"Mushroom", 'Int'>
    readonly name: FieldRef<"Mushroom", 'String'>
    readonly description: FieldRef<"Mushroom", 'String'>
    readonly isWild: FieldRef<"Mushroom", 'Boolean'>
    readonly createdAt: FieldRef<"Mushroom", 'DateTime'>
    readonly updatedAt: FieldRef<"Mushroom", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Mushroom findUnique
   */
  export type MushroomFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Mushroom
     */
    select?: MushroomSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Mushroom
     */
    omit?: MushroomOmit<ExtArgs> | null
    /**
     * Filter, which Mushroom to fetch.
     */
    where: MushroomWhereUniqueInput
  }

  /**
   * Mushroom findUniqueOrThrow
   */
  export type MushroomFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Mushroom
     */
    select?: MushroomSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Mushroom
     */
    omit?: MushroomOmit<ExtArgs> | null
    /**
     * Filter, which Mushroom to fetch.
     */
    where: MushroomWhereUniqueInput
  }

  /**
   * Mushroom findFirst
   */
  export type MushroomFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Mushroom
     */
    select?: MushroomSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Mushroom
     */
    omit?: MushroomOmit<ExtArgs> | null
    /**
     * Filter, which Mushroom to fetch.
     */
    where?: MushroomWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Mushrooms to fetch.
     */
    orderBy?: MushroomOrderByWithRelationInput | MushroomOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Mushrooms.
     */
    cursor?: MushroomWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Mushrooms from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Mushrooms.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Mushrooms.
     */
    distinct?: MushroomScalarFieldEnum | MushroomScalarFieldEnum[]
  }

  /**
   * Mushroom findFirstOrThrow
   */
  export type MushroomFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Mushroom
     */
    select?: MushroomSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Mushroom
     */
    omit?: MushroomOmit<ExtArgs> | null
    /**
     * Filter, which Mushroom to fetch.
     */
    where?: MushroomWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Mushrooms to fetch.
     */
    orderBy?: MushroomOrderByWithRelationInput | MushroomOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Mushrooms.
     */
    cursor?: MushroomWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Mushrooms from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Mushrooms.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Mushrooms.
     */
    distinct?: MushroomScalarFieldEnum | MushroomScalarFieldEnum[]
  }

  /**
   * Mushroom findMany
   */
  export type MushroomFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Mushroom
     */
    select?: MushroomSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Mushroom
     */
    omit?: MushroomOmit<ExtArgs> | null
    /**
     * Filter, which Mushrooms to fetch.
     */
    where?: MushroomWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Mushrooms to fetch.
     */
    orderBy?: MushroomOrderByWithRelationInput | MushroomOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Mushrooms.
     */
    cursor?: MushroomWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Mushrooms from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Mushrooms.
     */
    skip?: number
    distinct?: MushroomScalarFieldEnum | MushroomScalarFieldEnum[]
  }

  /**
   * Mushroom create
   */
  export type MushroomCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Mushroom
     */
    select?: MushroomSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Mushroom
     */
    omit?: MushroomOmit<ExtArgs> | null
    /**
     * The data needed to create a Mushroom.
     */
    data: XOR<MushroomCreateInput, MushroomUncheckedCreateInput>
  }

  /**
   * Mushroom createMany
   */
  export type MushroomCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Mushrooms.
     */
    data: MushroomCreateManyInput | MushroomCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Mushroom update
   */
  export type MushroomUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Mushroom
     */
    select?: MushroomSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Mushroom
     */
    omit?: MushroomOmit<ExtArgs> | null
    /**
     * The data needed to update a Mushroom.
     */
    data: XOR<MushroomUpdateInput, MushroomUncheckedUpdateInput>
    /**
     * Choose, which Mushroom to update.
     */
    where: MushroomWhereUniqueInput
  }

  /**
   * Mushroom updateMany
   */
  export type MushroomUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Mushrooms.
     */
    data: XOR<MushroomUpdateManyMutationInput, MushroomUncheckedUpdateManyInput>
    /**
     * Filter which Mushrooms to update
     */
    where?: MushroomWhereInput
    /**
     * Limit how many Mushrooms to update.
     */
    limit?: number
  }

  /**
   * Mushroom upsert
   */
  export type MushroomUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Mushroom
     */
    select?: MushroomSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Mushroom
     */
    omit?: MushroomOmit<ExtArgs> | null
    /**
     * The filter to search for the Mushroom to update in case it exists.
     */
    where: MushroomWhereUniqueInput
    /**
     * In case the Mushroom found by the `where` argument doesn't exist, create a new Mushroom with this data.
     */
    create: XOR<MushroomCreateInput, MushroomUncheckedCreateInput>
    /**
     * In case the Mushroom was found with the provided `where` argument, update it with this data.
     */
    update: XOR<MushroomUpdateInput, MushroomUncheckedUpdateInput>
  }

  /**
   * Mushroom delete
   */
  export type MushroomDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Mushroom
     */
    select?: MushroomSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Mushroom
     */
    omit?: MushroomOmit<ExtArgs> | null
    /**
     * Filter which Mushroom to delete.
     */
    where: MushroomWhereUniqueInput
  }

  /**
   * Mushroom deleteMany
   */
  export type MushroomDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Mushrooms to delete
     */
    where?: MushroomWhereInput
    /**
     * Limit how many Mushrooms to delete.
     */
    limit?: number
  }

  /**
   * Mushroom without action
   */
  export type MushroomDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Mushroom
     */
    select?: MushroomSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Mushroom
     */
    omit?: MushroomOmit<ExtArgs> | null
  }


  /**
   * Model Fruit
   */

  export type AggregateFruit = {
    _count: FruitCountAggregateOutputType | null
    _avg: FruitAvgAggregateOutputType | null
    _sum: FruitSumAggregateOutputType | null
    _min: FruitMinAggregateOutputType | null
    _max: FruitMaxAggregateOutputType | null
  }

  export type FruitAvgAggregateOutputType = {
    id: number | null
  }

  export type FruitSumAggregateOutputType = {
    id: number | null
  }

  export type FruitMinAggregateOutputType = {
    id: number | null
    name: string | null
    description: string | null
    isTropical: boolean | null
    isBerry: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type FruitMaxAggregateOutputType = {
    id: number | null
    name: string | null
    description: string | null
    isTropical: boolean | null
    isBerry: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type FruitCountAggregateOutputType = {
    id: number
    name: number
    description: number
    isTropical: number
    isBerry: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type FruitAvgAggregateInputType = {
    id?: true
  }

  export type FruitSumAggregateInputType = {
    id?: true
  }

  export type FruitMinAggregateInputType = {
    id?: true
    name?: true
    description?: true
    isTropical?: true
    isBerry?: true
    createdAt?: true
    updatedAt?: true
  }

  export type FruitMaxAggregateInputType = {
    id?: true
    name?: true
    description?: true
    isTropical?: true
    isBerry?: true
    createdAt?: true
    updatedAt?: true
  }

  export type FruitCountAggregateInputType = {
    id?: true
    name?: true
    description?: true
    isTropical?: true
    isBerry?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type FruitAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Fruit to aggregate.
     */
    where?: FruitWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Fruits to fetch.
     */
    orderBy?: FruitOrderByWithRelationInput | FruitOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: FruitWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Fruits from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Fruits.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Fruits
    **/
    _count?: true | FruitCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: FruitAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: FruitSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: FruitMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: FruitMaxAggregateInputType
  }

  export type GetFruitAggregateType<T extends FruitAggregateArgs> = {
        [P in keyof T & keyof AggregateFruit]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateFruit[P]>
      : GetScalarType<T[P], AggregateFruit[P]>
  }




  export type FruitGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FruitWhereInput
    orderBy?: FruitOrderByWithAggregationInput | FruitOrderByWithAggregationInput[]
    by: FruitScalarFieldEnum[] | FruitScalarFieldEnum
    having?: FruitScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: FruitCountAggregateInputType | true
    _avg?: FruitAvgAggregateInputType
    _sum?: FruitSumAggregateInputType
    _min?: FruitMinAggregateInputType
    _max?: FruitMaxAggregateInputType
  }

  export type FruitGroupByOutputType = {
    id: number
    name: string
    description: string | null
    isTropical: boolean
    isBerry: boolean
    createdAt: Date
    updatedAt: Date
    _count: FruitCountAggregateOutputType | null
    _avg: FruitAvgAggregateOutputType | null
    _sum: FruitSumAggregateOutputType | null
    _min: FruitMinAggregateOutputType | null
    _max: FruitMaxAggregateOutputType | null
  }

  type GetFruitGroupByPayload<T extends FruitGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<FruitGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof FruitGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], FruitGroupByOutputType[P]>
            : GetScalarType<T[P], FruitGroupByOutputType[P]>
        }
      >
    >


  export type FruitSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    isTropical?: boolean
    isBerry?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["fruit"]>



  export type FruitSelectScalar = {
    id?: boolean
    name?: boolean
    description?: boolean
    isTropical?: boolean
    isBerry?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type FruitOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "description" | "isTropical" | "isBerry" | "createdAt" | "updatedAt", ExtArgs["result"]["fruit"]>

  export type $FruitPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Fruit"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      description: string | null
      isTropical: boolean
      isBerry: boolean
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["fruit"]>
    composites: {}
  }

  type FruitGetPayload<S extends boolean | null | undefined | FruitDefaultArgs> = $Result.GetResult<Prisma.$FruitPayload, S>

  type FruitCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<FruitFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: FruitCountAggregateInputType | true
    }

  export interface FruitDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Fruit'], meta: { name: 'Fruit' } }
    /**
     * Find zero or one Fruit that matches the filter.
     * @param {FruitFindUniqueArgs} args - Arguments to find a Fruit
     * @example
     * // Get one Fruit
     * const fruit = await prisma.fruit.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends FruitFindUniqueArgs>(args: SelectSubset<T, FruitFindUniqueArgs<ExtArgs>>): Prisma__FruitClient<$Result.GetResult<Prisma.$FruitPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Fruit that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {FruitFindUniqueOrThrowArgs} args - Arguments to find a Fruit
     * @example
     * // Get one Fruit
     * const fruit = await prisma.fruit.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends FruitFindUniqueOrThrowArgs>(args: SelectSubset<T, FruitFindUniqueOrThrowArgs<ExtArgs>>): Prisma__FruitClient<$Result.GetResult<Prisma.$FruitPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Fruit that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FruitFindFirstArgs} args - Arguments to find a Fruit
     * @example
     * // Get one Fruit
     * const fruit = await prisma.fruit.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends FruitFindFirstArgs>(args?: SelectSubset<T, FruitFindFirstArgs<ExtArgs>>): Prisma__FruitClient<$Result.GetResult<Prisma.$FruitPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Fruit that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FruitFindFirstOrThrowArgs} args - Arguments to find a Fruit
     * @example
     * // Get one Fruit
     * const fruit = await prisma.fruit.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends FruitFindFirstOrThrowArgs>(args?: SelectSubset<T, FruitFindFirstOrThrowArgs<ExtArgs>>): Prisma__FruitClient<$Result.GetResult<Prisma.$FruitPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Fruits that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FruitFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Fruits
     * const fruits = await prisma.fruit.findMany()
     * 
     * // Get first 10 Fruits
     * const fruits = await prisma.fruit.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const fruitWithIdOnly = await prisma.fruit.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends FruitFindManyArgs>(args?: SelectSubset<T, FruitFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FruitPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Fruit.
     * @param {FruitCreateArgs} args - Arguments to create a Fruit.
     * @example
     * // Create one Fruit
     * const Fruit = await prisma.fruit.create({
     *   data: {
     *     // ... data to create a Fruit
     *   }
     * })
     * 
     */
    create<T extends FruitCreateArgs>(args: SelectSubset<T, FruitCreateArgs<ExtArgs>>): Prisma__FruitClient<$Result.GetResult<Prisma.$FruitPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Fruits.
     * @param {FruitCreateManyArgs} args - Arguments to create many Fruits.
     * @example
     * // Create many Fruits
     * const fruit = await prisma.fruit.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends FruitCreateManyArgs>(args?: SelectSubset<T, FruitCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Fruit.
     * @param {FruitDeleteArgs} args - Arguments to delete one Fruit.
     * @example
     * // Delete one Fruit
     * const Fruit = await prisma.fruit.delete({
     *   where: {
     *     // ... filter to delete one Fruit
     *   }
     * })
     * 
     */
    delete<T extends FruitDeleteArgs>(args: SelectSubset<T, FruitDeleteArgs<ExtArgs>>): Prisma__FruitClient<$Result.GetResult<Prisma.$FruitPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Fruit.
     * @param {FruitUpdateArgs} args - Arguments to update one Fruit.
     * @example
     * // Update one Fruit
     * const fruit = await prisma.fruit.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends FruitUpdateArgs>(args: SelectSubset<T, FruitUpdateArgs<ExtArgs>>): Prisma__FruitClient<$Result.GetResult<Prisma.$FruitPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Fruits.
     * @param {FruitDeleteManyArgs} args - Arguments to filter Fruits to delete.
     * @example
     * // Delete a few Fruits
     * const { count } = await prisma.fruit.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends FruitDeleteManyArgs>(args?: SelectSubset<T, FruitDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Fruits.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FruitUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Fruits
     * const fruit = await prisma.fruit.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends FruitUpdateManyArgs>(args: SelectSubset<T, FruitUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Fruit.
     * @param {FruitUpsertArgs} args - Arguments to update or create a Fruit.
     * @example
     * // Update or create a Fruit
     * const fruit = await prisma.fruit.upsert({
     *   create: {
     *     // ... data to create a Fruit
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Fruit we want to update
     *   }
     * })
     */
    upsert<T extends FruitUpsertArgs>(args: SelectSubset<T, FruitUpsertArgs<ExtArgs>>): Prisma__FruitClient<$Result.GetResult<Prisma.$FruitPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Fruits.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FruitCountArgs} args - Arguments to filter Fruits to count.
     * @example
     * // Count the number of Fruits
     * const count = await prisma.fruit.count({
     *   where: {
     *     // ... the filter for the Fruits we want to count
     *   }
     * })
    **/
    count<T extends FruitCountArgs>(
      args?: Subset<T, FruitCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], FruitCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Fruit.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FruitAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends FruitAggregateArgs>(args: Subset<T, FruitAggregateArgs>): Prisma.PrismaPromise<GetFruitAggregateType<T>>

    /**
     * Group by Fruit.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FruitGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends FruitGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: FruitGroupByArgs['orderBy'] }
        : { orderBy?: FruitGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, FruitGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetFruitGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Fruit model
   */
  readonly fields: FruitFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Fruit.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__FruitClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Fruit model
   */
  interface FruitFieldRefs {
    readonly id: FieldRef<"Fruit", 'Int'>
    readonly name: FieldRef<"Fruit", 'String'>
    readonly description: FieldRef<"Fruit", 'String'>
    readonly isTropical: FieldRef<"Fruit", 'Boolean'>
    readonly isBerry: FieldRef<"Fruit", 'Boolean'>
    readonly createdAt: FieldRef<"Fruit", 'DateTime'>
    readonly updatedAt: FieldRef<"Fruit", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Fruit findUnique
   */
  export type FruitFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Fruit
     */
    select?: FruitSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Fruit
     */
    omit?: FruitOmit<ExtArgs> | null
    /**
     * Filter, which Fruit to fetch.
     */
    where: FruitWhereUniqueInput
  }

  /**
   * Fruit findUniqueOrThrow
   */
  export type FruitFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Fruit
     */
    select?: FruitSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Fruit
     */
    omit?: FruitOmit<ExtArgs> | null
    /**
     * Filter, which Fruit to fetch.
     */
    where: FruitWhereUniqueInput
  }

  /**
   * Fruit findFirst
   */
  export type FruitFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Fruit
     */
    select?: FruitSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Fruit
     */
    omit?: FruitOmit<ExtArgs> | null
    /**
     * Filter, which Fruit to fetch.
     */
    where?: FruitWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Fruits to fetch.
     */
    orderBy?: FruitOrderByWithRelationInput | FruitOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Fruits.
     */
    cursor?: FruitWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Fruits from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Fruits.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Fruits.
     */
    distinct?: FruitScalarFieldEnum | FruitScalarFieldEnum[]
  }

  /**
   * Fruit findFirstOrThrow
   */
  export type FruitFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Fruit
     */
    select?: FruitSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Fruit
     */
    omit?: FruitOmit<ExtArgs> | null
    /**
     * Filter, which Fruit to fetch.
     */
    where?: FruitWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Fruits to fetch.
     */
    orderBy?: FruitOrderByWithRelationInput | FruitOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Fruits.
     */
    cursor?: FruitWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Fruits from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Fruits.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Fruits.
     */
    distinct?: FruitScalarFieldEnum | FruitScalarFieldEnum[]
  }

  /**
   * Fruit findMany
   */
  export type FruitFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Fruit
     */
    select?: FruitSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Fruit
     */
    omit?: FruitOmit<ExtArgs> | null
    /**
     * Filter, which Fruits to fetch.
     */
    where?: FruitWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Fruits to fetch.
     */
    orderBy?: FruitOrderByWithRelationInput | FruitOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Fruits.
     */
    cursor?: FruitWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Fruits from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Fruits.
     */
    skip?: number
    distinct?: FruitScalarFieldEnum | FruitScalarFieldEnum[]
  }

  /**
   * Fruit create
   */
  export type FruitCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Fruit
     */
    select?: FruitSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Fruit
     */
    omit?: FruitOmit<ExtArgs> | null
    /**
     * The data needed to create a Fruit.
     */
    data: XOR<FruitCreateInput, FruitUncheckedCreateInput>
  }

  /**
   * Fruit createMany
   */
  export type FruitCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Fruits.
     */
    data: FruitCreateManyInput | FruitCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Fruit update
   */
  export type FruitUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Fruit
     */
    select?: FruitSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Fruit
     */
    omit?: FruitOmit<ExtArgs> | null
    /**
     * The data needed to update a Fruit.
     */
    data: XOR<FruitUpdateInput, FruitUncheckedUpdateInput>
    /**
     * Choose, which Fruit to update.
     */
    where: FruitWhereUniqueInput
  }

  /**
   * Fruit updateMany
   */
  export type FruitUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Fruits.
     */
    data: XOR<FruitUpdateManyMutationInput, FruitUncheckedUpdateManyInput>
    /**
     * Filter which Fruits to update
     */
    where?: FruitWhereInput
    /**
     * Limit how many Fruits to update.
     */
    limit?: number
  }

  /**
   * Fruit upsert
   */
  export type FruitUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Fruit
     */
    select?: FruitSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Fruit
     */
    omit?: FruitOmit<ExtArgs> | null
    /**
     * The filter to search for the Fruit to update in case it exists.
     */
    where: FruitWhereUniqueInput
    /**
     * In case the Fruit found by the `where` argument doesn't exist, create a new Fruit with this data.
     */
    create: XOR<FruitCreateInput, FruitUncheckedCreateInput>
    /**
     * In case the Fruit was found with the provided `where` argument, update it with this data.
     */
    update: XOR<FruitUpdateInput, FruitUncheckedUpdateInput>
  }

  /**
   * Fruit delete
   */
  export type FruitDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Fruit
     */
    select?: FruitSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Fruit
     */
    omit?: FruitOmit<ExtArgs> | null
    /**
     * Filter which Fruit to delete.
     */
    where: FruitWhereUniqueInput
  }

  /**
   * Fruit deleteMany
   */
  export type FruitDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Fruits to delete
     */
    where?: FruitWhereInput
    /**
     * Limit how many Fruits to delete.
     */
    limit?: number
  }

  /**
   * Fruit without action
   */
  export type FruitDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Fruit
     */
    select?: FruitSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Fruit
     */
    omit?: FruitOmit<ExtArgs> | null
  }


  /**
   * Model NutAndSeed
   */

  export type AggregateNutAndSeed = {
    _count: NutAndSeedCountAggregateOutputType | null
    _avg: NutAndSeedAvgAggregateOutputType | null
    _sum: NutAndSeedSumAggregateOutputType | null
    _min: NutAndSeedMinAggregateOutputType | null
    _max: NutAndSeedMaxAggregateOutputType | null
  }

  export type NutAndSeedAvgAggregateOutputType = {
    id: number | null
  }

  export type NutAndSeedSumAggregateOutputType = {
    id: number | null
  }

  export type NutAndSeedMinAggregateOutputType = {
    id: number | null
    name: string | null
    description: string | null
    isNut: boolean | null
    isSeed: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type NutAndSeedMaxAggregateOutputType = {
    id: number | null
    name: string | null
    description: string | null
    isNut: boolean | null
    isSeed: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type NutAndSeedCountAggregateOutputType = {
    id: number
    name: number
    description: number
    isNut: number
    isSeed: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type NutAndSeedAvgAggregateInputType = {
    id?: true
  }

  export type NutAndSeedSumAggregateInputType = {
    id?: true
  }

  export type NutAndSeedMinAggregateInputType = {
    id?: true
    name?: true
    description?: true
    isNut?: true
    isSeed?: true
    createdAt?: true
    updatedAt?: true
  }

  export type NutAndSeedMaxAggregateInputType = {
    id?: true
    name?: true
    description?: true
    isNut?: true
    isSeed?: true
    createdAt?: true
    updatedAt?: true
  }

  export type NutAndSeedCountAggregateInputType = {
    id?: true
    name?: true
    description?: true
    isNut?: true
    isSeed?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type NutAndSeedAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which NutAndSeed to aggregate.
     */
    where?: NutAndSeedWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of NutAndSeeds to fetch.
     */
    orderBy?: NutAndSeedOrderByWithRelationInput | NutAndSeedOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: NutAndSeedWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` NutAndSeeds from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` NutAndSeeds.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned NutAndSeeds
    **/
    _count?: true | NutAndSeedCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: NutAndSeedAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: NutAndSeedSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: NutAndSeedMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: NutAndSeedMaxAggregateInputType
  }

  export type GetNutAndSeedAggregateType<T extends NutAndSeedAggregateArgs> = {
        [P in keyof T & keyof AggregateNutAndSeed]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateNutAndSeed[P]>
      : GetScalarType<T[P], AggregateNutAndSeed[P]>
  }




  export type NutAndSeedGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: NutAndSeedWhereInput
    orderBy?: NutAndSeedOrderByWithAggregationInput | NutAndSeedOrderByWithAggregationInput[]
    by: NutAndSeedScalarFieldEnum[] | NutAndSeedScalarFieldEnum
    having?: NutAndSeedScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: NutAndSeedCountAggregateInputType | true
    _avg?: NutAndSeedAvgAggregateInputType
    _sum?: NutAndSeedSumAggregateInputType
    _min?: NutAndSeedMinAggregateInputType
    _max?: NutAndSeedMaxAggregateInputType
  }

  export type NutAndSeedGroupByOutputType = {
    id: number
    name: string
    description: string | null
    isNut: boolean
    isSeed: boolean
    createdAt: Date
    updatedAt: Date
    _count: NutAndSeedCountAggregateOutputType | null
    _avg: NutAndSeedAvgAggregateOutputType | null
    _sum: NutAndSeedSumAggregateOutputType | null
    _min: NutAndSeedMinAggregateOutputType | null
    _max: NutAndSeedMaxAggregateOutputType | null
  }

  type GetNutAndSeedGroupByPayload<T extends NutAndSeedGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<NutAndSeedGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof NutAndSeedGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], NutAndSeedGroupByOutputType[P]>
            : GetScalarType<T[P], NutAndSeedGroupByOutputType[P]>
        }
      >
    >


  export type NutAndSeedSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    isNut?: boolean
    isSeed?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["nutAndSeed"]>



  export type NutAndSeedSelectScalar = {
    id?: boolean
    name?: boolean
    description?: boolean
    isNut?: boolean
    isSeed?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type NutAndSeedOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "description" | "isNut" | "isSeed" | "createdAt" | "updatedAt", ExtArgs["result"]["nutAndSeed"]>

  export type $NutAndSeedPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "NutAndSeed"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      description: string | null
      isNut: boolean
      isSeed: boolean
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["nutAndSeed"]>
    composites: {}
  }

  type NutAndSeedGetPayload<S extends boolean | null | undefined | NutAndSeedDefaultArgs> = $Result.GetResult<Prisma.$NutAndSeedPayload, S>

  type NutAndSeedCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<NutAndSeedFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: NutAndSeedCountAggregateInputType | true
    }

  export interface NutAndSeedDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['NutAndSeed'], meta: { name: 'NutAndSeed' } }
    /**
     * Find zero or one NutAndSeed that matches the filter.
     * @param {NutAndSeedFindUniqueArgs} args - Arguments to find a NutAndSeed
     * @example
     * // Get one NutAndSeed
     * const nutAndSeed = await prisma.nutAndSeed.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends NutAndSeedFindUniqueArgs>(args: SelectSubset<T, NutAndSeedFindUniqueArgs<ExtArgs>>): Prisma__NutAndSeedClient<$Result.GetResult<Prisma.$NutAndSeedPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one NutAndSeed that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {NutAndSeedFindUniqueOrThrowArgs} args - Arguments to find a NutAndSeed
     * @example
     * // Get one NutAndSeed
     * const nutAndSeed = await prisma.nutAndSeed.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends NutAndSeedFindUniqueOrThrowArgs>(args: SelectSubset<T, NutAndSeedFindUniqueOrThrowArgs<ExtArgs>>): Prisma__NutAndSeedClient<$Result.GetResult<Prisma.$NutAndSeedPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first NutAndSeed that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NutAndSeedFindFirstArgs} args - Arguments to find a NutAndSeed
     * @example
     * // Get one NutAndSeed
     * const nutAndSeed = await prisma.nutAndSeed.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends NutAndSeedFindFirstArgs>(args?: SelectSubset<T, NutAndSeedFindFirstArgs<ExtArgs>>): Prisma__NutAndSeedClient<$Result.GetResult<Prisma.$NutAndSeedPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first NutAndSeed that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NutAndSeedFindFirstOrThrowArgs} args - Arguments to find a NutAndSeed
     * @example
     * // Get one NutAndSeed
     * const nutAndSeed = await prisma.nutAndSeed.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends NutAndSeedFindFirstOrThrowArgs>(args?: SelectSubset<T, NutAndSeedFindFirstOrThrowArgs<ExtArgs>>): Prisma__NutAndSeedClient<$Result.GetResult<Prisma.$NutAndSeedPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more NutAndSeeds that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NutAndSeedFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all NutAndSeeds
     * const nutAndSeeds = await prisma.nutAndSeed.findMany()
     * 
     * // Get first 10 NutAndSeeds
     * const nutAndSeeds = await prisma.nutAndSeed.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const nutAndSeedWithIdOnly = await prisma.nutAndSeed.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends NutAndSeedFindManyArgs>(args?: SelectSubset<T, NutAndSeedFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NutAndSeedPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a NutAndSeed.
     * @param {NutAndSeedCreateArgs} args - Arguments to create a NutAndSeed.
     * @example
     * // Create one NutAndSeed
     * const NutAndSeed = await prisma.nutAndSeed.create({
     *   data: {
     *     // ... data to create a NutAndSeed
     *   }
     * })
     * 
     */
    create<T extends NutAndSeedCreateArgs>(args: SelectSubset<T, NutAndSeedCreateArgs<ExtArgs>>): Prisma__NutAndSeedClient<$Result.GetResult<Prisma.$NutAndSeedPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many NutAndSeeds.
     * @param {NutAndSeedCreateManyArgs} args - Arguments to create many NutAndSeeds.
     * @example
     * // Create many NutAndSeeds
     * const nutAndSeed = await prisma.nutAndSeed.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends NutAndSeedCreateManyArgs>(args?: SelectSubset<T, NutAndSeedCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a NutAndSeed.
     * @param {NutAndSeedDeleteArgs} args - Arguments to delete one NutAndSeed.
     * @example
     * // Delete one NutAndSeed
     * const NutAndSeed = await prisma.nutAndSeed.delete({
     *   where: {
     *     // ... filter to delete one NutAndSeed
     *   }
     * })
     * 
     */
    delete<T extends NutAndSeedDeleteArgs>(args: SelectSubset<T, NutAndSeedDeleteArgs<ExtArgs>>): Prisma__NutAndSeedClient<$Result.GetResult<Prisma.$NutAndSeedPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one NutAndSeed.
     * @param {NutAndSeedUpdateArgs} args - Arguments to update one NutAndSeed.
     * @example
     * // Update one NutAndSeed
     * const nutAndSeed = await prisma.nutAndSeed.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends NutAndSeedUpdateArgs>(args: SelectSubset<T, NutAndSeedUpdateArgs<ExtArgs>>): Prisma__NutAndSeedClient<$Result.GetResult<Prisma.$NutAndSeedPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more NutAndSeeds.
     * @param {NutAndSeedDeleteManyArgs} args - Arguments to filter NutAndSeeds to delete.
     * @example
     * // Delete a few NutAndSeeds
     * const { count } = await prisma.nutAndSeed.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends NutAndSeedDeleteManyArgs>(args?: SelectSubset<T, NutAndSeedDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more NutAndSeeds.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NutAndSeedUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many NutAndSeeds
     * const nutAndSeed = await prisma.nutAndSeed.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends NutAndSeedUpdateManyArgs>(args: SelectSubset<T, NutAndSeedUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one NutAndSeed.
     * @param {NutAndSeedUpsertArgs} args - Arguments to update or create a NutAndSeed.
     * @example
     * // Update or create a NutAndSeed
     * const nutAndSeed = await prisma.nutAndSeed.upsert({
     *   create: {
     *     // ... data to create a NutAndSeed
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the NutAndSeed we want to update
     *   }
     * })
     */
    upsert<T extends NutAndSeedUpsertArgs>(args: SelectSubset<T, NutAndSeedUpsertArgs<ExtArgs>>): Prisma__NutAndSeedClient<$Result.GetResult<Prisma.$NutAndSeedPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of NutAndSeeds.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NutAndSeedCountArgs} args - Arguments to filter NutAndSeeds to count.
     * @example
     * // Count the number of NutAndSeeds
     * const count = await prisma.nutAndSeed.count({
     *   where: {
     *     // ... the filter for the NutAndSeeds we want to count
     *   }
     * })
    **/
    count<T extends NutAndSeedCountArgs>(
      args?: Subset<T, NutAndSeedCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], NutAndSeedCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a NutAndSeed.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NutAndSeedAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends NutAndSeedAggregateArgs>(args: Subset<T, NutAndSeedAggregateArgs>): Prisma.PrismaPromise<GetNutAndSeedAggregateType<T>>

    /**
     * Group by NutAndSeed.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NutAndSeedGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends NutAndSeedGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: NutAndSeedGroupByArgs['orderBy'] }
        : { orderBy?: NutAndSeedGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, NutAndSeedGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetNutAndSeedGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the NutAndSeed model
   */
  readonly fields: NutAndSeedFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for NutAndSeed.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__NutAndSeedClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the NutAndSeed model
   */
  interface NutAndSeedFieldRefs {
    readonly id: FieldRef<"NutAndSeed", 'Int'>
    readonly name: FieldRef<"NutAndSeed", 'String'>
    readonly description: FieldRef<"NutAndSeed", 'String'>
    readonly isNut: FieldRef<"NutAndSeed", 'Boolean'>
    readonly isSeed: FieldRef<"NutAndSeed", 'Boolean'>
    readonly createdAt: FieldRef<"NutAndSeed", 'DateTime'>
    readonly updatedAt: FieldRef<"NutAndSeed", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * NutAndSeed findUnique
   */
  export type NutAndSeedFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NutAndSeed
     */
    select?: NutAndSeedSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NutAndSeed
     */
    omit?: NutAndSeedOmit<ExtArgs> | null
    /**
     * Filter, which NutAndSeed to fetch.
     */
    where: NutAndSeedWhereUniqueInput
  }

  /**
   * NutAndSeed findUniqueOrThrow
   */
  export type NutAndSeedFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NutAndSeed
     */
    select?: NutAndSeedSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NutAndSeed
     */
    omit?: NutAndSeedOmit<ExtArgs> | null
    /**
     * Filter, which NutAndSeed to fetch.
     */
    where: NutAndSeedWhereUniqueInput
  }

  /**
   * NutAndSeed findFirst
   */
  export type NutAndSeedFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NutAndSeed
     */
    select?: NutAndSeedSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NutAndSeed
     */
    omit?: NutAndSeedOmit<ExtArgs> | null
    /**
     * Filter, which NutAndSeed to fetch.
     */
    where?: NutAndSeedWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of NutAndSeeds to fetch.
     */
    orderBy?: NutAndSeedOrderByWithRelationInput | NutAndSeedOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for NutAndSeeds.
     */
    cursor?: NutAndSeedWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` NutAndSeeds from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` NutAndSeeds.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of NutAndSeeds.
     */
    distinct?: NutAndSeedScalarFieldEnum | NutAndSeedScalarFieldEnum[]
  }

  /**
   * NutAndSeed findFirstOrThrow
   */
  export type NutAndSeedFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NutAndSeed
     */
    select?: NutAndSeedSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NutAndSeed
     */
    omit?: NutAndSeedOmit<ExtArgs> | null
    /**
     * Filter, which NutAndSeed to fetch.
     */
    where?: NutAndSeedWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of NutAndSeeds to fetch.
     */
    orderBy?: NutAndSeedOrderByWithRelationInput | NutAndSeedOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for NutAndSeeds.
     */
    cursor?: NutAndSeedWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` NutAndSeeds from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` NutAndSeeds.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of NutAndSeeds.
     */
    distinct?: NutAndSeedScalarFieldEnum | NutAndSeedScalarFieldEnum[]
  }

  /**
   * NutAndSeed findMany
   */
  export type NutAndSeedFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NutAndSeed
     */
    select?: NutAndSeedSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NutAndSeed
     */
    omit?: NutAndSeedOmit<ExtArgs> | null
    /**
     * Filter, which NutAndSeeds to fetch.
     */
    where?: NutAndSeedWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of NutAndSeeds to fetch.
     */
    orderBy?: NutAndSeedOrderByWithRelationInput | NutAndSeedOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing NutAndSeeds.
     */
    cursor?: NutAndSeedWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` NutAndSeeds from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` NutAndSeeds.
     */
    skip?: number
    distinct?: NutAndSeedScalarFieldEnum | NutAndSeedScalarFieldEnum[]
  }

  /**
   * NutAndSeed create
   */
  export type NutAndSeedCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NutAndSeed
     */
    select?: NutAndSeedSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NutAndSeed
     */
    omit?: NutAndSeedOmit<ExtArgs> | null
    /**
     * The data needed to create a NutAndSeed.
     */
    data: XOR<NutAndSeedCreateInput, NutAndSeedUncheckedCreateInput>
  }

  /**
   * NutAndSeed createMany
   */
  export type NutAndSeedCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many NutAndSeeds.
     */
    data: NutAndSeedCreateManyInput | NutAndSeedCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * NutAndSeed update
   */
  export type NutAndSeedUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NutAndSeed
     */
    select?: NutAndSeedSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NutAndSeed
     */
    omit?: NutAndSeedOmit<ExtArgs> | null
    /**
     * The data needed to update a NutAndSeed.
     */
    data: XOR<NutAndSeedUpdateInput, NutAndSeedUncheckedUpdateInput>
    /**
     * Choose, which NutAndSeed to update.
     */
    where: NutAndSeedWhereUniqueInput
  }

  /**
   * NutAndSeed updateMany
   */
  export type NutAndSeedUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update NutAndSeeds.
     */
    data: XOR<NutAndSeedUpdateManyMutationInput, NutAndSeedUncheckedUpdateManyInput>
    /**
     * Filter which NutAndSeeds to update
     */
    where?: NutAndSeedWhereInput
    /**
     * Limit how many NutAndSeeds to update.
     */
    limit?: number
  }

  /**
   * NutAndSeed upsert
   */
  export type NutAndSeedUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NutAndSeed
     */
    select?: NutAndSeedSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NutAndSeed
     */
    omit?: NutAndSeedOmit<ExtArgs> | null
    /**
     * The filter to search for the NutAndSeed to update in case it exists.
     */
    where: NutAndSeedWhereUniqueInput
    /**
     * In case the NutAndSeed found by the `where` argument doesn't exist, create a new NutAndSeed with this data.
     */
    create: XOR<NutAndSeedCreateInput, NutAndSeedUncheckedCreateInput>
    /**
     * In case the NutAndSeed was found with the provided `where` argument, update it with this data.
     */
    update: XOR<NutAndSeedUpdateInput, NutAndSeedUncheckedUpdateInput>
  }

  /**
   * NutAndSeed delete
   */
  export type NutAndSeedDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NutAndSeed
     */
    select?: NutAndSeedSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NutAndSeed
     */
    omit?: NutAndSeedOmit<ExtArgs> | null
    /**
     * Filter which NutAndSeed to delete.
     */
    where: NutAndSeedWhereUniqueInput
  }

  /**
   * NutAndSeed deleteMany
   */
  export type NutAndSeedDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which NutAndSeeds to delete
     */
    where?: NutAndSeedWhereInput
    /**
     * Limit how many NutAndSeeds to delete.
     */
    limit?: number
  }

  /**
   * NutAndSeed without action
   */
  export type NutAndSeedDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NutAndSeed
     */
    select?: NutAndSeedSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NutAndSeed
     */
    omit?: NutAndSeedOmit<ExtArgs> | null
  }


  /**
   * Model Dairy
   */

  export type AggregateDairy = {
    _count: DairyCountAggregateOutputType | null
    _avg: DairyAvgAggregateOutputType | null
    _sum: DairySumAggregateOutputType | null
    _min: DairyMinAggregateOutputType | null
    _max: DairyMaxAggregateOutputType | null
  }

  export type DairyAvgAggregateOutputType = {
    id: number | null
  }

  export type DairySumAggregateOutputType = {
    id: number | null
  }

  export type DairyMinAggregateOutputType = {
    id: number | null
    name: string | null
    description: string | null
    category: string | null
    isVegan: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type DairyMaxAggregateOutputType = {
    id: number | null
    name: string | null
    description: string | null
    category: string | null
    isVegan: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type DairyCountAggregateOutputType = {
    id: number
    name: number
    description: number
    category: number
    isVegan: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type DairyAvgAggregateInputType = {
    id?: true
  }

  export type DairySumAggregateInputType = {
    id?: true
  }

  export type DairyMinAggregateInputType = {
    id?: true
    name?: true
    description?: true
    category?: true
    isVegan?: true
    createdAt?: true
    updatedAt?: true
  }

  export type DairyMaxAggregateInputType = {
    id?: true
    name?: true
    description?: true
    category?: true
    isVegan?: true
    createdAt?: true
    updatedAt?: true
  }

  export type DairyCountAggregateInputType = {
    id?: true
    name?: true
    description?: true
    category?: true
    isVegan?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type DairyAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Dairy to aggregate.
     */
    where?: DairyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Dairies to fetch.
     */
    orderBy?: DairyOrderByWithRelationInput | DairyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: DairyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Dairies from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Dairies.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Dairies
    **/
    _count?: true | DairyCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: DairyAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: DairySumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: DairyMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: DairyMaxAggregateInputType
  }

  export type GetDairyAggregateType<T extends DairyAggregateArgs> = {
        [P in keyof T & keyof AggregateDairy]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateDairy[P]>
      : GetScalarType<T[P], AggregateDairy[P]>
  }




  export type DairyGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DairyWhereInput
    orderBy?: DairyOrderByWithAggregationInput | DairyOrderByWithAggregationInput[]
    by: DairyScalarFieldEnum[] | DairyScalarFieldEnum
    having?: DairyScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: DairyCountAggregateInputType | true
    _avg?: DairyAvgAggregateInputType
    _sum?: DairySumAggregateInputType
    _min?: DairyMinAggregateInputType
    _max?: DairyMaxAggregateInputType
  }

  export type DairyGroupByOutputType = {
    id: number
    name: string
    description: string | null
    category: string | null
    isVegan: boolean
    createdAt: Date
    updatedAt: Date
    _count: DairyCountAggregateOutputType | null
    _avg: DairyAvgAggregateOutputType | null
    _sum: DairySumAggregateOutputType | null
    _min: DairyMinAggregateOutputType | null
    _max: DairyMaxAggregateOutputType | null
  }

  type GetDairyGroupByPayload<T extends DairyGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<DairyGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof DairyGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], DairyGroupByOutputType[P]>
            : GetScalarType<T[P], DairyGroupByOutputType[P]>
        }
      >
    >


  export type DairySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    category?: boolean
    isVegan?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["dairy"]>



  export type DairySelectScalar = {
    id?: boolean
    name?: boolean
    description?: boolean
    category?: boolean
    isVegan?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type DairyOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "description" | "category" | "isVegan" | "createdAt" | "updatedAt", ExtArgs["result"]["dairy"]>

  export type $DairyPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Dairy"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      description: string | null
      category: string | null
      isVegan: boolean
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["dairy"]>
    composites: {}
  }

  type DairyGetPayload<S extends boolean | null | undefined | DairyDefaultArgs> = $Result.GetResult<Prisma.$DairyPayload, S>

  type DairyCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<DairyFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: DairyCountAggregateInputType | true
    }

  export interface DairyDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Dairy'], meta: { name: 'Dairy' } }
    /**
     * Find zero or one Dairy that matches the filter.
     * @param {DairyFindUniqueArgs} args - Arguments to find a Dairy
     * @example
     * // Get one Dairy
     * const dairy = await prisma.dairy.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends DairyFindUniqueArgs>(args: SelectSubset<T, DairyFindUniqueArgs<ExtArgs>>): Prisma__DairyClient<$Result.GetResult<Prisma.$DairyPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Dairy that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {DairyFindUniqueOrThrowArgs} args - Arguments to find a Dairy
     * @example
     * // Get one Dairy
     * const dairy = await prisma.dairy.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends DairyFindUniqueOrThrowArgs>(args: SelectSubset<T, DairyFindUniqueOrThrowArgs<ExtArgs>>): Prisma__DairyClient<$Result.GetResult<Prisma.$DairyPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Dairy that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DairyFindFirstArgs} args - Arguments to find a Dairy
     * @example
     * // Get one Dairy
     * const dairy = await prisma.dairy.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends DairyFindFirstArgs>(args?: SelectSubset<T, DairyFindFirstArgs<ExtArgs>>): Prisma__DairyClient<$Result.GetResult<Prisma.$DairyPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Dairy that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DairyFindFirstOrThrowArgs} args - Arguments to find a Dairy
     * @example
     * // Get one Dairy
     * const dairy = await prisma.dairy.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends DairyFindFirstOrThrowArgs>(args?: SelectSubset<T, DairyFindFirstOrThrowArgs<ExtArgs>>): Prisma__DairyClient<$Result.GetResult<Prisma.$DairyPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Dairies that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DairyFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Dairies
     * const dairies = await prisma.dairy.findMany()
     * 
     * // Get first 10 Dairies
     * const dairies = await prisma.dairy.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const dairyWithIdOnly = await prisma.dairy.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends DairyFindManyArgs>(args?: SelectSubset<T, DairyFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DairyPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Dairy.
     * @param {DairyCreateArgs} args - Arguments to create a Dairy.
     * @example
     * // Create one Dairy
     * const Dairy = await prisma.dairy.create({
     *   data: {
     *     // ... data to create a Dairy
     *   }
     * })
     * 
     */
    create<T extends DairyCreateArgs>(args: SelectSubset<T, DairyCreateArgs<ExtArgs>>): Prisma__DairyClient<$Result.GetResult<Prisma.$DairyPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Dairies.
     * @param {DairyCreateManyArgs} args - Arguments to create many Dairies.
     * @example
     * // Create many Dairies
     * const dairy = await prisma.dairy.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends DairyCreateManyArgs>(args?: SelectSubset<T, DairyCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Dairy.
     * @param {DairyDeleteArgs} args - Arguments to delete one Dairy.
     * @example
     * // Delete one Dairy
     * const Dairy = await prisma.dairy.delete({
     *   where: {
     *     // ... filter to delete one Dairy
     *   }
     * })
     * 
     */
    delete<T extends DairyDeleteArgs>(args: SelectSubset<T, DairyDeleteArgs<ExtArgs>>): Prisma__DairyClient<$Result.GetResult<Prisma.$DairyPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Dairy.
     * @param {DairyUpdateArgs} args - Arguments to update one Dairy.
     * @example
     * // Update one Dairy
     * const dairy = await prisma.dairy.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends DairyUpdateArgs>(args: SelectSubset<T, DairyUpdateArgs<ExtArgs>>): Prisma__DairyClient<$Result.GetResult<Prisma.$DairyPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Dairies.
     * @param {DairyDeleteManyArgs} args - Arguments to filter Dairies to delete.
     * @example
     * // Delete a few Dairies
     * const { count } = await prisma.dairy.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends DairyDeleteManyArgs>(args?: SelectSubset<T, DairyDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Dairies.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DairyUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Dairies
     * const dairy = await prisma.dairy.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends DairyUpdateManyArgs>(args: SelectSubset<T, DairyUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Dairy.
     * @param {DairyUpsertArgs} args - Arguments to update or create a Dairy.
     * @example
     * // Update or create a Dairy
     * const dairy = await prisma.dairy.upsert({
     *   create: {
     *     // ... data to create a Dairy
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Dairy we want to update
     *   }
     * })
     */
    upsert<T extends DairyUpsertArgs>(args: SelectSubset<T, DairyUpsertArgs<ExtArgs>>): Prisma__DairyClient<$Result.GetResult<Prisma.$DairyPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Dairies.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DairyCountArgs} args - Arguments to filter Dairies to count.
     * @example
     * // Count the number of Dairies
     * const count = await prisma.dairy.count({
     *   where: {
     *     // ... the filter for the Dairies we want to count
     *   }
     * })
    **/
    count<T extends DairyCountArgs>(
      args?: Subset<T, DairyCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], DairyCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Dairy.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DairyAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends DairyAggregateArgs>(args: Subset<T, DairyAggregateArgs>): Prisma.PrismaPromise<GetDairyAggregateType<T>>

    /**
     * Group by Dairy.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DairyGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends DairyGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: DairyGroupByArgs['orderBy'] }
        : { orderBy?: DairyGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, DairyGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDairyGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Dairy model
   */
  readonly fields: DairyFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Dairy.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__DairyClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Dairy model
   */
  interface DairyFieldRefs {
    readonly id: FieldRef<"Dairy", 'Int'>
    readonly name: FieldRef<"Dairy", 'String'>
    readonly description: FieldRef<"Dairy", 'String'>
    readonly category: FieldRef<"Dairy", 'String'>
    readonly isVegan: FieldRef<"Dairy", 'Boolean'>
    readonly createdAt: FieldRef<"Dairy", 'DateTime'>
    readonly updatedAt: FieldRef<"Dairy", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Dairy findUnique
   */
  export type DairyFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Dairy
     */
    select?: DairySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Dairy
     */
    omit?: DairyOmit<ExtArgs> | null
    /**
     * Filter, which Dairy to fetch.
     */
    where: DairyWhereUniqueInput
  }

  /**
   * Dairy findUniqueOrThrow
   */
  export type DairyFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Dairy
     */
    select?: DairySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Dairy
     */
    omit?: DairyOmit<ExtArgs> | null
    /**
     * Filter, which Dairy to fetch.
     */
    where: DairyWhereUniqueInput
  }

  /**
   * Dairy findFirst
   */
  export type DairyFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Dairy
     */
    select?: DairySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Dairy
     */
    omit?: DairyOmit<ExtArgs> | null
    /**
     * Filter, which Dairy to fetch.
     */
    where?: DairyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Dairies to fetch.
     */
    orderBy?: DairyOrderByWithRelationInput | DairyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Dairies.
     */
    cursor?: DairyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Dairies from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Dairies.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Dairies.
     */
    distinct?: DairyScalarFieldEnum | DairyScalarFieldEnum[]
  }

  /**
   * Dairy findFirstOrThrow
   */
  export type DairyFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Dairy
     */
    select?: DairySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Dairy
     */
    omit?: DairyOmit<ExtArgs> | null
    /**
     * Filter, which Dairy to fetch.
     */
    where?: DairyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Dairies to fetch.
     */
    orderBy?: DairyOrderByWithRelationInput | DairyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Dairies.
     */
    cursor?: DairyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Dairies from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Dairies.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Dairies.
     */
    distinct?: DairyScalarFieldEnum | DairyScalarFieldEnum[]
  }

  /**
   * Dairy findMany
   */
  export type DairyFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Dairy
     */
    select?: DairySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Dairy
     */
    omit?: DairyOmit<ExtArgs> | null
    /**
     * Filter, which Dairies to fetch.
     */
    where?: DairyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Dairies to fetch.
     */
    orderBy?: DairyOrderByWithRelationInput | DairyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Dairies.
     */
    cursor?: DairyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Dairies from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Dairies.
     */
    skip?: number
    distinct?: DairyScalarFieldEnum | DairyScalarFieldEnum[]
  }

  /**
   * Dairy create
   */
  export type DairyCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Dairy
     */
    select?: DairySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Dairy
     */
    omit?: DairyOmit<ExtArgs> | null
    /**
     * The data needed to create a Dairy.
     */
    data: XOR<DairyCreateInput, DairyUncheckedCreateInput>
  }

  /**
   * Dairy createMany
   */
  export type DairyCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Dairies.
     */
    data: DairyCreateManyInput | DairyCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Dairy update
   */
  export type DairyUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Dairy
     */
    select?: DairySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Dairy
     */
    omit?: DairyOmit<ExtArgs> | null
    /**
     * The data needed to update a Dairy.
     */
    data: XOR<DairyUpdateInput, DairyUncheckedUpdateInput>
    /**
     * Choose, which Dairy to update.
     */
    where: DairyWhereUniqueInput
  }

  /**
   * Dairy updateMany
   */
  export type DairyUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Dairies.
     */
    data: XOR<DairyUpdateManyMutationInput, DairyUncheckedUpdateManyInput>
    /**
     * Filter which Dairies to update
     */
    where?: DairyWhereInput
    /**
     * Limit how many Dairies to update.
     */
    limit?: number
  }

  /**
   * Dairy upsert
   */
  export type DairyUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Dairy
     */
    select?: DairySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Dairy
     */
    omit?: DairyOmit<ExtArgs> | null
    /**
     * The filter to search for the Dairy to update in case it exists.
     */
    where: DairyWhereUniqueInput
    /**
     * In case the Dairy found by the `where` argument doesn't exist, create a new Dairy with this data.
     */
    create: XOR<DairyCreateInput, DairyUncheckedCreateInput>
    /**
     * In case the Dairy was found with the provided `where` argument, update it with this data.
     */
    update: XOR<DairyUpdateInput, DairyUncheckedUpdateInput>
  }

  /**
   * Dairy delete
   */
  export type DairyDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Dairy
     */
    select?: DairySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Dairy
     */
    omit?: DairyOmit<ExtArgs> | null
    /**
     * Filter which Dairy to delete.
     */
    where: DairyWhereUniqueInput
  }

  /**
   * Dairy deleteMany
   */
  export type DairyDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Dairies to delete
     */
    where?: DairyWhereInput
    /**
     * Limit how many Dairies to delete.
     */
    limit?: number
  }

  /**
   * Dairy without action
   */
  export type DairyDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Dairy
     */
    select?: DairySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Dairy
     */
    omit?: DairyOmit<ExtArgs> | null
  }


  /**
   * Model Meat
   */

  export type AggregateMeat = {
    _count: MeatCountAggregateOutputType | null
    _avg: MeatAvgAggregateOutputType | null
    _sum: MeatSumAggregateOutputType | null
    _min: MeatMinAggregateOutputType | null
    _max: MeatMaxAggregateOutputType | null
  }

  export type MeatAvgAggregateOutputType = {
    id: number | null
  }

  export type MeatSumAggregateOutputType = {
    id: number | null
  }

  export type MeatMinAggregateOutputType = {
    id: number | null
    name: string | null
    description: string | null
    category: string | null
    cutType: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type MeatMaxAggregateOutputType = {
    id: number | null
    name: string | null
    description: string | null
    category: string | null
    cutType: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type MeatCountAggregateOutputType = {
    id: number
    name: number
    description: number
    category: number
    cutType: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type MeatAvgAggregateInputType = {
    id?: true
  }

  export type MeatSumAggregateInputType = {
    id?: true
  }

  export type MeatMinAggregateInputType = {
    id?: true
    name?: true
    description?: true
    category?: true
    cutType?: true
    createdAt?: true
    updatedAt?: true
  }

  export type MeatMaxAggregateInputType = {
    id?: true
    name?: true
    description?: true
    category?: true
    cutType?: true
    createdAt?: true
    updatedAt?: true
  }

  export type MeatCountAggregateInputType = {
    id?: true
    name?: true
    description?: true
    category?: true
    cutType?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type MeatAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Meat to aggregate.
     */
    where?: MeatWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Meats to fetch.
     */
    orderBy?: MeatOrderByWithRelationInput | MeatOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: MeatWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Meats from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Meats.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Meats
    **/
    _count?: true | MeatCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: MeatAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: MeatSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MeatMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MeatMaxAggregateInputType
  }

  export type GetMeatAggregateType<T extends MeatAggregateArgs> = {
        [P in keyof T & keyof AggregateMeat]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMeat[P]>
      : GetScalarType<T[P], AggregateMeat[P]>
  }




  export type MeatGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MeatWhereInput
    orderBy?: MeatOrderByWithAggregationInput | MeatOrderByWithAggregationInput[]
    by: MeatScalarFieldEnum[] | MeatScalarFieldEnum
    having?: MeatScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MeatCountAggregateInputType | true
    _avg?: MeatAvgAggregateInputType
    _sum?: MeatSumAggregateInputType
    _min?: MeatMinAggregateInputType
    _max?: MeatMaxAggregateInputType
  }

  export type MeatGroupByOutputType = {
    id: number
    name: string
    description: string | null
    category: string
    cutType: string | null
    createdAt: Date
    updatedAt: Date
    _count: MeatCountAggregateOutputType | null
    _avg: MeatAvgAggregateOutputType | null
    _sum: MeatSumAggregateOutputType | null
    _min: MeatMinAggregateOutputType | null
    _max: MeatMaxAggregateOutputType | null
  }

  type GetMeatGroupByPayload<T extends MeatGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<MeatGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MeatGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MeatGroupByOutputType[P]>
            : GetScalarType<T[P], MeatGroupByOutputType[P]>
        }
      >
    >


  export type MeatSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    category?: boolean
    cutType?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["meat"]>



  export type MeatSelectScalar = {
    id?: boolean
    name?: boolean
    description?: boolean
    category?: boolean
    cutType?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type MeatOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "description" | "category" | "cutType" | "createdAt" | "updatedAt", ExtArgs["result"]["meat"]>

  export type $MeatPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Meat"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      description: string | null
      category: string
      cutType: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["meat"]>
    composites: {}
  }

  type MeatGetPayload<S extends boolean | null | undefined | MeatDefaultArgs> = $Result.GetResult<Prisma.$MeatPayload, S>

  type MeatCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<MeatFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: MeatCountAggregateInputType | true
    }

  export interface MeatDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Meat'], meta: { name: 'Meat' } }
    /**
     * Find zero or one Meat that matches the filter.
     * @param {MeatFindUniqueArgs} args - Arguments to find a Meat
     * @example
     * // Get one Meat
     * const meat = await prisma.meat.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends MeatFindUniqueArgs>(args: SelectSubset<T, MeatFindUniqueArgs<ExtArgs>>): Prisma__MeatClient<$Result.GetResult<Prisma.$MeatPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Meat that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {MeatFindUniqueOrThrowArgs} args - Arguments to find a Meat
     * @example
     * // Get one Meat
     * const meat = await prisma.meat.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends MeatFindUniqueOrThrowArgs>(args: SelectSubset<T, MeatFindUniqueOrThrowArgs<ExtArgs>>): Prisma__MeatClient<$Result.GetResult<Prisma.$MeatPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Meat that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MeatFindFirstArgs} args - Arguments to find a Meat
     * @example
     * // Get one Meat
     * const meat = await prisma.meat.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends MeatFindFirstArgs>(args?: SelectSubset<T, MeatFindFirstArgs<ExtArgs>>): Prisma__MeatClient<$Result.GetResult<Prisma.$MeatPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Meat that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MeatFindFirstOrThrowArgs} args - Arguments to find a Meat
     * @example
     * // Get one Meat
     * const meat = await prisma.meat.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends MeatFindFirstOrThrowArgs>(args?: SelectSubset<T, MeatFindFirstOrThrowArgs<ExtArgs>>): Prisma__MeatClient<$Result.GetResult<Prisma.$MeatPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Meats that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MeatFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Meats
     * const meats = await prisma.meat.findMany()
     * 
     * // Get first 10 Meats
     * const meats = await prisma.meat.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const meatWithIdOnly = await prisma.meat.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends MeatFindManyArgs>(args?: SelectSubset<T, MeatFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MeatPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Meat.
     * @param {MeatCreateArgs} args - Arguments to create a Meat.
     * @example
     * // Create one Meat
     * const Meat = await prisma.meat.create({
     *   data: {
     *     // ... data to create a Meat
     *   }
     * })
     * 
     */
    create<T extends MeatCreateArgs>(args: SelectSubset<T, MeatCreateArgs<ExtArgs>>): Prisma__MeatClient<$Result.GetResult<Prisma.$MeatPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Meats.
     * @param {MeatCreateManyArgs} args - Arguments to create many Meats.
     * @example
     * // Create many Meats
     * const meat = await prisma.meat.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends MeatCreateManyArgs>(args?: SelectSubset<T, MeatCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Meat.
     * @param {MeatDeleteArgs} args - Arguments to delete one Meat.
     * @example
     * // Delete one Meat
     * const Meat = await prisma.meat.delete({
     *   where: {
     *     // ... filter to delete one Meat
     *   }
     * })
     * 
     */
    delete<T extends MeatDeleteArgs>(args: SelectSubset<T, MeatDeleteArgs<ExtArgs>>): Prisma__MeatClient<$Result.GetResult<Prisma.$MeatPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Meat.
     * @param {MeatUpdateArgs} args - Arguments to update one Meat.
     * @example
     * // Update one Meat
     * const meat = await prisma.meat.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends MeatUpdateArgs>(args: SelectSubset<T, MeatUpdateArgs<ExtArgs>>): Prisma__MeatClient<$Result.GetResult<Prisma.$MeatPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Meats.
     * @param {MeatDeleteManyArgs} args - Arguments to filter Meats to delete.
     * @example
     * // Delete a few Meats
     * const { count } = await prisma.meat.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends MeatDeleteManyArgs>(args?: SelectSubset<T, MeatDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Meats.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MeatUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Meats
     * const meat = await prisma.meat.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends MeatUpdateManyArgs>(args: SelectSubset<T, MeatUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Meat.
     * @param {MeatUpsertArgs} args - Arguments to update or create a Meat.
     * @example
     * // Update or create a Meat
     * const meat = await prisma.meat.upsert({
     *   create: {
     *     // ... data to create a Meat
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Meat we want to update
     *   }
     * })
     */
    upsert<T extends MeatUpsertArgs>(args: SelectSubset<T, MeatUpsertArgs<ExtArgs>>): Prisma__MeatClient<$Result.GetResult<Prisma.$MeatPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Meats.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MeatCountArgs} args - Arguments to filter Meats to count.
     * @example
     * // Count the number of Meats
     * const count = await prisma.meat.count({
     *   where: {
     *     // ... the filter for the Meats we want to count
     *   }
     * })
    **/
    count<T extends MeatCountArgs>(
      args?: Subset<T, MeatCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MeatCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Meat.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MeatAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends MeatAggregateArgs>(args: Subset<T, MeatAggregateArgs>): Prisma.PrismaPromise<GetMeatAggregateType<T>>

    /**
     * Group by Meat.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MeatGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends MeatGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: MeatGroupByArgs['orderBy'] }
        : { orderBy?: MeatGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, MeatGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMeatGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Meat model
   */
  readonly fields: MeatFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Meat.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__MeatClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Meat model
   */
  interface MeatFieldRefs {
    readonly id: FieldRef<"Meat", 'Int'>
    readonly name: FieldRef<"Meat", 'String'>
    readonly description: FieldRef<"Meat", 'String'>
    readonly category: FieldRef<"Meat", 'String'>
    readonly cutType: FieldRef<"Meat", 'String'>
    readonly createdAt: FieldRef<"Meat", 'DateTime'>
    readonly updatedAt: FieldRef<"Meat", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Meat findUnique
   */
  export type MeatFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Meat
     */
    select?: MeatSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Meat
     */
    omit?: MeatOmit<ExtArgs> | null
    /**
     * Filter, which Meat to fetch.
     */
    where: MeatWhereUniqueInput
  }

  /**
   * Meat findUniqueOrThrow
   */
  export type MeatFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Meat
     */
    select?: MeatSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Meat
     */
    omit?: MeatOmit<ExtArgs> | null
    /**
     * Filter, which Meat to fetch.
     */
    where: MeatWhereUniqueInput
  }

  /**
   * Meat findFirst
   */
  export type MeatFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Meat
     */
    select?: MeatSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Meat
     */
    omit?: MeatOmit<ExtArgs> | null
    /**
     * Filter, which Meat to fetch.
     */
    where?: MeatWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Meats to fetch.
     */
    orderBy?: MeatOrderByWithRelationInput | MeatOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Meats.
     */
    cursor?: MeatWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Meats from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Meats.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Meats.
     */
    distinct?: MeatScalarFieldEnum | MeatScalarFieldEnum[]
  }

  /**
   * Meat findFirstOrThrow
   */
  export type MeatFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Meat
     */
    select?: MeatSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Meat
     */
    omit?: MeatOmit<ExtArgs> | null
    /**
     * Filter, which Meat to fetch.
     */
    where?: MeatWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Meats to fetch.
     */
    orderBy?: MeatOrderByWithRelationInput | MeatOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Meats.
     */
    cursor?: MeatWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Meats from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Meats.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Meats.
     */
    distinct?: MeatScalarFieldEnum | MeatScalarFieldEnum[]
  }

  /**
   * Meat findMany
   */
  export type MeatFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Meat
     */
    select?: MeatSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Meat
     */
    omit?: MeatOmit<ExtArgs> | null
    /**
     * Filter, which Meats to fetch.
     */
    where?: MeatWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Meats to fetch.
     */
    orderBy?: MeatOrderByWithRelationInput | MeatOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Meats.
     */
    cursor?: MeatWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Meats from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Meats.
     */
    skip?: number
    distinct?: MeatScalarFieldEnum | MeatScalarFieldEnum[]
  }

  /**
   * Meat create
   */
  export type MeatCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Meat
     */
    select?: MeatSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Meat
     */
    omit?: MeatOmit<ExtArgs> | null
    /**
     * The data needed to create a Meat.
     */
    data: XOR<MeatCreateInput, MeatUncheckedCreateInput>
  }

  /**
   * Meat createMany
   */
  export type MeatCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Meats.
     */
    data: MeatCreateManyInput | MeatCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Meat update
   */
  export type MeatUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Meat
     */
    select?: MeatSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Meat
     */
    omit?: MeatOmit<ExtArgs> | null
    /**
     * The data needed to update a Meat.
     */
    data: XOR<MeatUpdateInput, MeatUncheckedUpdateInput>
    /**
     * Choose, which Meat to update.
     */
    where: MeatWhereUniqueInput
  }

  /**
   * Meat updateMany
   */
  export type MeatUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Meats.
     */
    data: XOR<MeatUpdateManyMutationInput, MeatUncheckedUpdateManyInput>
    /**
     * Filter which Meats to update
     */
    where?: MeatWhereInput
    /**
     * Limit how many Meats to update.
     */
    limit?: number
  }

  /**
   * Meat upsert
   */
  export type MeatUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Meat
     */
    select?: MeatSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Meat
     */
    omit?: MeatOmit<ExtArgs> | null
    /**
     * The filter to search for the Meat to update in case it exists.
     */
    where: MeatWhereUniqueInput
    /**
     * In case the Meat found by the `where` argument doesn't exist, create a new Meat with this data.
     */
    create: XOR<MeatCreateInput, MeatUncheckedCreateInput>
    /**
     * In case the Meat was found with the provided `where` argument, update it with this data.
     */
    update: XOR<MeatUpdateInput, MeatUncheckedUpdateInput>
  }

  /**
   * Meat delete
   */
  export type MeatDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Meat
     */
    select?: MeatSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Meat
     */
    omit?: MeatOmit<ExtArgs> | null
    /**
     * Filter which Meat to delete.
     */
    where: MeatWhereUniqueInput
  }

  /**
   * Meat deleteMany
   */
  export type MeatDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Meats to delete
     */
    where?: MeatWhereInput
    /**
     * Limit how many Meats to delete.
     */
    limit?: number
  }

  /**
   * Meat without action
   */
  export type MeatDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Meat
     */
    select?: MeatSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Meat
     */
    omit?: MeatOmit<ExtArgs> | null
  }


  /**
   * Model Seafood
   */

  export type AggregateSeafood = {
    _count: SeafoodCountAggregateOutputType | null
    _avg: SeafoodAvgAggregateOutputType | null
    _sum: SeafoodSumAggregateOutputType | null
    _min: SeafoodMinAggregateOutputType | null
    _max: SeafoodMaxAggregateOutputType | null
  }

  export type SeafoodAvgAggregateOutputType = {
    id: number | null
  }

  export type SeafoodSumAggregateOutputType = {
    id: number | null
  }

  export type SeafoodMinAggregateOutputType = {
    id: number | null
    name: string | null
    description: string | null
    category: string | null
    isFreshwater: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type SeafoodMaxAggregateOutputType = {
    id: number | null
    name: string | null
    description: string | null
    category: string | null
    isFreshwater: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type SeafoodCountAggregateOutputType = {
    id: number
    name: number
    description: number
    category: number
    isFreshwater: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type SeafoodAvgAggregateInputType = {
    id?: true
  }

  export type SeafoodSumAggregateInputType = {
    id?: true
  }

  export type SeafoodMinAggregateInputType = {
    id?: true
    name?: true
    description?: true
    category?: true
    isFreshwater?: true
    createdAt?: true
    updatedAt?: true
  }

  export type SeafoodMaxAggregateInputType = {
    id?: true
    name?: true
    description?: true
    category?: true
    isFreshwater?: true
    createdAt?: true
    updatedAt?: true
  }

  export type SeafoodCountAggregateInputType = {
    id?: true
    name?: true
    description?: true
    category?: true
    isFreshwater?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type SeafoodAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Seafood to aggregate.
     */
    where?: SeafoodWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Seafoods to fetch.
     */
    orderBy?: SeafoodOrderByWithRelationInput | SeafoodOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SeafoodWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Seafoods from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Seafoods.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Seafoods
    **/
    _count?: true | SeafoodCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: SeafoodAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: SeafoodSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SeafoodMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SeafoodMaxAggregateInputType
  }

  export type GetSeafoodAggregateType<T extends SeafoodAggregateArgs> = {
        [P in keyof T & keyof AggregateSeafood]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSeafood[P]>
      : GetScalarType<T[P], AggregateSeafood[P]>
  }




  export type SeafoodGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SeafoodWhereInput
    orderBy?: SeafoodOrderByWithAggregationInput | SeafoodOrderByWithAggregationInput[]
    by: SeafoodScalarFieldEnum[] | SeafoodScalarFieldEnum
    having?: SeafoodScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SeafoodCountAggregateInputType | true
    _avg?: SeafoodAvgAggregateInputType
    _sum?: SeafoodSumAggregateInputType
    _min?: SeafoodMinAggregateInputType
    _max?: SeafoodMaxAggregateInputType
  }

  export type SeafoodGroupByOutputType = {
    id: number
    name: string
    description: string | null
    category: string
    isFreshwater: boolean
    createdAt: Date
    updatedAt: Date
    _count: SeafoodCountAggregateOutputType | null
    _avg: SeafoodAvgAggregateOutputType | null
    _sum: SeafoodSumAggregateOutputType | null
    _min: SeafoodMinAggregateOutputType | null
    _max: SeafoodMaxAggregateOutputType | null
  }

  type GetSeafoodGroupByPayload<T extends SeafoodGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SeafoodGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SeafoodGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SeafoodGroupByOutputType[P]>
            : GetScalarType<T[P], SeafoodGroupByOutputType[P]>
        }
      >
    >


  export type SeafoodSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    category?: boolean
    isFreshwater?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["seafood"]>



  export type SeafoodSelectScalar = {
    id?: boolean
    name?: boolean
    description?: boolean
    category?: boolean
    isFreshwater?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type SeafoodOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "description" | "category" | "isFreshwater" | "createdAt" | "updatedAt", ExtArgs["result"]["seafood"]>

  export type $SeafoodPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Seafood"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      description: string | null
      category: string
      isFreshwater: boolean
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["seafood"]>
    composites: {}
  }

  type SeafoodGetPayload<S extends boolean | null | undefined | SeafoodDefaultArgs> = $Result.GetResult<Prisma.$SeafoodPayload, S>

  type SeafoodCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<SeafoodFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SeafoodCountAggregateInputType | true
    }

  export interface SeafoodDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Seafood'], meta: { name: 'Seafood' } }
    /**
     * Find zero or one Seafood that matches the filter.
     * @param {SeafoodFindUniqueArgs} args - Arguments to find a Seafood
     * @example
     * // Get one Seafood
     * const seafood = await prisma.seafood.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SeafoodFindUniqueArgs>(args: SelectSubset<T, SeafoodFindUniqueArgs<ExtArgs>>): Prisma__SeafoodClient<$Result.GetResult<Prisma.$SeafoodPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Seafood that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SeafoodFindUniqueOrThrowArgs} args - Arguments to find a Seafood
     * @example
     * // Get one Seafood
     * const seafood = await prisma.seafood.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SeafoodFindUniqueOrThrowArgs>(args: SelectSubset<T, SeafoodFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SeafoodClient<$Result.GetResult<Prisma.$SeafoodPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Seafood that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SeafoodFindFirstArgs} args - Arguments to find a Seafood
     * @example
     * // Get one Seafood
     * const seafood = await prisma.seafood.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SeafoodFindFirstArgs>(args?: SelectSubset<T, SeafoodFindFirstArgs<ExtArgs>>): Prisma__SeafoodClient<$Result.GetResult<Prisma.$SeafoodPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Seafood that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SeafoodFindFirstOrThrowArgs} args - Arguments to find a Seafood
     * @example
     * // Get one Seafood
     * const seafood = await prisma.seafood.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SeafoodFindFirstOrThrowArgs>(args?: SelectSubset<T, SeafoodFindFirstOrThrowArgs<ExtArgs>>): Prisma__SeafoodClient<$Result.GetResult<Prisma.$SeafoodPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Seafoods that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SeafoodFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Seafoods
     * const seafoods = await prisma.seafood.findMany()
     * 
     * // Get first 10 Seafoods
     * const seafoods = await prisma.seafood.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const seafoodWithIdOnly = await prisma.seafood.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SeafoodFindManyArgs>(args?: SelectSubset<T, SeafoodFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SeafoodPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Seafood.
     * @param {SeafoodCreateArgs} args - Arguments to create a Seafood.
     * @example
     * // Create one Seafood
     * const Seafood = await prisma.seafood.create({
     *   data: {
     *     // ... data to create a Seafood
     *   }
     * })
     * 
     */
    create<T extends SeafoodCreateArgs>(args: SelectSubset<T, SeafoodCreateArgs<ExtArgs>>): Prisma__SeafoodClient<$Result.GetResult<Prisma.$SeafoodPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Seafoods.
     * @param {SeafoodCreateManyArgs} args - Arguments to create many Seafoods.
     * @example
     * // Create many Seafoods
     * const seafood = await prisma.seafood.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SeafoodCreateManyArgs>(args?: SelectSubset<T, SeafoodCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Seafood.
     * @param {SeafoodDeleteArgs} args - Arguments to delete one Seafood.
     * @example
     * // Delete one Seafood
     * const Seafood = await prisma.seafood.delete({
     *   where: {
     *     // ... filter to delete one Seafood
     *   }
     * })
     * 
     */
    delete<T extends SeafoodDeleteArgs>(args: SelectSubset<T, SeafoodDeleteArgs<ExtArgs>>): Prisma__SeafoodClient<$Result.GetResult<Prisma.$SeafoodPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Seafood.
     * @param {SeafoodUpdateArgs} args - Arguments to update one Seafood.
     * @example
     * // Update one Seafood
     * const seafood = await prisma.seafood.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SeafoodUpdateArgs>(args: SelectSubset<T, SeafoodUpdateArgs<ExtArgs>>): Prisma__SeafoodClient<$Result.GetResult<Prisma.$SeafoodPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Seafoods.
     * @param {SeafoodDeleteManyArgs} args - Arguments to filter Seafoods to delete.
     * @example
     * // Delete a few Seafoods
     * const { count } = await prisma.seafood.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SeafoodDeleteManyArgs>(args?: SelectSubset<T, SeafoodDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Seafoods.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SeafoodUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Seafoods
     * const seafood = await prisma.seafood.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SeafoodUpdateManyArgs>(args: SelectSubset<T, SeafoodUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Seafood.
     * @param {SeafoodUpsertArgs} args - Arguments to update or create a Seafood.
     * @example
     * // Update or create a Seafood
     * const seafood = await prisma.seafood.upsert({
     *   create: {
     *     // ... data to create a Seafood
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Seafood we want to update
     *   }
     * })
     */
    upsert<T extends SeafoodUpsertArgs>(args: SelectSubset<T, SeafoodUpsertArgs<ExtArgs>>): Prisma__SeafoodClient<$Result.GetResult<Prisma.$SeafoodPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Seafoods.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SeafoodCountArgs} args - Arguments to filter Seafoods to count.
     * @example
     * // Count the number of Seafoods
     * const count = await prisma.seafood.count({
     *   where: {
     *     // ... the filter for the Seafoods we want to count
     *   }
     * })
    **/
    count<T extends SeafoodCountArgs>(
      args?: Subset<T, SeafoodCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SeafoodCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Seafood.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SeafoodAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends SeafoodAggregateArgs>(args: Subset<T, SeafoodAggregateArgs>): Prisma.PrismaPromise<GetSeafoodAggregateType<T>>

    /**
     * Group by Seafood.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SeafoodGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends SeafoodGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SeafoodGroupByArgs['orderBy'] }
        : { orderBy?: SeafoodGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, SeafoodGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSeafoodGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Seafood model
   */
  readonly fields: SeafoodFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Seafood.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SeafoodClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Seafood model
   */
  interface SeafoodFieldRefs {
    readonly id: FieldRef<"Seafood", 'Int'>
    readonly name: FieldRef<"Seafood", 'String'>
    readonly description: FieldRef<"Seafood", 'String'>
    readonly category: FieldRef<"Seafood", 'String'>
    readonly isFreshwater: FieldRef<"Seafood", 'Boolean'>
    readonly createdAt: FieldRef<"Seafood", 'DateTime'>
    readonly updatedAt: FieldRef<"Seafood", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Seafood findUnique
   */
  export type SeafoodFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Seafood
     */
    select?: SeafoodSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Seafood
     */
    omit?: SeafoodOmit<ExtArgs> | null
    /**
     * Filter, which Seafood to fetch.
     */
    where: SeafoodWhereUniqueInput
  }

  /**
   * Seafood findUniqueOrThrow
   */
  export type SeafoodFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Seafood
     */
    select?: SeafoodSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Seafood
     */
    omit?: SeafoodOmit<ExtArgs> | null
    /**
     * Filter, which Seafood to fetch.
     */
    where: SeafoodWhereUniqueInput
  }

  /**
   * Seafood findFirst
   */
  export type SeafoodFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Seafood
     */
    select?: SeafoodSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Seafood
     */
    omit?: SeafoodOmit<ExtArgs> | null
    /**
     * Filter, which Seafood to fetch.
     */
    where?: SeafoodWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Seafoods to fetch.
     */
    orderBy?: SeafoodOrderByWithRelationInput | SeafoodOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Seafoods.
     */
    cursor?: SeafoodWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Seafoods from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Seafoods.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Seafoods.
     */
    distinct?: SeafoodScalarFieldEnum | SeafoodScalarFieldEnum[]
  }

  /**
   * Seafood findFirstOrThrow
   */
  export type SeafoodFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Seafood
     */
    select?: SeafoodSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Seafood
     */
    omit?: SeafoodOmit<ExtArgs> | null
    /**
     * Filter, which Seafood to fetch.
     */
    where?: SeafoodWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Seafoods to fetch.
     */
    orderBy?: SeafoodOrderByWithRelationInput | SeafoodOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Seafoods.
     */
    cursor?: SeafoodWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Seafoods from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Seafoods.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Seafoods.
     */
    distinct?: SeafoodScalarFieldEnum | SeafoodScalarFieldEnum[]
  }

  /**
   * Seafood findMany
   */
  export type SeafoodFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Seafood
     */
    select?: SeafoodSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Seafood
     */
    omit?: SeafoodOmit<ExtArgs> | null
    /**
     * Filter, which Seafoods to fetch.
     */
    where?: SeafoodWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Seafoods to fetch.
     */
    orderBy?: SeafoodOrderByWithRelationInput | SeafoodOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Seafoods.
     */
    cursor?: SeafoodWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Seafoods from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Seafoods.
     */
    skip?: number
    distinct?: SeafoodScalarFieldEnum | SeafoodScalarFieldEnum[]
  }

  /**
   * Seafood create
   */
  export type SeafoodCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Seafood
     */
    select?: SeafoodSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Seafood
     */
    omit?: SeafoodOmit<ExtArgs> | null
    /**
     * The data needed to create a Seafood.
     */
    data: XOR<SeafoodCreateInput, SeafoodUncheckedCreateInput>
  }

  /**
   * Seafood createMany
   */
  export type SeafoodCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Seafoods.
     */
    data: SeafoodCreateManyInput | SeafoodCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Seafood update
   */
  export type SeafoodUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Seafood
     */
    select?: SeafoodSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Seafood
     */
    omit?: SeafoodOmit<ExtArgs> | null
    /**
     * The data needed to update a Seafood.
     */
    data: XOR<SeafoodUpdateInput, SeafoodUncheckedUpdateInput>
    /**
     * Choose, which Seafood to update.
     */
    where: SeafoodWhereUniqueInput
  }

  /**
   * Seafood updateMany
   */
  export type SeafoodUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Seafoods.
     */
    data: XOR<SeafoodUpdateManyMutationInput, SeafoodUncheckedUpdateManyInput>
    /**
     * Filter which Seafoods to update
     */
    where?: SeafoodWhereInput
    /**
     * Limit how many Seafoods to update.
     */
    limit?: number
  }

  /**
   * Seafood upsert
   */
  export type SeafoodUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Seafood
     */
    select?: SeafoodSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Seafood
     */
    omit?: SeafoodOmit<ExtArgs> | null
    /**
     * The filter to search for the Seafood to update in case it exists.
     */
    where: SeafoodWhereUniqueInput
    /**
     * In case the Seafood found by the `where` argument doesn't exist, create a new Seafood with this data.
     */
    create: XOR<SeafoodCreateInput, SeafoodUncheckedCreateInput>
    /**
     * In case the Seafood was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SeafoodUpdateInput, SeafoodUncheckedUpdateInput>
  }

  /**
   * Seafood delete
   */
  export type SeafoodDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Seafood
     */
    select?: SeafoodSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Seafood
     */
    omit?: SeafoodOmit<ExtArgs> | null
    /**
     * Filter which Seafood to delete.
     */
    where: SeafoodWhereUniqueInput
  }

  /**
   * Seafood deleteMany
   */
  export type SeafoodDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Seafoods to delete
     */
    where?: SeafoodWhereInput
    /**
     * Limit how many Seafoods to delete.
     */
    limit?: number
  }

  /**
   * Seafood without action
   */
  export type SeafoodDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Seafood
     */
    select?: SeafoodSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Seafood
     */
    omit?: SeafoodOmit<ExtArgs> | null
  }


  /**
   * Model HerbAndSpice
   */

  export type AggregateHerbAndSpice = {
    _count: HerbAndSpiceCountAggregateOutputType | null
    _avg: HerbAndSpiceAvgAggregateOutputType | null
    _sum: HerbAndSpiceSumAggregateOutputType | null
    _min: HerbAndSpiceMinAggregateOutputType | null
    _max: HerbAndSpiceMaxAggregateOutputType | null
  }

  export type HerbAndSpiceAvgAggregateOutputType = {
    id: number | null
  }

  export type HerbAndSpiceSumAggregateOutputType = {
    id: number | null
  }

  export type HerbAndSpiceMinAggregateOutputType = {
    id: number | null
    name: string | null
    description: string | null
    isHerb: boolean | null
    isSpice: boolean | null
    isBlend: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type HerbAndSpiceMaxAggregateOutputType = {
    id: number | null
    name: string | null
    description: string | null
    isHerb: boolean | null
    isSpice: boolean | null
    isBlend: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type HerbAndSpiceCountAggregateOutputType = {
    id: number
    name: number
    description: number
    isHerb: number
    isSpice: number
    isBlend: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type HerbAndSpiceAvgAggregateInputType = {
    id?: true
  }

  export type HerbAndSpiceSumAggregateInputType = {
    id?: true
  }

  export type HerbAndSpiceMinAggregateInputType = {
    id?: true
    name?: true
    description?: true
    isHerb?: true
    isSpice?: true
    isBlend?: true
    createdAt?: true
    updatedAt?: true
  }

  export type HerbAndSpiceMaxAggregateInputType = {
    id?: true
    name?: true
    description?: true
    isHerb?: true
    isSpice?: true
    isBlend?: true
    createdAt?: true
    updatedAt?: true
  }

  export type HerbAndSpiceCountAggregateInputType = {
    id?: true
    name?: true
    description?: true
    isHerb?: true
    isSpice?: true
    isBlend?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type HerbAndSpiceAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which HerbAndSpice to aggregate.
     */
    where?: HerbAndSpiceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of HerbAndSpices to fetch.
     */
    orderBy?: HerbAndSpiceOrderByWithRelationInput | HerbAndSpiceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: HerbAndSpiceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` HerbAndSpices from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` HerbAndSpices.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned HerbAndSpices
    **/
    _count?: true | HerbAndSpiceCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: HerbAndSpiceAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: HerbAndSpiceSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: HerbAndSpiceMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: HerbAndSpiceMaxAggregateInputType
  }

  export type GetHerbAndSpiceAggregateType<T extends HerbAndSpiceAggregateArgs> = {
        [P in keyof T & keyof AggregateHerbAndSpice]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateHerbAndSpice[P]>
      : GetScalarType<T[P], AggregateHerbAndSpice[P]>
  }




  export type HerbAndSpiceGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: HerbAndSpiceWhereInput
    orderBy?: HerbAndSpiceOrderByWithAggregationInput | HerbAndSpiceOrderByWithAggregationInput[]
    by: HerbAndSpiceScalarFieldEnum[] | HerbAndSpiceScalarFieldEnum
    having?: HerbAndSpiceScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: HerbAndSpiceCountAggregateInputType | true
    _avg?: HerbAndSpiceAvgAggregateInputType
    _sum?: HerbAndSpiceSumAggregateInputType
    _min?: HerbAndSpiceMinAggregateInputType
    _max?: HerbAndSpiceMaxAggregateInputType
  }

  export type HerbAndSpiceGroupByOutputType = {
    id: number
    name: string
    description: string | null
    isHerb: boolean
    isSpice: boolean
    isBlend: boolean
    createdAt: Date
    updatedAt: Date
    _count: HerbAndSpiceCountAggregateOutputType | null
    _avg: HerbAndSpiceAvgAggregateOutputType | null
    _sum: HerbAndSpiceSumAggregateOutputType | null
    _min: HerbAndSpiceMinAggregateOutputType | null
    _max: HerbAndSpiceMaxAggregateOutputType | null
  }

  type GetHerbAndSpiceGroupByPayload<T extends HerbAndSpiceGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<HerbAndSpiceGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof HerbAndSpiceGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], HerbAndSpiceGroupByOutputType[P]>
            : GetScalarType<T[P], HerbAndSpiceGroupByOutputType[P]>
        }
      >
    >


  export type HerbAndSpiceSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    isHerb?: boolean
    isSpice?: boolean
    isBlend?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["herbAndSpice"]>



  export type HerbAndSpiceSelectScalar = {
    id?: boolean
    name?: boolean
    description?: boolean
    isHerb?: boolean
    isSpice?: boolean
    isBlend?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type HerbAndSpiceOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "description" | "isHerb" | "isSpice" | "isBlend" | "createdAt" | "updatedAt", ExtArgs["result"]["herbAndSpice"]>

  export type $HerbAndSpicePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "HerbAndSpice"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      description: string | null
      isHerb: boolean
      isSpice: boolean
      isBlend: boolean
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["herbAndSpice"]>
    composites: {}
  }

  type HerbAndSpiceGetPayload<S extends boolean | null | undefined | HerbAndSpiceDefaultArgs> = $Result.GetResult<Prisma.$HerbAndSpicePayload, S>

  type HerbAndSpiceCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<HerbAndSpiceFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: HerbAndSpiceCountAggregateInputType | true
    }

  export interface HerbAndSpiceDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['HerbAndSpice'], meta: { name: 'HerbAndSpice' } }
    /**
     * Find zero or one HerbAndSpice that matches the filter.
     * @param {HerbAndSpiceFindUniqueArgs} args - Arguments to find a HerbAndSpice
     * @example
     * // Get one HerbAndSpice
     * const herbAndSpice = await prisma.herbAndSpice.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends HerbAndSpiceFindUniqueArgs>(args: SelectSubset<T, HerbAndSpiceFindUniqueArgs<ExtArgs>>): Prisma__HerbAndSpiceClient<$Result.GetResult<Prisma.$HerbAndSpicePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one HerbAndSpice that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {HerbAndSpiceFindUniqueOrThrowArgs} args - Arguments to find a HerbAndSpice
     * @example
     * // Get one HerbAndSpice
     * const herbAndSpice = await prisma.herbAndSpice.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends HerbAndSpiceFindUniqueOrThrowArgs>(args: SelectSubset<T, HerbAndSpiceFindUniqueOrThrowArgs<ExtArgs>>): Prisma__HerbAndSpiceClient<$Result.GetResult<Prisma.$HerbAndSpicePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first HerbAndSpice that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HerbAndSpiceFindFirstArgs} args - Arguments to find a HerbAndSpice
     * @example
     * // Get one HerbAndSpice
     * const herbAndSpice = await prisma.herbAndSpice.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends HerbAndSpiceFindFirstArgs>(args?: SelectSubset<T, HerbAndSpiceFindFirstArgs<ExtArgs>>): Prisma__HerbAndSpiceClient<$Result.GetResult<Prisma.$HerbAndSpicePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first HerbAndSpice that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HerbAndSpiceFindFirstOrThrowArgs} args - Arguments to find a HerbAndSpice
     * @example
     * // Get one HerbAndSpice
     * const herbAndSpice = await prisma.herbAndSpice.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends HerbAndSpiceFindFirstOrThrowArgs>(args?: SelectSubset<T, HerbAndSpiceFindFirstOrThrowArgs<ExtArgs>>): Prisma__HerbAndSpiceClient<$Result.GetResult<Prisma.$HerbAndSpicePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more HerbAndSpices that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HerbAndSpiceFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all HerbAndSpices
     * const herbAndSpices = await prisma.herbAndSpice.findMany()
     * 
     * // Get first 10 HerbAndSpices
     * const herbAndSpices = await prisma.herbAndSpice.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const herbAndSpiceWithIdOnly = await prisma.herbAndSpice.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends HerbAndSpiceFindManyArgs>(args?: SelectSubset<T, HerbAndSpiceFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$HerbAndSpicePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a HerbAndSpice.
     * @param {HerbAndSpiceCreateArgs} args - Arguments to create a HerbAndSpice.
     * @example
     * // Create one HerbAndSpice
     * const HerbAndSpice = await prisma.herbAndSpice.create({
     *   data: {
     *     // ... data to create a HerbAndSpice
     *   }
     * })
     * 
     */
    create<T extends HerbAndSpiceCreateArgs>(args: SelectSubset<T, HerbAndSpiceCreateArgs<ExtArgs>>): Prisma__HerbAndSpiceClient<$Result.GetResult<Prisma.$HerbAndSpicePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many HerbAndSpices.
     * @param {HerbAndSpiceCreateManyArgs} args - Arguments to create many HerbAndSpices.
     * @example
     * // Create many HerbAndSpices
     * const herbAndSpice = await prisma.herbAndSpice.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends HerbAndSpiceCreateManyArgs>(args?: SelectSubset<T, HerbAndSpiceCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a HerbAndSpice.
     * @param {HerbAndSpiceDeleteArgs} args - Arguments to delete one HerbAndSpice.
     * @example
     * // Delete one HerbAndSpice
     * const HerbAndSpice = await prisma.herbAndSpice.delete({
     *   where: {
     *     // ... filter to delete one HerbAndSpice
     *   }
     * })
     * 
     */
    delete<T extends HerbAndSpiceDeleteArgs>(args: SelectSubset<T, HerbAndSpiceDeleteArgs<ExtArgs>>): Prisma__HerbAndSpiceClient<$Result.GetResult<Prisma.$HerbAndSpicePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one HerbAndSpice.
     * @param {HerbAndSpiceUpdateArgs} args - Arguments to update one HerbAndSpice.
     * @example
     * // Update one HerbAndSpice
     * const herbAndSpice = await prisma.herbAndSpice.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends HerbAndSpiceUpdateArgs>(args: SelectSubset<T, HerbAndSpiceUpdateArgs<ExtArgs>>): Prisma__HerbAndSpiceClient<$Result.GetResult<Prisma.$HerbAndSpicePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more HerbAndSpices.
     * @param {HerbAndSpiceDeleteManyArgs} args - Arguments to filter HerbAndSpices to delete.
     * @example
     * // Delete a few HerbAndSpices
     * const { count } = await prisma.herbAndSpice.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends HerbAndSpiceDeleteManyArgs>(args?: SelectSubset<T, HerbAndSpiceDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more HerbAndSpices.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HerbAndSpiceUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many HerbAndSpices
     * const herbAndSpice = await prisma.herbAndSpice.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends HerbAndSpiceUpdateManyArgs>(args: SelectSubset<T, HerbAndSpiceUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one HerbAndSpice.
     * @param {HerbAndSpiceUpsertArgs} args - Arguments to update or create a HerbAndSpice.
     * @example
     * // Update or create a HerbAndSpice
     * const herbAndSpice = await prisma.herbAndSpice.upsert({
     *   create: {
     *     // ... data to create a HerbAndSpice
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the HerbAndSpice we want to update
     *   }
     * })
     */
    upsert<T extends HerbAndSpiceUpsertArgs>(args: SelectSubset<T, HerbAndSpiceUpsertArgs<ExtArgs>>): Prisma__HerbAndSpiceClient<$Result.GetResult<Prisma.$HerbAndSpicePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of HerbAndSpices.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HerbAndSpiceCountArgs} args - Arguments to filter HerbAndSpices to count.
     * @example
     * // Count the number of HerbAndSpices
     * const count = await prisma.herbAndSpice.count({
     *   where: {
     *     // ... the filter for the HerbAndSpices we want to count
     *   }
     * })
    **/
    count<T extends HerbAndSpiceCountArgs>(
      args?: Subset<T, HerbAndSpiceCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], HerbAndSpiceCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a HerbAndSpice.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HerbAndSpiceAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends HerbAndSpiceAggregateArgs>(args: Subset<T, HerbAndSpiceAggregateArgs>): Prisma.PrismaPromise<GetHerbAndSpiceAggregateType<T>>

    /**
     * Group by HerbAndSpice.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HerbAndSpiceGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends HerbAndSpiceGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: HerbAndSpiceGroupByArgs['orderBy'] }
        : { orderBy?: HerbAndSpiceGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, HerbAndSpiceGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetHerbAndSpiceGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the HerbAndSpice model
   */
  readonly fields: HerbAndSpiceFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for HerbAndSpice.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__HerbAndSpiceClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the HerbAndSpice model
   */
  interface HerbAndSpiceFieldRefs {
    readonly id: FieldRef<"HerbAndSpice", 'Int'>
    readonly name: FieldRef<"HerbAndSpice", 'String'>
    readonly description: FieldRef<"HerbAndSpice", 'String'>
    readonly isHerb: FieldRef<"HerbAndSpice", 'Boolean'>
    readonly isSpice: FieldRef<"HerbAndSpice", 'Boolean'>
    readonly isBlend: FieldRef<"HerbAndSpice", 'Boolean'>
    readonly createdAt: FieldRef<"HerbAndSpice", 'DateTime'>
    readonly updatedAt: FieldRef<"HerbAndSpice", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * HerbAndSpice findUnique
   */
  export type HerbAndSpiceFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HerbAndSpice
     */
    select?: HerbAndSpiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the HerbAndSpice
     */
    omit?: HerbAndSpiceOmit<ExtArgs> | null
    /**
     * Filter, which HerbAndSpice to fetch.
     */
    where: HerbAndSpiceWhereUniqueInput
  }

  /**
   * HerbAndSpice findUniqueOrThrow
   */
  export type HerbAndSpiceFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HerbAndSpice
     */
    select?: HerbAndSpiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the HerbAndSpice
     */
    omit?: HerbAndSpiceOmit<ExtArgs> | null
    /**
     * Filter, which HerbAndSpice to fetch.
     */
    where: HerbAndSpiceWhereUniqueInput
  }

  /**
   * HerbAndSpice findFirst
   */
  export type HerbAndSpiceFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HerbAndSpice
     */
    select?: HerbAndSpiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the HerbAndSpice
     */
    omit?: HerbAndSpiceOmit<ExtArgs> | null
    /**
     * Filter, which HerbAndSpice to fetch.
     */
    where?: HerbAndSpiceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of HerbAndSpices to fetch.
     */
    orderBy?: HerbAndSpiceOrderByWithRelationInput | HerbAndSpiceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for HerbAndSpices.
     */
    cursor?: HerbAndSpiceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` HerbAndSpices from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` HerbAndSpices.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of HerbAndSpices.
     */
    distinct?: HerbAndSpiceScalarFieldEnum | HerbAndSpiceScalarFieldEnum[]
  }

  /**
   * HerbAndSpice findFirstOrThrow
   */
  export type HerbAndSpiceFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HerbAndSpice
     */
    select?: HerbAndSpiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the HerbAndSpice
     */
    omit?: HerbAndSpiceOmit<ExtArgs> | null
    /**
     * Filter, which HerbAndSpice to fetch.
     */
    where?: HerbAndSpiceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of HerbAndSpices to fetch.
     */
    orderBy?: HerbAndSpiceOrderByWithRelationInput | HerbAndSpiceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for HerbAndSpices.
     */
    cursor?: HerbAndSpiceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` HerbAndSpices from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` HerbAndSpices.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of HerbAndSpices.
     */
    distinct?: HerbAndSpiceScalarFieldEnum | HerbAndSpiceScalarFieldEnum[]
  }

  /**
   * HerbAndSpice findMany
   */
  export type HerbAndSpiceFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HerbAndSpice
     */
    select?: HerbAndSpiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the HerbAndSpice
     */
    omit?: HerbAndSpiceOmit<ExtArgs> | null
    /**
     * Filter, which HerbAndSpices to fetch.
     */
    where?: HerbAndSpiceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of HerbAndSpices to fetch.
     */
    orderBy?: HerbAndSpiceOrderByWithRelationInput | HerbAndSpiceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing HerbAndSpices.
     */
    cursor?: HerbAndSpiceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` HerbAndSpices from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` HerbAndSpices.
     */
    skip?: number
    distinct?: HerbAndSpiceScalarFieldEnum | HerbAndSpiceScalarFieldEnum[]
  }

  /**
   * HerbAndSpice create
   */
  export type HerbAndSpiceCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HerbAndSpice
     */
    select?: HerbAndSpiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the HerbAndSpice
     */
    omit?: HerbAndSpiceOmit<ExtArgs> | null
    /**
     * The data needed to create a HerbAndSpice.
     */
    data: XOR<HerbAndSpiceCreateInput, HerbAndSpiceUncheckedCreateInput>
  }

  /**
   * HerbAndSpice createMany
   */
  export type HerbAndSpiceCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many HerbAndSpices.
     */
    data: HerbAndSpiceCreateManyInput | HerbAndSpiceCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * HerbAndSpice update
   */
  export type HerbAndSpiceUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HerbAndSpice
     */
    select?: HerbAndSpiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the HerbAndSpice
     */
    omit?: HerbAndSpiceOmit<ExtArgs> | null
    /**
     * The data needed to update a HerbAndSpice.
     */
    data: XOR<HerbAndSpiceUpdateInput, HerbAndSpiceUncheckedUpdateInput>
    /**
     * Choose, which HerbAndSpice to update.
     */
    where: HerbAndSpiceWhereUniqueInput
  }

  /**
   * HerbAndSpice updateMany
   */
  export type HerbAndSpiceUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update HerbAndSpices.
     */
    data: XOR<HerbAndSpiceUpdateManyMutationInput, HerbAndSpiceUncheckedUpdateManyInput>
    /**
     * Filter which HerbAndSpices to update
     */
    where?: HerbAndSpiceWhereInput
    /**
     * Limit how many HerbAndSpices to update.
     */
    limit?: number
  }

  /**
   * HerbAndSpice upsert
   */
  export type HerbAndSpiceUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HerbAndSpice
     */
    select?: HerbAndSpiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the HerbAndSpice
     */
    omit?: HerbAndSpiceOmit<ExtArgs> | null
    /**
     * The filter to search for the HerbAndSpice to update in case it exists.
     */
    where: HerbAndSpiceWhereUniqueInput
    /**
     * In case the HerbAndSpice found by the `where` argument doesn't exist, create a new HerbAndSpice with this data.
     */
    create: XOR<HerbAndSpiceCreateInput, HerbAndSpiceUncheckedCreateInput>
    /**
     * In case the HerbAndSpice was found with the provided `where` argument, update it with this data.
     */
    update: XOR<HerbAndSpiceUpdateInput, HerbAndSpiceUncheckedUpdateInput>
  }

  /**
   * HerbAndSpice delete
   */
  export type HerbAndSpiceDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HerbAndSpice
     */
    select?: HerbAndSpiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the HerbAndSpice
     */
    omit?: HerbAndSpiceOmit<ExtArgs> | null
    /**
     * Filter which HerbAndSpice to delete.
     */
    where: HerbAndSpiceWhereUniqueInput
  }

  /**
   * HerbAndSpice deleteMany
   */
  export type HerbAndSpiceDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which HerbAndSpices to delete
     */
    where?: HerbAndSpiceWhereInput
    /**
     * Limit how many HerbAndSpices to delete.
     */
    limit?: number
  }

  /**
   * HerbAndSpice without action
   */
  export type HerbAndSpiceDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HerbAndSpice
     */
    select?: HerbAndSpiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the HerbAndSpice
     */
    omit?: HerbAndSpiceOmit<ExtArgs> | null
  }


  /**
   * Model Sweetener
   */

  export type AggregateSweetener = {
    _count: SweetenerCountAggregateOutputType | null
    _avg: SweetenerAvgAggregateOutputType | null
    _sum: SweetenerSumAggregateOutputType | null
    _min: SweetenerMinAggregateOutputType | null
    _max: SweetenerMaxAggregateOutputType | null
  }

  export type SweetenerAvgAggregateOutputType = {
    id: number | null
  }

  export type SweetenerSumAggregateOutputType = {
    id: number | null
  }

  export type SweetenerMinAggregateOutputType = {
    id: number | null
    name: string | null
    description: string | null
    isNatural: boolean | null
    isArtificial: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type SweetenerMaxAggregateOutputType = {
    id: number | null
    name: string | null
    description: string | null
    isNatural: boolean | null
    isArtificial: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type SweetenerCountAggregateOutputType = {
    id: number
    name: number
    description: number
    isNatural: number
    isArtificial: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type SweetenerAvgAggregateInputType = {
    id?: true
  }

  export type SweetenerSumAggregateInputType = {
    id?: true
  }

  export type SweetenerMinAggregateInputType = {
    id?: true
    name?: true
    description?: true
    isNatural?: true
    isArtificial?: true
    createdAt?: true
    updatedAt?: true
  }

  export type SweetenerMaxAggregateInputType = {
    id?: true
    name?: true
    description?: true
    isNatural?: true
    isArtificial?: true
    createdAt?: true
    updatedAt?: true
  }

  export type SweetenerCountAggregateInputType = {
    id?: true
    name?: true
    description?: true
    isNatural?: true
    isArtificial?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type SweetenerAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Sweetener to aggregate.
     */
    where?: SweetenerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sweeteners to fetch.
     */
    orderBy?: SweetenerOrderByWithRelationInput | SweetenerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SweetenerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sweeteners from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sweeteners.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Sweeteners
    **/
    _count?: true | SweetenerCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: SweetenerAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: SweetenerSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SweetenerMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SweetenerMaxAggregateInputType
  }

  export type GetSweetenerAggregateType<T extends SweetenerAggregateArgs> = {
        [P in keyof T & keyof AggregateSweetener]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSweetener[P]>
      : GetScalarType<T[P], AggregateSweetener[P]>
  }




  export type SweetenerGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SweetenerWhereInput
    orderBy?: SweetenerOrderByWithAggregationInput | SweetenerOrderByWithAggregationInput[]
    by: SweetenerScalarFieldEnum[] | SweetenerScalarFieldEnum
    having?: SweetenerScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SweetenerCountAggregateInputType | true
    _avg?: SweetenerAvgAggregateInputType
    _sum?: SweetenerSumAggregateInputType
    _min?: SweetenerMinAggregateInputType
    _max?: SweetenerMaxAggregateInputType
  }

  export type SweetenerGroupByOutputType = {
    id: number
    name: string
    description: string | null
    isNatural: boolean
    isArtificial: boolean
    createdAt: Date
    updatedAt: Date
    _count: SweetenerCountAggregateOutputType | null
    _avg: SweetenerAvgAggregateOutputType | null
    _sum: SweetenerSumAggregateOutputType | null
    _min: SweetenerMinAggregateOutputType | null
    _max: SweetenerMaxAggregateOutputType | null
  }

  type GetSweetenerGroupByPayload<T extends SweetenerGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SweetenerGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SweetenerGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SweetenerGroupByOutputType[P]>
            : GetScalarType<T[P], SweetenerGroupByOutputType[P]>
        }
      >
    >


  export type SweetenerSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    isNatural?: boolean
    isArtificial?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["sweetener"]>



  export type SweetenerSelectScalar = {
    id?: boolean
    name?: boolean
    description?: boolean
    isNatural?: boolean
    isArtificial?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type SweetenerOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "description" | "isNatural" | "isArtificial" | "createdAt" | "updatedAt", ExtArgs["result"]["sweetener"]>

  export type $SweetenerPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Sweetener"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      description: string | null
      isNatural: boolean
      isArtificial: boolean
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["sweetener"]>
    composites: {}
  }

  type SweetenerGetPayload<S extends boolean | null | undefined | SweetenerDefaultArgs> = $Result.GetResult<Prisma.$SweetenerPayload, S>

  type SweetenerCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<SweetenerFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SweetenerCountAggregateInputType | true
    }

  export interface SweetenerDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Sweetener'], meta: { name: 'Sweetener' } }
    /**
     * Find zero or one Sweetener that matches the filter.
     * @param {SweetenerFindUniqueArgs} args - Arguments to find a Sweetener
     * @example
     * // Get one Sweetener
     * const sweetener = await prisma.sweetener.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SweetenerFindUniqueArgs>(args: SelectSubset<T, SweetenerFindUniqueArgs<ExtArgs>>): Prisma__SweetenerClient<$Result.GetResult<Prisma.$SweetenerPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Sweetener that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SweetenerFindUniqueOrThrowArgs} args - Arguments to find a Sweetener
     * @example
     * // Get one Sweetener
     * const sweetener = await prisma.sweetener.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SweetenerFindUniqueOrThrowArgs>(args: SelectSubset<T, SweetenerFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SweetenerClient<$Result.GetResult<Prisma.$SweetenerPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Sweetener that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SweetenerFindFirstArgs} args - Arguments to find a Sweetener
     * @example
     * // Get one Sweetener
     * const sweetener = await prisma.sweetener.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SweetenerFindFirstArgs>(args?: SelectSubset<T, SweetenerFindFirstArgs<ExtArgs>>): Prisma__SweetenerClient<$Result.GetResult<Prisma.$SweetenerPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Sweetener that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SweetenerFindFirstOrThrowArgs} args - Arguments to find a Sweetener
     * @example
     * // Get one Sweetener
     * const sweetener = await prisma.sweetener.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SweetenerFindFirstOrThrowArgs>(args?: SelectSubset<T, SweetenerFindFirstOrThrowArgs<ExtArgs>>): Prisma__SweetenerClient<$Result.GetResult<Prisma.$SweetenerPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Sweeteners that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SweetenerFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Sweeteners
     * const sweeteners = await prisma.sweetener.findMany()
     * 
     * // Get first 10 Sweeteners
     * const sweeteners = await prisma.sweetener.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const sweetenerWithIdOnly = await prisma.sweetener.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SweetenerFindManyArgs>(args?: SelectSubset<T, SweetenerFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SweetenerPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Sweetener.
     * @param {SweetenerCreateArgs} args - Arguments to create a Sweetener.
     * @example
     * // Create one Sweetener
     * const Sweetener = await prisma.sweetener.create({
     *   data: {
     *     // ... data to create a Sweetener
     *   }
     * })
     * 
     */
    create<T extends SweetenerCreateArgs>(args: SelectSubset<T, SweetenerCreateArgs<ExtArgs>>): Prisma__SweetenerClient<$Result.GetResult<Prisma.$SweetenerPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Sweeteners.
     * @param {SweetenerCreateManyArgs} args - Arguments to create many Sweeteners.
     * @example
     * // Create many Sweeteners
     * const sweetener = await prisma.sweetener.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SweetenerCreateManyArgs>(args?: SelectSubset<T, SweetenerCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Sweetener.
     * @param {SweetenerDeleteArgs} args - Arguments to delete one Sweetener.
     * @example
     * // Delete one Sweetener
     * const Sweetener = await prisma.sweetener.delete({
     *   where: {
     *     // ... filter to delete one Sweetener
     *   }
     * })
     * 
     */
    delete<T extends SweetenerDeleteArgs>(args: SelectSubset<T, SweetenerDeleteArgs<ExtArgs>>): Prisma__SweetenerClient<$Result.GetResult<Prisma.$SweetenerPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Sweetener.
     * @param {SweetenerUpdateArgs} args - Arguments to update one Sweetener.
     * @example
     * // Update one Sweetener
     * const sweetener = await prisma.sweetener.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SweetenerUpdateArgs>(args: SelectSubset<T, SweetenerUpdateArgs<ExtArgs>>): Prisma__SweetenerClient<$Result.GetResult<Prisma.$SweetenerPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Sweeteners.
     * @param {SweetenerDeleteManyArgs} args - Arguments to filter Sweeteners to delete.
     * @example
     * // Delete a few Sweeteners
     * const { count } = await prisma.sweetener.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SweetenerDeleteManyArgs>(args?: SelectSubset<T, SweetenerDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Sweeteners.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SweetenerUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Sweeteners
     * const sweetener = await prisma.sweetener.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SweetenerUpdateManyArgs>(args: SelectSubset<T, SweetenerUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Sweetener.
     * @param {SweetenerUpsertArgs} args - Arguments to update or create a Sweetener.
     * @example
     * // Update or create a Sweetener
     * const sweetener = await prisma.sweetener.upsert({
     *   create: {
     *     // ... data to create a Sweetener
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Sweetener we want to update
     *   }
     * })
     */
    upsert<T extends SweetenerUpsertArgs>(args: SelectSubset<T, SweetenerUpsertArgs<ExtArgs>>): Prisma__SweetenerClient<$Result.GetResult<Prisma.$SweetenerPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Sweeteners.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SweetenerCountArgs} args - Arguments to filter Sweeteners to count.
     * @example
     * // Count the number of Sweeteners
     * const count = await prisma.sweetener.count({
     *   where: {
     *     // ... the filter for the Sweeteners we want to count
     *   }
     * })
    **/
    count<T extends SweetenerCountArgs>(
      args?: Subset<T, SweetenerCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SweetenerCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Sweetener.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SweetenerAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends SweetenerAggregateArgs>(args: Subset<T, SweetenerAggregateArgs>): Prisma.PrismaPromise<GetSweetenerAggregateType<T>>

    /**
     * Group by Sweetener.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SweetenerGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends SweetenerGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SweetenerGroupByArgs['orderBy'] }
        : { orderBy?: SweetenerGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, SweetenerGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSweetenerGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Sweetener model
   */
  readonly fields: SweetenerFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Sweetener.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SweetenerClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Sweetener model
   */
  interface SweetenerFieldRefs {
    readonly id: FieldRef<"Sweetener", 'Int'>
    readonly name: FieldRef<"Sweetener", 'String'>
    readonly description: FieldRef<"Sweetener", 'String'>
    readonly isNatural: FieldRef<"Sweetener", 'Boolean'>
    readonly isArtificial: FieldRef<"Sweetener", 'Boolean'>
    readonly createdAt: FieldRef<"Sweetener", 'DateTime'>
    readonly updatedAt: FieldRef<"Sweetener", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Sweetener findUnique
   */
  export type SweetenerFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sweetener
     */
    select?: SweetenerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Sweetener
     */
    omit?: SweetenerOmit<ExtArgs> | null
    /**
     * Filter, which Sweetener to fetch.
     */
    where: SweetenerWhereUniqueInput
  }

  /**
   * Sweetener findUniqueOrThrow
   */
  export type SweetenerFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sweetener
     */
    select?: SweetenerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Sweetener
     */
    omit?: SweetenerOmit<ExtArgs> | null
    /**
     * Filter, which Sweetener to fetch.
     */
    where: SweetenerWhereUniqueInput
  }

  /**
   * Sweetener findFirst
   */
  export type SweetenerFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sweetener
     */
    select?: SweetenerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Sweetener
     */
    omit?: SweetenerOmit<ExtArgs> | null
    /**
     * Filter, which Sweetener to fetch.
     */
    where?: SweetenerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sweeteners to fetch.
     */
    orderBy?: SweetenerOrderByWithRelationInput | SweetenerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Sweeteners.
     */
    cursor?: SweetenerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sweeteners from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sweeteners.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Sweeteners.
     */
    distinct?: SweetenerScalarFieldEnum | SweetenerScalarFieldEnum[]
  }

  /**
   * Sweetener findFirstOrThrow
   */
  export type SweetenerFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sweetener
     */
    select?: SweetenerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Sweetener
     */
    omit?: SweetenerOmit<ExtArgs> | null
    /**
     * Filter, which Sweetener to fetch.
     */
    where?: SweetenerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sweeteners to fetch.
     */
    orderBy?: SweetenerOrderByWithRelationInput | SweetenerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Sweeteners.
     */
    cursor?: SweetenerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sweeteners from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sweeteners.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Sweeteners.
     */
    distinct?: SweetenerScalarFieldEnum | SweetenerScalarFieldEnum[]
  }

  /**
   * Sweetener findMany
   */
  export type SweetenerFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sweetener
     */
    select?: SweetenerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Sweetener
     */
    omit?: SweetenerOmit<ExtArgs> | null
    /**
     * Filter, which Sweeteners to fetch.
     */
    where?: SweetenerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sweeteners to fetch.
     */
    orderBy?: SweetenerOrderByWithRelationInput | SweetenerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Sweeteners.
     */
    cursor?: SweetenerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sweeteners from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sweeteners.
     */
    skip?: number
    distinct?: SweetenerScalarFieldEnum | SweetenerScalarFieldEnum[]
  }

  /**
   * Sweetener create
   */
  export type SweetenerCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sweetener
     */
    select?: SweetenerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Sweetener
     */
    omit?: SweetenerOmit<ExtArgs> | null
    /**
     * The data needed to create a Sweetener.
     */
    data: XOR<SweetenerCreateInput, SweetenerUncheckedCreateInput>
  }

  /**
   * Sweetener createMany
   */
  export type SweetenerCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Sweeteners.
     */
    data: SweetenerCreateManyInput | SweetenerCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Sweetener update
   */
  export type SweetenerUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sweetener
     */
    select?: SweetenerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Sweetener
     */
    omit?: SweetenerOmit<ExtArgs> | null
    /**
     * The data needed to update a Sweetener.
     */
    data: XOR<SweetenerUpdateInput, SweetenerUncheckedUpdateInput>
    /**
     * Choose, which Sweetener to update.
     */
    where: SweetenerWhereUniqueInput
  }

  /**
   * Sweetener updateMany
   */
  export type SweetenerUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Sweeteners.
     */
    data: XOR<SweetenerUpdateManyMutationInput, SweetenerUncheckedUpdateManyInput>
    /**
     * Filter which Sweeteners to update
     */
    where?: SweetenerWhereInput
    /**
     * Limit how many Sweeteners to update.
     */
    limit?: number
  }

  /**
   * Sweetener upsert
   */
  export type SweetenerUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sweetener
     */
    select?: SweetenerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Sweetener
     */
    omit?: SweetenerOmit<ExtArgs> | null
    /**
     * The filter to search for the Sweetener to update in case it exists.
     */
    where: SweetenerWhereUniqueInput
    /**
     * In case the Sweetener found by the `where` argument doesn't exist, create a new Sweetener with this data.
     */
    create: XOR<SweetenerCreateInput, SweetenerUncheckedCreateInput>
    /**
     * In case the Sweetener was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SweetenerUpdateInput, SweetenerUncheckedUpdateInput>
  }

  /**
   * Sweetener delete
   */
  export type SweetenerDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sweetener
     */
    select?: SweetenerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Sweetener
     */
    omit?: SweetenerOmit<ExtArgs> | null
    /**
     * Filter which Sweetener to delete.
     */
    where: SweetenerWhereUniqueInput
  }

  /**
   * Sweetener deleteMany
   */
  export type SweetenerDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Sweeteners to delete
     */
    where?: SweetenerWhereInput
    /**
     * Limit how many Sweeteners to delete.
     */
    limit?: number
  }

  /**
   * Sweetener without action
   */
  export type SweetenerDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sweetener
     */
    select?: SweetenerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Sweetener
     */
    omit?: SweetenerOmit<ExtArgs> | null
  }


  /**
   * Model Grain
   */

  export type AggregateGrain = {
    _count: GrainCountAggregateOutputType | null
    _avg: GrainAvgAggregateOutputType | null
    _sum: GrainSumAggregateOutputType | null
    _min: GrainMinAggregateOutputType | null
    _max: GrainMaxAggregateOutputType | null
  }

  export type GrainAvgAggregateOutputType = {
    id: number | null
  }

  export type GrainSumAggregateOutputType = {
    id: number | null
  }

  export type GrainMinAggregateOutputType = {
    id: number | null
    name: string | null
    description: string | null
    category: string | null
    isGlutenFree: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type GrainMaxAggregateOutputType = {
    id: number | null
    name: string | null
    description: string | null
    category: string | null
    isGlutenFree: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type GrainCountAggregateOutputType = {
    id: number
    name: number
    description: number
    category: number
    isGlutenFree: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type GrainAvgAggregateInputType = {
    id?: true
  }

  export type GrainSumAggregateInputType = {
    id?: true
  }

  export type GrainMinAggregateInputType = {
    id?: true
    name?: true
    description?: true
    category?: true
    isGlutenFree?: true
    createdAt?: true
    updatedAt?: true
  }

  export type GrainMaxAggregateInputType = {
    id?: true
    name?: true
    description?: true
    category?: true
    isGlutenFree?: true
    createdAt?: true
    updatedAt?: true
  }

  export type GrainCountAggregateInputType = {
    id?: true
    name?: true
    description?: true
    category?: true
    isGlutenFree?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type GrainAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Grain to aggregate.
     */
    where?: GrainWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Grains to fetch.
     */
    orderBy?: GrainOrderByWithRelationInput | GrainOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: GrainWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Grains from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Grains.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Grains
    **/
    _count?: true | GrainCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: GrainAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: GrainSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: GrainMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: GrainMaxAggregateInputType
  }

  export type GetGrainAggregateType<T extends GrainAggregateArgs> = {
        [P in keyof T & keyof AggregateGrain]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateGrain[P]>
      : GetScalarType<T[P], AggregateGrain[P]>
  }




  export type GrainGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: GrainWhereInput
    orderBy?: GrainOrderByWithAggregationInput | GrainOrderByWithAggregationInput[]
    by: GrainScalarFieldEnum[] | GrainScalarFieldEnum
    having?: GrainScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: GrainCountAggregateInputType | true
    _avg?: GrainAvgAggregateInputType
    _sum?: GrainSumAggregateInputType
    _min?: GrainMinAggregateInputType
    _max?: GrainMaxAggregateInputType
  }

  export type GrainGroupByOutputType = {
    id: number
    name: string
    description: string | null
    category: string | null
    isGlutenFree: boolean
    createdAt: Date
    updatedAt: Date
    _count: GrainCountAggregateOutputType | null
    _avg: GrainAvgAggregateOutputType | null
    _sum: GrainSumAggregateOutputType | null
    _min: GrainMinAggregateOutputType | null
    _max: GrainMaxAggregateOutputType | null
  }

  type GetGrainGroupByPayload<T extends GrainGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<GrainGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof GrainGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], GrainGroupByOutputType[P]>
            : GetScalarType<T[P], GrainGroupByOutputType[P]>
        }
      >
    >


  export type GrainSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    category?: boolean
    isGlutenFree?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["grain"]>



  export type GrainSelectScalar = {
    id?: boolean
    name?: boolean
    description?: boolean
    category?: boolean
    isGlutenFree?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type GrainOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "description" | "category" | "isGlutenFree" | "createdAt" | "updatedAt", ExtArgs["result"]["grain"]>

  export type $GrainPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Grain"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      description: string | null
      category: string | null
      isGlutenFree: boolean
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["grain"]>
    composites: {}
  }

  type GrainGetPayload<S extends boolean | null | undefined | GrainDefaultArgs> = $Result.GetResult<Prisma.$GrainPayload, S>

  type GrainCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<GrainFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: GrainCountAggregateInputType | true
    }

  export interface GrainDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Grain'], meta: { name: 'Grain' } }
    /**
     * Find zero or one Grain that matches the filter.
     * @param {GrainFindUniqueArgs} args - Arguments to find a Grain
     * @example
     * // Get one Grain
     * const grain = await prisma.grain.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends GrainFindUniqueArgs>(args: SelectSubset<T, GrainFindUniqueArgs<ExtArgs>>): Prisma__GrainClient<$Result.GetResult<Prisma.$GrainPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Grain that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {GrainFindUniqueOrThrowArgs} args - Arguments to find a Grain
     * @example
     * // Get one Grain
     * const grain = await prisma.grain.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends GrainFindUniqueOrThrowArgs>(args: SelectSubset<T, GrainFindUniqueOrThrowArgs<ExtArgs>>): Prisma__GrainClient<$Result.GetResult<Prisma.$GrainPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Grain that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GrainFindFirstArgs} args - Arguments to find a Grain
     * @example
     * // Get one Grain
     * const grain = await prisma.grain.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends GrainFindFirstArgs>(args?: SelectSubset<T, GrainFindFirstArgs<ExtArgs>>): Prisma__GrainClient<$Result.GetResult<Prisma.$GrainPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Grain that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GrainFindFirstOrThrowArgs} args - Arguments to find a Grain
     * @example
     * // Get one Grain
     * const grain = await prisma.grain.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends GrainFindFirstOrThrowArgs>(args?: SelectSubset<T, GrainFindFirstOrThrowArgs<ExtArgs>>): Prisma__GrainClient<$Result.GetResult<Prisma.$GrainPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Grains that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GrainFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Grains
     * const grains = await prisma.grain.findMany()
     * 
     * // Get first 10 Grains
     * const grains = await prisma.grain.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const grainWithIdOnly = await prisma.grain.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends GrainFindManyArgs>(args?: SelectSubset<T, GrainFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GrainPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Grain.
     * @param {GrainCreateArgs} args - Arguments to create a Grain.
     * @example
     * // Create one Grain
     * const Grain = await prisma.grain.create({
     *   data: {
     *     // ... data to create a Grain
     *   }
     * })
     * 
     */
    create<T extends GrainCreateArgs>(args: SelectSubset<T, GrainCreateArgs<ExtArgs>>): Prisma__GrainClient<$Result.GetResult<Prisma.$GrainPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Grains.
     * @param {GrainCreateManyArgs} args - Arguments to create many Grains.
     * @example
     * // Create many Grains
     * const grain = await prisma.grain.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends GrainCreateManyArgs>(args?: SelectSubset<T, GrainCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Grain.
     * @param {GrainDeleteArgs} args - Arguments to delete one Grain.
     * @example
     * // Delete one Grain
     * const Grain = await prisma.grain.delete({
     *   where: {
     *     // ... filter to delete one Grain
     *   }
     * })
     * 
     */
    delete<T extends GrainDeleteArgs>(args: SelectSubset<T, GrainDeleteArgs<ExtArgs>>): Prisma__GrainClient<$Result.GetResult<Prisma.$GrainPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Grain.
     * @param {GrainUpdateArgs} args - Arguments to update one Grain.
     * @example
     * // Update one Grain
     * const grain = await prisma.grain.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends GrainUpdateArgs>(args: SelectSubset<T, GrainUpdateArgs<ExtArgs>>): Prisma__GrainClient<$Result.GetResult<Prisma.$GrainPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Grains.
     * @param {GrainDeleteManyArgs} args - Arguments to filter Grains to delete.
     * @example
     * // Delete a few Grains
     * const { count } = await prisma.grain.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends GrainDeleteManyArgs>(args?: SelectSubset<T, GrainDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Grains.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GrainUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Grains
     * const grain = await prisma.grain.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends GrainUpdateManyArgs>(args: SelectSubset<T, GrainUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Grain.
     * @param {GrainUpsertArgs} args - Arguments to update or create a Grain.
     * @example
     * // Update or create a Grain
     * const grain = await prisma.grain.upsert({
     *   create: {
     *     // ... data to create a Grain
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Grain we want to update
     *   }
     * })
     */
    upsert<T extends GrainUpsertArgs>(args: SelectSubset<T, GrainUpsertArgs<ExtArgs>>): Prisma__GrainClient<$Result.GetResult<Prisma.$GrainPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Grains.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GrainCountArgs} args - Arguments to filter Grains to count.
     * @example
     * // Count the number of Grains
     * const count = await prisma.grain.count({
     *   where: {
     *     // ... the filter for the Grains we want to count
     *   }
     * })
    **/
    count<T extends GrainCountArgs>(
      args?: Subset<T, GrainCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], GrainCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Grain.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GrainAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends GrainAggregateArgs>(args: Subset<T, GrainAggregateArgs>): Prisma.PrismaPromise<GetGrainAggregateType<T>>

    /**
     * Group by Grain.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GrainGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends GrainGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: GrainGroupByArgs['orderBy'] }
        : { orderBy?: GrainGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, GrainGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetGrainGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Grain model
   */
  readonly fields: GrainFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Grain.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__GrainClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Grain model
   */
  interface GrainFieldRefs {
    readonly id: FieldRef<"Grain", 'Int'>
    readonly name: FieldRef<"Grain", 'String'>
    readonly description: FieldRef<"Grain", 'String'>
    readonly category: FieldRef<"Grain", 'String'>
    readonly isGlutenFree: FieldRef<"Grain", 'Boolean'>
    readonly createdAt: FieldRef<"Grain", 'DateTime'>
    readonly updatedAt: FieldRef<"Grain", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Grain findUnique
   */
  export type GrainFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Grain
     */
    select?: GrainSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Grain
     */
    omit?: GrainOmit<ExtArgs> | null
    /**
     * Filter, which Grain to fetch.
     */
    where: GrainWhereUniqueInput
  }

  /**
   * Grain findUniqueOrThrow
   */
  export type GrainFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Grain
     */
    select?: GrainSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Grain
     */
    omit?: GrainOmit<ExtArgs> | null
    /**
     * Filter, which Grain to fetch.
     */
    where: GrainWhereUniqueInput
  }

  /**
   * Grain findFirst
   */
  export type GrainFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Grain
     */
    select?: GrainSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Grain
     */
    omit?: GrainOmit<ExtArgs> | null
    /**
     * Filter, which Grain to fetch.
     */
    where?: GrainWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Grains to fetch.
     */
    orderBy?: GrainOrderByWithRelationInput | GrainOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Grains.
     */
    cursor?: GrainWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Grains from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Grains.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Grains.
     */
    distinct?: GrainScalarFieldEnum | GrainScalarFieldEnum[]
  }

  /**
   * Grain findFirstOrThrow
   */
  export type GrainFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Grain
     */
    select?: GrainSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Grain
     */
    omit?: GrainOmit<ExtArgs> | null
    /**
     * Filter, which Grain to fetch.
     */
    where?: GrainWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Grains to fetch.
     */
    orderBy?: GrainOrderByWithRelationInput | GrainOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Grains.
     */
    cursor?: GrainWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Grains from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Grains.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Grains.
     */
    distinct?: GrainScalarFieldEnum | GrainScalarFieldEnum[]
  }

  /**
   * Grain findMany
   */
  export type GrainFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Grain
     */
    select?: GrainSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Grain
     */
    omit?: GrainOmit<ExtArgs> | null
    /**
     * Filter, which Grains to fetch.
     */
    where?: GrainWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Grains to fetch.
     */
    orderBy?: GrainOrderByWithRelationInput | GrainOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Grains.
     */
    cursor?: GrainWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Grains from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Grains.
     */
    skip?: number
    distinct?: GrainScalarFieldEnum | GrainScalarFieldEnum[]
  }

  /**
   * Grain create
   */
  export type GrainCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Grain
     */
    select?: GrainSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Grain
     */
    omit?: GrainOmit<ExtArgs> | null
    /**
     * The data needed to create a Grain.
     */
    data: XOR<GrainCreateInput, GrainUncheckedCreateInput>
  }

  /**
   * Grain createMany
   */
  export type GrainCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Grains.
     */
    data: GrainCreateManyInput | GrainCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Grain update
   */
  export type GrainUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Grain
     */
    select?: GrainSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Grain
     */
    omit?: GrainOmit<ExtArgs> | null
    /**
     * The data needed to update a Grain.
     */
    data: XOR<GrainUpdateInput, GrainUncheckedUpdateInput>
    /**
     * Choose, which Grain to update.
     */
    where: GrainWhereUniqueInput
  }

  /**
   * Grain updateMany
   */
  export type GrainUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Grains.
     */
    data: XOR<GrainUpdateManyMutationInput, GrainUncheckedUpdateManyInput>
    /**
     * Filter which Grains to update
     */
    where?: GrainWhereInput
    /**
     * Limit how many Grains to update.
     */
    limit?: number
  }

  /**
   * Grain upsert
   */
  export type GrainUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Grain
     */
    select?: GrainSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Grain
     */
    omit?: GrainOmit<ExtArgs> | null
    /**
     * The filter to search for the Grain to update in case it exists.
     */
    where: GrainWhereUniqueInput
    /**
     * In case the Grain found by the `where` argument doesn't exist, create a new Grain with this data.
     */
    create: XOR<GrainCreateInput, GrainUncheckedCreateInput>
    /**
     * In case the Grain was found with the provided `where` argument, update it with this data.
     */
    update: XOR<GrainUpdateInput, GrainUncheckedUpdateInput>
  }

  /**
   * Grain delete
   */
  export type GrainDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Grain
     */
    select?: GrainSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Grain
     */
    omit?: GrainOmit<ExtArgs> | null
    /**
     * Filter which Grain to delete.
     */
    where: GrainWhereUniqueInput
  }

  /**
   * Grain deleteMany
   */
  export type GrainDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Grains to delete
     */
    where?: GrainWhereInput
    /**
     * Limit how many Grains to delete.
     */
    limit?: number
  }

  /**
   * Grain without action
   */
  export type GrainDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Grain
     */
    select?: GrainSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Grain
     */
    omit?: GrainOmit<ExtArgs> | null
  }


  /**
   * Model Legume
   */

  export type AggregateLegume = {
    _count: LegumeCountAggregateOutputType | null
    _avg: LegumeAvgAggregateOutputType | null
    _sum: LegumeSumAggregateOutputType | null
    _min: LegumeMinAggregateOutputType | null
    _max: LegumeMaxAggregateOutputType | null
  }

  export type LegumeAvgAggregateOutputType = {
    id: number | null
  }

  export type LegumeSumAggregateOutputType = {
    id: number | null
  }

  export type LegumeMinAggregateOutputType = {
    id: number | null
    name: string | null
    description: string | null
    isBean: boolean | null
    isLentil: boolean | null
    isPea: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type LegumeMaxAggregateOutputType = {
    id: number | null
    name: string | null
    description: string | null
    isBean: boolean | null
    isLentil: boolean | null
    isPea: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type LegumeCountAggregateOutputType = {
    id: number
    name: number
    description: number
    isBean: number
    isLentil: number
    isPea: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type LegumeAvgAggregateInputType = {
    id?: true
  }

  export type LegumeSumAggregateInputType = {
    id?: true
  }

  export type LegumeMinAggregateInputType = {
    id?: true
    name?: true
    description?: true
    isBean?: true
    isLentil?: true
    isPea?: true
    createdAt?: true
    updatedAt?: true
  }

  export type LegumeMaxAggregateInputType = {
    id?: true
    name?: true
    description?: true
    isBean?: true
    isLentil?: true
    isPea?: true
    createdAt?: true
    updatedAt?: true
  }

  export type LegumeCountAggregateInputType = {
    id?: true
    name?: true
    description?: true
    isBean?: true
    isLentil?: true
    isPea?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type LegumeAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Legume to aggregate.
     */
    where?: LegumeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Legumes to fetch.
     */
    orderBy?: LegumeOrderByWithRelationInput | LegumeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: LegumeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Legumes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Legumes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Legumes
    **/
    _count?: true | LegumeCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: LegumeAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: LegumeSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: LegumeMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: LegumeMaxAggregateInputType
  }

  export type GetLegumeAggregateType<T extends LegumeAggregateArgs> = {
        [P in keyof T & keyof AggregateLegume]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateLegume[P]>
      : GetScalarType<T[P], AggregateLegume[P]>
  }




  export type LegumeGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LegumeWhereInput
    orderBy?: LegumeOrderByWithAggregationInput | LegumeOrderByWithAggregationInput[]
    by: LegumeScalarFieldEnum[] | LegumeScalarFieldEnum
    having?: LegumeScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: LegumeCountAggregateInputType | true
    _avg?: LegumeAvgAggregateInputType
    _sum?: LegumeSumAggregateInputType
    _min?: LegumeMinAggregateInputType
    _max?: LegumeMaxAggregateInputType
  }

  export type LegumeGroupByOutputType = {
    id: number
    name: string
    description: string | null
    isBean: boolean
    isLentil: boolean
    isPea: boolean
    createdAt: Date
    updatedAt: Date
    _count: LegumeCountAggregateOutputType | null
    _avg: LegumeAvgAggregateOutputType | null
    _sum: LegumeSumAggregateOutputType | null
    _min: LegumeMinAggregateOutputType | null
    _max: LegumeMaxAggregateOutputType | null
  }

  type GetLegumeGroupByPayload<T extends LegumeGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<LegumeGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof LegumeGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], LegumeGroupByOutputType[P]>
            : GetScalarType<T[P], LegumeGroupByOutputType[P]>
        }
      >
    >


  export type LegumeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    isBean?: boolean
    isLentil?: boolean
    isPea?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["legume"]>



  export type LegumeSelectScalar = {
    id?: boolean
    name?: boolean
    description?: boolean
    isBean?: boolean
    isLentil?: boolean
    isPea?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type LegumeOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "description" | "isBean" | "isLentil" | "isPea" | "createdAt" | "updatedAt", ExtArgs["result"]["legume"]>

  export type $LegumePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Legume"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      description: string | null
      isBean: boolean
      isLentil: boolean
      isPea: boolean
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["legume"]>
    composites: {}
  }

  type LegumeGetPayload<S extends boolean | null | undefined | LegumeDefaultArgs> = $Result.GetResult<Prisma.$LegumePayload, S>

  type LegumeCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<LegumeFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: LegumeCountAggregateInputType | true
    }

  export interface LegumeDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Legume'], meta: { name: 'Legume' } }
    /**
     * Find zero or one Legume that matches the filter.
     * @param {LegumeFindUniqueArgs} args - Arguments to find a Legume
     * @example
     * // Get one Legume
     * const legume = await prisma.legume.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends LegumeFindUniqueArgs>(args: SelectSubset<T, LegumeFindUniqueArgs<ExtArgs>>): Prisma__LegumeClient<$Result.GetResult<Prisma.$LegumePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Legume that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {LegumeFindUniqueOrThrowArgs} args - Arguments to find a Legume
     * @example
     * // Get one Legume
     * const legume = await prisma.legume.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends LegumeFindUniqueOrThrowArgs>(args: SelectSubset<T, LegumeFindUniqueOrThrowArgs<ExtArgs>>): Prisma__LegumeClient<$Result.GetResult<Prisma.$LegumePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Legume that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LegumeFindFirstArgs} args - Arguments to find a Legume
     * @example
     * // Get one Legume
     * const legume = await prisma.legume.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends LegumeFindFirstArgs>(args?: SelectSubset<T, LegumeFindFirstArgs<ExtArgs>>): Prisma__LegumeClient<$Result.GetResult<Prisma.$LegumePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Legume that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LegumeFindFirstOrThrowArgs} args - Arguments to find a Legume
     * @example
     * // Get one Legume
     * const legume = await prisma.legume.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends LegumeFindFirstOrThrowArgs>(args?: SelectSubset<T, LegumeFindFirstOrThrowArgs<ExtArgs>>): Prisma__LegumeClient<$Result.GetResult<Prisma.$LegumePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Legumes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LegumeFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Legumes
     * const legumes = await prisma.legume.findMany()
     * 
     * // Get first 10 Legumes
     * const legumes = await prisma.legume.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const legumeWithIdOnly = await prisma.legume.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends LegumeFindManyArgs>(args?: SelectSubset<T, LegumeFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LegumePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Legume.
     * @param {LegumeCreateArgs} args - Arguments to create a Legume.
     * @example
     * // Create one Legume
     * const Legume = await prisma.legume.create({
     *   data: {
     *     // ... data to create a Legume
     *   }
     * })
     * 
     */
    create<T extends LegumeCreateArgs>(args: SelectSubset<T, LegumeCreateArgs<ExtArgs>>): Prisma__LegumeClient<$Result.GetResult<Prisma.$LegumePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Legumes.
     * @param {LegumeCreateManyArgs} args - Arguments to create many Legumes.
     * @example
     * // Create many Legumes
     * const legume = await prisma.legume.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends LegumeCreateManyArgs>(args?: SelectSubset<T, LegumeCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Legume.
     * @param {LegumeDeleteArgs} args - Arguments to delete one Legume.
     * @example
     * // Delete one Legume
     * const Legume = await prisma.legume.delete({
     *   where: {
     *     // ... filter to delete one Legume
     *   }
     * })
     * 
     */
    delete<T extends LegumeDeleteArgs>(args: SelectSubset<T, LegumeDeleteArgs<ExtArgs>>): Prisma__LegumeClient<$Result.GetResult<Prisma.$LegumePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Legume.
     * @param {LegumeUpdateArgs} args - Arguments to update one Legume.
     * @example
     * // Update one Legume
     * const legume = await prisma.legume.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends LegumeUpdateArgs>(args: SelectSubset<T, LegumeUpdateArgs<ExtArgs>>): Prisma__LegumeClient<$Result.GetResult<Prisma.$LegumePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Legumes.
     * @param {LegumeDeleteManyArgs} args - Arguments to filter Legumes to delete.
     * @example
     * // Delete a few Legumes
     * const { count } = await prisma.legume.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends LegumeDeleteManyArgs>(args?: SelectSubset<T, LegumeDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Legumes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LegumeUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Legumes
     * const legume = await prisma.legume.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends LegumeUpdateManyArgs>(args: SelectSubset<T, LegumeUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Legume.
     * @param {LegumeUpsertArgs} args - Arguments to update or create a Legume.
     * @example
     * // Update or create a Legume
     * const legume = await prisma.legume.upsert({
     *   create: {
     *     // ... data to create a Legume
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Legume we want to update
     *   }
     * })
     */
    upsert<T extends LegumeUpsertArgs>(args: SelectSubset<T, LegumeUpsertArgs<ExtArgs>>): Prisma__LegumeClient<$Result.GetResult<Prisma.$LegumePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Legumes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LegumeCountArgs} args - Arguments to filter Legumes to count.
     * @example
     * // Count the number of Legumes
     * const count = await prisma.legume.count({
     *   where: {
     *     // ... the filter for the Legumes we want to count
     *   }
     * })
    **/
    count<T extends LegumeCountArgs>(
      args?: Subset<T, LegumeCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], LegumeCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Legume.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LegumeAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends LegumeAggregateArgs>(args: Subset<T, LegumeAggregateArgs>): Prisma.PrismaPromise<GetLegumeAggregateType<T>>

    /**
     * Group by Legume.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LegumeGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends LegumeGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: LegumeGroupByArgs['orderBy'] }
        : { orderBy?: LegumeGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, LegumeGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetLegumeGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Legume model
   */
  readonly fields: LegumeFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Legume.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__LegumeClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Legume model
   */
  interface LegumeFieldRefs {
    readonly id: FieldRef<"Legume", 'Int'>
    readonly name: FieldRef<"Legume", 'String'>
    readonly description: FieldRef<"Legume", 'String'>
    readonly isBean: FieldRef<"Legume", 'Boolean'>
    readonly isLentil: FieldRef<"Legume", 'Boolean'>
    readonly isPea: FieldRef<"Legume", 'Boolean'>
    readonly createdAt: FieldRef<"Legume", 'DateTime'>
    readonly updatedAt: FieldRef<"Legume", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Legume findUnique
   */
  export type LegumeFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Legume
     */
    select?: LegumeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Legume
     */
    omit?: LegumeOmit<ExtArgs> | null
    /**
     * Filter, which Legume to fetch.
     */
    where: LegumeWhereUniqueInput
  }

  /**
   * Legume findUniqueOrThrow
   */
  export type LegumeFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Legume
     */
    select?: LegumeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Legume
     */
    omit?: LegumeOmit<ExtArgs> | null
    /**
     * Filter, which Legume to fetch.
     */
    where: LegumeWhereUniqueInput
  }

  /**
   * Legume findFirst
   */
  export type LegumeFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Legume
     */
    select?: LegumeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Legume
     */
    omit?: LegumeOmit<ExtArgs> | null
    /**
     * Filter, which Legume to fetch.
     */
    where?: LegumeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Legumes to fetch.
     */
    orderBy?: LegumeOrderByWithRelationInput | LegumeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Legumes.
     */
    cursor?: LegumeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Legumes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Legumes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Legumes.
     */
    distinct?: LegumeScalarFieldEnum | LegumeScalarFieldEnum[]
  }

  /**
   * Legume findFirstOrThrow
   */
  export type LegumeFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Legume
     */
    select?: LegumeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Legume
     */
    omit?: LegumeOmit<ExtArgs> | null
    /**
     * Filter, which Legume to fetch.
     */
    where?: LegumeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Legumes to fetch.
     */
    orderBy?: LegumeOrderByWithRelationInput | LegumeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Legumes.
     */
    cursor?: LegumeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Legumes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Legumes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Legumes.
     */
    distinct?: LegumeScalarFieldEnum | LegumeScalarFieldEnum[]
  }

  /**
   * Legume findMany
   */
  export type LegumeFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Legume
     */
    select?: LegumeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Legume
     */
    omit?: LegumeOmit<ExtArgs> | null
    /**
     * Filter, which Legumes to fetch.
     */
    where?: LegumeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Legumes to fetch.
     */
    orderBy?: LegumeOrderByWithRelationInput | LegumeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Legumes.
     */
    cursor?: LegumeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Legumes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Legumes.
     */
    skip?: number
    distinct?: LegumeScalarFieldEnum | LegumeScalarFieldEnum[]
  }

  /**
   * Legume create
   */
  export type LegumeCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Legume
     */
    select?: LegumeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Legume
     */
    omit?: LegumeOmit<ExtArgs> | null
    /**
     * The data needed to create a Legume.
     */
    data: XOR<LegumeCreateInput, LegumeUncheckedCreateInput>
  }

  /**
   * Legume createMany
   */
  export type LegumeCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Legumes.
     */
    data: LegumeCreateManyInput | LegumeCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Legume update
   */
  export type LegumeUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Legume
     */
    select?: LegumeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Legume
     */
    omit?: LegumeOmit<ExtArgs> | null
    /**
     * The data needed to update a Legume.
     */
    data: XOR<LegumeUpdateInput, LegumeUncheckedUpdateInput>
    /**
     * Choose, which Legume to update.
     */
    where: LegumeWhereUniqueInput
  }

  /**
   * Legume updateMany
   */
  export type LegumeUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Legumes.
     */
    data: XOR<LegumeUpdateManyMutationInput, LegumeUncheckedUpdateManyInput>
    /**
     * Filter which Legumes to update
     */
    where?: LegumeWhereInput
    /**
     * Limit how many Legumes to update.
     */
    limit?: number
  }

  /**
   * Legume upsert
   */
  export type LegumeUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Legume
     */
    select?: LegumeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Legume
     */
    omit?: LegumeOmit<ExtArgs> | null
    /**
     * The filter to search for the Legume to update in case it exists.
     */
    where: LegumeWhereUniqueInput
    /**
     * In case the Legume found by the `where` argument doesn't exist, create a new Legume with this data.
     */
    create: XOR<LegumeCreateInput, LegumeUncheckedCreateInput>
    /**
     * In case the Legume was found with the provided `where` argument, update it with this data.
     */
    update: XOR<LegumeUpdateInput, LegumeUncheckedUpdateInput>
  }

  /**
   * Legume delete
   */
  export type LegumeDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Legume
     */
    select?: LegumeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Legume
     */
    omit?: LegumeOmit<ExtArgs> | null
    /**
     * Filter which Legume to delete.
     */
    where: LegumeWhereUniqueInput
  }

  /**
   * Legume deleteMany
   */
  export type LegumeDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Legumes to delete
     */
    where?: LegumeWhereInput
    /**
     * Limit how many Legumes to delete.
     */
    limit?: number
  }

  /**
   * Legume without action
   */
  export type LegumeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Legume
     */
    select?: LegumeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Legume
     */
    omit?: LegumeOmit<ExtArgs> | null
  }


  /**
   * Model Pasta
   */

  export type AggregatePasta = {
    _count: PastaCountAggregateOutputType | null
    _avg: PastaAvgAggregateOutputType | null
    _sum: PastaSumAggregateOutputType | null
    _min: PastaMinAggregateOutputType | null
    _max: PastaMaxAggregateOutputType | null
  }

  export type PastaAvgAggregateOutputType = {
    id: number | null
  }

  export type PastaSumAggregateOutputType = {
    id: number | null
  }

  export type PastaMinAggregateOutputType = {
    id: number | null
    name: string | null
    description: string | null
    shape: string | null
    isFresh: boolean | null
    isGlutenFree: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type PastaMaxAggregateOutputType = {
    id: number | null
    name: string | null
    description: string | null
    shape: string | null
    isFresh: boolean | null
    isGlutenFree: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type PastaCountAggregateOutputType = {
    id: number
    name: number
    description: number
    shape: number
    isFresh: number
    isGlutenFree: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type PastaAvgAggregateInputType = {
    id?: true
  }

  export type PastaSumAggregateInputType = {
    id?: true
  }

  export type PastaMinAggregateInputType = {
    id?: true
    name?: true
    description?: true
    shape?: true
    isFresh?: true
    isGlutenFree?: true
    createdAt?: true
    updatedAt?: true
  }

  export type PastaMaxAggregateInputType = {
    id?: true
    name?: true
    description?: true
    shape?: true
    isFresh?: true
    isGlutenFree?: true
    createdAt?: true
    updatedAt?: true
  }

  export type PastaCountAggregateInputType = {
    id?: true
    name?: true
    description?: true
    shape?: true
    isFresh?: true
    isGlutenFree?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type PastaAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Pasta to aggregate.
     */
    where?: PastaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Pastas to fetch.
     */
    orderBy?: PastaOrderByWithRelationInput | PastaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PastaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Pastas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Pastas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Pastas
    **/
    _count?: true | PastaCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PastaAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PastaSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PastaMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PastaMaxAggregateInputType
  }

  export type GetPastaAggregateType<T extends PastaAggregateArgs> = {
        [P in keyof T & keyof AggregatePasta]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePasta[P]>
      : GetScalarType<T[P], AggregatePasta[P]>
  }




  export type PastaGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PastaWhereInput
    orderBy?: PastaOrderByWithAggregationInput | PastaOrderByWithAggregationInput[]
    by: PastaScalarFieldEnum[] | PastaScalarFieldEnum
    having?: PastaScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PastaCountAggregateInputType | true
    _avg?: PastaAvgAggregateInputType
    _sum?: PastaSumAggregateInputType
    _min?: PastaMinAggregateInputType
    _max?: PastaMaxAggregateInputType
  }

  export type PastaGroupByOutputType = {
    id: number
    name: string
    description: string | null
    shape: string | null
    isFresh: boolean
    isGlutenFree: boolean
    createdAt: Date
    updatedAt: Date
    _count: PastaCountAggregateOutputType | null
    _avg: PastaAvgAggregateOutputType | null
    _sum: PastaSumAggregateOutputType | null
    _min: PastaMinAggregateOutputType | null
    _max: PastaMaxAggregateOutputType | null
  }

  type GetPastaGroupByPayload<T extends PastaGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PastaGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PastaGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PastaGroupByOutputType[P]>
            : GetScalarType<T[P], PastaGroupByOutputType[P]>
        }
      >
    >


  export type PastaSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    shape?: boolean
    isFresh?: boolean
    isGlutenFree?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["pasta"]>



  export type PastaSelectScalar = {
    id?: boolean
    name?: boolean
    description?: boolean
    shape?: boolean
    isFresh?: boolean
    isGlutenFree?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type PastaOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "description" | "shape" | "isFresh" | "isGlutenFree" | "createdAt" | "updatedAt", ExtArgs["result"]["pasta"]>

  export type $PastaPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Pasta"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      description: string | null
      shape: string | null
      isFresh: boolean
      isGlutenFree: boolean
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["pasta"]>
    composites: {}
  }

  type PastaGetPayload<S extends boolean | null | undefined | PastaDefaultArgs> = $Result.GetResult<Prisma.$PastaPayload, S>

  type PastaCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PastaFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PastaCountAggregateInputType | true
    }

  export interface PastaDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Pasta'], meta: { name: 'Pasta' } }
    /**
     * Find zero or one Pasta that matches the filter.
     * @param {PastaFindUniqueArgs} args - Arguments to find a Pasta
     * @example
     * // Get one Pasta
     * const pasta = await prisma.pasta.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PastaFindUniqueArgs>(args: SelectSubset<T, PastaFindUniqueArgs<ExtArgs>>): Prisma__PastaClient<$Result.GetResult<Prisma.$PastaPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Pasta that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PastaFindUniqueOrThrowArgs} args - Arguments to find a Pasta
     * @example
     * // Get one Pasta
     * const pasta = await prisma.pasta.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PastaFindUniqueOrThrowArgs>(args: SelectSubset<T, PastaFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PastaClient<$Result.GetResult<Prisma.$PastaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Pasta that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PastaFindFirstArgs} args - Arguments to find a Pasta
     * @example
     * // Get one Pasta
     * const pasta = await prisma.pasta.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PastaFindFirstArgs>(args?: SelectSubset<T, PastaFindFirstArgs<ExtArgs>>): Prisma__PastaClient<$Result.GetResult<Prisma.$PastaPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Pasta that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PastaFindFirstOrThrowArgs} args - Arguments to find a Pasta
     * @example
     * // Get one Pasta
     * const pasta = await prisma.pasta.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PastaFindFirstOrThrowArgs>(args?: SelectSubset<T, PastaFindFirstOrThrowArgs<ExtArgs>>): Prisma__PastaClient<$Result.GetResult<Prisma.$PastaPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Pastas that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PastaFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Pastas
     * const pastas = await prisma.pasta.findMany()
     * 
     * // Get first 10 Pastas
     * const pastas = await prisma.pasta.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const pastaWithIdOnly = await prisma.pasta.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PastaFindManyArgs>(args?: SelectSubset<T, PastaFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PastaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Pasta.
     * @param {PastaCreateArgs} args - Arguments to create a Pasta.
     * @example
     * // Create one Pasta
     * const Pasta = await prisma.pasta.create({
     *   data: {
     *     // ... data to create a Pasta
     *   }
     * })
     * 
     */
    create<T extends PastaCreateArgs>(args: SelectSubset<T, PastaCreateArgs<ExtArgs>>): Prisma__PastaClient<$Result.GetResult<Prisma.$PastaPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Pastas.
     * @param {PastaCreateManyArgs} args - Arguments to create many Pastas.
     * @example
     * // Create many Pastas
     * const pasta = await prisma.pasta.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PastaCreateManyArgs>(args?: SelectSubset<T, PastaCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Pasta.
     * @param {PastaDeleteArgs} args - Arguments to delete one Pasta.
     * @example
     * // Delete one Pasta
     * const Pasta = await prisma.pasta.delete({
     *   where: {
     *     // ... filter to delete one Pasta
     *   }
     * })
     * 
     */
    delete<T extends PastaDeleteArgs>(args: SelectSubset<T, PastaDeleteArgs<ExtArgs>>): Prisma__PastaClient<$Result.GetResult<Prisma.$PastaPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Pasta.
     * @param {PastaUpdateArgs} args - Arguments to update one Pasta.
     * @example
     * // Update one Pasta
     * const pasta = await prisma.pasta.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PastaUpdateArgs>(args: SelectSubset<T, PastaUpdateArgs<ExtArgs>>): Prisma__PastaClient<$Result.GetResult<Prisma.$PastaPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Pastas.
     * @param {PastaDeleteManyArgs} args - Arguments to filter Pastas to delete.
     * @example
     * // Delete a few Pastas
     * const { count } = await prisma.pasta.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PastaDeleteManyArgs>(args?: SelectSubset<T, PastaDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Pastas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PastaUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Pastas
     * const pasta = await prisma.pasta.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PastaUpdateManyArgs>(args: SelectSubset<T, PastaUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Pasta.
     * @param {PastaUpsertArgs} args - Arguments to update or create a Pasta.
     * @example
     * // Update or create a Pasta
     * const pasta = await prisma.pasta.upsert({
     *   create: {
     *     // ... data to create a Pasta
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Pasta we want to update
     *   }
     * })
     */
    upsert<T extends PastaUpsertArgs>(args: SelectSubset<T, PastaUpsertArgs<ExtArgs>>): Prisma__PastaClient<$Result.GetResult<Prisma.$PastaPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Pastas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PastaCountArgs} args - Arguments to filter Pastas to count.
     * @example
     * // Count the number of Pastas
     * const count = await prisma.pasta.count({
     *   where: {
     *     // ... the filter for the Pastas we want to count
     *   }
     * })
    **/
    count<T extends PastaCountArgs>(
      args?: Subset<T, PastaCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PastaCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Pasta.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PastaAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends PastaAggregateArgs>(args: Subset<T, PastaAggregateArgs>): Prisma.PrismaPromise<GetPastaAggregateType<T>>

    /**
     * Group by Pasta.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PastaGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends PastaGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PastaGroupByArgs['orderBy'] }
        : { orderBy?: PastaGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, PastaGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPastaGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Pasta model
   */
  readonly fields: PastaFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Pasta.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PastaClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Pasta model
   */
  interface PastaFieldRefs {
    readonly id: FieldRef<"Pasta", 'Int'>
    readonly name: FieldRef<"Pasta", 'String'>
    readonly description: FieldRef<"Pasta", 'String'>
    readonly shape: FieldRef<"Pasta", 'String'>
    readonly isFresh: FieldRef<"Pasta", 'Boolean'>
    readonly isGlutenFree: FieldRef<"Pasta", 'Boolean'>
    readonly createdAt: FieldRef<"Pasta", 'DateTime'>
    readonly updatedAt: FieldRef<"Pasta", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Pasta findUnique
   */
  export type PastaFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pasta
     */
    select?: PastaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pasta
     */
    omit?: PastaOmit<ExtArgs> | null
    /**
     * Filter, which Pasta to fetch.
     */
    where: PastaWhereUniqueInput
  }

  /**
   * Pasta findUniqueOrThrow
   */
  export type PastaFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pasta
     */
    select?: PastaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pasta
     */
    omit?: PastaOmit<ExtArgs> | null
    /**
     * Filter, which Pasta to fetch.
     */
    where: PastaWhereUniqueInput
  }

  /**
   * Pasta findFirst
   */
  export type PastaFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pasta
     */
    select?: PastaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pasta
     */
    omit?: PastaOmit<ExtArgs> | null
    /**
     * Filter, which Pasta to fetch.
     */
    where?: PastaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Pastas to fetch.
     */
    orderBy?: PastaOrderByWithRelationInput | PastaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Pastas.
     */
    cursor?: PastaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Pastas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Pastas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Pastas.
     */
    distinct?: PastaScalarFieldEnum | PastaScalarFieldEnum[]
  }

  /**
   * Pasta findFirstOrThrow
   */
  export type PastaFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pasta
     */
    select?: PastaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pasta
     */
    omit?: PastaOmit<ExtArgs> | null
    /**
     * Filter, which Pasta to fetch.
     */
    where?: PastaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Pastas to fetch.
     */
    orderBy?: PastaOrderByWithRelationInput | PastaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Pastas.
     */
    cursor?: PastaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Pastas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Pastas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Pastas.
     */
    distinct?: PastaScalarFieldEnum | PastaScalarFieldEnum[]
  }

  /**
   * Pasta findMany
   */
  export type PastaFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pasta
     */
    select?: PastaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pasta
     */
    omit?: PastaOmit<ExtArgs> | null
    /**
     * Filter, which Pastas to fetch.
     */
    where?: PastaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Pastas to fetch.
     */
    orderBy?: PastaOrderByWithRelationInput | PastaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Pastas.
     */
    cursor?: PastaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Pastas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Pastas.
     */
    skip?: number
    distinct?: PastaScalarFieldEnum | PastaScalarFieldEnum[]
  }

  /**
   * Pasta create
   */
  export type PastaCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pasta
     */
    select?: PastaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pasta
     */
    omit?: PastaOmit<ExtArgs> | null
    /**
     * The data needed to create a Pasta.
     */
    data: XOR<PastaCreateInput, PastaUncheckedCreateInput>
  }

  /**
   * Pasta createMany
   */
  export type PastaCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Pastas.
     */
    data: PastaCreateManyInput | PastaCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Pasta update
   */
  export type PastaUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pasta
     */
    select?: PastaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pasta
     */
    omit?: PastaOmit<ExtArgs> | null
    /**
     * The data needed to update a Pasta.
     */
    data: XOR<PastaUpdateInput, PastaUncheckedUpdateInput>
    /**
     * Choose, which Pasta to update.
     */
    where: PastaWhereUniqueInput
  }

  /**
   * Pasta updateMany
   */
  export type PastaUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Pastas.
     */
    data: XOR<PastaUpdateManyMutationInput, PastaUncheckedUpdateManyInput>
    /**
     * Filter which Pastas to update
     */
    where?: PastaWhereInput
    /**
     * Limit how many Pastas to update.
     */
    limit?: number
  }

  /**
   * Pasta upsert
   */
  export type PastaUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pasta
     */
    select?: PastaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pasta
     */
    omit?: PastaOmit<ExtArgs> | null
    /**
     * The filter to search for the Pasta to update in case it exists.
     */
    where: PastaWhereUniqueInput
    /**
     * In case the Pasta found by the `where` argument doesn't exist, create a new Pasta with this data.
     */
    create: XOR<PastaCreateInput, PastaUncheckedCreateInput>
    /**
     * In case the Pasta was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PastaUpdateInput, PastaUncheckedUpdateInput>
  }

  /**
   * Pasta delete
   */
  export type PastaDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pasta
     */
    select?: PastaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pasta
     */
    omit?: PastaOmit<ExtArgs> | null
    /**
     * Filter which Pasta to delete.
     */
    where: PastaWhereUniqueInput
  }

  /**
   * Pasta deleteMany
   */
  export type PastaDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Pastas to delete
     */
    where?: PastaWhereInput
    /**
     * Limit how many Pastas to delete.
     */
    limit?: number
  }

  /**
   * Pasta without action
   */
  export type PastaDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pasta
     */
    select?: PastaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pasta
     */
    omit?: PastaOmit<ExtArgs> | null
  }


  /**
   * Model Bread
   */

  export type AggregateBread = {
    _count: BreadCountAggregateOutputType | null
    _avg: BreadAvgAggregateOutputType | null
    _sum: BreadSumAggregateOutputType | null
    _min: BreadMinAggregateOutputType | null
    _max: BreadMaxAggregateOutputType | null
  }

  export type BreadAvgAggregateOutputType = {
    id: number | null
  }

  export type BreadSumAggregateOutputType = {
    id: number | null
  }

  export type BreadMinAggregateOutputType = {
    id: number | null
    name: string | null
    description: string | null
    category: string | null
    isGlutenFree: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type BreadMaxAggregateOutputType = {
    id: number | null
    name: string | null
    description: string | null
    category: string | null
    isGlutenFree: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type BreadCountAggregateOutputType = {
    id: number
    name: number
    description: number
    category: number
    isGlutenFree: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type BreadAvgAggregateInputType = {
    id?: true
  }

  export type BreadSumAggregateInputType = {
    id?: true
  }

  export type BreadMinAggregateInputType = {
    id?: true
    name?: true
    description?: true
    category?: true
    isGlutenFree?: true
    createdAt?: true
    updatedAt?: true
  }

  export type BreadMaxAggregateInputType = {
    id?: true
    name?: true
    description?: true
    category?: true
    isGlutenFree?: true
    createdAt?: true
    updatedAt?: true
  }

  export type BreadCountAggregateInputType = {
    id?: true
    name?: true
    description?: true
    category?: true
    isGlutenFree?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type BreadAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Bread to aggregate.
     */
    where?: BreadWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Breads to fetch.
     */
    orderBy?: BreadOrderByWithRelationInput | BreadOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: BreadWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Breads from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Breads.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Breads
    **/
    _count?: true | BreadCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: BreadAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: BreadSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: BreadMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: BreadMaxAggregateInputType
  }

  export type GetBreadAggregateType<T extends BreadAggregateArgs> = {
        [P in keyof T & keyof AggregateBread]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateBread[P]>
      : GetScalarType<T[P], AggregateBread[P]>
  }




  export type BreadGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BreadWhereInput
    orderBy?: BreadOrderByWithAggregationInput | BreadOrderByWithAggregationInput[]
    by: BreadScalarFieldEnum[] | BreadScalarFieldEnum
    having?: BreadScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: BreadCountAggregateInputType | true
    _avg?: BreadAvgAggregateInputType
    _sum?: BreadSumAggregateInputType
    _min?: BreadMinAggregateInputType
    _max?: BreadMaxAggregateInputType
  }

  export type BreadGroupByOutputType = {
    id: number
    name: string
    description: string | null
    category: string | null
    isGlutenFree: boolean
    createdAt: Date
    updatedAt: Date
    _count: BreadCountAggregateOutputType | null
    _avg: BreadAvgAggregateOutputType | null
    _sum: BreadSumAggregateOutputType | null
    _min: BreadMinAggregateOutputType | null
    _max: BreadMaxAggregateOutputType | null
  }

  type GetBreadGroupByPayload<T extends BreadGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<BreadGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof BreadGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], BreadGroupByOutputType[P]>
            : GetScalarType<T[P], BreadGroupByOutputType[P]>
        }
      >
    >


  export type BreadSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    category?: boolean
    isGlutenFree?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["bread"]>



  export type BreadSelectScalar = {
    id?: boolean
    name?: boolean
    description?: boolean
    category?: boolean
    isGlutenFree?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type BreadOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "description" | "category" | "isGlutenFree" | "createdAt" | "updatedAt", ExtArgs["result"]["bread"]>

  export type $BreadPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Bread"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      description: string | null
      category: string | null
      isGlutenFree: boolean
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["bread"]>
    composites: {}
  }

  type BreadGetPayload<S extends boolean | null | undefined | BreadDefaultArgs> = $Result.GetResult<Prisma.$BreadPayload, S>

  type BreadCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<BreadFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: BreadCountAggregateInputType | true
    }

  export interface BreadDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Bread'], meta: { name: 'Bread' } }
    /**
     * Find zero or one Bread that matches the filter.
     * @param {BreadFindUniqueArgs} args - Arguments to find a Bread
     * @example
     * // Get one Bread
     * const bread = await prisma.bread.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends BreadFindUniqueArgs>(args: SelectSubset<T, BreadFindUniqueArgs<ExtArgs>>): Prisma__BreadClient<$Result.GetResult<Prisma.$BreadPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Bread that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {BreadFindUniqueOrThrowArgs} args - Arguments to find a Bread
     * @example
     * // Get one Bread
     * const bread = await prisma.bread.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends BreadFindUniqueOrThrowArgs>(args: SelectSubset<T, BreadFindUniqueOrThrowArgs<ExtArgs>>): Prisma__BreadClient<$Result.GetResult<Prisma.$BreadPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Bread that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BreadFindFirstArgs} args - Arguments to find a Bread
     * @example
     * // Get one Bread
     * const bread = await prisma.bread.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends BreadFindFirstArgs>(args?: SelectSubset<T, BreadFindFirstArgs<ExtArgs>>): Prisma__BreadClient<$Result.GetResult<Prisma.$BreadPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Bread that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BreadFindFirstOrThrowArgs} args - Arguments to find a Bread
     * @example
     * // Get one Bread
     * const bread = await prisma.bread.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends BreadFindFirstOrThrowArgs>(args?: SelectSubset<T, BreadFindFirstOrThrowArgs<ExtArgs>>): Prisma__BreadClient<$Result.GetResult<Prisma.$BreadPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Breads that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BreadFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Breads
     * const breads = await prisma.bread.findMany()
     * 
     * // Get first 10 Breads
     * const breads = await prisma.bread.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const breadWithIdOnly = await prisma.bread.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends BreadFindManyArgs>(args?: SelectSubset<T, BreadFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BreadPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Bread.
     * @param {BreadCreateArgs} args - Arguments to create a Bread.
     * @example
     * // Create one Bread
     * const Bread = await prisma.bread.create({
     *   data: {
     *     // ... data to create a Bread
     *   }
     * })
     * 
     */
    create<T extends BreadCreateArgs>(args: SelectSubset<T, BreadCreateArgs<ExtArgs>>): Prisma__BreadClient<$Result.GetResult<Prisma.$BreadPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Breads.
     * @param {BreadCreateManyArgs} args - Arguments to create many Breads.
     * @example
     * // Create many Breads
     * const bread = await prisma.bread.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends BreadCreateManyArgs>(args?: SelectSubset<T, BreadCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Bread.
     * @param {BreadDeleteArgs} args - Arguments to delete one Bread.
     * @example
     * // Delete one Bread
     * const Bread = await prisma.bread.delete({
     *   where: {
     *     // ... filter to delete one Bread
     *   }
     * })
     * 
     */
    delete<T extends BreadDeleteArgs>(args: SelectSubset<T, BreadDeleteArgs<ExtArgs>>): Prisma__BreadClient<$Result.GetResult<Prisma.$BreadPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Bread.
     * @param {BreadUpdateArgs} args - Arguments to update one Bread.
     * @example
     * // Update one Bread
     * const bread = await prisma.bread.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends BreadUpdateArgs>(args: SelectSubset<T, BreadUpdateArgs<ExtArgs>>): Prisma__BreadClient<$Result.GetResult<Prisma.$BreadPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Breads.
     * @param {BreadDeleteManyArgs} args - Arguments to filter Breads to delete.
     * @example
     * // Delete a few Breads
     * const { count } = await prisma.bread.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends BreadDeleteManyArgs>(args?: SelectSubset<T, BreadDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Breads.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BreadUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Breads
     * const bread = await prisma.bread.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends BreadUpdateManyArgs>(args: SelectSubset<T, BreadUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Bread.
     * @param {BreadUpsertArgs} args - Arguments to update or create a Bread.
     * @example
     * // Update or create a Bread
     * const bread = await prisma.bread.upsert({
     *   create: {
     *     // ... data to create a Bread
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Bread we want to update
     *   }
     * })
     */
    upsert<T extends BreadUpsertArgs>(args: SelectSubset<T, BreadUpsertArgs<ExtArgs>>): Prisma__BreadClient<$Result.GetResult<Prisma.$BreadPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Breads.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BreadCountArgs} args - Arguments to filter Breads to count.
     * @example
     * // Count the number of Breads
     * const count = await prisma.bread.count({
     *   where: {
     *     // ... the filter for the Breads we want to count
     *   }
     * })
    **/
    count<T extends BreadCountArgs>(
      args?: Subset<T, BreadCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], BreadCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Bread.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BreadAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends BreadAggregateArgs>(args: Subset<T, BreadAggregateArgs>): Prisma.PrismaPromise<GetBreadAggregateType<T>>

    /**
     * Group by Bread.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BreadGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends BreadGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: BreadGroupByArgs['orderBy'] }
        : { orderBy?: BreadGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, BreadGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetBreadGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Bread model
   */
  readonly fields: BreadFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Bread.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__BreadClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Bread model
   */
  interface BreadFieldRefs {
    readonly id: FieldRef<"Bread", 'Int'>
    readonly name: FieldRef<"Bread", 'String'>
    readonly description: FieldRef<"Bread", 'String'>
    readonly category: FieldRef<"Bread", 'String'>
    readonly isGlutenFree: FieldRef<"Bread", 'Boolean'>
    readonly createdAt: FieldRef<"Bread", 'DateTime'>
    readonly updatedAt: FieldRef<"Bread", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Bread findUnique
   */
  export type BreadFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Bread
     */
    select?: BreadSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Bread
     */
    omit?: BreadOmit<ExtArgs> | null
    /**
     * Filter, which Bread to fetch.
     */
    where: BreadWhereUniqueInput
  }

  /**
   * Bread findUniqueOrThrow
   */
  export type BreadFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Bread
     */
    select?: BreadSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Bread
     */
    omit?: BreadOmit<ExtArgs> | null
    /**
     * Filter, which Bread to fetch.
     */
    where: BreadWhereUniqueInput
  }

  /**
   * Bread findFirst
   */
  export type BreadFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Bread
     */
    select?: BreadSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Bread
     */
    omit?: BreadOmit<ExtArgs> | null
    /**
     * Filter, which Bread to fetch.
     */
    where?: BreadWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Breads to fetch.
     */
    orderBy?: BreadOrderByWithRelationInput | BreadOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Breads.
     */
    cursor?: BreadWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Breads from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Breads.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Breads.
     */
    distinct?: BreadScalarFieldEnum | BreadScalarFieldEnum[]
  }

  /**
   * Bread findFirstOrThrow
   */
  export type BreadFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Bread
     */
    select?: BreadSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Bread
     */
    omit?: BreadOmit<ExtArgs> | null
    /**
     * Filter, which Bread to fetch.
     */
    where?: BreadWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Breads to fetch.
     */
    orderBy?: BreadOrderByWithRelationInput | BreadOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Breads.
     */
    cursor?: BreadWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Breads from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Breads.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Breads.
     */
    distinct?: BreadScalarFieldEnum | BreadScalarFieldEnum[]
  }

  /**
   * Bread findMany
   */
  export type BreadFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Bread
     */
    select?: BreadSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Bread
     */
    omit?: BreadOmit<ExtArgs> | null
    /**
     * Filter, which Breads to fetch.
     */
    where?: BreadWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Breads to fetch.
     */
    orderBy?: BreadOrderByWithRelationInput | BreadOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Breads.
     */
    cursor?: BreadWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Breads from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Breads.
     */
    skip?: number
    distinct?: BreadScalarFieldEnum | BreadScalarFieldEnum[]
  }

  /**
   * Bread create
   */
  export type BreadCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Bread
     */
    select?: BreadSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Bread
     */
    omit?: BreadOmit<ExtArgs> | null
    /**
     * The data needed to create a Bread.
     */
    data: XOR<BreadCreateInput, BreadUncheckedCreateInput>
  }

  /**
   * Bread createMany
   */
  export type BreadCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Breads.
     */
    data: BreadCreateManyInput | BreadCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Bread update
   */
  export type BreadUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Bread
     */
    select?: BreadSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Bread
     */
    omit?: BreadOmit<ExtArgs> | null
    /**
     * The data needed to update a Bread.
     */
    data: XOR<BreadUpdateInput, BreadUncheckedUpdateInput>
    /**
     * Choose, which Bread to update.
     */
    where: BreadWhereUniqueInput
  }

  /**
   * Bread updateMany
   */
  export type BreadUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Breads.
     */
    data: XOR<BreadUpdateManyMutationInput, BreadUncheckedUpdateManyInput>
    /**
     * Filter which Breads to update
     */
    where?: BreadWhereInput
    /**
     * Limit how many Breads to update.
     */
    limit?: number
  }

  /**
   * Bread upsert
   */
  export type BreadUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Bread
     */
    select?: BreadSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Bread
     */
    omit?: BreadOmit<ExtArgs> | null
    /**
     * The filter to search for the Bread to update in case it exists.
     */
    where: BreadWhereUniqueInput
    /**
     * In case the Bread found by the `where` argument doesn't exist, create a new Bread with this data.
     */
    create: XOR<BreadCreateInput, BreadUncheckedCreateInput>
    /**
     * In case the Bread was found with the provided `where` argument, update it with this data.
     */
    update: XOR<BreadUpdateInput, BreadUncheckedUpdateInput>
  }

  /**
   * Bread delete
   */
  export type BreadDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Bread
     */
    select?: BreadSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Bread
     */
    omit?: BreadOmit<ExtArgs> | null
    /**
     * Filter which Bread to delete.
     */
    where: BreadWhereUniqueInput
  }

  /**
   * Bread deleteMany
   */
  export type BreadDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Breads to delete
     */
    where?: BreadWhereInput
    /**
     * Limit how many Breads to delete.
     */
    limit?: number
  }

  /**
   * Bread without action
   */
  export type BreadDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Bread
     */
    select?: BreadSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Bread
     */
    omit?: BreadOmit<ExtArgs> | null
  }


  /**
   * Model OilAndFat
   */

  export type AggregateOilAndFat = {
    _count: OilAndFatCountAggregateOutputType | null
    _avg: OilAndFatAvgAggregateOutputType | null
    _sum: OilAndFatSumAggregateOutputType | null
    _min: OilAndFatMinAggregateOutputType | null
    _max: OilAndFatMaxAggregateOutputType | null
  }

  export type OilAndFatAvgAggregateOutputType = {
    id: number | null
    smokePoint: number | null
  }

  export type OilAndFatSumAggregateOutputType = {
    id: number | null
    smokePoint: number | null
  }

  export type OilAndFatMinAggregateOutputType = {
    id: number | null
    name: string | null
    description: string | null
    source: string | null
    smokePoint: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type OilAndFatMaxAggregateOutputType = {
    id: number | null
    name: string | null
    description: string | null
    source: string | null
    smokePoint: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type OilAndFatCountAggregateOutputType = {
    id: number
    name: number
    description: number
    source: number
    smokePoint: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type OilAndFatAvgAggregateInputType = {
    id?: true
    smokePoint?: true
  }

  export type OilAndFatSumAggregateInputType = {
    id?: true
    smokePoint?: true
  }

  export type OilAndFatMinAggregateInputType = {
    id?: true
    name?: true
    description?: true
    source?: true
    smokePoint?: true
    createdAt?: true
    updatedAt?: true
  }

  export type OilAndFatMaxAggregateInputType = {
    id?: true
    name?: true
    description?: true
    source?: true
    smokePoint?: true
    createdAt?: true
    updatedAt?: true
  }

  export type OilAndFatCountAggregateInputType = {
    id?: true
    name?: true
    description?: true
    source?: true
    smokePoint?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type OilAndFatAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which OilAndFat to aggregate.
     */
    where?: OilAndFatWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of OilAndFats to fetch.
     */
    orderBy?: OilAndFatOrderByWithRelationInput | OilAndFatOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: OilAndFatWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` OilAndFats from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` OilAndFats.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned OilAndFats
    **/
    _count?: true | OilAndFatCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: OilAndFatAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: OilAndFatSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: OilAndFatMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: OilAndFatMaxAggregateInputType
  }

  export type GetOilAndFatAggregateType<T extends OilAndFatAggregateArgs> = {
        [P in keyof T & keyof AggregateOilAndFat]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateOilAndFat[P]>
      : GetScalarType<T[P], AggregateOilAndFat[P]>
  }




  export type OilAndFatGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: OilAndFatWhereInput
    orderBy?: OilAndFatOrderByWithAggregationInput | OilAndFatOrderByWithAggregationInput[]
    by: OilAndFatScalarFieldEnum[] | OilAndFatScalarFieldEnum
    having?: OilAndFatScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: OilAndFatCountAggregateInputType | true
    _avg?: OilAndFatAvgAggregateInputType
    _sum?: OilAndFatSumAggregateInputType
    _min?: OilAndFatMinAggregateInputType
    _max?: OilAndFatMaxAggregateInputType
  }

  export type OilAndFatGroupByOutputType = {
    id: number
    name: string
    description: string | null
    source: string | null
    smokePoint: number | null
    createdAt: Date
    updatedAt: Date
    _count: OilAndFatCountAggregateOutputType | null
    _avg: OilAndFatAvgAggregateOutputType | null
    _sum: OilAndFatSumAggregateOutputType | null
    _min: OilAndFatMinAggregateOutputType | null
    _max: OilAndFatMaxAggregateOutputType | null
  }

  type GetOilAndFatGroupByPayload<T extends OilAndFatGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<OilAndFatGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof OilAndFatGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], OilAndFatGroupByOutputType[P]>
            : GetScalarType<T[P], OilAndFatGroupByOutputType[P]>
        }
      >
    >


  export type OilAndFatSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    source?: boolean
    smokePoint?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["oilAndFat"]>



  export type OilAndFatSelectScalar = {
    id?: boolean
    name?: boolean
    description?: boolean
    source?: boolean
    smokePoint?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type OilAndFatOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "description" | "source" | "smokePoint" | "createdAt" | "updatedAt", ExtArgs["result"]["oilAndFat"]>

  export type $OilAndFatPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "OilAndFat"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      description: string | null
      source: string | null
      smokePoint: number | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["oilAndFat"]>
    composites: {}
  }

  type OilAndFatGetPayload<S extends boolean | null | undefined | OilAndFatDefaultArgs> = $Result.GetResult<Prisma.$OilAndFatPayload, S>

  type OilAndFatCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<OilAndFatFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: OilAndFatCountAggregateInputType | true
    }

  export interface OilAndFatDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['OilAndFat'], meta: { name: 'OilAndFat' } }
    /**
     * Find zero or one OilAndFat that matches the filter.
     * @param {OilAndFatFindUniqueArgs} args - Arguments to find a OilAndFat
     * @example
     * // Get one OilAndFat
     * const oilAndFat = await prisma.oilAndFat.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends OilAndFatFindUniqueArgs>(args: SelectSubset<T, OilAndFatFindUniqueArgs<ExtArgs>>): Prisma__OilAndFatClient<$Result.GetResult<Prisma.$OilAndFatPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one OilAndFat that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {OilAndFatFindUniqueOrThrowArgs} args - Arguments to find a OilAndFat
     * @example
     * // Get one OilAndFat
     * const oilAndFat = await prisma.oilAndFat.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends OilAndFatFindUniqueOrThrowArgs>(args: SelectSubset<T, OilAndFatFindUniqueOrThrowArgs<ExtArgs>>): Prisma__OilAndFatClient<$Result.GetResult<Prisma.$OilAndFatPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first OilAndFat that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OilAndFatFindFirstArgs} args - Arguments to find a OilAndFat
     * @example
     * // Get one OilAndFat
     * const oilAndFat = await prisma.oilAndFat.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends OilAndFatFindFirstArgs>(args?: SelectSubset<T, OilAndFatFindFirstArgs<ExtArgs>>): Prisma__OilAndFatClient<$Result.GetResult<Prisma.$OilAndFatPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first OilAndFat that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OilAndFatFindFirstOrThrowArgs} args - Arguments to find a OilAndFat
     * @example
     * // Get one OilAndFat
     * const oilAndFat = await prisma.oilAndFat.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends OilAndFatFindFirstOrThrowArgs>(args?: SelectSubset<T, OilAndFatFindFirstOrThrowArgs<ExtArgs>>): Prisma__OilAndFatClient<$Result.GetResult<Prisma.$OilAndFatPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more OilAndFats that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OilAndFatFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all OilAndFats
     * const oilAndFats = await prisma.oilAndFat.findMany()
     * 
     * // Get first 10 OilAndFats
     * const oilAndFats = await prisma.oilAndFat.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const oilAndFatWithIdOnly = await prisma.oilAndFat.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends OilAndFatFindManyArgs>(args?: SelectSubset<T, OilAndFatFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OilAndFatPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a OilAndFat.
     * @param {OilAndFatCreateArgs} args - Arguments to create a OilAndFat.
     * @example
     * // Create one OilAndFat
     * const OilAndFat = await prisma.oilAndFat.create({
     *   data: {
     *     // ... data to create a OilAndFat
     *   }
     * })
     * 
     */
    create<T extends OilAndFatCreateArgs>(args: SelectSubset<T, OilAndFatCreateArgs<ExtArgs>>): Prisma__OilAndFatClient<$Result.GetResult<Prisma.$OilAndFatPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many OilAndFats.
     * @param {OilAndFatCreateManyArgs} args - Arguments to create many OilAndFats.
     * @example
     * // Create many OilAndFats
     * const oilAndFat = await prisma.oilAndFat.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends OilAndFatCreateManyArgs>(args?: SelectSubset<T, OilAndFatCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a OilAndFat.
     * @param {OilAndFatDeleteArgs} args - Arguments to delete one OilAndFat.
     * @example
     * // Delete one OilAndFat
     * const OilAndFat = await prisma.oilAndFat.delete({
     *   where: {
     *     // ... filter to delete one OilAndFat
     *   }
     * })
     * 
     */
    delete<T extends OilAndFatDeleteArgs>(args: SelectSubset<T, OilAndFatDeleteArgs<ExtArgs>>): Prisma__OilAndFatClient<$Result.GetResult<Prisma.$OilAndFatPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one OilAndFat.
     * @param {OilAndFatUpdateArgs} args - Arguments to update one OilAndFat.
     * @example
     * // Update one OilAndFat
     * const oilAndFat = await prisma.oilAndFat.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends OilAndFatUpdateArgs>(args: SelectSubset<T, OilAndFatUpdateArgs<ExtArgs>>): Prisma__OilAndFatClient<$Result.GetResult<Prisma.$OilAndFatPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more OilAndFats.
     * @param {OilAndFatDeleteManyArgs} args - Arguments to filter OilAndFats to delete.
     * @example
     * // Delete a few OilAndFats
     * const { count } = await prisma.oilAndFat.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends OilAndFatDeleteManyArgs>(args?: SelectSubset<T, OilAndFatDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more OilAndFats.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OilAndFatUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many OilAndFats
     * const oilAndFat = await prisma.oilAndFat.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends OilAndFatUpdateManyArgs>(args: SelectSubset<T, OilAndFatUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one OilAndFat.
     * @param {OilAndFatUpsertArgs} args - Arguments to update or create a OilAndFat.
     * @example
     * // Update or create a OilAndFat
     * const oilAndFat = await prisma.oilAndFat.upsert({
     *   create: {
     *     // ... data to create a OilAndFat
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the OilAndFat we want to update
     *   }
     * })
     */
    upsert<T extends OilAndFatUpsertArgs>(args: SelectSubset<T, OilAndFatUpsertArgs<ExtArgs>>): Prisma__OilAndFatClient<$Result.GetResult<Prisma.$OilAndFatPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of OilAndFats.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OilAndFatCountArgs} args - Arguments to filter OilAndFats to count.
     * @example
     * // Count the number of OilAndFats
     * const count = await prisma.oilAndFat.count({
     *   where: {
     *     // ... the filter for the OilAndFats we want to count
     *   }
     * })
    **/
    count<T extends OilAndFatCountArgs>(
      args?: Subset<T, OilAndFatCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], OilAndFatCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a OilAndFat.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OilAndFatAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends OilAndFatAggregateArgs>(args: Subset<T, OilAndFatAggregateArgs>): Prisma.PrismaPromise<GetOilAndFatAggregateType<T>>

    /**
     * Group by OilAndFat.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OilAndFatGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends OilAndFatGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: OilAndFatGroupByArgs['orderBy'] }
        : { orderBy?: OilAndFatGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, OilAndFatGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetOilAndFatGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the OilAndFat model
   */
  readonly fields: OilAndFatFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for OilAndFat.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__OilAndFatClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the OilAndFat model
   */
  interface OilAndFatFieldRefs {
    readonly id: FieldRef<"OilAndFat", 'Int'>
    readonly name: FieldRef<"OilAndFat", 'String'>
    readonly description: FieldRef<"OilAndFat", 'String'>
    readonly source: FieldRef<"OilAndFat", 'String'>
    readonly smokePoint: FieldRef<"OilAndFat", 'Int'>
    readonly createdAt: FieldRef<"OilAndFat", 'DateTime'>
    readonly updatedAt: FieldRef<"OilAndFat", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * OilAndFat findUnique
   */
  export type OilAndFatFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OilAndFat
     */
    select?: OilAndFatSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OilAndFat
     */
    omit?: OilAndFatOmit<ExtArgs> | null
    /**
     * Filter, which OilAndFat to fetch.
     */
    where: OilAndFatWhereUniqueInput
  }

  /**
   * OilAndFat findUniqueOrThrow
   */
  export type OilAndFatFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OilAndFat
     */
    select?: OilAndFatSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OilAndFat
     */
    omit?: OilAndFatOmit<ExtArgs> | null
    /**
     * Filter, which OilAndFat to fetch.
     */
    where: OilAndFatWhereUniqueInput
  }

  /**
   * OilAndFat findFirst
   */
  export type OilAndFatFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OilAndFat
     */
    select?: OilAndFatSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OilAndFat
     */
    omit?: OilAndFatOmit<ExtArgs> | null
    /**
     * Filter, which OilAndFat to fetch.
     */
    where?: OilAndFatWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of OilAndFats to fetch.
     */
    orderBy?: OilAndFatOrderByWithRelationInput | OilAndFatOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for OilAndFats.
     */
    cursor?: OilAndFatWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` OilAndFats from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` OilAndFats.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of OilAndFats.
     */
    distinct?: OilAndFatScalarFieldEnum | OilAndFatScalarFieldEnum[]
  }

  /**
   * OilAndFat findFirstOrThrow
   */
  export type OilAndFatFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OilAndFat
     */
    select?: OilAndFatSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OilAndFat
     */
    omit?: OilAndFatOmit<ExtArgs> | null
    /**
     * Filter, which OilAndFat to fetch.
     */
    where?: OilAndFatWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of OilAndFats to fetch.
     */
    orderBy?: OilAndFatOrderByWithRelationInput | OilAndFatOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for OilAndFats.
     */
    cursor?: OilAndFatWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` OilAndFats from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` OilAndFats.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of OilAndFats.
     */
    distinct?: OilAndFatScalarFieldEnum | OilAndFatScalarFieldEnum[]
  }

  /**
   * OilAndFat findMany
   */
  export type OilAndFatFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OilAndFat
     */
    select?: OilAndFatSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OilAndFat
     */
    omit?: OilAndFatOmit<ExtArgs> | null
    /**
     * Filter, which OilAndFats to fetch.
     */
    where?: OilAndFatWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of OilAndFats to fetch.
     */
    orderBy?: OilAndFatOrderByWithRelationInput | OilAndFatOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing OilAndFats.
     */
    cursor?: OilAndFatWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` OilAndFats from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` OilAndFats.
     */
    skip?: number
    distinct?: OilAndFatScalarFieldEnum | OilAndFatScalarFieldEnum[]
  }

  /**
   * OilAndFat create
   */
  export type OilAndFatCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OilAndFat
     */
    select?: OilAndFatSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OilAndFat
     */
    omit?: OilAndFatOmit<ExtArgs> | null
    /**
     * The data needed to create a OilAndFat.
     */
    data: XOR<OilAndFatCreateInput, OilAndFatUncheckedCreateInput>
  }

  /**
   * OilAndFat createMany
   */
  export type OilAndFatCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many OilAndFats.
     */
    data: OilAndFatCreateManyInput | OilAndFatCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * OilAndFat update
   */
  export type OilAndFatUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OilAndFat
     */
    select?: OilAndFatSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OilAndFat
     */
    omit?: OilAndFatOmit<ExtArgs> | null
    /**
     * The data needed to update a OilAndFat.
     */
    data: XOR<OilAndFatUpdateInput, OilAndFatUncheckedUpdateInput>
    /**
     * Choose, which OilAndFat to update.
     */
    where: OilAndFatWhereUniqueInput
  }

  /**
   * OilAndFat updateMany
   */
  export type OilAndFatUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update OilAndFats.
     */
    data: XOR<OilAndFatUpdateManyMutationInput, OilAndFatUncheckedUpdateManyInput>
    /**
     * Filter which OilAndFats to update
     */
    where?: OilAndFatWhereInput
    /**
     * Limit how many OilAndFats to update.
     */
    limit?: number
  }

  /**
   * OilAndFat upsert
   */
  export type OilAndFatUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OilAndFat
     */
    select?: OilAndFatSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OilAndFat
     */
    omit?: OilAndFatOmit<ExtArgs> | null
    /**
     * The filter to search for the OilAndFat to update in case it exists.
     */
    where: OilAndFatWhereUniqueInput
    /**
     * In case the OilAndFat found by the `where` argument doesn't exist, create a new OilAndFat with this data.
     */
    create: XOR<OilAndFatCreateInput, OilAndFatUncheckedCreateInput>
    /**
     * In case the OilAndFat was found with the provided `where` argument, update it with this data.
     */
    update: XOR<OilAndFatUpdateInput, OilAndFatUncheckedUpdateInput>
  }

  /**
   * OilAndFat delete
   */
  export type OilAndFatDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OilAndFat
     */
    select?: OilAndFatSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OilAndFat
     */
    omit?: OilAndFatOmit<ExtArgs> | null
    /**
     * Filter which OilAndFat to delete.
     */
    where: OilAndFatWhereUniqueInput
  }

  /**
   * OilAndFat deleteMany
   */
  export type OilAndFatDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which OilAndFats to delete
     */
    where?: OilAndFatWhereInput
    /**
     * Limit how many OilAndFats to delete.
     */
    limit?: number
  }

  /**
   * OilAndFat without action
   */
  export type OilAndFatDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OilAndFat
     */
    select?: OilAndFatSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OilAndFat
     */
    omit?: OilAndFatOmit<ExtArgs> | null
  }


  /**
   * Model Condiment
   */

  export type AggregateCondiment = {
    _count: CondimentCountAggregateOutputType | null
    _avg: CondimentAvgAggregateOutputType | null
    _sum: CondimentSumAggregateOutputType | null
    _min: CondimentMinAggregateOutputType | null
    _max: CondimentMaxAggregateOutputType | null
  }

  export type CondimentAvgAggregateOutputType = {
    id: number | null
  }

  export type CondimentSumAggregateOutputType = {
    id: number | null
  }

  export type CondimentMinAggregateOutputType = {
    id: number | null
    name: string | null
    description: string | null
    category: string | null
    isSpicy: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type CondimentMaxAggregateOutputType = {
    id: number | null
    name: string | null
    description: string | null
    category: string | null
    isSpicy: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type CondimentCountAggregateOutputType = {
    id: number
    name: number
    description: number
    category: number
    isSpicy: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type CondimentAvgAggregateInputType = {
    id?: true
  }

  export type CondimentSumAggregateInputType = {
    id?: true
  }

  export type CondimentMinAggregateInputType = {
    id?: true
    name?: true
    description?: true
    category?: true
    isSpicy?: true
    createdAt?: true
    updatedAt?: true
  }

  export type CondimentMaxAggregateInputType = {
    id?: true
    name?: true
    description?: true
    category?: true
    isSpicy?: true
    createdAt?: true
    updatedAt?: true
  }

  export type CondimentCountAggregateInputType = {
    id?: true
    name?: true
    description?: true
    category?: true
    isSpicy?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type CondimentAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Condiment to aggregate.
     */
    where?: CondimentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Condiments to fetch.
     */
    orderBy?: CondimentOrderByWithRelationInput | CondimentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CondimentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Condiments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Condiments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Condiments
    **/
    _count?: true | CondimentCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CondimentAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CondimentSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CondimentMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CondimentMaxAggregateInputType
  }

  export type GetCondimentAggregateType<T extends CondimentAggregateArgs> = {
        [P in keyof T & keyof AggregateCondiment]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCondiment[P]>
      : GetScalarType<T[P], AggregateCondiment[P]>
  }




  export type CondimentGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CondimentWhereInput
    orderBy?: CondimentOrderByWithAggregationInput | CondimentOrderByWithAggregationInput[]
    by: CondimentScalarFieldEnum[] | CondimentScalarFieldEnum
    having?: CondimentScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CondimentCountAggregateInputType | true
    _avg?: CondimentAvgAggregateInputType
    _sum?: CondimentSumAggregateInputType
    _min?: CondimentMinAggregateInputType
    _max?: CondimentMaxAggregateInputType
  }

  export type CondimentGroupByOutputType = {
    id: number
    name: string
    description: string | null
    category: string | null
    isSpicy: boolean
    createdAt: Date
    updatedAt: Date
    _count: CondimentCountAggregateOutputType | null
    _avg: CondimentAvgAggregateOutputType | null
    _sum: CondimentSumAggregateOutputType | null
    _min: CondimentMinAggregateOutputType | null
    _max: CondimentMaxAggregateOutputType | null
  }

  type GetCondimentGroupByPayload<T extends CondimentGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CondimentGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CondimentGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CondimentGroupByOutputType[P]>
            : GetScalarType<T[P], CondimentGroupByOutputType[P]>
        }
      >
    >


  export type CondimentSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    category?: boolean
    isSpicy?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["condiment"]>



  export type CondimentSelectScalar = {
    id?: boolean
    name?: boolean
    description?: boolean
    category?: boolean
    isSpicy?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type CondimentOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "description" | "category" | "isSpicy" | "createdAt" | "updatedAt", ExtArgs["result"]["condiment"]>

  export type $CondimentPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Condiment"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      description: string | null
      category: string | null
      isSpicy: boolean
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["condiment"]>
    composites: {}
  }

  type CondimentGetPayload<S extends boolean | null | undefined | CondimentDefaultArgs> = $Result.GetResult<Prisma.$CondimentPayload, S>

  type CondimentCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CondimentFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CondimentCountAggregateInputType | true
    }

  export interface CondimentDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Condiment'], meta: { name: 'Condiment' } }
    /**
     * Find zero or one Condiment that matches the filter.
     * @param {CondimentFindUniqueArgs} args - Arguments to find a Condiment
     * @example
     * // Get one Condiment
     * const condiment = await prisma.condiment.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CondimentFindUniqueArgs>(args: SelectSubset<T, CondimentFindUniqueArgs<ExtArgs>>): Prisma__CondimentClient<$Result.GetResult<Prisma.$CondimentPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Condiment that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CondimentFindUniqueOrThrowArgs} args - Arguments to find a Condiment
     * @example
     * // Get one Condiment
     * const condiment = await prisma.condiment.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CondimentFindUniqueOrThrowArgs>(args: SelectSubset<T, CondimentFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CondimentClient<$Result.GetResult<Prisma.$CondimentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Condiment that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CondimentFindFirstArgs} args - Arguments to find a Condiment
     * @example
     * // Get one Condiment
     * const condiment = await prisma.condiment.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CondimentFindFirstArgs>(args?: SelectSubset<T, CondimentFindFirstArgs<ExtArgs>>): Prisma__CondimentClient<$Result.GetResult<Prisma.$CondimentPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Condiment that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CondimentFindFirstOrThrowArgs} args - Arguments to find a Condiment
     * @example
     * // Get one Condiment
     * const condiment = await prisma.condiment.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CondimentFindFirstOrThrowArgs>(args?: SelectSubset<T, CondimentFindFirstOrThrowArgs<ExtArgs>>): Prisma__CondimentClient<$Result.GetResult<Prisma.$CondimentPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Condiments that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CondimentFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Condiments
     * const condiments = await prisma.condiment.findMany()
     * 
     * // Get first 10 Condiments
     * const condiments = await prisma.condiment.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const condimentWithIdOnly = await prisma.condiment.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CondimentFindManyArgs>(args?: SelectSubset<T, CondimentFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CondimentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Condiment.
     * @param {CondimentCreateArgs} args - Arguments to create a Condiment.
     * @example
     * // Create one Condiment
     * const Condiment = await prisma.condiment.create({
     *   data: {
     *     // ... data to create a Condiment
     *   }
     * })
     * 
     */
    create<T extends CondimentCreateArgs>(args: SelectSubset<T, CondimentCreateArgs<ExtArgs>>): Prisma__CondimentClient<$Result.GetResult<Prisma.$CondimentPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Condiments.
     * @param {CondimentCreateManyArgs} args - Arguments to create many Condiments.
     * @example
     * // Create many Condiments
     * const condiment = await prisma.condiment.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CondimentCreateManyArgs>(args?: SelectSubset<T, CondimentCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Condiment.
     * @param {CondimentDeleteArgs} args - Arguments to delete one Condiment.
     * @example
     * // Delete one Condiment
     * const Condiment = await prisma.condiment.delete({
     *   where: {
     *     // ... filter to delete one Condiment
     *   }
     * })
     * 
     */
    delete<T extends CondimentDeleteArgs>(args: SelectSubset<T, CondimentDeleteArgs<ExtArgs>>): Prisma__CondimentClient<$Result.GetResult<Prisma.$CondimentPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Condiment.
     * @param {CondimentUpdateArgs} args - Arguments to update one Condiment.
     * @example
     * // Update one Condiment
     * const condiment = await prisma.condiment.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CondimentUpdateArgs>(args: SelectSubset<T, CondimentUpdateArgs<ExtArgs>>): Prisma__CondimentClient<$Result.GetResult<Prisma.$CondimentPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Condiments.
     * @param {CondimentDeleteManyArgs} args - Arguments to filter Condiments to delete.
     * @example
     * // Delete a few Condiments
     * const { count } = await prisma.condiment.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CondimentDeleteManyArgs>(args?: SelectSubset<T, CondimentDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Condiments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CondimentUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Condiments
     * const condiment = await prisma.condiment.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CondimentUpdateManyArgs>(args: SelectSubset<T, CondimentUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Condiment.
     * @param {CondimentUpsertArgs} args - Arguments to update or create a Condiment.
     * @example
     * // Update or create a Condiment
     * const condiment = await prisma.condiment.upsert({
     *   create: {
     *     // ... data to create a Condiment
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Condiment we want to update
     *   }
     * })
     */
    upsert<T extends CondimentUpsertArgs>(args: SelectSubset<T, CondimentUpsertArgs<ExtArgs>>): Prisma__CondimentClient<$Result.GetResult<Prisma.$CondimentPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Condiments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CondimentCountArgs} args - Arguments to filter Condiments to count.
     * @example
     * // Count the number of Condiments
     * const count = await prisma.condiment.count({
     *   where: {
     *     // ... the filter for the Condiments we want to count
     *   }
     * })
    **/
    count<T extends CondimentCountArgs>(
      args?: Subset<T, CondimentCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CondimentCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Condiment.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CondimentAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends CondimentAggregateArgs>(args: Subset<T, CondimentAggregateArgs>): Prisma.PrismaPromise<GetCondimentAggregateType<T>>

    /**
     * Group by Condiment.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CondimentGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends CondimentGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CondimentGroupByArgs['orderBy'] }
        : { orderBy?: CondimentGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, CondimentGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCondimentGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Condiment model
   */
  readonly fields: CondimentFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Condiment.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CondimentClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Condiment model
   */
  interface CondimentFieldRefs {
    readonly id: FieldRef<"Condiment", 'Int'>
    readonly name: FieldRef<"Condiment", 'String'>
    readonly description: FieldRef<"Condiment", 'String'>
    readonly category: FieldRef<"Condiment", 'String'>
    readonly isSpicy: FieldRef<"Condiment", 'Boolean'>
    readonly createdAt: FieldRef<"Condiment", 'DateTime'>
    readonly updatedAt: FieldRef<"Condiment", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Condiment findUnique
   */
  export type CondimentFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Condiment
     */
    select?: CondimentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Condiment
     */
    omit?: CondimentOmit<ExtArgs> | null
    /**
     * Filter, which Condiment to fetch.
     */
    where: CondimentWhereUniqueInput
  }

  /**
   * Condiment findUniqueOrThrow
   */
  export type CondimentFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Condiment
     */
    select?: CondimentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Condiment
     */
    omit?: CondimentOmit<ExtArgs> | null
    /**
     * Filter, which Condiment to fetch.
     */
    where: CondimentWhereUniqueInput
  }

  /**
   * Condiment findFirst
   */
  export type CondimentFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Condiment
     */
    select?: CondimentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Condiment
     */
    omit?: CondimentOmit<ExtArgs> | null
    /**
     * Filter, which Condiment to fetch.
     */
    where?: CondimentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Condiments to fetch.
     */
    orderBy?: CondimentOrderByWithRelationInput | CondimentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Condiments.
     */
    cursor?: CondimentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Condiments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Condiments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Condiments.
     */
    distinct?: CondimentScalarFieldEnum | CondimentScalarFieldEnum[]
  }

  /**
   * Condiment findFirstOrThrow
   */
  export type CondimentFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Condiment
     */
    select?: CondimentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Condiment
     */
    omit?: CondimentOmit<ExtArgs> | null
    /**
     * Filter, which Condiment to fetch.
     */
    where?: CondimentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Condiments to fetch.
     */
    orderBy?: CondimentOrderByWithRelationInput | CondimentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Condiments.
     */
    cursor?: CondimentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Condiments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Condiments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Condiments.
     */
    distinct?: CondimentScalarFieldEnum | CondimentScalarFieldEnum[]
  }

  /**
   * Condiment findMany
   */
  export type CondimentFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Condiment
     */
    select?: CondimentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Condiment
     */
    omit?: CondimentOmit<ExtArgs> | null
    /**
     * Filter, which Condiments to fetch.
     */
    where?: CondimentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Condiments to fetch.
     */
    orderBy?: CondimentOrderByWithRelationInput | CondimentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Condiments.
     */
    cursor?: CondimentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Condiments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Condiments.
     */
    skip?: number
    distinct?: CondimentScalarFieldEnum | CondimentScalarFieldEnum[]
  }

  /**
   * Condiment create
   */
  export type CondimentCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Condiment
     */
    select?: CondimentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Condiment
     */
    omit?: CondimentOmit<ExtArgs> | null
    /**
     * The data needed to create a Condiment.
     */
    data: XOR<CondimentCreateInput, CondimentUncheckedCreateInput>
  }

  /**
   * Condiment createMany
   */
  export type CondimentCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Condiments.
     */
    data: CondimentCreateManyInput | CondimentCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Condiment update
   */
  export type CondimentUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Condiment
     */
    select?: CondimentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Condiment
     */
    omit?: CondimentOmit<ExtArgs> | null
    /**
     * The data needed to update a Condiment.
     */
    data: XOR<CondimentUpdateInput, CondimentUncheckedUpdateInput>
    /**
     * Choose, which Condiment to update.
     */
    where: CondimentWhereUniqueInput
  }

  /**
   * Condiment updateMany
   */
  export type CondimentUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Condiments.
     */
    data: XOR<CondimentUpdateManyMutationInput, CondimentUncheckedUpdateManyInput>
    /**
     * Filter which Condiments to update
     */
    where?: CondimentWhereInput
    /**
     * Limit how many Condiments to update.
     */
    limit?: number
  }

  /**
   * Condiment upsert
   */
  export type CondimentUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Condiment
     */
    select?: CondimentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Condiment
     */
    omit?: CondimentOmit<ExtArgs> | null
    /**
     * The filter to search for the Condiment to update in case it exists.
     */
    where: CondimentWhereUniqueInput
    /**
     * In case the Condiment found by the `where` argument doesn't exist, create a new Condiment with this data.
     */
    create: XOR<CondimentCreateInput, CondimentUncheckedCreateInput>
    /**
     * In case the Condiment was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CondimentUpdateInput, CondimentUncheckedUpdateInput>
  }

  /**
   * Condiment delete
   */
  export type CondimentDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Condiment
     */
    select?: CondimentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Condiment
     */
    omit?: CondimentOmit<ExtArgs> | null
    /**
     * Filter which Condiment to delete.
     */
    where: CondimentWhereUniqueInput
  }

  /**
   * Condiment deleteMany
   */
  export type CondimentDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Condiments to delete
     */
    where?: CondimentWhereInput
    /**
     * Limit how many Condiments to delete.
     */
    limit?: number
  }

  /**
   * Condiment without action
   */
  export type CondimentDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Condiment
     */
    select?: CondimentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Condiment
     */
    omit?: CondimentOmit<ExtArgs> | null
  }


  /**
   * Model SoupStock
   */

  export type AggregateSoupStock = {
    _count: SoupStockCountAggregateOutputType | null
    _avg: SoupStockAvgAggregateOutputType | null
    _sum: SoupStockSumAggregateOutputType | null
    _min: SoupStockMinAggregateOutputType | null
    _max: SoupStockMaxAggregateOutputType | null
  }

  export type SoupStockAvgAggregateOutputType = {
    id: number | null
  }

  export type SoupStockSumAggregateOutputType = {
    id: number | null
  }

  export type SoupStockMinAggregateOutputType = {
    id: number | null
    name: string | null
    description: string | null
    base: string | null
    isInstant: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type SoupStockMaxAggregateOutputType = {
    id: number | null
    name: string | null
    description: string | null
    base: string | null
    isInstant: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type SoupStockCountAggregateOutputType = {
    id: number
    name: number
    description: number
    base: number
    isInstant: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type SoupStockAvgAggregateInputType = {
    id?: true
  }

  export type SoupStockSumAggregateInputType = {
    id?: true
  }

  export type SoupStockMinAggregateInputType = {
    id?: true
    name?: true
    description?: true
    base?: true
    isInstant?: true
    createdAt?: true
    updatedAt?: true
  }

  export type SoupStockMaxAggregateInputType = {
    id?: true
    name?: true
    description?: true
    base?: true
    isInstant?: true
    createdAt?: true
    updatedAt?: true
  }

  export type SoupStockCountAggregateInputType = {
    id?: true
    name?: true
    description?: true
    base?: true
    isInstant?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type SoupStockAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SoupStock to aggregate.
     */
    where?: SoupStockWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SoupStocks to fetch.
     */
    orderBy?: SoupStockOrderByWithRelationInput | SoupStockOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SoupStockWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SoupStocks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SoupStocks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned SoupStocks
    **/
    _count?: true | SoupStockCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: SoupStockAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: SoupStockSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SoupStockMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SoupStockMaxAggregateInputType
  }

  export type GetSoupStockAggregateType<T extends SoupStockAggregateArgs> = {
        [P in keyof T & keyof AggregateSoupStock]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSoupStock[P]>
      : GetScalarType<T[P], AggregateSoupStock[P]>
  }




  export type SoupStockGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SoupStockWhereInput
    orderBy?: SoupStockOrderByWithAggregationInput | SoupStockOrderByWithAggregationInput[]
    by: SoupStockScalarFieldEnum[] | SoupStockScalarFieldEnum
    having?: SoupStockScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SoupStockCountAggregateInputType | true
    _avg?: SoupStockAvgAggregateInputType
    _sum?: SoupStockSumAggregateInputType
    _min?: SoupStockMinAggregateInputType
    _max?: SoupStockMaxAggregateInputType
  }

  export type SoupStockGroupByOutputType = {
    id: number
    name: string
    description: string | null
    base: string | null
    isInstant: boolean
    createdAt: Date
    updatedAt: Date
    _count: SoupStockCountAggregateOutputType | null
    _avg: SoupStockAvgAggregateOutputType | null
    _sum: SoupStockSumAggregateOutputType | null
    _min: SoupStockMinAggregateOutputType | null
    _max: SoupStockMaxAggregateOutputType | null
  }

  type GetSoupStockGroupByPayload<T extends SoupStockGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SoupStockGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SoupStockGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SoupStockGroupByOutputType[P]>
            : GetScalarType<T[P], SoupStockGroupByOutputType[P]>
        }
      >
    >


  export type SoupStockSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    base?: boolean
    isInstant?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["soupStock"]>



  export type SoupStockSelectScalar = {
    id?: boolean
    name?: boolean
    description?: boolean
    base?: boolean
    isInstant?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type SoupStockOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "description" | "base" | "isInstant" | "createdAt" | "updatedAt", ExtArgs["result"]["soupStock"]>

  export type $SoupStockPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "SoupStock"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      description: string | null
      base: string | null
      isInstant: boolean
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["soupStock"]>
    composites: {}
  }

  type SoupStockGetPayload<S extends boolean | null | undefined | SoupStockDefaultArgs> = $Result.GetResult<Prisma.$SoupStockPayload, S>

  type SoupStockCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<SoupStockFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SoupStockCountAggregateInputType | true
    }

  export interface SoupStockDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['SoupStock'], meta: { name: 'SoupStock' } }
    /**
     * Find zero or one SoupStock that matches the filter.
     * @param {SoupStockFindUniqueArgs} args - Arguments to find a SoupStock
     * @example
     * // Get one SoupStock
     * const soupStock = await prisma.soupStock.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SoupStockFindUniqueArgs>(args: SelectSubset<T, SoupStockFindUniqueArgs<ExtArgs>>): Prisma__SoupStockClient<$Result.GetResult<Prisma.$SoupStockPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one SoupStock that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SoupStockFindUniqueOrThrowArgs} args - Arguments to find a SoupStock
     * @example
     * // Get one SoupStock
     * const soupStock = await prisma.soupStock.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SoupStockFindUniqueOrThrowArgs>(args: SelectSubset<T, SoupStockFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SoupStockClient<$Result.GetResult<Prisma.$SoupStockPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first SoupStock that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SoupStockFindFirstArgs} args - Arguments to find a SoupStock
     * @example
     * // Get one SoupStock
     * const soupStock = await prisma.soupStock.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SoupStockFindFirstArgs>(args?: SelectSubset<T, SoupStockFindFirstArgs<ExtArgs>>): Prisma__SoupStockClient<$Result.GetResult<Prisma.$SoupStockPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first SoupStock that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SoupStockFindFirstOrThrowArgs} args - Arguments to find a SoupStock
     * @example
     * // Get one SoupStock
     * const soupStock = await prisma.soupStock.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SoupStockFindFirstOrThrowArgs>(args?: SelectSubset<T, SoupStockFindFirstOrThrowArgs<ExtArgs>>): Prisma__SoupStockClient<$Result.GetResult<Prisma.$SoupStockPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more SoupStocks that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SoupStockFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all SoupStocks
     * const soupStocks = await prisma.soupStock.findMany()
     * 
     * // Get first 10 SoupStocks
     * const soupStocks = await prisma.soupStock.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const soupStockWithIdOnly = await prisma.soupStock.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SoupStockFindManyArgs>(args?: SelectSubset<T, SoupStockFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SoupStockPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a SoupStock.
     * @param {SoupStockCreateArgs} args - Arguments to create a SoupStock.
     * @example
     * // Create one SoupStock
     * const SoupStock = await prisma.soupStock.create({
     *   data: {
     *     // ... data to create a SoupStock
     *   }
     * })
     * 
     */
    create<T extends SoupStockCreateArgs>(args: SelectSubset<T, SoupStockCreateArgs<ExtArgs>>): Prisma__SoupStockClient<$Result.GetResult<Prisma.$SoupStockPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many SoupStocks.
     * @param {SoupStockCreateManyArgs} args - Arguments to create many SoupStocks.
     * @example
     * // Create many SoupStocks
     * const soupStock = await prisma.soupStock.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SoupStockCreateManyArgs>(args?: SelectSubset<T, SoupStockCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a SoupStock.
     * @param {SoupStockDeleteArgs} args - Arguments to delete one SoupStock.
     * @example
     * // Delete one SoupStock
     * const SoupStock = await prisma.soupStock.delete({
     *   where: {
     *     // ... filter to delete one SoupStock
     *   }
     * })
     * 
     */
    delete<T extends SoupStockDeleteArgs>(args: SelectSubset<T, SoupStockDeleteArgs<ExtArgs>>): Prisma__SoupStockClient<$Result.GetResult<Prisma.$SoupStockPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one SoupStock.
     * @param {SoupStockUpdateArgs} args - Arguments to update one SoupStock.
     * @example
     * // Update one SoupStock
     * const soupStock = await prisma.soupStock.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SoupStockUpdateArgs>(args: SelectSubset<T, SoupStockUpdateArgs<ExtArgs>>): Prisma__SoupStockClient<$Result.GetResult<Prisma.$SoupStockPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more SoupStocks.
     * @param {SoupStockDeleteManyArgs} args - Arguments to filter SoupStocks to delete.
     * @example
     * // Delete a few SoupStocks
     * const { count } = await prisma.soupStock.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SoupStockDeleteManyArgs>(args?: SelectSubset<T, SoupStockDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more SoupStocks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SoupStockUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many SoupStocks
     * const soupStock = await prisma.soupStock.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SoupStockUpdateManyArgs>(args: SelectSubset<T, SoupStockUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one SoupStock.
     * @param {SoupStockUpsertArgs} args - Arguments to update or create a SoupStock.
     * @example
     * // Update or create a SoupStock
     * const soupStock = await prisma.soupStock.upsert({
     *   create: {
     *     // ... data to create a SoupStock
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the SoupStock we want to update
     *   }
     * })
     */
    upsert<T extends SoupStockUpsertArgs>(args: SelectSubset<T, SoupStockUpsertArgs<ExtArgs>>): Prisma__SoupStockClient<$Result.GetResult<Prisma.$SoupStockPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of SoupStocks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SoupStockCountArgs} args - Arguments to filter SoupStocks to count.
     * @example
     * // Count the number of SoupStocks
     * const count = await prisma.soupStock.count({
     *   where: {
     *     // ... the filter for the SoupStocks we want to count
     *   }
     * })
    **/
    count<T extends SoupStockCountArgs>(
      args?: Subset<T, SoupStockCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SoupStockCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a SoupStock.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SoupStockAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends SoupStockAggregateArgs>(args: Subset<T, SoupStockAggregateArgs>): Prisma.PrismaPromise<GetSoupStockAggregateType<T>>

    /**
     * Group by SoupStock.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SoupStockGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends SoupStockGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SoupStockGroupByArgs['orderBy'] }
        : { orderBy?: SoupStockGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, SoupStockGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSoupStockGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the SoupStock model
   */
  readonly fields: SoupStockFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for SoupStock.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SoupStockClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the SoupStock model
   */
  interface SoupStockFieldRefs {
    readonly id: FieldRef<"SoupStock", 'Int'>
    readonly name: FieldRef<"SoupStock", 'String'>
    readonly description: FieldRef<"SoupStock", 'String'>
    readonly base: FieldRef<"SoupStock", 'String'>
    readonly isInstant: FieldRef<"SoupStock", 'Boolean'>
    readonly createdAt: FieldRef<"SoupStock", 'DateTime'>
    readonly updatedAt: FieldRef<"SoupStock", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * SoupStock findUnique
   */
  export type SoupStockFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SoupStock
     */
    select?: SoupStockSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SoupStock
     */
    omit?: SoupStockOmit<ExtArgs> | null
    /**
     * Filter, which SoupStock to fetch.
     */
    where: SoupStockWhereUniqueInput
  }

  /**
   * SoupStock findUniqueOrThrow
   */
  export type SoupStockFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SoupStock
     */
    select?: SoupStockSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SoupStock
     */
    omit?: SoupStockOmit<ExtArgs> | null
    /**
     * Filter, which SoupStock to fetch.
     */
    where: SoupStockWhereUniqueInput
  }

  /**
   * SoupStock findFirst
   */
  export type SoupStockFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SoupStock
     */
    select?: SoupStockSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SoupStock
     */
    omit?: SoupStockOmit<ExtArgs> | null
    /**
     * Filter, which SoupStock to fetch.
     */
    where?: SoupStockWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SoupStocks to fetch.
     */
    orderBy?: SoupStockOrderByWithRelationInput | SoupStockOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SoupStocks.
     */
    cursor?: SoupStockWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SoupStocks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SoupStocks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SoupStocks.
     */
    distinct?: SoupStockScalarFieldEnum | SoupStockScalarFieldEnum[]
  }

  /**
   * SoupStock findFirstOrThrow
   */
  export type SoupStockFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SoupStock
     */
    select?: SoupStockSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SoupStock
     */
    omit?: SoupStockOmit<ExtArgs> | null
    /**
     * Filter, which SoupStock to fetch.
     */
    where?: SoupStockWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SoupStocks to fetch.
     */
    orderBy?: SoupStockOrderByWithRelationInput | SoupStockOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SoupStocks.
     */
    cursor?: SoupStockWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SoupStocks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SoupStocks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SoupStocks.
     */
    distinct?: SoupStockScalarFieldEnum | SoupStockScalarFieldEnum[]
  }

  /**
   * SoupStock findMany
   */
  export type SoupStockFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SoupStock
     */
    select?: SoupStockSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SoupStock
     */
    omit?: SoupStockOmit<ExtArgs> | null
    /**
     * Filter, which SoupStocks to fetch.
     */
    where?: SoupStockWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SoupStocks to fetch.
     */
    orderBy?: SoupStockOrderByWithRelationInput | SoupStockOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing SoupStocks.
     */
    cursor?: SoupStockWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SoupStocks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SoupStocks.
     */
    skip?: number
    distinct?: SoupStockScalarFieldEnum | SoupStockScalarFieldEnum[]
  }

  /**
   * SoupStock create
   */
  export type SoupStockCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SoupStock
     */
    select?: SoupStockSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SoupStock
     */
    omit?: SoupStockOmit<ExtArgs> | null
    /**
     * The data needed to create a SoupStock.
     */
    data: XOR<SoupStockCreateInput, SoupStockUncheckedCreateInput>
  }

  /**
   * SoupStock createMany
   */
  export type SoupStockCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many SoupStocks.
     */
    data: SoupStockCreateManyInput | SoupStockCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * SoupStock update
   */
  export type SoupStockUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SoupStock
     */
    select?: SoupStockSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SoupStock
     */
    omit?: SoupStockOmit<ExtArgs> | null
    /**
     * The data needed to update a SoupStock.
     */
    data: XOR<SoupStockUpdateInput, SoupStockUncheckedUpdateInput>
    /**
     * Choose, which SoupStock to update.
     */
    where: SoupStockWhereUniqueInput
  }

  /**
   * SoupStock updateMany
   */
  export type SoupStockUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update SoupStocks.
     */
    data: XOR<SoupStockUpdateManyMutationInput, SoupStockUncheckedUpdateManyInput>
    /**
     * Filter which SoupStocks to update
     */
    where?: SoupStockWhereInput
    /**
     * Limit how many SoupStocks to update.
     */
    limit?: number
  }

  /**
   * SoupStock upsert
   */
  export type SoupStockUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SoupStock
     */
    select?: SoupStockSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SoupStock
     */
    omit?: SoupStockOmit<ExtArgs> | null
    /**
     * The filter to search for the SoupStock to update in case it exists.
     */
    where: SoupStockWhereUniqueInput
    /**
     * In case the SoupStock found by the `where` argument doesn't exist, create a new SoupStock with this data.
     */
    create: XOR<SoupStockCreateInput, SoupStockUncheckedCreateInput>
    /**
     * In case the SoupStock was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SoupStockUpdateInput, SoupStockUncheckedUpdateInput>
  }

  /**
   * SoupStock delete
   */
  export type SoupStockDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SoupStock
     */
    select?: SoupStockSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SoupStock
     */
    omit?: SoupStockOmit<ExtArgs> | null
    /**
     * Filter which SoupStock to delete.
     */
    where: SoupStockWhereUniqueInput
  }

  /**
   * SoupStock deleteMany
   */
  export type SoupStockDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SoupStocks to delete
     */
    where?: SoupStockWhereInput
    /**
     * Limit how many SoupStocks to delete.
     */
    limit?: number
  }

  /**
   * SoupStock without action
   */
  export type SoupStockDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SoupStock
     */
    select?: SoupStockSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SoupStock
     */
    omit?: SoupStockOmit<ExtArgs> | null
  }


  /**
   * Model Beverage
   */

  export type AggregateBeverage = {
    _count: BeverageCountAggregateOutputType | null
    _avg: BeverageAvgAggregateOutputType | null
    _sum: BeverageSumAggregateOutputType | null
    _min: BeverageMinAggregateOutputType | null
    _max: BeverageMaxAggregateOutputType | null
  }

  export type BeverageAvgAggregateOutputType = {
    id: number | null
    abv: number | null
  }

  export type BeverageSumAggregateOutputType = {
    id: number | null
    abv: number | null
  }

  export type BeverageMinAggregateOutputType = {
    id: number | null
    name: string | null
    description: string | null
    category: string | null
    isAlcoholic: boolean | null
    abv: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type BeverageMaxAggregateOutputType = {
    id: number | null
    name: string | null
    description: string | null
    category: string | null
    isAlcoholic: boolean | null
    abv: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type BeverageCountAggregateOutputType = {
    id: number
    name: number
    description: number
    category: number
    isAlcoholic: number
    abv: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type BeverageAvgAggregateInputType = {
    id?: true
    abv?: true
  }

  export type BeverageSumAggregateInputType = {
    id?: true
    abv?: true
  }

  export type BeverageMinAggregateInputType = {
    id?: true
    name?: true
    description?: true
    category?: true
    isAlcoholic?: true
    abv?: true
    createdAt?: true
    updatedAt?: true
  }

  export type BeverageMaxAggregateInputType = {
    id?: true
    name?: true
    description?: true
    category?: true
    isAlcoholic?: true
    abv?: true
    createdAt?: true
    updatedAt?: true
  }

  export type BeverageCountAggregateInputType = {
    id?: true
    name?: true
    description?: true
    category?: true
    isAlcoholic?: true
    abv?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type BeverageAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Beverage to aggregate.
     */
    where?: BeverageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Beverages to fetch.
     */
    orderBy?: BeverageOrderByWithRelationInput | BeverageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: BeverageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Beverages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Beverages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Beverages
    **/
    _count?: true | BeverageCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: BeverageAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: BeverageSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: BeverageMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: BeverageMaxAggregateInputType
  }

  export type GetBeverageAggregateType<T extends BeverageAggregateArgs> = {
        [P in keyof T & keyof AggregateBeverage]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateBeverage[P]>
      : GetScalarType<T[P], AggregateBeverage[P]>
  }




  export type BeverageGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BeverageWhereInput
    orderBy?: BeverageOrderByWithAggregationInput | BeverageOrderByWithAggregationInput[]
    by: BeverageScalarFieldEnum[] | BeverageScalarFieldEnum
    having?: BeverageScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: BeverageCountAggregateInputType | true
    _avg?: BeverageAvgAggregateInputType
    _sum?: BeverageSumAggregateInputType
    _min?: BeverageMinAggregateInputType
    _max?: BeverageMaxAggregateInputType
  }

  export type BeverageGroupByOutputType = {
    id: number
    name: string
    description: string | null
    category: string
    isAlcoholic: boolean
    abv: number | null
    createdAt: Date
    updatedAt: Date
    _count: BeverageCountAggregateOutputType | null
    _avg: BeverageAvgAggregateOutputType | null
    _sum: BeverageSumAggregateOutputType | null
    _min: BeverageMinAggregateOutputType | null
    _max: BeverageMaxAggregateOutputType | null
  }

  type GetBeverageGroupByPayload<T extends BeverageGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<BeverageGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof BeverageGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], BeverageGroupByOutputType[P]>
            : GetScalarType<T[P], BeverageGroupByOutputType[P]>
        }
      >
    >


  export type BeverageSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    category?: boolean
    isAlcoholic?: boolean
    abv?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["beverage"]>



  export type BeverageSelectScalar = {
    id?: boolean
    name?: boolean
    description?: boolean
    category?: boolean
    isAlcoholic?: boolean
    abv?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type BeverageOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "description" | "category" | "isAlcoholic" | "abv" | "createdAt" | "updatedAt", ExtArgs["result"]["beverage"]>

  export type $BeveragePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Beverage"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      description: string | null
      category: string
      isAlcoholic: boolean
      abv: number | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["beverage"]>
    composites: {}
  }

  type BeverageGetPayload<S extends boolean | null | undefined | BeverageDefaultArgs> = $Result.GetResult<Prisma.$BeveragePayload, S>

  type BeverageCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<BeverageFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: BeverageCountAggregateInputType | true
    }

  export interface BeverageDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Beverage'], meta: { name: 'Beverage' } }
    /**
     * Find zero or one Beverage that matches the filter.
     * @param {BeverageFindUniqueArgs} args - Arguments to find a Beverage
     * @example
     * // Get one Beverage
     * const beverage = await prisma.beverage.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends BeverageFindUniqueArgs>(args: SelectSubset<T, BeverageFindUniqueArgs<ExtArgs>>): Prisma__BeverageClient<$Result.GetResult<Prisma.$BeveragePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Beverage that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {BeverageFindUniqueOrThrowArgs} args - Arguments to find a Beverage
     * @example
     * // Get one Beverage
     * const beverage = await prisma.beverage.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends BeverageFindUniqueOrThrowArgs>(args: SelectSubset<T, BeverageFindUniqueOrThrowArgs<ExtArgs>>): Prisma__BeverageClient<$Result.GetResult<Prisma.$BeveragePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Beverage that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BeverageFindFirstArgs} args - Arguments to find a Beverage
     * @example
     * // Get one Beverage
     * const beverage = await prisma.beverage.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends BeverageFindFirstArgs>(args?: SelectSubset<T, BeverageFindFirstArgs<ExtArgs>>): Prisma__BeverageClient<$Result.GetResult<Prisma.$BeveragePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Beverage that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BeverageFindFirstOrThrowArgs} args - Arguments to find a Beverage
     * @example
     * // Get one Beverage
     * const beverage = await prisma.beverage.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends BeverageFindFirstOrThrowArgs>(args?: SelectSubset<T, BeverageFindFirstOrThrowArgs<ExtArgs>>): Prisma__BeverageClient<$Result.GetResult<Prisma.$BeveragePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Beverages that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BeverageFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Beverages
     * const beverages = await prisma.beverage.findMany()
     * 
     * // Get first 10 Beverages
     * const beverages = await prisma.beverage.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const beverageWithIdOnly = await prisma.beverage.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends BeverageFindManyArgs>(args?: SelectSubset<T, BeverageFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BeveragePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Beverage.
     * @param {BeverageCreateArgs} args - Arguments to create a Beverage.
     * @example
     * // Create one Beverage
     * const Beverage = await prisma.beverage.create({
     *   data: {
     *     // ... data to create a Beverage
     *   }
     * })
     * 
     */
    create<T extends BeverageCreateArgs>(args: SelectSubset<T, BeverageCreateArgs<ExtArgs>>): Prisma__BeverageClient<$Result.GetResult<Prisma.$BeveragePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Beverages.
     * @param {BeverageCreateManyArgs} args - Arguments to create many Beverages.
     * @example
     * // Create many Beverages
     * const beverage = await prisma.beverage.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends BeverageCreateManyArgs>(args?: SelectSubset<T, BeverageCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Beverage.
     * @param {BeverageDeleteArgs} args - Arguments to delete one Beverage.
     * @example
     * // Delete one Beverage
     * const Beverage = await prisma.beverage.delete({
     *   where: {
     *     // ... filter to delete one Beverage
     *   }
     * })
     * 
     */
    delete<T extends BeverageDeleteArgs>(args: SelectSubset<T, BeverageDeleteArgs<ExtArgs>>): Prisma__BeverageClient<$Result.GetResult<Prisma.$BeveragePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Beverage.
     * @param {BeverageUpdateArgs} args - Arguments to update one Beverage.
     * @example
     * // Update one Beverage
     * const beverage = await prisma.beverage.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends BeverageUpdateArgs>(args: SelectSubset<T, BeverageUpdateArgs<ExtArgs>>): Prisma__BeverageClient<$Result.GetResult<Prisma.$BeveragePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Beverages.
     * @param {BeverageDeleteManyArgs} args - Arguments to filter Beverages to delete.
     * @example
     * // Delete a few Beverages
     * const { count } = await prisma.beverage.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends BeverageDeleteManyArgs>(args?: SelectSubset<T, BeverageDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Beverages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BeverageUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Beverages
     * const beverage = await prisma.beverage.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends BeverageUpdateManyArgs>(args: SelectSubset<T, BeverageUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Beverage.
     * @param {BeverageUpsertArgs} args - Arguments to update or create a Beverage.
     * @example
     * // Update or create a Beverage
     * const beverage = await prisma.beverage.upsert({
     *   create: {
     *     // ... data to create a Beverage
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Beverage we want to update
     *   }
     * })
     */
    upsert<T extends BeverageUpsertArgs>(args: SelectSubset<T, BeverageUpsertArgs<ExtArgs>>): Prisma__BeverageClient<$Result.GetResult<Prisma.$BeveragePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Beverages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BeverageCountArgs} args - Arguments to filter Beverages to count.
     * @example
     * // Count the number of Beverages
     * const count = await prisma.beverage.count({
     *   where: {
     *     // ... the filter for the Beverages we want to count
     *   }
     * })
    **/
    count<T extends BeverageCountArgs>(
      args?: Subset<T, BeverageCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], BeverageCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Beverage.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BeverageAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends BeverageAggregateArgs>(args: Subset<T, BeverageAggregateArgs>): Prisma.PrismaPromise<GetBeverageAggregateType<T>>

    /**
     * Group by Beverage.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BeverageGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends BeverageGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: BeverageGroupByArgs['orderBy'] }
        : { orderBy?: BeverageGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, BeverageGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetBeverageGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Beverage model
   */
  readonly fields: BeverageFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Beverage.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__BeverageClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Beverage model
   */
  interface BeverageFieldRefs {
    readonly id: FieldRef<"Beverage", 'Int'>
    readonly name: FieldRef<"Beverage", 'String'>
    readonly description: FieldRef<"Beverage", 'String'>
    readonly category: FieldRef<"Beverage", 'String'>
    readonly isAlcoholic: FieldRef<"Beverage", 'Boolean'>
    readonly abv: FieldRef<"Beverage", 'Float'>
    readonly createdAt: FieldRef<"Beverage", 'DateTime'>
    readonly updatedAt: FieldRef<"Beverage", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Beverage findUnique
   */
  export type BeverageFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Beverage
     */
    select?: BeverageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Beverage
     */
    omit?: BeverageOmit<ExtArgs> | null
    /**
     * Filter, which Beverage to fetch.
     */
    where: BeverageWhereUniqueInput
  }

  /**
   * Beverage findUniqueOrThrow
   */
  export type BeverageFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Beverage
     */
    select?: BeverageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Beverage
     */
    omit?: BeverageOmit<ExtArgs> | null
    /**
     * Filter, which Beverage to fetch.
     */
    where: BeverageWhereUniqueInput
  }

  /**
   * Beverage findFirst
   */
  export type BeverageFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Beverage
     */
    select?: BeverageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Beverage
     */
    omit?: BeverageOmit<ExtArgs> | null
    /**
     * Filter, which Beverage to fetch.
     */
    where?: BeverageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Beverages to fetch.
     */
    orderBy?: BeverageOrderByWithRelationInput | BeverageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Beverages.
     */
    cursor?: BeverageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Beverages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Beverages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Beverages.
     */
    distinct?: BeverageScalarFieldEnum | BeverageScalarFieldEnum[]
  }

  /**
   * Beverage findFirstOrThrow
   */
  export type BeverageFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Beverage
     */
    select?: BeverageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Beverage
     */
    omit?: BeverageOmit<ExtArgs> | null
    /**
     * Filter, which Beverage to fetch.
     */
    where?: BeverageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Beverages to fetch.
     */
    orderBy?: BeverageOrderByWithRelationInput | BeverageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Beverages.
     */
    cursor?: BeverageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Beverages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Beverages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Beverages.
     */
    distinct?: BeverageScalarFieldEnum | BeverageScalarFieldEnum[]
  }

  /**
   * Beverage findMany
   */
  export type BeverageFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Beverage
     */
    select?: BeverageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Beverage
     */
    omit?: BeverageOmit<ExtArgs> | null
    /**
     * Filter, which Beverages to fetch.
     */
    where?: BeverageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Beverages to fetch.
     */
    orderBy?: BeverageOrderByWithRelationInput | BeverageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Beverages.
     */
    cursor?: BeverageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Beverages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Beverages.
     */
    skip?: number
    distinct?: BeverageScalarFieldEnum | BeverageScalarFieldEnum[]
  }

  /**
   * Beverage create
   */
  export type BeverageCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Beverage
     */
    select?: BeverageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Beverage
     */
    omit?: BeverageOmit<ExtArgs> | null
    /**
     * The data needed to create a Beverage.
     */
    data: XOR<BeverageCreateInput, BeverageUncheckedCreateInput>
  }

  /**
   * Beverage createMany
   */
  export type BeverageCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Beverages.
     */
    data: BeverageCreateManyInput | BeverageCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Beverage update
   */
  export type BeverageUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Beverage
     */
    select?: BeverageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Beverage
     */
    omit?: BeverageOmit<ExtArgs> | null
    /**
     * The data needed to update a Beverage.
     */
    data: XOR<BeverageUpdateInput, BeverageUncheckedUpdateInput>
    /**
     * Choose, which Beverage to update.
     */
    where: BeverageWhereUniqueInput
  }

  /**
   * Beverage updateMany
   */
  export type BeverageUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Beverages.
     */
    data: XOR<BeverageUpdateManyMutationInput, BeverageUncheckedUpdateManyInput>
    /**
     * Filter which Beverages to update
     */
    where?: BeverageWhereInput
    /**
     * Limit how many Beverages to update.
     */
    limit?: number
  }

  /**
   * Beverage upsert
   */
  export type BeverageUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Beverage
     */
    select?: BeverageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Beverage
     */
    omit?: BeverageOmit<ExtArgs> | null
    /**
     * The filter to search for the Beverage to update in case it exists.
     */
    where: BeverageWhereUniqueInput
    /**
     * In case the Beverage found by the `where` argument doesn't exist, create a new Beverage with this data.
     */
    create: XOR<BeverageCreateInput, BeverageUncheckedCreateInput>
    /**
     * In case the Beverage was found with the provided `where` argument, update it with this data.
     */
    update: XOR<BeverageUpdateInput, BeverageUncheckedUpdateInput>
  }

  /**
   * Beverage delete
   */
  export type BeverageDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Beverage
     */
    select?: BeverageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Beverage
     */
    omit?: BeverageOmit<ExtArgs> | null
    /**
     * Filter which Beverage to delete.
     */
    where: BeverageWhereUniqueInput
  }

  /**
   * Beverage deleteMany
   */
  export type BeverageDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Beverages to delete
     */
    where?: BeverageWhereInput
    /**
     * Limit how many Beverages to delete.
     */
    limit?: number
  }

  /**
   * Beverage without action
   */
  export type BeverageDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Beverage
     */
    select?: BeverageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Beverage
     */
    omit?: BeverageOmit<ExtArgs> | null
  }


  /**
   * Model BakingGood
   */

  export type AggregateBakingGood = {
    _count: BakingGoodCountAggregateOutputType | null
    _avg: BakingGoodAvgAggregateOutputType | null
    _sum: BakingGoodSumAggregateOutputType | null
    _min: BakingGoodMinAggregateOutputType | null
    _max: BakingGoodMaxAggregateOutputType | null
  }

  export type BakingGoodAvgAggregateOutputType = {
    id: number | null
  }

  export type BakingGoodSumAggregateOutputType = {
    id: number | null
  }

  export type BakingGoodMinAggregateOutputType = {
    id: number | null
    name: string | null
    description: string | null
    category: string | null
    isGlutenFree: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type BakingGoodMaxAggregateOutputType = {
    id: number | null
    name: string | null
    description: string | null
    category: string | null
    isGlutenFree: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type BakingGoodCountAggregateOutputType = {
    id: number
    name: number
    description: number
    category: number
    isGlutenFree: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type BakingGoodAvgAggregateInputType = {
    id?: true
  }

  export type BakingGoodSumAggregateInputType = {
    id?: true
  }

  export type BakingGoodMinAggregateInputType = {
    id?: true
    name?: true
    description?: true
    category?: true
    isGlutenFree?: true
    createdAt?: true
    updatedAt?: true
  }

  export type BakingGoodMaxAggregateInputType = {
    id?: true
    name?: true
    description?: true
    category?: true
    isGlutenFree?: true
    createdAt?: true
    updatedAt?: true
  }

  export type BakingGoodCountAggregateInputType = {
    id?: true
    name?: true
    description?: true
    category?: true
    isGlutenFree?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type BakingGoodAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which BakingGood to aggregate.
     */
    where?: BakingGoodWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BakingGoods to fetch.
     */
    orderBy?: BakingGoodOrderByWithRelationInput | BakingGoodOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: BakingGoodWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BakingGoods from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BakingGoods.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned BakingGoods
    **/
    _count?: true | BakingGoodCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: BakingGoodAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: BakingGoodSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: BakingGoodMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: BakingGoodMaxAggregateInputType
  }

  export type GetBakingGoodAggregateType<T extends BakingGoodAggregateArgs> = {
        [P in keyof T & keyof AggregateBakingGood]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateBakingGood[P]>
      : GetScalarType<T[P], AggregateBakingGood[P]>
  }




  export type BakingGoodGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BakingGoodWhereInput
    orderBy?: BakingGoodOrderByWithAggregationInput | BakingGoodOrderByWithAggregationInput[]
    by: BakingGoodScalarFieldEnum[] | BakingGoodScalarFieldEnum
    having?: BakingGoodScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: BakingGoodCountAggregateInputType | true
    _avg?: BakingGoodAvgAggregateInputType
    _sum?: BakingGoodSumAggregateInputType
    _min?: BakingGoodMinAggregateInputType
    _max?: BakingGoodMaxAggregateInputType
  }

  export type BakingGoodGroupByOutputType = {
    id: number
    name: string
    description: string | null
    category: string | null
    isGlutenFree: boolean
    createdAt: Date
    updatedAt: Date
    _count: BakingGoodCountAggregateOutputType | null
    _avg: BakingGoodAvgAggregateOutputType | null
    _sum: BakingGoodSumAggregateOutputType | null
    _min: BakingGoodMinAggregateOutputType | null
    _max: BakingGoodMaxAggregateOutputType | null
  }

  type GetBakingGoodGroupByPayload<T extends BakingGoodGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<BakingGoodGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof BakingGoodGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], BakingGoodGroupByOutputType[P]>
            : GetScalarType<T[P], BakingGoodGroupByOutputType[P]>
        }
      >
    >


  export type BakingGoodSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    category?: boolean
    isGlutenFree?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["bakingGood"]>



  export type BakingGoodSelectScalar = {
    id?: boolean
    name?: boolean
    description?: boolean
    category?: boolean
    isGlutenFree?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type BakingGoodOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "description" | "category" | "isGlutenFree" | "createdAt" | "updatedAt", ExtArgs["result"]["bakingGood"]>

  export type $BakingGoodPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "BakingGood"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      description: string | null
      category: string | null
      isGlutenFree: boolean
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["bakingGood"]>
    composites: {}
  }

  type BakingGoodGetPayload<S extends boolean | null | undefined | BakingGoodDefaultArgs> = $Result.GetResult<Prisma.$BakingGoodPayload, S>

  type BakingGoodCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<BakingGoodFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: BakingGoodCountAggregateInputType | true
    }

  export interface BakingGoodDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['BakingGood'], meta: { name: 'BakingGood' } }
    /**
     * Find zero or one BakingGood that matches the filter.
     * @param {BakingGoodFindUniqueArgs} args - Arguments to find a BakingGood
     * @example
     * // Get one BakingGood
     * const bakingGood = await prisma.bakingGood.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends BakingGoodFindUniqueArgs>(args: SelectSubset<T, BakingGoodFindUniqueArgs<ExtArgs>>): Prisma__BakingGoodClient<$Result.GetResult<Prisma.$BakingGoodPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one BakingGood that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {BakingGoodFindUniqueOrThrowArgs} args - Arguments to find a BakingGood
     * @example
     * // Get one BakingGood
     * const bakingGood = await prisma.bakingGood.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends BakingGoodFindUniqueOrThrowArgs>(args: SelectSubset<T, BakingGoodFindUniqueOrThrowArgs<ExtArgs>>): Prisma__BakingGoodClient<$Result.GetResult<Prisma.$BakingGoodPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first BakingGood that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BakingGoodFindFirstArgs} args - Arguments to find a BakingGood
     * @example
     * // Get one BakingGood
     * const bakingGood = await prisma.bakingGood.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends BakingGoodFindFirstArgs>(args?: SelectSubset<T, BakingGoodFindFirstArgs<ExtArgs>>): Prisma__BakingGoodClient<$Result.GetResult<Prisma.$BakingGoodPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first BakingGood that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BakingGoodFindFirstOrThrowArgs} args - Arguments to find a BakingGood
     * @example
     * // Get one BakingGood
     * const bakingGood = await prisma.bakingGood.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends BakingGoodFindFirstOrThrowArgs>(args?: SelectSubset<T, BakingGoodFindFirstOrThrowArgs<ExtArgs>>): Prisma__BakingGoodClient<$Result.GetResult<Prisma.$BakingGoodPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more BakingGoods that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BakingGoodFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all BakingGoods
     * const bakingGoods = await prisma.bakingGood.findMany()
     * 
     * // Get first 10 BakingGoods
     * const bakingGoods = await prisma.bakingGood.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const bakingGoodWithIdOnly = await prisma.bakingGood.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends BakingGoodFindManyArgs>(args?: SelectSubset<T, BakingGoodFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BakingGoodPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a BakingGood.
     * @param {BakingGoodCreateArgs} args - Arguments to create a BakingGood.
     * @example
     * // Create one BakingGood
     * const BakingGood = await prisma.bakingGood.create({
     *   data: {
     *     // ... data to create a BakingGood
     *   }
     * })
     * 
     */
    create<T extends BakingGoodCreateArgs>(args: SelectSubset<T, BakingGoodCreateArgs<ExtArgs>>): Prisma__BakingGoodClient<$Result.GetResult<Prisma.$BakingGoodPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many BakingGoods.
     * @param {BakingGoodCreateManyArgs} args - Arguments to create many BakingGoods.
     * @example
     * // Create many BakingGoods
     * const bakingGood = await prisma.bakingGood.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends BakingGoodCreateManyArgs>(args?: SelectSubset<T, BakingGoodCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a BakingGood.
     * @param {BakingGoodDeleteArgs} args - Arguments to delete one BakingGood.
     * @example
     * // Delete one BakingGood
     * const BakingGood = await prisma.bakingGood.delete({
     *   where: {
     *     // ... filter to delete one BakingGood
     *   }
     * })
     * 
     */
    delete<T extends BakingGoodDeleteArgs>(args: SelectSubset<T, BakingGoodDeleteArgs<ExtArgs>>): Prisma__BakingGoodClient<$Result.GetResult<Prisma.$BakingGoodPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one BakingGood.
     * @param {BakingGoodUpdateArgs} args - Arguments to update one BakingGood.
     * @example
     * // Update one BakingGood
     * const bakingGood = await prisma.bakingGood.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends BakingGoodUpdateArgs>(args: SelectSubset<T, BakingGoodUpdateArgs<ExtArgs>>): Prisma__BakingGoodClient<$Result.GetResult<Prisma.$BakingGoodPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more BakingGoods.
     * @param {BakingGoodDeleteManyArgs} args - Arguments to filter BakingGoods to delete.
     * @example
     * // Delete a few BakingGoods
     * const { count } = await prisma.bakingGood.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends BakingGoodDeleteManyArgs>(args?: SelectSubset<T, BakingGoodDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more BakingGoods.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BakingGoodUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many BakingGoods
     * const bakingGood = await prisma.bakingGood.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends BakingGoodUpdateManyArgs>(args: SelectSubset<T, BakingGoodUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one BakingGood.
     * @param {BakingGoodUpsertArgs} args - Arguments to update or create a BakingGood.
     * @example
     * // Update or create a BakingGood
     * const bakingGood = await prisma.bakingGood.upsert({
     *   create: {
     *     // ... data to create a BakingGood
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the BakingGood we want to update
     *   }
     * })
     */
    upsert<T extends BakingGoodUpsertArgs>(args: SelectSubset<T, BakingGoodUpsertArgs<ExtArgs>>): Prisma__BakingGoodClient<$Result.GetResult<Prisma.$BakingGoodPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of BakingGoods.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BakingGoodCountArgs} args - Arguments to filter BakingGoods to count.
     * @example
     * // Count the number of BakingGoods
     * const count = await prisma.bakingGood.count({
     *   where: {
     *     // ... the filter for the BakingGoods we want to count
     *   }
     * })
    **/
    count<T extends BakingGoodCountArgs>(
      args?: Subset<T, BakingGoodCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], BakingGoodCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a BakingGood.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BakingGoodAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends BakingGoodAggregateArgs>(args: Subset<T, BakingGoodAggregateArgs>): Prisma.PrismaPromise<GetBakingGoodAggregateType<T>>

    /**
     * Group by BakingGood.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BakingGoodGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends BakingGoodGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: BakingGoodGroupByArgs['orderBy'] }
        : { orderBy?: BakingGoodGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, BakingGoodGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetBakingGoodGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the BakingGood model
   */
  readonly fields: BakingGoodFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for BakingGood.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__BakingGoodClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the BakingGood model
   */
  interface BakingGoodFieldRefs {
    readonly id: FieldRef<"BakingGood", 'Int'>
    readonly name: FieldRef<"BakingGood", 'String'>
    readonly description: FieldRef<"BakingGood", 'String'>
    readonly category: FieldRef<"BakingGood", 'String'>
    readonly isGlutenFree: FieldRef<"BakingGood", 'Boolean'>
    readonly createdAt: FieldRef<"BakingGood", 'DateTime'>
    readonly updatedAt: FieldRef<"BakingGood", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * BakingGood findUnique
   */
  export type BakingGoodFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BakingGood
     */
    select?: BakingGoodSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BakingGood
     */
    omit?: BakingGoodOmit<ExtArgs> | null
    /**
     * Filter, which BakingGood to fetch.
     */
    where: BakingGoodWhereUniqueInput
  }

  /**
   * BakingGood findUniqueOrThrow
   */
  export type BakingGoodFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BakingGood
     */
    select?: BakingGoodSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BakingGood
     */
    omit?: BakingGoodOmit<ExtArgs> | null
    /**
     * Filter, which BakingGood to fetch.
     */
    where: BakingGoodWhereUniqueInput
  }

  /**
   * BakingGood findFirst
   */
  export type BakingGoodFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BakingGood
     */
    select?: BakingGoodSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BakingGood
     */
    omit?: BakingGoodOmit<ExtArgs> | null
    /**
     * Filter, which BakingGood to fetch.
     */
    where?: BakingGoodWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BakingGoods to fetch.
     */
    orderBy?: BakingGoodOrderByWithRelationInput | BakingGoodOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for BakingGoods.
     */
    cursor?: BakingGoodWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BakingGoods from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BakingGoods.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of BakingGoods.
     */
    distinct?: BakingGoodScalarFieldEnum | BakingGoodScalarFieldEnum[]
  }

  /**
   * BakingGood findFirstOrThrow
   */
  export type BakingGoodFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BakingGood
     */
    select?: BakingGoodSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BakingGood
     */
    omit?: BakingGoodOmit<ExtArgs> | null
    /**
     * Filter, which BakingGood to fetch.
     */
    where?: BakingGoodWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BakingGoods to fetch.
     */
    orderBy?: BakingGoodOrderByWithRelationInput | BakingGoodOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for BakingGoods.
     */
    cursor?: BakingGoodWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BakingGoods from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BakingGoods.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of BakingGoods.
     */
    distinct?: BakingGoodScalarFieldEnum | BakingGoodScalarFieldEnum[]
  }

  /**
   * BakingGood findMany
   */
  export type BakingGoodFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BakingGood
     */
    select?: BakingGoodSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BakingGood
     */
    omit?: BakingGoodOmit<ExtArgs> | null
    /**
     * Filter, which BakingGoods to fetch.
     */
    where?: BakingGoodWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BakingGoods to fetch.
     */
    orderBy?: BakingGoodOrderByWithRelationInput | BakingGoodOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing BakingGoods.
     */
    cursor?: BakingGoodWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BakingGoods from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BakingGoods.
     */
    skip?: number
    distinct?: BakingGoodScalarFieldEnum | BakingGoodScalarFieldEnum[]
  }

  /**
   * BakingGood create
   */
  export type BakingGoodCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BakingGood
     */
    select?: BakingGoodSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BakingGood
     */
    omit?: BakingGoodOmit<ExtArgs> | null
    /**
     * The data needed to create a BakingGood.
     */
    data: XOR<BakingGoodCreateInput, BakingGoodUncheckedCreateInput>
  }

  /**
   * BakingGood createMany
   */
  export type BakingGoodCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many BakingGoods.
     */
    data: BakingGoodCreateManyInput | BakingGoodCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * BakingGood update
   */
  export type BakingGoodUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BakingGood
     */
    select?: BakingGoodSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BakingGood
     */
    omit?: BakingGoodOmit<ExtArgs> | null
    /**
     * The data needed to update a BakingGood.
     */
    data: XOR<BakingGoodUpdateInput, BakingGoodUncheckedUpdateInput>
    /**
     * Choose, which BakingGood to update.
     */
    where: BakingGoodWhereUniqueInput
  }

  /**
   * BakingGood updateMany
   */
  export type BakingGoodUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update BakingGoods.
     */
    data: XOR<BakingGoodUpdateManyMutationInput, BakingGoodUncheckedUpdateManyInput>
    /**
     * Filter which BakingGoods to update
     */
    where?: BakingGoodWhereInput
    /**
     * Limit how many BakingGoods to update.
     */
    limit?: number
  }

  /**
   * BakingGood upsert
   */
  export type BakingGoodUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BakingGood
     */
    select?: BakingGoodSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BakingGood
     */
    omit?: BakingGoodOmit<ExtArgs> | null
    /**
     * The filter to search for the BakingGood to update in case it exists.
     */
    where: BakingGoodWhereUniqueInput
    /**
     * In case the BakingGood found by the `where` argument doesn't exist, create a new BakingGood with this data.
     */
    create: XOR<BakingGoodCreateInput, BakingGoodUncheckedCreateInput>
    /**
     * In case the BakingGood was found with the provided `where` argument, update it with this data.
     */
    update: XOR<BakingGoodUpdateInput, BakingGoodUncheckedUpdateInput>
  }

  /**
   * BakingGood delete
   */
  export type BakingGoodDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BakingGood
     */
    select?: BakingGoodSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BakingGood
     */
    omit?: BakingGoodOmit<ExtArgs> | null
    /**
     * Filter which BakingGood to delete.
     */
    where: BakingGoodWhereUniqueInput
  }

  /**
   * BakingGood deleteMany
   */
  export type BakingGoodDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which BakingGoods to delete
     */
    where?: BakingGoodWhereInput
    /**
     * Limit how many BakingGoods to delete.
     */
    limit?: number
  }

  /**
   * BakingGood without action
   */
  export type BakingGoodDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BakingGood
     */
    select?: BakingGoodSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BakingGood
     */
    omit?: BakingGoodOmit<ExtArgs> | null
  }


  /**
   * Model DoughWrapper
   */

  export type AggregateDoughWrapper = {
    _count: DoughWrapperCountAggregateOutputType | null
    _avg: DoughWrapperAvgAggregateOutputType | null
    _sum: DoughWrapperSumAggregateOutputType | null
    _min: DoughWrapperMinAggregateOutputType | null
    _max: DoughWrapperMaxAggregateOutputType | null
  }

  export type DoughWrapperAvgAggregateOutputType = {
    id: number | null
  }

  export type DoughWrapperSumAggregateOutputType = {
    id: number | null
  }

  export type DoughWrapperMinAggregateOutputType = {
    id: number | null
    name: string | null
    description: string | null
    type: string | null
    isPreMade: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type DoughWrapperMaxAggregateOutputType = {
    id: number | null
    name: string | null
    description: string | null
    type: string | null
    isPreMade: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type DoughWrapperCountAggregateOutputType = {
    id: number
    name: number
    description: number
    type: number
    isPreMade: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type DoughWrapperAvgAggregateInputType = {
    id?: true
  }

  export type DoughWrapperSumAggregateInputType = {
    id?: true
  }

  export type DoughWrapperMinAggregateInputType = {
    id?: true
    name?: true
    description?: true
    type?: true
    isPreMade?: true
    createdAt?: true
    updatedAt?: true
  }

  export type DoughWrapperMaxAggregateInputType = {
    id?: true
    name?: true
    description?: true
    type?: true
    isPreMade?: true
    createdAt?: true
    updatedAt?: true
  }

  export type DoughWrapperCountAggregateInputType = {
    id?: true
    name?: true
    description?: true
    type?: true
    isPreMade?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type DoughWrapperAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which DoughWrapper to aggregate.
     */
    where?: DoughWrapperWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DoughWrappers to fetch.
     */
    orderBy?: DoughWrapperOrderByWithRelationInput | DoughWrapperOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: DoughWrapperWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DoughWrappers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DoughWrappers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned DoughWrappers
    **/
    _count?: true | DoughWrapperCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: DoughWrapperAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: DoughWrapperSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: DoughWrapperMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: DoughWrapperMaxAggregateInputType
  }

  export type GetDoughWrapperAggregateType<T extends DoughWrapperAggregateArgs> = {
        [P in keyof T & keyof AggregateDoughWrapper]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateDoughWrapper[P]>
      : GetScalarType<T[P], AggregateDoughWrapper[P]>
  }




  export type DoughWrapperGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DoughWrapperWhereInput
    orderBy?: DoughWrapperOrderByWithAggregationInput | DoughWrapperOrderByWithAggregationInput[]
    by: DoughWrapperScalarFieldEnum[] | DoughWrapperScalarFieldEnum
    having?: DoughWrapperScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: DoughWrapperCountAggregateInputType | true
    _avg?: DoughWrapperAvgAggregateInputType
    _sum?: DoughWrapperSumAggregateInputType
    _min?: DoughWrapperMinAggregateInputType
    _max?: DoughWrapperMaxAggregateInputType
  }

  export type DoughWrapperGroupByOutputType = {
    id: number
    name: string
    description: string | null
    type: string | null
    isPreMade: boolean
    createdAt: Date
    updatedAt: Date
    _count: DoughWrapperCountAggregateOutputType | null
    _avg: DoughWrapperAvgAggregateOutputType | null
    _sum: DoughWrapperSumAggregateOutputType | null
    _min: DoughWrapperMinAggregateOutputType | null
    _max: DoughWrapperMaxAggregateOutputType | null
  }

  type GetDoughWrapperGroupByPayload<T extends DoughWrapperGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<DoughWrapperGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof DoughWrapperGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], DoughWrapperGroupByOutputType[P]>
            : GetScalarType<T[P], DoughWrapperGroupByOutputType[P]>
        }
      >
    >


  export type DoughWrapperSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    type?: boolean
    isPreMade?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["doughWrapper"]>



  export type DoughWrapperSelectScalar = {
    id?: boolean
    name?: boolean
    description?: boolean
    type?: boolean
    isPreMade?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type DoughWrapperOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "description" | "type" | "isPreMade" | "createdAt" | "updatedAt", ExtArgs["result"]["doughWrapper"]>

  export type $DoughWrapperPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "DoughWrapper"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      description: string | null
      type: string | null
      isPreMade: boolean
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["doughWrapper"]>
    composites: {}
  }

  type DoughWrapperGetPayload<S extends boolean | null | undefined | DoughWrapperDefaultArgs> = $Result.GetResult<Prisma.$DoughWrapperPayload, S>

  type DoughWrapperCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<DoughWrapperFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: DoughWrapperCountAggregateInputType | true
    }

  export interface DoughWrapperDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['DoughWrapper'], meta: { name: 'DoughWrapper' } }
    /**
     * Find zero or one DoughWrapper that matches the filter.
     * @param {DoughWrapperFindUniqueArgs} args - Arguments to find a DoughWrapper
     * @example
     * // Get one DoughWrapper
     * const doughWrapper = await prisma.doughWrapper.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends DoughWrapperFindUniqueArgs>(args: SelectSubset<T, DoughWrapperFindUniqueArgs<ExtArgs>>): Prisma__DoughWrapperClient<$Result.GetResult<Prisma.$DoughWrapperPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one DoughWrapper that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {DoughWrapperFindUniqueOrThrowArgs} args - Arguments to find a DoughWrapper
     * @example
     * // Get one DoughWrapper
     * const doughWrapper = await prisma.doughWrapper.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends DoughWrapperFindUniqueOrThrowArgs>(args: SelectSubset<T, DoughWrapperFindUniqueOrThrowArgs<ExtArgs>>): Prisma__DoughWrapperClient<$Result.GetResult<Prisma.$DoughWrapperPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first DoughWrapper that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DoughWrapperFindFirstArgs} args - Arguments to find a DoughWrapper
     * @example
     * // Get one DoughWrapper
     * const doughWrapper = await prisma.doughWrapper.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends DoughWrapperFindFirstArgs>(args?: SelectSubset<T, DoughWrapperFindFirstArgs<ExtArgs>>): Prisma__DoughWrapperClient<$Result.GetResult<Prisma.$DoughWrapperPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first DoughWrapper that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DoughWrapperFindFirstOrThrowArgs} args - Arguments to find a DoughWrapper
     * @example
     * // Get one DoughWrapper
     * const doughWrapper = await prisma.doughWrapper.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends DoughWrapperFindFirstOrThrowArgs>(args?: SelectSubset<T, DoughWrapperFindFirstOrThrowArgs<ExtArgs>>): Prisma__DoughWrapperClient<$Result.GetResult<Prisma.$DoughWrapperPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more DoughWrappers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DoughWrapperFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all DoughWrappers
     * const doughWrappers = await prisma.doughWrapper.findMany()
     * 
     * // Get first 10 DoughWrappers
     * const doughWrappers = await prisma.doughWrapper.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const doughWrapperWithIdOnly = await prisma.doughWrapper.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends DoughWrapperFindManyArgs>(args?: SelectSubset<T, DoughWrapperFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DoughWrapperPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a DoughWrapper.
     * @param {DoughWrapperCreateArgs} args - Arguments to create a DoughWrapper.
     * @example
     * // Create one DoughWrapper
     * const DoughWrapper = await prisma.doughWrapper.create({
     *   data: {
     *     // ... data to create a DoughWrapper
     *   }
     * })
     * 
     */
    create<T extends DoughWrapperCreateArgs>(args: SelectSubset<T, DoughWrapperCreateArgs<ExtArgs>>): Prisma__DoughWrapperClient<$Result.GetResult<Prisma.$DoughWrapperPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many DoughWrappers.
     * @param {DoughWrapperCreateManyArgs} args - Arguments to create many DoughWrappers.
     * @example
     * // Create many DoughWrappers
     * const doughWrapper = await prisma.doughWrapper.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends DoughWrapperCreateManyArgs>(args?: SelectSubset<T, DoughWrapperCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a DoughWrapper.
     * @param {DoughWrapperDeleteArgs} args - Arguments to delete one DoughWrapper.
     * @example
     * // Delete one DoughWrapper
     * const DoughWrapper = await prisma.doughWrapper.delete({
     *   where: {
     *     // ... filter to delete one DoughWrapper
     *   }
     * })
     * 
     */
    delete<T extends DoughWrapperDeleteArgs>(args: SelectSubset<T, DoughWrapperDeleteArgs<ExtArgs>>): Prisma__DoughWrapperClient<$Result.GetResult<Prisma.$DoughWrapperPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one DoughWrapper.
     * @param {DoughWrapperUpdateArgs} args - Arguments to update one DoughWrapper.
     * @example
     * // Update one DoughWrapper
     * const doughWrapper = await prisma.doughWrapper.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends DoughWrapperUpdateArgs>(args: SelectSubset<T, DoughWrapperUpdateArgs<ExtArgs>>): Prisma__DoughWrapperClient<$Result.GetResult<Prisma.$DoughWrapperPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more DoughWrappers.
     * @param {DoughWrapperDeleteManyArgs} args - Arguments to filter DoughWrappers to delete.
     * @example
     * // Delete a few DoughWrappers
     * const { count } = await prisma.doughWrapper.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends DoughWrapperDeleteManyArgs>(args?: SelectSubset<T, DoughWrapperDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more DoughWrappers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DoughWrapperUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many DoughWrappers
     * const doughWrapper = await prisma.doughWrapper.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends DoughWrapperUpdateManyArgs>(args: SelectSubset<T, DoughWrapperUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one DoughWrapper.
     * @param {DoughWrapperUpsertArgs} args - Arguments to update or create a DoughWrapper.
     * @example
     * // Update or create a DoughWrapper
     * const doughWrapper = await prisma.doughWrapper.upsert({
     *   create: {
     *     // ... data to create a DoughWrapper
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the DoughWrapper we want to update
     *   }
     * })
     */
    upsert<T extends DoughWrapperUpsertArgs>(args: SelectSubset<T, DoughWrapperUpsertArgs<ExtArgs>>): Prisma__DoughWrapperClient<$Result.GetResult<Prisma.$DoughWrapperPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of DoughWrappers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DoughWrapperCountArgs} args - Arguments to filter DoughWrappers to count.
     * @example
     * // Count the number of DoughWrappers
     * const count = await prisma.doughWrapper.count({
     *   where: {
     *     // ... the filter for the DoughWrappers we want to count
     *   }
     * })
    **/
    count<T extends DoughWrapperCountArgs>(
      args?: Subset<T, DoughWrapperCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], DoughWrapperCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a DoughWrapper.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DoughWrapperAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends DoughWrapperAggregateArgs>(args: Subset<T, DoughWrapperAggregateArgs>): Prisma.PrismaPromise<GetDoughWrapperAggregateType<T>>

    /**
     * Group by DoughWrapper.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DoughWrapperGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends DoughWrapperGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: DoughWrapperGroupByArgs['orderBy'] }
        : { orderBy?: DoughWrapperGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, DoughWrapperGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDoughWrapperGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the DoughWrapper model
   */
  readonly fields: DoughWrapperFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for DoughWrapper.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__DoughWrapperClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the DoughWrapper model
   */
  interface DoughWrapperFieldRefs {
    readonly id: FieldRef<"DoughWrapper", 'Int'>
    readonly name: FieldRef<"DoughWrapper", 'String'>
    readonly description: FieldRef<"DoughWrapper", 'String'>
    readonly type: FieldRef<"DoughWrapper", 'String'>
    readonly isPreMade: FieldRef<"DoughWrapper", 'Boolean'>
    readonly createdAt: FieldRef<"DoughWrapper", 'DateTime'>
    readonly updatedAt: FieldRef<"DoughWrapper", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * DoughWrapper findUnique
   */
  export type DoughWrapperFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DoughWrapper
     */
    select?: DoughWrapperSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DoughWrapper
     */
    omit?: DoughWrapperOmit<ExtArgs> | null
    /**
     * Filter, which DoughWrapper to fetch.
     */
    where: DoughWrapperWhereUniqueInput
  }

  /**
   * DoughWrapper findUniqueOrThrow
   */
  export type DoughWrapperFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DoughWrapper
     */
    select?: DoughWrapperSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DoughWrapper
     */
    omit?: DoughWrapperOmit<ExtArgs> | null
    /**
     * Filter, which DoughWrapper to fetch.
     */
    where: DoughWrapperWhereUniqueInput
  }

  /**
   * DoughWrapper findFirst
   */
  export type DoughWrapperFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DoughWrapper
     */
    select?: DoughWrapperSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DoughWrapper
     */
    omit?: DoughWrapperOmit<ExtArgs> | null
    /**
     * Filter, which DoughWrapper to fetch.
     */
    where?: DoughWrapperWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DoughWrappers to fetch.
     */
    orderBy?: DoughWrapperOrderByWithRelationInput | DoughWrapperOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for DoughWrappers.
     */
    cursor?: DoughWrapperWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DoughWrappers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DoughWrappers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of DoughWrappers.
     */
    distinct?: DoughWrapperScalarFieldEnum | DoughWrapperScalarFieldEnum[]
  }

  /**
   * DoughWrapper findFirstOrThrow
   */
  export type DoughWrapperFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DoughWrapper
     */
    select?: DoughWrapperSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DoughWrapper
     */
    omit?: DoughWrapperOmit<ExtArgs> | null
    /**
     * Filter, which DoughWrapper to fetch.
     */
    where?: DoughWrapperWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DoughWrappers to fetch.
     */
    orderBy?: DoughWrapperOrderByWithRelationInput | DoughWrapperOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for DoughWrappers.
     */
    cursor?: DoughWrapperWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DoughWrappers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DoughWrappers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of DoughWrappers.
     */
    distinct?: DoughWrapperScalarFieldEnum | DoughWrapperScalarFieldEnum[]
  }

  /**
   * DoughWrapper findMany
   */
  export type DoughWrapperFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DoughWrapper
     */
    select?: DoughWrapperSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DoughWrapper
     */
    omit?: DoughWrapperOmit<ExtArgs> | null
    /**
     * Filter, which DoughWrappers to fetch.
     */
    where?: DoughWrapperWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DoughWrappers to fetch.
     */
    orderBy?: DoughWrapperOrderByWithRelationInput | DoughWrapperOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing DoughWrappers.
     */
    cursor?: DoughWrapperWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DoughWrappers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DoughWrappers.
     */
    skip?: number
    distinct?: DoughWrapperScalarFieldEnum | DoughWrapperScalarFieldEnum[]
  }

  /**
   * DoughWrapper create
   */
  export type DoughWrapperCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DoughWrapper
     */
    select?: DoughWrapperSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DoughWrapper
     */
    omit?: DoughWrapperOmit<ExtArgs> | null
    /**
     * The data needed to create a DoughWrapper.
     */
    data: XOR<DoughWrapperCreateInput, DoughWrapperUncheckedCreateInput>
  }

  /**
   * DoughWrapper createMany
   */
  export type DoughWrapperCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many DoughWrappers.
     */
    data: DoughWrapperCreateManyInput | DoughWrapperCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * DoughWrapper update
   */
  export type DoughWrapperUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DoughWrapper
     */
    select?: DoughWrapperSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DoughWrapper
     */
    omit?: DoughWrapperOmit<ExtArgs> | null
    /**
     * The data needed to update a DoughWrapper.
     */
    data: XOR<DoughWrapperUpdateInput, DoughWrapperUncheckedUpdateInput>
    /**
     * Choose, which DoughWrapper to update.
     */
    where: DoughWrapperWhereUniqueInput
  }

  /**
   * DoughWrapper updateMany
   */
  export type DoughWrapperUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update DoughWrappers.
     */
    data: XOR<DoughWrapperUpdateManyMutationInput, DoughWrapperUncheckedUpdateManyInput>
    /**
     * Filter which DoughWrappers to update
     */
    where?: DoughWrapperWhereInput
    /**
     * Limit how many DoughWrappers to update.
     */
    limit?: number
  }

  /**
   * DoughWrapper upsert
   */
  export type DoughWrapperUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DoughWrapper
     */
    select?: DoughWrapperSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DoughWrapper
     */
    omit?: DoughWrapperOmit<ExtArgs> | null
    /**
     * The filter to search for the DoughWrapper to update in case it exists.
     */
    where: DoughWrapperWhereUniqueInput
    /**
     * In case the DoughWrapper found by the `where` argument doesn't exist, create a new DoughWrapper with this data.
     */
    create: XOR<DoughWrapperCreateInput, DoughWrapperUncheckedCreateInput>
    /**
     * In case the DoughWrapper was found with the provided `where` argument, update it with this data.
     */
    update: XOR<DoughWrapperUpdateInput, DoughWrapperUncheckedUpdateInput>
  }

  /**
   * DoughWrapper delete
   */
  export type DoughWrapperDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DoughWrapper
     */
    select?: DoughWrapperSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DoughWrapper
     */
    omit?: DoughWrapperOmit<ExtArgs> | null
    /**
     * Filter which DoughWrapper to delete.
     */
    where: DoughWrapperWhereUniqueInput
  }

  /**
   * DoughWrapper deleteMany
   */
  export type DoughWrapperDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which DoughWrappers to delete
     */
    where?: DoughWrapperWhereInput
    /**
     * Limit how many DoughWrappers to delete.
     */
    limit?: number
  }

  /**
   * DoughWrapper without action
   */
  export type DoughWrapperDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DoughWrapper
     */
    select?: DoughWrapperSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DoughWrapper
     */
    omit?: DoughWrapperOmit<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const CuisineScalarFieldEnum: {
    id: 'id',
    name: 'name',
    description: 'description'
  };

  export type CuisineScalarFieldEnum = (typeof CuisineScalarFieldEnum)[keyof typeof CuisineScalarFieldEnum]


  export const PantryEssentialScalarFieldEnum: {
    id: 'id',
    name: 'name',
    description: 'description',
    shelfLife: 'shelfLife',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type PantryEssentialScalarFieldEnum = (typeof PantryEssentialScalarFieldEnum)[keyof typeof PantryEssentialScalarFieldEnum]


  export const VegetableScalarFieldEnum: {
    id: 'id',
    name: 'name',
    description: 'description',
    isOrganic: 'isOrganic',
    category: 'category',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type VegetableScalarFieldEnum = (typeof VegetableScalarFieldEnum)[keyof typeof VegetableScalarFieldEnum]


  export const MushroomScalarFieldEnum: {
    id: 'id',
    name: 'name',
    description: 'description',
    isWild: 'isWild',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type MushroomScalarFieldEnum = (typeof MushroomScalarFieldEnum)[keyof typeof MushroomScalarFieldEnum]


  export const FruitScalarFieldEnum: {
    id: 'id',
    name: 'name',
    description: 'description',
    isTropical: 'isTropical',
    isBerry: 'isBerry',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type FruitScalarFieldEnum = (typeof FruitScalarFieldEnum)[keyof typeof FruitScalarFieldEnum]


  export const NutAndSeedScalarFieldEnum: {
    id: 'id',
    name: 'name',
    description: 'description',
    isNut: 'isNut',
    isSeed: 'isSeed',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type NutAndSeedScalarFieldEnum = (typeof NutAndSeedScalarFieldEnum)[keyof typeof NutAndSeedScalarFieldEnum]


  export const DairyScalarFieldEnum: {
    id: 'id',
    name: 'name',
    description: 'description',
    category: 'category',
    isVegan: 'isVegan',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type DairyScalarFieldEnum = (typeof DairyScalarFieldEnum)[keyof typeof DairyScalarFieldEnum]


  export const MeatScalarFieldEnum: {
    id: 'id',
    name: 'name',
    description: 'description',
    category: 'category',
    cutType: 'cutType',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type MeatScalarFieldEnum = (typeof MeatScalarFieldEnum)[keyof typeof MeatScalarFieldEnum]


  export const SeafoodScalarFieldEnum: {
    id: 'id',
    name: 'name',
    description: 'description',
    category: 'category',
    isFreshwater: 'isFreshwater',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type SeafoodScalarFieldEnum = (typeof SeafoodScalarFieldEnum)[keyof typeof SeafoodScalarFieldEnum]


  export const HerbAndSpiceScalarFieldEnum: {
    id: 'id',
    name: 'name',
    description: 'description',
    isHerb: 'isHerb',
    isSpice: 'isSpice',
    isBlend: 'isBlend',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type HerbAndSpiceScalarFieldEnum = (typeof HerbAndSpiceScalarFieldEnum)[keyof typeof HerbAndSpiceScalarFieldEnum]


  export const SweetenerScalarFieldEnum: {
    id: 'id',
    name: 'name',
    description: 'description',
    isNatural: 'isNatural',
    isArtificial: 'isArtificial',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type SweetenerScalarFieldEnum = (typeof SweetenerScalarFieldEnum)[keyof typeof SweetenerScalarFieldEnum]


  export const GrainScalarFieldEnum: {
    id: 'id',
    name: 'name',
    description: 'description',
    category: 'category',
    isGlutenFree: 'isGlutenFree',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type GrainScalarFieldEnum = (typeof GrainScalarFieldEnum)[keyof typeof GrainScalarFieldEnum]


  export const LegumeScalarFieldEnum: {
    id: 'id',
    name: 'name',
    description: 'description',
    isBean: 'isBean',
    isLentil: 'isLentil',
    isPea: 'isPea',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type LegumeScalarFieldEnum = (typeof LegumeScalarFieldEnum)[keyof typeof LegumeScalarFieldEnum]


  export const PastaScalarFieldEnum: {
    id: 'id',
    name: 'name',
    description: 'description',
    shape: 'shape',
    isFresh: 'isFresh',
    isGlutenFree: 'isGlutenFree',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type PastaScalarFieldEnum = (typeof PastaScalarFieldEnum)[keyof typeof PastaScalarFieldEnum]


  export const BreadScalarFieldEnum: {
    id: 'id',
    name: 'name',
    description: 'description',
    category: 'category',
    isGlutenFree: 'isGlutenFree',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type BreadScalarFieldEnum = (typeof BreadScalarFieldEnum)[keyof typeof BreadScalarFieldEnum]


  export const OilAndFatScalarFieldEnum: {
    id: 'id',
    name: 'name',
    description: 'description',
    source: 'source',
    smokePoint: 'smokePoint',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type OilAndFatScalarFieldEnum = (typeof OilAndFatScalarFieldEnum)[keyof typeof OilAndFatScalarFieldEnum]


  export const CondimentScalarFieldEnum: {
    id: 'id',
    name: 'name',
    description: 'description',
    category: 'category',
    isSpicy: 'isSpicy',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type CondimentScalarFieldEnum = (typeof CondimentScalarFieldEnum)[keyof typeof CondimentScalarFieldEnum]


  export const SoupStockScalarFieldEnum: {
    id: 'id',
    name: 'name',
    description: 'description',
    base: 'base',
    isInstant: 'isInstant',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type SoupStockScalarFieldEnum = (typeof SoupStockScalarFieldEnum)[keyof typeof SoupStockScalarFieldEnum]


  export const BeverageScalarFieldEnum: {
    id: 'id',
    name: 'name',
    description: 'description',
    category: 'category',
    isAlcoholic: 'isAlcoholic',
    abv: 'abv',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type BeverageScalarFieldEnum = (typeof BeverageScalarFieldEnum)[keyof typeof BeverageScalarFieldEnum]


  export const BakingGoodScalarFieldEnum: {
    id: 'id',
    name: 'name',
    description: 'description',
    category: 'category',
    isGlutenFree: 'isGlutenFree',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type BakingGoodScalarFieldEnum = (typeof BakingGoodScalarFieldEnum)[keyof typeof BakingGoodScalarFieldEnum]


  export const DoughWrapperScalarFieldEnum: {
    id: 'id',
    name: 'name',
    description: 'description',
    type: 'type',
    isPreMade: 'isPreMade',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type DoughWrapperScalarFieldEnum = (typeof DoughWrapperScalarFieldEnum)[keyof typeof DoughWrapperScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const CuisineOrderByRelevanceFieldEnum: {
    name: 'name',
    description: 'description'
  };

  export type CuisineOrderByRelevanceFieldEnum = (typeof CuisineOrderByRelevanceFieldEnum)[keyof typeof CuisineOrderByRelevanceFieldEnum]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  export const PantryEssentialOrderByRelevanceFieldEnum: {
    name: 'name',
    description: 'description',
    shelfLife: 'shelfLife'
  };

  export type PantryEssentialOrderByRelevanceFieldEnum = (typeof PantryEssentialOrderByRelevanceFieldEnum)[keyof typeof PantryEssentialOrderByRelevanceFieldEnum]


  export const VegetableOrderByRelevanceFieldEnum: {
    name: 'name',
    description: 'description',
    category: 'category'
  };

  export type VegetableOrderByRelevanceFieldEnum = (typeof VegetableOrderByRelevanceFieldEnum)[keyof typeof VegetableOrderByRelevanceFieldEnum]


  export const MushroomOrderByRelevanceFieldEnum: {
    name: 'name',
    description: 'description'
  };

  export type MushroomOrderByRelevanceFieldEnum = (typeof MushroomOrderByRelevanceFieldEnum)[keyof typeof MushroomOrderByRelevanceFieldEnum]


  export const FruitOrderByRelevanceFieldEnum: {
    name: 'name',
    description: 'description'
  };

  export type FruitOrderByRelevanceFieldEnum = (typeof FruitOrderByRelevanceFieldEnum)[keyof typeof FruitOrderByRelevanceFieldEnum]


  export const NutAndSeedOrderByRelevanceFieldEnum: {
    name: 'name',
    description: 'description'
  };

  export type NutAndSeedOrderByRelevanceFieldEnum = (typeof NutAndSeedOrderByRelevanceFieldEnum)[keyof typeof NutAndSeedOrderByRelevanceFieldEnum]


  export const DairyOrderByRelevanceFieldEnum: {
    name: 'name',
    description: 'description',
    category: 'category'
  };

  export type DairyOrderByRelevanceFieldEnum = (typeof DairyOrderByRelevanceFieldEnum)[keyof typeof DairyOrderByRelevanceFieldEnum]


  export const MeatOrderByRelevanceFieldEnum: {
    name: 'name',
    description: 'description',
    category: 'category',
    cutType: 'cutType'
  };

  export type MeatOrderByRelevanceFieldEnum = (typeof MeatOrderByRelevanceFieldEnum)[keyof typeof MeatOrderByRelevanceFieldEnum]


  export const SeafoodOrderByRelevanceFieldEnum: {
    name: 'name',
    description: 'description',
    category: 'category'
  };

  export type SeafoodOrderByRelevanceFieldEnum = (typeof SeafoodOrderByRelevanceFieldEnum)[keyof typeof SeafoodOrderByRelevanceFieldEnum]


  export const HerbAndSpiceOrderByRelevanceFieldEnum: {
    name: 'name',
    description: 'description'
  };

  export type HerbAndSpiceOrderByRelevanceFieldEnum = (typeof HerbAndSpiceOrderByRelevanceFieldEnum)[keyof typeof HerbAndSpiceOrderByRelevanceFieldEnum]


  export const SweetenerOrderByRelevanceFieldEnum: {
    name: 'name',
    description: 'description'
  };

  export type SweetenerOrderByRelevanceFieldEnum = (typeof SweetenerOrderByRelevanceFieldEnum)[keyof typeof SweetenerOrderByRelevanceFieldEnum]


  export const GrainOrderByRelevanceFieldEnum: {
    name: 'name',
    description: 'description',
    category: 'category'
  };

  export type GrainOrderByRelevanceFieldEnum = (typeof GrainOrderByRelevanceFieldEnum)[keyof typeof GrainOrderByRelevanceFieldEnum]


  export const LegumeOrderByRelevanceFieldEnum: {
    name: 'name',
    description: 'description'
  };

  export type LegumeOrderByRelevanceFieldEnum = (typeof LegumeOrderByRelevanceFieldEnum)[keyof typeof LegumeOrderByRelevanceFieldEnum]


  export const PastaOrderByRelevanceFieldEnum: {
    name: 'name',
    description: 'description',
    shape: 'shape'
  };

  export type PastaOrderByRelevanceFieldEnum = (typeof PastaOrderByRelevanceFieldEnum)[keyof typeof PastaOrderByRelevanceFieldEnum]


  export const BreadOrderByRelevanceFieldEnum: {
    name: 'name',
    description: 'description',
    category: 'category'
  };

  export type BreadOrderByRelevanceFieldEnum = (typeof BreadOrderByRelevanceFieldEnum)[keyof typeof BreadOrderByRelevanceFieldEnum]


  export const OilAndFatOrderByRelevanceFieldEnum: {
    name: 'name',
    description: 'description',
    source: 'source'
  };

  export type OilAndFatOrderByRelevanceFieldEnum = (typeof OilAndFatOrderByRelevanceFieldEnum)[keyof typeof OilAndFatOrderByRelevanceFieldEnum]


  export const CondimentOrderByRelevanceFieldEnum: {
    name: 'name',
    description: 'description',
    category: 'category'
  };

  export type CondimentOrderByRelevanceFieldEnum = (typeof CondimentOrderByRelevanceFieldEnum)[keyof typeof CondimentOrderByRelevanceFieldEnum]


  export const SoupStockOrderByRelevanceFieldEnum: {
    name: 'name',
    description: 'description',
    base: 'base'
  };

  export type SoupStockOrderByRelevanceFieldEnum = (typeof SoupStockOrderByRelevanceFieldEnum)[keyof typeof SoupStockOrderByRelevanceFieldEnum]


  export const BeverageOrderByRelevanceFieldEnum: {
    name: 'name',
    description: 'description',
    category: 'category'
  };

  export type BeverageOrderByRelevanceFieldEnum = (typeof BeverageOrderByRelevanceFieldEnum)[keyof typeof BeverageOrderByRelevanceFieldEnum]


  export const BakingGoodOrderByRelevanceFieldEnum: {
    name: 'name',
    description: 'description',
    category: 'category'
  };

  export type BakingGoodOrderByRelevanceFieldEnum = (typeof BakingGoodOrderByRelevanceFieldEnum)[keyof typeof BakingGoodOrderByRelevanceFieldEnum]


  export const DoughWrapperOrderByRelevanceFieldEnum: {
    name: 'name',
    description: 'description',
    type: 'type'
  };

  export type DoughWrapperOrderByRelevanceFieldEnum = (typeof DoughWrapperOrderByRelevanceFieldEnum)[keyof typeof DoughWrapperOrderByRelevanceFieldEnum]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    
  /**
   * Deep Input Types
   */


  export type CuisineWhereInput = {
    AND?: CuisineWhereInput | CuisineWhereInput[]
    OR?: CuisineWhereInput[]
    NOT?: CuisineWhereInput | CuisineWhereInput[]
    id?: IntFilter<"Cuisine"> | number
    name?: StringFilter<"Cuisine"> | string
    description?: StringFilter<"Cuisine"> | string
  }

  export type CuisineOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    _relevance?: CuisineOrderByRelevanceInput
  }

  export type CuisineWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: CuisineWhereInput | CuisineWhereInput[]
    OR?: CuisineWhereInput[]
    NOT?: CuisineWhereInput | CuisineWhereInput[]
    name?: StringFilter<"Cuisine"> | string
    description?: StringFilter<"Cuisine"> | string
  }, "id">

  export type CuisineOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    _count?: CuisineCountOrderByAggregateInput
    _avg?: CuisineAvgOrderByAggregateInput
    _max?: CuisineMaxOrderByAggregateInput
    _min?: CuisineMinOrderByAggregateInput
    _sum?: CuisineSumOrderByAggregateInput
  }

  export type CuisineScalarWhereWithAggregatesInput = {
    AND?: CuisineScalarWhereWithAggregatesInput | CuisineScalarWhereWithAggregatesInput[]
    OR?: CuisineScalarWhereWithAggregatesInput[]
    NOT?: CuisineScalarWhereWithAggregatesInput | CuisineScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Cuisine"> | number
    name?: StringWithAggregatesFilter<"Cuisine"> | string
    description?: StringWithAggregatesFilter<"Cuisine"> | string
  }

  export type PantryEssentialWhereInput = {
    AND?: PantryEssentialWhereInput | PantryEssentialWhereInput[]
    OR?: PantryEssentialWhereInput[]
    NOT?: PantryEssentialWhereInput | PantryEssentialWhereInput[]
    id?: IntFilter<"PantryEssential"> | number
    name?: StringFilter<"PantryEssential"> | string
    description?: StringNullableFilter<"PantryEssential"> | string | null
    shelfLife?: StringNullableFilter<"PantryEssential"> | string | null
    createdAt?: DateTimeFilter<"PantryEssential"> | Date | string
    updatedAt?: DateTimeFilter<"PantryEssential"> | Date | string
  }

  export type PantryEssentialOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrderInput | SortOrder
    shelfLife?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _relevance?: PantryEssentialOrderByRelevanceInput
  }

  export type PantryEssentialWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    name?: string
    AND?: PantryEssentialWhereInput | PantryEssentialWhereInput[]
    OR?: PantryEssentialWhereInput[]
    NOT?: PantryEssentialWhereInput | PantryEssentialWhereInput[]
    description?: StringNullableFilter<"PantryEssential"> | string | null
    shelfLife?: StringNullableFilter<"PantryEssential"> | string | null
    createdAt?: DateTimeFilter<"PantryEssential"> | Date | string
    updatedAt?: DateTimeFilter<"PantryEssential"> | Date | string
  }, "id" | "name">

  export type PantryEssentialOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrderInput | SortOrder
    shelfLife?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: PantryEssentialCountOrderByAggregateInput
    _avg?: PantryEssentialAvgOrderByAggregateInput
    _max?: PantryEssentialMaxOrderByAggregateInput
    _min?: PantryEssentialMinOrderByAggregateInput
    _sum?: PantryEssentialSumOrderByAggregateInput
  }

  export type PantryEssentialScalarWhereWithAggregatesInput = {
    AND?: PantryEssentialScalarWhereWithAggregatesInput | PantryEssentialScalarWhereWithAggregatesInput[]
    OR?: PantryEssentialScalarWhereWithAggregatesInput[]
    NOT?: PantryEssentialScalarWhereWithAggregatesInput | PantryEssentialScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"PantryEssential"> | number
    name?: StringWithAggregatesFilter<"PantryEssential"> | string
    description?: StringNullableWithAggregatesFilter<"PantryEssential"> | string | null
    shelfLife?: StringNullableWithAggregatesFilter<"PantryEssential"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"PantryEssential"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"PantryEssential"> | Date | string
  }

  export type VegetableWhereInput = {
    AND?: VegetableWhereInput | VegetableWhereInput[]
    OR?: VegetableWhereInput[]
    NOT?: VegetableWhereInput | VegetableWhereInput[]
    id?: IntFilter<"Vegetable"> | number
    name?: StringFilter<"Vegetable"> | string
    description?: StringNullableFilter<"Vegetable"> | string | null
    isOrganic?: BoolFilter<"Vegetable"> | boolean
    category?: StringNullableFilter<"Vegetable"> | string | null
    createdAt?: DateTimeFilter<"Vegetable"> | Date | string
    updatedAt?: DateTimeFilter<"Vegetable"> | Date | string
  }

  export type VegetableOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrderInput | SortOrder
    isOrganic?: SortOrder
    category?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _relevance?: VegetableOrderByRelevanceInput
  }

  export type VegetableWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    name?: string
    AND?: VegetableWhereInput | VegetableWhereInput[]
    OR?: VegetableWhereInput[]
    NOT?: VegetableWhereInput | VegetableWhereInput[]
    description?: StringNullableFilter<"Vegetable"> | string | null
    isOrganic?: BoolFilter<"Vegetable"> | boolean
    category?: StringNullableFilter<"Vegetable"> | string | null
    createdAt?: DateTimeFilter<"Vegetable"> | Date | string
    updatedAt?: DateTimeFilter<"Vegetable"> | Date | string
  }, "id" | "name">

  export type VegetableOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrderInput | SortOrder
    isOrganic?: SortOrder
    category?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: VegetableCountOrderByAggregateInput
    _avg?: VegetableAvgOrderByAggregateInput
    _max?: VegetableMaxOrderByAggregateInput
    _min?: VegetableMinOrderByAggregateInput
    _sum?: VegetableSumOrderByAggregateInput
  }

  export type VegetableScalarWhereWithAggregatesInput = {
    AND?: VegetableScalarWhereWithAggregatesInput | VegetableScalarWhereWithAggregatesInput[]
    OR?: VegetableScalarWhereWithAggregatesInput[]
    NOT?: VegetableScalarWhereWithAggregatesInput | VegetableScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Vegetable"> | number
    name?: StringWithAggregatesFilter<"Vegetable"> | string
    description?: StringNullableWithAggregatesFilter<"Vegetable"> | string | null
    isOrganic?: BoolWithAggregatesFilter<"Vegetable"> | boolean
    category?: StringNullableWithAggregatesFilter<"Vegetable"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Vegetable"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Vegetable"> | Date | string
  }

  export type MushroomWhereInput = {
    AND?: MushroomWhereInput | MushroomWhereInput[]
    OR?: MushroomWhereInput[]
    NOT?: MushroomWhereInput | MushroomWhereInput[]
    id?: IntFilter<"Mushroom"> | number
    name?: StringFilter<"Mushroom"> | string
    description?: StringNullableFilter<"Mushroom"> | string | null
    isWild?: BoolFilter<"Mushroom"> | boolean
    createdAt?: DateTimeFilter<"Mushroom"> | Date | string
    updatedAt?: DateTimeFilter<"Mushroom"> | Date | string
  }

  export type MushroomOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrderInput | SortOrder
    isWild?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _relevance?: MushroomOrderByRelevanceInput
  }

  export type MushroomWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    name?: string
    AND?: MushroomWhereInput | MushroomWhereInput[]
    OR?: MushroomWhereInput[]
    NOT?: MushroomWhereInput | MushroomWhereInput[]
    description?: StringNullableFilter<"Mushroom"> | string | null
    isWild?: BoolFilter<"Mushroom"> | boolean
    createdAt?: DateTimeFilter<"Mushroom"> | Date | string
    updatedAt?: DateTimeFilter<"Mushroom"> | Date | string
  }, "id" | "name">

  export type MushroomOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrderInput | SortOrder
    isWild?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: MushroomCountOrderByAggregateInput
    _avg?: MushroomAvgOrderByAggregateInput
    _max?: MushroomMaxOrderByAggregateInput
    _min?: MushroomMinOrderByAggregateInput
    _sum?: MushroomSumOrderByAggregateInput
  }

  export type MushroomScalarWhereWithAggregatesInput = {
    AND?: MushroomScalarWhereWithAggregatesInput | MushroomScalarWhereWithAggregatesInput[]
    OR?: MushroomScalarWhereWithAggregatesInput[]
    NOT?: MushroomScalarWhereWithAggregatesInput | MushroomScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Mushroom"> | number
    name?: StringWithAggregatesFilter<"Mushroom"> | string
    description?: StringNullableWithAggregatesFilter<"Mushroom"> | string | null
    isWild?: BoolWithAggregatesFilter<"Mushroom"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"Mushroom"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Mushroom"> | Date | string
  }

  export type FruitWhereInput = {
    AND?: FruitWhereInput | FruitWhereInput[]
    OR?: FruitWhereInput[]
    NOT?: FruitWhereInput | FruitWhereInput[]
    id?: IntFilter<"Fruit"> | number
    name?: StringFilter<"Fruit"> | string
    description?: StringNullableFilter<"Fruit"> | string | null
    isTropical?: BoolFilter<"Fruit"> | boolean
    isBerry?: BoolFilter<"Fruit"> | boolean
    createdAt?: DateTimeFilter<"Fruit"> | Date | string
    updatedAt?: DateTimeFilter<"Fruit"> | Date | string
  }

  export type FruitOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrderInput | SortOrder
    isTropical?: SortOrder
    isBerry?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _relevance?: FruitOrderByRelevanceInput
  }

  export type FruitWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    name?: string
    AND?: FruitWhereInput | FruitWhereInput[]
    OR?: FruitWhereInput[]
    NOT?: FruitWhereInput | FruitWhereInput[]
    description?: StringNullableFilter<"Fruit"> | string | null
    isTropical?: BoolFilter<"Fruit"> | boolean
    isBerry?: BoolFilter<"Fruit"> | boolean
    createdAt?: DateTimeFilter<"Fruit"> | Date | string
    updatedAt?: DateTimeFilter<"Fruit"> | Date | string
  }, "id" | "name">

  export type FruitOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrderInput | SortOrder
    isTropical?: SortOrder
    isBerry?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: FruitCountOrderByAggregateInput
    _avg?: FruitAvgOrderByAggregateInput
    _max?: FruitMaxOrderByAggregateInput
    _min?: FruitMinOrderByAggregateInput
    _sum?: FruitSumOrderByAggregateInput
  }

  export type FruitScalarWhereWithAggregatesInput = {
    AND?: FruitScalarWhereWithAggregatesInput | FruitScalarWhereWithAggregatesInput[]
    OR?: FruitScalarWhereWithAggregatesInput[]
    NOT?: FruitScalarWhereWithAggregatesInput | FruitScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Fruit"> | number
    name?: StringWithAggregatesFilter<"Fruit"> | string
    description?: StringNullableWithAggregatesFilter<"Fruit"> | string | null
    isTropical?: BoolWithAggregatesFilter<"Fruit"> | boolean
    isBerry?: BoolWithAggregatesFilter<"Fruit"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"Fruit"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Fruit"> | Date | string
  }

  export type NutAndSeedWhereInput = {
    AND?: NutAndSeedWhereInput | NutAndSeedWhereInput[]
    OR?: NutAndSeedWhereInput[]
    NOT?: NutAndSeedWhereInput | NutAndSeedWhereInput[]
    id?: IntFilter<"NutAndSeed"> | number
    name?: StringFilter<"NutAndSeed"> | string
    description?: StringNullableFilter<"NutAndSeed"> | string | null
    isNut?: BoolFilter<"NutAndSeed"> | boolean
    isSeed?: BoolFilter<"NutAndSeed"> | boolean
    createdAt?: DateTimeFilter<"NutAndSeed"> | Date | string
    updatedAt?: DateTimeFilter<"NutAndSeed"> | Date | string
  }

  export type NutAndSeedOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrderInput | SortOrder
    isNut?: SortOrder
    isSeed?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _relevance?: NutAndSeedOrderByRelevanceInput
  }

  export type NutAndSeedWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    name?: string
    AND?: NutAndSeedWhereInput | NutAndSeedWhereInput[]
    OR?: NutAndSeedWhereInput[]
    NOT?: NutAndSeedWhereInput | NutAndSeedWhereInput[]
    description?: StringNullableFilter<"NutAndSeed"> | string | null
    isNut?: BoolFilter<"NutAndSeed"> | boolean
    isSeed?: BoolFilter<"NutAndSeed"> | boolean
    createdAt?: DateTimeFilter<"NutAndSeed"> | Date | string
    updatedAt?: DateTimeFilter<"NutAndSeed"> | Date | string
  }, "id" | "name">

  export type NutAndSeedOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrderInput | SortOrder
    isNut?: SortOrder
    isSeed?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: NutAndSeedCountOrderByAggregateInput
    _avg?: NutAndSeedAvgOrderByAggregateInput
    _max?: NutAndSeedMaxOrderByAggregateInput
    _min?: NutAndSeedMinOrderByAggregateInput
    _sum?: NutAndSeedSumOrderByAggregateInput
  }

  export type NutAndSeedScalarWhereWithAggregatesInput = {
    AND?: NutAndSeedScalarWhereWithAggregatesInput | NutAndSeedScalarWhereWithAggregatesInput[]
    OR?: NutAndSeedScalarWhereWithAggregatesInput[]
    NOT?: NutAndSeedScalarWhereWithAggregatesInput | NutAndSeedScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"NutAndSeed"> | number
    name?: StringWithAggregatesFilter<"NutAndSeed"> | string
    description?: StringNullableWithAggregatesFilter<"NutAndSeed"> | string | null
    isNut?: BoolWithAggregatesFilter<"NutAndSeed"> | boolean
    isSeed?: BoolWithAggregatesFilter<"NutAndSeed"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"NutAndSeed"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"NutAndSeed"> | Date | string
  }

  export type DairyWhereInput = {
    AND?: DairyWhereInput | DairyWhereInput[]
    OR?: DairyWhereInput[]
    NOT?: DairyWhereInput | DairyWhereInput[]
    id?: IntFilter<"Dairy"> | number
    name?: StringFilter<"Dairy"> | string
    description?: StringNullableFilter<"Dairy"> | string | null
    category?: StringNullableFilter<"Dairy"> | string | null
    isVegan?: BoolFilter<"Dairy"> | boolean
    createdAt?: DateTimeFilter<"Dairy"> | Date | string
    updatedAt?: DateTimeFilter<"Dairy"> | Date | string
  }

  export type DairyOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrderInput | SortOrder
    category?: SortOrderInput | SortOrder
    isVegan?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _relevance?: DairyOrderByRelevanceInput
  }

  export type DairyWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    name?: string
    AND?: DairyWhereInput | DairyWhereInput[]
    OR?: DairyWhereInput[]
    NOT?: DairyWhereInput | DairyWhereInput[]
    description?: StringNullableFilter<"Dairy"> | string | null
    category?: StringNullableFilter<"Dairy"> | string | null
    isVegan?: BoolFilter<"Dairy"> | boolean
    createdAt?: DateTimeFilter<"Dairy"> | Date | string
    updatedAt?: DateTimeFilter<"Dairy"> | Date | string
  }, "id" | "name">

  export type DairyOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrderInput | SortOrder
    category?: SortOrderInput | SortOrder
    isVegan?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: DairyCountOrderByAggregateInput
    _avg?: DairyAvgOrderByAggregateInput
    _max?: DairyMaxOrderByAggregateInput
    _min?: DairyMinOrderByAggregateInput
    _sum?: DairySumOrderByAggregateInput
  }

  export type DairyScalarWhereWithAggregatesInput = {
    AND?: DairyScalarWhereWithAggregatesInput | DairyScalarWhereWithAggregatesInput[]
    OR?: DairyScalarWhereWithAggregatesInput[]
    NOT?: DairyScalarWhereWithAggregatesInput | DairyScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Dairy"> | number
    name?: StringWithAggregatesFilter<"Dairy"> | string
    description?: StringNullableWithAggregatesFilter<"Dairy"> | string | null
    category?: StringNullableWithAggregatesFilter<"Dairy"> | string | null
    isVegan?: BoolWithAggregatesFilter<"Dairy"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"Dairy"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Dairy"> | Date | string
  }

  export type MeatWhereInput = {
    AND?: MeatWhereInput | MeatWhereInput[]
    OR?: MeatWhereInput[]
    NOT?: MeatWhereInput | MeatWhereInput[]
    id?: IntFilter<"Meat"> | number
    name?: StringFilter<"Meat"> | string
    description?: StringNullableFilter<"Meat"> | string | null
    category?: StringFilter<"Meat"> | string
    cutType?: StringNullableFilter<"Meat"> | string | null
    createdAt?: DateTimeFilter<"Meat"> | Date | string
    updatedAt?: DateTimeFilter<"Meat"> | Date | string
  }

  export type MeatOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrderInput | SortOrder
    category?: SortOrder
    cutType?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _relevance?: MeatOrderByRelevanceInput
  }

  export type MeatWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    name?: string
    AND?: MeatWhereInput | MeatWhereInput[]
    OR?: MeatWhereInput[]
    NOT?: MeatWhereInput | MeatWhereInput[]
    description?: StringNullableFilter<"Meat"> | string | null
    category?: StringFilter<"Meat"> | string
    cutType?: StringNullableFilter<"Meat"> | string | null
    createdAt?: DateTimeFilter<"Meat"> | Date | string
    updatedAt?: DateTimeFilter<"Meat"> | Date | string
  }, "id" | "name">

  export type MeatOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrderInput | SortOrder
    category?: SortOrder
    cutType?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: MeatCountOrderByAggregateInput
    _avg?: MeatAvgOrderByAggregateInput
    _max?: MeatMaxOrderByAggregateInput
    _min?: MeatMinOrderByAggregateInput
    _sum?: MeatSumOrderByAggregateInput
  }

  export type MeatScalarWhereWithAggregatesInput = {
    AND?: MeatScalarWhereWithAggregatesInput | MeatScalarWhereWithAggregatesInput[]
    OR?: MeatScalarWhereWithAggregatesInput[]
    NOT?: MeatScalarWhereWithAggregatesInput | MeatScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Meat"> | number
    name?: StringWithAggregatesFilter<"Meat"> | string
    description?: StringNullableWithAggregatesFilter<"Meat"> | string | null
    category?: StringWithAggregatesFilter<"Meat"> | string
    cutType?: StringNullableWithAggregatesFilter<"Meat"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Meat"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Meat"> | Date | string
  }

  export type SeafoodWhereInput = {
    AND?: SeafoodWhereInput | SeafoodWhereInput[]
    OR?: SeafoodWhereInput[]
    NOT?: SeafoodWhereInput | SeafoodWhereInput[]
    id?: IntFilter<"Seafood"> | number
    name?: StringFilter<"Seafood"> | string
    description?: StringNullableFilter<"Seafood"> | string | null
    category?: StringFilter<"Seafood"> | string
    isFreshwater?: BoolFilter<"Seafood"> | boolean
    createdAt?: DateTimeFilter<"Seafood"> | Date | string
    updatedAt?: DateTimeFilter<"Seafood"> | Date | string
  }

  export type SeafoodOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrderInput | SortOrder
    category?: SortOrder
    isFreshwater?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _relevance?: SeafoodOrderByRelevanceInput
  }

  export type SeafoodWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    name?: string
    AND?: SeafoodWhereInput | SeafoodWhereInput[]
    OR?: SeafoodWhereInput[]
    NOT?: SeafoodWhereInput | SeafoodWhereInput[]
    description?: StringNullableFilter<"Seafood"> | string | null
    category?: StringFilter<"Seafood"> | string
    isFreshwater?: BoolFilter<"Seafood"> | boolean
    createdAt?: DateTimeFilter<"Seafood"> | Date | string
    updatedAt?: DateTimeFilter<"Seafood"> | Date | string
  }, "id" | "name">

  export type SeafoodOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrderInput | SortOrder
    category?: SortOrder
    isFreshwater?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: SeafoodCountOrderByAggregateInput
    _avg?: SeafoodAvgOrderByAggregateInput
    _max?: SeafoodMaxOrderByAggregateInput
    _min?: SeafoodMinOrderByAggregateInput
    _sum?: SeafoodSumOrderByAggregateInput
  }

  export type SeafoodScalarWhereWithAggregatesInput = {
    AND?: SeafoodScalarWhereWithAggregatesInput | SeafoodScalarWhereWithAggregatesInput[]
    OR?: SeafoodScalarWhereWithAggregatesInput[]
    NOT?: SeafoodScalarWhereWithAggregatesInput | SeafoodScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Seafood"> | number
    name?: StringWithAggregatesFilter<"Seafood"> | string
    description?: StringNullableWithAggregatesFilter<"Seafood"> | string | null
    category?: StringWithAggregatesFilter<"Seafood"> | string
    isFreshwater?: BoolWithAggregatesFilter<"Seafood"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"Seafood"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Seafood"> | Date | string
  }

  export type HerbAndSpiceWhereInput = {
    AND?: HerbAndSpiceWhereInput | HerbAndSpiceWhereInput[]
    OR?: HerbAndSpiceWhereInput[]
    NOT?: HerbAndSpiceWhereInput | HerbAndSpiceWhereInput[]
    id?: IntFilter<"HerbAndSpice"> | number
    name?: StringFilter<"HerbAndSpice"> | string
    description?: StringNullableFilter<"HerbAndSpice"> | string | null
    isHerb?: BoolFilter<"HerbAndSpice"> | boolean
    isSpice?: BoolFilter<"HerbAndSpice"> | boolean
    isBlend?: BoolFilter<"HerbAndSpice"> | boolean
    createdAt?: DateTimeFilter<"HerbAndSpice"> | Date | string
    updatedAt?: DateTimeFilter<"HerbAndSpice"> | Date | string
  }

  export type HerbAndSpiceOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrderInput | SortOrder
    isHerb?: SortOrder
    isSpice?: SortOrder
    isBlend?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _relevance?: HerbAndSpiceOrderByRelevanceInput
  }

  export type HerbAndSpiceWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    name?: string
    AND?: HerbAndSpiceWhereInput | HerbAndSpiceWhereInput[]
    OR?: HerbAndSpiceWhereInput[]
    NOT?: HerbAndSpiceWhereInput | HerbAndSpiceWhereInput[]
    description?: StringNullableFilter<"HerbAndSpice"> | string | null
    isHerb?: BoolFilter<"HerbAndSpice"> | boolean
    isSpice?: BoolFilter<"HerbAndSpice"> | boolean
    isBlend?: BoolFilter<"HerbAndSpice"> | boolean
    createdAt?: DateTimeFilter<"HerbAndSpice"> | Date | string
    updatedAt?: DateTimeFilter<"HerbAndSpice"> | Date | string
  }, "id" | "name">

  export type HerbAndSpiceOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrderInput | SortOrder
    isHerb?: SortOrder
    isSpice?: SortOrder
    isBlend?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: HerbAndSpiceCountOrderByAggregateInput
    _avg?: HerbAndSpiceAvgOrderByAggregateInput
    _max?: HerbAndSpiceMaxOrderByAggregateInput
    _min?: HerbAndSpiceMinOrderByAggregateInput
    _sum?: HerbAndSpiceSumOrderByAggregateInput
  }

  export type HerbAndSpiceScalarWhereWithAggregatesInput = {
    AND?: HerbAndSpiceScalarWhereWithAggregatesInput | HerbAndSpiceScalarWhereWithAggregatesInput[]
    OR?: HerbAndSpiceScalarWhereWithAggregatesInput[]
    NOT?: HerbAndSpiceScalarWhereWithAggregatesInput | HerbAndSpiceScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"HerbAndSpice"> | number
    name?: StringWithAggregatesFilter<"HerbAndSpice"> | string
    description?: StringNullableWithAggregatesFilter<"HerbAndSpice"> | string | null
    isHerb?: BoolWithAggregatesFilter<"HerbAndSpice"> | boolean
    isSpice?: BoolWithAggregatesFilter<"HerbAndSpice"> | boolean
    isBlend?: BoolWithAggregatesFilter<"HerbAndSpice"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"HerbAndSpice"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"HerbAndSpice"> | Date | string
  }

  export type SweetenerWhereInput = {
    AND?: SweetenerWhereInput | SweetenerWhereInput[]
    OR?: SweetenerWhereInput[]
    NOT?: SweetenerWhereInput | SweetenerWhereInput[]
    id?: IntFilter<"Sweetener"> | number
    name?: StringFilter<"Sweetener"> | string
    description?: StringNullableFilter<"Sweetener"> | string | null
    isNatural?: BoolFilter<"Sweetener"> | boolean
    isArtificial?: BoolFilter<"Sweetener"> | boolean
    createdAt?: DateTimeFilter<"Sweetener"> | Date | string
    updatedAt?: DateTimeFilter<"Sweetener"> | Date | string
  }

  export type SweetenerOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrderInput | SortOrder
    isNatural?: SortOrder
    isArtificial?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _relevance?: SweetenerOrderByRelevanceInput
  }

  export type SweetenerWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    name?: string
    AND?: SweetenerWhereInput | SweetenerWhereInput[]
    OR?: SweetenerWhereInput[]
    NOT?: SweetenerWhereInput | SweetenerWhereInput[]
    description?: StringNullableFilter<"Sweetener"> | string | null
    isNatural?: BoolFilter<"Sweetener"> | boolean
    isArtificial?: BoolFilter<"Sweetener"> | boolean
    createdAt?: DateTimeFilter<"Sweetener"> | Date | string
    updatedAt?: DateTimeFilter<"Sweetener"> | Date | string
  }, "id" | "name">

  export type SweetenerOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrderInput | SortOrder
    isNatural?: SortOrder
    isArtificial?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: SweetenerCountOrderByAggregateInput
    _avg?: SweetenerAvgOrderByAggregateInput
    _max?: SweetenerMaxOrderByAggregateInput
    _min?: SweetenerMinOrderByAggregateInput
    _sum?: SweetenerSumOrderByAggregateInput
  }

  export type SweetenerScalarWhereWithAggregatesInput = {
    AND?: SweetenerScalarWhereWithAggregatesInput | SweetenerScalarWhereWithAggregatesInput[]
    OR?: SweetenerScalarWhereWithAggregatesInput[]
    NOT?: SweetenerScalarWhereWithAggregatesInput | SweetenerScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Sweetener"> | number
    name?: StringWithAggregatesFilter<"Sweetener"> | string
    description?: StringNullableWithAggregatesFilter<"Sweetener"> | string | null
    isNatural?: BoolWithAggregatesFilter<"Sweetener"> | boolean
    isArtificial?: BoolWithAggregatesFilter<"Sweetener"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"Sweetener"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Sweetener"> | Date | string
  }

  export type GrainWhereInput = {
    AND?: GrainWhereInput | GrainWhereInput[]
    OR?: GrainWhereInput[]
    NOT?: GrainWhereInput | GrainWhereInput[]
    id?: IntFilter<"Grain"> | number
    name?: StringFilter<"Grain"> | string
    description?: StringNullableFilter<"Grain"> | string | null
    category?: StringNullableFilter<"Grain"> | string | null
    isGlutenFree?: BoolFilter<"Grain"> | boolean
    createdAt?: DateTimeFilter<"Grain"> | Date | string
    updatedAt?: DateTimeFilter<"Grain"> | Date | string
  }

  export type GrainOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrderInput | SortOrder
    category?: SortOrderInput | SortOrder
    isGlutenFree?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _relevance?: GrainOrderByRelevanceInput
  }

  export type GrainWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    name?: string
    AND?: GrainWhereInput | GrainWhereInput[]
    OR?: GrainWhereInput[]
    NOT?: GrainWhereInput | GrainWhereInput[]
    description?: StringNullableFilter<"Grain"> | string | null
    category?: StringNullableFilter<"Grain"> | string | null
    isGlutenFree?: BoolFilter<"Grain"> | boolean
    createdAt?: DateTimeFilter<"Grain"> | Date | string
    updatedAt?: DateTimeFilter<"Grain"> | Date | string
  }, "id" | "name">

  export type GrainOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrderInput | SortOrder
    category?: SortOrderInput | SortOrder
    isGlutenFree?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: GrainCountOrderByAggregateInput
    _avg?: GrainAvgOrderByAggregateInput
    _max?: GrainMaxOrderByAggregateInput
    _min?: GrainMinOrderByAggregateInput
    _sum?: GrainSumOrderByAggregateInput
  }

  export type GrainScalarWhereWithAggregatesInput = {
    AND?: GrainScalarWhereWithAggregatesInput | GrainScalarWhereWithAggregatesInput[]
    OR?: GrainScalarWhereWithAggregatesInput[]
    NOT?: GrainScalarWhereWithAggregatesInput | GrainScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Grain"> | number
    name?: StringWithAggregatesFilter<"Grain"> | string
    description?: StringNullableWithAggregatesFilter<"Grain"> | string | null
    category?: StringNullableWithAggregatesFilter<"Grain"> | string | null
    isGlutenFree?: BoolWithAggregatesFilter<"Grain"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"Grain"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Grain"> | Date | string
  }

  export type LegumeWhereInput = {
    AND?: LegumeWhereInput | LegumeWhereInput[]
    OR?: LegumeWhereInput[]
    NOT?: LegumeWhereInput | LegumeWhereInput[]
    id?: IntFilter<"Legume"> | number
    name?: StringFilter<"Legume"> | string
    description?: StringNullableFilter<"Legume"> | string | null
    isBean?: BoolFilter<"Legume"> | boolean
    isLentil?: BoolFilter<"Legume"> | boolean
    isPea?: BoolFilter<"Legume"> | boolean
    createdAt?: DateTimeFilter<"Legume"> | Date | string
    updatedAt?: DateTimeFilter<"Legume"> | Date | string
  }

  export type LegumeOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrderInput | SortOrder
    isBean?: SortOrder
    isLentil?: SortOrder
    isPea?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _relevance?: LegumeOrderByRelevanceInput
  }

  export type LegumeWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    name?: string
    AND?: LegumeWhereInput | LegumeWhereInput[]
    OR?: LegumeWhereInput[]
    NOT?: LegumeWhereInput | LegumeWhereInput[]
    description?: StringNullableFilter<"Legume"> | string | null
    isBean?: BoolFilter<"Legume"> | boolean
    isLentil?: BoolFilter<"Legume"> | boolean
    isPea?: BoolFilter<"Legume"> | boolean
    createdAt?: DateTimeFilter<"Legume"> | Date | string
    updatedAt?: DateTimeFilter<"Legume"> | Date | string
  }, "id" | "name">

  export type LegumeOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrderInput | SortOrder
    isBean?: SortOrder
    isLentil?: SortOrder
    isPea?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: LegumeCountOrderByAggregateInput
    _avg?: LegumeAvgOrderByAggregateInput
    _max?: LegumeMaxOrderByAggregateInput
    _min?: LegumeMinOrderByAggregateInput
    _sum?: LegumeSumOrderByAggregateInput
  }

  export type LegumeScalarWhereWithAggregatesInput = {
    AND?: LegumeScalarWhereWithAggregatesInput | LegumeScalarWhereWithAggregatesInput[]
    OR?: LegumeScalarWhereWithAggregatesInput[]
    NOT?: LegumeScalarWhereWithAggregatesInput | LegumeScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Legume"> | number
    name?: StringWithAggregatesFilter<"Legume"> | string
    description?: StringNullableWithAggregatesFilter<"Legume"> | string | null
    isBean?: BoolWithAggregatesFilter<"Legume"> | boolean
    isLentil?: BoolWithAggregatesFilter<"Legume"> | boolean
    isPea?: BoolWithAggregatesFilter<"Legume"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"Legume"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Legume"> | Date | string
  }

  export type PastaWhereInput = {
    AND?: PastaWhereInput | PastaWhereInput[]
    OR?: PastaWhereInput[]
    NOT?: PastaWhereInput | PastaWhereInput[]
    id?: IntFilter<"Pasta"> | number
    name?: StringFilter<"Pasta"> | string
    description?: StringNullableFilter<"Pasta"> | string | null
    shape?: StringNullableFilter<"Pasta"> | string | null
    isFresh?: BoolFilter<"Pasta"> | boolean
    isGlutenFree?: BoolFilter<"Pasta"> | boolean
    createdAt?: DateTimeFilter<"Pasta"> | Date | string
    updatedAt?: DateTimeFilter<"Pasta"> | Date | string
  }

  export type PastaOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrderInput | SortOrder
    shape?: SortOrderInput | SortOrder
    isFresh?: SortOrder
    isGlutenFree?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _relevance?: PastaOrderByRelevanceInput
  }

  export type PastaWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    name?: string
    AND?: PastaWhereInput | PastaWhereInput[]
    OR?: PastaWhereInput[]
    NOT?: PastaWhereInput | PastaWhereInput[]
    description?: StringNullableFilter<"Pasta"> | string | null
    shape?: StringNullableFilter<"Pasta"> | string | null
    isFresh?: BoolFilter<"Pasta"> | boolean
    isGlutenFree?: BoolFilter<"Pasta"> | boolean
    createdAt?: DateTimeFilter<"Pasta"> | Date | string
    updatedAt?: DateTimeFilter<"Pasta"> | Date | string
  }, "id" | "name">

  export type PastaOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrderInput | SortOrder
    shape?: SortOrderInput | SortOrder
    isFresh?: SortOrder
    isGlutenFree?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: PastaCountOrderByAggregateInput
    _avg?: PastaAvgOrderByAggregateInput
    _max?: PastaMaxOrderByAggregateInput
    _min?: PastaMinOrderByAggregateInput
    _sum?: PastaSumOrderByAggregateInput
  }

  export type PastaScalarWhereWithAggregatesInput = {
    AND?: PastaScalarWhereWithAggregatesInput | PastaScalarWhereWithAggregatesInput[]
    OR?: PastaScalarWhereWithAggregatesInput[]
    NOT?: PastaScalarWhereWithAggregatesInput | PastaScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Pasta"> | number
    name?: StringWithAggregatesFilter<"Pasta"> | string
    description?: StringNullableWithAggregatesFilter<"Pasta"> | string | null
    shape?: StringNullableWithAggregatesFilter<"Pasta"> | string | null
    isFresh?: BoolWithAggregatesFilter<"Pasta"> | boolean
    isGlutenFree?: BoolWithAggregatesFilter<"Pasta"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"Pasta"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Pasta"> | Date | string
  }

  export type BreadWhereInput = {
    AND?: BreadWhereInput | BreadWhereInput[]
    OR?: BreadWhereInput[]
    NOT?: BreadWhereInput | BreadWhereInput[]
    id?: IntFilter<"Bread"> | number
    name?: StringFilter<"Bread"> | string
    description?: StringNullableFilter<"Bread"> | string | null
    category?: StringNullableFilter<"Bread"> | string | null
    isGlutenFree?: BoolFilter<"Bread"> | boolean
    createdAt?: DateTimeFilter<"Bread"> | Date | string
    updatedAt?: DateTimeFilter<"Bread"> | Date | string
  }

  export type BreadOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrderInput | SortOrder
    category?: SortOrderInput | SortOrder
    isGlutenFree?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _relevance?: BreadOrderByRelevanceInput
  }

  export type BreadWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    name?: string
    AND?: BreadWhereInput | BreadWhereInput[]
    OR?: BreadWhereInput[]
    NOT?: BreadWhereInput | BreadWhereInput[]
    description?: StringNullableFilter<"Bread"> | string | null
    category?: StringNullableFilter<"Bread"> | string | null
    isGlutenFree?: BoolFilter<"Bread"> | boolean
    createdAt?: DateTimeFilter<"Bread"> | Date | string
    updatedAt?: DateTimeFilter<"Bread"> | Date | string
  }, "id" | "name">

  export type BreadOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrderInput | SortOrder
    category?: SortOrderInput | SortOrder
    isGlutenFree?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: BreadCountOrderByAggregateInput
    _avg?: BreadAvgOrderByAggregateInput
    _max?: BreadMaxOrderByAggregateInput
    _min?: BreadMinOrderByAggregateInput
    _sum?: BreadSumOrderByAggregateInput
  }

  export type BreadScalarWhereWithAggregatesInput = {
    AND?: BreadScalarWhereWithAggregatesInput | BreadScalarWhereWithAggregatesInput[]
    OR?: BreadScalarWhereWithAggregatesInput[]
    NOT?: BreadScalarWhereWithAggregatesInput | BreadScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Bread"> | number
    name?: StringWithAggregatesFilter<"Bread"> | string
    description?: StringNullableWithAggregatesFilter<"Bread"> | string | null
    category?: StringNullableWithAggregatesFilter<"Bread"> | string | null
    isGlutenFree?: BoolWithAggregatesFilter<"Bread"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"Bread"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Bread"> | Date | string
  }

  export type OilAndFatWhereInput = {
    AND?: OilAndFatWhereInput | OilAndFatWhereInput[]
    OR?: OilAndFatWhereInput[]
    NOT?: OilAndFatWhereInput | OilAndFatWhereInput[]
    id?: IntFilter<"OilAndFat"> | number
    name?: StringFilter<"OilAndFat"> | string
    description?: StringNullableFilter<"OilAndFat"> | string | null
    source?: StringNullableFilter<"OilAndFat"> | string | null
    smokePoint?: IntNullableFilter<"OilAndFat"> | number | null
    createdAt?: DateTimeFilter<"OilAndFat"> | Date | string
    updatedAt?: DateTimeFilter<"OilAndFat"> | Date | string
  }

  export type OilAndFatOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrderInput | SortOrder
    source?: SortOrderInput | SortOrder
    smokePoint?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _relevance?: OilAndFatOrderByRelevanceInput
  }

  export type OilAndFatWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    name?: string
    AND?: OilAndFatWhereInput | OilAndFatWhereInput[]
    OR?: OilAndFatWhereInput[]
    NOT?: OilAndFatWhereInput | OilAndFatWhereInput[]
    description?: StringNullableFilter<"OilAndFat"> | string | null
    source?: StringNullableFilter<"OilAndFat"> | string | null
    smokePoint?: IntNullableFilter<"OilAndFat"> | number | null
    createdAt?: DateTimeFilter<"OilAndFat"> | Date | string
    updatedAt?: DateTimeFilter<"OilAndFat"> | Date | string
  }, "id" | "name">

  export type OilAndFatOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrderInput | SortOrder
    source?: SortOrderInput | SortOrder
    smokePoint?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: OilAndFatCountOrderByAggregateInput
    _avg?: OilAndFatAvgOrderByAggregateInput
    _max?: OilAndFatMaxOrderByAggregateInput
    _min?: OilAndFatMinOrderByAggregateInput
    _sum?: OilAndFatSumOrderByAggregateInput
  }

  export type OilAndFatScalarWhereWithAggregatesInput = {
    AND?: OilAndFatScalarWhereWithAggregatesInput | OilAndFatScalarWhereWithAggregatesInput[]
    OR?: OilAndFatScalarWhereWithAggregatesInput[]
    NOT?: OilAndFatScalarWhereWithAggregatesInput | OilAndFatScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"OilAndFat"> | number
    name?: StringWithAggregatesFilter<"OilAndFat"> | string
    description?: StringNullableWithAggregatesFilter<"OilAndFat"> | string | null
    source?: StringNullableWithAggregatesFilter<"OilAndFat"> | string | null
    smokePoint?: IntNullableWithAggregatesFilter<"OilAndFat"> | number | null
    createdAt?: DateTimeWithAggregatesFilter<"OilAndFat"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"OilAndFat"> | Date | string
  }

  export type CondimentWhereInput = {
    AND?: CondimentWhereInput | CondimentWhereInput[]
    OR?: CondimentWhereInput[]
    NOT?: CondimentWhereInput | CondimentWhereInput[]
    id?: IntFilter<"Condiment"> | number
    name?: StringFilter<"Condiment"> | string
    description?: StringNullableFilter<"Condiment"> | string | null
    category?: StringNullableFilter<"Condiment"> | string | null
    isSpicy?: BoolFilter<"Condiment"> | boolean
    createdAt?: DateTimeFilter<"Condiment"> | Date | string
    updatedAt?: DateTimeFilter<"Condiment"> | Date | string
  }

  export type CondimentOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrderInput | SortOrder
    category?: SortOrderInput | SortOrder
    isSpicy?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _relevance?: CondimentOrderByRelevanceInput
  }

  export type CondimentWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    name?: string
    AND?: CondimentWhereInput | CondimentWhereInput[]
    OR?: CondimentWhereInput[]
    NOT?: CondimentWhereInput | CondimentWhereInput[]
    description?: StringNullableFilter<"Condiment"> | string | null
    category?: StringNullableFilter<"Condiment"> | string | null
    isSpicy?: BoolFilter<"Condiment"> | boolean
    createdAt?: DateTimeFilter<"Condiment"> | Date | string
    updatedAt?: DateTimeFilter<"Condiment"> | Date | string
  }, "id" | "name">

  export type CondimentOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrderInput | SortOrder
    category?: SortOrderInput | SortOrder
    isSpicy?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: CondimentCountOrderByAggregateInput
    _avg?: CondimentAvgOrderByAggregateInput
    _max?: CondimentMaxOrderByAggregateInput
    _min?: CondimentMinOrderByAggregateInput
    _sum?: CondimentSumOrderByAggregateInput
  }

  export type CondimentScalarWhereWithAggregatesInput = {
    AND?: CondimentScalarWhereWithAggregatesInput | CondimentScalarWhereWithAggregatesInput[]
    OR?: CondimentScalarWhereWithAggregatesInput[]
    NOT?: CondimentScalarWhereWithAggregatesInput | CondimentScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Condiment"> | number
    name?: StringWithAggregatesFilter<"Condiment"> | string
    description?: StringNullableWithAggregatesFilter<"Condiment"> | string | null
    category?: StringNullableWithAggregatesFilter<"Condiment"> | string | null
    isSpicy?: BoolWithAggregatesFilter<"Condiment"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"Condiment"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Condiment"> | Date | string
  }

  export type SoupStockWhereInput = {
    AND?: SoupStockWhereInput | SoupStockWhereInput[]
    OR?: SoupStockWhereInput[]
    NOT?: SoupStockWhereInput | SoupStockWhereInput[]
    id?: IntFilter<"SoupStock"> | number
    name?: StringFilter<"SoupStock"> | string
    description?: StringNullableFilter<"SoupStock"> | string | null
    base?: StringNullableFilter<"SoupStock"> | string | null
    isInstant?: BoolFilter<"SoupStock"> | boolean
    createdAt?: DateTimeFilter<"SoupStock"> | Date | string
    updatedAt?: DateTimeFilter<"SoupStock"> | Date | string
  }

  export type SoupStockOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrderInput | SortOrder
    base?: SortOrderInput | SortOrder
    isInstant?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _relevance?: SoupStockOrderByRelevanceInput
  }

  export type SoupStockWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    name?: string
    AND?: SoupStockWhereInput | SoupStockWhereInput[]
    OR?: SoupStockWhereInput[]
    NOT?: SoupStockWhereInput | SoupStockWhereInput[]
    description?: StringNullableFilter<"SoupStock"> | string | null
    base?: StringNullableFilter<"SoupStock"> | string | null
    isInstant?: BoolFilter<"SoupStock"> | boolean
    createdAt?: DateTimeFilter<"SoupStock"> | Date | string
    updatedAt?: DateTimeFilter<"SoupStock"> | Date | string
  }, "id" | "name">

  export type SoupStockOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrderInput | SortOrder
    base?: SortOrderInput | SortOrder
    isInstant?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: SoupStockCountOrderByAggregateInput
    _avg?: SoupStockAvgOrderByAggregateInput
    _max?: SoupStockMaxOrderByAggregateInput
    _min?: SoupStockMinOrderByAggregateInput
    _sum?: SoupStockSumOrderByAggregateInput
  }

  export type SoupStockScalarWhereWithAggregatesInput = {
    AND?: SoupStockScalarWhereWithAggregatesInput | SoupStockScalarWhereWithAggregatesInput[]
    OR?: SoupStockScalarWhereWithAggregatesInput[]
    NOT?: SoupStockScalarWhereWithAggregatesInput | SoupStockScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"SoupStock"> | number
    name?: StringWithAggregatesFilter<"SoupStock"> | string
    description?: StringNullableWithAggregatesFilter<"SoupStock"> | string | null
    base?: StringNullableWithAggregatesFilter<"SoupStock"> | string | null
    isInstant?: BoolWithAggregatesFilter<"SoupStock"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"SoupStock"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"SoupStock"> | Date | string
  }

  export type BeverageWhereInput = {
    AND?: BeverageWhereInput | BeverageWhereInput[]
    OR?: BeverageWhereInput[]
    NOT?: BeverageWhereInput | BeverageWhereInput[]
    id?: IntFilter<"Beverage"> | number
    name?: StringFilter<"Beverage"> | string
    description?: StringNullableFilter<"Beverage"> | string | null
    category?: StringFilter<"Beverage"> | string
    isAlcoholic?: BoolFilter<"Beverage"> | boolean
    abv?: FloatNullableFilter<"Beverage"> | number | null
    createdAt?: DateTimeFilter<"Beverage"> | Date | string
    updatedAt?: DateTimeFilter<"Beverage"> | Date | string
  }

  export type BeverageOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrderInput | SortOrder
    category?: SortOrder
    isAlcoholic?: SortOrder
    abv?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _relevance?: BeverageOrderByRelevanceInput
  }

  export type BeverageWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    name?: string
    AND?: BeverageWhereInput | BeverageWhereInput[]
    OR?: BeverageWhereInput[]
    NOT?: BeverageWhereInput | BeverageWhereInput[]
    description?: StringNullableFilter<"Beverage"> | string | null
    category?: StringFilter<"Beverage"> | string
    isAlcoholic?: BoolFilter<"Beverage"> | boolean
    abv?: FloatNullableFilter<"Beverage"> | number | null
    createdAt?: DateTimeFilter<"Beverage"> | Date | string
    updatedAt?: DateTimeFilter<"Beverage"> | Date | string
  }, "id" | "name">

  export type BeverageOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrderInput | SortOrder
    category?: SortOrder
    isAlcoholic?: SortOrder
    abv?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: BeverageCountOrderByAggregateInput
    _avg?: BeverageAvgOrderByAggregateInput
    _max?: BeverageMaxOrderByAggregateInput
    _min?: BeverageMinOrderByAggregateInput
    _sum?: BeverageSumOrderByAggregateInput
  }

  export type BeverageScalarWhereWithAggregatesInput = {
    AND?: BeverageScalarWhereWithAggregatesInput | BeverageScalarWhereWithAggregatesInput[]
    OR?: BeverageScalarWhereWithAggregatesInput[]
    NOT?: BeverageScalarWhereWithAggregatesInput | BeverageScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Beverage"> | number
    name?: StringWithAggregatesFilter<"Beverage"> | string
    description?: StringNullableWithAggregatesFilter<"Beverage"> | string | null
    category?: StringWithAggregatesFilter<"Beverage"> | string
    isAlcoholic?: BoolWithAggregatesFilter<"Beverage"> | boolean
    abv?: FloatNullableWithAggregatesFilter<"Beverage"> | number | null
    createdAt?: DateTimeWithAggregatesFilter<"Beverage"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Beverage"> | Date | string
  }

  export type BakingGoodWhereInput = {
    AND?: BakingGoodWhereInput | BakingGoodWhereInput[]
    OR?: BakingGoodWhereInput[]
    NOT?: BakingGoodWhereInput | BakingGoodWhereInput[]
    id?: IntFilter<"BakingGood"> | number
    name?: StringFilter<"BakingGood"> | string
    description?: StringNullableFilter<"BakingGood"> | string | null
    category?: StringNullableFilter<"BakingGood"> | string | null
    isGlutenFree?: BoolFilter<"BakingGood"> | boolean
    createdAt?: DateTimeFilter<"BakingGood"> | Date | string
    updatedAt?: DateTimeFilter<"BakingGood"> | Date | string
  }

  export type BakingGoodOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrderInput | SortOrder
    category?: SortOrderInput | SortOrder
    isGlutenFree?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _relevance?: BakingGoodOrderByRelevanceInput
  }

  export type BakingGoodWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    name?: string
    AND?: BakingGoodWhereInput | BakingGoodWhereInput[]
    OR?: BakingGoodWhereInput[]
    NOT?: BakingGoodWhereInput | BakingGoodWhereInput[]
    description?: StringNullableFilter<"BakingGood"> | string | null
    category?: StringNullableFilter<"BakingGood"> | string | null
    isGlutenFree?: BoolFilter<"BakingGood"> | boolean
    createdAt?: DateTimeFilter<"BakingGood"> | Date | string
    updatedAt?: DateTimeFilter<"BakingGood"> | Date | string
  }, "id" | "name">

  export type BakingGoodOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrderInput | SortOrder
    category?: SortOrderInput | SortOrder
    isGlutenFree?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: BakingGoodCountOrderByAggregateInput
    _avg?: BakingGoodAvgOrderByAggregateInput
    _max?: BakingGoodMaxOrderByAggregateInput
    _min?: BakingGoodMinOrderByAggregateInput
    _sum?: BakingGoodSumOrderByAggregateInput
  }

  export type BakingGoodScalarWhereWithAggregatesInput = {
    AND?: BakingGoodScalarWhereWithAggregatesInput | BakingGoodScalarWhereWithAggregatesInput[]
    OR?: BakingGoodScalarWhereWithAggregatesInput[]
    NOT?: BakingGoodScalarWhereWithAggregatesInput | BakingGoodScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"BakingGood"> | number
    name?: StringWithAggregatesFilter<"BakingGood"> | string
    description?: StringNullableWithAggregatesFilter<"BakingGood"> | string | null
    category?: StringNullableWithAggregatesFilter<"BakingGood"> | string | null
    isGlutenFree?: BoolWithAggregatesFilter<"BakingGood"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"BakingGood"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"BakingGood"> | Date | string
  }

  export type DoughWrapperWhereInput = {
    AND?: DoughWrapperWhereInput | DoughWrapperWhereInput[]
    OR?: DoughWrapperWhereInput[]
    NOT?: DoughWrapperWhereInput | DoughWrapperWhereInput[]
    id?: IntFilter<"DoughWrapper"> | number
    name?: StringFilter<"DoughWrapper"> | string
    description?: StringNullableFilter<"DoughWrapper"> | string | null
    type?: StringNullableFilter<"DoughWrapper"> | string | null
    isPreMade?: BoolFilter<"DoughWrapper"> | boolean
    createdAt?: DateTimeFilter<"DoughWrapper"> | Date | string
    updatedAt?: DateTimeFilter<"DoughWrapper"> | Date | string
  }

  export type DoughWrapperOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrderInput | SortOrder
    type?: SortOrderInput | SortOrder
    isPreMade?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _relevance?: DoughWrapperOrderByRelevanceInput
  }

  export type DoughWrapperWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    name?: string
    AND?: DoughWrapperWhereInput | DoughWrapperWhereInput[]
    OR?: DoughWrapperWhereInput[]
    NOT?: DoughWrapperWhereInput | DoughWrapperWhereInput[]
    description?: StringNullableFilter<"DoughWrapper"> | string | null
    type?: StringNullableFilter<"DoughWrapper"> | string | null
    isPreMade?: BoolFilter<"DoughWrapper"> | boolean
    createdAt?: DateTimeFilter<"DoughWrapper"> | Date | string
    updatedAt?: DateTimeFilter<"DoughWrapper"> | Date | string
  }, "id" | "name">

  export type DoughWrapperOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrderInput | SortOrder
    type?: SortOrderInput | SortOrder
    isPreMade?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: DoughWrapperCountOrderByAggregateInput
    _avg?: DoughWrapperAvgOrderByAggregateInput
    _max?: DoughWrapperMaxOrderByAggregateInput
    _min?: DoughWrapperMinOrderByAggregateInput
    _sum?: DoughWrapperSumOrderByAggregateInput
  }

  export type DoughWrapperScalarWhereWithAggregatesInput = {
    AND?: DoughWrapperScalarWhereWithAggregatesInput | DoughWrapperScalarWhereWithAggregatesInput[]
    OR?: DoughWrapperScalarWhereWithAggregatesInput[]
    NOT?: DoughWrapperScalarWhereWithAggregatesInput | DoughWrapperScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"DoughWrapper"> | number
    name?: StringWithAggregatesFilter<"DoughWrapper"> | string
    description?: StringNullableWithAggregatesFilter<"DoughWrapper"> | string | null
    type?: StringNullableWithAggregatesFilter<"DoughWrapper"> | string | null
    isPreMade?: BoolWithAggregatesFilter<"DoughWrapper"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"DoughWrapper"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"DoughWrapper"> | Date | string
  }

  export type CuisineCreateInput = {
    name: string
    description: string
  }

  export type CuisineUncheckedCreateInput = {
    id?: number
    name: string
    description: string
  }

  export type CuisineUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
  }

  export type CuisineUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
  }

  export type CuisineCreateManyInput = {
    id?: number
    name: string
    description: string
  }

  export type CuisineUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
  }

  export type CuisineUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
  }

  export type PantryEssentialCreateInput = {
    name: string
    description?: string | null
    shelfLife?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PantryEssentialUncheckedCreateInput = {
    id?: number
    name: string
    description?: string | null
    shelfLife?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PantryEssentialUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    shelfLife?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PantryEssentialUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    shelfLife?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PantryEssentialCreateManyInput = {
    id?: number
    name: string
    description?: string | null
    shelfLife?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PantryEssentialUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    shelfLife?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PantryEssentialUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    shelfLife?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VegetableCreateInput = {
    name: string
    description?: string | null
    isOrganic?: boolean
    category?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type VegetableUncheckedCreateInput = {
    id?: number
    name: string
    description?: string | null
    isOrganic?: boolean
    category?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type VegetableUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    isOrganic?: BoolFieldUpdateOperationsInput | boolean
    category?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VegetableUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    isOrganic?: BoolFieldUpdateOperationsInput | boolean
    category?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VegetableCreateManyInput = {
    id?: number
    name: string
    description?: string | null
    isOrganic?: boolean
    category?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type VegetableUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    isOrganic?: BoolFieldUpdateOperationsInput | boolean
    category?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VegetableUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    isOrganic?: BoolFieldUpdateOperationsInput | boolean
    category?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MushroomCreateInput = {
    name: string
    description?: string | null
    isWild?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type MushroomUncheckedCreateInput = {
    id?: number
    name: string
    description?: string | null
    isWild?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type MushroomUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    isWild?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MushroomUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    isWild?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MushroomCreateManyInput = {
    id?: number
    name: string
    description?: string | null
    isWild?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type MushroomUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    isWild?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MushroomUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    isWild?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FruitCreateInput = {
    name: string
    description?: string | null
    isTropical?: boolean
    isBerry?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type FruitUncheckedCreateInput = {
    id?: number
    name: string
    description?: string | null
    isTropical?: boolean
    isBerry?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type FruitUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    isTropical?: BoolFieldUpdateOperationsInput | boolean
    isBerry?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FruitUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    isTropical?: BoolFieldUpdateOperationsInput | boolean
    isBerry?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FruitCreateManyInput = {
    id?: number
    name: string
    description?: string | null
    isTropical?: boolean
    isBerry?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type FruitUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    isTropical?: BoolFieldUpdateOperationsInput | boolean
    isBerry?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FruitUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    isTropical?: BoolFieldUpdateOperationsInput | boolean
    isBerry?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NutAndSeedCreateInput = {
    name: string
    description?: string | null
    isNut: boolean
    isSeed: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type NutAndSeedUncheckedCreateInput = {
    id?: number
    name: string
    description?: string | null
    isNut: boolean
    isSeed: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type NutAndSeedUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    isNut?: BoolFieldUpdateOperationsInput | boolean
    isSeed?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NutAndSeedUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    isNut?: BoolFieldUpdateOperationsInput | boolean
    isSeed?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NutAndSeedCreateManyInput = {
    id?: number
    name: string
    description?: string | null
    isNut: boolean
    isSeed: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type NutAndSeedUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    isNut?: BoolFieldUpdateOperationsInput | boolean
    isSeed?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NutAndSeedUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    isNut?: BoolFieldUpdateOperationsInput | boolean
    isSeed?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DairyCreateInput = {
    name: string
    description?: string | null
    category?: string | null
    isVegan?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type DairyUncheckedCreateInput = {
    id?: number
    name: string
    description?: string | null
    category?: string | null
    isVegan?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type DairyUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    category?: NullableStringFieldUpdateOperationsInput | string | null
    isVegan?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DairyUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    category?: NullableStringFieldUpdateOperationsInput | string | null
    isVegan?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DairyCreateManyInput = {
    id?: number
    name: string
    description?: string | null
    category?: string | null
    isVegan?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type DairyUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    category?: NullableStringFieldUpdateOperationsInput | string | null
    isVegan?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DairyUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    category?: NullableStringFieldUpdateOperationsInput | string | null
    isVegan?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MeatCreateInput = {
    name: string
    description?: string | null
    category: string
    cutType?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type MeatUncheckedCreateInput = {
    id?: number
    name: string
    description?: string | null
    category: string
    cutType?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type MeatUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    category?: StringFieldUpdateOperationsInput | string
    cutType?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MeatUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    category?: StringFieldUpdateOperationsInput | string
    cutType?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MeatCreateManyInput = {
    id?: number
    name: string
    description?: string | null
    category: string
    cutType?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type MeatUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    category?: StringFieldUpdateOperationsInput | string
    cutType?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MeatUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    category?: StringFieldUpdateOperationsInput | string
    cutType?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SeafoodCreateInput = {
    name: string
    description?: string | null
    category: string
    isFreshwater?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SeafoodUncheckedCreateInput = {
    id?: number
    name: string
    description?: string | null
    category: string
    isFreshwater?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SeafoodUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    category?: StringFieldUpdateOperationsInput | string
    isFreshwater?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SeafoodUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    category?: StringFieldUpdateOperationsInput | string
    isFreshwater?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SeafoodCreateManyInput = {
    id?: number
    name: string
    description?: string | null
    category: string
    isFreshwater?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SeafoodUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    category?: StringFieldUpdateOperationsInput | string
    isFreshwater?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SeafoodUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    category?: StringFieldUpdateOperationsInput | string
    isFreshwater?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type HerbAndSpiceCreateInput = {
    name: string
    description?: string | null
    isHerb: boolean
    isSpice: boolean
    isBlend?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type HerbAndSpiceUncheckedCreateInput = {
    id?: number
    name: string
    description?: string | null
    isHerb: boolean
    isSpice: boolean
    isBlend?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type HerbAndSpiceUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    isHerb?: BoolFieldUpdateOperationsInput | boolean
    isSpice?: BoolFieldUpdateOperationsInput | boolean
    isBlend?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type HerbAndSpiceUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    isHerb?: BoolFieldUpdateOperationsInput | boolean
    isSpice?: BoolFieldUpdateOperationsInput | boolean
    isBlend?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type HerbAndSpiceCreateManyInput = {
    id?: number
    name: string
    description?: string | null
    isHerb: boolean
    isSpice: boolean
    isBlend?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type HerbAndSpiceUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    isHerb?: BoolFieldUpdateOperationsInput | boolean
    isSpice?: BoolFieldUpdateOperationsInput | boolean
    isBlend?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type HerbAndSpiceUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    isHerb?: BoolFieldUpdateOperationsInput | boolean
    isSpice?: BoolFieldUpdateOperationsInput | boolean
    isBlend?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SweetenerCreateInput = {
    name: string
    description?: string | null
    isNatural?: boolean
    isArtificial?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SweetenerUncheckedCreateInput = {
    id?: number
    name: string
    description?: string | null
    isNatural?: boolean
    isArtificial?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SweetenerUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    isNatural?: BoolFieldUpdateOperationsInput | boolean
    isArtificial?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SweetenerUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    isNatural?: BoolFieldUpdateOperationsInput | boolean
    isArtificial?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SweetenerCreateManyInput = {
    id?: number
    name: string
    description?: string | null
    isNatural?: boolean
    isArtificial?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SweetenerUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    isNatural?: BoolFieldUpdateOperationsInput | boolean
    isArtificial?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SweetenerUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    isNatural?: BoolFieldUpdateOperationsInput | boolean
    isArtificial?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type GrainCreateInput = {
    name: string
    description?: string | null
    category?: string | null
    isGlutenFree?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type GrainUncheckedCreateInput = {
    id?: number
    name: string
    description?: string | null
    category?: string | null
    isGlutenFree?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type GrainUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    category?: NullableStringFieldUpdateOperationsInput | string | null
    isGlutenFree?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type GrainUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    category?: NullableStringFieldUpdateOperationsInput | string | null
    isGlutenFree?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type GrainCreateManyInput = {
    id?: number
    name: string
    description?: string | null
    category?: string | null
    isGlutenFree?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type GrainUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    category?: NullableStringFieldUpdateOperationsInput | string | null
    isGlutenFree?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type GrainUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    category?: NullableStringFieldUpdateOperationsInput | string | null
    isGlutenFree?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LegumeCreateInput = {
    name: string
    description?: string | null
    isBean: boolean
    isLentil: boolean
    isPea: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type LegumeUncheckedCreateInput = {
    id?: number
    name: string
    description?: string | null
    isBean: boolean
    isLentil: boolean
    isPea: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type LegumeUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    isBean?: BoolFieldUpdateOperationsInput | boolean
    isLentil?: BoolFieldUpdateOperationsInput | boolean
    isPea?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LegumeUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    isBean?: BoolFieldUpdateOperationsInput | boolean
    isLentil?: BoolFieldUpdateOperationsInput | boolean
    isPea?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LegumeCreateManyInput = {
    id?: number
    name: string
    description?: string | null
    isBean: boolean
    isLentil: boolean
    isPea: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type LegumeUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    isBean?: BoolFieldUpdateOperationsInput | boolean
    isLentil?: BoolFieldUpdateOperationsInput | boolean
    isPea?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LegumeUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    isBean?: BoolFieldUpdateOperationsInput | boolean
    isLentil?: BoolFieldUpdateOperationsInput | boolean
    isPea?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PastaCreateInput = {
    name: string
    description?: string | null
    shape?: string | null
    isFresh?: boolean
    isGlutenFree?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PastaUncheckedCreateInput = {
    id?: number
    name: string
    description?: string | null
    shape?: string | null
    isFresh?: boolean
    isGlutenFree?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PastaUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    shape?: NullableStringFieldUpdateOperationsInput | string | null
    isFresh?: BoolFieldUpdateOperationsInput | boolean
    isGlutenFree?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PastaUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    shape?: NullableStringFieldUpdateOperationsInput | string | null
    isFresh?: BoolFieldUpdateOperationsInput | boolean
    isGlutenFree?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PastaCreateManyInput = {
    id?: number
    name: string
    description?: string | null
    shape?: string | null
    isFresh?: boolean
    isGlutenFree?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PastaUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    shape?: NullableStringFieldUpdateOperationsInput | string | null
    isFresh?: BoolFieldUpdateOperationsInput | boolean
    isGlutenFree?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PastaUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    shape?: NullableStringFieldUpdateOperationsInput | string | null
    isFresh?: BoolFieldUpdateOperationsInput | boolean
    isGlutenFree?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BreadCreateInput = {
    name: string
    description?: string | null
    category?: string | null
    isGlutenFree?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type BreadUncheckedCreateInput = {
    id?: number
    name: string
    description?: string | null
    category?: string | null
    isGlutenFree?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type BreadUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    category?: NullableStringFieldUpdateOperationsInput | string | null
    isGlutenFree?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BreadUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    category?: NullableStringFieldUpdateOperationsInput | string | null
    isGlutenFree?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BreadCreateManyInput = {
    id?: number
    name: string
    description?: string | null
    category?: string | null
    isGlutenFree?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type BreadUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    category?: NullableStringFieldUpdateOperationsInput | string | null
    isGlutenFree?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BreadUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    category?: NullableStringFieldUpdateOperationsInput | string | null
    isGlutenFree?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OilAndFatCreateInput = {
    name: string
    description?: string | null
    source?: string | null
    smokePoint?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type OilAndFatUncheckedCreateInput = {
    id?: number
    name: string
    description?: string | null
    source?: string | null
    smokePoint?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type OilAndFatUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    source?: NullableStringFieldUpdateOperationsInput | string | null
    smokePoint?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OilAndFatUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    source?: NullableStringFieldUpdateOperationsInput | string | null
    smokePoint?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OilAndFatCreateManyInput = {
    id?: number
    name: string
    description?: string | null
    source?: string | null
    smokePoint?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type OilAndFatUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    source?: NullableStringFieldUpdateOperationsInput | string | null
    smokePoint?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OilAndFatUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    source?: NullableStringFieldUpdateOperationsInput | string | null
    smokePoint?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CondimentCreateInput = {
    name: string
    description?: string | null
    category?: string | null
    isSpicy?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CondimentUncheckedCreateInput = {
    id?: number
    name: string
    description?: string | null
    category?: string | null
    isSpicy?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CondimentUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    category?: NullableStringFieldUpdateOperationsInput | string | null
    isSpicy?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CondimentUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    category?: NullableStringFieldUpdateOperationsInput | string | null
    isSpicy?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CondimentCreateManyInput = {
    id?: number
    name: string
    description?: string | null
    category?: string | null
    isSpicy?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CondimentUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    category?: NullableStringFieldUpdateOperationsInput | string | null
    isSpicy?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CondimentUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    category?: NullableStringFieldUpdateOperationsInput | string | null
    isSpicy?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SoupStockCreateInput = {
    name: string
    description?: string | null
    base?: string | null
    isInstant?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SoupStockUncheckedCreateInput = {
    id?: number
    name: string
    description?: string | null
    base?: string | null
    isInstant?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SoupStockUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    base?: NullableStringFieldUpdateOperationsInput | string | null
    isInstant?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SoupStockUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    base?: NullableStringFieldUpdateOperationsInput | string | null
    isInstant?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SoupStockCreateManyInput = {
    id?: number
    name: string
    description?: string | null
    base?: string | null
    isInstant?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SoupStockUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    base?: NullableStringFieldUpdateOperationsInput | string | null
    isInstant?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SoupStockUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    base?: NullableStringFieldUpdateOperationsInput | string | null
    isInstant?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BeverageCreateInput = {
    name: string
    description?: string | null
    category: string
    isAlcoholic?: boolean
    abv?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type BeverageUncheckedCreateInput = {
    id?: number
    name: string
    description?: string | null
    category: string
    isAlcoholic?: boolean
    abv?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type BeverageUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    category?: StringFieldUpdateOperationsInput | string
    isAlcoholic?: BoolFieldUpdateOperationsInput | boolean
    abv?: NullableFloatFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BeverageUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    category?: StringFieldUpdateOperationsInput | string
    isAlcoholic?: BoolFieldUpdateOperationsInput | boolean
    abv?: NullableFloatFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BeverageCreateManyInput = {
    id?: number
    name: string
    description?: string | null
    category: string
    isAlcoholic?: boolean
    abv?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type BeverageUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    category?: StringFieldUpdateOperationsInput | string
    isAlcoholic?: BoolFieldUpdateOperationsInput | boolean
    abv?: NullableFloatFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BeverageUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    category?: StringFieldUpdateOperationsInput | string
    isAlcoholic?: BoolFieldUpdateOperationsInput | boolean
    abv?: NullableFloatFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BakingGoodCreateInput = {
    name: string
    description?: string | null
    category?: string | null
    isGlutenFree?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type BakingGoodUncheckedCreateInput = {
    id?: number
    name: string
    description?: string | null
    category?: string | null
    isGlutenFree?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type BakingGoodUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    category?: NullableStringFieldUpdateOperationsInput | string | null
    isGlutenFree?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BakingGoodUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    category?: NullableStringFieldUpdateOperationsInput | string | null
    isGlutenFree?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BakingGoodCreateManyInput = {
    id?: number
    name: string
    description?: string | null
    category?: string | null
    isGlutenFree?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type BakingGoodUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    category?: NullableStringFieldUpdateOperationsInput | string | null
    isGlutenFree?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BakingGoodUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    category?: NullableStringFieldUpdateOperationsInput | string | null
    isGlutenFree?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DoughWrapperCreateInput = {
    name: string
    description?: string | null
    type?: string | null
    isPreMade?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type DoughWrapperUncheckedCreateInput = {
    id?: number
    name: string
    description?: string | null
    type?: string | null
    isPreMade?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type DoughWrapperUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    type?: NullableStringFieldUpdateOperationsInput | string | null
    isPreMade?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DoughWrapperUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    type?: NullableStringFieldUpdateOperationsInput | string | null
    isPreMade?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DoughWrapperCreateManyInput = {
    id?: number
    name: string
    description?: string | null
    type?: string | null
    isPreMade?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type DoughWrapperUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    type?: NullableStringFieldUpdateOperationsInput | string | null
    isPreMade?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DoughWrapperUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    type?: NullableStringFieldUpdateOperationsInput | string | null
    isPreMade?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type CuisineOrderByRelevanceInput = {
    fields: CuisineOrderByRelevanceFieldEnum | CuisineOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type CuisineCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
  }

  export type CuisineAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type CuisineMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
  }

  export type CuisineMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
  }

  export type CuisineSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type PantryEssentialOrderByRelevanceInput = {
    fields: PantryEssentialOrderByRelevanceFieldEnum | PantryEssentialOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type PantryEssentialCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    shelfLife?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PantryEssentialAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type PantryEssentialMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    shelfLife?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PantryEssentialMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    shelfLife?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PantryEssentialSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type VegetableOrderByRelevanceInput = {
    fields: VegetableOrderByRelevanceFieldEnum | VegetableOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type VegetableCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    isOrganic?: SortOrder
    category?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type VegetableAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type VegetableMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    isOrganic?: SortOrder
    category?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type VegetableMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    isOrganic?: SortOrder
    category?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type VegetableSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type MushroomOrderByRelevanceInput = {
    fields: MushroomOrderByRelevanceFieldEnum | MushroomOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type MushroomCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    isWild?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type MushroomAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type MushroomMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    isWild?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type MushroomMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    isWild?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type MushroomSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type FruitOrderByRelevanceInput = {
    fields: FruitOrderByRelevanceFieldEnum | FruitOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type FruitCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    isTropical?: SortOrder
    isBerry?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type FruitAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type FruitMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    isTropical?: SortOrder
    isBerry?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type FruitMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    isTropical?: SortOrder
    isBerry?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type FruitSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type NutAndSeedOrderByRelevanceInput = {
    fields: NutAndSeedOrderByRelevanceFieldEnum | NutAndSeedOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type NutAndSeedCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    isNut?: SortOrder
    isSeed?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type NutAndSeedAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type NutAndSeedMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    isNut?: SortOrder
    isSeed?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type NutAndSeedMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    isNut?: SortOrder
    isSeed?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type NutAndSeedSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type DairyOrderByRelevanceInput = {
    fields: DairyOrderByRelevanceFieldEnum | DairyOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type DairyCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    category?: SortOrder
    isVegan?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type DairyAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type DairyMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    category?: SortOrder
    isVegan?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type DairyMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    category?: SortOrder
    isVegan?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type DairySumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type MeatOrderByRelevanceInput = {
    fields: MeatOrderByRelevanceFieldEnum | MeatOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type MeatCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    category?: SortOrder
    cutType?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type MeatAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type MeatMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    category?: SortOrder
    cutType?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type MeatMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    category?: SortOrder
    cutType?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type MeatSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type SeafoodOrderByRelevanceInput = {
    fields: SeafoodOrderByRelevanceFieldEnum | SeafoodOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type SeafoodCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    category?: SortOrder
    isFreshwater?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type SeafoodAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type SeafoodMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    category?: SortOrder
    isFreshwater?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type SeafoodMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    category?: SortOrder
    isFreshwater?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type SeafoodSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type HerbAndSpiceOrderByRelevanceInput = {
    fields: HerbAndSpiceOrderByRelevanceFieldEnum | HerbAndSpiceOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type HerbAndSpiceCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    isHerb?: SortOrder
    isSpice?: SortOrder
    isBlend?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type HerbAndSpiceAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type HerbAndSpiceMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    isHerb?: SortOrder
    isSpice?: SortOrder
    isBlend?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type HerbAndSpiceMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    isHerb?: SortOrder
    isSpice?: SortOrder
    isBlend?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type HerbAndSpiceSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type SweetenerOrderByRelevanceInput = {
    fields: SweetenerOrderByRelevanceFieldEnum | SweetenerOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type SweetenerCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    isNatural?: SortOrder
    isArtificial?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type SweetenerAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type SweetenerMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    isNatural?: SortOrder
    isArtificial?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type SweetenerMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    isNatural?: SortOrder
    isArtificial?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type SweetenerSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type GrainOrderByRelevanceInput = {
    fields: GrainOrderByRelevanceFieldEnum | GrainOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type GrainCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    category?: SortOrder
    isGlutenFree?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type GrainAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type GrainMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    category?: SortOrder
    isGlutenFree?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type GrainMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    category?: SortOrder
    isGlutenFree?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type GrainSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type LegumeOrderByRelevanceInput = {
    fields: LegumeOrderByRelevanceFieldEnum | LegumeOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type LegumeCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    isBean?: SortOrder
    isLentil?: SortOrder
    isPea?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type LegumeAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type LegumeMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    isBean?: SortOrder
    isLentil?: SortOrder
    isPea?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type LegumeMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    isBean?: SortOrder
    isLentil?: SortOrder
    isPea?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type LegumeSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type PastaOrderByRelevanceInput = {
    fields: PastaOrderByRelevanceFieldEnum | PastaOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type PastaCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    shape?: SortOrder
    isFresh?: SortOrder
    isGlutenFree?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PastaAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type PastaMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    shape?: SortOrder
    isFresh?: SortOrder
    isGlutenFree?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PastaMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    shape?: SortOrder
    isFresh?: SortOrder
    isGlutenFree?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PastaSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type BreadOrderByRelevanceInput = {
    fields: BreadOrderByRelevanceFieldEnum | BreadOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type BreadCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    category?: SortOrder
    isGlutenFree?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type BreadAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type BreadMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    category?: SortOrder
    isGlutenFree?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type BreadMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    category?: SortOrder
    isGlutenFree?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type BreadSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type OilAndFatOrderByRelevanceInput = {
    fields: OilAndFatOrderByRelevanceFieldEnum | OilAndFatOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type OilAndFatCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    source?: SortOrder
    smokePoint?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type OilAndFatAvgOrderByAggregateInput = {
    id?: SortOrder
    smokePoint?: SortOrder
  }

  export type OilAndFatMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    source?: SortOrder
    smokePoint?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type OilAndFatMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    source?: SortOrder
    smokePoint?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type OilAndFatSumOrderByAggregateInput = {
    id?: SortOrder
    smokePoint?: SortOrder
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type CondimentOrderByRelevanceInput = {
    fields: CondimentOrderByRelevanceFieldEnum | CondimentOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type CondimentCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    category?: SortOrder
    isSpicy?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CondimentAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type CondimentMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    category?: SortOrder
    isSpicy?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CondimentMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    category?: SortOrder
    isSpicy?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CondimentSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type SoupStockOrderByRelevanceInput = {
    fields: SoupStockOrderByRelevanceFieldEnum | SoupStockOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type SoupStockCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    base?: SortOrder
    isInstant?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type SoupStockAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type SoupStockMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    base?: SortOrder
    isInstant?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type SoupStockMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    base?: SortOrder
    isInstant?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type SoupStockSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type FloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type BeverageOrderByRelevanceInput = {
    fields: BeverageOrderByRelevanceFieldEnum | BeverageOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type BeverageCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    category?: SortOrder
    isAlcoholic?: SortOrder
    abv?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type BeverageAvgOrderByAggregateInput = {
    id?: SortOrder
    abv?: SortOrder
  }

  export type BeverageMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    category?: SortOrder
    isAlcoholic?: SortOrder
    abv?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type BeverageMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    category?: SortOrder
    isAlcoholic?: SortOrder
    abv?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type BeverageSumOrderByAggregateInput = {
    id?: SortOrder
    abv?: SortOrder
  }

  export type FloatNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedFloatNullableFilter<$PrismaModel>
    _min?: NestedFloatNullableFilter<$PrismaModel>
    _max?: NestedFloatNullableFilter<$PrismaModel>
  }

  export type BakingGoodOrderByRelevanceInput = {
    fields: BakingGoodOrderByRelevanceFieldEnum | BakingGoodOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type BakingGoodCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    category?: SortOrder
    isGlutenFree?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type BakingGoodAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type BakingGoodMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    category?: SortOrder
    isGlutenFree?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type BakingGoodMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    category?: SortOrder
    isGlutenFree?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type BakingGoodSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type DoughWrapperOrderByRelevanceInput = {
    fields: DoughWrapperOrderByRelevanceFieldEnum | DoughWrapperOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type DoughWrapperCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    type?: SortOrder
    isPreMade?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type DoughWrapperAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type DoughWrapperMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    type?: SortOrder
    isPreMade?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type DoughWrapperMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    type?: SortOrder
    isPreMade?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type DoughWrapperSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type NullableFloatFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type NestedFloatNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedFloatNullableFilter<$PrismaModel>
    _min?: NestedFloatNullableFilter<$PrismaModel>
    _max?: NestedFloatNullableFilter<$PrismaModel>
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}