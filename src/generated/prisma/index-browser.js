
/* !!! This is code generated by Prisma. Do not edit directly. !!!
/* eslint-disable */

Object.defineProperty(exports, "__esModule", { value: true });

const {
  Decimal,
  objectEnumValues,
  makeStrictEnum,
  Public,
  getRuntime,
  skip
} = require('./runtime/index-browser.js')


const Prisma = {}

exports.Prisma = Prisma
exports.$Enums = {}

/**
 * Prisma Client JS version: 6.7.0
 * Query Engine version: 3cff47a7f5d65c3ea74883f1d736e41d68ce91ed
 */
Prisma.prismaVersion = {
  client: "6.7.0",
  engine: "3cff47a7f5d65c3ea74883f1d736e41d68ce91ed"
}

Prisma.PrismaClientKnownRequestError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientKnownRequestError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)};
Prisma.PrismaClientUnknownRequestError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientUnknownRequestError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.PrismaClientRustPanicError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientRustPanicError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.PrismaClientInitializationError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientInitializationError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.PrismaClientValidationError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientValidationError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.Decimal = Decimal

/**
 * Re-export of sql-template-tag
 */
Prisma.sql = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`sqltag is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.empty = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`empty is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.join = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`join is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.raw = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`raw is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.validator = Public.validator

/**
* Extensions
*/
Prisma.getExtensionContext = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`Extensions.getExtensionContext is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.defineExtension = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`Extensions.defineExtension is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}

/**
 * Shorthand utilities for JSON filtering
 */
Prisma.DbNull = objectEnumValues.instances.DbNull
Prisma.JsonNull = objectEnumValues.instances.JsonNull
Prisma.AnyNull = objectEnumValues.instances.AnyNull

Prisma.NullTypes = {
  DbNull: objectEnumValues.classes.DbNull,
  JsonNull: objectEnumValues.classes.JsonNull,
  AnyNull: objectEnumValues.classes.AnyNull
}



/**
 * Enums
 */

exports.Prisma.TransactionIsolationLevel = makeStrictEnum({
  ReadUncommitted: 'ReadUncommitted',
  ReadCommitted: 'ReadCommitted',
  RepeatableRead: 'RepeatableRead',
  Serializable: 'Serializable'
});

exports.Prisma.CuisineScalarFieldEnum = {
  id: 'id',
  name: 'name',
  description: 'description'
};

exports.Prisma.PantryEssentialScalarFieldEnum = {
  id: 'id',
  name: 'name',
  description: 'description',
  shelfLife: 'shelfLife',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
};

exports.Prisma.VegetableScalarFieldEnum = {
  id: 'id',
  name: 'name',
  description: 'description',
  isOrganic: 'isOrganic',
  category: 'category',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
};

exports.Prisma.MushroomScalarFieldEnum = {
  id: 'id',
  name: 'name',
  description: 'description',
  isWild: 'isWild',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
};

exports.Prisma.FruitScalarFieldEnum = {
  id: 'id',
  name: 'name',
  description: 'description',
  isTropical: 'isTropical',
  isBerry: 'isBerry',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
};

exports.Prisma.NutAndSeedScalarFieldEnum = {
  id: 'id',
  name: 'name',
  description: 'description',
  isNut: 'isNut',
  isSeed: 'isSeed',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
};

exports.Prisma.DairyScalarFieldEnum = {
  id: 'id',
  name: 'name',
  description: 'description',
  category: 'category',
  isVegan: 'isVegan',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
};

exports.Prisma.MeatScalarFieldEnum = {
  id: 'id',
  name: 'name',
  description: 'description',
  category: 'category',
  cutType: 'cutType',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
};

exports.Prisma.SeafoodScalarFieldEnum = {
  id: 'id',
  name: 'name',
  description: 'description',
  category: 'category',
  isFreshwater: 'isFreshwater',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
};

exports.Prisma.HerbAndSpiceScalarFieldEnum = {
  id: 'id',
  name: 'name',
  description: 'description',
  isHerb: 'isHerb',
  isSpice: 'isSpice',
  isBlend: 'isBlend',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
};

exports.Prisma.SweetenerScalarFieldEnum = {
  id: 'id',
  name: 'name',
  description: 'description',
  isNatural: 'isNatural',
  isArtificial: 'isArtificial',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
};

exports.Prisma.GrainScalarFieldEnum = {
  id: 'id',
  name: 'name',
  description: 'description',
  category: 'category',
  isGlutenFree: 'isGlutenFree',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
};

exports.Prisma.LegumeScalarFieldEnum = {
  id: 'id',
  name: 'name',
  description: 'description',
  isBean: 'isBean',
  isLentil: 'isLentil',
  isPea: 'isPea',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
};

exports.Prisma.PastaScalarFieldEnum = {
  id: 'id',
  name: 'name',
  description: 'description',
  shape: 'shape',
  isFresh: 'isFresh',
  isGlutenFree: 'isGlutenFree',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
};

exports.Prisma.BreadScalarFieldEnum = {
  id: 'id',
  name: 'name',
  description: 'description',
  category: 'category',
  isGlutenFree: 'isGlutenFree',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
};

