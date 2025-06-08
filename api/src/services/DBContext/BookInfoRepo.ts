import { RepoDefault } from "#lib/layers"
import { BookInfo } from "#models/Book"
import { UserFromIdResolver } from "#models/User"
import { Model } from "@effect-app/infra"
import { Effect } from "effect"
import { Context } from "effect-app"
import { NonEmptyString255, NonEmptyString2k, NonNegativeBigInt } from "effect-app/Schema"
import { UserRepo } from "./UserRepo.js"

export type BookInfoSeed = "sample" | ""

export class BookInfoRepo extends Effect.Service<BookInfoRepo>()("BookInfoRepo", {
  dependencies: [RepoDefault, UserRepo.Default, UserRepo.UserFromIdLayer],
  effect: Effect.gen(function*() {
    const seed = "sample"
    const userRepo = yield* UserRepo
    const resolver = yield* UserFromIdResolver

    const makeInitial = yield* Effect.cached(
      seed === "sample"
        ? userRepo
          .all
          .pipe(
            Effect.andThen((users) =>
              users
                .flatMap((_) => [_, _])
                .map((user, i) =>
                  new BookInfo({
                    title: NonEmptyString255("Test post " + i),
                    body: NonEmptyString2k("imma test body"),
                    author: user,
                    price: NonNegativeBigInt(100)
                  }, true)
                )
            )
          )
        : Effect.succeed([])
    )

    return yield* Model.makeRepo(
      "BookInfo",
      BookInfo,
      {
        makeInitial,
        schemaContext: Context.make(UserFromIdResolver, resolver)
      }
    )
  })
}) {
}
