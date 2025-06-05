import { BookInfo, BookInfoId } from "#models/Book"
import { InvalidStateError, NotFoundError, OptimisticConcurrencyException } from "effect-app/client"
import { S } from "./lib.js"

export class CreateBook extends S.Req<CreateBook>()("CreateBook", BookInfo.pick("title", "body"), {
  allowRoles: ["user"],
  success: S.Struct({ id: BookInfoId }),
  failure: S.Union(NotFoundError, InvalidStateError, OptimisticConcurrencyException)
}) {}

class Response extends S.Class<Response>()({
  title: S.String,
  product: S.Struct({
    name: S.String,
    price: S.NullOr(S.String)
  })
}) {}

export class GetLibrary extends S.Req<GetLibrary>()("GetLibrary", {
  echo: S.String
}, { allowAnonymous: true, allowRoles: ["user"], success: Response }) {}

// codegen:start {preset: meta, sourcePrefix: src/resources/}
export const meta = { moduleName: "Library" } as const
// codegen:end
