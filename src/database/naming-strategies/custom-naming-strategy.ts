import { DefaultNamingStrategy, Table, NamingStrategyInterface } from 'typeorm';
import { createHash } from 'crypto';

class CustomNamingStrategy
  extends DefaultNamingStrategy
  implements NamingStrategyInterface
{
  foreignKeyName(
    tableOrName: Table | string,
    columnNames: string[],
    referencedTablePath?: string,
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    _referencedColumnNames?: string[],
  ): string {
    tableOrName =
      typeof tableOrName === 'string' ? tableOrName : tableOrName.name;

    const name = columnNames.reduce(
      (name, column) => `${name}_${column}`,
      `public.${tableOrName}_${referencedTablePath}`,
    );

    return `fk_${createHash('md5').update(name).digest('hex')}`;
  }
}

export default new CustomNamingStrategy();
