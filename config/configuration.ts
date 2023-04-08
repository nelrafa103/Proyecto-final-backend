import { readFileSync } from 'fs';
import * as yaml from 'js-yaml';
import { join } from 'path';

const YAML_CONFIG_FILENAME = 'docker.yml';

function configuracion() {
  return yaml.load(
    readFileSync(join('./', YAML_CONFIG_FILENAME), 'utf8'),
  ) as Record<string, any>;
} 
 
export default configuracion;