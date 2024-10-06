# # Step 1: Define variables
# # Name of the docker-compose file (optional if it's the default docker-compose.yml)
# COMPOSE_FILE = docker-compose.yml
# SERVICE_NAME = app # The service name defined in your docker-compose.yml

# # Step 2: Build the Docker images for the services defined in the docker-compose.yml
# build:
# 	@echo "Building Docker images..."
# 	docker-compose -f $(COMPOSE_FILE) build

# # Step 3: Run the containers in the background (detached mode)
# up:
# 	@echo "Starting Docker containers..."
# 	docker-compose -f $(COMPOSE_FILE) up -d

# # Step 4: Stop the running containers
# stop:
# 	@echo "Stopping Docker containers..."
# 	docker-compose -f $(COMPOSE_FILE) stop

# # Step 5: Clean up the containers
# clean:
# 	@echo "Removing stopped containers..."
# 	docker-compose -f $(COMPOSE_FILE) rm -f

# # Step 6: Bring down the containers and remove all volumes, networks, etc.
# down:
# 	@echo "Shutting down and cleaning up Docker containers, networks, and volumes..."
# 	docker-compose -f $(COMPOSE_FILE) down

# # Step 7: View the logs of the running containers
# logs:
# 	@echo "Fetching logs from Docker containers..."
# 	docker-compose -f $(COMPOSE_FILE) logs -f

# # Step 8: Restart the services
# restart:
# 	@echo "Restarting Docker services..."
# 	docker-compose -f $(COMPOSE_FILE) restart

# # Step 9: Run tests (Optional)
# # If you have a testing service or want to run tests in a specific service container.
# test:
# 	@echo "Running tests in the $(SERVICE_NAME) service..."
# 	docker-compose -f $(COMPOSE_FILE) run $(SERVICE_NAME) npm test

# # Step 10: Rebuild and restart
# # Rebuild the services and bring them up in one step
# rebuild:
# 	@echo "Rebuilding and restarting Docker services..."
# 	make down
# 	make build
# 	make up

# # Step 11: Default target
# # If no target is specified, the default is to build and run the services
# .DEFAULT_GOAL := up
