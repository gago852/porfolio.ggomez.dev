FROM mcr.microsoft.com/devcontainers/typescript-node:1-22-bookworm
RUN sudo apt update && export DEBIAN_FRONTEND=noninteractive && sudo apt upgrade -y && sudo apt-get install gnupg2 -y
RUN sudo apt-get install socat -y
RUN echo "alias arbolito='git log --all --graph --decorate --oneline'" >> /etc/bash.bashrc