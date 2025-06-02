# @effect-app-boilerplatetestr

## 🛠️ Setup

1. Installa le dipendenze dalla root del progetto:

   ```bash
   pnpm i
   ```

2. In VS Code, apri un file TypeScript e imposta la versione TypeScript del workspace:

   * Apri la Command Palette (`Ctrl+Shift+P`)
   * Seleziona **TypeScript: Select TypeScript Version**
   * Clicca su **Use Workspace Version**

---

## ▶️ Esecuzione

### API, Models, Resources

1. Compila tutto il workspace:

   ```bash
   pnpm build -w
   ```

2. Avvia l'API:

   ```bash
   cd api && pnpm dev
   ```

* Visita: [http://localhost:3610/docs](http://localhost:3610/docs)
* L'API è anche proxyata nel frontend su `/api`.

---

### Frontend (Nuxt)

Avvia l'app frontend:

```bash
cd frontend && pnpm dev -o
```

* Visita: [http://localhost:4000](http://localhost:4000)
* Documentazione API (proxy): [http://localhost:4000/api/docs](http://localhost:4000/api/docs)

---

## 💡 Note utili

### Estensioni VS Code

Disinstalla **Vetur** se presente. Assicurati di avere solo:

* [Vue.volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar)
* [Vue.vscode-typescript-vue-plugin](https://marketplace.visualstudio.com/items?itemName=Vue.vscode-typescript-vue-plugin)

---

### ⌨️ Suggerimento per editor

Aggiungi questo shortcut nei tuoi keybindings (`.vscode/keybindings.json`) per importare automaticamente:

```json
{
  "key": "ctrl+shift+i",
  "command": "editor.action.sourceAction",
  "args": {
    "kind": "source.addMissingImports",
    "apply": "first"
  }
}
```
