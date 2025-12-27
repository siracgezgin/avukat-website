import { type SchemaTypeDefinition } from 'sanity'

import {blockContentType} from './blockContentType'
import {postType} from './post'
import {attorneyType} from './attorney'
import {practiceAreaType} from './practiceArea'
import {testimonialType} from './testimonial'

export const schema = {
  types: [blockContentType, attorneyType, practiceAreaType, postType, testimonialType],
}
