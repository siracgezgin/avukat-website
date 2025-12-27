export const PRACTICE_AREAS_QUERY = `*[_type == "practiceArea"] | order(order asc) {
  _id,
  title,
  "slug": slug.current,
  icon,
  shortDescription,
  order
}`

export const PRACTICE_AREA_BY_SLUG_QUERY = `*[_type == "practiceArea" && slug.current == $slug][0] {
  _id,
  title,
  "slug": slug.current,
  icon,
  shortDescription,
  content,
  order
}`

export const ATTORNEYS_QUERY = `*[_type == "attorney"] {
  _id,
  name,
  title,
  photo,
  bio,
  education,
  barNumber,
  email,
  phone
}`

export const POSTS_QUERY = `*[_type == "post"] | order(publishedAt desc) {
  _id,
  title,
  "slug": slug.current,
  excerpt,
  mainImage,
  publishedAt
}`

export const POST_BY_SLUG_QUERY = `*[_type == "post" && slug.current == $slug][0] {
  _id,
  title,
  "slug": slug.current,
  excerpt,
  mainImage,
  body,
  publishedAt
}`
