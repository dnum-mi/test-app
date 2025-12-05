# Test App

Ce dépôt est un dépôt de test pour expérimenter avec la CI/CD et les workflows réutilisables.

## Description

Ce projet contient une application simple composée d'un client et d'un serveur pour tester les pipelines CI/CD, les déploiements Docker et Kubernetes. Il permet principalement de tester les workflows réutilisables et les configurations d'infrastructure.

Le déploiement Helm de cette application est géré dans le dépôt [`test-helm`](https://github.com/dnum-mi/test-helm).

## Structure

- `apps/` - Applications de l'écosystème
  - `client/` - Application client frontend
  - `server/` - Application serveur backend
- `docker/` - Configurations Docker Compose pour dev et prod
- `ci/` - Configuration pour l'intégration continue
  - `kind/` - Scripts et configuration pour tester avec Kubernetes (Kind)
- `.github/workflows/` - Workflows GitHub Actions
- `.gitlab-ci-dso.yml` - Pipeline GitLab CI

## Utilisation

### Docker

```bash
# Développement
bun run docker:dev:build
bun run docker:dev

# Production
bun run docker:prod:build
bun run docker:prod
```

### Kubernetes (Kind)

```bash
# Initialiser le cluster Kind
bun run kube:init

# Développement
bun run kube:dev

# Production
bun run kube:prod

# Nettoyer
bun run kube:clean
```

## Notes

Ce dépôt est destiné uniquement à des fins de test et d'expérimentation.
