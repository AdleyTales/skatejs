import { readFileSync } from 'fs';
import { md } from '../../utils';

export default md(
  readFileSync(
    __dirname + '/../../../packages/element-preact/README.md'
  ).toString()
);
