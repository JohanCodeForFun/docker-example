Build docker image:
docker build -t my-node-app .

Run docker image:
docker run -p 3000:3000 my-node-app

List running containers:
docker ps

Stop a container:
docker stop <container-id>

Remove a container:
docker rm <container-id>