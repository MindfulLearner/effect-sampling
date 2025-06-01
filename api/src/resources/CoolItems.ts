import { S } from "./lib.js"
import { nonPositiveBigInt } from "./lib/schema.js"

class Response extends S.Class<Response>()({
  title: S.nonEmptyString,
  price: S.NullOr(nonPositiveBigInt),
  categoties: S.Struct()
}) {}
