# To do stuff with make, you type `make` in a directory that has a file called
# "Makefile".  You can also type `make -f <makefile>` to use a different filename.
#
# A Makefile is a collection of rules. Each rule is a recipe to do a specific
# thing, sort of like a grunt task or an npm package.json script.
#
# A rule looks like this:
#
# <target>: <prerequisites...>
# 	<commands>
#
# The "target" is required. The prerequisites are optional, and the commands
# are also optional, but you have to have one or the other.
#
# Type `make` to show the available targets and a description of each.
#
.DEFAULT_GOAL := help
.PHONY: help
help:  ## Display this help
	@awk 'BEGIN {FS = ":.*##"; printf "\nUsage:\n  make \033[36m<target>\033[0m\n"} /^[a-zA-Z_-]+:.*?##/ { printf "  \033[36m%-25s\033[0m %s\n", $$1, $$2 } /^##@/ { printf "\n\033[1m%s\033[0m\n", substr($$0, 5) } ' $(MAKEFILE_LIST)


##@ Clean-up

clean: ## clean up the repo
	@rm -rf ./_site ./site/.jekyll-cache

##@ Utilities

large-files: ## show the 20 largest files in the repo
	@find . -printf '%s %p\n'| sort -nr | head -20

disk-usage: ## show the disk usage of the repo
	@du -h -d 2 .

git-sizer: ## run git-sizer
	@git-sizer --verbose

gc-prune: ## garbage collect and prune
	@git gc --prune=now

##@ Setup

install-jekyll: ## install jekyll
	@export GEM_HOME="$${HOME}/.gem"; \
	export PATH="$${GEM_HOME}/bin:$${PATH}"; \
	gem install jekyll bundler

install-bundle: install-jekyll ## install bundle
	@export GEM_HOME="$${HOME}/.gem"; \
	export PATH="$${GEM_HOME}/bin:$${PATH}"; \
	cd site && bundle install

##@ Serve

serve: clean install-bundle ## serve the site locally
	@export GEM_HOME="$${HOME}/.gem"; \
	export PATH="$${GEM_HOME}/bin:$${PATH}"; \
	cd site && bundle exec jekyll serve --livereload -d ../_site
