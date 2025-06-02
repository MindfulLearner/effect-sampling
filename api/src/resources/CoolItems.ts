import { S } from "./lib.js"

class Response extends S.Class<Response>()({
  title: S.String,
  product: S.Struct({
    name: S.String,
    price: S.NullOr(S.String)
  })
}) {}

// test
export class GetCoolItems extends S.Req<GetCoolItems>()("GetCoolItems", {
  echo: S.String
}, { allowAnonymous: true, allowRoles: ["user"], success: Response }) {}

// codegen:start {preset: meta, sourcePrefix: src/resources/}
export const meta = { moduleName: "CoolItems" } as const
// codegen:end
