import { Router } from "#lib/routing"
import { BookInfo } from "#models/Book"
import { LibraryRsc } from "#resources"
import { Effect } from "effect-app"
import { UserRepo } from "./services/DBContext.js"
import { BookInfoRepo } from "./services/DBContext/BookInfoRepo.js"

export default Router(LibraryRsc)({
  dependencies: [BookInfoRepo.Default, UserRepo.Default],
  *effect(match) {
    const bookInfoRepo = yield* BookInfoRepo
    const userRepo = yield* UserRepo

    return match({
      CreateBook: (req) =>
        userRepo.getCurrentUser.pipe(
          Effect.andThen((author) => (new BookInfo({ ...req, author }, true))),
          Effect.tap(bookInfoRepo.save)
        )
    })
  }
})
