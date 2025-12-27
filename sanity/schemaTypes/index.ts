import { type SchemaTypeDefinition } from 'sanity'

import {blockContentType} from './blockContentType'
import {postType} from './post'
import {attorneyType} from './attorney'
import {practiceAreaType} from './practiceArea'

export const schema = {
  types: [blockContentType, postType, attorneyType, practiceAreaType],
}
