# ==========================================
# Phase 1: Build & Source Compilation
# ==========================================
FROM node:20-alpine AS builder
WORKDIR /app

# Copy system dependency configs
COPY package*.json ./

# Install dev & production dependencies
RUN npm install

# Copy all engineering assets and source code
COPY . .

# Run the bundle build (Vite compilation & server bundling via esbuild)
RUN npm run build

# ==========================================
# Phase 2: Lightweight Production Runner
# ==========================================
FROM node:20-alpine AS runner
WORKDIR /app

# Set active runtime boundaries
ENV NODE_ENV=production

# Copy dependency configs
COPY package*.json ./

# Install ONLY production dependencies to optimize container footprint
RUN npm install --omit=dev

# Copy compiled bundles and assets from compiling stage
COPY --from=builder /app/dist ./dist

# Standard container port ingress mapping (aligned with port 3000)
EXPOSE 3000

# Fire production runtime command
CMD ["npm", "run", "start"]
