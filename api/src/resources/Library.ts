import { BookInfo, BookInfoId } from "#models/Book"
import { InvalidStateError, NotFoundError, OptimisticConcurrencyException } from "effect-app/client"
import { S } from "./lib.js"

export class CreateBook extends S.Req<CreateBook>()("CreateBook", BookInfo.pick("title", "body"), {
  allowRoles: ["user"],
  success: S.Struct({ id: BookInfoId }),
  failure: S.Union(NotFoundError, InvalidStateError, OptimisticConcurrencyException)
}) {}

// codegen:start {preset: meta, sourcePrefix: src/resources/}
export const meta = { moduleName: "Library" } as const
// codegen:end
