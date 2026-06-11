# Integra Global Manufacturing — Kubernetes Operations Guide

This directory contains production-grade Kubernetes manifests to host, manage, and scale the Integra Global Manufacturing portal in any compatible Kubernetes cluster (EKS, GKE, AKS, or microk8s/minikube).

## Directory Structure

*   **`secret.yaml`**: Secure container for sensitive environment configurations (such as the `GEMINI_API_KEY`).
*   **`configmap.yaml`**: Houses non-sensitive parameters (`APP_URL`, `NODE_ENV`).
*   **`deployment.yaml`**: Standard 3-replica stateless container setup. Governs memory limits, liveness and readiness health-checking probes against `/api/health`, rolling updates, and non-root security contexts.
*   **`service.yaml`**: Exposes the internal app port `3000` as a high-performance in-cluster `ClusterIP` on standard port `80`.
*   **`ingress.yaml`**: Establishes reverse proxy routing using TLS certificates and `ingress-nginx` ingress mapping.

---

## Deployment Playbook

### Step 1: Clone & Configure Credentials

Update the placeholders inside the YAML files to reflect your active network credentials:

1.  **Configure Secret Credentials (`secret.yaml`)**:
    Change `YOUR_RAW_GEMINI_API_KEY` to your valid Google Gemini API Key. Kubernetes handles the automatic base64 encoding when applied.

2.  **Configure Environment Parameters (`configmap.yaml`)**:
    Set `APP_URL` to reflect your target production hostname (e.g., `https://integra-portal.example.com`).

3.  **Specify Target Container Image (`deployment.yaml`)**:
    Under the `spec.template.spec.containers[0].image` node, update the image tag with your compiled container registry URL (e.g., `your-dockerhub-id/integra-portal:v1.0.0`).

4.  **Configure Local Host Resolution (`ingress.yaml`)**:
    Update `integra-portal.example.com` to point to your live URL / domain name.

---

### Step 2: Apply the Resources in Sequence

To provision all the elements successfully inside your active Kubernetes context, execute the following commands:

```bash
# 1. Create Secrets and ConfigMaps first
kubectl apply -f secret.yaml
kubectl apply -f configmap.yaml

# 2. Deploy the core application
kubectl apply -f deployment.yaml

# 3. Expose inside the cluster
kubectl apply -f service.yaml

# 4. Bind ingress routes to receive external web traffic
kubectl apply -f ingress.yaml
```

---

### Step 3: Verify & Monitor Status

Use the standard operations commands to verify that all systems are green:

```bash
# Check Pod status
kubectl get pods -l app=integra-portal -w

# Check active logs for the web application
kubectl logs -l app=integra-portal --tail=100 -f

# Check Ingress host assignation and IP endpoint binding
kubectl get ingress integra-portal-ingress

# Execute a health probe directly inside the cluster
kubectl exec -it deploy/integra-portal -- curl http://localhost:3000/api/health
```

---

## Technical Features Implemented

*   **Zero-Downtime Rolling Updates**: Configured using a rolling update strategy with a `maxSurge: 1` and `maxUnavailable: 0` to assure active requests are gracefully handles during updates.
*   **Active Pod Sanitization**: Configured with `securityContext` settings to drop system privileges (`allowPrivilegeEscalation: false`, `runAsNonRoot: true`) asserting secure multi-tenant execution.
*   **Fail-Soft Native Health Probes**: Seamless integration with the server-side `/api/health` route with custom startup budgets preventing cascading failovers during heavy processing sessions.
