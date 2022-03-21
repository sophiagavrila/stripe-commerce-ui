export class Product {
  sku: string;
  name: string;
  description: string;
  unitPrice: number;
  imageUrl: string;
  active: boolean;
  unitsInStock: number;
  dateCreated: Date;
  lastUpdate: Date;

  /**
   * in order to get rid of the compilation error of "must initialize all properties",
   * go to tsconfig.json > set "strict" to false under "compilerOptions"
   */
}
