# Stage 1: Build
FROM node:20-slim AS build
WORKDIR /myapp

# Copy package files and install ALL deps
COPY package*.json ./
RUN npm ci

# Copy source code and build
COPY . .
RUN npm run build

# Stage 2: Runtime (Nginx serves static files)
FROM nginx:alpine
WORKDIR /usr/share/nginx/html

# Clean default Nginx content
RUN rm -rf ./*

# Copy built frontend files from build stage
COPY --from=build /myapp/dist .

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]

