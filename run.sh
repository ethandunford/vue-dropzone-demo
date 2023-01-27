echo "==> 🔨 lets build the development enviroment"
DOCKER_BUILDKIT=1 docker build -t node17 .

docker run --rm \
    -it \
    -v "$(pwd)/src":/home/node/app \
    -w /home/node/app \
    --name=vuedropzonedemo \
    -p 5173:5173 \
    node17 \
    bash