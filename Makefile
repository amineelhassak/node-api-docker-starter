# Define ANSI color codes
GREEN := \033[32m
YELLOW := \033[33m
RED := \033[31m
RESET := \033[0m

# Step 1: Define variables
# Name of the docker-compose file (optional if it's the default docker-compose.yml)
COMPOSE_FILE = docker-compose.yml  # Corrected file name
SERVICE_NAME = app # The service name defined in your docker-compose.yml

# Step 2: Build the Docker images for the services defined in the docker-compose.yml
build:
	@echo "$(YELLOW)Building Docker images...$(RESET)"
	@sleep 1
	docker-compose -f $(COMPOSE_FILE) build

# Step 3: Run the containers in the background (detached mode)
up:
	@echo "$(GREEN)Starting Docker containers...$(RESET)"
	@sleep 1
	docker-compose -f $(COMPOSE_FILE) up -d

# Step 4: Stop the running containers
stop:
	@echo "$(RED)Stopping Docker containers...$(RESET)"
	@sleep 1
	docker-compose -f $(COMPOSE_FILE) stop

# Step 5: Clean up the containers
clean:
	@echo "$(YELLOW)Removing stopped containers...$(RESET)"
	@sleep 1
	docker-compose -f $(COMPOSE_FILE) rm -f

# Step 6: Bring down the containers and remove all volumes, networks, etc.
down:
	@echo "$(RED)Shutting down and cleaning up Docker containers, networks, and volumes...$(RESET)"
	@sleep 1
	docker-compose -f $(COMPOSE_FILE) down

# Step 7: View the logs of the running containers
logs:
	@echo "$(GREEN)Fetching logs from Docker containers...$(RESET)"
	@sleep 1
	docker-compose -f $(COMPOSE_FILE) logs -f

# Step 8: Restart the services
restart:
	@echo "$(YELLOW)Restarting Docker services...$(RESET)"
	@sleep 1
	docker-compose -f $(COMPOSE_FILE) restart

# Step 9: Run tests (Optional)
# If you have a testing service or want to run tests in a specific service container.
test:
	@echo "$(GREEN)Running tests in the $(SERVICE_NAME) service...$(RESET)"
	@sleep 1
	docker-compose -f $(COMPOSE_FILE) run $(SERVICE_NAME) npm test

# Step 10: Rebuild and restart
# Rebuild the services and bring them up in one step
rebuild:
	@echo "$(YELLOW)Rebuilding and restarting Docker services...$(RESET)"
	@sleep 1
	make down
	make build
	make up

# Step 11: Default target
# If no target is specified, the default is to build and run the services
.DEFAULT_GOAL := up
