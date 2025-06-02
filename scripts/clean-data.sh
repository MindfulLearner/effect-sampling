# remove existing data
rm -rf api/.data

# we cannot kill all the processes because of the vscode terminal task

# kill nodemon not needed
# pkill -f "nodemon" || true

# kill api not needed
# pkill -f "/api.*node" || true

# kill frontend
pkill -f "/frontend.*node" || true

# kill tsx not needed
# pkill -f "tsx.*./src/main.ts" || true

# kill watch
pkill -f "tsc --build.*--watch" || true
pkill -f "pnpm dev" || true
# pkill -f "pnpm watch" || true

# add autoclose of terminal session
# killall -9 node

# cannot make a clean and develop task because it kills the vscode terminal task i think
# this kill if name dir is different from scanner
# pkill -f "$(basename $(pwd)).*node" 

# this only kills if name dir is api or frontend
# pkill -f "$(basename $(pwd))/api.*node" || true
# pkill -f "$(basename $(pwd))/frontend.*node" || true


# this kill if name dir is scanner
# pkill -f "scanner.*node"

# wait for 0.1 second this is needed because of pkill beign too fast
sleep 0.1