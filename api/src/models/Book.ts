import { S } from "effect-app"
import { NonNegativeBigInt } from "effect/Schema"
import { UserFromId } from "./User.js"

export const BookInfoId = S.prefixedStringId<BlogPostId>()("info", "BookInfoId")

export interface BookInfoIdBrand {
  readonly BookInfoId: unique symbol
}
export type BlogPostId = S.StringId & BookInfoIdBrand & `info-${string}`

export class BookInfo extends S.ExtendedClass<BookInfo, BookInfo.Encoded>()({
  id: BookInfoId.withDefault,
  title: S.NonEmptyString255,
  body: S.NonEmptyString2k,
  createdAt: S.Date.withDefault,
  author: S.propertySignature(UserFromId).pipe(S.fromKey("authorId")),
  price: S.NullOr(NonNegativeBigInt)
}) {}

// codegen:start {preset: model}
//
/* eslint-disable */
export namespace BookInfo {
    export interface Encoded extends S.Struct.Encoded<typeof BookInfo["fields"]> {}
}
/* eslint-enable */
//
// codegen:end
