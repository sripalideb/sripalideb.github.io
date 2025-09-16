.PHONY: build
build: clean install-deps build-css hugo-build

.PHONY: clean
clean:
	rm -rf public/

.PHONY: install-deps
install-deps:
	cd themes/sri-theme/ && npm install

.PHONY: build-css
build-css:
	cd themes/sri-theme/ && npm run build-css

.PHONY: hugo-build
hugo-build:
	hugo build

.PHONY: rebuild
rebuild: build

.PHONY: dev
dev: clean install-deps build-css
	hugo serve

.PHONY: help
help:
	@echo "Available targets:"
	@echo "  build      - Full build process (clean, install deps, build CSS, hugo build)"
	@echo "  clean      - Remove public/ directory"
	@echo "  install-deps - Install npm dependencies in theme"
	@echo "  build-css  - Build CSS in theme"
	@echo "  hugo-build - Run hugo build"
	@echo "  dev        - Development build with hugo serve"
	@echo "  help       - Show this help message"