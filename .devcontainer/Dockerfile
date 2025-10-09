FROM mcr.microsoft.com/devcontainers/typescript-node:22-bookworm

# Combinar comandos apt en una sola capa y limpiar cache
RUN apt-get update \
    && export DEBIAN_FRONTEND=noninteractive \
    && apt-get upgrade -y \
    && apt-get install -y --no-install-recommends \
    gnupg2 \
    socat \
    && rm -rf /var/lib/apt/lists/*

# Habilitar Corepack y configurar Yarn 4 como versión global
# RUN npm install -g yarn@berry
RUN corepack enable

# Agregar alias de git
RUN echo "alias arbolito='git log --all --graph --decorate --oneline'" >> /etc/bash.bashrc
