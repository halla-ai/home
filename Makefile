.DEFAULT_GOAL := help
.PHONY: help install dev build preview clean

help:  ## Display this help
	@awk 'BEGIN {FS = ":.*##"; printf "\nUsage:\n  make \033[36m<target>\033[0m\n"} /^[a-zA-Z_-]+:.*?##/ { printf "  \033[36m%-15s\033[0m %s\n", $$1, $$2 } /^##@/ { printf "\n\033[1m%s\033[0m\n", substr($$0, 5) } ' $(MAKEFILE_LIST)

##@ Development

install: ## Install dependencies (pnpm)
	@cd astro && pnpm install

dev: ## Start dev server (localhost:4321)
	@cd astro && pnpm dev

build: ## Production build → astro/dist/
	@cd astro && pnpm build

preview: ## Preview production build
	@cd astro && pnpm preview

clean: ## Remove build artifacts
	@rm -rf ./astro/dist
