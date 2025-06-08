<script setup lang="ts">
import { LibraryRsc } from "#resources"
import { S } from "effect-app"

const libraryClient = clientFor(LibraryRsc)

const [, createBook] = useSafeMutation(libraryClient.CreateBook)
</script>

<template>
  <div>
    <h1>Library</h1>
    <v-btn
      @click="
        run(
          createBook({
            title: S.NonEmptyString255(new Date().toString()),
            body: S.NonEmptyString2k('SWAGscs'),
          }),
        )
      "
    >
      Create Book
    </v-btn>
  </div>
</template>

<style scoped>
.library {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
</style>