exports.Prisma.OilAndFatScalarFieldEnum = {
  id: 'id',
  name: 'name',
  description: 'description',
  source: 'source',
  smokePoint: 'smokePoint',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
};

exports.Prisma.CondimentScalarFieldEnum = {
  id: 'id',
  name: 'name',
  description: 'description',
  category: 'category',
  isSpicy: 'isSpicy',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
};

exports.Prisma.SoupStockScalarFieldEnum = {
  id: 'id',
  name: 'name',
  description: 'description',
  base: 'base',
  isInstant: 'isInstant',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
};

exports.Prisma.BeverageScalarFieldEnum = {
  id: 'id',
  name: 'name',
  description: 'description',
  category: 'category',
  isAlcoholic: 'isAlcoholic',
  abv: 'abv',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
};

exports.Prisma.BakingGoodScalarFieldEnum = {
  id: 'id',
  name: 'name',
  description: 'description',
  category: 'category',
  isGlutenFree: 'isGlutenFree',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
};

exports.Prisma.DoughWrapperScalarFieldEnum = {
  id: 'id',
  name: 'name',
  description: 'description',
  type: 'type',
  isPreMade: 'isPreMade',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
};

exports.Prisma.SortOrder = {
  asc: 'asc',
  desc: 'desc'
};

exports.Prisma.CuisineOrderByRelevanceFieldEnum = {
  name: 'name',
  description: 'description'
};

exports.Prisma.NullsOrder = {
  first: 'first',
  last: 'last'
};

exports.Prisma.PantryEssentialOrderByRelevanceFieldEnum = {
  name: 'name',
  description: 'description',
  shelfLife: 'shelfLife'
};

exports.Prisma.VegetableOrderByRelevanceFieldEnum = {
  name: 'name',
  description: 'description',
  category: 'category'
};

exports.Prisma.MushroomOrderByRelevanceFieldEnum = {
  name: 'name',
  description: 'description'
};

exports.Prisma.FruitOrderByRelevanceFieldEnum = {
  name: 'name',
  description: 'description'
};

exports.Prisma.NutAndSeedOrderByRelevanceFieldEnum = {
  name: 'name',
  description: 'description'
};

exports.Prisma.DairyOrderByRelevanceFieldEnum = {
  name: 'name',
  description: 'description',
  category: 'category'
};

exports.Prisma.MeatOrderByRelevanceFieldEnum = {
  name: 'name',
  description: 'description',
  category: 'category',
  cutType: 'cutType'
};

exports.Prisma.SeafoodOrderByRelevanceFieldEnum = {
  name: 'name',
  description: 'description',
  category: 'category'
};

exports.Prisma.HerbAndSpiceOrderByRelevanceFieldEnum = {
  name: 'name',
  description: 'description'
};

exports.Prisma.SweetenerOrderByRelevanceFieldEnum = {
  name: 'name',
  description: 'description'
};

exports.Prisma.GrainOrderByRelevanceFieldEnum = {
  name: 'name',
  description: 'description',
  category: 'category'
};

exports.Prisma.LegumeOrderByRelevanceFieldEnum = {
  name: 'name',
  description: 'description'
};

exports.Prisma.PastaOrderByRelevanceFieldEnum = {
  name: 'name',
  description: 'description',
  shape: 'shape'
};

exports.Prisma.BreadOrderByRelevanceFieldEnum = {
  name: 'name',
  description: 'description',
  category: 'category'
};

exports.Prisma.OilAndFatOrderByRelevanceFieldEnum = {
  name: 'name',
  description: 'description',
  source: 'source'
};

exports.Prisma.CondimentOrderByRelevanceFieldEnum = {
  name: 'name',
  description: 'description',
  category: 'category'
};

exports.Prisma.SoupStockOrderByRelevanceFieldEnum = {
  name: 'name',
  description: 'description',
  base: 'base'
};

exports.Prisma.BeverageOrderByRelevanceFieldEnum = {
  name: 'name',
  description: 'description',
  category: 'category'
};

exports.Prisma.BakingGoodOrderByRelevanceFieldEnum = {
  name: 'name',
  description: 'description',
  category: 'category'
};

exports.Prisma.DoughWrapperOrderByRelevanceFieldEnum = {
  name: 'name',
  description: 'description',
  type: 'type'
};


exports.Prisma.ModelName = {
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

/**
 * This is a stub Prisma Client that will error at runtime if called.
 */
class PrismaClient {
  constructor() {
    return new Proxy(this, {
      get(target, prop) {
        let message
        const runtime = getRuntime()
        if (runtime.isEdge) {
          message = `PrismaClient is not configured to run in ${runtime.prettyName}. In order to run Prisma Client on edge runtime, either:
- Use Prisma Accelerate: https://pris.ly/d/accelerate
- Use Driver Adapters: https://pris.ly/d/driver-adapters
`;
        } else {
          message = 'PrismaClient is unable to run in this browser environment, or has been bundled for the browser (running in `' + runtime.prettyName + '`).'
        }

        message += `
If this is unexpected, please open an issue: https://pris.ly/prisma-prisma-bug-report`

        throw new Error(message)
      }
    })
  }
}

exports.PrismaClient = PrismaClient

Object.assign(exports, Prisma)
