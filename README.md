# docker-node-mongo-starter
This repository features a Dockerized application built with Node.js and MongoDB.
# Docker and Node.js Command Reference

# Docker and Node.js Command Reference

## Docker Basic Commands

### Build and Run

```bash
# Build Docker image
docker build -t name_img .

# Run Docker container
docker run -d -p 8080:80 name_img
```

### Container Management

```bash
# List all containers
docker ps -aq  # 'q' for IDs

# Remove all containers
docker rm $(docker ps -aq)

# Stop all running containers
docker stop $(docker ps -aq)

# Start a bash shell session
docker exec -it name_container bash

# Display images
docker images

# Display container logs
docker logs container
```

### Running Containers with Volumes

```bash
# Hot reload (No need to rebuild the image)
docker run -v /Users/amel-has/Desktop/inception/project/srcs/requirements/mariadb:/app -d -p 3306:3306 --name mariadb-container name_img

# Read-only volume
docker run -v $(pwd):/app:ro -d -p 3306:3306 --name mariadb-container name_img

# Anonymous volume
docker run -v repownatsave -d -p 3306:3306 --name mariadb-container name_img

# Bind mount
docker run -d -it --name devtest --mount type=bind,source="$(pwd)"/target,target=/app nginx:latest
```

### Volume Behavior Differences

- Using -v or --volume:
• Creates endpoint if it doesn't exist on Docker host
• Always created as a directory
- Using --mount:
• Doesn't create endpoint if it doesn't exist
• Generates an error instead

## Default Ports

| MariaDB | 3306 |
| --- | --- |
| WordPress | 80 (HTTP), 443 (HTTPS) |
| Nginx | 80 (HTTP), 443 (HTTPS) |

## Node.js Commands

```bash
npm init
npm install
npm run nodemon
node index.js
```

## Docker Compose

```bash
# Start containers
docker-compose up -d

# Stop and remove containers
docker-compose down
```